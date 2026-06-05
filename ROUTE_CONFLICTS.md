# ROUTE COLLISION & MERGE ANALYSIS

**Generated:** 2026-05-20

---

## ROUTE COMPARISON MATRIX

| Route | Project 2 (Main) | Project 1 (New UI) | Status | Action |
|-------|-----------------|-------------------|--------|--------|
| `/` | ✅ Homepage | ✅ Homepage | 🟡 COLLISION | **REPLACE** with P1 |
| `/about` | ✅ About page | ✅ About page | 🟡 COLLISION | **REPLACE** with P1 |
| `/services` | ✅ Services index | ✅ Services page | 🟡 COLLISION | **REPLACE** with P1 |
| `/services/tracking-architecture` | ✅ Detail page | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/services/analytics-implementation` | ✅ Detail page | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/services/conversion-event-tracking` | ✅ Detail page | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/services/server-side-tracking` | ✅ Detail page | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/services/qa-data-validation` | ✅ Detail page | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/services/analytics-reporting-attribution` | ✅ Detail page | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/industries` | ✅ Industries | ✅ Industries | 🟡 COLLISION | **REPLACE** with P1 |
| `/blog` | ✅ Blog list (DB) | ✅ Blog list (UI) | 🟠 COMPLEX | **MERGE** UI |
| `/blog/[slug]` | ✅ Blog post (DB) | ✅ Blog post (UI) | 🟠 COMPLEX | **MERGE** UI |
| `/case-studies` | ✅ List (DB) | ✅ List (UI) | 🟠 COMPLEX | **MERGE** UI |
| `/case-studies/[slug]` | ✅ Detail (DB) | ✅ Detail (UI) | 🟠 COMPLEX | **MERGE** UI |
| `/portfolio` | ✅ Portfolio grid | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/portfolio/[slug]` | ✅ Project detail | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/contact` | ❌ N/A | ✅ Contact form | ✅ NEW | **ADD** from P1 |
| `/audit` | ❌ N/A | ✅ Audit request | ✅ NEW | **ADD** from P1 |
| `/audit/thank-you` | ❌ N/A | ✅ Thank you | ✅ NEW | **ADD** from P1 |
| `/architecture/[id]` | ❌ N/A | ✅ Tech blueprint | ✅ NEW | **ADD** from P1 |
| `/admin/*` | ✅ Admin CMS (12+ routes) | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/login` | ✅ Login | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/register` | ✅ Register | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |
| `/dashboard/*` | ✅ Dashboard | ❌ N/A | ✅ UNIQUE | **KEEP** P2 |

---

## COLLISION TYPES

### 🟢 Type 1: SIMPLE REPLACE (Low Risk)

Routes where Project 1's design completely replaces Project 2.

**Criteria:**
- Static marketing pages
- No database interaction
- No complex state management

**Routes:**
- `/` (homepage)
- `/about`
- `/services` (index only)
- `/industries`

**Strategy:**
1. Copy Project 1's page file
2. Copy associated components/sections
3. Update imports and paths
4. Test responsive design

**Estimated time:** 3-4 hours total

---

### 🟡 Type 2: UI MERGE (Medium Risk)

Routes where UI comes from Project 1 but data fetching from Project 2.

**Criteria:**
- Dynamic routes with database
- Complex data fetching
- SEO-critical pages

**Routes:**
- `/blog` → Blog list
- `/blog/[slug]` → Individual blog posts
- `/case-studies` → Case studies list
- `/case-studies/[slug]` → Individual case studies

**Strategy:**
1. **DO NOT replace** Project 2's page files
2. Extract UI components from Project 1
3. Apply Project 1's styling to Project 2's components
4. Keep ALL data fetching logic from Project 2
5. Test with real database data

**Example - Blog Post Page:**

**Current (Project 2):** `src/app/blog/[slug]/page.tsx`
```tsx
// ✅ KEEP - Data fetching
export async function generateStaticParams() { ... }
export async function generateMetadata({ params }: Props): Promise<Metadata> { ... }

// ✅ KEEP - Server component
export default async function BlogPostPage({ params }: Props) {
  const blog = await getBlogBySlug(params.slug);
  
  // ⚠️ UPDATE - Apply Project 1's design here
  return (
    <div className="..."> {/* Use Project 1's classes */}
      <BlogContent blog={blog} /> {/* Update component styling */}
    </div>
  );
}
```

**Apply styling from Project 1:**
```tsx
// Extract layout/structure from old-project1/src/app/blog/[slug]/page.tsx
// But use Project 2's data fetching
```

**High-Risk Areas:**
- Block rendering (`BlogContent.tsx`) - careful not to break content system
- SEO metadata generation
- ISR/SSG configuration

**Estimated time:** 4-6 hours

---

### 🟢 Type 3: NEW ROUTES (Low Risk)

