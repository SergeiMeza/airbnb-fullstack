import * as mongodb from 'mongodb'

const MongoClient = mongodb.MongoClient
const mongoDbURL = 'mongodb://localhost:27017/airbnb_alpha?retryWrites=true'

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

export const db = { initMongo, getMongo }
