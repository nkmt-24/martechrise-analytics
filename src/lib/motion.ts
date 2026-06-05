import type { Variants, Transition } from 'framer-motion'

/* ============================================================
   MOTION SYSTEM — MarTechRise
   Centralized animation presets and easing curves.

   USAGE:
     import { fadeUp, transitions, staggerContainer } from '@/lib/motion'
     <motion.div variants={fadeUp} initial="hidden" animate="visible" />

   PRINCIPLE:
     - Premium = intentional, not flashy
     - Entrance animations: 0.4–0.6s, ease-spring
     - Hover: 0.15–0.2s, ease-out
     - Stagger: 0.06–0.1s per child
   ============================================================ */

/* ── Easings ── */
export const easings = {
  spring:   [0.22, 1, 0.36, 1]   as [number, number, number, number],
  outExpo:  [0.16, 1, 0.3, 1]    as [number, number, number, number],
  inOut:    [0.4, 0, 0.2, 1]     as [number, number, number, number],
  outQuart: [0.25, 1, 0.5, 1]    as [number, number, number, number],
} as const

/* ── Base Transitions ── */
export const transitions = {
  instant:  { duration: 0.10, ease: easings.spring } satisfies Transition,
  fast:     { duration: 0.18, ease: easings.spring } satisfies Transition,
  base:     { duration: 0.35, ease: easings.spring } satisfies Transition,
  slow:     { duration: 0.55, ease: easings.spring } satisfies Transition,
  slower:   { duration: 0.80, ease: easings.spring } satisfies Transition,
  spring:   { type: 'spring', stiffness: 280, damping: 28 } satisfies Transition,
  snappy:   { type: 'spring', stiffness: 400, damping: 35 } satisfies Transition,
} as const

/* ── Reveal Variants ──
   Use with whileInView + viewport={{ once: true }} for scroll reveals.
── */
export const fadeUp: Variants = {
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
}

export const fadeDown: Variants = {
  hidden:  { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn: Variants = {
  hidden:  { opacity: 0 },
  visible: { opacity: 1 },
}

export const scaleIn: Variants = {
  hidden:  { opacity: 0, scale: 0.94 },
  visible: { opacity: 1, scale: 1 },
}

export const slideInLeft: Variants = {
  hidden:  { opacity: 0, x: -32 },
  visible: { opacity: 1, x: 0 },
}

export const slideInRight: Variants = {
  hidden:  { opacity: 0, x: 32 },
  visible: { opacity: 1, x: 0 },
}

export const blurIn: Variants = {
  hidden:  { opacity: 0, filter: 'blur(8px)', y: 12 },
  visible: { opacity: 1, filter: 'blur(0px)', y: 0 },
}

/* ── Stagger Container ──
   Wrap stagger children with this on the parent.
── */
export function staggerContainer(
  staggerChildren = 0.07,
  delayChildren = 0,
): Variants {
  return {
    hidden:  {},
    visible: { transition: { staggerChildren, delayChildren } },
  }
}

/* ── Navbar Variants ── */
export const navbarReveal: Variants = {
  hidden:  { y: -44, opacity: 0 },
  visible: { y: 0, opacity: 1 },
}

/* ── Dropdown Panel Variants ── */
export const dropdownPanel: Variants = {
  hidden:  { opacity: 0, y: -10, scale: 0.97 },
  visible: { opacity: 1, y: 0,   scale: 1 },
  exit:    { opacity: 0, y: -10, scale: 0.97 },
}

/* ── Stagger Item ──
   Use inside staggerContainer parents.
── */
export const staggerItem: Variants = {
  hidden:  { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0 },
}

/* ── Mobile Menu ── */
export const mobileMenu: Variants = {
  hidden:  { opacity: 0, x: '100%' },
  visible: { opacity: 1, x: '0%' },
  exit:    { opacity: 0, x: '100%' },
}

export const mobileMenuItem: Variants = {
  hidden:  { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0 },
}

/* ── Hover Presets ──
   Use directly as whileHover values.
── */
export const hoverScale    = { scale: 1.03 } as const
export const hoverLift     = { y: -3, scale: 1.01 } as const
export const hoverGlow     = { boxShadow: 'var(--shadow-glow-sm)' } as const
