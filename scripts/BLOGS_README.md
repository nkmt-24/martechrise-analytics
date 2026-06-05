# Blog Seed System

This document explains the blog seeding system for MarTechRise.

## Overview

The seed script creates **7 SEO-optimized blog posts** with pillar-cluster architecture, designed to drive organic traffic through high-value keywords in the analytics and marketing technology space.

## Pillar-Cluster Architecture

### Pillar Pages (Comprehensive Guides)
1. **GA4 vs Adobe Analytics** - Platform comparison (Analytics Platforms category)
2. **Server-Side Tracking Guide** - Complete implementation guide (Server-Side Tracking category)
3. **Attribution Models Explained** - Marketing attribution deep dive (Attribution & Reporting category)

### Cluster Pages (Specific Topics linking to Pillars)
4. **Fix Broken GA4 Tracking** - Troubleshooting guide → links to GA4 pillar
5. **Meta CAPI Setup** - Implementation tutorial → links to Server-Side pillar
6. **GA4 Migration Checklist** - Step-by-step migration → links to GA4 pillar
7. **Cross-Domain Tracking** - Technical guide → links to GA4 and Implementation services

## Internal Linking Strategy

Each blog includes:
- **2-3 internal links to service pages** (driving conversions)
- **1-2 links to related blogs** (pillar-cluster SEO)
- **2-3 external authoritative links** (Google, Meta, Adobe docs)

Example linking flow:
```
"Fix GA4 Tracking" (cluster)
  ↓ links to
"GA4 vs Adobe Analytics" (pillar)
  ↓ links to
"/services/analytics-implementation" (conversion)
```

## SEO Specifications

### Word Count Targets
- **Pillar pages:** 2,000-2,500 words
- **Cluster pages:** 1,400-1,800 words
- **Total:** 10,000+ words across all 7 blogs

### Content Structure
- **H2 headings:** 6-10 per blog (main sections)
- **H3 headings:** 4-8 per blog (sub-sections)
- **Code blocks:** 2-4 per technical blog
- **Lists:** 4-6 per blog (scannable content)
- **FAQs:** 2-3 per blog (featured snippet targeting)
- **Quotes/testimonials:** 1-2 per blog (E-A-T signals)
- **CTAs:** 1 per blog (conversion-focused)

### SEO Metadata
Each blog includes:
- **Focus keyword:** Primary ranking target
- **Secondary keywords:** 3-5 related terms
- **Meta title:** <60 chars, keyword-front-loaded
- **Meta description:** 150-160 chars, includes focus keyword + CTA
- **Featured image:** 1200x630px with descriptive alt text

## Blog Categories

| Category | Slug | Purpose |
|----------|------|---------|
| Analytics Platforms | `analytics-platforms` | Platform comparisons and reviews |
| Server-Side Tracking | `server-side-tracking` | sGTM, Meta CAPI, advanced implementations |
| Troubleshooting | `troubleshooting` | Fixing tracking issues and debugging |
| Implementation Guides | `implementation-guides` | Step-by-step setup tutorials |
| Attribution & Reporting | `attribution-reporting` | Attribution models and reporting strategies |

## Target Keywords & Monthly Search Volume

| Blog | Focus Keyword | Est. Monthly Searches |
|------|--------------|----------------------|
| GA4 vs Adobe | "ga4 vs adobe analytics" | 2,900 |
| Server-Side Guide | "server-side tracking" | 1,600 |
| Fix GA4 | "fix ga4 tracking" | 880 |
| Meta CAPI | "meta conversions api" | 3,600 |
| Attribution | "marketing attribution models" | 1,900 |
| GA4 Migration | "ga4 migration" | 2,400 |
| Cross-Domain | "cross-domain tracking ga4" | 720 |
| **TOTAL** | — | **~14,000/month** |

## Content Features

### Block Types Used
- `paragraph` - Main body content
- `h2` / `h3` - Structured headings
- `list` - Bullet and numbered lists
- `code` - Technical implementation examples
- `quote` - Testimonials and pull quotes
- `faq` - Q&A for featured snippets
- `cta` - Conversion-focused calls-to-action

### Link Strategy
- **Internal service links:** Drive users to `/services/*` pages
- **Internal blog links:** Build topical authority clusters
- **External authority links:** Google, Meta, Adobe official docs (builds E-A-T)

## Running the Seed

```bash
npm run seed-blogs
```

This will:
1. Connect to MongoDB
2. Clear existing blogs (⚠️ destructive)
3. Reset blog category counts
4. Create 5 blog categories
5. Insert all 7 blogs with complete data
6. Update category blog counts
7. Display summary

## Verification

After seeding, verify:

```bash
# Check blog count
db.blogs.countDocuments({ 'workflow.status': 'published' })
# Should return: 7

# Check total word count
db.blogs.aggregate([
  { $group: { _id: null, totalWords: { $sum: '$seoMetrics.wordCount' } } }
])
# Should return: ~10,000+

# Check internal links
db.blogs.aggregate([
  { $project: { linkCount: { $size: '$internalLinks' } } },
  { $group: { _id: null, totalLinks: { $sum: '$linkCount' } } }
])
# Should return: ~14-18 internal links across all blogs
```

## Traffic Projection

Based on competitor analysis and keyword difficulty:

- **Month 1-3:** 500-800 organic visits/month (indexing phase)
- **Month 4-6:** 1,200-1,800 visits/month (ranking phase)
- **Month 7-12:** 2,500-4,000 visits/month (authority phase)

Assumes:
- Domain authority: 20-30
- Consistent publishing schedule
- Regular content updates
- Quality backlink acquisition

## Next Steps

1. ✅ Run seed: `npm run seed-blogs`
2. 📸 Replace placeholder images with real screenshots/diagrams
3. 🔗 Build backlinks to pillar pages
4. 📊 Monitor rankings in Search Console
5. 🔄 Update content quarterly based on performance
6. 📈 Create more cluster content around top-performing pillars

## Content Maintenance

- **Monthly:** Check for broken external links
- **Quarterly:** Update statistics and product screenshots
- **Bi-annually:** Refresh top-performing posts with new insights
- **Annually:** Audit and consolidate underperforming content

## Customization

To add more blogs:
1. Open `scripts/seed-blogs.ts`
2. Add new blog object following existing structure
3. Ensure proper category, internal links, and SEO metadata
4. Re-run seed script

To modify existing blogs:
1. Edit blog data in `seed-blogs.ts`
2. Re-run seed (clears and re-inserts all blogs)
3. Verify changes in admin panel

## Support

For questions about the blog system:
- Blog Model: `src/models/Blog.ts`
- Seed Script: `scripts/seed-blogs.ts`
- Admin Interface: `/admin/blogs`
