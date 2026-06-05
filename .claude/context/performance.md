# Performance

## Core Web Vitals Targets

| Metric | Target | Fail Threshold |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | > 4.0s |
| CLS (Cumulative Layout Shift) | < 0.1 | > 0.25 |
| FID / INP (Interaction to Next Paint) | < 100ms | > 300ms |
| TTFB (Time to First Byte) | < 800ms | — |

All key pages (Home, /analytics-audit, all 6 service pages) must pass before launch.

---

## Image Rules

- Format: **WebP only** — convert all JPG/PNG to WebP
- Always use Next.js `<Image>` component — it handles lazy loading, sizing, and format
- Never omit `width` and `height` props on `<Image>` — causes CLS
- Always write descriptive `alt` text with natural keyword inclusion
- Hero images: use `priority` prop to preload above-the-fold images
- Below-fold images: `loading="lazy"` is default with Next.js Image

```tsx
// ✅ Correct
<Image
  src="/hero-analytics-dashboard.webp"
  alt="Analytics dashboard showing server-side tracking data"
  width={1200}
  height={630}
  priority
/>
```

---

## Font Loading Rules

- Use `next/font` for all fonts — never load from Google Fonts CDN directly (render-blocking)
- Preload font files using `font-display: swap` to prevent invisible text
- Limit font variants — use only the weights actually used in the design

```typescript
// ✅ Correct — uses next/font (no network request, no layout shift)
import { Inter } from 'next/font/google'
const inter = Inter({ subsets: ['latin'], display: 'swap' })
```

---

## Script Rules

- No render-blocking scripts in `<head>` without `async` or `defer`
- Load GA4 and GTM scripts after consent is granted — do not auto-fire on load
- Use Next.js `<Script>` component with appropriate `strategy`:
  - `strategy="afterInteractive"` for GA4/GTM
  - `strategy="lazyOnload"` for non-critical third parties

```tsx
<Script
  src="https://www.googletagmanager.com/gtm.js?id=GTM-XXXXXXX"
  strategy="afterInteractive"
/>
```

---

## Component Rules for Performance

- Default to **server components** — avoid `'use client'` unless interaction requires it
- Do not import heavy libraries client-side if they can run server-side
- Use `dynamic()` imports with `{ ssr: false }` only for truly browser-only components
- Avoid `useEffect` for data that can be fetched server-side

---

## Build Output Checks

Before marking any page complete, verify:
- [ ] No unused imports that bloat bundle
- [ ] No large SVGs inlined as JSX (use `<Image>` or sprite sheet)
- [ ] Page passes Lighthouse performance score > 90 on mobile
- [ ] No layout shift on load (check with Chrome DevTools CLS overlay)
