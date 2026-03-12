import { Link } from 'react-router-dom'

import PageShell from '../components/PageShell'

function NotFound() {
  return (
    <PageShell>
      <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
        <p className="text-8xl font-semibold text-[var(--ring)] select-none">
          404
        </p>
        <h1 className="mt-4 text-3xl font-semibold md:text-4xl">
          Page not found
        </h1>
        <p className="mt-3 max-w-sm text-[var(--muted)]">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link
          to="/"
          className="mt-8 rounded-full bg-[var(--accent)] px-6 py-2.5 text-sm font-medium text-[var(--bg)] transition-opacity hover:opacity-80"
        >
          Back to home
        </Link>
      </div>
    </PageShell>
  )
}

export default NotFound
