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

      const updatedUser: any = await db.prisma.updateUser({
        where: {
          email: decodedUser.u.email,
        },
        data: {
          firstName: args.firstName,
          lastName: args.lastName,
          birthdate: args.birthdate,
        },
      })

      updatedUser.media = null

      delete updatedUser.password

      const updatedToken = generateToken({
        u: {
          email: updatedUser.email,
          firstName: updatedUser.firstName,
          lastName: updatedUser.lastName,
          birthdate: updatedUser.birthdate,
        },
      })

      return {
        me: updatedUser,
        token: updatedToken,
      }
    } catch {
      throw new Error(NOT_AUTHORIZED)
    }
  },

  updateMeMedia: (parent, args, ctx) => {
    throw new Error('Resolver not implemented')
  },
}
