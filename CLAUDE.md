# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server
npm run build        # Production build
npm run lint         # ESLint via next lint
npm run type-check   # tsc --noEmit (no test suite configured)
npm run seed-blog-categories  # Seed MongoDB with default blog categories
```

No test framework is configured. Type checking (`npm run type-check`) is the primary correctness gate.

## Architecture

This is a full-stack Next.js (App Router) application with MongoDB, NextAuth.js, and Cloudinary. It serves as both a public-facing marketing site for MarTechRise and a self-contained CMS for managing blog posts and portfolio projects.

### Route Groups

- `(admin)/` — Protected CMS: blog/project/category/user management, portfolio layout editor, AI blog review queue
- `(auth)/` — Login and registration pages
- `(dashboard)/` — Internal dashboard views
- Public routes — `/`, `/blog/[slug]`, `/works/[slug]`, `/works`, plus sitemaps and RSS feed

The root layout (`src/app/layout.tsx`) wraps everything with `AuthProvider` and renders `Navbar`. Admin pages use their own `AdminLayout` with a sidebar.

### Data Flow

```
Client → Server Action (src/actions/) → Service (src/services/) → MongoDB (Mongoose models)
                                     ↘ Cloudinary (via upload.service.ts)
```

Server Actions are the mutation layer for all data. Services contain business logic and database queries. Never query MongoDB directly from page components or API routes — go through the service layer.

### Key Files

| File | Purpose |
|---|---|
| `src/config/site.ts` | Single source of truth for all company data, nav config, service slugs, feature flags |
| `src/config/env.ts` | Zod-validated environment schema — check this for required env vars |
| `src/lib/auth.ts` | NextAuth config: JWT strategy, credentials provider, 30-day sessions |
| `src/lib/db.ts` | Mongoose connection with hot-reload caching |
| `src/lib/seo.ts` | `generateSEO()` helper — use for all page metadata |
| `src/lib/sanitize.ts` | `isomorphic-dompurify` — required for any user-generated HTML |

### Blog Content System

Blog posts use a block-based content model (not MDX). The `IContentBlock` type in `src/models/Blog.ts` supports 11 block types: `h2`, `h3`, `paragraph`, `list`, `image`, `code`, `quote`, `video`, `faq`, `spacer`, `cta`. Rendering is handled by `src/components/blog/BlogContent.tsx` and `src/lib/blog/blocksToHtml.ts`.

AI blog generation flows through an n8n webhook (`/api/webhooks/n8n-blog`) — generated posts land in a review queue (status: `reviewing`) before publishing.

### Authentication & Roles

NextAuth with JWT. Three roles: `admin`, `editor`, `user`. Session is augmented in `src/types/next-auth.d.ts`. Protect admin routes by checking session role in the layout or via middleware — not per-page.

### Portfolio Layout System

The drag-and-drop portfolio grid is persisted in MongoDB via `PortfolioLayoutBox` and `LayoutCounter` models. The client component `PortfolioContainer` fetches layout on mount; mutations go through `/api/portfolio-layout/` routes. This is separate from the static services/case-studies structure.

### ISR Caching

Public content pages use `revalidate = 3600` (1 hour). The three sitemaps (`/sitemap.ts`, `/blog-sitemap.xml`, `/works-sitemap.xml`) are dynamically generated. Do not add `export const dynamic = 'force-dynamic'` to public pages without understanding the performance impact.

### Media

All images are stored in Cloudinary. Use `src/components/shared/ResponsiveImage.tsx` for display. Uploads go through `/api/upload` which calls `src/services/upload.service.ts`. Supported remote image patterns (webp/avif, 30-day cache) are configured in `next.config.mjs`.

### Validation

All user inputs are validated with Zod. Schemas live in `src/validations/`. Always validate at the Server Action boundary — not just in the form component.

## Project-Specific Context

See `.claude/CLAUDE.md` for MarTechRise brand context, service slugs, SEO specs, and phase build plan. See `.claude/memory/` for decisions log, known issues, and pending work.

The `siteConfig` in `src/config/site.ts` has several `⚠️` items that need updating before launch — notably `organization.legalName` (should be `'MarTechRise Intelligence Private Limited'`) and `organization.foundingDate` (should be `'2026-01'`).
