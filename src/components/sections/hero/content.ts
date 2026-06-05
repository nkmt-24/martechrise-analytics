/**
 * Hero section static content.
 * Pure data file — no React, no framework deps (icons are component refs, not JSX).
 * Update copy here; layout/animation lives in HeroSection.tsx.
 */
import { BarChart2, ShieldCheck, Lock } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface HeroCta {
  text:    string
  href:    string
  variant: 'primary' | 'outline'
}

export interface FloatingIndicator {
  title:    string
  subtitle: string
  icon:     LucideIcon
  color:    'emerald' | 'indigo'
}

export interface HeroContent {
  badge: {
    icon: LucideIcon
    text: string
  }
  title: {
    main:      string
    highlight: string
  }
  subtitle: string
  ctas: HeroCta[]
  dashboardImage:     string
  dashboardImageAlt:  string
  floatingIndicators: FloatingIndicator[]
}

export const heroContent: HeroContent = {
  badge: {
    icon: BarChart2,
    text: 'MarTechRise — Empowering Businesses',
  },
  title: {
    main:      'Fix Broken Tracking &',
    highlight: 'Unlock Accurate Data',
  },
  subtitle:
    'We help brands eliminate data loss, fix tracking issues, and improve attribution so you can scale your marketing campaigns with confidence.',
  ctas: [
    {
      text:    'Book Free Analytics Audit',
      href:    '/analytics-audit',
      variant: 'primary',
    },
  // Uncomment when /services is built:
    // { text: 'View Solutions', href: '/services', variant: 'outline' },
  ],
  dashboardImage:    '/assets/images/dashboard.jpg',
  dashboardImageAlt: 'Analytics dashboard showing tracking data and attribution metrics',
  floatingIndicators: [
    {
      title:    '100% Validated',
      subtitle: 'Data Pipeline',
      icon:     ShieldCheck,
      color:    'emerald',
    },
    {
      title:    'Compliance Ready',
      subtitle: 'GDPR / CCPA',
      icon:     Lock,
      color:    'indigo',
    },
  ],
}
