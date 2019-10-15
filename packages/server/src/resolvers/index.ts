import { Resolvers } from '../graphqlgen/generated/graphqlgen'

import { Query } from './queries'
import { Mutation } from './mutations'
import Objects from './objects'
import Results from './results'

export const resolvers: Resolvers = {
  Query,
  Mutation,
  ...Objects,
  ...Results,
}
