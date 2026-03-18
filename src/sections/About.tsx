import { motion } from 'framer-motion'

import { fadeUp, scaleIn, staggerContainer } from '../lib/animations'

const stack = [
  'React',
  'TypeScript',
  'Tailwind v4',
  'Vite',
  'Zustand',
  'Framer Motion',
  'Figma',
  'AI-assisted workflows',
]

const focusAreas = [
  'Product UI audits',
  'Brand-to-web translation',
  'Conversion-driven layouts',
  'Accessibility improvements',
]

function About() {
  return (
    <motion.section
      className="grid gap-10 rounded-(--radius) border border-white/10 bg-(--bg-alt)/70 p-10 md:grid-cols-[1.1fr_0.9fr]"
      id="about"
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
    >
      <motion.div variants={fadeUp} className="space-y-4">
        <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
          About
        </p>
        <h2 className="text-3xl font-semibold">
          Frontend developer focused on shipping reliable UI.
        </h2>
        <p className="text-(--muted)">
          I have an MEng in Building Services Engineering from Poznan University
          of Technology and moved into frontend development. I've worked across
          React, Angular, Vue, PHP, and WordPress over the past 5 years.
        </p>
        <p className="text-(--muted)">
          Right now I'm focused on React + TypeScript. I work closely with
          design and product - translating specs into working UI and catching
          issues before they reach review.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="space-y-4">
        <div className="rounded-3xl border border-white/10 bg-black/30 p-6">
          <p className="text-sm text-(--muted)">Core stack</p>

          <motion.div
            className="mt-4 flex flex-wrap gap-2 text-sm"
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.5 }}
          >
            {stack.map((item) => (
              <motion.span
                variants={scaleIn}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1"
                key={item}
              >
                {item}
              </motion.span>
            ))}
          </motion.div>
        </div>

        <motion.div
          className="grid gap-3 text-sm text-(--muted) sm:grid-cols-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
        >
          {focusAreas.map((item) => (
            <motion.div
              variants={fadeUp}
              className="rounded-2xl border border-white/10 bg-black/20 p-4"
              key={item}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

export default About
