import { QueryResolvers } from '../../graphqlgen/generated/graphqlgen'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: (parent, args, ctx) => {
    return null
    // return {
    //   email: 'bob@bob.com',
    // }
    // throw new Error(RESOLVER_NOT_IMPLEMENTED)
  },
}
