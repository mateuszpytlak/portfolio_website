function Header() {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6">
      <div className="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full border border-white/10 bg-[var(--bg-alt)]/80" />
        <div>
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--muted)]">
            Frontend Portfolio
          </p>
          <p className="text-lg font-semibold">Mateusz Pytlak</p>
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
  )
}

export default Header
