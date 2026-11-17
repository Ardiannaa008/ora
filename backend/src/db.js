// One shared Prisma client for the whole back end.
// Prisma 7 talks to SQLite through a "driver adapter" (better-sqlite3).
import 'dotenv/config'
import { PrismaClient } from '@prisma/client'
import { PrismaBetterSqlite3 } from '@prisma/adapter-better-sqlite3'

const adapter = new PrismaBetterSqlite3({ url: process.env.DATABASE_URL })

export const prisma = new PrismaClient({ adapter })
