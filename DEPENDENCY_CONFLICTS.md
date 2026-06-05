# DEPENDENCY CONFLICT REPORT

**Generated:** 2026-05-20  
**Comparison:** Project 2 (Main) vs Project 1 (New UI - old-project1)

---

## SUMMARY

**Status:** ✅ Mostly Compatible (1 Critical Conflict)

**Critical Issues:** 1  
**Warnings:** 2  
**Safe to Merge:** All other dependencies

---

## CRITICAL CONFLICTS

### 🔴 #1: Tailwind CSS Major Version Mismatch

| Package | Project 2 Version | Project 1 Version | Status |
|---------|------------------|-------------------|--------|
| `tailwindcss` | 3.3.0 | 4.0 | 🔴 **BREAKING** |
| `@tailwindcss/postcss` | Not installed | ^4 | 🔴 **NEW DEP** |

**Impact:** BLOCKS MIGRATION

**Details:**
- Tailwind v4 is a complete rewrite with new syntax
- v4 uses `@import "tailwindcss"` instead of `@tailwind base/components/utilities`
- v4 uses `@theme inline` syntax instead of `@layer` directives
- CSS class names may have changed
- Configuration format is different

**Resolution Required:**
```bash
# Option A: Downgrade Project 1 to Tailwind v3 (RECOMMENDED)
# - Rewrite old-project1 CSS to v3 syntax
# - Use Project 2's tailwind.config.ts as base
# - Effort: 2-3 hours

# Option B: Upgrade Project 2 to Tailwind v4 (HIGH RISK)
# - Rewrite all existing CSS to v4 syntax
# - Risk breaking admin/blog/CMS UI
# - Effort: 8-12 hours
# - NOT RECOMMENDED
```

**Action:** Choose Option A - downgrade Project 1 components to Tailwind v3

---

## WARNINGS

### ⚠️ #1: lucide-react Major Version Difference

| Package | Project 2 Version | Project 1 Version | Difference |
|---------|------------------|-------------------|------------|
| `lucide-react` | 1.16.0 | 0.575.0 | Major version jump |

**Impact:** MEDIUM - May have API changes

**Resolution:**
- Keep Project 2's version (1.16.0) - it's newer and more stable
- Update icon imports in migrated Project 1 components if needed
- Test all icon usages after migration

**Potential Breaking Changes:**
```tsx
// If v0.x used different import patterns:
// Old (v0.x): import { ChevronDown } from 'lucide-react'
// New (v1.x): import { ChevronDown } from 'lucide-react' // Usually same

// Check icon prop names:
// Old: <Icon size={24} strokeWidth={2} />
// New: <Icon size={24} strokeWidth={2} /> // Usually backward compatible
```

**Action:** Keep v1.16.0, test icons in migrated components

---

### ⚠️ #2: Framer Motion Minor Version Difference

| Package | Project 2 Version | Project 1 Version | Difference |
|---------|------------------|-------------------|------------|
| `framer-motion` | 12.38.0 | 12.34.3 | Patch version |

**Impact:** LOW - Patch versions are backward compatible

**Resolution:**
- Keep Project 2's version (12.38.0) - it's newer with bug fixes
- No changes needed

**Action:** No action required

---

## SAFE TO MERGE (No Conflicts)

### ✅ Core Framework Dependencies

| Package | Project 2 | Project 1 | Status |
|---------|-----------|-----------|--------|
| `next` | 16.1.6 | 16.1.6 | ✅ IDENTICAL |
| `react` | 19.2.4 | 19.2.3 | ✅ COMPATIBLE (patch) |
| `react-dom` | 19.2.4 | 19.2.3 | ✅ COMPATIBLE (patch) |
| `typescript` | ^5 | ^5 | ✅ IDENTICAL |

### ✅ Animation Libraries

| Package | Project 2 | Project 1 | Status |
|---------|-----------|-----------|--------|
| `gsap` | 3.15.0 | 3.14.2 | ✅ Keep Project 2 version |
| `@gsap/react` | Not installed | ^2.1.2 | ⚠️ May need to add |
| `framer-motion` | 12.38.0 | 12.34.3 | ✅ Keep Project 2 version |

**Note:** Check if `@gsap/react` is needed. Project 2 may be using GSAP without the React wrapper.

---

