# mateuszpytlak.dev

Personal portfolio site — [mateuszpytlak.dev](https://mateuszpytlak.dev)

## Stack

- React 19 + TypeScript (strict)
- Vite 7
- Tailwind CSS v4
- React Router v7
- Zod
- Vitest + React Testing Library

## Getting started

```bash
npm install
cp .env.example .env   # fill in the required values
npm run dev
```

## Environment variables

See `.env.example` for all variables. Required for full functionality:

| Variable | Description |
|---|---|
| `VITE_FORMSPREE_ENDPOINT` | Formspree form URL — get from [formspree.io](https://formspree.io) |
| `VITE_SENTRY_DSN` | Sentry DSN for error tracking — leave empty to disable |

## Scripts

```bash
npm run dev        # development server
npm run build      # type-check + production build
npm run lint       # ESLint
npm run test       # Vitest watch mode
npm run test:run   # Vitest single run (CI)
npm run coverage   # test coverage report
```

## Deployment

Deployed on Vercel via Git integration — every push to `master` triggers a production deploy. `vercel.json` configures SPA routing rewrites.

To deploy your own instance:
1. Fork the repo and connect to Vercel
2. Add environment variables in **Vercel → Settings → Environment Variables**
3. Push to trigger a deploy
