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
                    API module (<code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
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
