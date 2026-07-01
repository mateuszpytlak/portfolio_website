type ProjectOverviewMotorsportProps = {
  storeUrl?: string
}

function ProjectOverviewMotorsport({
  storeUrl,
}: ProjectOverviewMotorsportProps) {
  return (
    <div className="space-y-6">
      <h3 className="text-xl font-semibold">GP Tracker</h3>

      <h4 className="text-lg font-semibold text-[var(--text)]">Overview</h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        Officially available on Google Play
        {storeUrl ? (
          <>
            {' '}
            (
            <a
              className="text-[var(--accent)] underline decoration-white/20 underline-offset-4 transition hover:text-white"
              href={storeUrl}
              rel="noreferrer"
              target="_blank"
            >
              link
            </a>
            )
          </>
        ) : null}
        , GP Tracker is a Kotlin-based Android app widget for checking the next
        race weekend schedule directly on the home screen. The product focuses
        on fast glanceability, showing the race name, circuit, session list,
        and countdown while staying robust when the API is delayed or offline.
      </p>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        The project was born from a real, personal need as a Formula 1 fan who
        kept checking the next race schedule online. I wanted a widget I would
        actually use every day, so I built one that keeps the next weekend
        visible at a glance. It has since been polished into an official Google
        Play release. It was also a deliberate experiment in AI-assisted
        product development outside my usual frontend stack. Kotlin and Android
        development were new to me, so the implementation relied heavily on AI
        support, while I guided the build step by step: defining the product
        behavior, checking whether each iteration matched the goal, and
        adjusting the direction when Android widget constraints changed what was
        realistic. For example, I made the calls on the refresh strategy and on
        how the widget should behave when API data was delayed or missing.
      </p>

      <h4 className="text-lg font-semibold text-[var(--text)]">Key features</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          Adaptive widget layouts (compact/medium/normal) with size-aware
          typography and padding.
        </li>
        <li>
          Session list with optional practice filtering and locale-aware
          date/time formatting.
        </li>
        <li>Time zone modes: automatic, UTC, or manual offset.</li>
        <li>Countdown to the next key session.</li>
        <li>
          Offline-friendly caching with a deterministic fallback dataset.
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
          Validates API payloads defensively (null checks, missing fields, date
          parsing).
        </li>
        <li>
          Normalizes country codes (3-letter to 2-letter and name-to-code
          mapping).
        </li>
        <li>
          Caches the mapped dataset in SharedPreferences (JSON via Moshi) with
          30-day expiry.
        </li>
        <li>
          Falls back to a mocked race weekend if the API provides no future
          sessions.
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Widget rendering
      </h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          AppWidgetProvider uses RemoteViews with two layouts to fit size
          constraints.
        </li>
        <li>
          Text is rendered into bitmaps to ensure consistent typography and
          truncation across devices.
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
          Refreshes when: widget is resized, settings change, or a scheduled
          refresh fires.
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
          Simple settings screen (Activity) controlling: show/hide practice
          sessions, 12h/24h time format, time zone mode and manual offset.
        </li>
        <li>Stored via SharedPreferences for fast reads in widget updates.</li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">
        Reliability and resilience
      </h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>
          Graceful error handling when API calls fail (returns cached or fallback
          data).
        </li>
        <li>Debug logging for cache state, API payload quality, and scheduling.</li>
        <li>
          API data is transformed (filtered, grouped, formatted) before display.
        </li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">Tech stack</h4>
      <ul className="list-disc space-y-2 pl-5 text-sm text-[var(--muted)]">
        <li>Kotlin, Coroutines</li>
        <li>AppWidgetProvider + RemoteViews</li>
        <li>Retrofit + OkHttp + Moshi</li>
        <li>AlarmManager scheduling</li>
        <li>SharedPreferences storage</li>
      </ul>

      <h4 className="text-lg font-semibold text-[var(--text)]">Notes</h4>
      <p className="text-sm leading-relaxed text-[var(--muted)]">
        This project forced me to work through platform constraints I did not
        know at the start, especially around how Android widgets render and how
        often they can update. Kotlin and Android development were new to me, so
        the project was built with heavy AI implementation support. My role was
        to guide the product direction and technical trade-offs throughout the
        build, especially around refresh behavior, battery impact, and how the
        widget should handle stale or missing data.
      </p>
    </div>
  )
}

export default ProjectOverviewMotorsport
