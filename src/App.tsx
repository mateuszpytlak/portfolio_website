const projects = [
  {
    title: 'Aurora Commerce',
    role: 'Frontend Lead',
    stack: ['React', 'TypeScript', 'Tailwind', 'Vite'],
    summary:
      'High-converting storefront with a modular design system and motion-forward UX.',
    result: 'Lifted checkout conversion by 18% in 6 weeks.',
    link: 'https://example.com',
  },
  {
    title: 'Northwind Studio',
    role: 'UI Engineer',
    stack: ['React', 'Zustand', 'GSAP'],
    summary:
      'Portfolio platform with dynamic case studies, immersive transitions, and CMS sync.',
    result: 'Cut content publishing time from days to hours.',
    link: 'https://example.com',
  },
  {
    title: 'Pulse Analytics',
    role: 'Frontend Developer',
    stack: ['React', 'TypeScript', 'Recharts'],
    summary:
      'Data-heavy dashboard with fast filters, smart defaults, and lightweight theming.',
    result: 'Reduced time-to-insight by 32% for core users.',
    link: 'https://example.com',
  },
]

const services = [
  {
    title: 'Product UI',
    detail: 'High-fidelity interfaces that feel fast, clear, and premium.',
  },
  {
    title: 'Frontend Architecture',
    detail: 'Scalable component systems, state, and data flows.',
  },
  {
    title: 'Motion & Interactions',
    detail: 'Micro and macro interactions that guide attention.',
  },
]

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[var(--accent-2)]/25 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-120px] top-36 h-[420px] w-[420px] rounded-full bg-[var(--accent)]/20 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <header className="flex flex-wrap items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-full border border-white/10 bg-[var(--bg-alt)]/80" />
              <div>
                <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
                  Frontend Portfolio
                </p>
                <p className="text-lg font-semibold">Mateusz</p>
              </div>
            </div>
            <nav className="flex flex-wrap gap-6 text-sm text-[var(--muted)]">
              <a className="hover:text-white" href="#about">
                About
              </a>
              <a className="hover:text-white" href="#services">
                Services
              </a>
              <a className="hover:text-white" href="#projects">
                Projects
              </a>
              <a className="hover:text-white" href="#contact">
                Contact
              </a>
            </nav>
          </header>

          <section className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-8 motion-safe:animate-[fade-up_0.8s_ease-out_both]">
              <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-[var(--bg-alt)]/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Available for select projects
              </div>
              <div className="space-y-6">
                <h1 className="display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
                  I build memorable frontend experiences that ship fast and sell.
                </h1>
                <p className="max-w-xl text-base text-[var(--muted)] md:text-lg">
                  React + TypeScript developer focused on modern UI systems,
                  premium motion, and conversion-ready layouts. I help teams turn
                  complex ideas into clean, high-performing interfaces.
                </p>
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  className="rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
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
                  <p className="text-2xl font-semibold text-white">6+ years</p>
                  <p>Frontend delivery</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[var(--bg-alt)]/70 p-4">
                  <p className="text-2xl font-semibold text-white">24</p>
                  <p>Products shipped</p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-[var(--bg-alt)]/70 p-4">
                  <p className="text-2xl font-semibold text-white">3.2s</p>
                  <p>Avg. LCP wins</p>
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
                      Portfolio refresh for a growth team
                    </h2>
                  </div>
                  <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-[var(--muted)]">
                    2024
                  </span>
                </div>
                <p className="text-sm text-[var(--muted)]">
                  Modular sections, custom icons, and staggered motion that keep
                  visitors engaged and scrolling.
                </p>
                <div className="grid gap-3">
                  {['Hero redesign', 'Tailwind v4 tokens', 'Animated case cards'].map(
                    (item) => (
                      <div
                        className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm"
                        key={item}
                      >
                        <span>{item}</span>
                        <span className="text-xs text-[var(--muted)]">Done</span>
                      </div>
                    ),
                  )}
                </div>
              </div>
              <div className="absolute -right-6 bottom-[-12px] hidden w-[220px] rounded-3xl border border-white/10 bg-[var(--surface)]/90 p-5 text-sm text-[var(--muted)] shadow-xl motion-safe:animate-[float_7s_ease-in-out_infinite] lg:block">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Availability
                </p>
                <p className="mt-2 text-lg font-semibold text-white">
                  Next slot: May 2026
                </p>
                <p className="mt-2">
                  Remote-first, CET time zone, async-friendly.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>

      <main className="mx-auto max-w-6xl space-y-24 px-6 pb-24">
        <section
          className="grid gap-10 rounded-[var(--radius)] border border-white/10 bg-[var(--bg-alt)]/70 p-10 md:grid-cols-[1.1fr_0.9fr]"
          id="about"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              About
            </p>
            <h2 className="text-3xl font-semibold">
              Frontend partner for founders, agencies, and product teams.
            </h2>
            <p className="text-[var(--muted)]">
              I specialize in high-clarity UI architecture, from rapid MVPs to
              polished marketing sites. I work in React, TypeScript, Tailwind,
              and modern motion tooling to craft sites that feel alive and easy
              to navigate.
            </p>
          </div>
          <div className="space-y-4">
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
              <p className="text-sm text-[var(--muted)]">Core stack</p>
              <div className="mt-4 flex flex-wrap gap-2 text-sm">
                {[
                  'React',
                  'TypeScript',
                  'Tailwind v4',
                  'Vite',
                  'Zustand',
                  'Framer Motion',
                  'Figma',
                ].map((item) => (
                  <span
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                    key={item}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="grid gap-3 text-sm text-[var(--muted)] sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Product UI audits
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Brand-to-web translation
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Conversion-driven layouts
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                Accessibility improvements
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-8" id="services">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Services
              </p>
              <h2 className="text-3xl font-semibold">
                Design-forward, code-tight delivery.
              </h2>
            </div>
            <p className="max-w-lg text-sm text-[var(--muted)]">
              From first concept to shipped frontend, I focus on clarity,
              performance, and delightful interactions.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {services.map((service) => (
              <div
                className="group rounded-[var(--radius)] border border-white/10 bg-[var(--bg-alt)]/60 p-6 transition hover:-translate-y-1 hover:border-white/30"
                key={service.title}
              >
                <h3 className="text-xl font-semibold">{service.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  {service.detail}
                </p>
                <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Learn more
                  <span className="text-base text-white transition group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="space-y-8" id="projects">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div className="space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Selected projects
              </p>
              <h2 className="text-3xl font-semibold">
                Recent work that moves the needle.
              </h2>
            </div>
            <a
              className="text-sm font-semibold text-[var(--accent)]"
              href="#contact"
            >
              Request full case studies
            </a>
          </div>
          <div className="grid gap-6 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                className="flex h-full flex-col rounded-[var(--radius)] border border-white/10 bg-[var(--surface)]/80 p-6 shadow-[0_30px_80px_rgba(7,10,18,0.5)] transition hover:-translate-y-1 hover:border-white/30"
                key={project.title}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm text-[var(--muted)]">{project.role}</p>
                  <a
                    className="text-xs uppercase tracking-[0.3em] text-[var(--accent)]"
                    href={project.link}
                  >
                    View
                  </a>
                </div>
                <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm text-[var(--muted)]">
                  {project.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
                  {project.stack.map((item) => (
                    <span
                      className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                      key={item}
                    >
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-auto pt-6 text-sm font-semibold text-white">
                  {project.result}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section
          className="grid gap-10 rounded-[var(--radius)] border border-white/10 bg-[var(--bg-alt)]/70 p-10 md:grid-cols-[1.1fr_0.9fr]"
          id="contact"
        >
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Contact
            </p>
            <h2 className="text-3xl font-semibold">Let us build your next UI.</h2>
            <p className="text-[var(--muted)]">
              Tell me about your product, timeline, and goals. I reply within
              24-48h with next steps and a clear scope proposal.
            </p>
            <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-sm text-[var(--muted)]">
              <p className="text-white">Email</p>
              <p>hello@yourdomain.com</p>
              <p className="mt-4 text-white">Location</p>
              <p>Warsaw, Poland (remote)</p>
            </div>
          </div>
          <form className="space-y-4">
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Name
                </label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
                  placeholder="Your name"
                  type="text"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                  Email
                </label>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
                  placeholder="you@email.com"
                  type="email"
                />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Project
              </label>
              <input
                className="w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
                placeholder="Website, product, redesign, etc."
                type="text"
              />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
                Details
              </label>
              <textarea
                className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white outline-none transition focus:border-[var(--accent)]"
                placeholder="Timeline, goals, success metrics..."
              />
            </div>
            <button
              className="w-full rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black transition hover:translate-y-[-1px]"
              type="button"
            >
              Send message
            </button>
            <p className="text-xs text-[var(--muted)]">
              The form is static for now. Hook it to your email or backend when
              ready.
            </p>
          </form>
        </section>
      </main>

      <footer className="border-t border-white/10 py-10 text-center text-xs text-[var(--muted)]">
        © 2026 Mateusz. Built with React, TypeScript, and Tailwind.
      </footer>
    </div>
  )
}

export default App
