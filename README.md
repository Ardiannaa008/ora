# Ora

**Your salon, booked.** Ora gives every beauty salon its own branded online booking page, so clients book in 30 seconds and get a WhatsApp reminder, without the owner answering DMs all day.

## Start the project (3 commands)

You need [Node.js](https://nodejs.org) 20.19 or newer. Then, in this folder:

```bash
npm install
npm run db:migrate
npm run dev
```

- Landing page: http://localhost:5173
- Health check: http://localhost:3001/health → `{"status":"ok","database":"ok"}`
- Tables: `npm run db:studio` opens Prisma Studio in the browser (the database file is `backend/dev.db`)

## Docs

Everything about the product is in [`docs/`](docs/): [business](docs/business.md), [brand book](docs/brand-book.md), [rules and flows](docs/rules-and-flows.md), [stack](docs/stack.md), [data model](docs/data-model.md).
