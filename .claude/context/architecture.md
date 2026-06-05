# Architecture

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Config | `src/config/site.ts` |
| Deployment | Vercel |
| CMS | File-based MDX (blog/case studies already built) |

---

## Phase 1 Pages (Build Now)

```
/                                          ← Home
/analytics-audit                           ← Lead gen landing page
/services                                  ← Services hub (overview)
/services/tracking-architecture
/services/analytics-implementation
/services/conversion-event-tracking
/services/server-side-tracking
/services/qa-data-validation
/services/analytics-reporting-attribution
/case-studies                              ← Already exists — DO NOT REBUILD
/case-studies/[slug]                       ← Already exists — DO NOT REBUILD
/about
/resources                                 ← Parent hub
/resources/blog                            ← Already exists — DO NOT REBUILD
/contact
/privacy-policy
/terms
```

## Phase 2 Pages (After Launch — ~4 months)

```
/platforms
/platforms/ga4
/platforms/google-tag-manager
/platforms/server-side-gtm
/platforms/adobe-analytics
/platforms/meta-conversions-api
/platforms/tealium
/resources/guides
/resources/checklists
```

## Phase 3 Pages (After Authority — ~9 months)

```
/industries/ecommerce
/industries/saas
/industries/bfsi
/platforms/adobe-experience-platform
/platforms/bigquery
```

---

## Folder Structure

```
src/
├── app/
│   ├── (marketing)/
│   │   ├── page.tsx                        ← Home /
│   │   ├── analytics-audit/page.tsx
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   ├── tracking-architecture/page.tsx
│   │   │   ├── analytics-implementation/page.tsx
│   │   │   ├── conversion-event-tracking/page.tsx
│   │   │   ├── server-side-tracking/page.tsx
│   │   │   ├── qa-data-validation/page.tsx
│   │   │   └── analytics-reporting-attribution/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   └── resources/page.tsx
│   ├── (existing)/                         ← DO NOT TOUCH
│   │   ├── case-studies/
│   │   └── resources/blog/
│   ├── privacy-policy/page.tsx
│   ├── terms/page.tsx
│   ├── layout.tsx
│   ├── sitemap.ts
│   └── robots.ts
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── NavbarMinimal.tsx               ← For /analytics-audit only
│   │   ├── Footer.tsx
│   │   └── ServicesDropdown.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── ServicesGrid.tsx
│   │   ├── ProcessSteps.tsx
│   │   ├── CaseStudyTeaser.tsx
│   │   ├── TrustLogos.tsx
│   │   ├── PlatformBadges.tsx
│   │   ├── FaqSection.tsx                  ← Renders FAQ + injects FAQPage schema
│   │   ├── ServicePageHero.tsx
│   │   ├── ServicePageCTA.tsx
│   │   └── StatsBar.tsx
│   ├── seo/
│   │   ├── OrganizationSchema.tsx
│   │   ├── ServiceSchema.tsx
│   │   ├── FaqSchema.tsx
│   │   ├── BreadcrumbSchema.tsx
│   │   └── WebsiteSchema.tsx
│   └── ui/                                 ← Button, Card, Badge, etc.
│
├── config/
│   └── site.ts                             ← Single source of truth
│
├── content/
│   ├── services/                           ← MDX per service
│   └── faqs/                              ← FAQ data per service slug
│
├── lib/
│   ├── schema.ts
│   ├── metadata.ts
│   └── seo.ts
│
public/
├── logo.png                                ← ⚠️ Replace with real logo
├── favicon.ico                             ← ⚠️ Replace with real favicon
├── og-image.jpg                            ← ⚠️ 1200×630px — replace before launch
└── llms.txt                                ← Create manually (AIO)
```

---

## Navigation Structure

**Phase 1 Navbar:**
```
[MarTechRise Logo]  Services▾  Case Studies  Analytics Audit  Resources▾  About  [Book Free Audit →]
```

**Services dropdown:** All 6 service pages + "View all services →" to /services

**Resources dropdown:** Blog · (Guides — Phase 2) · (Checklists — Phase 2)

**Analytics Audit page** uses `NavbarMinimal`: Logo + About + Case Studies + Privacy only. No full nav — conversion page.

---

## Service Page Template (9-Section Order — Mandatory)

```
1. ServicePageHero       — H1 + outcome subheading + CTA button
2. ProblemStatement      — 3–4 bullet pain points
3. WhatIsSection         — Definition (AEO target)
4. HowItWorksSection     — 4-step process (numbered)
5. WhatIncluded          — Deliverables grid
6. PlatformBadges        — Tools used in this service
7. RelatedCaseStudy      — Single case study teaser
8. FaqSection            — 5–8 questions with FAQPage schema
9. ServicePageCTA        — "Book Free Audit" CTA block
```

---

## Metadata Pattern

```typescript
// src/lib/metadata.ts
export function generatePageMetadata({ title, description, path, image }): Metadata {
  const url = `${siteConfig.url}${path}`
  return {
    title: `${title} | ${siteConfig.name}`,
    description,
    alternates: { canonical: url },
    openGraph: { title: `${title} | ${siteConfig.name}`, description, url, ... },
    twitter: { card: 'summary_large_image', ... },
  }
}
```

Usage:
```typescript
export const metadata = generatePageMetadata({
  title: 'Server-Side Tracking Implementation',
  description: '...',
  path: '/services/server-side-tracking',
})
```

---

## Schema Injection Pattern

Inject all schema as JSON-LD in `<head>` via Next.js page or layout — not inline in body.

```typescript
export function ServiceSchema({ service }) {
  const schema = { '@context': 'https://schema.org', '@type': 'Service', ... }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}
```

---

## Internal Linking Map (Minimum 3 Links Per Page)

| Page | Must Link To |
|---|---|
| Home | /services, /analytics-audit, /case-studies, all 6 service pages |
| /services | All 6 service pages, /analytics-audit, /case-studies |
| /services/server-side-tracking | /services/qa-data-validation, /services/analytics-implementation, /analytics-audit |
| /services/analytics-implementation | /services/tracking-architecture, /services/conversion-event-tracking, /analytics-audit |
| /services/tracking-architecture | /services/analytics-implementation, /analytics-audit, /about |
| /services/conversion-event-tracking | /services/server-side-tracking, /services/qa-data-validation, /analytics-audit |
| /services/qa-data-validation | /services/analytics-implementation, /analytics-audit |
| /services/analytics-reporting-attribution | /services/qa-data-validation, /case-studies, /analytics-audit |
| /analytics-audit | /case-studies, /about, /privacy-policy |
| /about | /services, /case-studies, /analytics-audit |
| Blog posts | Minimum 2 relevant service pages per post |
