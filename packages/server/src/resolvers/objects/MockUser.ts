import { MockUserResolvers } from '../../graphqlgen/generated/graphqlgen'

export const MockUser: MockUserResolvers.Type = {
  ...MockUserResolvers.defaultResolvers,
}
