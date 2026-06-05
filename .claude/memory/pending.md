# Pending

## site.ts — Fix Before Any Page Build

- [ ] Correct `legalName` to `'MarTechRise Intelligence Private Limited'`
- [ ] Correct `foundingDate` to `'2026-01'`
- [ ] Confirm and update Twitter handle + LinkedIn URL
- [ ] Add street address + postal code to organization.address if needed

## Phase 1 Pages — Not Yet Built

- [ ] `/` — Home page (hero, services grid, process steps, case study teasers, trust logos, platform badges, stats bar)
- [ ] `/analytics-audit` — Lead gen landing page (NavbarMinimal, conversion-focused, FAQPage schema)
- [ ] `/services` — Services hub (overview page, ItemList schema, links to all 6 services)
- [ ] `/services/tracking-architecture` — Service page (9-section template, FAQPage schema)
- [ ] `/services/analytics-implementation` — Service page (9-section template, FAQPage schema)
- [ ] `/services/conversion-event-tracking` — Service page (9-section template, FAQPage schema)
- [ ] `/services/server-side-tracking` — Service page (9-section template, FAQPage schema)
- [ ] `/services/qa-data-validation` — Service page (9-section template, FAQPage schema)
- [ ] `/services/analytics-reporting-attribution` — Service page (9-section template, FAQPage schema)
- [ ] `/about` — About page (team, certifications, methodology, EEAT signals)
- [ ] `/contact` — Contact page
- [ ] `/resources` — Resources hub page
- [ ] `/privacy-policy` — Privacy policy page
- [ ] `/terms` — Terms page

## Components — Not Yet Built

- [ ] `Navbar.tsx` — Phase 1 nav with ServicesDropdown
- [ ] `NavbarMinimal.tsx` — For /analytics-audit only
- [ ] `Footer.tsx`
- [ ] `ServicesDropdown.tsx`
- [ ] `HeroSection.tsx`
- [ ] `ServicesGrid.tsx`
- [ ] `ProcessSteps.tsx`
- [ ] `CaseStudyTeaser.tsx`
- [ ] `TrustLogos.tsx`
- [ ] `PlatformBadges.tsx`
- [ ] `FaqSection.tsx` (renders FAQ + injects FAQPage schema)
- [ ] `ServicePageHero.tsx`
- [ ] `ServicePageCTA.tsx`
- [ ] `StatsBar.tsx`
- [ ] `OrganizationSchema.tsx`
- [ ] `ServiceSchema.tsx`
- [ ] `FaqSchema.tsx`
- [ ] `BreadcrumbSchema.tsx`
- [ ] `WebsiteSchema.tsx`

## Lib Files — Not Yet Built

- [ ] `src/lib/metadata.ts` — `generatePageMetadata()` helper
- [ ] `src/lib/schema.ts` — Schema generation helpers
- [ ] `src/lib/seo.ts` — Shared SEO utilities

## Content — Not Yet Written

- [ ] `content/services/tracking-architecture.mdx`
- [ ] `content/services/analytics-implementation.mdx`
- [ ] `content/services/conversion-event-tracking.mdx`
- [ ] `content/services/server-side-tracking.mdx`
- [ ] `content/services/qa-data-validation.mdx`
- [ ] `content/services/analytics-reporting-attribution.mdx`
- [ ] `content/faqs/server-side-tracking.ts`
- [ ] `content/faqs/analytics-implementation.ts`
- [ ] (+ one per service slug)

## Infrastructure — Not Yet Created

- [ ] `app/sitemap.ts` — Auto-generated sitemap (all Phase 1 pages)
- [ ] `app/robots.ts` — robots.txt allowing GPTBot, ClaudeBot, PerplexityBot
- [ ] `/public/llms.txt` — AIO file (use template in context/seo.md)
- [ ] `/public/logo.png` — Real brand logo (replace placeholder)
- [ ] `/public/favicon.ico` — Real favicon (replace placeholder)
- [ ] `/public/og-image.jpg` — Real 1200×630px OG image (replace placeholder)

## Analytics — Before Launch

- [ ] GA4 property configured server-side (sGTM on subdomain t.martechrise.ai)
- [ ] Client-side GTM → sGTM configured
- [ ] Consent Management Platform (CMP) integrated
- [ ] GA4 consent mode v2 configured
- [ ] Form submissions tracked as GA4 conversion events
- [ ] Add GA4 + GTM IDs to `.env.local`

## Phase 2 — After Launch (~4 months)

- [ ] `/platforms` hub + all platform pages
- [ ] `/resources/guides` and `/resources/checklists`

## Phase 3 — After Authority (~9 months)

- [ ] `/industries/ecommerce`, `/industries/saas`, `/industries/bfsi`
- [ ] `/platforms/adobe-experience-platform`, `/platforms/bigquery`
