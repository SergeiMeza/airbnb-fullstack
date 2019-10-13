import { MutationResolvers } from '../../graphqlgen/generated/graphqlgen'
import {
  RESOLVER_NOT_IMPLEMENTED,
  LOGIN_USER_NOT_FOUND,
} from '../../helpers/errorMessages'
import { db } from '../../db'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  sendForgotPasswordEmail: (parent, args, ctx) => {
    throw new Error(
      JSON.stringify({
        message: RESOLVER_NOT_IMPLEMENTED,
        path: 'sendForgotPasswordEmail',
      }),
    )
  },
  forgotPasswordChange: (parent, args, ctx) => {
    throw new Error(
      JSON.stringify({
        message: RESOLVER_NOT_IMPLEMENTED,
        path: 'forgotPasswordChange',
      }),
    )
  },
  login: async (parent, { email, password }, ctx) => {
    const response = await db
      .getMongo()
      .db()
      .collection('USER')
      .findOne({ email, password })
    if (!response) {
      throw new Error(
        JSON.stringify({ message: LOGIN_USER_NOT_FOUND, path: 'login' }),
      )
    }
    console.log('🚀 db.response:', JSON.stringify(response, null, 2))
    return null
  },
  logout: (parent, args, ctx) => {
    throw new Error(
      JSON.stringify({
        message: RESOLVER_NOT_IMPLEMENTED,
        path: 'logout',
      }),
    )
  },
  register: async (parent, { email, password }, ctx) => {
    const response = await db
      .getMongo()
      .db()
      .collection('USER')
      .insertOne({ email, password })
    console.log('🚀 db.response:', JSON.stringify(response, null, 2))
    return null
  },
}