Routes that don't exist in Project 2.

**Routes:**
- `/contact`
- `/audit`
- `/audit/thank-you`
- `/architecture/[id]`

**Strategy:**
1. Copy page files from Project 1
2. Copy associated components
3. Create API routes if forms need backend
4. Update imports and paths
5. Add to sitemap generation

**Estimated time:** 2-3 hours

---

### ✅ Type 4: KEEP AS-IS (No Risk)

Routes exclusive to Project 2 that should not be touched.

**Routes:**
- `/admin/*` (entire admin system)
- `/login`, `/register` (auth)
- `/dashboard/*` (dashboard)
- `/portfolio/*` (portfolio system)
- `/api/*` (all API routes)

**Strategy:**
- No changes to page files
- Only global CSS changes will affect them
- Test for visual regressions after CSS merge

---

## DETAILED COLLISION RESOLUTIONS

### 1. Homepage (`/`)

**Project 2:** `src/app/page.tsx`  
**Project 1:** `old-project1/src/app/page.tsx`

**Action:** REPLACE

**Files to migrate:**
```
old-project1/src/app/page.tsx
old-project1/src/app/(home)/* (all homepage sections)
old-project1/src/components/sections/home/*
```

**Destination:**
```
src/app/(marketing)/page.tsx  (new location)
src/app/(marketing)/(home)/*
src/components/sections/home/*
```

**Note:** Use `(marketing)` route group to organize public pages

---

### 2. About Page (`/about`)

**Project 2:** `src/app/(marketing)/about/page.tsx`  
**Project 1:** `old-project1/src/app/about/page.tsx`

**Action:** REPLACE

**Files to migrate:**
```
old-project1/src/app/about/page.tsx
old-project1/src/app/about/sections/*
old-project1/src/components/about/*
```

**Destination:**
```
src/app/(marketing)/about/page.tsx  (replace existing)
src/app/(marketing)/about/sections/*
src/components/about/*
```

---

### 3. Services (`/services`)

**Complexity:** Project 2 has individual service pages, Project 1 has only index

**Project 2 Structure:**
```
src/app/(marketing)/services/page.tsx  (index)
src/app/(marketing)/services/tracking-architecture/page.tsx
src/app/(marketing)/services/analytics-implementation/page.tsx
... (6 individual service pages)
```

**Project 1 Structure:**
```
old-project1/src/app/services/page.tsx  (index only)
```

**Action:** 
- REPLACE `/services` index with Project 1 version
- KEEP all `/services/*` detail pages from Project 2

**Migration:**
```bash
# Replace index
cp old-project1/src/app/services/page.tsx src/app/(marketing)/services/page.tsx

# Keep all individual service pages
# (no changes to tracking-architecture, analytics-implementation, etc.)
```

**Navigation Update:**
- Update links on new services index to point to existing detail pages

---

### 4. Industries (`/industries`)

**Project 2:** `src/app/(marketing)/industries/page.tsx`  
**Project 1:** `old-project1/src/app/industries/page.tsx`

**Action:** REPLACE

```bash
cp old-project1/src/app/industries/page.tsx src/app/(marketing)/industries/page.tsx
```

---

### 5. Blog Pages (COMPLEX)

#### Blog List (`/blog`)

**Project 2:** `src/app/blog/page.tsx`
```tsx
// Has pagination, category filtering, featured posts
export default async function BlogPage({ searchParams }: Props) {
  const { blogs, totalPages, categories } = await getBlogsWithPagination(...);
  
  return (
    <Container>
      <BlogListTable blogs={blogs} />
      <Pagination currentPage={page} totalPages={totalPages} />
    </Container>
  );
}
```

**Project 1:** `old-project1/src/app/blog/page.tsx`
```tsx
// Static layout/design only
export default function BlogPage() {
  return (
    <div>
      {/* Design/layout structure */}
      <BlogList /> {/* Placeholder component */}
    </div>
  );
}
```

**Action:** MERGE

**Strategy:**
1. Keep Project 2's file structure and data fetching
2. Extract layout/styling from Project 1
3. Update component classes to match Project 1 design
4. Update `BlogListTable` component styling

**Example Merge:**
```tsx
// src/app/blog/page.tsx (keep P2 base, apply P1 design)
export default async function BlogPage({ searchParams }: Props) {
  // ✅ KEEP - Project 2's data fetching
  const { blogs, totalPages } = await getBlogsWithPagination(...);
  
  // ⚠️ UPDATE - Use Project 1's layout/classes
  return (
    <div className="..."> {/* P1 classes */}
      <section className="..."> {/* P1 structure */}
        <BlogHero /> {/* P1 component */}
        <BlogListTable blogs={blogs} className="..." /> {/* P2 component, P1 styling */}
        <Pagination ... /> {/* Update styling */}
      </section>
    </div>
  );
}
```

