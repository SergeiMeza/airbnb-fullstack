import * as Redis from 'ioredis'

export const redis = new Redis()

redis.on('connect', () => console.log('Redis connected'))
