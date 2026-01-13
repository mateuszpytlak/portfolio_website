function ProjectOverviewArcRaiders() {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">
        ARC Raiders Loot Table - Technical Project Description
      </h3>

      <h4 className="text-lg font-semibold text-[var(--text)]">Overview</h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        ARC Raiders Loot Table is a single-page React application that helps
        players make fast, confident decisions about what loot to keep, upgrade,
        or recycle. The UI organizes a large, curated dataset of items into
        actionable categories, highlights upgrade requirements per workbench,
        and supports search, compact viewing, and progressive disclosure so that
        players can scan information quickly under pressure.
      </p>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The app is designed as a portfolio-grade example of a data-driven UI:
        clean separation between data, domain logic, and presentation, with
        strong TypeScript typing and clear component boundaries. It is optimized
        for fast iteration and easy content updates as the game evolves.
      </p>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The tool started as a real, personal need while playing ARC Raiders, not
        as a purely portfolio-driven exercise. That origin shaped the product
        decisions and kept the scope focused on practical, everyday use during
        gameplay.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">Core Features</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          Categorized loot guidance: items are grouped into "Keep for Quests",
          "Keep for Projects", "Upgrading Benches", and "Safely Recycle" to
          surface recommendations without extra clicks.
        </li>
        <li>
          Workbench progression planning: users select current levels for each
          bench, and the upgrade section automatically marks completed levels
          and shows the remaining materials needed.
        </li>
        <li>
          Smart search with context-aware collapsing: as a query is entered,
          irrelevant sections auto-collapse to keep focus on matching items.
        </li>
        <li>
          Compact and normal layouts: a global toggle switches between dense
          scanning and a more spacious card layout.
        </li>
        <li>
          Privacy-friendly analytics: GA4 page views only fire after explicit
          consent via a custom cookie banner.
        </li>
        <li>
          Responsive UI: Tailwind CSS utilities provide consistent behavior from
          mobile screens to large desktops.
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Data Model and Content Pipeline
      </h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The item catalogue lives in a dedicated data module and is strongly
        typed for safety and clarity.
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
            Item
          </code>{' '}
          model (TypeScript interface) includes: name, category, tier, value,
          group, rarity, quantity, workshop, and level.
        </li>
        <li>
          The dataset is authored once and normalized for asset paths, which
          keeps presentation logic simple and consistent.
        </li>
        <li>
          A simple normalization helper builds predictable image paths from item
          names, enforcing a repeatable asset naming convention.
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

      <h4 className="text-lg font-semibold text-[var(--text)]">UI Architecture</h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The UI follows a layered, component-driven architecture:
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
            App
          </code>{' '}
          owns global state such as search query, compact mode, collapsed
          groups, and persisted bench levels.
        </li>
        <li>
          <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
            ItemsSection
          </code>{' '}
          splits the master dataset into groups and delegates rendering.
        </li>
        <li>
          <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
            ItemGroup
          </code>{' '}
          provides expandable/collapsible sections with summary controls.
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
          is a memoized, reusable card component that adapts layout based on
          compact mode and completion state.
        </li>
      </ul>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        This decomposition keeps each component focused and testable, while
        enabling easy reuse and extension.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        State Management and Persistence
      </h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        State is managed with idiomatic React hooks and a custom persistence
        layer:
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
            usePersistentState
          </code>{' '}
          wraps{' '}
          <code className="rounded bg-white/10 px-1 py-0.5 font-mono text-[0.85em]">
            useState
          </code>{' '}
          and transparently syncs values to localStorage.
        </li>
        <li>
          Bench levels persist across sessions, so users do not lose progression
          settings.
        </li>
        <li>
          Cookie consent choice is also stored locally and used to gate
          analytics events.
        </li>
      </ul>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The approach avoids heavyweight state libraries while still providing
        reliable, user-friendly persistence.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Search, Filtering, and Collapsing Logic
      </h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The search feature is designed for speed and clarity:
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>Filtering is done via a normalized, case-insensitive query.</li>
        <li>
          When a query is active, the UI automatically collapses non-matching
          groups to minimize visual noise.
        </li>
        <li>
          Global "Expand all / Collapse all" controls allow quick reset and
          navigation.
        </li>
      </ul>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        This creates a focused experience for power users while keeping the UI
        approachable for new players.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Bench Progression Logic
      </h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        Workbench upgrades are modeled as a progression sequence:
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          Bench definitions include labels and max levels, enabling consistent
          UI and validation.
        </li>
        <li>Upgrade items are grouped by workshop and then by level.</li>
        <li>
          Completed levels are visually downgraded (opacity + grayscale) to
          highlight remaining needs.
        </li>
      </ul>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        This logic turns a static dataset into a practical planning tool, which
        is the core value proposition of the app.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Styling and Responsiveness
      </h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        Styling is done with Tailwind CSS (via the Vite plugin):
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          The grid layout scales from single-column mobile to multi-column
          desktop.
        </li>
        <li>Sticky search keeps controls accessible during long scrolls.</li>
        <li>
          Color and contrast are used to communicate rarity and completion
          status.
        </li>
      </ul>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The result is a modern UI that is easy to scan and consistent across
        devices.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Analytics and Privacy
      </h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        Analytics are integrated with a simple, isolated helper module:
      </p>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>GA4 tracking is gated behind explicit user consent.</li>
        <li>
          The consent banner updates Google Analytics consent mode in real time.
        </li>
        <li>
          Measurement ID is read from environment variables, making deployment
          clean and secure.
        </li>
      </ul>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        This demonstrates attention to privacy and production-ready tracking
        practices.
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
        The build pipeline runs TypeScript checks before producing a Vite build,
        ensuring type safety in CI/CD workflows.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Why This Project Stands Out
      </h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          Data-driven UI with clear domain modeling and maintainable structure.
        </li>
        <li>
          Strong UX decisions: collapsing logic, compact mode, and progression
          tracking.
        </li>
        <li>
          Clean separation of concerns: data, state, view, and analytics modules
          are isolated.
        </li>
        <li>
          Real-world readiness: persistence, analytics consent, and responsive
          behavior are implemented end to end.
        </li>
      </ul>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        This makes the app a strong showcase of frontend engineering
        fundamentals, product thinking, and maintainable React architecture.
      </p>
    </div>
  )
}

export default ProjectOverviewArcRaiders
