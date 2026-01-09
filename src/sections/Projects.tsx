import { projects } from '../data/projects'

function Projects() {
  return (
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
        <a className="text-sm font-semibold text-[var(--accent)]" href="#contact">
          Request full case studies
        </a>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        {projects.map((project) => (
          <article
            className="flex h-full flex-col rounded-[var(--radius)] border border-white/10 bg-[var(--surface)]/80 p-6 shadow-[0_30px_80px_rgba(7,10,18,0.5)] transition hover:-translate-y-1 hover:border-white/30"
            key={project.title}
          >
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm text-[var(--muted)]">{project.role}</p>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
                <a className="hover:text-white" href={project.live} target="_blank">
                  Live
                </a>
                <a className="hover:text-white" href={project.repo} target="_blank">
                  GitHub
                </a>
              </div>
            </div>
            <h3 className="mt-4 text-xl font-semibold">{project.title}</h3>
            <p className="mt-3 text-sm text-[var(--muted)]">{project.summary}</p>
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
  )
}

export default Projects
