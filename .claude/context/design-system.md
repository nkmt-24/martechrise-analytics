# Design System

## How the token system works

All design values are CSS variables in `src/app/globals.css`.
Tailwind classes reference those variables via `tailwind.config.ts`.
Changing a CSS variable updates every Tailwind class that references it — no component edits needed.

---

## Color Architecture

### Semantic colors (shadcn/ui compatible)
Use these everywhere. Never use raw Tailwind color scales (gray-900, blue-600) in new components.

| Token | Tailwind class | Purpose |
|---|---|---|
| `--background` | `bg-background` | Page backgrounds |
| `--foreground` | `text-foreground` | Body text |
| `--primary` | `bg-primary` | Primary actions |
| `--secondary` | `bg-secondary` | Subtle fills, hover states |
| `--muted` | `bg-muted` | Disabled, inactive |
| `--muted-foreground` | `text-muted-foreground` | Captions, secondary text |
| `--border` | `border-border` | All borders |
| `--accent` | `bg-accent` | Highlight surfaces |

### Brand palette
| CSS Variable | Tailwind class | Use case |
|---|---|---|
| `--brand-orange` | `text-brand-orange` / `bg-brand-orange` | CTAs, highlights, glow |
| `--brand-pink` | `text-brand-pink` / `bg-brand-pink` | Gradient end, accents |
| `--brand-blue` | `text-brand-blue` | Links, info states |
| `--brand-cyan` | `text-brand-cyan` | Tech/data accent |

**Changing all brand colors:** Update `--brand-orange` and `--brand-pink` in globals.css `:root`. Every gradient, glow, and icon background updates automatically.

### Gradient utilities
```css
.text-gradient-brand  /* gradient text — headings, hero */
.bg-gradient-brand    /* gradient fill — buttons, badges */
```

---

## Typography

```
font-sans    → Inter    (body, UI labels, small text)
font-display → Outfit   (headings, brand name, navigation labels)
font-mono    → system   (eyebrow labels, code blocks, stats)
```

**Rules:**
- All H1–H3 headings: `font-display font-bold`
- Body text: `font-sans` (default — no class needed)
- Eyebrow labels: `font-mono text-xs uppercase tracking-widest`
- Navigation brand name: `font-display font-semibold`

---

## Shadows

| Class | Variable | Use case |
|---|---|---|
| `shadow-card-soft` | `--shadow-card-soft` | Navbar pill, cards, dropdowns |
| `shadow-glow-brand` | `--shadow-glow-brand` | CTA buttons, active highlights |
| `shadow-glow-sm` | `--shadow-glow-sm` | Small glowing accents |
| `shadow-elevated` | `--shadow-elevated` | Modals, popovers |

---

## Glassmorphism

Use the `.glass` utility class or compose manually:
```css
/* .glass applies: */
background: var(--glass-bg);        /* bg-background/72 */
border: 1px solid var(--glass-border);  /* border-border/60 */
backdrop-filter: blur(20px);
```

Used on: Navbar pill, dropdown panels, hero glass cards.

---

## Motion Tokens

Import from `src/lib/motion.ts` — never write raw `cubic-bezier` values inline.

```typescript
import { transitions, easings, fadeUp, staggerContainer } from '@/lib/motion'
```

| Token | Value | Use case |
|---|---|---|
| `easings.spring` | `[0.22, 1, 0.36, 1]` | All entrance animations |
| `easings.outExpo` | `[0.16, 1, 0.3, 1]` | Dropdowns, fast reveals |
| `transitions.fast` | 0.18s spring | Hover, dropdowns |
| `transitions.base` | 0.35s spring | Standard reveals |
| `transitions.slow` | 0.55s spring | Section entrances |
| `transitions.slower` | 0.8s spring | Hero, navbar entrance |

**Rule:** Always check `useReducedMotion()` before animating. Pass `undefined` as `variants` when `shouldReduce` is true.

---

## Z-index Scale

| CSS Variable | Value | Use case |
|---|---|---|
| `--z-raised` | 10 | Cards above content |
| `--z-dropdown` | 100 | Dropdown panels |
| `--z-sticky` | 200 | Sticky elements |
| `--z-overlay` | 300 | Backdrop overlays |
| `--z-modal` | 400 | Modal dialogs |
| `--z-toast` | 500 | Toast notifications |
| `--z-navbar` | 1000 | Navigation |

In Tailwind: `z-[var(--z-navbar)]` or `z-[1000]`.

---

## Radius Scale

| Variable | Tailwind | Value |
|---|---|---|
| `--radius` | `rounded-md` | 0.5rem (default) |
| `--radius-xl` | `rounded-xl` | 1rem |
| `--radius-2xl` | `rounded-2xl` | 1.5rem |
| `--radius-3xl` | `rounded-3xl` | 2rem |
| `--radius-full` | `rounded-full` | Pills, circles |

---

## Dark Mode

Opt-in via `class="dark"` on `<html>`. Existing pages are unaffected — they use explicit Tailwind color names (gray-900, white) which don't respond to the dark class. Only new components using semantic tokens (bg-background, text-foreground) will adapt.

---

## Anti-patterns

```tsx
// ❌ Never hardcode colors in new components
<div className="bg-blue-600 text-white">

// ✅ Use semantic tokens
<div className="bg-primary text-primary-foreground">

// ❌ Never hardcode brand colors as Tailwind literals
<div className="text-orange-500">

// ✅ Use brand tokens
<div className="text-brand-orange">

// ❌ Never use arbitrary easing values inline
<motion.div transition={{ ease: [0.22, 1, 0.36, 1] }}>

// ✅ Import from motion.ts
import { transitions } from '@/lib/motion'
<motion.div transition={transitions.base}>
```
