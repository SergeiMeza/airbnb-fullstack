import * as Express from 'express'
import * as ResponseTime from 'response-time'

import { db } from './db'
import { redis } from './redis'

import { GraphQLServer } from 'graphql-yoga'
import { resolvers } from './resolvers'
import {
  ContextParameters,
  Options,
  UploadOptions,
} from 'graphql-yoga/dist/types'

const graphqlServer = new GraphQLServer({
  typeDefs: __dirname + '/schema.graphql',
  resolvers: resolvers as any,
  context: (contextParams: ContextParameters) => ({
    request: contextParams.request,
    connection: contextParams.connection,
  }),
})

graphqlServer.express.use(ResponseTime())
graphqlServer.express.use(Express.json())

const uploads: UploadOptions = {
  maxFieldSize: 10_000_000, // 10 MB
  maxFileSize: 10_000_000, // 10 MB
  maxFiles: 10,
}

const options: Options = {
  cors: { origin: true, credentials: true },
  tracing: true,
  cacheControl: true,
  port: '4000',
  endpoint: '/graphql',
  subscriptions: '/graphql',
  playground: '/graphql',
  uploads,
}

db.initMongo(async (error, client) => {
  if (error) console.log(error)
  else {
    await redis.setex('server', 15, 'started')
    graphqlServer.start(options, async ({ port }) => {
      console.log(`Server started at port: ${port}`)
    })
  }
})
