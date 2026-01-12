import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { projects } from '../data/projects'

type Project = (typeof projects)[number]

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const gallery =
    project.thumbGallery && project.thumbGallery.length > 0
      ? project.thumbGallery
      : []

  useEffect(() => {
    if (!isHovering || gallery.length <= 1) {
      return
    }

    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % gallery.length)
    }, 1400)

    return () => window.clearInterval(timer)
  }, [gallery.length, isHovering])

  const handleHoverStart = () => {
    if (gallery.length > 1) {
      setIsHovering(true)
    }
  }

  const handleHoverEnd = () => {
    setIsHovering(false)
    setActiveIndex(0)
  }

  return (
    <article
      className="relative flex h-full flex-col rounded-[var(--radius)] border border-white/10 bg-[var(--surface)]/80 p-6 shadow-[0_30px_80px_rgba(7,10,18,0.5)] transition hover:-translate-y-1 hover:border-white/30"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      key={project.title}
    >
      <Link
        aria-label={`Open ${project.title} case study`}
        className="absolute inset-0 z-10"
        to={`/projects/${project.slug}`}
      />
      <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-white/10 bg-[var(--bg-alt)]/70">
        {gallery.length > 0 ? (
          <div
            className="flex h-full transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {gallery.map((image, index) => (
              <img
                alt={`${project.title} screenshot ${index + 1}`}
                className="h-full w-full min-w-full object-cover"
                key={`${project.slug}-thumb-${index}`}
                loading="lazy"
                src={image}
              />
            ))}
          </div>
        ) : (
          <div className="flex h-full items-end bg-gradient-to-br from-white/10 via-transparent to-black/30 p-4 text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Screenshot placeholder
          </div>
        )}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-[var(--muted)]">{project.role}</p>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[var(--accent)]">
          {project.live ? (
            <a
              className="relative z-20 hover:text-white"
              href={project.live}
              target="_blank"
              rel="noreferrer"
            >
              Live
            </a>
          ) : null}
          {project.repo ? (
            <a
              className="relative z-20 hover:text-white"
              href={project.repo}
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          ) : null}
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
      <p className="mt-4 text-sm font-semibold text-[var(--accent)]">
        View case study
      </p>
      <p className="mt-auto pt-6 text-sm font-semibold text-white">
        Outcome: {project.result}
      </p>
    </article>
  )
}

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
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}

export default Projects
