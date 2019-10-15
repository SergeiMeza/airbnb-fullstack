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

    const response = await db
      .getMongo()
      .db()
      .collection('USER')
      .findOne({ email, password })

    if (!response) {
      return {
        me: null,
        token: null,
        errors: [{ path: 'password', message: LOGIN_USER_NOT_FOUND }],
      }
    }

    console.log('🚀 db.response:', JSON.stringify(response, null, 2))

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

    const response = await db
      .getMongo()
      .db()
      .collection('USER')
      .insertOne({ email, password })

    console.log('🚀 db.response:', JSON.stringify(response, null, 2))

    return {
      me: { email },
      token: generateToken({ email }),
      errors: [],
    }
  },
}
