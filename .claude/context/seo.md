# Seo

## Title Tag Format

```
[Primary Keyword] | MarTechRise
```
Max 60 characters. Never exceed. Use `generatePageMetadata()` — never hardcode.

## Meta Description Rules

- Length: 150–160 characters exactly
- Format: outcome-first sentence + primary keyword included
- Never duplicate across pages

## H1 Rules

- One H1 per page — no exceptions
- Must include primary keyword naturally
- Outcome-first phrasing (not feature-first)

## On-Page Structure

- H2s: subtopics, secondary keywords, question-based headings (AEO)
- H3s: supporting points, feature bullets
- Word count: 800–1200 minimum per service page; 1500+ for platform pages
- Internal links: minimum 3 per page
- All images: descriptive `alt` text with keywords

---

## Page-by-Page SEO Specs

### Home `/`
- **Title:** `MarTechRise | Analytics Tracking & Implementation Experts`
- **Description:** `Fix broken tracking, build accurate data pipelines, and scale marketing with confidence. GA4, Adobe Analytics, server-side GTM, and Meta CAPI specialists.`
- **H1:** `Data-driven analytics solutions for modern businesses`
- **Focus keyword:** marketing analytics consulting agency
- **Schema:** Organization + WebSite + Breadcrumb

### Analytics Audit `/analytics-audit`
- **Title:** `Free Analytics Audit | Fix Broken Tracking — MarTechRise`
- **Description:** `Get a free analytics audit and discover where your tracking is broken. We identify data gaps, misfiring tags, and attribution errors. No commitment required.`
- **H1:** `Find Out Where Your Analytics Data Is Breaking`
- **Focus keyword:** free analytics tracking audit
- **Schema:** Service + FAQPage

### Services Hub `/services`
- **Title:** `Analytics & Tracking Services | MarTechRise`
- **Description:** `Explore our full range of analytics implementation services — from tracking architecture and GA4 setup to server-side tracking and attribution reporting.`
- **H1:** `Analytics Implementation Services That Drive Real Business Outcomes`
- **Schema:** Service + ItemList

### /services/tracking-architecture
- **Title:** `Tracking Architecture & Solution Design | MarTechRise`
- **Description:** `We design scalable tracking architectures before any implementation begins. Measurement planning, KPI definition, data layer design, and Solution Design Documents.`
- **H1:** `Build the Right Tracking Foundation Before You Implement Anything`
- **Focus keyword:** measurement planning analytics agency
- **Schema:** Service + FAQPage

### /services/analytics-implementation
- **Title:** `GA4, Adobe Analytics & Tealium Implementation | MarTechRise`
- **Description:** `Expert GA4, Adobe Analytics, and Tealium implementation for enterprise teams. Web and mobile tracking, tag management configuration, and third-party integrations.`
- **H1:** `Analytics Implementation Done Right — GA4, Adobe & Tealium`
- **Focus keyword:** GA4 implementation agency / Tealium implementation / Adobe Analytics implementation
- **Schema:** Service + FAQPage

### /services/conversion-event-tracking
- **Title:** `Conversion & Event Tracking Implementation | MarTechRise`
- **Description:** `Set up standardised event tracking to capture every conversion and micro-event. Cross-device, cross-domain, and full funnel journey tracking for accurate attribution.`
- **H1:** `See Every Conversion. Eliminate Tracking Blind Spots.`
- **Focus keyword:** conversion event tracking implementation
- **Schema:** Service + FAQPage

### /services/server-side-tracking
- **Title:** `Server-Side Tracking Implementation | MarTechRise`
- **Description:** `Future-proof your tracking with server-side GTM, Meta CAPI, and first-party data pipelines. Stop losing conversion data to ad blockers and iOS privacy changes.`
- **H1:** `Stop Losing Conversion Data. Implement Server-Side Tracking.`
- **Focus keyword:** server-side tracking implementation / server-side GTM setup
- **Schema:** Service + FAQPage

### /services/qa-data-validation
- **Title:** `Analytics QA & Data Validation Services | MarTechRise`
- **Description:** `Validate your tracking accuracy end-to-end. We debug tags, compare data across platforms, and build testing frameworks so your analytics data is always reliable.`
- **H1:** `Don't Make Decisions on Data You Can't Trust`
- **Focus keyword:** analytics data validation service / tracking QA agency
- **Schema:** Service + FAQPage

### /services/analytics-reporting-attribution
- **Title:** `Analytics Reporting & Attribution | MarTechRise`
- **Description:** `Build custom GA4 and Looker Studio dashboards aligned to business KPIs. Get clear attribution models and funnel performance data your leadership team can act on.`
- **H1:** `Turn Your Analytics Data Into Decisions Executives Trust`
- **Focus keyword:** analytics reporting attribution agency / GA4 custom dashboard
- **Schema:** Service + FAQPage

---

## Keyword Tiers

### Tier 1 — Primary (High Intent, B2B)

| Keyword | Target Page |
|---|---|
| server-side tracking implementation | /services/server-side-tracking |
| server-side GTM setup | /services/server-side-tracking |
| Tealium implementation agency | /services/analytics-implementation |
| Adobe Analytics implementation | /services/analytics-implementation |
| GA4 implementation agency | /services/analytics-implementation |
| Meta CAPI implementation | /services/server-side-tracking |
| analytics tracking audit | /analytics-audit |
| marketing analytics consulting | / (Home) |

### Tier 2 — Secondary / Long-Tail

