import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  /* Opt-in dark mode via class on <html> */
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: { "2xl": "1400px" },
    },
    extend: {
      /* ── Typography ──
         font-sans  → Inter   (body text)
         font-display → Outfit (headings, brand name, labels)
         font-mono  → system monospace (code, eyebrow labels)
      ── */
      fontFamily: {
        sans: ["var(--font-geist-sans)", "var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
        caveat: ["var(--font-caveat)", "cursive"],
      },

      /* ── Colors ──
         All reference CSS variables — change the variable, every class updates.
      ── */
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        /* Brand palette — change --brand-* in globals.css to update all */
        brand: {
          orange: "hsl(var(--brand-orange))",
          pink: "hsl(var(--brand-pink))",
          blue: "hsl(var(--brand-blue))",
          cyan: "hsl(var(--brand-cyan))",
        },
      },


      /* ── Shadows ──
         shadow-card-soft: navbar pill, cards, dropdowns
         shadow-glow-brand: CTA buttons, active states
         shadow-elevated: modals, overlays
      ── */
      boxShadow: {
        "card-soft": "var(--shadow-card-soft)",
        "glow-brand": "var(--shadow-glow-brand)",
        "glow-sm": "var(--shadow-glow-sm)",
        "elevated": "var(--shadow-elevated)",
      },

      /* ── Motion Easings ── */
      transitionTimingFunction: {
        spring: "var(--ease-spring)",
        "out-expo": "var(--ease-out-expo)",
        "in-out": "var(--ease-in-out)",
      },

      /* ── Motion Durations ── */
      transitionDuration: {
        instant: "100ms",
        fast: "150ms",
        base: "300ms",
        slow: "500ms",
        slower: "800ms",
      },

      /* ── Keyframes ── */
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-up": {
          from: { opacity: "0", transform: "translateY(16px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        "spin-slow": {
          from: { transform: "rotate(0deg)" },
          to: { transform: "rotate(360deg)" },
        },
        "marquee": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(calc(-100% - var(--gap)))" },
        },
      },

      /* ── Animations ── */
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in": "fade-in 0.4s var(--ease-spring) both",
        "fade-up": "fade-up 0.5s var(--ease-spring) both",
        "spin-slow": "spin-slow 18s linear infinite",
        "marquee": "marquee 40s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
