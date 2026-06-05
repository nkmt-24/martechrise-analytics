# Performance Optimization Guide

## Current Status (Based on Lighthouse Report)

### Performance Score: 53/100
**Critical Issues:**
- ❌ Speed Index: 13.7s (Target: <4s)
- ❌ Total Blocking Time: 680ms (Target: <200ms)
- ⚠️ LCP: 2.2s (Target: <2.5s)
- ⚠️ Server Response: 732ms (Target: <200ms)
- ✅ FCP: 0.7s (Good)
- ✅ CLS: 0 (Perfect)

---

## Completed Optimizations

### 1. **Next.js Configuration Enhanced**
File: `next.config.mjs`

**Added:**
- ✅ Compression enabled
- ✅ SWC minification
- ✅ Optimized package imports (lucide-react, framer-motion, date-fns)
- ✅ Aggressive static asset caching (1 year)
- ✅ Image caching (1 year)
- ✅ CSS optimization experimental feature

**Cache Headers:**
```javascript
/_next/static/*    → max-age=31536000, immutable
/_next/image/*     → max-age=31536000, immutable
/assets/*          → max-age=31536000, immutable
```

### 2. **SEO Fixed**
- ✅ Canonical URLs now absolute (was relative)
- ✅ Enhanced meta tags
- ✅ Structured data on all pages

---

## Required Manual Optimizations

### Priority 1: Critical (Do First)

#### A. **Image Optimization** (Est. 220 KiB savings)

**Current Issues:**
- Missing width/height attributes
- No lazy loading on below-fold images
- Large image files

**Fix Required:**

1. **Add dimensions to ALL images:**
```tsx
// ❌ Bad
<Image src="/image.jpg" alt="..." />

// ✅ Good
<Image 
  src="/image.jpg" 
  alt="..." 
  width={1200} 
  height={630}
  loading="lazy"
  placeholder="blur"
/>
```

2. **Lazy load below-fold images:**
```tsx
<Image 
  loading="lazy"  // Auto lazy load
  priority={false}  // Don't preload
/>
```

3. **Prioritize above-fold images:**
```tsx
<Image 
  priority  // For hero images only
  loading="eager"
/>
```

**Files to check:**
- `src/components/sections/home/*`
- `src/app/(home)/hero-section/*`
- All logo carousels
- Case study images

---

#### B. **Reduce JavaScript Execution** (Est. 2.1s reduction)

**Largest bundles:**
1. `node_modules_next_dist_compiled_0rpq4pf._.js` → 1.5s
2. `node_modules_motion-dom_dist_es_0n_wqqr._.js` → 442ms
3. `node_modules_next_dist_client_0fhqo1d._.js` → 357ms

**Solutions:**

1. **Dynamic Import Heavy Sections:**

Create file: `src/lib/dynamic.ts`
```typescript
import dynamic from 'next/dynamic';

// Lazy load animations
export const DynamicAnimatedSection = dynamic(
  () => import('@/components/sections/animated-section'),
  {
    loading: () => <div className="min-h-screen" />,
    ssr: false, // Disable SSR for animation-heavy components
  }
);

export const DynamicTestimonials = dynamic(
  () => import('@/components/sections/home/testimonials'),
  { loading: () => <div>Loading testimonials...</div> }
);

export const DynamicLogoCarousel = dynamic(
  () => import('@/components/sections/home/logo-carousel'),
  { loading: () => null }
);
```

2. **Update Homepage to use dynamic imports:**

```tsx
// src/app/page.tsx
import dynamic from 'next/dynamic';

// Static (critical)
import HeroSection from "./(home)/hero-section";

// Dynamic (non-critical)
const LogoCarousel = dynamic(() => import("@/components/sections/home/logo-carousel"));
const Problems = dynamic(() => import("@/components/sections/home/problems"));
const Services = dynamic(() => import("@/components/sections/home/services"));
const CaseStudies = dynamic(() => import("@/components/sections/home/case-studies"));
const Trust = dynamic(() => import("@/components/sections/home/trust"));
const Tools = dynamic(() => import("@/components/sections/home/tools"));
const Process = dynamic(() => import("@/components/sections/home/process"));
const TestimonialSection = dynamic(() => import("./(home)/testimonial-section"));
const About = dynamic(() => import("@/components/sections/home/About"));
const LandingCTA = dynamic(() => import("@/components/sections/home/landing-cta"));
```

---

#### C. **Fix Forced Reflows** (334ms savings)

**Problem:**
```
node_modules_next_di…d_0rpq4pf._.js:2628 → 334 ms
node_modules_framer-…s_129u8xh._.js:3250 → 334 ms
```

Framer Motion and GSAP are causing forced reflows.

**Solutions:**

1. **Optimize Framer Motion animations:**

```tsx
// ❌ Bad - causes reflow
<motion.div
  animate={{
    width: '100%',
    height: 'auto',
  }}
/>

// ✅ Good - uses transform
<motion.div
  animate={{
    scale: 1,
    opacity: 1,
  }}
  style={{ transform: 'translateZ(0)' }} // Hardware acceleration
/>
```

2. **Use CSS transforms instead of geometric properties:**

```tsx
// ❌ Avoid
top, left, right, bottom, width, height

// ✅ Prefer
transform: translate(), scale()
opacity
```

3. **Batch DOM reads:**

```tsx
// ❌ Bad
element.offsetWidth;
element.style.width = '100px';
element.offsetHeight; // Causes reflow

// ✅ Good
const width = element.offsetWidth;
const height = element.offsetHeight;
element.style.width = '100px'; // No reflow
```

---

#### D. **Reduce Unused JavaScript** (362 KiB savings)

