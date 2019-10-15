import mongodb from 'mongodb'
import { Prisma } from './airbnb-service/generated/prisma-client'

const MongoClient = mongodb.MongoClient
const mongoDbURL =
  process.env.NODE_ENV === 'dev'
    ? 'mongodb://host.docker.internal:27017/airbnb_alpha?retryWrites=true'
    : 'mongodb://localhost:27017/airbnb_alpha?retryWrites=true'

let _client: mongodb.MongoClient | undefined

const initMongo = callback => {
  if (_client) {
    console.log('Database is already initialized')
    return callback(null, _client)
  }
  MongoClient.connect(mongoDbURL)
    .then(client => {
      _client = client
      callback(null, _client)
    })
    .catch(err => callback(err))
}

const getMongo = () => {
  if (!_client) {
    throw Error('Database not initialized')
  }
  return _client
}

const prisma = new Prisma({ endpoint: 'http://localhost:4466/airbnb/alpha' })

export const db = { initMongo, getMongo, prisma }
