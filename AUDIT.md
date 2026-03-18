# Audyt projektu portfolio_www

> Przeprowadzony: 2026-03-18 | Audytor: Claude Sonnet 4.6

---

## Stack i wersje

| Technologia | Wersja | Ocena |
|---|---|---|
| React | 19.2 | Bleeding edge — ryzyko niekompatybilności bibliotek |
| React Router | 7.12 | Aktualna |
| TypeScript | ~5.9.3 | Locked do minor — dobra praktyka |
| Vite | 7.2 | Bardzo aktualna |
| Tailwind | 4.1 | Nowa — v4 API różni się od popularnych przykładów |
| Zod | 4.3 | Aktualna |

---

## Mocne strony

### Architektura
- Dobry podział na `sections/`, `pages/`, `components/`, `data/` — czytelna struktura
- Brak state managementu globalnego tam, gdzie nie jest potrzebny — minimalizm
- Statyczne dane w `data/` zamiast hardkodowania w komponentach

### TypeScript
- `strict: true` + `noUnusedLocals`, `noUnusedParameters` — zero kompromisów
- `verbatimModuleSyntax`, `erasableSyntaxOnly` — nowoczesne flagi
- Typy inline zamiast osobnych plików tam, gdzie wystarczą

### Accessibility (solidna baza)
- `aria-invalid`, `aria-describedby` na formularzu
- `role="status"` na komunikatach statusu
- Respektowanie `prefers-reduced-motion`
- Semantyczny HTML (`<header>`, `<nav>`, `<section>`, `<footer>`)

### Security
- Spam prevention przez honeypot field (`_gotcha`) w formularzu
- Brak sekretów w kodzie
- No SQL/XSS surface (czysto statyczny)

---

## Problemy i rekomendacje

### Krytyczne / wysoki priorytet

#### 1. Brak testów ✅ NAPRAWIONE
Dodano Vitest + Testing Library. 55 testów w 4 plikach:
- `src/lib/contactSchema.test.ts` — 20 unit testów Zod
- `src/sections/Contact.test.tsx` — 10 testów komponentu formularza
- `src/App.test.tsx` — 7 testów routingu
- `src/sections/Projects.test.tsx` — 13 testów ProjectCard

#### 2. Brak CI/CD przed deploym
Nie ma `.github/workflows/` — `eslint` i `tsc -b` nie blokują merga. Ryzyko: broken build trafia na produkcję bez warninga.

**Fix:** dodaj GitHub Action na `push`/`PR`:
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]
jobs:
  check:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with: { node-version: 20, cache: npm }
      - run: npm ci
      - run: npm run lint
      - run: npm run test:run
      - run: npm run build
```

#### 3. Brak focus styles
Keyboard navigation bez widocznych outline — fail WCAG 2.1 AA (kryterium 2.4.7).

**Fix** w `src/index.css`:
```css
:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 3px;
}
```

---

### Średni priorytet

#### 4. Obrazy bez nowoczesnych formatów
Brak WebP/AVIF — PNG/JPG wolniej ładuje się na słabszym łączu.

**Fix:** dodaj `vite-imagetools` lub użyj `<picture>` z `srcSet`.

#### 5. Google Fonts z CDN zamiast self-hosted
2 zewnętrzne requesty blokują render (Manrope + Space Grotesk).

**Fix:** `npm install @fontsource/manrope @fontsource/space-grotesk` i importuj lokalnie.

#### 6. Formspree endpoint hardkodowany w źródle
`https://formspree.io/f/xqeekpge` widoczny w kodzie.

**Fix:** przenieś do `.env`:
```
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xqeekpge
```
Dodaj `.env.example` z dokumentacją zmiennych.

#### 7. Brak structured data (JSON-LD)
Google nie "rozumie" że to portfolio developera — brak `Person` schema.

**Fix:** dodaj w `index.html` lub `Home.tsx`:
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Mateusz Pytlak",
  "jobTitle": "Frontend Developer",
  "url": "https://your-domain.com"
}
</script>
```

#### 8. Copyright rok hardkodowany
`Footer.tsx` ma `2026` na stałe.

**Fix:**
```tsx
© {new Date().getFullYear()} Mateusz Pytlak
```

---

### Niski priorytet / Nice-to-have

#### 9. Brak skip link
```html
<a href="#main" class="sr-only focus:not-sr-only focus:absolute focus:p-4">
  Skip to main content
</a>
```

#### 10. Brak error tracking na produkcji
`ErrorBoundary` loguje tylko do `console.error`. Sentry free tier wystarczy.

#### 11. Brak route-based code splitting
Jeden bundle. Przy obecnym rozmiarze OK, ale `lazy()` + `Suspense` to dobra praktyka.

#### 12. `About.tsx` ma niesynchronizowany stack
Zustand i Framer Motion w bio, których nie ma w `package.json`. Można przenieść dane do `data/` i zsynchronizować z faktycznym stackiem.

#### 13. README.md skromny
Brakuje: instrukcji dev setup, env vars, deployment.

---

## Metryki Lighthouse (szacowane)

| Metryka | Ocena |
|---|---|
| Performance | ~85–90 |
| Accessibility | ~75–80 (brak focus styles) |
| Best Practices | ~90–95 |
| SEO | ~85–90 (brak JSON-LD) |

---

## Podsumowanie

**Ocena: 8/10**

Solidny, nowoczesny projekt. Stack jest aktualny i właściwie skonfigurowany. TypeScript strict mode i brak zbędnych zależności to plus. Główne braki to CI/CD i drobne luki WCAG. Testy zostały dodane — to najważniejszy element odróżniający seniora od juniora w kontekście portfolio.
