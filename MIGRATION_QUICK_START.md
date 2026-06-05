# MIGRATION QUICK START GUIDE

**🚀 Fast-track reference for executing the UI merge**

---

## ⚡ TL;DR - What You Need to Know

**Goal:** Merge Project 1's (old-project1) UI into Project 2 (current directory)  
**Blocker:** Tailwind CSS v3 vs v4 incompatibility  
**First Step:** Downgrade Project 1 to Tailwind v3  
**Total Time:** 3-4 days for complete merge  
**Risk Level:** 🟡 MEDIUM (manageable with careful execution)

---

## 📋 PRE-FLIGHT CHECKLIST

Before starting, verify:

```bash
# 1. You're in the right directory (Project 2)
pwd  # Should be: d:\Projects\martechrise-old-ui

# 2. Project 1 files are in old-project1/
ls old-project1/  # Should contain src/, package.json, etc.

# 3. Current state builds successfully
npm install
npm run build  # Must succeed

# 4. Git is clean (commit any pending work)
git status  # Should be clean or committed
```

---

## 🔴 CRITICAL: Fix Tailwind Version FIRST

**This blocks everything else. Do this before any UI migration.**

### Step 1: Lock Project 2 to Tailwind v3

```bash
npm install tailwindcss@3.3.0 --save-exact
```

### Step 2: Convert Project 1's CSS

**Edit:** `old-project1/src/app/globals.css`

**BEFORE (Tailwind v4):**
```css
@import "tailwindcss";

:root {
  --background: #ffffff;
  --foreground: #171717;
}

@theme inline {
  --color-background: var(--background);
}
```

**AFTER (Tailwind v3):**
```css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --background: 0 0% 100%;  /* Convert #ffffff to HSL */
    --foreground: 0 0% 9%;    /* Convert #171717 to HSL */
  }
}
```

### Step 3: Test Build

```bash
npm run build  # Must succeed
```

✅ **Checkpoint:** If build succeeds, Tailwind conflict resolved!

---

## 📂 WHAT GOES WHERE

### FROM Project 1 → TO Project 2

| What | From | To | Action |
|------|------|-----|--------|
| **Navbar** | `old-project1/src/components/layout/Navbar.tsx` | `src/components/layout/Navbar.tsx` | **REPLACE** |
| **Footer** | `old-project1/src/components/layout/Footer.tsx` | `src/components/layout/Footer.tsx` | **REPLACE** |
| **Homepage** | `old-project1/src/app/page.tsx` + `(home)/*` | `src/app/(marketing)/page.tsx` + `(home)/*` | **REPLACE** |
| **About** | `old-project1/src/app/about/*` | `src/app/(marketing)/about/*` | **REPLACE** |
| **Services index** | `old-project1/src/app/services/page.tsx` | `src/app/(marketing)/services/page.tsx` | **REPLACE** |
| **Industries** | `old-project1/src/app/industries/page.tsx` | `src/app/(marketing)/industries/page.tsx` | **REPLACE** |
| **Contact** | `old-project1/src/app/contact/*` | `src/app/(marketing)/contact/*` | **ADD NEW** |
| **Audit pages** | `old-project1/src/app/audit/*` | `src/app/(marketing)/audit/*` | **ADD NEW** |
| **Blog/Cases** | `old-project1/src/app/blog/*` | N/A | **MERGE UI ONLY** |

### KEEP UNCHANGED (Project 2)

- ✅ All `/admin/*` pages
- ✅ All `/api/*` routes
- ✅ `/login`, `/register` (auth)
- ✅ `/dashboard/*`
- ✅ `/portfolio/*`
- ✅ Individual service pages (`/services/tracking-architecture`, etc.)
- ✅ All database models, services, actions

---

## 🎯 RECOMMENDED EXECUTION ORDER

### Phase 1: Foundation (Day 1, Morning)

**Time:** 3-4 hours

1. **Tailwind migration** (CRITICAL - see above)
2. **Merge CSS**
   ```bash
   # Backup current globals.css
   cp src/app/globals.css src/app/globals.css.backup
   
   # Manually merge (see CSS_TAILWIND_CONFLICTS.md for details)
   # - Keep Project 2's HSL color variables
   # - Add Project 1's .glass, .perspective-1000 utilities
   ```

