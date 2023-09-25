import { env } from '@/env'
import { PrismaClient } from '@prisma/client'

export const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.DATABASE_URL + '&schema=' + process.env.DB_SCHEMA,
    },
  },
  log: env.NODE_ENV === 'dev' ? ['query'] : [],
})
