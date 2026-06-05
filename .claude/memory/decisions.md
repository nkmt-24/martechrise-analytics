# Decisions

## 2026-05-15 — Phase plan established (3-phase rollout)
Build only Phase 1 pages now. Phase 2 (/platforms/*) starts ~4 months post-launch. Phase 3 (/industries/*) starts ~9 months post-launch. Rejected: building all pages at once — SEO authority is better built incrementally.

## 2026-05-15 — Service slug names frozen
All 6 service slugs are canonical and must never be renamed. They anchor internal links, schema URLs, and sitemap entries. Any rename requires updating all three simultaneously.

## 2026-05-15 — siteConfig as single source of truth
All company data (name, legal name, email, phone, social handles, service list) lives in `src/config/site.ts`. No hardcoded strings in component files. Rationale: single update point for data that appears on many pages.

## 2026-05-15 — NavbarMinimal for /analytics-audit
The /analytics-audit page uses a stripped-down navbar (Logo + About + Case Studies + Privacy only). Rejected: full navbar — conversion page requires minimal distraction.

## 2026-05-15 — Server-side tracking on own site (priority)
MarTechRise's own GA4 tracking must run server-side via sGTM on a subdomain (e.g. t.martechrise.ai). Rationale: the site is a live proof of the service we sell. Client-side-only tracking would undermine credibility.

## 2026-05-15 — AIO-first content structure
Every service page follows AEO content structure (H1 → What is → How it works → Who needs it → What's included → FAQ). Rationale: AI answer engines (ChatGPT, Perplexity, Gemini) are now as important as Google for B2B discovery.

## 2026-05-15 — Existing pages protected (blog + case studies)
/resources/blog and /case-studies are already built with advanced SEO. Only siteConfig values and schema corrections are allowed — no layout or structure changes.