3. **Verify build**
   ```bash
   npm run build
   npm run type-check
   ```

✅ **Checkpoint:** CSS foundation ready

---

### Phase 2: Layout Components (Day 1, Afternoon)

**Time:** 2-3 hours

1. **Replace Navbar**
   ```bash
   cp old-project1/src/components/layout/Navbar.tsx src/components/layout/Navbar.tsx
   ```
   
   - Update imports: `@/*` alias
   - Update links to match Project 2 routes
   - Test: `npm run dev` → Visit homepage, check Navbar

2. **Replace Footer**
   ```bash
   cp old-project1/src/components/layout/Footer.tsx src/components/layout/Footer.tsx
   ```
   
   - Update imports
   - Update links

3. **Add FloatingContact**
   ```bash
   cp old-project1/src/components/layout/FloatingContact.tsx src/components/layout/FloatingContact.tsx
   ```

4. **Update root layout** (`src/app/layout.tsx`)
   ```tsx
   // Keep:
   import { Inter, Instrument_Serif, Caveat } from 'next/font/google';
   import { GeistSans } from 'geist/font/sans';
   import AuthProvider from '@/components/providers/AuthProvider';
   import NextTopLoader from 'nextjs-toploader';
   
   // Update:
   import Navbar from '@/components/layout/Navbar';  // Now from Project 1
   import Footer from '@/components/layout/Footer';  // Now from Project 1
   import FloatingContact from '@/components/layout/FloatingContact';  // NEW
   
   export default function RootLayout({ children }: { children: React.ReactNode }) {
     return (
       <html lang="en" className={`${inter.variable} ${...}`}>
         <body>
           <AuthProvider>
             <NextTopLoader color="#7c3aed" showSpinner={false} />
             <Navbar />
             {children}
             <FloatingContact />  {/* ADD */}
           </AuthProvider>
           <Footer />
         </body>
       </html>
     );
   }
   ```

5. **Test**
   ```bash
   npm run dev
   # Visit: /, /about, /admin/dashboard
   # Verify: Navbar + Footer on all pages
   ```

✅ **Checkpoint:** Layout components migrated

---

### Phase 3: Marketing Pages (Day 2)

**Time:** 4-5 hours

1. **Homepage**
   ```bash
   mkdir -p src/app/\(marketing\)/\(home\)
   
   cp old-project1/src/app/page.tsx src/app/\(marketing\)/page.tsx
   cp -r old-project1/src/app/\(home\)/* src/app/\(marketing\)/\(home\)/
   
   # Copy supporting components
   cp -r old-project1/src/components/sections/home src/components/sections/
   ```
   
   - Update all imports
   - Test: Visit `/`

2. **About page**
   ```bash
   mkdir -p src/app/\(marketing\)/about/sections
   
   cp old-project1/src/app/about/page.tsx src/app/\(marketing\)/about/page.tsx
   cp -r old-project1/src/app/about/sections/* src/app/\(marketing\)/about/sections/
   cp -r old-project1/src/components/about src/components/
   ```
   
   - Update imports
   - Test: Visit `/about`

3. **Services index**
   ```bash
   cp old-project1/src/app/services/page.tsx src/app/\(marketing\)/services/page.tsx
   ```
   
   - Update imports
   - Update links to point to existing service detail pages
   - Test: Visit `/services` → Click service → Should reach `/services/tracking-architecture`

4. **Industries**
   ```bash
   cp old-project1/src/app/industries/page.tsx src/app/\(marketing\)/industries/page.tsx
   ```

5. **Run type-check after each page**
   ```bash
   npm run type-check  # Fix any import errors
   ```

✅ **Checkpoint:** Main marketing pages migrated

---

### Phase 4: New Pages (Day 2, End of Day)

**Time:** 2 hours

1. **Contact page**
   ```bash
   mkdir -p src/app/\(marketing\)/contact
   cp old-project1/src/app/contact/* src/app/\(marketing\)/contact/
   ```

