# CLAUDE

**Project:** MarTechRise — martechrise.ai
**Purpose:** B2B analytics implementation company specialising in server-side tracking, GA4, Adobe Analytics, Tealium, and Meta CAPI for enterprise clients.
**Markets:** Primary: USA (enterprise CMOs, analytics leads, growth teams). Secondary: India (enterprise brands, D2C, BFSI, SaaS).
**Stack:** Next.js App Router · TypeScript · Tailwind CSS · Vercel · MDX

---

## Context Files — Load by Task

| Task | Read These Files |
|---|---|
| New session (always) | This file only |
| Building any page | `context/architecture.md` + `context/seo.md` |
| Writing page copy | `context/seo.md` + `context/constraints.md` |
| Adding schema markup | `context/seo.md` |
| Performance or image work | `context/performance.md` |
| Stack / config / deps | `context/stack.md` |
| Resuming after a break | `memory/completed.md` + `memory/pending.md` |
| Debugging a problem | `memory/known-issues.md` |
| Architecture decisions | `context/architecture.md` + `memory/decisions.md` |

---

## Non-Negotiable Rules

1. Never rename service slugs — they are canonical (see `context/constraints.md`)
2. Never restructure `/case-studies` or `/resources/blog` — already built with advanced SEO
3. All service pages follow exact 9-section order (see `context/architecture.md`)
4. All metadata via `generatePageMetadata()` helper — never hardcode titles or descriptions inline
5. All company values from `siteConfig` in `src/config/site.ts` — never hardcode strings
6. Schema markup required on every page: Organization + page-specific type
7. No inline styles — Tailwind classes only
8. Default to server components unless interactivity requires client

---

## Canonical Service Slugs

- `/services/tracking-architecture`
- `/services/analytics-implementation`
- `/services/conversion-event-tracking`
- `/services/server-side-tracking`
- `/services/qa-data-validation`
- `/services/analytics-reporting-attribution`

Do not build Platform or Industry pages until Phase 2/3 is explicitly approved.
