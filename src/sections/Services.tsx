import { services } from '../data/services'

function Services() {
  return (
    <section className="space-y-8" id="services">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Strengths
          </p>
          <h2 className="text-3xl font-semibold">
            What I bring to a frontend team.
          </h2>
        </div>
        <p className="max-w-lg text-sm text-[var(--muted)]">
          I focus on reliable UI delivery, clean collaboration with design, and
          steady iteration with product and engineering.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {services.map((service) => (
          <div
            className="group rounded-[var(--radius)] border border-white/10 bg-[var(--bg-alt)]/60 p-6 transition hover:-translate-y-1 hover:border-white/30"
            key={service.title}
          >
            <h3 className="text-xl font-semibold">{service.title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">{service.detail}</p>
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
  )
}

export default Services