2. **Audit pages**
   ```bash
   mkdir -p src/app/\(marketing\)/audit/thank-you
   cp old-project1/src/app/audit/page.tsx src/app/\(marketing\)/audit/
   cp old-project1/src/app/audit/AuditPageClient.tsx src/app/\(marketing\)/audit/
   cp old-project1/src/app/audit/thank-you/page.tsx src/app/\(marketing\)/audit/thank-you/
   cp old-project1/src/app/audit/thank-you/ThankYouClient.tsx src/app/\(marketing\)/audit/thank-you/
   ```

3. **Architecture pages**
   ```bash
   mkdir -p src/app/\(marketing\)/architecture/[id]
   cp -r old-project1/src/app/architecture/* src/app/\(marketing\)/architecture/
   ```

4. **Update sitemap** (`src/app/sitemap.ts`)
   ```typescript
   // Add new routes
   { url: 'https://martechrise.ai/contact', lastModified: new Date() },
   { url: 'https://martechrise.ai/audit', lastModified: new Date() },
   ```

✅ **Checkpoint:** All new pages added

---

### Phase 5: Blog/Case Study UI Merge (Day 3, HIGH RISK)

**Time:** 5-6 hours

**⚠️ CAUTION:** Do NOT replace these pages, only update UI.

1. **Extract UI patterns from Project 1**
   - Open `old-project1/src/app/blog/page.tsx`
   - Note: Layout structure, CSS classes, component arrangement
   - **DO NOT copy the entire file**

2. **Update Project 2's blog list**
   - Edit `src/app/blog/page.tsx`
   - Keep ALL data fetching logic
   - Apply Project 1's layout classes
   - Update component styling

3. **Update blog detail page**
   - Edit `src/app/blog/[slug]/page.tsx`
   - Keep data fetching
   - Apply Project 1's design

4. **Update blog components**
   - `src/components/blog/BlogContent.tsx` - Update CSS only, keep rendering logic
   - `src/components/blog/TableOfContents.tsx`
   - `src/components/blog/ShareButtons.tsx`

5. **Repeat for case studies**

6. **Test with database**
   ```bash
   npm run dev
   # Create a test blog post in admin
   # Publish it
   # View on frontend: /blog/[slug]
   # Verify: Data renders + new UI applied
   ```

✅ **Checkpoint:** Blog/case study UI merged

---

### Phase 6: Testing & Validation (Day 4)

**Time:** 4-5 hours

Run through full validation checklist (see MIGRATION_ANALYSIS.md Section 8)

**Critical tests:**
```bash
# 1. Type check
npm run type-check  # Must pass

# 2. Build
npm run build  # Must succeed

# 3. Lint
npm run lint  # Fix issues

# 4. Manual testing
npm run dev

# Visit every route:
# - / (homepage)
# - /about
# - /services
# - /services/tracking-architecture (test one service detail)
# - /industries
# - /blog
# - /blog/[slug] (test with real post)
# - /case-studies
# - /contact
# - /audit
# - /admin/dashboard
# - /admin/blogs
# - /login
```

**Check for:**
- [ ] No console errors
- [ ] All pages render
- [ ] Navigation works
- [ ] Responsive design works (mobile, tablet, desktop)
- [ ] Animations play correctly
- [ ] Admin functionality works (create/edit blog, projects)
- [ ] Authentication works

✅ **Checkpoint:** Migration validated

---

### Phase 7: Cleanup (Day 4, End of Day)

**Time:** 2 hours

1. **Remove old-project1 folder**
   ```bash
   rm -rf old-project1/
   ```

2. **Remove backups**
   ```bash
   rm src/app/globals.css.backup
   ```

3. **Clean up unused dependencies**
   ```bash
   npx depcheck  # Shows unused deps
   # Review and remove if safe
   ```

4. **Final build**
   ```bash
   npm run build
   ```

5. **Commit**
   ```bash
   git add .
   git commit -m "feat: Merge Project 1 UI into main application"
   ```

✅ **MIGRATION COMPLETE!**

---

## 🆘 TROUBLESHOOTING

### Build Fails with Tailwind Errors

```
Error: Unknown at-rule @theme
```

