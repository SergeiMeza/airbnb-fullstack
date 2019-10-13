import { UserResolvers } from '../../graphqlgen/generated/graphqlgen'

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
}
