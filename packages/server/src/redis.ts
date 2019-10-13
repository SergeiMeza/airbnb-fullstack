import * as Redis from 'ioredis'

export const redis = new Redis(
  undefined,
  process.env.NODE_ENV === 'local' ? 'host.docker.internal' : undefined,
)

redis.on('connect', () => console.log('Redis connected'))
