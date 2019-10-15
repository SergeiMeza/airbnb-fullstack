import { MutationResolvers } from '../../graphqlgen/generated/graphqlgen'
import {
  RESOLVER_NOT_IMPLEMENTED,
  LOGIN_USER_NOT_FOUND,
  INVALID_USER_CREDENTIALS,
} from '../../helpers'
import { db } from '../../db'
import { validUserSchema } from '@airbnb-fullstack/common'
import { generateToken } from '../../helpers/jwt'

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

    if (!user || user.password !== password) {
      return {
        me: null,
        token: null,
        errors: [{ path: 'password', message: LOGIN_USER_NOT_FOUND }],
      }
    }

    return {
      me: { email },
      token: generateToken({ email }),
      errors: [],
    }
  },

  logout: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },

  register: async (parent, { email, password }, ctx) => {
    const isValidUser = validUserSchema.isValidSync({ email, password })
    if (!isValidUser) throw new Error(INVALID_USER_CREDENTIALS)

    const user = await db.prisma.createUser({ email, password })

    return {
      me: { email: user.email },
      token: generateToken({ email }),
      errors: [],
    }
  },
}
