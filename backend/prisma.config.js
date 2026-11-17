// Prisma 7 config: tells the Prisma CLI where the schema, migrations and database are.
// The database URL comes from backend/.env (created from .env.example by `npm run db:migrate`).
import 'dotenv/config'
import { defineConfig, env } from 'prisma/config'

export default defineConfig({
  schema: 'prisma/schema.prisma',
  migrations: {
    path: 'prisma/migrations',
  },
  datasource: {
    url: env('DATABASE_URL'),
  },
})
