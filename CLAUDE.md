# CLAUDE.md: Ora

Ora is a booking system for beauty salons in North Macedonia and Kosovo: each salon gets its own branded booking page. It's a student project ("Rapid AI Development" course) by Ardiana.

## Rule #1: read `docs/` before you change anything

- `docs/business.md`: problem, market, pricing, interviews
- `docs/brand-book.md`: colours, fonts, logo, tone of voice (use exactly these)
- `docs/rules-and-flows.md`: roles, 3 flows, 13 business rules, what v1 will NOT do
- `docs/stack.md`: the stack and why
- `docs/data-model.md`: tables, relations, diagram

## Working rules

- Don't overwrite or reword files in `docs/` unless asked. Add new files instead.
- Keep attribution honest: the docs were drafted by Ardiana with Claude as a thinking partner.
- Ask before pushing to GitHub. Check that the 3 start commands still work before saying something is done.
- Customisation per salon happens through settings (database), never custom code per salon.
- Brand: Plum `#3D1E4F` text, Coral `#FF6B5B` buttons **with Plum text (never white)**, Cream `#FFF7F0` background. Fraunces SemiBold for headings, DM Sans for body. Use the CSS variables in `frontend/src/index.css`.
- Explain important decisions in plain words (Ardiana is learning).
- On Windows, VS Code can save an old open copy of a file over newer changes. Ask Ardiana to close files you're about to edit.

## Stack

- **Front end:** React 19 + Vite, JavaScript (`frontend/`)
- **Back end:** Node.js + Express 5, JavaScript, ES modules (`backend/`)
- **Database:** SQLite file `backend/dev.db` (gitignored) via **Prisma 7.10.1** with the `@prisma/adapter-better-sqlite3` driver adapter
- **Monorepo:** npm workspaces; `concurrently` runs both dev servers

## Folder layout

```
ora/
├─ docs/                     product docs (Weekend 1) + stack.md, data-model.md
├─ frontend/                 Vite + React landing page
│  ├─ public/                logo-light.svg, icon-light.svg (copies of docs/brand)
│  └─ src/                   App.jsx, App.css, index.css (brand tokens)
├─ backend/
│  ├─ src/server.js          Express app, GET /health
│  ├─ src/db.js              shared Prisma client
│  ├─ prisma/schema.prisma   data model (source of truth)
│  ├─ prisma/migrations/     committed migrations
│  ├─ prisma.config.js       Prisma 7 config (schema path, DATABASE_URL)
│  ├─ scripts/ensure-env.js  creates .env from .env.example
│  └─ .env.example           DATABASE_URL, PORT, FRONTEND_ORIGIN
├─ package.json              workspaces + scripts + allowScripts
└─ CLAUDE.md
```

## Commands (from the repo root)

```bash
npm install          # install everything (runs prisma generate)
npm run db:migrate   # create backend/.env if missing + apply migrations → backend/dev.db
npm run dev          # front end on http://localhost:5173, back end on http://localhost:3001
```

Other commands:

- `npm run db:studio`: browse the tables in Prisma Studio
- `npm run db:migrate:new --workspace backend -- --name <change>`: after editing `schema.prisma`, create a new migration (dev only)
- `npm run build`: production build of the front end

## Gotchas

- Prisma packages are pinned to exactly `7.10.1` (npm `latest` for `prisma` was an 8.0 RC). Keep CLI and client on the same version.
- npm 11 blocks dependency install scripts. `prisma`, `@prisma/engines` and `better-sqlite3` are approved in `allowScripts` (root `package.json`), pinned to versions. When you upgrade them, run `npm approve-scripts <pkg>` again.
- If `better-sqlite3` says "Could not locate the bindings file", run `npm rebuild better-sqlite3`.

## Current scope (Weekend 2)

Only the frame exists: the landing page, `/health`, and the tables. **No endpoints or features yet.**
