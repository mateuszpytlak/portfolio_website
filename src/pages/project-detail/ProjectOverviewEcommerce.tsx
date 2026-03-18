function ProjectOverviewEcommerce() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">React Store Demo</h3>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        React Store Demo is an e-commerce storefront built with React 19 +
        TypeScript, bundled with Vite. It consumes the public Fake Store API
        and covers category filtering, debounced search, and multiple sorting
        modes. The layout uses cards and responsive grids that scale from
        mobile to desktop.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Core user flows
      </h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          <strong className="text-[var(--text)]">Product discovery:</strong> The
          catalog view loads all products once and caches them in a persisted
          Zustand store, minimizing repeat fetches. Users can filter by category,
          search by title, and sort by price or title.
        </li>
        <li>
          <strong className="text-[var(--text)]">Product details:</strong>{' '}
          Individual product pages fetch by id, display metadata and ratings,
          and enable add-to-cart actions.
        </li>
        <li>
          <strong className="text-[var(--text)]">Cart:</strong> A persistent
          cart with quantity controls, totals, item removal, and a summary panel;
          all totals are computed in-store.
        </li>
        <li>
          <strong className="text-[var(--text)]">Checkout:</strong> A
          validation-driven form built with React Hook Form + Zod; on submit it
          simulates a processing delay and clears the cart.
        </li>
        <li>
          <strong className="text-[var(--text)]">Account + orders:</strong>{' '}
          Firebase Authentication handles login/registration, and the "My Orders"
          view reads order history from Firestore for authenticated users
          (protected route).
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Architecture highlights
      </h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          Clear separation of concerns with dedicated layers for API calls,
          stores, and pages.
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
          ), and the cart/products stores persist state to localStorage for a
          resilient UX.
        </li>
        <li>
          Routing uses React Router v7 with dedicated pages for products, product
          details, cart, checkout, login, and account.
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Validation and UX details
      </h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          Checkout uses a Zod schema for robust client-side validation (name,
          email, address), with inline error messaging.
        </li>
        <li>
          Search input is debounced to reduce unnecessary filtering work and
          improve responsiveness on large datasets.
        </li>
        <li>Loading and error states are handled in all data-driven views.</li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">Testing</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>Unit tests cover key utilities and API logic with Vitest.</li>
        <li>
          Component tests validate product cards and cart interactions using
          React Testing Library and user-event.
        </li>
        <li>Store tests validate cart math and mutations.</li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">Tech stack</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>React 19, TypeScript, Vite</li>
        <li>Tailwind CSS (via @tailwindcss/vite)</li>
        <li>React Router, Zustand</li>
        <li>React Hook Form + Zod</li>
        <li>Firebase Auth + Firestore</li>
        <li>Vitest + Testing Library</li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">Summary</h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The app covers the full front-end scope: API layer, persistent state,
        validated forms, auth-protected routes, and unit tests. It was a good
        exercise in wiring together multiple tools without the architecture
        getting messy.
      </p>
    </div>
  )
}

export default ProjectOverviewEcommerce
