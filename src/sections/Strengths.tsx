import { motion } from 'framer-motion'

import { strengths } from '../data/strengths'
import { fadeUp, staggerContainer } from '../lib/animations'

function Strengths() {
  return (
    <section className="space-y-8" id="strengths">
      <motion.div
        className="flex flex-wrap items-end justify-between gap-4"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="space-y-2">
          <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
            Strengths
          </p>
          <h2 className="text-3xl font-semibold">
            What I bring to a frontend team.
          </h2>
        </div>
        <p className="max-w-lg text-sm text-(--muted)">
          I work directly with design and product - turning specs into
          working UI and iterating until it's right.
        </p>
      </motion.div>

      <motion.div
        className="grid gap-6 md:grid-cols-3"
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
      >
        {strengths.map((item) => (
          <motion.div
            variants={fadeUp}
            className="group rounded-(--radius) border border-white/10 bg-(--bg-alt)/60 p-6 transition hover:-translate-y-1 hover:border-white/30"
            key={item.title}
          >
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="mt-3 text-sm text-(--muted)">{item.detail}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}

export default Strengths
