import Redis from 'ioredis'

export const redis = new Redis(
  process.env.NODE_ENV === 'dev' ? 6379 : undefined,
  process.env.NODE_ENV === 'dev' ? 'host.docker.internal' : undefined,
)

redis.on('connect', () => console.log('Redis connected'))