#### Blog Detail (`/blog/[slug]`)

**Similar merge strategy** - keep data fetching, apply new design

**Critical Components to Update:**
- `src/components/blog/BlogContent.tsx` - Renders block-based content
  - **DO NOT BREAK** content rendering logic
  - Only update CSS classes
- `src/components/blog/TableOfContents.tsx`
- `src/components/blog/ShareButtons.tsx`
- `src/components/blog/RelatedPosts.tsx`

---

### 6. Case Studies Pages (COMPLEX)

**Same strategy as Blog**

**Keep from Project 2:**
- Data fetching
- Dynamic params generation
- Metadata generation
- Database queries

**Apply from Project 1:**
- Layout structure
- Typography
- Spacing
- Color scheme
- Component styling

---

### 7. New Pages from Project 1

#### Contact Page (`/contact`)

**File:** `old-project1/src/app/contact/page.tsx`

**Action:** ADD

**Considerations:**
- Check if form needs backend API route
- Add form handling (POST to `/api/contact` or email service)
- Add to sitemap

**Migration:**
```bash
# Copy page
cp old-project1/src/app/contact/page.tsx src/app/(marketing)/contact/page.tsx

# If has client component
cp old-project1/src/app/contact/ContactPageClient.tsx src/app/(marketing)/contact/

# Create API route (if needed)
# Create src/app/api/contact/route.ts
```

#### Audit Pages

**Files:**
- `old-project1/src/app/audit/page.tsx`
- `old-project1/src/app/audit/AuditPageClient.tsx`
- `old-project1/src/app/audit/thank-you/page.tsx`
- `old-project1/src/app/audit/thank-you/ThankYouClient.tsx`

**Action:** ADD

**Migration:**
```bash
mkdir -p src/app/(marketing)/audit/thank-you

cp old-project1/src/app/audit/page.tsx src/app/(marketing)/audit/
cp old-project1/src/app/audit/AuditPageClient.tsx src/app/(marketing)/audit/
cp old-project1/src/app/audit/thank-you/page.tsx src/app/(marketing)/audit/thank-you/
cp old-project1/src/app/audit/thank-you/ThankYouClient.tsx src/app/(marketing)/audit/thank-you/
```

#### Architecture Pages

**File:** `old-project1/src/app/architecture/[id]/page.tsx`

**Action:** ADD

**Considerations:**
- Dynamic route - check if needs data fetching
- May be static content or need database integration

---

## ROUTE GROUP ORGANIZATION

### Final Route Structure

```
src/app/
├── (marketing)/               ← NEW route group for public pages
│   ├── (home)/               ← FROM Project 1
│   │   ├── hero-section/
│   │   ├── services-section/
│   │   └── ...
│   ├── page.tsx              ← FROM Project 1 (homepage)
│   ├── about/
│   │   ├── sections/         ← FROM Project 1
│   │   └── page.tsx          ← FROM Project 1
│   ├── services/
│   │   ├── page.tsx          ← FROM Project 1 (index)
│   │   ├── tracking-architecture/
│   │   │   └── page.tsx      ← KEEP Project 2
│   │   ├── analytics-implementation/
│   │   │   └── page.tsx      ← KEEP Project 2
│   │   └── ...
│   ├── industries/
│   │   └── page.tsx          ← FROM Project 1
│   ├── contact/
│   │   └── page.tsx          ← ADD from Project 1
│   ├── audit/
│   │   ├── page.tsx          ← ADD from Project 1
│   │   └── thank-you/
│   │       └── page.tsx      ← ADD from Project 1
│   └── architecture/
│       └── [id]/
│           └── page.tsx      ← ADD from Project 1
│
├── blog/
│   ├── page.tsx              ← MERGE (P2 data + P1 UI)
│   └── [slug]/
│       └── page.tsx          ← MERGE (P2 data + P1 UI)
│
├── case-studies/
│   ├── page.tsx              ← MERGE (P2 data + P1 UI)
│   └── [slug]/
│       └── page.tsx          ← MERGE (P2 data + P1 UI)
│
├── portfolio/                ← KEEP (Project 2)
│   ├── page.tsx
│   └── [slug]/
│       └── page.tsx
│
├── (admin)/                  ← KEEP (Project 2)
│   └── admin/
│       ├── dashboard/
│       ├── blogs/
│       ├── projects/
│       └── ...
│
├── (auth)/                   ← KEEP (Project 2)
│   ├── login/
│   └── register/
│
├── (dashboard)/              ← KEEP (Project 2)
│   └── dashboard/
│
├── api/                      ← KEEP (Project 2)
│   ├── auth/
│   ├── portfolio-layout/
│   ├── webhooks/
│   └── newsletter/
│
├── layout.tsx                ← MERGE (P2 base + P1 Navbar/Footer)
├── globals.css               ← MERGE (P2 tokens + P1 utilities)
└── ...
```

