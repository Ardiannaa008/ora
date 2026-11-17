// Ora back end. Weekend 2: only GET /health, no features yet.
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { prisma } from './db.js'

const app = express()
const port = process.env.PORT || 3001

app.use(cors({ origin: process.env.FRONTEND_ORIGIN || 'http://localhost:5173' }))
app.use(express.json())

// Health check: answers "ok" only if the database also answers.
app.get('/health', async (req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`
    res.json({ status: 'ok', database: 'ok' })
  } catch (error) {
    console.error('Health check: database error', error)
    res.status(503).json({ status: 'error', database: 'error' })
  }
})

app.listen(port, () => {
  console.log(`Ora back end listening on http://localhost:${port}`)
})
