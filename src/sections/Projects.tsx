import { motion } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'

import { projects, type Project } from '../data/projects'
import { fadeUp, staggerContainer } from '../lib/animations'

type ProjectCardProps = {
  project: Project
}

function ProjectCard({ project }: ProjectCardProps) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const [rx, setRx] = useState(24)

  const gallery =
    project.thumbGallery && project.thumbGallery.length > 0
      ? project.thumbGallery
      : []

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(([entry]) => {
      // rounded-3xl = 24px; convert to SVG viewBox units (viewBox width = 400)
      setRx((24 / entry.contentRect.width) * 400)
    })
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (!isHovering || gallery.length <= 1) return
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % gallery.length)
    }, 1400)
    return () => window.clearInterval(timer)
  }, [gallery.length, isHovering])

  const handleHoverStart = () => {
    if (gallery.length > 1) setIsHovering(true)
  }

  const handleHoverEnd = () => {
    setIsHovering(false)
    setActiveIndex(0)
  }

  const cwPath = `M 200 1 L ${400 - rx} 1 Q 399 1 399 ${rx} L 399 ${300 - rx} Q 399 299 ${400 - rx} 299 L 200 299`
  const ccwPath = `M 200 1 L ${rx} 1 Q 1 1 1 ${rx} L 1 ${300 - rx} Q 1 299 ${rx} 299 L 200 299`

  const strokeProps = {
    pathLength: '1' as const,
    stroke: 'var(--accent)',
    strokeLinecap: 'round' as const,
    strokeWidth: '2',
    style: { strokeDasharray: 1, animation: 'fillProgress 1400ms linear forwards' },
  }

  return (
    <motion.article
      variants={fadeUp}
      className="relative flex h-full flex-col rounded-(--radius) border border-white/10 bg-(--surface)/80 p-6 shadow-[0_30px_80px_rgba(7,10,18,0.5)] transition hover:-translate-y-1 hover:border-white/30"
      onMouseEnter={handleHoverStart}
      onMouseLeave={handleHoverEnd}
      key={project.title}
    >
      <Link
        aria-label={`Open ${project.title} case study`}
        className="absolute inset-0 z-10"
        to={`/projects/${project.slug}`}
      />
      {/* Outer div: rounded border, no overflow-hidden so SVG is not clipped */}
      <div
        ref={containerRef}
        className="relative aspect-4/3 w-full rounded-3xl border border-white/10 bg-(--bg-alt)/70"
      >
        {/* Inner div: overflow-hidden only for the slideshow */}
        <div className="absolute inset-0 overflow-hidden rounded-[inherit]">
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
            <div className="flex h-full items-end bg-linear-to-br from-white/10 via-transparent to-black/30 p-4 text-xs uppercase tracking-[0.3em] text-(--muted)">
              Screenshot placeholder
            </div>
          )}
        </div>
        {/* SVG border animation — sibling of inner div, not inside overflow-hidden */}
        {isHovering && gallery.length > 1 && (
          <svg
            key={activeIndex}
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-10 h-full w-full"
            fill="none"
            viewBox="0 0 400 300"
          >
            <path d={cwPath} {...strokeProps} />
            <path d={ccwPath} {...strokeProps} />
          </svg>
        )}
      </div>
      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="text-sm text-(--muted)">{project.role}</p>
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-(--accent)">
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
          {project.storeUrl ? (
            <a
              className="relative z-20 hover:text-white"
              href={project.storeUrl}
              target="_blank"
              rel="noreferrer"
            >
              Google Play
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
      <p className="mt-3 text-sm text-(--muted)">{project.summary}</p>
      <div className="mt-4 flex flex-wrap gap-2 text-xs text-(--muted)">
        {project.stack.map((item) => (
          <span
            className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
            key={item}
          >
            {item}
          </span>
        ))}
      </div>
      <p className="mt-4 text-sm font-semibold text-(--accent)">
        View case study
      </p>
      <p className="mt-auto pt-6 text-sm font-semibold text-white">
        Outcome: {project.result}
      </p>
    </motion.article>
  )
}

function Projects() {
  return (
    <section className="space-y-8" id="projects">
      <motion.div
        className="flex flex-wrap items-end justify-between gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
            Selected projects
          </p>
          <h2 className="text-3xl font-semibold">
            Recent work that moves the needle.
          </h2>
        </div>
        <a className="text-sm font-semibold text-(--accent)" href="#contact">
          Request full case studies
        </a>
      </motion.div>

      <motion.div
        className="grid gap-6 lg:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </motion.div>
    </section>
  )
}

export default Projects