---

## SITEMAP & METADATA UPDATES

### Add New Routes to Sitemap

**File:** `src/app/sitemap.ts`

```typescript
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://martechrise.ai',
      lastModified: new Date(),
    },
    {
      url: 'https://martechrise.ai/about',
      lastModified: new Date(),
    },
    // ... existing routes ...
    
    // ADD from Project 1
    {
      url: 'https://martechrise.ai/contact',
      lastModified: new Date(),
    },
    {
      url: 'https://martechrise.ai/audit',
      lastModified: new Date(),
    },
    
    // ... rest of sitemap
  ];
}
```

### Update Navigation Links

**File:** `src/config/site.ts` (if navigation config exists)

```typescript
export const siteConfig = {
  // ... existing config ...
  
  nav: [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/industries', label: 'Industries' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },  // ADD
  ],
}
```

**OR update in Navbar component** if links are hardcoded

---

## INTERNAL LINK UPDATES

After migration, audit all internal links:

```bash
# Search for hardcoded links
grep -r "href=\"/" src/app --include="*.tsx"
grep -r "href=\"/" src/components --include="*.tsx"

# Check for:
# - Links to old route paths
# - Links to moved pages
# - Links to renamed pages
```

**Common link issues:**
- `/` → Should point to new homepage
- `/about` → Should work (same path)
- `/services` → Should work (index updated)
- `/services/some-service` → Should still work (kept pages)

---

## MIDDLEWARE CONSIDERATIONS

**Check:** `src/middleware.ts` (if exists)

**Potential issues:**
- Route protection (auth)
- Redirects
- Rewrites

**Action:** Update middleware to handle new routes

**Example:**
```typescript
export function middleware(request: NextRequest) {
  // Ensure new public routes are accessible
  const publicPaths = [
    '/',
    '/about',
    '/services',
    '/industries',
    '/blog',
    '/case-studies',
    '/contact',      // ADD
    '/audit',        // ADD
    '/architecture', // ADD
  ];
  
  // ... rest of middleware logic
}
```

---

## REDIRECT RULES (If Needed)

If any routes change paths:

```javascript
// next.config.mjs
module.exports = {
  async redirects() {
    return [
      // Example: If old /services redirected to /our-services
      // {
      //   source: '/our-services',
      //   destination: '/services',
      //   permanent: true,
      // },
    ];
  },
}
```

---

## TESTING CHECKLIST

### Manual Route Testing

After migration:

**Simple Replace Routes:**
- [ ] `/` - Homepage loads with new design
- [ ] `/about` - About page loads with new sections
- [ ] `/services` - Services index loads
- [ ] `/industries` - Industries page loads

**Individual Service Pages (kept):**
- [ ] `/services/tracking-architecture` - Still works
- [ ] `/services/analytics-implementation` - Still works
- [ ] `/services/conversion-event-tracking` - Still works
- [ ] `/services/server-side-tracking` - Still works
- [ ] `/services/qa-data-validation` - Still works
- [ ] `/services/analytics-reporting-attribution` - Still works

**New Routes:**
- [ ] `/contact` - Contact form loads
- [ ] `/audit` - Audit form loads
- [ ] `/audit/thank-you` - Thank you page loads
- [ ] `/architecture/[id]` - Dynamic route works (test with valid ID)

**Merged Routes:**
- [ ] `/blog` - List loads with database data + new UI
- [ ] `/blog/[slug]` - Individual post loads with correct data
- [ ] `/case-studies` - List loads with database data
- [ ] `/case-studies/[slug]` - Individual case study loads

**Existing Routes (should still work):**
- [ ] `/portfolio` - Portfolio grid loads
- [ ] `/admin/dashboard` - Admin dashboard accessible
- [ ] `/admin/blogs` - Blog management works
- [ ] `/login` - Login page loads
- [ ] `/dashboard` - Dashboard loads

### Automated Route Testing

```bash
# Generate all routes and test
npm run build

# Check build output for errors
# All routes should appear in build manifest
```

---

## ROUTE COLLISION SUMMARY

| Collision Type | Count | Risk Level | Estimated Time |
|----------------|-------|------------|----------------|
| Simple Replace | 4 | 🟢 LOW | 3-4 hours |
| UI Merge | 4 | 🟡 MEDIUM | 4-6 hours |
| New Routes | 4 | 🟢 LOW | 2-3 hours |
| Keep As-Is | 20+ | ✅ NONE | 0 hours |

**Total Estimated Time:** 9-13 hours

**Critical Path:**
1. Simple replaces first (quick wins)
2. New routes second (isolated, low risk)
3. UI merges last (complex, requires careful testing)

---

**END OF ROUTE COLLISION ANALYSIS**
