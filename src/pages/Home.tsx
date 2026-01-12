import About from '../sections/About'
import Contact from '../sections/Contact'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Services from '../sections/Services'
import PageShell from '../components/PageShell'

function Home() {
  return (
    <PageShell mainClassName="space-y-24" top={<Hero />}>
      <About />
      <Services />
      <Projects />
      <Contact />
    </PageShell>
  )
}

export default Home
