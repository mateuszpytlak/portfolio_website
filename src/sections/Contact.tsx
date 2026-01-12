function Contact() {
  return (
    <section
      className="grid gap-10 rounded-[var(--radius)] border border-white/10 bg-[var(--bg-alt)]/70 p-10 md:grid-cols-[1.1fr_0.9fr]"
      id="contact"
    >
      <div className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
          Contact
        </p>
        <h2 className="text-3xl font-semibold">Let's build your next UI.</h2>
        <p className="text-[var(--muted)]">
          Tell me about your product, timeline, and goals. I reply within 24-48h
          with next steps and a clear scope proposal.
        </p>
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6 text-sm text-[var(--muted)]">
          <p className="text-white">Email</p>
          <a className="underline decoration-white/30" href="mailto:hello@yourdomain.com">
            hello@yourdomain.com
          </a>
          <p className="mt-4 text-white">Links</p>
          <div className="flex flex-wrap gap-3">
            <a
              className="underline decoration-white/30"
              href="https://github.com/mateuszpytlak"
            >
              GitHub
            </a>
            <a
              className="underline decoration-white/30"
              href="https://www.linkedin.com/in/mateusz-pytlak/"
            >
              LinkedIn
            </a>
          </div>
          <p className="mt-4 text-white">Location</p>
          <p>Poznan, Poland (remote)</p>
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
          className="w-full rounded-full border border-black/10 bg-[var(--accent)] px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_28px_rgba(108,246,208,0.28)] transition hover:translate-y-[-1px] hover:brightness-95"
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
  )
}

export default Contact
