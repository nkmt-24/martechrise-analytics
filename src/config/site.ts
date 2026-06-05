/**
 * SITE CONFIGURATION — MarTechRise
 * martechrise.ai
 *
 * Last updated: May 2026
 *
 * TODO items are marked with ⚠️ — fill these before going live.
 */

export const siteConfig = {
  // ==================== BASIC INFO ====================
  name: process.env.NEXT_PUBLIC_APP_NAME || 'MarTechRise',
  tagline:
    process.env.NEXT_PUBLIC_APP_TAGLINE ||
    'Technical analytics architects for the modern enterprise.',
  description:
    'We fix broken tracking, eliminate data loss, and build clean analytics pipelines ' +
    'so marketing teams can scale with confidence. GA4, Adobe Analytics, ' +
    'server-side tracking, and Meta CAPI specialists.',
  url: process.env.NEXT_PUBLIC_APP_URL || 'https://www.martechrise.ai',

  // ==================== CONTACT ====================
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || 'hello@martechrise.ai',
  phone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91-6382915027',
  address:
    process.env.NEXT_PUBLIC_COMPANY_ADDRESS || 'Chennai, Tamil Nadu, India',

  // ==================== SOCIAL MEDIA ====================
  // ⚠️ Replace placeholder URLs with your real handles before launch.
  social: {
    twitter: process.env.NEXT_PUBLIC_TWITTER_HANDLE || '@martechrise',       // ⚠️ confirm handle
    linkedin:
      process.env.NEXT_PUBLIC_LINKEDIN_URL ||
      'https://linkedin.com/company/martechrise',                             // ⚠️ confirm slug
    github: process.env.NEXT_PUBLIC_GITHUB_URL || '',                         // ⚠️ add if public org exists
    facebook: process.env.NEXT_PUBLIC_FACEBOOK_URL || '',                     // leave blank if unused
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '',                   // leave blank if unused
    youtube: process.env.NEXT_PUBLIC_YOUTUBE_URL || '',                       // ⚠️ add when channel is ready
  },

  // ==================== SEO ====================
  // Primary market: USA-based enterprise clients (even though HQ is Chennai).
  // Title template follows: "Page Name | MarTechRise"
  seo: {
    defaultTitle:
      'MarTechRise | Analytics Tracking & Implementation Experts',
    titleTemplate: '%s | MarTechRise',
    defaultDescription:
      'Fix broken tracking, eliminate data loss, and build accurate analytics pipelines. ' +
      'GA4, Adobe Analytics, server-side GTM, and Meta CAPI specialists for modern enterprises.',
    defaultImage: '/og-image.jpg',                                            // 1200×630px
    twitterHandle: '@martechrise',                                            // ⚠️ confirm handle
    // hreflang: targeting en-US primary. Add en-IN if dual market is confirmed.
    locale: 'en_US',
    alternateLocale: '',                                                       // ⚠️ set 'en_IN' if dual market
  },

  // ==================== ORGANIZATION (Schema.org) ====================
  // Used for structured data / rich results in Google Search.
  // ⚠️ legalName and foundingDate must be confirmed before launch.
  organization: {
    name: 'MarTechRise',
    legalName: 'MarTechRise Intelligence Private Limited',
    foundingDate: '2026-01',
    logo: '/assets/logo.png',
    description:
      'Analytics tracking and implementation specialists. We design and build ' +
      'server-side tracking infrastructure, GA4 and Adobe Analytics setups, ' +
      'and clean data pipelines for enterprise marketing teams.',
    type: 'Organization' as const,
    // ⚠️ If targeting US clients, you may want a US mailing address here.
    // For now using registered HQ.
    address: {
      streetAddress: '',                                                        // ⚠️ add street if needed
      addressLocality: 'Chennai',
      addressRegion: 'Tamil Nadu',
      postalCode: '',                                                           // ⚠️ add postal code
      addressCountry: 'IN',                                                    // ⚠️ change to 'US' if US entity
    },
    // Platforms MarTechRise is known to work with — used in schema sameAs.
    sameAs: [
      'https://linkedin.com/company/martechrise',                             // ⚠️ confirm URL
      'https://twitter.com/martechrise',                                      // ⚠️ confirm URL
    ],
  },

  // ==================== BLOG / RESOURCES ====================
  blog: {
    postsPerPage: Number(process.env.NEXT_PUBLIC_BLOG_PER_PAGE) || 9,
    excerptLength: Number(process.env.NEXT_PUBLIC_BLOG_EXCERPT_LENGTH) || 160,
    enableComments: false,
    enableNewsletter: false,                                                   // ⚠️ enable when tool is chosen
  },

  // ==================== NAVIGATION ====================
  // Matches the Phase 1 navbar structure from the architecture plan.
  nav: {
    main: [
      { label: 'Services', href: '/services', hasDropdown: true },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Analytics Audit', href: '/analytics-audit' },
      { label: 'Resources', href: '/resources', hasDropdown: true },
      { label: 'About', href: '/about' },
    ],
    cta: { label: 'Book Free Audit', href: '/analytics-audit#book' },
    // Phase 2: add Platforms dropdown once /platforms/* pages are built.
  },

  // ==================== SERVICES ====================
  // Canonical service slugs — match your /services/* page URLs exactly.
  services: [
    {
      slug: 'tracking-architecture',
      title: 'Tracking Architecture & Solution Design',
      href: '/services/tracking-architecture',
    },
    {
      slug: 'analytics-implementation',
      title: 'Analytics Implementation',
      href: '/services/analytics-implementation',
    },
    {
      slug: 'conversion-event-tracking',
      title: 'Conversion & Event Tracking',
      href: '/services/conversion-event-tracking',
    },
    {
      slug: 'server-side-tracking',
      title: 'Server-Side Tracking',
      href: '/services/server-side-tracking',
    },
    {
      slug: 'qa-data-validation',
      title: 'QA & Data Validation',
      href: '/services/qa-data-validation',
    },
    {
      slug: 'analytics-reporting-attribution',
      title: 'Analytics Reporting & Attribution',
      href: '/services/analytics-reporting-attribution',
    },
  ],

  // ==================== PLATFORMS (Phase 2) ====================
  // Uncomment and add to nav when /platforms/* pages are ready.
  // platforms: [
  //   { slug: 'ga4',                  title: 'GA4',                  href: '/platforms/ga4' },
  //   { slug: 'google-tag-manager',   title: 'Google Tag Manager',   href: '/platforms/google-tag-manager' },
  //   { slug: 'server-side-gtm',      title: 'Server-Side GTM',      href: '/platforms/server-side-gtm' },
  //   { slug: 'adobe-analytics',      title: 'Adobe Analytics',      href: '/platforms/adobe-analytics' },
  //   { slug: 'meta-conversions-api', title: 'Meta Conversions API', href: '/platforms/meta-conversions-api' },
  //   { slug: 'tealium',              title: 'Tealium',              href: '/platforms/tealium' },
  // ],

  // ==================== FEATURES ====================
  features: {
    blog: true,
    resources: true,
    projects: false,
    caseStudies: true,
    services: true,
    testimonials: true,
    newsletter: false,                                                         // ⚠️ enable + add provider key
    analytics: false,                                                          // ⚠️ enable after GA4 ID is ready
    contactForm: true,
    platformPages: false,                                                      // Phase 2 — enable when /platforms/* are built
    industryPages: false,                                                      // Phase 3
  },

  // ==================== ANALYTICS ====================
  // ⚠️ Add GA4 measurement ID when tracking is configured.
  // Your own tracking setup should be server-side — it's a live demo of your service.
  analytics: {
    ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID || '',                  // ⚠️ e.g. 'G-XXXXXXXXXX'
    gtmContainerId: process.env.NEXT_PUBLIC_GTM_ID || '',                    // ⚠️ e.g. 'GTM-XXXXXXX'
    serverSideEndpoint: process.env.NEXT_PUBLIC_SS_ENDPOINT || '',           // ⚠️ your sGTM endpoint
  },

  // ==================== LEGAL ====================
  legal: {
    privacyPolicy: '/privacy-policy',
    termsOfService: '/terms',
    cookiePolicy: '/privacy-policy#cookies',
    // GDPR/CCPA consent banner: required — MarTechRise handles tracking data.
    // ⚠️ Implement a consent management platform before launch.
    consentBannerEnabled: true,
  },
};

export type SiteConfig = typeof siteConfig;
