import { motion } from 'framer-motion'

import { fadeUp, staggerContainer, staggerContainerSlow } from '../lib/animations'

const highlights = [
  '5 years experience',
  'React + TypeScript + Tailwind',
  'Frontend Developer roles',
]

const currentYear = new Date().getFullYear()

function Hero() {
  return (
    <motion.section
      className="grid gap-12 py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center"
      variants={staggerContainerSlow}
      initial="hidden"
      animate="show"
    >
      <div className="space-y-8">
        <motion.div
          variants={fadeUp}
          className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-(--bg-alt)/70 px-4 py-2 text-xs uppercase tracking-[0.3em] text-(--muted)"
        >
          Open to frontend opportunities
        </motion.div>

        <motion.div variants={fadeUp} className="space-y-6">
          <h1 className="display text-4xl font-semibold leading-tight md:text-5xl lg:text-6xl">
            Mateusz Pytlak - Frontend Developer. React, TypeScript, Tailwind.
          </h1>
          <p className="max-w-xl text-base text-(--muted) md:text-lg">
            5 years in web development across React, Angular, Vue, PHP, and
            WordPress. These days I'm focused on React + TypeScript - clean
            components, good performance, working closely with design. AI tools
            are part of the day-to-day; they help me move faster on the routine
            stuff.
          </p>
        </motion.div>

        <motion.div variants={fadeUp} className="flex flex-wrap gap-4">
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="rounded-full border border-black/10 bg-(--accent) px-6 py-3 text-sm font-semibold text-black shadow-[0_12px_28px_rgba(108,246,208,0.28)]"
            href="#projects"
          >
            View Projects
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.93 }}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white"
            href="#contact"
          >
            Share a Role
          </motion.a>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          className="grid max-w-xl gap-4 text-sm text-(--muted) sm:grid-cols-3"
        >
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-(--bg-alt)/70 p-4"
          >
            <p className="text-2xl font-semibold text-white">5 years</p>
            <p>Web development</p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-(--bg-alt)/70 p-4"
          >
            <p className="text-2xl font-semibold text-white">Multi-stack</p>
            <p>React, Vue, Angular</p>
          </motion.div>
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-white/10 bg-(--bg-alt)/70 p-4"
          >
            <p className="text-2xl font-semibold text-white">Focus</p>
            <p>React + TS + Tailwind</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="relative">
        <div className="absolute inset-0 rounded-(--radius) border border-white/10 bg-linear-to-br from-white/5 via-transparent to-white/5" />
        <div className="relative space-y-6 rounded-(--radius) border border-white/10 bg-(--bg-alt)/80 p-8 shadow-[0_25px_80px_rgba(12,14,20,0.65)]">
          <div className="flex items-start justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
                Spotlight
              </p>
              <h2 className="text-2xl font-semibold">Recruiter snapshot</h2>
            </div>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs text-(--muted)">
              {currentYear}
            </span>
          </div>
          <p className="text-sm text-(--muted)">
            Open to frontend roles. Based in Poznan, available for remote and
            hybrid opportunities.
          </p>

          <motion.div
            variants={staggerContainer}
            className="grid gap-3"
          >
            {highlights.map((item) => (
              <motion.div
                variants={fadeUp}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-sm"
                key={item}
              >
                <span>{item}</span>
                <span className="text-xs text-(--muted)">Done</span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <div className="absolute -right-6 -bottom-3 hidden w-55 rounded-3xl border border-white/10 bg-(--surface)/90 p-5 text-sm text-(--muted) shadow-xl motion-safe:animate-[float_7s_ease-in-out_infinite] lg:block">
          <p className="text-xs uppercase tracking-[0.3em] text-(--muted)">
            Based in
          </p>
          <p className="mt-2 text-lg font-semibold text-white">Poznań, Poland</p>
          <p className="mt-2">Open to remote and hybrid roles.</p>
        </div>
      </motion.div>
    </motion.section>
  )
}

export default Hero
