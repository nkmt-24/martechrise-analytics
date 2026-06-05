# Seo Expert

## Purpose

Apply complete on-page SEO, AEO (Answer Engine Optimisation), and AIO (AI Indexing Optimisation) to every MarTechRise page. Read `context/seo.md` alongside this skill for page-specific specs.

## Rules

- Every page: unique title (max 60 chars), unique meta description (150–160 chars), one H1
- All metadata via `generatePageMetadata()` — never hardcode title or description strings
- All company values from `siteConfig` — never hardcode name, URL, email, phone
- Schema markup required on every page — inject as JSON-LD in `<head>`, never in body
- Minimum 3 internal links per page (see internal linking map in `context/architecture.md`)
- All images: descriptive `alt` text with natural keyword usage
- Question-based H2/H3 headings on every service page (AEO requirement)
- Anchor text must be descriptive — "server-side tracking implementation" not "click here"
- Semantic HTML5 throughout: `article`, `section`, `header`, `nav`, `main`, `aside`

## Schema by Page Type

| Page | Schema Types Required |
|---|---|
| Home `/` | Organization + WebSite + BreadcrumbList |
| `/analytics-audit` | Service + FAQPage |
| `/services` | Service + ItemList + BreadcrumbList |
| Each service page | Service + FAQPage + BreadcrumbList |
| Blog posts | BlogPosting (verify author/publisher) |
| Case study pages | BreadcrumbList (verify present) |

## Pattern — generatePageMetadata Usage

```typescript
// In any page.tsx
import { generatePageMetadata } from '@/lib/metadata'

export const metadata = generatePageMetadata({
  title: 'Server-Side Tracking Implementation',       // no "| MarTechRise" — helper adds it
  description: 'Future-proof your tracking with server-side GTM, Meta CAPI, and first-party data pipelines. Stop losing conversion data to ad blockers and iOS privacy changes.',
  path: '/services/server-side-tracking',             // canonical path
})
```

## Pattern — FAQ Section (AEO)

Every service page FAQ: minimum 5 questions, structured H3 headings, FAQPage schema.

```tsx
// Question heading format for AEO:
<h3>What is server-side tracking and why does it matter?</h3>
<p>Short 2–3 sentence direct answer. Then deeper explanation below.</p>
```

## Pattern — Service Page Content Structure (AEO Template)

```
H1: [Eliminate Pain] + [Achieve Outcome]             ← outcome-first, includes primary keyword
Intro: Problem → Solution → Proof (3 sentences)
H2: What is [service]?                               ← AI answer engines pull definitions from here
H2: How [service] works                              ← numbered process steps
H2: Who needs [service]?                             ← buyer signal paragraph
H2: What's included in our [service]?                ← deliverables grid
H2: Common problems we solve                         ← pain-point anchors
FAQ Section (5–8 Qs + FAQPage schema)
CTA: Book Free Audit
```

## Pattern — Organization Schema (All Pages)

```typescript
// components/seo/OrganizationSchema.tsx
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: siteConfig.organization.name,
  legalName: siteConfig.organization.legalName,
  url: siteConfig.url,
  logo: `${siteConfig.url}${siteConfig.organization.logo}`,
  foundingDate: siteConfig.organization.foundingDate,
  email: siteConfig.email,
  telephone: siteConfig.phone,
  address: {
    '@type': 'PostalAddress',
    addressLocality: siteConfig.organization.address.addressLocality,
    addressRegion: siteConfig.organization.address.addressRegion,
    addressCountry: siteConfig.organization.address.addressCountry,
  },
  sameAs: siteConfig.organization.sameAs,
  description: siteConfig.organization.description,
}
```

## Pattern — Service Schema

```typescript
const schema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: service.title,
  provider: { '@type': 'Organization', name: siteConfig.name, url: siteConfig.url },
  description: service.description,
  url: `${siteConfig.url}${service.href}`,
  areaServed: ['US', 'IN'],
  serviceType: 'Analytics Implementation',
}
```

## Pattern — BreadcrumbList Schema

```typescript
const schema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url },
    { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` },
    { '@type': 'ListItem', position: 3, name: service.title, item: `${siteConfig.url}${service.href}` },
  ],
}
```

## Checklist — Before Marking Any Page Complete

- [ ] Title ≤ 60 chars, unique, includes primary keyword
- [ ] Description 150–160 chars, outcome-first, includes primary keyword
- [ ] One H1 per page
- [ ] At least one question-based H2 or H3
- [ ] Organization schema present
- [ ] Page-specific schema present (Service / FAQPage / etc.)
- [ ] Minimum 3 internal links
- [ ] All images have descriptive alt text
- [ ] Canonical URL set via `generatePageMetadata()`