**Fix:** You forgot to convert Project 1's CSS to v3 syntax.
- See "CRITICAL: Fix Tailwind Version FIRST" section above

---

### Import Errors

```
Cannot find module '@/components/...'
```

**Fix:** Update imports after copying files
```tsx
// Might be:
import Navbar from '@/components/layout/Navbar';

// Or might need:
import Navbar from '../../../../components/layout/Navbar';

// Check tsconfig.json for path alias config
```

---

### CSS Not Applied

**Symptoms:** New components have no styling

**Fix:**
1. Check `globals.css` is imported in `layout.tsx`
2. Verify Tailwind classes are valid
3. Check Tailwind config `content` paths include new files
   ```typescript
   content: [
     "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
     "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
   ],
   ```

---

### Admin Pages Look Broken

**Symptoms:** Admin dashboard styling is weird after CSS merge

**Fix:**
- Global CSS changes affected admin
- Inspect elements in DevTools
- Add scoped classes if needed
- May need to isolate marketing CSS with data attributes

---

### Hydration Errors

```
Warning: Hydration failed because the initial UI does not match
```

**Fix:**
- Check for client-only code in server components
- Ensure `'use client'` directive is present in interactive components
- Check for date/time rendering mismatches

---

### 404 on New Routes

**Symptoms:** `/contact` or `/audit` returns 404

**Fix:**
1. Check file is in correct location: `src/app/(marketing)/contact/page.tsx`
2. Restart dev server: `npm run dev`
3. Clear `.next` folder: `rm -rf .next && npm run dev`

---

## 📊 PROGRESS TRACKING

Create checklist:

```markdown
## Migration Progress

### Phase 1: Foundation
- [ ] Tailwind v3 locked
- [ ] Project 1 CSS converted to v3
- [ ] CSS variables merged
- [ ] Build succeeds

### Phase 2: Layout
- [ ] Navbar replaced
- [ ] Footer replaced
- [ ] FloatingContact added
- [ ] Root layout updated

### Phase 3: Marketing Pages
- [ ] Homepage migrated
- [ ] About page migrated
- [ ] Services index migrated
- [ ] Industries migrated

### Phase 4: New Pages
- [ ] Contact page added
- [ ] Audit pages added
- [ ] Architecture pages added
- [ ] Sitemap updated

### Phase 5: Blog/Case Studies
- [ ] Blog list UI updated
- [ ] Blog detail UI updated
- [ ] Case study list UI updated
- [ ] Case study detail UI updated

### Phase 6: Testing
- [ ] Type-check passes
- [ ] Build succeeds
- [ ] All routes manually tested
- [ ] Admin functionality tested
- [ ] Responsive design tested

### Phase 7: Cleanup
- [ ] old-project1/ removed
- [ ] Unused deps removed
- [ ] Final commit created
```

---

## 📞 NEED HELP?

**If stuck, check detailed documentation:**

1. **MIGRATION_ANALYSIS.md** - Comprehensive 17-section guide
2. **DEPENDENCY_CONFLICTS.md** - Dependency issues
3. **CSS_TAILWIND_CONFLICTS.md** - CSS/Tailwind details
4. **ROUTE_CONFLICTS.md** - Route collision details

**Common questions:**
- "Which files to keep?" → See ROUTE_CONFLICTS.md
- "How to merge CSS?" → See CSS_TAILWIND_CONFLICTS.md Section 10
- "What dependencies to install?" → See DEPENDENCY_CONFLICTS.md

---

## ⏱️ TIME ESTIMATES RECAP

| Phase | Time |
|-------|------|
| 1. Foundation (Tailwind + CSS) | 3-4 hours |
| 2. Layout Components | 2-3 hours |
| 3. Marketing Pages | 4-5 hours |
| 4. New Pages | 2 hours |
| 5. Blog/Case Study UI | 5-6 hours |
| 6. Testing | 4-5 hours |
| 7. Cleanup | 2 hours |
| **TOTAL** | **22-30 hours** (3-4 days) |

---

**🎉 Good luck with the migration!**

Remember: **Commit often, test frequently, and don't skip Phase 1 (Tailwind fix).**
