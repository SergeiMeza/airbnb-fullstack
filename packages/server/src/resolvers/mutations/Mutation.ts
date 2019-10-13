import { MutationResolvers } from '../../graphqlgen/generated/graphqlgen'
import { RESOLVER_NOT_IMPLEMENTED } from '../../helpers/errorMessages'

export const Mutation: MutationResolvers.Type = {
  ...MutationResolvers.defaultResolvers,
  sendForgotPasswordEmail: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },
  forgotPasswordChange: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },
  login: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },
  logout: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },
  register: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },
}
