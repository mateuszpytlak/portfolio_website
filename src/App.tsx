import About from './sections/About'
import Contact from './sections/Contact'
import Footer from './sections/Footer'
import Header from './sections/Header'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import Services from './sections/Services'

function App() {
  return (
    <div className="min-h-screen bg-[var(--bg)] text-[var(--text)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-40 right-0 h-[520px] w-[520px] rounded-full bg-[var(--accent-2)]/25 blur-[140px]" />
        <div className="pointer-events-none absolute left-[-120px] top-36 h-[420px] w-[420px] rounded-full bg-[var(--accent)]/20 blur-[120px]" />
        <div className="mx-auto max-w-6xl px-6 pt-10">
          <Header />
          <Hero />
        </div>
      </div>

      <main className="mx-auto max-w-6xl space-y-24 px-6 pb-24">
        <About />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
