import { useEffect, useMemo, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { projects } from '../data/projects'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const gallery = useMemo(() => project?.gallery ?? [], [project])

  useEffect(() => {
    setActiveIndex(0)
  }, [project?.slug])

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [project?.slug])

  useEffect(() => {
    if (gallery.length <= 1 || isHovering) {
      return
    }

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (mediaQuery.matches) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % gallery.length)
    }, 6000)

    return () => window.clearInterval(timer)
  }, [gallery, isHovering])

  if (!project) {
    return (
      <PageShell>
        <section className="py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Project
          </p>
          <h1 className="mt-4 text-3xl font-semibold">Project not found</h1>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Try going back to the project list.
          </p>
          <Link
            className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            to="/#projects"
          >
            Back to projects
          </Link>
        </section>
      </PageShell>
    )
  }

  const handlePrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? gallery.length - 1 : current - 1,
    )
  }

  const handleNext = () => {
    setActiveIndex((current) => (current + 1) % gallery.length)
  }

  return (
    <PageShell>
      <section className="space-y-12 py-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Case study
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">{project.title}</h1>
          <p className="text-sm text-[var(--muted)]">{project.role}</p>
          <div className="flex flex-wrap gap-3">
            {project.live ? (
              <a
                className="rounded-full border border-black/10 bg-[var(--accent)] px-5 py-2 text-xs font-semibold text-black transition hover:brightness-95"
                href={project.live}
                rel="noreferrer"
                target="_blank"
              >
                Live project
              </a>
            ) : null}
            {project.repo ? (
              <a
                className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold text-white transition hover:border-white/40"
                href={project.repo}
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
        <div className="space-y-4">
          <div
            className="relative aspect-video overflow-hidden rounded-3xl border border-white/10 bg-[var(--bg-alt)]/60"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
          >
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {gallery.map((image, index) => (
                <div className="min-w-full" key={`${project.slug}-image-${index}`}>
                  <img
                    alt={`${project.title} screen ${index + 1}`}
                    className="h-full w-full object-cover"
                    loading="lazy"
                    src={image}
                  />
                </div>
              ))}
            </div>
            {gallery.length > 1 ? (
              <>
                <button
                  aria-label="Previous screenshot"
                  className="absolute left-4 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg font-semibold leading-none text-white transition hover:border-white/40"
                  onClick={handlePrevious}
                  type="button"
                >
                  {'<'}
                </button>
                <button
                  aria-label="Next screenshot"
                  className="absolute right-4 top-1/2 flex h-11 w-11 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white/15 bg-black/50 text-lg font-semibold leading-none text-white transition hover:border-white/40"
                  onClick={handleNext}
                  type="button"
                >
                  {'>'}
                </button>
              </>
            ) : null}
            {gallery.length > 1 ? (
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/10 bg-black/50 px-3 py-2">
                {gallery.map((_, index) => (
                  <button
                    aria-label={`Go to screenshot ${index + 1}`}
                    className={`h-2 w-2 rounded-full transition ${
                      index === activeIndex
                        ? 'bg-[var(--accent)]'
                        : 'bg-white/20 hover:bg-white/50'
                    }`}
                    key={`${project.slug}-dot-${index}`}
                    onClick={() => setActiveIndex(index)}
                    type="button"
                  />
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
            {project.slug === 'mini-ecommerce-app' ? (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  React Store Demo - Technical Project Description
                </h3>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  React Store Demo is a modern e-commerce storefront built with
                  React 19 + TypeScript and bundled with Vite. It consumes the
                  public Fake Store API to deliver a complete product browsing
                  experience, with category filtering, debounced search, and
                  multiple sorting modes. The UI is tailored for a portfolio
                  presentation: card-based layouts, glassmorphism styling, and
                  responsive grids that scale cleanly from mobile to desktop.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Core user flows
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    <strong className="text-[var(--text)]">
                      Product discovery:
                    </strong>{' '}
                    The catalog view loads all products once and caches them in
                    a persisted Zustand store, minimizing repeat fetches. Users
                    can filter by category, search by title, and sort by price
                    or title.
                  </li>
                  <li>
                    <strong className="text-[var(--text)]">
                      Product details:
                    </strong>{' '}
                    Individual product pages fetch by id, display metadata and
                    ratings, and enable add-to-cart actions.
                  </li>
                  <li>
                    <strong className="text-[var(--text)]">Cart:</strong> A
                    persistent cart with quantity controls, totals, item
                    removal, and a summary panel; all totals are computed
                    in-store.
                  </li>
                  <li>
                    <strong className="text-[var(--text)]">Checkout:</strong> A
                    validation-driven form built with React Hook Form + Zod; on
                    submit it simulates a processing delay and clears the cart.
                  </li>
                  <li>
                    <strong className="text-[var(--text)]">
                      Account + orders:
                    </strong>{' '}
                    Firebase Authentication handles login/registration, and the
                    &quot;My Orders&quot; view reads order history from
                    Firestore for authenticated users (protected route).
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Architecture highlights
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Clear separation of concerns with dedicated layers for API
                    calls, stores, and pages.
                  </li>
                  <li>
                    API module (
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      fetchProducts
                    </code>
                    ,{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      fetchProductById
                    </code>
                    ,{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      fetchCategories
                    </code>
                    ) encapsulates network interactions and error handling.
                  </li>
                  <li>
                    Zustand stores are split by domain (
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      cart
                    </code>
                    ,{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      products
                    </code>
                    ,{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      auth
                    </code>
                    ), and the cart/products stores persist state to
                    localStorage for a resilient UX.
                  </li>
                  <li>
                    Routing uses React Router v7 with dedicated pages for
                    products, product details, cart, checkout, login, and
                    account.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Validation and UX details
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Checkout uses a Zod schema for robust client-side validation
                    (name, email, address), with inline error messaging.
                  </li>
                  <li>
                    Search input is debounced to reduce unnecessary filtering
                    work and improve responsiveness on large datasets.
                  </li>
                  <li>
                    Loading and error states are handled in all data-driven
                    views.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Testing
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>Unit tests cover key utilities and API logic with Vitest.</li>
                  <li>
                    Component tests validate product cards and cart interactions
                    using React Testing Library and user-event.
                  </li>
                  <li>Store tests validate cart math and mutations.</li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Tech stack
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>React 19, TypeScript, Vite</li>
                  <li>Tailwind CSS (via @tailwindcss/vite)</li>
                  <li>React Router, Zustand</li>
                  <li>React Hook Form + Zod</li>
                  <li>Firebase Auth + Firestore</li>
                  <li>Vitest + Testing Library</li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Summary
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  This project demonstrates production-style front-end
                  architecture: modular data access, persistent client state,
                  validated forms, authenticated sections, and clean test
                  coverage, packaged into a polished storefront experience ready
                  for portfolio presentation.
                </p>
              </div>
            ) : project.slug === 'arc-raiders-loot-table' ? (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  ARC Raiders Loot Table - Technical Project Description
                </h3>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Overview
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  ARC Raiders Loot Table is a single-page React application that
                  helps players make fast, confident decisions about what loot
                  to keep, upgrade, or recycle. The UI organizes a large,
                  curated dataset of items into actionable categories,
                  highlights upgrade requirements per workbench, and supports
                  search, compact viewing, and progressive disclosure so that
                  players can scan information quickly under pressure.
                </p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The app is designed as a portfolio-grade example of a
                  data-driven UI: clean separation between data, domain logic,
                  and presentation, with strong TypeScript typing and clear
                  component boundaries. It is optimized for fast iteration and
                  easy content updates as the game evolves.
                </p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The tool started as a real, personal need while playing ARC
                  Raiders, not as a purely portfolio-driven exercise. That
                  origin shaped the product decisions and kept the scope focused
                  on practical, everyday use during gameplay.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Core Features
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Categorized loot guidance: items are grouped into &quot;Keep
                    for Quests&quot;, &quot;Keep for Projects&quot;,
                    &quot;Upgrading Benches&quot;, and &quot;Safely Recycle&quot;
                    to surface recommendations without extra clicks.
                  </li>
                  <li>
                    Workbench progression planning: users select current levels
                    for each bench, and the upgrade section automatically marks
                    completed levels and shows the remaining materials needed.
                  </li>
                  <li>
                    Smart search with context-aware collapsing: as a query is
                    entered, irrelevant sections auto-collapse to keep focus on
                    matching items.
                  </li>
                  <li>
                    Compact and normal layouts: a global toggle switches between
                    dense scanning and a more spacious card layout.
                  </li>
                  <li>
                    Privacy-friendly analytics: GA4 page views only fire after
                    explicit consent via a custom cookie banner.
                  </li>
                  <li>
                    Responsive UI: Tailwind CSS utilities provide consistent
                    behavior from mobile screens to large desktops.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Data Model and Content Pipeline
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The item catalogue lives in a dedicated data module and is
                  strongly typed for safety and clarity.
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      Item
                    </code>{' '}
                    model (TypeScript interface) includes: name, category, tier,
                    value, group, rarity, quantity, workshop, and level.
                  </li>
                  <li>
                    The dataset is authored once and normalized for asset paths,
                    which keeps presentation logic simple and consistent.
                  </li>
                  <li>
                    A simple normalization helper builds predictable image paths
                    from item names, enforcing a repeatable asset naming
                    convention.
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  This structure makes it straightforward to:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>add new items or rebalance quantities,</li>
                  <li>update bench requirements,</li>
                  <li>extend categories or rarities without touching core UI logic.</li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  UI Architecture
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The UI follows a layered, component-driven architecture:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      App
                    </code>{' '}
                    owns global state such as search query, compact mode,
                    collapsed groups, and persisted bench levels.
                  </li>
                  <li>
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      ItemsSection
                    </code>{' '}
                    splits the master dataset into groups and delegates
                    rendering.
                  </li>
                  <li>
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      ItemGroup
                    </code>{' '}
                    provides expandable/collapsible sections with summary
                    controls.
                  </li>
                  <li>
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      UpgradingSection
                    </code>{' '}
                    aggregates items by workshop and renders a{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      WorkshopLevelGroup
                    </code>{' '}
                    per bench.
                  </li>
                  <li>
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      ItemCard
                    </code>{' '}
                    is a memoized, reusable card component that adapts layout
                    based on compact mode and completion state.
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  This decomposition keeps each component focused and testable,
                  while enabling easy reuse and extension.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  State Management and Persistence
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  State is managed with idiomatic React hooks and a custom
                  persistence layer:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      usePersistentState
                    </code>{' '}
                    wraps <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">useState</code> and
                    transparently syncs values to localStorage.
                  </li>
                  <li>
                    Bench levels persist across sessions, so users do not lose
                    progression settings.
                  </li>
                  <li>
                    Cookie consent choice is also stored locally and used to
                    gate analytics events.
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The approach avoids heavyweight state libraries while still
                  providing reliable, user-friendly persistence.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Search, Filtering, and Collapsing Logic
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The search feature is designed for speed and clarity:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Filtering is done via a normalized, case-insensitive query.
                  </li>
                  <li>
                    When a query is active, the UI automatically collapses
                    non-matching groups to minimize visual noise.
                  </li>
                  <li>
                    Global &quot;Expand all / Collapse all&quot; controls allow
                    quick reset and navigation.
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  This creates a focused experience for power users while
                  keeping the UI approachable for new players.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Bench Progression Logic
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Workbench upgrades are modeled as a progression sequence:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Bench definitions include labels and max levels, enabling
                    consistent UI and validation.
                  </li>
                  <li>
                    Upgrade items are grouped by workshop and then by level.
                  </li>
                  <li>
                    Completed levels are visually downgraded (opacity +
                    grayscale) to highlight remaining needs.
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  This logic turns a static dataset into a practical planning
                  tool, which is the core value proposition of the app.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Styling and Responsiveness
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Styling is done with Tailwind CSS (via the Vite plugin):
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    The grid layout scales from single-column mobile to
                    multi-column desktop.
                  </li>
                  <li>
                    Sticky search keeps controls accessible during long scrolls.
                  </li>
                  <li>
                    Color and contrast are used to communicate rarity and
                    completion status.
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The result is a modern UI that is easy to scan and consistent
                  across devices.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Analytics and Privacy
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Analytics are integrated with a simple, isolated helper
                  module:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>GA4 tracking is gated behind explicit user consent.</li>
                  <li>
                    The consent banner updates Google Analytics consent mode in
                    real time.
                  </li>
                  <li>
                    Measurement ID is read from environment variables, making
                    deployment clean and secure.
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  This demonstrates attention to privacy and production-ready
                  tracking practices.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Tooling and Build
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The project uses a modern, recruiter-friendly stack:
                </p>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>React 19 + TypeScript for type-safe UI development</li>
                  <li>Vite 7 for fast dev server and optimized builds</li>
                  <li>Tailwind CSS 4 for rapid, consistent styling</li>
                  <li>ESLint for code quality</li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The build pipeline runs TypeScript checks before producing a
                  Vite build, ensuring type safety in CI/CD workflows.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Why This Project Stands Out
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Data-driven UI with clear domain modeling and maintainable
                    structure.
                  </li>
                  <li>
                    Strong UX decisions: collapsing logic, compact mode, and
                    progression tracking.
                  </li>
                  <li>
                    Clean separation of concerns: data, state, view, and
                    analytics modules are isolated.
                  </li>
                  <li>
                    Real-world readiness: persistence, analytics consent, and
                    responsive behavior are implemented end to end.
                  </li>
                </ul>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  This makes the app a strong showcase of frontend engineering
                  fundamentals, product thinking, and maintainable React
                  architecture.
                </p>
              </div>
            ) : project.slug === 'f1-weekend-widget' ? (
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">
                  Motorsport Weekend - Technical Project Description
                </h3>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Overview
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  Motorsport Weekend is a Kotlin-based Android App Widget that
                  surfaces the next race weekend schedule directly on the home
                  screen. The widget focuses on fast glanceability (race name,
                  circuit, session list, countdown) and robust behavior even
                  when the API is delayed or offline.
                </p>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  The project was born from a real, personal need as a Formula
                  1 fan who kept checking the next race schedule online. I
                  wanted a widget I would actually use every day, so I built one
                  that keeps the next weekend visible at a glance. It was also a
                  deliberate stretch: I was new to Kotlin and Android
                  development, and the entire build was completed with
                  AI-assisted guidance.
                </p>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Key features
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Adaptive widget layouts (compact/medium/normal) with
                    size-aware typography and padding.
                  </li>
                  <li>
                    Session list with optional practice filtering and
                    locale-aware date/time formatting.
                  </li>
                  <li>Time zone modes: automatic, UTC, or manual offset.</li>
                  <li>Countdown to the next key session.</li>
                  <li>
                    Offline-friendly caching with a deterministic fallback
                    dataset.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Data pipeline (OpenF1 API)
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Uses Retrofit + Moshi to fetch:{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      GET /v1/sessions?year=...
                    </code>{' '}
                    and{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      GET /v1/meetings?year=...
                    </code>
                    .
                  </li>
                  <li>
                    Merges session + meeting data to build a normalized{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      Race
                    </code>{' '}
                    model.
                  </li>
                  <li>
                    Validates API payloads defensively (null checks, missing
                    fields, date parsing).
                  </li>
                  <li>
                    Normalizes country codes (3-letter to 2-letter and
                    name-to-code mapping).
                  </li>
                  <li>
                    Caches the mapped dataset in SharedPreferences (JSON via
                    Moshi) with 30-day expiry.
                  </li>
                  <li>
                    Falls back to a mocked race weekend if the API provides no
                    future sessions.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Widget rendering
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    AppWidgetProvider uses RemoteViews with two layouts to fit
                    size constraints.
                  </li>
                  <li>
                    Text is rendered into bitmaps to ensure consistent
                    typography and truncation across devices.
                  </li>
                  <li>
                    Locale-aware date formatting via{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      DateFormat.getBestDateTimePattern
                    </code>
                    .
                  </li>
                  <li>Optional flag emoji derived from ISO country code.</li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Scheduling and updates
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Refreshes when: widget is resized, settings change, or a
                    scheduled refresh fires.
                  </li>
                  <li>
                    Uses AlarmManager{' '}
                    <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
                      setExactAndAllowWhileIdle
                    </code>{' '}
                    to refresh shortly after the next key session.
                  </li>
                  <li>
                    Handles exact-alarm restrictions gracefully (falls back to
                    manual/resize updates).
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Settings and persistence
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Simple settings screen (Activity) controlling: show/hide
                    practice sessions, 12h/24h time format, time zone mode and
                    manual offset.
                  </li>
                  <li>
                    Stored via SharedPreferences for fast reads in widget
                    updates.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Reliability and resilience
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>
                    Graceful error handling when API calls fail (returns cached
                    or fallback data).
                  </li>
                  <li>
                    Debug logging for cache state, API payload quality, and
                    scheduling.
                  </li>
                  <li>
                    API data is transformed (filtered, grouped, formatted)
                    before display.
                  </li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Tech stack
                </h4>
                <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
                  <li>Kotlin, Coroutines</li>
                  <li>AppWidgetProvider + RemoteViews</li>
                  <li>Retrofit + OkHttp + Moshi</li>
                  <li>AlarmManager scheduling</li>
                  <li>SharedPreferences storage</li>
                </ul>

                <h4 className="text-lg font-semibold text-[var(--text)]">
                  Why this project is relevant
                </h4>
                <p className="text-sm leading-relaxed text-[var(--muted)]">
                  This project demonstrates: practical widget engineering and
                  RemoteViews constraints, efficient data fetching, caching, and
                  transformation logic, resilient UX behavior under unreliable
                  external data sources, and clean separation between data,
                  preferences, and UI rendering logic.
                </p>
              </div>
            ) : (
              project.description.map((paragraph) => (
                <p className="text-sm text-[var(--muted)]" key={paragraph}>
                  {paragraph}
                </p>
              ))
            )}
          </div>
          <div className="space-y-6">
            <div className="rounded-3xl border border-white/10 bg-[var(--bg-alt)]/60 p-6">
              <p className="text-sm text-[var(--muted)]">Detailed stack</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {project.stackDetailed.map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-[var(--surface)]/70 p-6">
              <p className="text-sm text-[var(--muted)]">Challenges</p>
              <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
                {project.challenges.map((challenge) => (
                  <div
                    className="rounded-2xl border border-white/10 bg-black/20 p-4"
                    key={challenge}
                  >
                    {challenge}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius)] border border-white/10 bg-[var(--surface)]/70 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Next
            </p>
            <p className="mt-2 text-lg font-semibold">Interested in details?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              I can share more context and decisions behind the build.
            </p>
          </div>
          <Link
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            to="/#contact"
          >
            Send role details
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

export default ProjectDetail
