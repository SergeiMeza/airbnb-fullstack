import { Resolvers } from '../graphqlgen/generated/graphqlgen'

import { Query } from './queries'
import { Mutation } from './mutations'
import { User } from './objects'
import { Error } from './objects'

export const resolvers: Resolvers = {
  Query,
  Mutation,
  User,
  Error,
}