**Files with unused code:**
1. `next-devtools` → 135 KiB (should only load in dev)
2. `next_dist_client` → 76.8 KiB
3. `react-dom` → 59.2 KiB

**Fix:**

1. **Disable devtools in production:**

```javascript
// next.config.mjs
experimental: {
  devIndicators: false, // Disable in production
}
```

2. **Tree-shake imports:**

```tsx
// ❌ Bad
import * as Icons from 'lucide-react';

// ✅ Good
import { ArrowRight, Check } from 'lucide-react';
```

3. **Analyze bundle:**

```bash
npm install @next/bundle-analyzer
```

```javascript
// next.config.mjs
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

export default withBundleAnalyzer(nextConfig);
```

```bash
ANALYZE=true npm run build
```

---

#### E. **Reduce Unused CSS** (17 KiB savings)

**Solution:**

1. **Purge Tailwind CSS properly:**

```javascript
// tailwind.config.ts
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    // Remove old-project1 if still referenced
  ],
  // Add safelist for dynamic classes
  safelist: [
    'text-indigo-600',
    'bg-indigo-600',
  ],
}
```

2. **Remove unused global styles:**

Check `src/app/globals.css` for:
- Unused utility classes
- Duplicate animations
- Old project CSS

---

### Priority 2: High Impact

#### F. **Minify JavaScript** (244 KiB savings)

This should be automatic in production, but verify:

```bash
NODE_ENV=production npm run build
```

If not minified, check:
```javascript
// next.config.mjs
swcMinify: true, // ✅ Already added
```

---

#### G. **Optimize Fonts**

1. **Use next/font properly:**

```tsx
// src/app/layout.tsx
import { Inter } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap', // ✅ IMPORTANT
  preload: true,
  variable: '--font-inter',
});
```

2. **Preconnect to font CDN:**

```tsx
// src/app/layout.tsx
export default function RootLayout() {
  return (
    <html>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  );
}
```

---

#### H. **Server Response Time** (732ms → Target: <200ms)

**Current Issue:** MongoDB connection might be slow.

**Solutions:**

1. **Connection pooling:**

```typescript
// src/lib/db.ts
const options = {
  maxPoolSize: 10,
  serverSelectionTimeoutMS: 5000,
  socketTimeoutMS: 45000,
};
```

2. **Database indexing:**

Ensure indexes on:
- `Blog.slug`
- `Blog.workflow.status`
- `Project.slug`
- `Project.status`

3. **Caching frequently accessed data:**

```typescript
// Example: Cache blog list
import { unstable_cache } from 'next/cache';

export const getCachedBlogs = unstable_cache(
  async () => getBlogs(),
  ['blogs-list'],
  { revalidate: 3600 }
);
```

---

### Priority 3: Fine-Tuning

#### I. **Optimize Third-Party Scripts**

1. **Use Next.js Script component:**

```tsx
import Script from 'next/script';

<Script
  src="https://analytics.com/script.js"
  strategy="lazyOnload" // or "afterInteractive"
/>
```

2. **Self-host analytics if possible**

---

#### J. **Implement Service Worker** (Optional)

For offline support and caching:

```bash
npm install next-pwa
```

```javascript
// next.config.mjs
import withPWA from 'next-pwa';

export default withPWA({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
})(nextConfig);
```

---

## Performance Checklist

### Critical Path (Do Now):
- [ ] Add width/height to all images
- [ ] Implement lazy loading for below-fold images
- [ ] Dynamic import non-critical sections
- [ ] Fix forced reflows in animations
- [ ] Remove unused JavaScript (devtools in production)
- [ ] Purge unused CSS
- [ ] Optimize font loading
- [ ] Add database indexes
- [ ] Implement connection pooling

### High Priority:
- [ ] Bundle analysis with @next/bundle-analyzer
- [ ] Optimize Framer Motion usage
- [ ] Tree-shake icon imports
- [ ] Preconnect to external origins
- [ ] Cache frequently accessed data
- [ ] Minimize main-thread work

### Medium Priority:
- [ ] Implement service worker
- [ ] Self-host third-party scripts
- [ ] Add resource hints (preload, prefetch)
- [ ] Optimize GSAP animations
- [ ] Reduce DOM size

---

## Expected Results After Optimization

| Metric | Before | After (Target) |
|--------|--------|----------------|
| Performance | 53 | 90+ |
| FCP | 0.7s | <0.7s |
| LCP | 2.2s | <1.5s |
| TBT | 680ms | <100ms |
| SI | 13.7s | <3s |
| CLS | 0 | 0 |

---

## Testing Commands

```bash
# Production build
npm run build

# Analyze bundle
ANALYZE=true npm run build

# Test locally
npm run start

# Lighthouse CI
npx lighthouse http://localhost:3000 --view
```

---

## Monitoring

### Setup Performance Monitoring:

1. **Google PageSpeed Insights**
   - https://pagespeed.web.dev/

2. **Lighthouse CI**
   ```bash
   npm install -g @lhci/cli
   lhci autorun
   ```

3. **Web Vitals**
   ```tsx
   // src/app/layout.tsx
   import { Analytics } from '@vercel/analytics/react';

   <Analytics />
   ```

---

## Next Steps

1. ✅ Next.js config optimized
2. ✅ SEO canonical URLs fixed
3. ⏳ Implement image optimizations
4. ⏳ Add dynamic imports
5. ⏳ Fix animation forced reflows
6. ⏳ Database optimization
7. ⏳ Bundle analysis

**Estimated Time:** 4-6 hours
**Expected Performance Gain:** +37 points (53 → 90)

---

*Last Updated: May 20, 2026*
*Priority: Critical - Performance directly impacts SEO and conversions*