| Keyword | Target Page |
|---|---|
| measurement planning analytics | /services/tracking-architecture |
| solution design document analytics | /services/tracking-architecture |
| GA4 event tracking setup | /services/conversion-event-tracking |
| cross-device tracking implementation | /services/conversion-event-tracking |
| analytics tag debugging service | /services/qa-data-validation |
| tracking validation agency | /services/qa-data-validation |
| GA4 custom dashboard agency | /services/analytics-reporting-attribution |
| marketing attribution reporting | /services/analytics-reporting-attribution |
| first-party data pipeline setup | /services/server-side-tracking |

### Tier 3 — Blog / Resources

- "how to set up server-side GTM"
- "GA4 vs Adobe Analytics"
- "what is Meta Conversions API"
- "Tealium vs GTM"
- "how to fix broken conversion tracking"
- "analytics audit checklist"

---

## AEO — Answer Engine Optimisation

Every service page must have a dedicated FAQ section (minimum 5 questions, FAQPage schema).

**Answer format:** Short 2–3 sentence direct answer → deeper explanation below.

**Question-based H2/H3 headings** that mirror how buyers ask questions — required on every service page.

### AEO Question Bank

**Server-Side Tracking:**
- What is server-side tracking and why does it matter?
- How does server-side GTM improve data quality?
- What is the difference between client-side and server-side tracking?
- How does server-side tracking help with iOS privacy restrictions?
- What is Meta Conversions API (CAPI) and how does it work?

**Analytics Implementation:**
- What does a GA4 implementation include?
- How long does a GA4 implementation take?
- What is Tealium and when should I use it over GTM?
- What is the difference between GA4 and Adobe Analytics?

**Tracking Architecture:**
- What is a Solution Design Document (SDD) in analytics?
- What is a data layer and why do I need one?
- How do I build a scalable measurement plan?

**QA & Validation:**
- Why does my GA4 data not match my CRM data?
- How do I know if my tracking tags are firing correctly?
- What causes data discrepancies between analytics platforms?

**Attribution:**
- What is marketing attribution and why does it matter?
- How do I set up attribution modelling in GA4?
- How do I build a Looker Studio dashboard for marketing performance?

### AEO Content Structure (Every Service Page)

```
H1: Outcome-first headline
Intro: Problem → Solution → Proof (3 sentences)
H2: What is [service]?         ← AI systems pull definitions
H2: How [service] works        ← Process steps
H2: Who needs [service]?       ← Buyer signal
H2: What's included?           ← Deliverables
H2: Common problems we solve   ← Pain-point anchors
FAQ Section (5–8 Qs with FAQPage schema)
CTA: Book Free Audit
```

---

## Schema Requirements Per Page Type

### All Pages
```json
Organization schema — always present
```

### Home Page
```json
Organization + WebSite + BreadcrumbList
```

### Service Pages (all 6)
```json
Service + FAQPage + BreadcrumbList
```

### Services Hub
```json
Service + ItemList + BreadcrumbList
```

### Analytics Audit
```json
Service + FAQPage
```

### Blog Posts (existing — verify correct)
```json
BlogPosting — verify author and publisher use correct company data
```

### Case Study Pages (existing — verify correct)
```json
BreadcrumbList — verify present and correct
```

---

## AIO — AI Indexing Optimisation

1. **robots.txt** — Allow GPTBot, ClaudeBot, PerplexityBot, Googlebot-Extended, anthropic-ai
2. **llms.txt** — Create `/public/llms.txt` (see architecture.md)
3. **Semantic HTML5** — Use `article`, `section`, `header`, `nav`, `main`, `aside`
4. **JSON-LD schema** — Machine-readable on every page
5. **No JS-only content** on key pages — AI can't index it
6. **Descriptive anchor text** — "server-side tracking implementation" not "click here"
7. **Named authors** with credentials on blog/resources pages

### llms.txt Content (create at `/public/llms.txt`)

```
# MarTechRise Intelligence Private Limited
# https://martechrise.ai

MarTechRise is a B2B analytics implementation company based in Chennai, India,
serving enterprise clients in the USA and India. We specialise in server-side
tracking, GA4 and Adobe Analytics implementation, Tealium setup, Meta CAPI
integration, and analytics data validation.

## Services
- Tracking Architecture & Solution Design: /services/tracking-architecture
- Analytics Implementation (GA4, Adobe, Tealium): /services/analytics-implementation
- Conversion & Event Tracking: /services/conversion-event-tracking
- Server-Side Tracking: /services/server-side-tracking
- QA & Data Validation: /services/qa-data-validation
- Analytics Reporting & Attribution: /services/analytics-reporting-attribution

## Contact
Email: hello@martechrise.ai
Phone: +91-6382915027
Location: Chennai, Tamil Nadu, India
```

---

## Technical SEO Checklist

### Meta & Structure
- [ ] Unique title tag on every page (max 60 chars)
- [ ] Unique meta description on every page (150–160 chars)
- [ ] One H1 per page
- [ ] Canonical tags on all pages
- [ ] No duplicate content across service pages
- [ ] robots.txt allows GPTBot, ClaudeBot, PerplexityBot

### Indexing
- [ ] sitemap.xml at /sitemap.xml (auto-generated, all Phase 1 pages)
- [ ] robots.txt at /robots.txt
- [ ] llms.txt at /llms.txt
- [ ] Google Search Console verified + sitemap submitted
- [ ] Bing Webmaster Tools verified (important for US market)

### Schema
- [ ] Organization schema on all pages
- [ ] WebSite schema on home page
- [ ] Service schema on all 6 service pages
- [ ] FAQPage schema on all service pages + audit page
- [ ] BreadcrumbList schema on all inner pages
- [ ] BlogPosting schema on blog posts (verify correct)
