# Ora: Tech stack (Weekend 2)

| Part | Choice | Why (one sentence) |
|---|---|---|
| **Front end** | **React 19 + Vite** (JavaScript) | I already know React, and Vite's official starter gives a fast dev server and a small production build for a mobile-friendly website (no native app, as `rules-and-flows.md` says). |
| **Back end** | **Node.js + Express 5** (JavaScript) | Express is the simplest, best-documented Node server, and using JavaScript on both sides means I only need one language. |
| **Database** | **SQLite** (one file: `backend/dev.db`) | Zero setup and no server to run, so a classmate can start the project with three commands. |
| **ORM / migrations** | **Prisma 7** (with the `better-sqlite3` driver adapter) | One readable `schema.prisma` file describes all tables, Prisma writes the migration SQL for me, and moving to Postgres later (e.g. Supabase, see `business.md` costs) is mostly a one-line change. |
| **Run both together** | **npm workspaces + concurrently** | One `npm install` installs both projects and one `npm run dev` starts both. |

## Versions pinned on purpose

- Prisma packages are pinned to **7.10.1**. In Nov 2026, npm's `latest` tag for the `prisma` CLI pointed to a release candidate (`8.0.0-rc`) while `@prisma/client` was on 7.10.1, and a mismatched CLI and client cause confusing errors.
- npm 11 blocks install scripts from dependencies by default. Only `prisma`, `@prisma/engines` and `better-sqlite3` are allowed (the `allowScripts` field in the root `package.json`), because they need their scripts to download the database engine and the SQLite native file.

## Ports

| What | Address |
|---|---|
| Landing page (Vite) | http://localhost:5173 |
| Back end (Express) | http://localhost:3001, health check at `/health` |
