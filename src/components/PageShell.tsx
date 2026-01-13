import type { ReactNode } from 'react'

import Footer from '../sections/Footer'
import Header from '../sections/Header'

type PageShellProps = {
  children: ReactNode
  top?: ReactNode
  mainClassName?: string
  withDecorations?: boolean
}

function PageShell({
  children,
  top,
  mainClassName,
  withDecorations = true,
}: PageShellProps) {
  const mainClasses = ['mx-auto max-w-6xl px-6 pb-24', mainClassName]
    .filter(Boolean)
    .join(' ')

  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="relative overflow-hidden">
        {withDecorations && (
          <>
            <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[var(--accent-2)]/25 blur-[140px]" />
            <div className="pointer-events-none absolute left-[-120px] top-36 h-[420px] w-[420px] rounded-full bg-[var(--accent)]/20 blur-[120px]" />
          </>
        )}
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <Header />
          {top}
        </div>
      </div>
      <main className={mainClasses}>{children}</main>
      <Footer />
    </div>
  )
}

export default PageShell
