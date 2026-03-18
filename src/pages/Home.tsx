import About from '../sections/About'
import Contact from '../sections/Contact'
import Hero from '../sections/Hero'
import Projects from '../sections/Projects'
import Strengths from '../sections/Strengths'
import PageShell from '../components/PageShell'

function Home() {
  return (
    <PageShell mainClassName="space-y-24" top={<Hero />}>
      <About />
      <Strengths />
      <Projects />
      <Contact />
    </PageShell>
  )
}

export default Home
