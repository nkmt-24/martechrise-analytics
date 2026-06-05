# Frontend Design

Source: anthropics/skills (official) — adapted for MarTechRise stack.

## Purpose

Build distinctive, production-grade web interfaces using Next.js + Tailwind CSS that avoid generic AI aesthetics. Every component should feel intentionally designed, not algorithmically generated.

## Rules

- Establish a clear aesthetic direction before writing code — do not default to "clean and minimal" unless it is the right choice
- Tailwind utility classes only — no inline styles, no CSS modules for new components
- Typography is the first decision: pair a characterful display font with a refined body font
- Use asymmetry, layered effects, and visual atmosphere (gradients, textures) over flat predictable layouts
- Motion should be impactful at key moments — not decorative noise everywhere
- Code complexity must match aesthetic ambition — a bold design requires a bold implementation
- All components: server components by default, `'use client'` only when interaction requires it
- All images: Next.js `<Image>` component, WebP format, descriptive alt text

## Avoid

- Purple gradients, generic hero sections, stock-photo aesthetics
- Predictable 3-column card grids with identical padding
- Overused fonts (Inter alone, Poppins, Roboto without pairing)
- Cookie-cutter layouts that could belong to any SaaS company
- Padding/spacing that looks auto-generated (8px everywhere)
- CTA buttons that are just `rounded-md bg-blue-600 text-white`

## Pattern — Component Structure

```tsx
// components/sections/[ComponentName].tsx
import { siteConfig } from '@/config/site'

interface Props {
  // Type all props — no `any`
}

export default function ComponentName({ ...props }: Props) {
  return (
    // Semantic HTML5: section, article, header, nav, main, aside
    <section aria-labelledby="section-heading">
      {/* Tailwind: mobile-first, responsive with sm: md: lg: xl: */}
    </section>
  )
}
```

## Pattern — Design Decision Checklist

Before writing markup, answer:
1. What is the dominant visual mood? (technical, authoritative, bold, precise)
2. What are the 2–3 Tailwind color classes defining this section?
3. What typography pairing fits? (display font + body font)
4. What is the one motion moment worth animating?
5. What makes this layout memorable vs generic?

## Example — Service Page Hero (MarTechRise)

```tsx
export default function ServicePageHero({ headline, subheading, cta }: Props) {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
      {/* Background texture — not flat */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_#1e3a5f_0%,_transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Asymmetric layout — not centered block */}
        <div className="max-w-3xl">
          <p className="font-mono text-sm font-medium uppercase tracking-widest text-cyan-400">
            Analytics Implementation
          </p>
          <h1 className="mt-4 text-4xl font-bold leading-tight text-white lg:text-6xl">
            {headline}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-slate-300">
            {subheading}
          </p>
          <div className="mt-10">
            <a
              href={siteConfig.nav.cta.href}
              className="inline-flex items-center gap-2 rounded-none border border-cyan-400 bg-cyan-400 px-8 py-4 text-sm font-semibold uppercase tracking-wider text-slate-950 transition-all hover:bg-transparent hover:text-cyan-400"
            >
              {cta}
              <span aria-hidden>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
```
