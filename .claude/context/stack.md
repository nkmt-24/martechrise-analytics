# Stack

## Core Framework

| Layer | Choice | Notes |
|---|---|---|
| Framework | Next.js (App Router) | App directory, not Pages Router |
| Language | TypeScript | Strict mode preferred |
| Styling | Tailwind CSS | No inline styles — utility classes only |
| Animation | Framer Motion | Installed. All presets in `src/lib/motion.ts` |
| Deployment | Vercel | Auto-deploy from main branch |
| Content | MDX (file-based) | Blog and case studies already using this |

## Package Manager & Node

- Package manager: **npm** (check `package-lock.json` to confirm — do not switch)
- Node version: check `.nvmrc` or `engines` field in `package.json`

## Design System Files

| File | Purpose |
|---|---|
| `src/app/globals.css` | All CSS variables — colors, shadows, motion, z-index, glassmorphism |
| `tailwind.config.ts` | Maps CSS variables to Tailwind classes; adds font-display, shadow-card-soft, brand.* colors |
| `src/lib/cn.ts` | `cn()` utility — clsx + tailwind-merge. Use for all className props |
| `src/lib/motion.ts` | Animation presets, easings, transition tokens — import here, never write raw cubic-bezier inline |
| `src/data/services.ts` | `navServices` and `navResources` — nav data with lucide icons |
| `src/components/motion/FadeUp.tsx` | Reusable scroll-reveal wrapper |

## Key Libraries (Add Only If Confirmed in package.json)

| Library | Purpose |
|---|---|
| `next-mdx-remote` | MDX rendering for blog/case study pages |
| `contentlayer` | If in use for MDX content type generation |
| `tailwind-merge` | Merging Tailwind class strings safely |
| `clsx` | Conditional className utility |

Always verify a library is in `package.json` before importing it. Do not add new dependencies without asking.

## Configuration Files

| File | Purpose |
|---|---|
| `src/config/site.ts` | Single source of truth for all company data, nav, services |
| `tailwind.config.ts` | Design tokens, breakpoints, custom colours |
| `next.config.ts` | Next.js config (image domains, redirects, headers) |
| `.env.local` | GA4 ID, GTM ID, sGTM endpoint — never hardcoded in source |

## Environment Variables

```
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX
NEXT_PUBLIC_SS_ENDPOINT=https://t.martechrise.ai
NEXT_PUBLIC_APP_URL=https://martechrise.ai
NEXT_PUBLIC_CONTACT_EMAIL=hello@martechrise.ai
```

## Path Aliases

Use `@/` alias for `src/` imports. Example: `import { siteConfig } from '@/config/site'`

## Rendering Strategy

- Default: **Server Components** (no `'use client'` unless interaction required)
- Static generation preferred for all marketing and service pages
- `generateStaticParams` required for any dynamic `[slug]` routes
