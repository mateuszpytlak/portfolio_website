import avatar from "../assets/avatar.jpg"

function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6">
      <a className="flex items-center gap-3" href="/">
        <div className="h-10 w-10 overflow-hidden rounded-full border border-white/10 bg-[var(--bg-alt)]/80">
          <img
            alt="Mateusz Pytlak"
            className="h-full w-full object-cover"
            src={avatar}
          />
        </div>
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
            Frontend Portfolio
          </p>
          <p className="text-lg font-semibold">Mateusz Pytlak</p>
        </div>
      </a>
      <nav className="flex flex-wrap items-center gap-6 text-sm leading-none text-[var(--muted)]">
        <a className="inline-flex items-center py-2 hover:text-white" href="/#about">
          About
        </a>
        <a className="inline-flex items-center py-2 hover:text-white" href="/#strengths">
          Strengths
        </a>
        <a className="inline-flex items-center py-2 hover:text-white" href="/#projects">
          Projects
        </a>
        <a className="inline-flex items-center py-2 hover:text-white" href="/#contact">
          Contact
        </a>
      </nav>
    </header>
  )
}

export default Header
