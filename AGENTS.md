## Repo context
- Personal portfolio site showcasing frontend work to clients and employers.
- Stack: Vite 7 + React 19 + TypeScript 5.9 (strict) + Tailwind v4 + Zod 4.
- Deployed on Vercel. SPA routing handled via `vercel.json` rewrites.

## Structure
```
src/
  assets/         static images (PNG, JPG) imported directly in TS files
  components/     reusable layout pieces (PageShell, ErrorBoundary)
  data/           structured content — projects.ts, services.ts
  lib/            shared logic — contactSchema.ts (Zod schema)
  pages/          route-level components (Home, ProjectDetail, Privacy, NotFound)
    project-detail/  per-project overview components + Gallery, Sidebar
  sections/       page sections rendered inside Home (Hero, About, Projects, Contact, Footer, Header)
  test/           Vitest setup (setup.ts)
  index.css       global styles, CSS variables (design tokens), keyframe animations
  App.tsx         route definitions
  main.tsx        entry point (StrictMode + ErrorBoundary + BrowserRouter)
```

## Routing
- `/` → Home
- `/projects/:slug` → ProjectDetail (slug must match a key in `data/projects.ts`)
- `/apps/gp-tracker/privacy` → Privacy
- `*` → NotFound

## State and data
- Prefer local component state. No global store in this project.
- All content is static — add new projects to `src/data/projects.ts`.
- Contact form validates with Zod schema from `src/lib/contactSchema.ts` before fetch.

## Styling
- Tailwind-first. Avoid custom CSS unless clearly cleaner.
- CSS variables defined in `index.css` under `:root`: `--bg`, `--bg-alt`, `--surface`, `--text`, `--muted`, `--accent`, `--accent-2`, `--ring`, `--radius`.
- Use `var(--token)` for colors and `var(--radius)` for border-radius in arbitrary values.
- Fonts: Manrope (body), Space Grotesk (headings) — loaded from Google Fonts in `index.html`.
- Animations: meaningful only. Always respect `prefers-reduced-motion`.
- Dark mode only — no light mode toggle.

## Code style
- TypeScript strict. No `any`. Explicit types at module boundaries.
- Components in PascalCase, hooks in `useX` form.
- Inline types are fine; extract to a shared file only when reused across modules.
- Keep components small and focused.

## Testing
- Framework: Vitest + React Testing Library + jest-dom.
- Test files live next to the module they test (`foo.test.ts` / `foo.test.tsx`).
- Run: `npm run test` (watch) or `npm run test:run` (single pass for CI).
- Mock image imports with `vi.mock('../data/projects', ...)` when testing components that depend on `data/projects.ts`.
- Use `fireEvent.submit(form)` instead of `userEvent.click(button)` when a native `type="email"` input would otherwise block the `onSubmit` handler via HTML5 constraint validation.

## Commands
- Dev: `npm run dev`
- Build: `npm run build` (runs `tsc -b` then Vite)
- Lint: `npm run lint`
- Test (watch): `npm run test`
- Test (CI): `npm run test:run`
- Coverage: `npm run coverage`

## Agent behaviour
- Ask before adding new dependencies or changing build tooling.
- If instructions in this file conflict with user requests, ask for clarification.
- Do not modify `vercel.json` without confirming — it controls SPA routing in production.
