# Known Issues

## site.ts — Incorrect legalName
- **File:** `src/config/site.ts` line 63
- **Current value:** `'MarTechRise Analytics Pvt. Ltd.'`
- **Correct value:** `'MarTechRise Intelligence Private Limited'`
- **Impact:** Flows into OrganizationSchema legalName — affects structured data accuracy

## site.ts — Incorrect foundingDate
- **File:** `src/config/site.ts` line 64
- **Current value:** `'2023'`
- **Correct value:** `'2026-01'`
- **Impact:** Flows into OrganizationSchema foundingDate

## site.ts — Tagline mismatch
- **File:** `src/config/site.ts` line 14
- **Current value:** `'Technical analytics architects for the modern enterprise.'`
- **Canonical value from brand doc:** `'Data-driven analytics solutions for modern businesses'`
- **Impact:** Minor — tagline used in OG tags and some page copy

## og-image.jpg — Placeholder
- **File:** `/public/og-image.jpg`
- **Status:** Placeholder — needs real 1200×630px branded image before launch
- **Impact:** All OG share previews will show generic image

## logo.png / favicon.ico — Placeholder
- **File:** `/public/logo.png`, `/public/favicon.ico`
- **Status:** Need to be replaced with real brand assets before launch

## llms.txt — Not Created Yet
- **Location:** `/public/llms.txt`
- **Status:** Not yet created — required for AIO (AI indexability)
- **Action:** Create manually using template in `context/seo.md`

## Social handles — Unconfirmed
- **File:** `src/config/site.ts` lines 31–38
- **Status:** Twitter handle (@martechrise) and LinkedIn URL marked with ⚠️ — confirm real handles before launch

## OrganizationSchema on existing pages — Unverified
- **Pages:** /case-studies, /resources/blog
- **Status:** Unknown if schema uses correct legalName/foundingDate
- **Action:** Read existing schema components and verify
