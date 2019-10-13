import { QueryResolvers } from '../../graphqlgen/generated/graphqlgen'
import { RESOLVER_NOT_IMPLEMENTED } from '../../helpers/errorMessages'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: (parent, args, ctx) => {
    throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },
}
