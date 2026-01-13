import { useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import PageShell from '../components/PageShell'
import { projects } from '../data/projects'
import ProjectGallery from './project-detail/ProjectGallery'
import ProjectOverviewArcRaiders from './project-detail/ProjectOverviewArcRaiders'
import ProjectOverviewEcommerce from './project-detail/ProjectOverviewEcommerce'
import ProjectOverviewMotorsport from './project-detail/ProjectOverviewMotorsport'
import ProjectSidebar from './project-detail/ProjectSidebar'

function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((item) => item.slug === slug)

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [project?.slug])

  if (!project) {
    return (
      <PageShell>
        <section className="py-20 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Project
          </p>
          <h1 className="mt-4 text-3xl font-semibold">Project not found</h1>
          <p className="mt-4 text-sm text-[var(--muted)]">
            Try going back to the project list.
          </p>
          <Link
            className="mt-8 inline-flex rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            to="/#projects"
          >
            Back to projects
          </Link>
        </section>
      </PageShell>
    )
  }

  return (
    <PageShell>
      <section className="space-y-12 py-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
            Case study
          </p>
          <h1 className="text-3xl font-semibold md:text-4xl">{project.title}</h1>
          <p className="text-sm text-[var(--muted)]">{project.role}</p>
          <div className="flex flex-wrap gap-3">
            {project.live ? (
              <a
                className="rounded-full border border-black/10 bg-[var(--accent)] px-5 py-2 text-xs font-semibold text-black transition hover:brightness-95"
                href={project.live}
                rel="noreferrer"
                target="_blank"
              >
                Live project
              </a>
            ) : null}
            {project.repo ? (
              <a
                className="rounded-full border border-white/15 px-5 py-2 text-xs font-semibold text-white transition hover:border-white/40"
                href={project.repo}
                rel="noreferrer"
              >
                GitHub
              </a>
            ) : null}
          </div>
        </div>
        <ProjectGallery
          gallery={project.gallery}
          projectSlug={project.slug}
          projectTitle={project.title}
        />
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
            {project.slug === 'mini-ecommerce-app' ? (
              <ProjectOverviewEcommerce />
            ) : project.slug === 'arc-raiders-loot-table' ? (
              <ProjectOverviewArcRaiders />
            ) : project.slug === 'f1-weekend-widget' ? (
              <ProjectOverviewMotorsport />
            ) : (
              project.description.map((paragraph) => (
                <p className="text-sm text-[var(--muted)]" key={paragraph}>
                  {paragraph}
                </p>
              ))
            )}
          </div>
          <ProjectSidebar
            challenges={project.challenges}
            stackDetailed={project.stackDetailed}
          />
        </div>

        <div className="flex flex-wrap items-center justify-between gap-4 rounded-[var(--radius)] border border-white/10 bg-[var(--surface)]/70 p-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-[var(--muted)]">
              Next
            </p>
            <p className="mt-2 text-lg font-semibold">Interested in details?</p>
            <p className="mt-2 text-sm text-[var(--muted)]">
              I can share more context and decisions behind the build.
            </p>
          </div>
          <Link
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40"
            to="/#contact"
          >
            Send role details
          </Link>
        </div>
      </section>
    </PageShell>
  )
}

export default ProjectDetail
