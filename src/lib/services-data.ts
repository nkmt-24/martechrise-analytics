export type ServiceData = {
  slug: string
  badge: string
  meta: {
    title: string
    description: string
  }
  hero: {
    headline: string
    subheadline: string
    ctaLabel: string
    ctaHref: string
    statOne: { value: string; label: string }
    statTwo: { value: string; label: string }
    statThree: { value: string; label: string }
  }
  problem: {
    heading: string
    problems: Array<{ icon: string; title: string; description: string }>
  }
  whatIs: {
    heading: string
    ctaHeading: string
    ctaImage: string
    features: Array<{ title: string; description: string }>
  }
  process: {
    heading: string
    steps: Array<{ number: string; title: string; description: string }>
  }
  deliverables: {
    heading: string
    items: Array<{ title: string; description: string }>
  }
  platforms: {
    heading: string
    platforms: string[]
  }
  faq: {
    heading: string
    faqs: Array<{ question: string; answer: string }>
  }
  whyChooseUs: { badge: string; heading: string; subheading: string; reasons: Array<{ icon: string; title: string; description: string }> };
  cta: {
    heading: string
    subheading: string
    primaryCta: { label: string; href: string }
    secondaryCta: { label: string; href: string }
  }
}

export const servicesData: Record<string, ServiceData> = {

  // ─── SERVICE 1 ─────────────────────────────────────────────────────────────
  'tracking-architecture': {
    slug: 'tracking-architecture',
    badge: 'Tracking Architecture',
    meta: {
      title: 'Tracking Architecture & Solution Design',
      description:
        'We design scalable tracking architectures before any implementation begins. Measurement planning, KPI definition, data layer design, and Solution Design Documents for enterprise teams.',
    },
    hero: {
      headline: 'Build the Right Tracking Foundation Before You Implement Anything',
      subheadline:
        'Poor tracking architecture causes broken data, wasted implementation effort, and analytics you cannot trust. We design the blueprint first — so everything built on top of it works.',
      ctaLabel: 'Get a Free Architecture Review',
      ctaHref: '/analytics-audit',
      statOne: { value: 'SDD', label: 'Solution Design Document delivered with every project' },
      statTwo: { value: '100%', label: 'Data layer designed before a single tag fires' },
      statThree: { value: 'Zero', label: 'Rework when architecture is designed correctly' },
    },
    problem: {
      heading: 'What Goes Wrong Without a Tracking Architecture',
      problems: [
        {
          icon: 'TriangleAlert',
          title: 'No measurement plan',
          description: 'Teams implement tracking without defining what they actually need to measure or why.',
        },
        {
          icon: 'GitMerge',
          title: 'Inconsistent data layer',
          description: 'Different teams push different data structures, causing downstream data quality failures.',
        },
        {
          icon: 'TrendingDown',
          title: 'Tracking that cannot scale',
          description: 'Quick implementations break when products, platforms, or teams grow.',
        },
        {
          icon: 'RefreshCw',
          title: 'Constant rework',
          description: 'Without a blueprint, every new tracking request requires rebuilding existing work.',
        },
      ],
    },
    whatIs: {
      heading: 'What Is Tracking Architecture & Solution Design?',
      ctaHeading: 'Get the right tracking foundation before you implement anything.',
      ctaImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
      features: [
        { title: 'Measurement Planning', description: 'Define KPIs and measurement goals before a single tag is deployed.' },
        { title: 'Data Layer Design', description: 'Build a consistent, scalable data layer structure across your entire stack.' },
        { title: 'Event Taxonomy', description: 'Map every event and property to a real business objective.' },
        { title: 'Solution Design Document', description: 'Deliver a team-wide source of truth for every tracking decision.' },
      ],
    },
    process: {
      heading: 'How We Design Your Tracking Architecture',
      steps: [
        { number: '01', title: 'Business Discovery', description: 'We map your KPIs, conversion goals, and analytics requirements to understand what needs to be measured and why.' },
        { number: '02', title: 'Data Layer Design', description: 'We design a scalable, platform-agnostic data layer structure that works across your entire tech stack.' },
        { number: '03', title: 'Measurement Planning', description: 'We create a complete event taxonomy — every event name, property, and trigger mapped to a business metric.' },
        { number: '04', title: 'SDD Delivery', description: 'We deliver a full Solution Design Document ready for implementation handoff, developer review, and QA.' },
      ],
    },
    deliverables: {
      heading: "What's Included",
      items: [
        { title: 'Solution Design Document', description: 'A complete, implementation-ready tracking specification covering all events, properties, and data flows.' },
        { title: 'Data Layer Specification', description: 'Platform-agnostic data layer schema with variable naming conventions and push event patterns.' },
        { title: 'KPI & Measurement Framework', description: 'Business KPIs mapped to specific tracking events and analytics configurations.' },
        { title: 'Event Taxonomy', description: 'Standardised event naming convention across all platforms and teams.' },
        { title: 'Implementation Roadmap', description: 'Phased delivery plan with priorities, dependencies, and estimated timelines.' },
        { title: 'Developer Handoff Package', description: 'Technical documentation ready for engineering teams to implement against.' },
      ],
    },
    platforms: {
      heading: 'Platforms We Design For',
      platforms: ['GA4', 'Google Tag Manager', 'Adobe Analytics', 'Adobe Experience Platform', 'Tealium iQ', 'Meta CAPI', 'Segment', 'BigQuery'],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      faqs: [
        { question: 'What is a Solution Design Document (SDD)?', answer: 'An SDD is a comprehensive tracking specification that documents every event, data layer variable, and measurement requirement for your analytics implementation. It serves as the single source of truth for your analytics team, developers, and any implementation partner.' },
        { question: 'Do I need tracking architecture if I already have GA4 set up?', answer: 'Yes — especially if your current setup was done without a formal plan. Most existing GA4 setups have inconsistent event naming, missing properties, and no documentation. An architecture review identifies gaps and creates a plan to fix and standardise everything.' },
        { question: 'What is a data layer and why do I need one?', answer: 'A data layer is a structured JavaScript object that sits between your website and your analytics tools. It provides a consistent, platform-agnostic way to pass data to any analytics or marketing tool without relying on scraping page elements, which breaks constantly.' },
        { question: 'How long does tracking architecture take?', answer: 'For most projects, we deliver a complete SDD within 2–3 weeks. Larger enterprise projects with multiple products or platforms may take 4–6 weeks to document fully.' },
        { question: 'Can you work with our development team directly?', answer: 'Yes. We provide a full developer handoff package and can work directly with your engineering team to review the data layer implementation and answer technical questions during the build phase.' },
      ],
    },

        whyChooseUs: {
          "badge": "WHY CHOOSE US",
          "heading": "Built for Scale, Not Just Implementation",
          "subheading": "We design architectures that support your long-term data strategy, ensuring every tag and pixel serves a clear business purpose.",
          "reasons": [
                {
                      "icon": "Network",
                      "title": "Holistic Blueprint",
                      "description": "We map your entire ecosystem before writing a single line of code."
                },
                {
                      "icon": "Settings",
                      "title": "Strategy + Execution",
                      "description": "Our designs are built to be implementable, not just theoretical."
                },
                {
                      "icon": "Sliders",
                      "title": "Data Governance",
                      "description": "Strict naming conventions and taxonomies to keep data clean."
                },
                {
                      "icon": "Puzzle",
                      "title": "Scalable Frameworks",
                      "description": "Architectures that grow seamlessly as you add new platforms."
                },
                {
                      "icon": "MessageSquare",
                      "title": "Clear Documentation",
                      "description": "Comprehensive Solution Design Documents your team can actually understand."
                },
                {
                      "icon": "Trophy",
                      "title": "Proven Methodology",
                      "description": "Tested enterprise-grade frameworks that eliminate rework."
                }
          ]
    },
    cta: {
      heading: 'Start With the Right Foundation',
      subheading: 'Get a free review of your current tracking setup and find out what needs to be fixed before implementation begins.',
      primaryCta: { label: 'Book Free Analytics Audit', href: '/analytics-audit' },
      secondaryCta: { label: 'View Case Studies', href: '/case-studies' },
    },
  },

  // ─── SERVICE 2 ─────────────────────────────────────────────────────────────
  'analytics-implementation': {
    slug: 'analytics-implementation',
    badge: 'Analytics Implementation',
    meta: {
      title: 'GA4, Adobe Analytics & Tealium Implementation',
      description:
        'Expert GA4, Adobe Analytics, and Tealium implementation for enterprise teams. Web and mobile tracking, tag management configuration, and third-party integrations done correctly.',
    },
    hero: {
      headline: 'Analytics Implementation Done Right — GA4, Adobe & Tealium',
      subheadline:
        'A misconfigured analytics platform gives you data you cannot trust. We implement GA4, Adobe Analytics, and Tealium correctly from day one — so your decisions are based on real numbers.',
      ctaLabel: 'Audit My Current Setup',
      ctaHref: '/analytics-audit',
      statOne: { value: 'GA4', label: 'Full implementation with event schema and conversion tracking' },
      statTwo: { value: 'Adobe', label: 'Analytics and Experience Platform implementation specialists' },
      statThree: { value: 'Tealium', label: 'iQ and AudienceStream implementation and configuration' },
    },
    problem: {
      heading: 'Signs Your Analytics Implementation Is Broken',
      problems: [
        {
          icon: 'BarChart2',
          title: 'Data you cannot trust',
          description: 'Numbers differ across GA4, your CRM, and Ads Manager. Nobody knows which is correct.',
        },
        {
          icon: 'Wrench',
          title: 'Incorrect event setup',
          description: 'Events fire on the wrong triggers, with missing parameters, or not at all.',
        },
        {
          icon: 'Smartphone',
          title: 'No mobile tracking',
          description: 'Web and app data are siloed. You have no unified view of the customer journey.',
        },
        {
          icon: 'Plug',
          title: 'Disconnected integrations',
          description: 'Your analytics platform does not talk to your CRM, ad platforms, or data warehouse.',
        },
      ],
    },
    whatIs: {
      heading: 'What Does Analytics Implementation Actually Include?',
      ctaHeading: 'Analytics implemented correctly — first time, every time.',
      ctaImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
      features: [
        { title: 'Platform Configuration', description: 'Complete GA4, Adobe Analytics, or Tealium setup done right from day one.' },
        { title: 'SDK Implementation', description: 'Web and mobile SDK deployment with end-to-end validation across all devices.' },
        { title: 'Tag Management', description: 'Clean GTM or Adobe Launch container with maintainable, organised structure.' },
        { title: 'Tool Integrations', description: 'CRM, ad platforms, and data warehouse connections set up and validated.' },
      ],
    },
    process: {
      heading: 'Our Implementation Process',
      steps: [
        { number: '01', title: 'Audit & Gap Analysis', description: 'We review your existing setup to identify misconfigured events, missing conversions, and integration failures.' },
        { number: '02', title: 'Implementation Plan', description: 'We create a detailed implementation plan aligned to your SDD or measurement plan, with clear timelines.' },
        { number: '03', title: 'Build & Deploy', description: 'We implement tracking across web and mobile using GTM, Adobe Launch, or direct SDK integration.' },
        { number: '04', title: 'Validate & Handoff', description: 'We validate every event against your specification and hand off with full documentation.' },
      ],
    },
    deliverables: {
      heading: "What's Included",
      items: [
        { title: 'GA4 / Adobe / Tealium Setup', description: 'Complete platform configuration including property setup, data streams, and admin configuration.' },
        { title: 'Event & Conversion Tracking', description: 'All key events and micro-conversions implemented, tested, and verified against your measurement plan.' },
        { title: 'Tag Management Configuration', description: 'GTM or Adobe Launch container configured with clean, organised, maintainable tag structure.' },
        { title: 'Third-Party Integrations', description: 'Connections to your CRM, ad platforms, email tools, and data warehouse set up and validated.' },
        { title: 'Mobile SDK Implementation', description: 'iOS and Android tracking configured for unified web + app analytics views.' },
        { title: 'Implementation Documentation', description: 'Complete record of all tags, triggers, variables, and events for your team to manage going forward.' },
      ],
    },
    platforms: {
      heading: 'Platforms We Implement',
      platforms: ['GA4', 'Google Tag Manager', 'Adobe Analytics', 'Adobe Launch', 'Tealium iQ', 'Tealium AudienceStream', 'Firebase', 'Segment'],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      faqs: [
        { question: 'What does a GA4 implementation include?', answer: 'A complete GA4 implementation includes property and data stream setup, event tracking configuration, conversion event definition, user property setup, audience creation, Google Ads and Search Console linking, and integration with BigQuery for raw data export.' },
        { question: 'What is Tealium and when should I use it instead of GTM?', answer: 'Tealium iQ is an enterprise tag management system that offers more advanced data governance, consent management, and data layer control than GTM. It is the right choice for large organisations that need strict data quality controls, complex integrations, and enterprise-grade compliance.' },
        { question: 'What is the difference between GA4 and Adobe Analytics?', answer: 'GA4 is Google\'s analytics platform, suited for most businesses and offering strong integration with Google\'s ad ecosystem. Adobe Analytics is an enterprise platform with more advanced segmentation, attribution, and customisation capabilities, but requires more technical expertise to implement and maintain correctly.' },
        { question: 'How long does an analytics implementation take?', answer: 'A standard GA4 implementation takes 2–4 weeks. Adobe Analytics or Tealium implementations are more complex and typically take 4–8 weeks depending on the number of integrations and the size of your digital estate.' },
        { question: 'Can you fix an existing broken implementation rather than starting from scratch?', answer: 'Yes, and this is the most common starting point. We audit your current setup, identify what is broken, and remediate issues in order of business impact — without disrupting your existing data history where possible.' },
      ],
    },

        whyChooseUs: {
          "badge": "WHY CHOOSE US",
          "heading": "Flawless Execution, Not Just Setup",
          "subheading": "We implement tracking that you can trust from day one, covering complex integrations across web, mobile, and third-party tools.",
          "reasons": [
                {
                      "icon": "Code2",
                      "title": "Technical Precision",
                      "description": "Clean, maintainable tag configurations that do not bloat your site."
                },
                {
                      "icon": "Settings",
                      "title": "Cross-Platform Mastery",
                      "description": "Expertise in GA4, Adobe Analytics, and Tealium."
                },
                {
                      "icon": "LineChart",
                      "title": "Accurate Data Collection",
                      "description": "Rigorous validation to ensure every event is tracked perfectly."
                },
                {
                      "icon": "Puzzle",
                      "title": "Seamless Integrations",
                      "description": "Connecting analytics to CRMs, ad platforms, and warehouses."
                },
                {
                      "icon": "MessageSquare",
                      "title": "Transparent Process",
                      "description": "You always know what is being deployed and why."
                },
                {
                      "icon": "Trophy",
                      "title": "Enterprise Experience",
                      "description": "We have deployed complex setups for global brands."
                }
          ]
    },
    cta: {
      heading: 'Get Your Analytics Implemented Correctly',
      subheading: 'Start with a free audit of your current analytics setup. We will identify exactly what is broken and what it will take to fix it.',
      primaryCta: { label: 'Book Free Analytics Audit', href: '/analytics-audit' },
      secondaryCta: { label: 'View Case Studies', href: '/case-studies' },
    },
  },

  // ─── SERVICE 3 ─────────────────────────────────────────────────────────────
  'conversion-event-tracking': {
    slug: 'conversion-event-tracking',
    badge: 'Conversion & Event Tracking',
    meta: {
      title: 'Conversion & Event Tracking Implementation',
      description:
        'Set up standardised event tracking to capture every conversion and micro-event. Cross-device, cross-domain, and full funnel journey tracking for accurate attribution.',
    },
    hero: {
      headline: 'See Every Conversion. Eliminate Tracking Blind Spots.',
      subheadline:
        'If your analytics cannot tell you exactly where users convert, drop off, and return — you are optimising blind. We implement complete conversion and event tracking so you see the full picture.',
      ctaLabel: 'Find My Tracking Gaps',
      ctaHref: '/analytics-audit',
      statOne: { value: '100%', label: 'Conversion events validated end-to-end before handoff' },
      statTwo: { value: 'Cross', label: 'Device and cross-domain tracking configured correctly' },
      statThree: { value: 'Full', label: 'Funnel visibility from first touch to final conversion' },
    },
    problem: {
      heading: 'What Broken Event Tracking Costs You',
      problems: [
        {
          icon: 'XCircle',
          title: 'Missing conversion data',
          description: 'Key conversions are not tracked, so you cannot measure what campaigns actually drive revenue.',
        },
        {
          icon: 'Hash',
          title: 'Duplicate event firing',
          description: 'Events fire multiple times, inflating your conversion numbers and distorting attribution.',
        },
        {
          icon: 'Puzzle',
          title: 'Broken funnel visibility',
          description: 'You can see entry and exit but not the steps in between where users are actually dropping off.',
        },
        {
          icon: 'TabletSmartphone',
          title: 'Cross-device blind spots',
          description: 'Mobile and desktop journeys are not stitched together, giving you a fragmented user view.',
        },
      ],
    },
    whatIs: {
      heading: 'What Is Conversion & Event Tracking?',
      ctaHeading: 'See every conversion. Eliminate tracking blind spots.',
      ctaImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&q=80',
      features: [
        { title: 'Event Schema Design', description: 'Capture every meaningful user interaction as a structured analytics event.' },
        { title: 'Micro-Conversion Tracking', description: 'Track intent signals before the final conversion to understand the full journey.' },
        { title: 'Cross-Device Stitching', description: 'Connect mobile and desktop sessions into a single, unified user view.' },
        { title: 'Funnel Mapping', description: 'Map events to funnel stages to identify drop-off points with precision.' },
      ],
    },
    process: {
      heading: 'How We Implement Your Event Tracking',
      steps: [
        { number: '01', title: 'Event Audit', description: 'We review all current events for accuracy, completeness, and correct parameter structure — identifying gaps and misfires.' },
        { number: '02', title: 'Event Schema Design', description: 'We design a standardised event taxonomy with consistent naming, required parameters, and funnel stage mapping.' },
        { number: '03', title: 'Implementation', description: 'We deploy events via GTM or direct SDK, covering all pages, all devices, and all cross-domain flows.' },
        { number: '04', title: 'Funnel Validation', description: 'We validate the complete funnel end-to-end — confirming every step fires correctly and data flows cleanly to your platform.' },
      ],
    },
    deliverables: {
      heading: "What's Included",
      items: [
        { title: 'Standardised Event Taxonomy', description: 'Consistent event naming convention across all platforms, teams, and tools.' },
        { title: 'Conversion Event Setup', description: 'All primary and micro-conversion events implemented and validated in your analytics platform.' },
        { title: 'Cross-Domain Tracking', description: 'Seamless user journey tracking across multiple domains and subdomains.' },
        { title: 'Cross-Device Tracking', description: 'User-level tracking that connects mobile and desktop sessions where possible.' },
        { title: 'Funnel Visualisation Setup', description: 'Funnel steps configured in your analytics platform for immediate drop-off analysis.' },
        { title: 'Event Tracking Documentation', description: 'Full record of every event, trigger, and parameter for ongoing team reference.' },
      ],
    },
    platforms: {
      heading: 'Platforms We Track Events On',
      platforms: ['GA4', 'Adobe Analytics', 'Tealium iQ', 'Google Tag Manager', 'Meta Pixel', 'Mixpanel', 'Amplitude', 'Segment'],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      faqs: [
        { question: 'What is the difference between an event and a conversion?', answer: 'An event is any tracked user interaction — a click, scroll, or page view. A conversion is a specific event that represents business value, such as a purchase, form submission, or sign-up. All conversions are events, but not all events are conversions.' },
        { question: 'Why does my GA4 data show duplicate conversions?', answer: 'Duplicate conversions usually happen because an event fires multiple times from the same trigger — for example, a GTM trigger fires on every page that includes a thank-you message rather than only on the confirmation page. It can also happen when both client-side and server-side tracking fire the same event without deduplication.' },
        { question: 'What is cross-domain tracking and do I need it?', answer: 'Cross-domain tracking links user sessions that span multiple domains — for example, from your marketing site to a checkout on a separate subdomain. Without it, every domain transition creates a new session, breaking attribution and inflating session counts. You need it if users move between different domains during their journey.' },
        { question: 'How do I track events across mobile and desktop?', answer: 'Cross-device tracking uses persistent user identifiers — such as a logged-in user ID passed to your analytics platform — to stitch together sessions across devices. For logged-out users, probabilistic matching can be used, though this is less accurate.' },
        { question: 'Can you track events on a single-page application (SPA)?', answer: 'Yes. SPAs require specific configuration because traditional page view triggers do not fire on route changes. We configure history change triggers in GTM or use direct SDK methods to track virtual page views and events correctly in React, Vue, Angular, and other SPA frameworks.' },
      ],
    },

        whyChooseUs: {
          "badge": "WHY CHOOSE US",
          "heading": "Complete Visibility, Not Just Pageviews",
          "subheading": "We track the events that actually matter to your bottom line, giving you a full picture of the customer journey.",
          "reasons": [
                {
                      "icon": "Activity",
                      "title": "Micro & Macro Tracking",
                      "description": "Capture every meaningful interaction, not just the final sale."
                },
                {
                      "icon": "ArrowRightLeft",
                      "title": "Cross-Device Stitching",
                      "description": "Connect user journeys across mobile and desktop."
                },
                {
                      "icon": "Sliders",
                      "title": "Funnel Optimization",
                      "description": "Identify exactly where users drop off to improve conversion rates."
                },
                {
                      "icon": "Puzzle",
                      "title": "Custom Event Schemas",
                      "description": "Standardized taxonomies built specifically for your business model."
                },
                {
                      "icon": "MessageSquare",
                      "title": "Clear Attribution",
                      "description": "Data structured to feed accurately into your attribution models."
                },
                {
                      "icon": "Trophy",
                      "title": "Actionable Insights",
                      "description": "We track data that leads to decisions, not vanity metrics."
                }
          ]
    },
    cta: {
      heading: 'Stop Optimising With Incomplete Data',
      subheading: 'Book a free audit and find out which conversions you are missing, which events are firing incorrectly, and what it is costing your campaigns.',
      primaryCta: { label: 'Book Free Analytics Audit', href: '/analytics-audit' },
      secondaryCta: { label: 'View Case Studies', href: '/case-studies' },
    },
  },

  // ─── SERVICE 4 ─────────────────────────────────────────────────────────────
  'server-side-tracking': {
    slug: 'server-side-tracking',
    badge: 'Server-Side Tracking',
    meta: {
      title: 'Server-Side Tracking Implementation',
      description:
        'Future-proof your tracking with server-side GTM, Meta CAPI, and first-party data pipelines. Stop losing conversion data to ad blockers and iOS privacy changes.',
    },
    hero: {
      headline: 'Stop Losing Conversion Data. Implement Server-Side Tracking.',
      subheadline:
        'Ad blockers, iOS privacy updates, and third-party cookie restrictions are silently erasing your conversion data. Server-side tracking moves data collection to your infrastructure — where nothing can block it.',
      ctaLabel: 'See How Much Data I Am Losing',
      ctaHref: '/analytics-audit',
      statOne: { value: '40%', label: 'Average data loss from client-side tracking alone' },
      statTwo: { value: 'iOS', label: 'Privacy changes blocked — first-party data survives' },
      statThree: { value: 'GDPR', label: 'Privacy-safe architecture with consent mode support' },
    },
    problem: {
      heading: 'Why Client-Side Tracking Is No Longer Enough',
      problems: [
        {
          icon: 'Ban',
          title: 'Ad blockers blocking pixels',
          description: 'Over 40% of users run ad blockers that prevent browser-based pixels from firing at all.',
        },
        {
          icon: 'Cookie',
          title: 'Third-party cookies disappearing',
          description: 'Browser restrictions on third-party cookies are eliminating the data your attribution depends on.',
        },
        {
          icon: 'Smartphone',
          title: 'iOS 14+ signal loss',
          description: 'Apple\'s App Tracking Transparency framework has reduced Meta and Google ad attribution accuracy significantly.',
        },
        {
          icon: 'Zap',
          title: 'Page speed degradation',
          description: 'Dozens of client-side tags slow your pages down, hurting Core Web Vitals and conversion rates.',
        },
      ],
    },
    whatIs: {
      heading: 'What Is Server-Side Tracking?',
      ctaHeading: 'Stop losing conversion data to ad blockers and iOS.',
      ctaImage: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
      features: [
        { title: 'Server-Side Collection', description: 'Data collected on your server — bypassing ad blockers and browser restrictions completely.' },
        { title: 'Meta CAPI Integration', description: 'Recover lost iOS and ad-blocker conversion signal for Meta ad campaigns.' },
        { title: 'First-Party Data Pipeline', description: 'Own your data infrastructure — not dependent on third-party cookies.' },
        { title: 'Faster Page Loads', description: 'Remove client-side tag overhead and improve Core Web Vitals scores.' },
      ],
    },
    process: {
      heading: 'How We Implement Server-Side Tracking',
      steps: [
        { number: '01', title: 'Current State Audit', description: 'We measure your existing data loss — quantifying exactly how much conversion data your current client-side setup is missing.' },
        { number: '02', title: 'Architecture Design', description: 'We design your server-side infrastructure — sGTM endpoint, data pipelines, and first-party data strategy.' },
        { number: '03', title: 'Implementation', description: 'We deploy server-side GTM, configure Meta CAPI, Google Ads Enhanced Conversions, and other required integrations.' },
        { number: '04', title: 'Validation & Comparison', description: 'We compare data volumes before and after, confirm deduplication is working, and validate accuracy across all platforms.' },
      ],
    },
    deliverables: {
      heading: "What's Included",
      items: [
        { title: 'Server-Side GTM Setup', description: 'sGTM container deployed on your subdomain with client and server tag configuration.' },
        { title: 'Meta Conversions API (CAPI)', description: 'Server-side Meta event integration with browser event deduplication to avoid double-counting.' },
        { title: 'Google Ads Enhanced Conversions', description: 'First-party data sent to Google Ads to recover conversion signal lost to cookie restrictions.' },
        { title: 'First-Party Data Pipeline', description: 'Data collection infrastructure you own — not dependent on third-party cookies or browser permissions.' },
        { title: 'Consent Mode Integration', description: 'GA4 Consent Mode v2 configured to recover modelled conversion data for users who decline cookies.' },
        { title: 'Data Loss Comparison Report', description: 'Before/after measurement showing exactly how much data was recovered by moving server-side.' },
      ],
    },
    platforms: {
      heading: 'Platforms We Implement Server-Side',
      platforms: ['Server-Side GTM', 'Meta Conversions API', 'GA4', 'Google Ads Enhanced Conversions', 'Tealium EventStream', 'Stape', 'BigQuery'],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      faqs: [
        { question: 'What is the difference between client-side and server-side tracking?', answer: 'Client-side tracking fires tags and pixels in the user\'s browser, where they can be blocked by ad blockers, browser privacy settings, and iOS restrictions. Server-side tracking sends data from your server directly to analytics platforms, bypassing all browser-level blocking.' },
        { question: 'How much data am I losing with client-side tracking only?', answer: 'Data loss varies by industry and audience, but studies consistently show 20–40% of conversion events are lost due to ad blockers, iOS privacy settings, and cookie restrictions. For audiences with high technical sophistication, this can exceed 50%.' },
        { question: 'What is Meta Conversions API (CAPI) and why do I need it?', answer: 'Meta CAPI is a server-to-server integration that sends conversion events directly from your server to Meta, bypassing the browser-based Meta Pixel. It recovers signal lost to iOS 14+ restrictions and ad blockers, improving your Meta ad campaign optimisation and attribution accuracy.' },
        { question: 'Will server-side tracking fix my Meta Ads attribution?', answer: 'Yes, significantly. Implementing CAPI alongside the Meta Pixel (with deduplication) typically recovers 20–35% of lost conversion events, giving Meta\'s algorithm more signal to optimise your campaigns effectively.' },
        { question: 'Is server-side tracking GDPR compliant?', answer: 'Server-side tracking itself is a data collection method, not a compliance decision. You still need a consent management platform and must respect user consent choices. However, server-side architecture gives you more precise control over what data is collected and shared, making consent management more accurate.' },
        { question: 'How long does server-side tracking implementation take?', answer: 'A standard sGTM implementation with Meta CAPI and GA4 takes 3–5 weeks. More complex setups involving multiple ad platforms, custom first-party data pipelines, or enterprise infrastructure take 6–10 weeks.' },
      ],
    },

        whyChooseUs: {
          "badge": "WHY CHOOSE US",
          "heading": "Future-Proof Data, Not Just Pixels",
          "subheading": "We build robust server-side infrastructures that bypass browser restrictions and protect your conversion data.",
          "reasons": [
                {
                      "icon": "Server",
                      "title": "Data Recovery",
                      "description": "Reclaim 20-30% of data lost to ad blockers and ITP."
                },
                {
                      "icon": "ShieldCheck",
                      "title": "Privacy Compliance",
                      "description": "Full control over what data is sent to third parties."
                },
                {
                      "icon": "Zap",
                      "title": "Improved Page Speed",
                      "description": "Offload client-side scripts to the server for faster load times."
                },
                {
                      "icon": "Database",
                      "title": "First-Party Ownership",
                      "description": "Take control of your data pipeline and reduce platform reliance."
                },
                {
                      "icon": "MessageSquare",
                      "title": "CAPI Expertise",
                      "description": "Deep experience with Meta Conversions API and Google Enhanced Conversions."
                },
                {
                      "icon": "Trophy",
                      "title": "Advanced Architecture",
                      "description": "Enterprise-grade sGTM setups built for scale and security."
                }
          ]
    },
    cta: {
      heading: 'Recover the Conversion Data You Are Losing Right Now',
      subheading: 'Book a free audit and we will quantify exactly how much data your current setup is missing — and show you how to get it back.',
      primaryCta: { label: 'Book Free Analytics Audit', href: '/analytics-audit' },
      secondaryCta: { label: 'View Case Studies', href: '/case-studies' },
    },
  },

  // ─── SERVICE 5 ─────────────────────────────────────────────────────────────
  'qa-data-validation': {
    slug: 'qa-data-validation',
    badge: 'QA & Data Validation',
    meta: {
      title: 'Analytics QA & Data Validation Services',
      description:
        'Validate your tracking accuracy end-to-end. We debug tags, compare data across platforms, and build testing frameworks so your analytics data is always reliable.',
    },
    hero: {
      headline: "Don't Make Marketing Decisions on Data You Can't Trust",
      subheadline:
        'Bad analytics data does not fail loudly — it fails silently. You keep making decisions, running campaigns, and allocating budget based on numbers that are quietly wrong. We validate every layer of your tracking so you can act with confidence.',
      ctaLabel: 'Validate My Analytics Data',
      ctaHref: '/analytics-audit',
      statOne: { value: 'End', label: 'To-end tracking validation across all platforms' },
      statTwo: { value: 'Cross', label: 'Platform data comparison to catch every discrepancy' },
      statThree: { value: 'Zero', label: 'Trust issues after our validation process is complete' },
    },
    problem: {
      heading: 'Signs Your Analytics Data Cannot Be Trusted',
      problems: [
        {
          icon: 'Hash',
          title: 'Numbers do not match',
          description: 'GA4, your CRM, and Ads Manager all show different conversion counts for the same period.',
        },
        {
          icon: 'Ghost',
          title: 'Tags firing when they should not',
          description: 'Events trigger on wrong pages, wrong actions, or multiple times for a single user action.',
        },
        {
          icon: 'CircleDashed',
          title: 'Missing data you cannot explain',
          description: 'Certain events, pages, or user segments simply do not appear in your reports.',
        },
        {
          icon: 'Tag',
          title: 'No systematic testing process',
          description: 'Every code release could break tracking and you would not know until someone notices the numbers look wrong.',
        },
      ],
    },
    whatIs: {
      heading: 'What Is Analytics QA & Data Validation?',
      ctaHeading: 'Make decisions on data you can actually trust.',
      ctaImage: 'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&q=80',
      features: [
        { title: 'Tag Debugging', description: 'Verify every tag fires correctly on the right trigger with the right parameters.' },
        { title: 'Cross-Platform Comparison', description: 'Compare data volumes across GA4, ad platforms, CRM, and your data warehouse.' },
        { title: 'Funnel Validation', description: 'Confirm every conversion funnel step is tracked accurately end-to-end.' },
        { title: 'Regression Testing', description: 'Build a framework that catches tracking breakage after every code release.' },
      ],
    },
    process: {
      heading: 'How We Validate Your Analytics',
      steps: [
        { number: '01', title: 'Implementation Audit', description: 'We review every tag, trigger, and variable in your tag management system and compare against your measurement specification.' },
        { number: '02', title: 'Live Debugging', description: 'We use browser developer tools, GTM Preview, and platform debuggers to watch events fire in real time and identify issues.' },
        { number: '03', title: 'Cross-Platform Comparison', description: 'We compare data volumes and conversion counts across all connected platforms to identify discrepancies and their root causes.' },
        { number: '04', title: 'Testing Framework', description: 'We deliver a regression testing checklist or automated test suite that your team can run after every code or tag release.' },
      ],
    },
    deliverables: {
      heading: "What's Included",
      items: [
        { title: 'Full Tag Audit Report', description: 'Documentation of every tag, its status, what it is doing correctly, and what needs to be fixed.' },
        { title: 'Debugging & Issue Resolution', description: 'All identified tracking issues fixed and validated — not just documented.' },
        { title: 'Cross-Platform Data Comparison', description: 'Side-by-side analysis of data volumes across GA4, Meta, Google Ads, CRM, and other platforms.' },
        { title: 'Funnel Validation Report', description: 'Step-by-step confirmation that every funnel stage is tracked accurately from first touch to conversion.' },
        { title: 'Data Discrepancy Explanations', description: 'Clear explanations for every number mismatch — what causes it, whether it is expected, and how to resolve it.' },
        { title: 'Regression Testing Checklist', description: 'A structured testing process your team runs after every release to catch tracking breakage immediately.' },
      ],
    },
    platforms: {
      heading: 'Platforms We Validate',
      platforms: ['GA4', 'Google Tag Manager', 'Adobe Analytics', 'Adobe Launch', 'Meta Ads Manager', 'Google Ads', 'Tealium', 'Looker Studio'],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      faqs: [
        { question: 'Why does my GA4 data not match my CRM data?', answer: 'GA4 and CRM data diverge for several reasons: GA4 counts sessions while CRM counts contacts; GA4 uses last-click attribution while your CRM may record the first touch; and GA4 may not track offline or phone conversions. Some discrepancy is expected, but large differences usually indicate a tracking configuration error that needs to be investigated.' },
        { question: 'How do I know if my tracking tags are actually firing?', answer: 'You can check tag firing using GTM Preview mode, which shows all tags, triggers, and data layer events for each page interaction in real time. For individual pixels, browser developer tools and platform-specific debuggers (Meta Pixel Helper, GA4 DebugView) show exactly what is firing and what data is being sent.' },
        { question: 'What causes data discrepancies between analytics platforms?', answer: 'Common causes include: different attribution models (last click vs data-driven), different session definitions, bot filtering settings, ad blocker impact varying by platform, time zone differences, and deduplication logic differences. We identify which cause applies in each case.' },
        { question: 'How often should we run analytics QA?', answer: 'At minimum, run a QA check after every significant code release, major tag change, or platform update. We recommend a lightweight regression test after every deployment and a comprehensive full audit quarterly.' },
        { question: 'Can you fix issues you find during QA, or do you only report them?', answer: 'We fix everything we find. Our QA engagement includes full remediation of identified issues, not just a list of problems to hand back to your team.' },
      ],
    },

        whyChooseUs: {
          "badge": "WHY CHOOSE US",
          "heading": "Absolute Trust, Not Just Audits",
          "subheading": "We dig deep to find silent tracking failures and build automated frameworks so you can trust your data again.",
          "reasons": [
                {
                      "icon": "CheckCircle2",
                      "title": "98%+ Accuracy Target",
                      "description": "We do not stop until your data matches your source of truth."
                },
                {
                      "icon": "Settings",
                      "title": "Root Cause Analysis",
                      "description": "We do not just report errors; we find exactly why they happen."
                },
                {
                      "icon": "LineChart",
                      "title": "Cross-Platform Checks",
                      "description": "Validating data consistency between GA4, CRM, and Ad platforms."
                },
                {
                      "icon": "Puzzle",
                      "title": "Automated Testing",
                      "description": "Setting up regression tests to catch future tracking breaks."
                },
                {
                      "icon": "MessageSquare",
                      "title": "Clear Reporting",
                      "description": "Plain English explanations of what broke and how we fixed it."
                },
                {
                      "icon": "Trophy",
                      "title": "Proactive QA",
                      "description": "Catching issues before they impact your marketing spend."
                }
          ]
    },
    cta: {
      heading: 'Make Sure Your Analytics Data Is Actually Correct',
      subheading: 'Book a free audit and find out exactly where your tracking is broken, why your numbers do not match, and how to fix it.',
      primaryCta: { label: 'Book Free Analytics Audit', href: '/analytics-audit' },
      secondaryCta: { label: 'View Case Studies', href: '/case-studies' },
    },
  },

  // ─── SERVICE 6 ─────────────────────────────────────────────────────────────
  'analytics-reporting-attribution': {
    slug: 'analytics-reporting-attribution',
    badge: 'Reporting & Attribution',
    meta: {
      title: 'Analytics Reporting & Attribution',
      description:
        'Build custom GA4 and Looker Studio dashboards aligned to business KPIs. Get clear attribution models and funnel performance data your leadership team can act on.',
    },
    hero: {
      headline: 'Turn Your Analytics Data Into Decisions Executives Trust',
      subheadline:
        'Raw analytics data is not a business insight. We build custom dashboards and attribution models that translate your tracking data into clear, actionable reports your entire team can understand and act on.',
      ctaLabel: 'Build Better Reporting',
      ctaHref: '/analytics-audit',
      statOne: { value: 'KPI', label: 'Aligned dashboards — not vanity metrics' },
      statTwo: { value: 'Multi', label: 'Touch attribution models for accurate channel credit' },
      statThree: { value: 'ROI', label: 'Visibility into which channels actually drive revenue' },
    },
    problem: {
      heading: 'What Happens When Reporting Is Done Wrong',
      problems: [
        {
          icon: 'BarChart2',
          title: 'Dashboards nobody uses',
          description: 'Reports built for data teams, not decision makers. Too complex, not aligned to what leadership needs.',
        },
        {
          icon: 'Tag',
          title: 'Wrong attribution model',
          description: 'Last-click attribution gives 100% credit to the final touchpoint, misrepresenting which channels actually drive performance.',
        },
        {
          icon: 'TrendingDown',
          title: 'Vanity metrics over business metrics',
          description: 'Reports full of sessions, bounce rates, and impressions — but no connection to revenue or pipeline.',
        },
        {
          icon: 'GitMerge',
          title: 'No channel comparison',
          description: 'You cannot see which marketing channel delivers the best ROI because the data is siloed by platform.',
        },
      ],
    },
    whatIs: {
      heading: 'What Is Analytics Reporting & Attribution?',
      ctaHeading: 'Turn your data into insights your leadership team acts on.',
      ctaImage: 'https://images.unsplash.com/photo-1543286386-713bdd548da4?w=600&q=80',
      features: [
        { title: 'Custom KPI Dashboards', description: 'Reports built around your actual business metrics — not default templates.' },
        { title: 'Attribution Modelling', description: 'Apply models that reflect how your customers actually buy and convert.' },
        { title: 'Cross-Channel View', description: 'See all marketing channel performance in a single, unified report.' },
        { title: 'Executive Reporting', description: 'Concise dashboards designed for leadership and non-technical stakeholders.' },
      ],
    },
    process: {
      heading: 'How We Build Your Reporting',
      steps: [
        { number: '01', title: 'KPI Definition', description: 'We align with your team on the exact metrics that matter — revenue, pipeline, CAC, ROAS — and map them to available data sources.' },
        { number: '02', title: 'Data Source Audit', description: 'We verify that all data feeding your reports is accurate and complete before building any visualisation on top of it.' },
        { number: '03', title: 'Dashboard Build', description: 'We build custom Looker Studio or GA4 dashboards with the right metrics, right visualisations, and right audience in mind.' },
        { number: '04', title: 'Attribution Configuration', description: 'We configure attribution models in GA4 and your ad platforms and document what each model means for how you interpret results.' },
      ],
    },
    deliverables: {
      heading: "What's Included",
      items: [
        { title: 'Custom GA4 Dashboards', description: 'GA4 Explorations and reports configured to your KPIs, with saved segments and custom dimensions.' },
        { title: 'Looker Studio Dashboards', description: 'Visually polished, shareable dashboards pulling from GA4, ad platforms, and your CRM in one place.' },
        { title: 'Attribution Model Setup', description: 'Data-driven, linear, or time-decay attribution configured in GA4 with documentation on how to interpret each.' },
        { title: 'Channel Performance Report', description: 'Cross-channel view comparing traffic, conversions, revenue, and ROAS across all marketing channels.' },
        { title: 'Funnel Performance Analysis', description: 'Visualisation of drop-off rates at every funnel stage to identify where to focus optimisation effort.' },
        { title: 'Executive Reporting Template', description: 'A clean, concise monthly reporting format built for non-technical stakeholders and leadership reviews.' },
      ],
    },
    platforms: {
      heading: 'Platforms We Report From',
      platforms: ['GA4', 'Looker Studio', 'BigQuery', 'Google Ads', 'Meta Ads Manager', 'Adobe Analytics', 'Salesforce', 'HubSpot'],
    },
    faq: {
      heading: 'Frequently Asked Questions',
      faqs: [
        { question: 'What is marketing attribution and why does it matter?', answer: 'Marketing attribution is the process of assigning credit to the marketing channels and touchpoints that contributed to a conversion. It matters because without it, you do not know which channels actually drive revenue — and you will consistently over-invest in the wrong ones and under-invest in the ones that work.' },
        { question: 'What is the difference between last-click and data-driven attribution?', answer: 'Last-click attribution gives 100% of the conversion credit to the final marketing touchpoint before conversion. Data-driven attribution uses machine learning to distribute credit across all touchpoints based on their actual contribution to conversions. Data-driven is almost always more accurate for understanding true channel performance.' },
        { question: 'What is the best attribution model for my business?', answer: 'For most businesses with enough conversion data (GA4 requires at least 400 conversions per month), data-driven attribution is recommended. For businesses with less data or very short consideration periods, last-click may be sufficient. We will recommend the right model based on your business model and data volumes.' },
        { question: 'Can you build dashboards that pull from multiple platforms?', answer: 'Yes. Looker Studio can connect to GA4, Google Ads, Meta Ads Manager, Search Console, BigQuery, Google Sheets, and many CRM platforms simultaneously. We build unified dashboards that give you a single view of performance across all channels.' },
        { question: 'How long does it take to build a custom dashboard?', answer: 'A standard Looker Studio dashboard connecting 2–3 data sources takes 1–2 weeks. More complex dashboards pulling from BigQuery, CRM, and multiple ad platforms with custom metrics take 3–5 weeks depending on data availability and stakeholder requirements.' },
      ],
    },

        whyChooseUs: {
          "badge": "WHY CHOOSE US",
          "heading": "Actionable Insights, Not Just Charts",
          "subheading": "We build reporting that executives actually use, translating complex tracking data into clear business outcomes.",
          "reasons": [
                {
                      "icon": "BarChart",
                      "title": "KPI Alignment",
                      "description": "Dashboards built around metrics that drive your business."
                },
                {
                      "icon": "Target",
                      "title": "Accurate Attribution",
                      "description": "Implementing data-driven models to credit the right channels."
                },
                {
                      "icon": "LineChart",
                      "title": "Unified View",
                      "description": "Bringing CRM, ad, and web data together in one place."
                },
                {
                      "icon": "Focus",
                      "title": "Executive Clarity",
                      "description": "Cutting through the noise to highlight what truly matters."
                },
                {
                      "icon": "MessageSquare",
                      "title": "Stakeholder Buy-In",
                      "description": "Reports designed specifically for non-technical leadership."
                },
                {
                      "icon": "Trophy",
                      "title": "ROI Focus",
                      "description": "Connecting marketing activities directly to revenue impact."
                }
          ]
    },
    cta: {
      heading: 'Build Reporting Your Team Will Actually Use',
      subheading: 'Start with a free audit of your current reporting setup. We will show you what is missing and what better reporting would look like for your business.',
      primaryCta: { label: 'Book Free Analytics Audit', href: '/analytics-audit' },
      secondaryCta: { label: 'View Case Studies', href: '/case-studies' },
    },
  },
}

export const servicesConfig = {
  hubPage: {
    meta: {
      title: 'Analytics & Tracking Services',
      description:
        'Explore our full range of analytics implementation services — tracking architecture, GA4 and Adobe setup, server-side tracking, data validation, and attribution reporting.',
    },
    headline: 'Analytics Implementation Services That Drive Real Business Outcomes',
    subheadline:
      'From measurement planning to reporting dashboards, we cover every layer of your analytics stack — so your data is accurate, complete, and actionable.',
  },
}
