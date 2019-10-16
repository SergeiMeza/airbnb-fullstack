import { QueryResolvers } from '../../graphqlgen/generated/graphqlgen'
import { verifyToken } from '../../utils'

export const Query: QueryResolvers.Type = {
  ...QueryResolvers.defaultResolvers,
  me: (parent, args, ctx) => {
    try {
      const authorization = ctx.request.get('x-auth-token')
      if (!authorization) throw Error()
      const token = authorization.replace('Bearer ', '')
      const decodedUser: any = verifyToken(token)
      return {
        email: decodedUser.u.email,
      }
    } catch {
      return null
    }
  },
}
