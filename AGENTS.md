## Repo context
- This is a personal portfolio site for showcasing frontend work to clients and employers.
- Stack: Vite + React + TypeScript + Tailwind v4.
- Keep the site visually striking with tasteful animations and strong visual hierarchy.

## Preferred structure (use existing if present)
- `src/`
- `src/components/` reusable UI pieces (buttons, cards, nav)
- `src/sections/` page sections (Hero, About, Projects, Contact)
- `src/pages/` only if routing is added later
- `src/data/` structured content (projects, timeline, links)
- `src/styles/` global styles, custom utilities, theme tokens

## State and data
- Prefer local component state first.
- Use Zustand only when shared state is needed; keep stores small.

## Styling and UI rules
- Tailwind-first. Avoid custom CSS unless it is clearly cleaner.
- Define design tokens as CSS variables when needed (spacing, colors, radius).
- Strong typography, clear spacing rhythm, and deliberate color palette.
- Favor semantic HTML and good contrast.
- Animations: meaningful, not excessive. Respect `prefers-reduced-motion`.

## Content guidance
- Include: short bio, what you do, skills/stack, selected projects, contact section.
- Projects should include: title, role, tech, short result, and link(s).
- Contact form is OK, but keep it simple and accessible.

## Code style
- TypeScript strictness: prefer explicit types at module boundaries.
- Components in PascalCase, hooks in `useX` form.
- Keep components small and focused; extract if it gets complex.

## Commands
- Dev: `npm run dev`
- Build: `npm run build`
- Test: `npm test` (only if configured)

## Agent behavior
- Ask before adding new dependencies or changing build tooling.
- If instructions in this file conflict with user requests, ask for clarification.
