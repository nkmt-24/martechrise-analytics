# Constraints

## Never Do These

### Service Slugs — Frozen
Never rename, reorder, or change any service slug. They are canonical and affect SEO, internal links, and schema.

```
/services/tracking-architecture         ← FROZEN
/services/analytics-implementation      ← FROZEN
/services/conversion-event-tracking     ← FROZEN
/services/server-side-tracking          ← FROZEN
/services/qa-data-validation            ← FROZEN
/services/analytics-reporting-attribution ← FROZEN
```

If a user asks to rename a service slug, flag it explicitly and ask for confirmation before touching anything.

### Existing Pages — Do Not Restructure
These pages are already built with advanced SEO. Do not redesign layouts, change URL slugs, modify SEO metadata structure, or add new sections.

- `/case-studies` and `/case-studies/[slug]`
- `/resources/blog` and all blog post pages

When touching these pages, only update:
1. `siteConfig` values that auto-propagate
2. Schema markup (add/correct Organization + BreadcrumbList)
3. Author fields if they pull from site config

### Phase Discipline
Never add pages outside the approved phase plan. Phase 2 (`/platforms/*`) and Phase 3 (`/industries/*`) pages must not be built until explicitly approved.

### Hardcoded Strings — Forbidden
Never hardcode company name, URL, email, phone, tagline, or social handles in component files. Always use `siteConfig` from `src/config/site.ts`.

```typescript
// ❌ Never
<p>Contact us at hello@martechrise.ai</p>

// ✅ Always
import { siteConfig } from '@/config/site'
<p>Contact us at {siteConfig.email}</p>
```

### Inline Styles — Forbidden
Never use `style={{ }}` props. Use Tailwind utility classes exclusively.

### Title and Description — Never Inline
Never write `<title>` tags or `<meta name="description">` manually. Always use `generatePageMetadata()` from `src/lib/metadata.ts`.

### Images — Rules
- Format: WebP only (convert if needed)
- Always include descriptive `alt` text with natural keyword usage
- Always use `loading="lazy"` or Next.js `Image` component (which handles this)
- Never use images without defined `width` and `height` (causes CLS)

### Components — Rules
- No new UI primitives unless confirmed not in `src/components/ui/`
- No third-party component libraries (shadcn excepted if already in project)
- All components named in PascalCase with `.tsx` extension
- One default export per component file

### Schema — Rules
- Never place JSON-LD in the body of the page
- Always inject via `<script type="application/ld+json">` in `<head>`
- Never omit Organization schema — it goes on every page

### Messaging — Rules
Never lead with features. Always lead with outcomes. (See messaging framework in project context.)

```
❌ Cross-domain tracking
✅ See the complete user journey across all your properties
```
