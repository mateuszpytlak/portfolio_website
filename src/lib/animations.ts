import type { Variants } from 'framer-motion'

// ─── Fade up ────────────────────────────────────────────────────────────────
// Element starts invisible and shifted down, animates to full visibility.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.1, 0.25, 1] },
  },
}

// ─── Fade in (no shift) ──────────────────────────────────────────────────────
export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.4, ease: 'easeOut' },
  },
}

// ─── Stagger container ───────────────────────────────────────────────────────
// Parent that distributes children animations over time.
// staggerChildren: each child starts 0.1s after the previous one.
export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

// ─── Stagger container (slower — for hero section) ───────────────────────────
export const staggerContainerSlow: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
}

// ─── Scale in (for tags/pills) ───────────────────────────────────────────────
// Tags appear with a subtle spring "pop" effect.
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.3, ease: [0.34, 1.56, 0.64, 1] },
  },
}

// ─── Page transition ─────────────────────────────────────────────────────────
// Used with AnimatePresence for route transitions.
export const pageVariants: Variants = {
  initial: { opacity: 0, y: 12 },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: [0.25, 0.1, 0.25, 1] },
  },
  exit: {
    opacity: 0,
    y: -8,
    transition: { duration: 0.2, ease: 'easeIn' },
  },
}
