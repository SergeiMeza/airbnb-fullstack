import { createWriteStream } from 'fs'
import shortid from 'shortid'
import bcrypt from 'bcryptjs'
import { MutationResolvers } from '../../graphqlgen/generated/graphqlgen'
import {
  RESOLVER_NOT_IMPLEMENTED,
  LOGIN_USER_NOT_FOUND,
  INVALID_USER_CREDENTIALS,
  USER_ALREADY_REGISTERED,
  NOT_AUTHORIZED,
} from '../../utils'
import { db } from '../../db'
import { validUserSchema } from '@airbnb-fullstack/common'
import { generateToken, verifyToken } from '../../utils/jwt'

const storeUpload = async ({ stream, extension }): Promise<any> => {
  const id = shortid.generate()
  const path = `images/${id}.${extension}`

  return new Promise((resolve, reject) =>
    stream
      .on('finish', () => resolve({ id, path }))
      .pipe(createWriteStream(path))
      .on('error', reject),
  )
}

const processUpload = async upload => {
  const file = await upload
  const { createReadStream, mimetype } = await upload
  const stream = createReadStream()
  const extension = mimetype.split('/')[1]
  const { id } = await storeUpload({ stream, extension })
  return { id, mimetype, extension }
}

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  register: async (parent, { email, password }, ctx) => {
    const isValidUser = validUserSchema.isValidSync({ email, password })
    if (!isValidUser) throw new Error(INVALID_USER_CREDENTIALS)

    const salt = await bcrypt.genSalt(10)
    const encryptedPassword = await bcrypt.hash(password, salt)

    try {
      const user = await db.prisma.createUser({
        email,
        password: encryptedPassword,
      })

      return {
        me: {
          email: user.email,
          firstName: null,
          lastName: null,
          birthdate: null,
          media: null,
        },
        token: generateToken({ u: { email } }),
        errors: [],
      }
    } catch {
      return {
        me: null,
        token: null,
        errors: [{ path: 'email', message: USER_ALREADY_REGISTERED }],
      }
    }
  },

  login: async (parent, { email, password }, ctx) => {
    const isValidUser = validUserSchema.isValidSync({ email, password })
    if (!isValidUser) throw new Error(INVALID_USER_CREDENTIALS)

    const user = await db.prisma.user({ email })

    if (!user) {
      return {
        me: null,
        token: null,
        errors: [{ path: 'password', message: LOGIN_USER_NOT_FOUND }],
      }
    }
    const isValidPassword = await bcrypt.compare(password, user.password)

    if (!isValidPassword) {
      return {
        me: null,
        token: null,
        errors: [{ path: 'password', message: LOGIN_USER_NOT_FOUND }],
      }
    }

    return {
      me: {
        email,
        firstName: user.firstName || null,
        lastName: user.lastName || null,
        birthdate: user.birthdate || null,
        media: null,
      },
      token: generateToken({ u: { email } }),
      errors: [],
    }
  },

  logout: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },

  sendForgotPasswordEmail: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },

  forgotPasswordChange: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },

  updateMe: async (parent, args, ctx) => {
    try {
      const authorization = ctx.request.get('x-auth-token')
      if (!authorization) throw Error()
      const token = authorization.replace('Bearer ', '')
      const decodedUser: any = verifyToken(token)
      if (!decodedUser.u.email) throw new Error()

      const updatedUser = await db.prisma.updateUser({
        where: {
          email: decodedUser.u.email,
        },
        data: {
          firstName: args.firstName,
          lastName: args.lastName,
          birthdate: args.birthdate,
        },
      })

      const _updatedUser: any = updatedUser

      delete _updatedUser.password

      _updatedUser.media = updatedUser.profilePicture
        ? {
            url: updatedUser.profilePicture!.url,
            mimetype: updatedUser.profilePicture!.mimetype,
          }
        : null

      const updatedToken = generateToken({
        u: {
          email: _updatedUser.email,
          firstName: _updatedUser.firstName,
          lastName: _updatedUser.lastName,
          birthdate: _updatedUser.birthdate,
          media: _updatedUser.media,
        },
      })

      return {
        me: _updatedUser,
        token: updatedToken,
      }
    } catch {
      throw new Error(NOT_AUTHORIZED)
    }
  },

  updateMeMedia: async (parent, { media }, ctx) => {
    try {
      const authorization = ctx.request.get('x-auth-token')
      if (!authorization) throw Error()
      const token = authorization.replace('Bearer ', '')
      const decodedUser: any = verifyToken(token)
      if (!decodedUser.u.email) throw new Error()

      const { extension, id, mimetype } = await processUpload(media)

      const updatedUser = await db.prisma.updateUser({
        where: {
          email: decodedUser.u.email,
        },
        data: {
          profilePicture: {
            create: {
              url: `${id}.${extension}`,
              mimetype,
            },
          },
        },
      })

      if (!updatedUser) throw new Error(LOGIN_USER_NOT_FOUND)

      const _updatedUser: any = updatedUser
      delete _updatedUser.password

      _updatedUser.media = updatedUser.profilePicture
        ? {
            url: updatedUser.profilePicture!.url,
            mimetype: updatedUser.profilePicture!.mimetype,
          }
        : null

      const updatedToken = generateToken({
        u: {
          email: _updatedUser.email,
          firstName: _updatedUser.firstName,
          lastName: _updatedUser.lastName,
          birthdate: _updatedUser.birthdate,
          media: _updatedUser.media,
        },
      })

      return {
        me: _updatedUser,
        token: updatedToken,
      }
    } catch (error) {
      console.log('😅 error:', error)
      throw new Error(NOT_AUTHORIZED)
    }
  },
}
