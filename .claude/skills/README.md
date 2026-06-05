# Skills Index

Load the relevant SKILL.md before starting the listed task type. Each skill is a focused instruction set — load only what you need.

| Skill Folder | When to Use |
|---|---|
| `nextjs-page/` | Creating any new App Router page file — covers metadata export, layout usage, server component defaults, and `generateStaticParams` for dynamic routes |
| `seo-metadata/` | Adding or updating metadata on any page — covers `generatePageMetadata()` usage, title format rule, description length, canonical pattern, and required OG fields |
| `schema-markup/` | Adding or fixing JSON-LD schema — covers which schema type belongs on which page, injection pattern via `<script>` in `<head>`, FAQPage format, and ServiceSchema required fields |
| `react-component/` | Building any new component — covers file naming, prop typing with TypeScript, default export rule, no inline styles rule, and Tailwind class ordering |
| `tailwind-styling/` | Styling or updating UI — covers design token conventions, spacing scale, color class usage, and responsive breakpoint patterns |
| `frontend-design/` | Building any page section or component that needs a strong visual identity — covers aesthetic direction, typography pairing, layout composition, and motion moments |
| `seo-expert/` | Full SEO, AEO, and AIO review of any page — covers title/description specs, schema by page type, AEO content structure, internal linking, and the pre-launch SEO checklist |
| `gsap-animation/` | Adding GSAP scroll-triggered animations — scroll reveals, counter animations, stagger sequences. Use for complex timelines or stats counters |
| `framer-motion/` | Adding Framer Motion animations — component reveals, hover interactions, AnimatePresence dropdowns, stagger grids. Use for React component-level animation |

## How to Use

1. Identify the task type
2. Load the matching `SKILL.md` file into context
3. Follow the Pattern/Template in that file
4. Do not load skills you don't need — keep context lean

## Adding New Skills

To add a skill, create a new folder inside `.claude/skills/` and add a `SKILL.md` file following this structure:

```
# [Skill Name]

## Purpose
One sentence on what this skill covers.

## Rules
Bulleted list of constraints and requirements.

## Pattern / Template
Code or format template to follow.

## Example
Working example.
```
