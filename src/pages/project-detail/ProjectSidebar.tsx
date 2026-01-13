type ProjectSidebarProps = {
  stackDetailed: string[]
  challenges: string[]
}

function ProjectSidebar({ stackDetailed, challenges }: ProjectSidebarProps) {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-white/10 bg-[var(--bg-alt)]/60 p-6">
        <p className="text-sm text-[var(--muted)]">Detailed stack</p>
        <div className="mt-4 flex flex-wrap gap-2 text-sm">
          {stackDetailed.map((item) => (
            <span
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div className="rounded-3xl border border-white/10 bg-[var(--surface)]/70 p-6">
        <p className="text-sm text-[var(--muted)]">Challenges</p>
        <div className="mt-4 space-y-3 text-sm text-[var(--muted)]">
          {challenges.map((challenge) => (
            <div
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
              key={challenge}
            >
              {challenge}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default ProjectSidebar
