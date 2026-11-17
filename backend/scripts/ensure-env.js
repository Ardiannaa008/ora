// Creates backend/.env from .env.example the first time, so a classmate
// who just cloned the repo doesn't have to make it by hand. Never overwrites.
import { copyFileSync, existsSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const backendDir = join(dirname(fileURLToPath(import.meta.url)), '..')
const envFile = join(backendDir, '.env')
const exampleFile = join(backendDir, '.env.example')

if (existsSync(envFile)) {
  console.log('backend/.env already exists, keeping it.')
} else {
  copyFileSync(exampleFile, envFile)
  console.log('Created backend/.env from .env.example.')
}
