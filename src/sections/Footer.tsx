function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-xs text-[var(--muted)] md:flex-row">
        <p>© 2026 Mateusz Pytlak. Built with React, TypeScript, and Tailwind.</p>
        <div className="flex flex-wrap items-center gap-4">
          <a className="hover:text-white" href="mailto:hello@yourdomain.com">
            hello@yourdomain.com
          </a>
          <a
            className="hover:text-white"
            href="https://github.com/mateuszpytlak"
          >
            GitHub
          </a>
          <a
            className="hover:text-white"
            href="https://www.linkedin.com/in/mateusz-pytlak/"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