## PROJECT 2 EXCLUSIVE DEPENDENCIES (Keep All)

These dependencies are in Project 2 only and support backend functionality. **DO NOT REMOVE.**

### Database & Backend
- `mongoose` (8.1.1) - MongoDB ORM
- `bcryptjs` (2.4.3) - Password hashing
- `next-auth` (5.0.0-beta.31) - Authentication

### CMS & Content
- `@tiptap/react` (3.23.1) - Rich text editor
- `@tiptap/starter-kit` (3.23.1)
- `@tiptap/extension-image` (3.23.1)
- `@tiptap/extension-link` (3.23.1)
- `@tiptap/extension-placeholder` (3.23.1)
- `@tiptap/pm` (3.23.1)

### Media & File Handling
- `cloudinary` (2.0.1) - Image CDN
- `next-cloudinary` (6.17.5) - Next.js Cloudinary integration

### UI & Interactions
- `@dnd-kit/core` (6.3.1) - Drag & drop
- `@dnd-kit/sortable` (10.0.0)
- `@dnd-kit/utilities` (3.2.2)
- `react-hook-form` (7.50.1) - Form management
- `@hookform/resolvers` (3.3.4)
- `react-hot-toast` (2.6.0) - Toast notifications

### Utilities
- `zod` (3.25.76) - Schema validation
- `clsx` (2.1.1) - Class name utility
- `tailwind-merge` (2.6.1) - Tailwind class merger
- `date-fns` (4.1.0) - Date utilities
- `uuid` (14.0.0) - UUID generation
- `cheerio` (1.2.0) - HTML parsing
- `isomorphic-dompurify` (3.12.0) - XSS sanitization
- `dotenv` (17.3.1) - Environment variables

### Rate Limiting & Redis
- `@upstash/ratelimit` (2.0.8)
- `@upstash/redis` (1.38.0)

### UI Enhancements
- `geist` (1.7.0) - Geist font
- `nextjs-toploader` (3.9.17) - Loading bar
- `tailwindcss-animate` (1.0.7) - Animation utilities

---

## PROJECT 1 EXCLUSIVE DEPENDENCIES (Evaluate)

These are ONLY in Project 1. Most are not needed since Project 2 already has equivalents.

| Package | Version | Needed? | Reason |
|---------|---------|---------|--------|
| `@gsap/react` | ^2.1.2 | ❓ Maybe | Check if Project 2 uses GSAP differently |
| `@tailwindcss/postcss` | ^4 | ❌ NO | Only for Tailwind v4 |

**Action:** 
- If Project 2 uses GSAP without `@gsap/react`, we may need to add it OR refactor Project 1 components to use GSAP directly
- Do NOT install `@tailwindcss/postcss` (Tailwind v4 dependency)

---

## DEV DEPENDENCIES COMPARISON

### Project 2 Dev Dependencies

```json
{
  "@types/bcryptjs": "^2.4.6",
  "@types/node": "^20",
  "@types/react": "^18",
  "@types/react-dom": "^18",
  "@types/uuid": "^10.0.0",
  "autoprefixer": "^10.0.1",
  "eslint": "^9",
  "eslint-config-next": "^16.1.6",
  "postcss": "^8",
  "tailwindcss": "^3.3.0",
  "typescript": "^5"
}
```

### Project 1 Dev Dependencies

```json
{
  "@tailwindcss/postcss": "^4",  // ← REMOVE (v4 only)
  "@types/node": "^20",
  "@types/react": "^19",
  "@types/react-dom": "^19",
  "eslint": "^9",
  "eslint-config-next": "16.1.6",
  "tailwindcss": "^4",  // ← REMOVE (downgrade to v3)
  "typescript": "^5"
}
```

**Differences:**
- Project 1 has `@types/react` v19, Project 2 has v18
  - **Action:** Keep Project 2's v18 (matches React 19 runtime, types lag behind)
- Project 1 uses `@tailwindcss/postcss` - **REMOVE** (not needed for v3)

---

## FINAL MERGED package.json RECOMMENDATIONS

### Production Dependencies

**Keep ALL Project 2 dependencies** (no removals)

**Potentially ADD from Project 1:**
```json
{
  "@gsap/react": "^2.1.2"  // Only if needed for GSAP components
}
```

### Dev Dependencies

