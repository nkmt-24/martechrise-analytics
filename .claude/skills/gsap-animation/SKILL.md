# Gsap Animation

## Purpose

Add GSAP (GreenSock Animation Platform) animations to MarTechRise pages — scroll-triggered reveals, timeline sequences, and text animations — without breaking server-side rendering or Core Web Vitals.

## Rules

- GSAP must only run client-side — always use `'use client'` on animated components
- Import GSAP inside `useEffect` or check `typeof window !== 'undefined'` before use
- Use `ScrollTrigger` plugin for scroll-based animations — register once at module level
- Never animate LCP elements (hero H1, hero image) — they must render instantly
- Always use `gsap.context()` for cleanup — prevents memory leaks on unmount
- Respect `prefers-reduced-motion` — disable animations if user has this set
- Animations should reinforce content hierarchy, not distract from it
- Keep animation durations short: reveals 0.4–0.7s, sequences 0.8–1.2s total

## Installation

```bash
npm install gsap
```

Register ScrollTrigger once (in the component or a shared setup file):
```typescript
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
```

## Pattern — Scroll Reveal (Fade Up on Enter)

```tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function AnimatedSection({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    // Respect reduced motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.querySelectorAll('[data-animate]'),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.12,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      )
    }, el)

    return () => ctx.revert()
  }, [])

  return <div ref={ref}>{children}</div>
}
```

Usage in a section:
```tsx
<AnimatedSection>
  <h2 data-animate>How Server-Side Tracking Works</h2>
  <p data-animate>Step one explanation...</p>
  <div data-animate className="grid grid-cols-3 gap-6">...</div>
</AnimatedSection>
```

## Pattern — Counter / Stats Animation

```tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

interface StatProps { end: number; suffix?: string; label: string }

export default function AnimatedStat({ end, suffix = '', label }: StatProps) {
  const numRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!numRef.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) { numRef.current.textContent = `${end}${suffix}`; return }

    const ctx = gsap.context(() => {
      gsap.fromTo(
        { value: 0 },
        { value: end, duration: 1.5, ease: 'power1.out',
          onUpdate: function () {
            if (numRef.current) numRef.current.textContent = `${Math.round(this.targets()[0].value)}${suffix}`
          },
          scrollTrigger: { trigger: numRef.current, start: 'top 85%', once: true },
        }
      )
    })
    return () => ctx.revert()
  }, [end, suffix])

  return (
    <div className="text-center">
      <span ref={numRef} className="text-5xl font-bold text-cyan-400">0{suffix}</span>
      <p className="mt-2 text-sm text-slate-400">{label}</p>
    </div>
  )
}
```

## Pattern — Text Split / Stagger Reveal (Hero Only)

Only use on non-LCP text elements (subtitles, eyebrow labels — NOT the H1):

```tsx
'use client'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function EyebrowReveal({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        opacity: 0,
        y: -12,
        duration: 0.5,
        delay: 0.2,
        ease: 'power2.out',
      })
    })
    return () => ctx.revert()
  }, [])

  return (
    <p ref={ref} className="font-mono text-sm font-medium uppercase tracking-widest text-cyan-400">
      {text}
    </p>
  )
}
```

## MarTechRise Animation Vocabulary

| Element | Animation | Duration |
|---|---|---|
| Section headings | Fade up (y: 40 → 0) | 0.6s |
| Card grids | Stagger fade up | 0.12s per card |
| Stats counters | Count up from 0 | 1.5s |
| Process steps | Sequential fade in | 0.4s per step, 0.15s stagger |
| CTA section | Fade in + subtle scale | 0.5s |
| Eyebrow labels | Fade down (y: -12 → 0) | 0.5s, delay 0.2s |
| Hero H1 | NO animation — LCP element | — |
