# Nextjs Page

## Purpose

Create any new page in the MarTechRise Next.js App Router project — correctly structured, fully typed, with metadata export, layout usage, and server-component defaults.

## Rules

- All pages live under `src/app/` — use the `(marketing)` route group for new marketing pages
- Default export is always the Page component — named after the route concept, not `Page`
- Every page exports `metadata` or `generateMetadata` — never skip this
- All metadata via `generatePageMetadata()` from `@/lib/metadata` — no inline strings
- Server components by default — add `'use client'` only when hooks or browser APIs are required
- Dynamic routes require `generateStaticParams()` for static generation
- Layouts are inherited — do not re-add `Navbar` or `Footer` inside page files
- No page-level CSS — all styling via Tailwind classes in components

## Pattern — Static Page

```typescript
// src/app/(marketing)/services/server-side-tracking/page.tsx
import { generatePageMetadata } from '@/lib/metadata'
import ServicePageHero from '@/components/sections/ServicePageHero'
import FaqSection from '@/components/sections/FaqSection'
import ServicePageCTA from '@/components/sections/ServicePageCTA'
import OrganizationSchema from '@/components/seo/OrganizationSchema'
import ServiceSchema from '@/components/seo/ServiceSchema'
import FaqSchema from '@/components/seo/FaqSchema'
import BreadcrumbSchema from '@/components/seo/BreadcrumbSchema'
import { serverSideTrackingFaqs } from '@/content/faqs/server-side-tracking'

export const metadata = generatePageMetadata({
  title: 'Server-Side Tracking Implementation',
  description: 'Future-proof your tracking with server-side GTM, Meta CAPI, and first-party data pipelines. Stop losing conversion data to ad blockers and iOS privacy changes.',
  path: '/services/server-side-tracking',
})

export default function ServerSideTrackingPage() {
  return (
    <>
      {/* Schema — in page head via Next.js head injection */}
      <OrganizationSchema />
      <ServiceSchema slug="server-side-tracking" />
      <FaqSchema faqs={serverSideTrackingFaqs} />
      <BreadcrumbSchema
        items={[
          { name: 'Home', href: '/' },
          { name: 'Services', href: '/services' },
          { name: 'Server-Side Tracking', href: '/services/server-side-tracking' },
        ]}
      />

      <main>
        <ServicePageHero
          headline="Stop Losing Conversion Data. Implement Server-Side Tracking."
          subheading="Future-proof your measurement with sGTM, Meta CAPI, and first-party pipelines — before ad blockers and iOS updates erase your attribution."
          cta="Book Free Audit"
        />
        {/* ... remaining 8 sections in order */}
        <FaqSection faqs={serverSideTrackingFaqs} />
        <ServicePageCTA />
      </main>
    </>
  )
}
```

## Pattern — Dynamic Route with generateStaticParams

```typescript
// src/app/(marketing)/case-studies/[slug]/page.tsx
import { generatePageMetadata } from '@/lib/metadata'
import { getAllCaseStudySlugs, getCaseStudyBySlug } from '@/lib/case-studies'
import { notFound } from 'next/navigation'

export async function generateStaticParams() {
  const slugs = await getAllCaseStudySlugs()
  return slugs.map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const study = await getCaseStudyBySlug(params.slug)
  if (!study) return {}
  return generatePageMetadata({
    title: study.title,
    description: study.excerpt,
    path: `/case-studies/${params.slug}`,
  })
}

export default async function CaseStudyPage({ params }: { params: { slug: string } }) {
  const study = await getCaseStudyBySlug(params.slug)
  if (!study) notFound()
  return <main>{/* render study */}</main>
}
```

## Service Page 9-Section Order (Mandatory)

```
1. ServicePageHero
2. ProblemStatement
3. WhatIsSection
4. HowItWorksSection
5. WhatIncluded
6. PlatformBadges
7. RelatedCaseStudy
8. FaqSection
9. ServicePageCTA
```

## Checklist — Before Marking Page Done

- [ ] `metadata` or `generateMetadata` exported
- [ ] Title ≤ 60 chars (before " | MarTechRise" gets added)
- [ ] Description 150–160 chars
- [ ] All schema components present
- [ ] Page renders as server component (no unnecessary `'use client'`)
- [ ] `generateStaticParams` added if dynamic route
- [ ] Service pages: all 9 sections in correct order
