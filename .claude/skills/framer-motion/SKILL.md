# Framer Motion

## Purpose

Add Framer Motion animations to MarTechRise React components — page transitions, scroll-triggered reveals, micro-interactions, and layout animations — without breaking SSR or Core Web Vitals.

## Rules

- Framer Motion components require `'use client'` — all animated components are client components
- Never animate LCP elements (hero H1, hero image) — they must paint instantly
- Use `whileInView` for scroll reveals — simpler than GSAP for component-level animations
- Use `AnimatePresence` for conditional render animations (dropdowns, modals)
- Use `layout` prop for smooth layout shifts (adding/removing items from lists)
- Respect `useReducedMotion()` hook — disable all animations if user prefers reduced motion
- Keep `duration` short: reveals 0.4–0.6s, hover effects 0.15–0.25s
- Use `viewport={{ once: true }}` on `whileInView` — don't replay on scroll back

## Installation

```bash
npm install framer-motion
```

## Pattern — Scroll Reveal Wrapper

```tsx
'use client'
import { motion, useReducedMotion } from 'framer-motion'

interface Props {
  children: React.ReactNode
  delay?: number
  className?: string
}

export default function FadeUp({ children, delay = 0, className }: Props) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={shouldReduceMotion ? false : { opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.55, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  )
}
```

Usage:
```tsx
<FadeUp delay={0}>
  <h2 className="text-3xl font-bold text-white">How It Works</h2>
</FadeUp>
<FadeUp delay={0.1}>
  <p className="text-slate-300">Step one explanation</p>
</FadeUp>
```

## Pattern — Stagger Children (Card Grid)

```tsx
'use client'
import { motion, useReducedMotion } from 'framer-motion'

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function ServiceGrid({ services }: { services: Service[] }) {
  const shouldReduceMotion = useReducedMotion()

  return (
    <motion.div
      className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
      variants={shouldReduceMotion ? {} : container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: '-60px' }}
    >
      {services.map((service) => (
        <motion.div key={service.slug} variants={shouldReduceMotion ? {} : item}>
          {/* Service card content */}
        </motion.div>
      ))}
    </motion.div>
  )
}
```

## Pattern — Hover Interaction (Button / Card)

```tsx
'use client'
import { motion } from 'framer-motion'

export default function CTAButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      className="inline-flex items-center gap-2 border border-cyan-400 bg-cyan-400 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950"
      whileHover={{ scale: 1.02, backgroundColor: 'transparent', color: '#22d3ee' }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.15 }}
    >
      {children}
    </motion.a>
  )
}
```

## Pattern — AnimatePresence (Dropdown / Modal)

```tsx
'use client'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

export default function ServicesDropdown() {
  const [open, setOpen] = useState(false)

  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}>Services</button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="absolute left-0 top-full mt-2 w-64 rounded-lg bg-slate-900 shadow-2xl"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.18, ease: 'easeOut' }}
          >
            {/* Dropdown items */}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
```

## Pattern — Process Steps Sequence

```tsx
'use client'
import { motion, useReducedMotion } from 'framer-motion'

const steps = [
  { number: '01', title: 'Discovery & Audit', body: '...' },
  { number: '02', title: 'Architecture Design', body: '...' },
  { number: '03', title: 'Implementation', body: '...' },
  { number: '04', title: 'QA & Validation', body: '...' },
]

export default function ProcessSteps() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <ol className="space-y-8">
      {steps.map((step, i) => (
        <motion.li
          key={step.number}
          className="flex gap-6"
          initial={shouldReduceMotion ? false : { opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.12, ease: 'easeOut' }}
        >
          <span className="font-mono text-3xl font-bold text-cyan-400">{step.number}</span>
          <div>
            <h3 className="text-xl font-semibold text-white">{step.title}</h3>
            <p className="mt-2 text-slate-400">{step.body}</p>
          </div>
        </motion.li>
      ))}
    </ol>
  )
}
```

## MarTechRise Animation Vocabulary

| Element | Framer Pattern | Duration |
|---|---|---|
| Section headings | `FadeUp` wrapper | 0.55s |
| Card grids | Stagger container + item variants | 0.1s per card |
| Process steps | x: -24 → 0, stagger | 0.5s, 0.12s delay |
| CTA buttons | `whileHover` scale + color | 0.15s |
| Nav dropdown | `AnimatePresence` fade-slide | 0.18s |
| Hero H1 | NO animation — LCP element | — |
| Stats | Use GSAP (counter needs gsap tick) | — |
