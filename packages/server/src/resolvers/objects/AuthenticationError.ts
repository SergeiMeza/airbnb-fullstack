import { AuthenticationErrorResolvers } from '../../graphqlgen/generated/graphqlgen'

export const AuthenticationError: AuthenticationErrorResolvers.Type = {
  ...AuthenticationErrorResolvers.defaultResolvers,
}
