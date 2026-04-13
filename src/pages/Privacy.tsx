import type { MouseEvent } from 'react'

import PageShell from '../components/PageShell'

function Privacy() {
  const emailParts = ['mpytlak', '.', 'ar', '@', 'gmail', '.', 'com'] as const
  const email = emailParts.join('')

  const handleEmailClick = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    window.location.href = `mailto:${email}`
  }

  return (
    <PageShell mainClassName="py-12 md:py-16" withDecorations={false}>
      <div className="mx-auto max-w-3xl space-y-10">
        <header className="space-y-3">
          <p className="text-xs uppercase tracking-[0.32em] text-[var(--muted)]">
            Legal
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">
            Privacy Policy - GP Tracker
          </h1>
          <p className="text-sm text-[var(--muted)]">Date: 2026-01-13</p>
        </header>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Data Controller</h2>
          <p className="text-[var(--muted)]">
            Mateusz Pytlak
            <br />
            Contact:{' '}
            <button
              className="cursor-pointer text-[var(--text)] hover:text-[var(--accent)]"
              onClick={handleEmailClick}
              type="button"
            >
              {email}
            </button>
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Scope and purpose</h2>
          <p className="text-[var(--muted)]">
            &quot;GP Tracker&quot; is a widget that shows the schedule
            for the next race weekend. We do not collect personal data, we do
            not use analytics or profiling, and we do not show ads.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Network calls</h2>
          <p className="text-[var(--muted)]">
            The app fetches session data from an external API:
          </p>
          <ul className="list-inside list-disc text-[var(--muted)]">
            <li>api.openf1.org</li>
          </ul>
          <p className="text-[var(--muted)]">
            When connecting to the API, the server may log standard technical
            data (e.g., IP address, HTTP headers). We do not send any user
            identifiers or personal data to the API.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Local data</h2>
          <p className="text-[var(--muted)]">
            Widget settings (e.g., time format, time zone) are stored locally on
            the device. This data is not transmitted off the device.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Third parties</h2>
          <p className="text-[var(--muted)]">
            The only external party is the API provider: api.openf1.org. We do
            not use analytics, crash reporting, or ads.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Retention</h2>
          <p className="text-[var(--muted)]">
            Local data is kept until changed or the app is uninstalled.
            Technical logs on the API side are retained according to the
            provider&apos;s policies.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">User rights</h2>
          <p className="text-[var(--muted)]">
            You can access, correct, or delete local data via app settings or by
            uninstalling the app. For privacy questions, contact the data
            controller.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Security</h2>
          <p className="text-[var(--muted)]">
            API connections use HTTPS. We rely on standard Android protections
            for local data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Children</h2>
          <p className="text-[var(--muted)]">
            The app is not directed to children under 13 and does not collect
            their data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-semibold">Changes</h2>
          <p className="text-[var(--muted)]">
            This policy may be updated. The latest version will be published at
            the same URL.
          </p>
        </section>
      </div>
    </PageShell>
  )
}

export default Privacy
