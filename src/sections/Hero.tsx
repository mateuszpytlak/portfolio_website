const highlights = ['React focus', 'Tailwind v4 design tokens', 'AI-assisted delivery']

function Hero() {
  return (
    <section className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-8 motion-safe:animate-[fade-up_0.8s_ease-out_both]">
        <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[var(--bg-alt)]/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          Open to frontend opportunities
        </div>
        <div className="space-y-6">
          <h1 className="display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Mateusz Pytlak — Frontend Developer building clean, modern React
            interfaces.
          </h1>
          <p className="max-w-xl text-base text-[var(--muted)] md:text-lg">
            5 years in web development across React, Angular, Vue, PHP, and
            WordPress. I am now focused on React, TypeScript, and Tailwind to
            build scalable UI. I also use AI tools to speed up delivery while
            keeping quality high.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <a
            className="rounded-full border border-black/10 bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_28px_rgba(108,246,208,0.28)] transition hover:translate-y-[-1px] hover:brightness-95"
            href="#projects"
          >
            View Projects
          </a>
          <a
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            href="#contact"
          >
            Book a Call
          </a>
        </div>
        <div className="grid max-w-xl gap-4 text-sm text-[var(--muted)] sm:grid-cols-3">
          <div className="rounded-2xl border border-white/10 bg-[var(--bg-alt)]/70 p-4">
            <p className="text-2xl font-semibold text-white">5 years</p>
            <p>Web development</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[var(--bg-alt)]/70 p-4">
            <p className="text-2xl font-semibold text-white">Multi-stack</p>
            <p>React, Vue, Angular</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-[var(--bg-alt)]/70 p-4">
            <p className="text-2xl font-semibold text-white">Focus</p>
            <p>React + TS + Tailwind</p>
          </div>
        </div>
      </div>
      <div className="relative motion-safe:animate-[fade-up_1s_ease-out_both]">
        <div className="absolute inset-0 rounded-[var(--radius)] border border-white/10 bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        <div className="relative space-y-6 rounded-[var(--radius)] border border-white/10 bg-[var(--bg-alt)]/80 p-8 shadow-[0_25px_80px_rgba(12,14,20,0.65)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Spotlight
              </p>
              <h2 className="text-2xl font-semibold">
                Focused on React-driven UI delivery
              </h2>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]">
              2024
            </span>
          </div>
          <p className="text-sm text-[var(--muted)]">
            I build component-driven interfaces that are easy to maintain and
            scale, with careful typography and layout decisions.
          </p>
          <div className="grid gap-3">
            {highlights.map((item) => (
              <div
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm"
                key={item}
              >
                <span>{item}</span>
                <span className="text-xs text-[var(--muted)]">Done</span>
              </div>
            ))}
          </div>
        </div>
        <div className="absolute -right-6 bottom-[-12px] hidden w-[220px] rounded-3xl border border-white/10 bg-[var(--surface)]/90 p-5 text-sm text-[var(--muted)] shadow-xl motion-safe:animate-[float_7s_ease-in-out_infinite] lg:block">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Based in
          </p>
          <p className="mt-2 text-lg font-semibold text-white">Poznan, Poland</p>
          <p className="mt-2">Open to remote and hybrid roles.</p>
        </div>
      </div>
    </section>
  )
}

export default Hero