**Keep ALL Project 2 dev dependencies**

**DO NOT ADD from Project 1:**
- ❌ `@tailwindcss/postcss` (Tailwind v4 only)
- ❌ `tailwindcss@^4` (using v3 instead)

---

## INSTALLATION COMMANDS

After merging package.json:

```bash
# 1. Lock Tailwind to v3
npm install tailwindcss@3.3.0 --save-exact

# 2. Install any new dependencies (if @gsap/react is needed)
npm install @gsap/react

# 3. Clean install to resolve any conflicts
rm -rf node_modules package-lock.json
npm install

# 4. Verify no peer dependency warnings
npm list
```

---

## BUNDLE SIZE IMPACT

**Estimated bundle size changes:**

| Category | Before (Project 2) | After Merge | Change |
|----------|-------------------|-------------|--------|
| **Core** | ~300 KB | ~300 KB | No change |
| **GSAP** | ~50 KB | ~50 KB | No change |
| **Framer Motion** | ~60 KB | ~60 KB | No change |
| **New Components** | N/A | +30-50 KB | New UI from Project 1 |
| **TOTAL ESTIMATED** | ~800 KB | ~830-850 KB | +30-50 KB |

**Note:** Actual impact depends on:
- Code splitting effectiveness
- Tree shaking optimization
- Shared component reuse

**Recommendation:** Run bundle analyzer after migration:
```bash
npm install --save-dev @next/bundle-analyzer
# Configure in next.config.mjs
# npm run build && npm run analyze
```

---

## SECURITY AUDIT

Run after dependency merge:

```bash
npm audit

# Fix vulnerabilities
npm audit fix

# Check for outdated packages
npm outdated
```

**Expected vulnerabilities:** 0 (both projects use modern packages)

**If vulnerabilities found:**
1. Review severity (Critical > High > Medium > Low)
2. Update affected packages
3. Test application after updates
4. Document any breaking changes

---

## COMPATIBILITY MATRIX

| Dependency | Project 2 | Project 1 | Merged | Compatible? |
|------------|-----------|-----------|--------|-------------|
| Next.js | 16.1.6 | 16.1.6 | 16.1.6 | ✅ YES |
| React | 19.2.4 | 19.2.3 | 19.2.4 | ✅ YES |
| TypeScript | ^5 | ^5 | ^5 | ✅ YES |
| **Tailwind** | **3.3.0** | **4.0** | **3.3.0** | 🔴 **REQUIRES DOWNGRADE** |
| GSAP | 3.15.0 | 3.14.2 | 3.15.0 | ✅ YES |
| Framer Motion | 12.38.0 | 12.34.3 | 12.38.0 | ✅ YES |
| lucide-react | 1.16.0 | 0.575.0 | 1.16.0 | ⚠️ TEST ICONS |

---

## ACTION ITEMS CHECKLIST

Before starting migration:

- [ ] Lock Tailwind CSS to v3.3.0 in Project 2
- [ ] Prepare to rewrite Project 1's `globals.css` from v4 to v3 syntax
- [ ] Audit GSAP usage in both projects (direct import vs `@gsap/react`)
- [ ] Test lucide-react icons in Project 1 components with v1.16.0
- [ ] Document current bundle size baseline
- [ ] Run `npm audit` on Project 2
- [ ] Create dependency freeze file: `npm list > dependencies-pre-migration.txt`

During migration:

- [ ] Install any missing dependencies incrementally (not all at once)
- [ ] Run `npm install` after each major change
- [ ] Test build after dependency changes
- [ ] Monitor bundle size changes

After migration:

- [ ] Run `npm audit` and fix vulnerabilities
- [ ] Remove `old-project1/` directory
- [ ] Clean up unused dependencies with `npx depcheck`
- [ ] Run bundle analyzer
- [ ] Update `package-lock.json` in git

---

## ESTIMATED IMPACT

**Risk Level:** 🟡 MEDIUM (manageable with careful execution)

**Time to Resolve Conflicts:** 2-3 hours (mostly Tailwind CSS downgrade)

**Blocker:** Tailwind v3/v4 incompatibility - must be resolved before any UI merge

**Recommendation:** Proceed with Option A (downgrade Project 1 to Tailwind v3)

---

**END OF DEPENDENCY CONFLICT REPORT**
