import { QueryResolvers } from '../../graphqlgen/generated/graphqlgen'
import { RESOLVER_NOT_IMPLEMENTED } from '../../helpers/errorMessages'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: (parent, args, ctx) => {
    return {
      email: 'bob@bob.com',
      password: '1290qwopASKL',
    }
    // throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },
}
