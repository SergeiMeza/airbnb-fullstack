import bcrypt from 'bcryptjs'
import { MutationResolvers } from '../../graphqlgen/generated/graphqlgen'
import {
  RESOLVER_NOT_IMPLEMENTED,
  LOGIN_USER_NOT_FOUND,
  INVALID_USER_CREDENTIALS,
  USER_ALREADY_REGISTERED,
} from '../../utils'
import { db } from '../../db'
import { validUserSchema } from '@airbnb-fullstack/common'
import { generateToken } from '../../utils/jwt'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,

  sendForgotPasswordEmail: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },

  forgotPasswordChange: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
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
      me: { email },
      token: generateToken({ u: { email } }),
      errors: [],
    }
  },

  logout: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },

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
        me: { email: user.email },
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
}
