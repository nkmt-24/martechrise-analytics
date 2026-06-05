import {
  Shield, Lock, TrendingUp, AlertTriangle, ArrowRight,
  BarChart3, Zap, Database, Globe, ShoppingCart,
  CheckCircle2, Server, Activity, ArrowUpRight, Plus, Minus,
  HeartPulse, Plane, FileText, FlaskConical, Package
} from 'lucide-react';

export const industriesFaq = [
  {
    question: "Why does GA4 lose e-commerce revenue data?",
    answer: "GA4 often loses revenue data due to iOS Intelligent Tracking Prevention (ITP), ad blockers, and payment processor redirects (like returning from Stripe or PayPal). Users close the browser before the 'purchase' event fires, or cross-domain tracking breaks, leading to missing attribution and revenue discrepancies."
  },
  {
    question: "How does server-side tracking help Shopify stores?",
    answer: "Server-side tracking (sGTM) moves the tracking pixel from the user's browser to a secure cloud server. This bypasses ad blockers, extends cookie lifespans on iOS devices, and allows you to send 100% accurate purchase data directly via Shopify webhooks, significantly improving Meta CAPI match rates."
  },
  {
    question: "Is server-side tracking PCI-DSS compliant?",
    answer: "Yes, when implemented correctly. Server-side tracking allows you to scrub, hash, or completely remove Personally Identifiable Information (PII) and sensitive payment data before it ever reaches third-party platforms like Google Analytics or Meta, ensuring strict PCI-DSS and GDPR compliance."
  },
  {
    question: "How do ad blockers affect attribution?",
    answer: "Ad blockers prevent client-side tracking scripts (like the Facebook Pixel or GA4 tag) from loading. This means 30-40% of your traffic and conversions may not be tracked or attributed to your marketing campaigns. First-party server-side tracking mitigates this by routing data through your own subdomain."
  },
  {
    question: "How can fintech companies track users securely?",
    answer: "Fintech companies must use a robust Server-Side Tagging architecture. This ensures that no sensitive financial data or PII is exposed to the browser. Data is collected first-party, cleansed on the server, and only safe, aggregated events are forwarded to analytics platforms."
  },
  {
    question: "Why does Meta attribution break on iOS?",
    answer: "Apple's App Tracking Transparency (ATT) and Safari's ITP restrict the lifespan of third-party cookies to 24 hours or block them entirely. If a user clicks a Meta ad on iOS but buys 3 days later, Meta cannot attribute the sale. Conversions API (CAPI) solves this by sending server-side match keys."
  }
];

export const industryStats = [
  { val: "30-40%", label: "Data Lost to Ad Blockers" },
  { val: "100%", label: "Compliance Focused" },
  { val: "24hrs", label: "Apple ITP Cookie Limit" },
  { val: "0", label: "PII Protection Focused" }
];

export const allIndustriesData = [
  {
    id: "ecommerce",
    title: "Sector 01 — E-commerce",
    headline: "Eliminate Revenue Discrepancies & Attribution Loss",
    description: "Fix broken tracking architecture, implement robust server-side data pipelines, and recover lost conversions from iOS users, ad blockers, and third-party payment processor redirects. Gain absolute clarity on ROAS and multi-device checkout funnels.",
    icon: ShoppingCart,
    challengesTitle: "Core Tracking Resolutions",
    challenges: [
      { title: 'Revenue Mismatches', desc: 'Resolved via GA4 ecommerce schema and server-side purchase webhooks, ensuring 100% order accuracy.' },
      { title: 'Checkout Funnel Drop-offs', desc: 'Granular visibility into every step of the cart journey without client-side data sampling.' },
      { title: 'iOS Attribution Degradation', desc: 'Recovered via first-party server-side tagging and advanced Meta CAPI integration.' }
    ],
    servicesTitle: "Recommended Infrastructure",
    services: [
      { title: 'Tracking Architecture', href: '/services/tracking-architecture', desc: 'Design scalable data layers for complex catalogs.' },
      { title: 'Analytics Implementation', href: '/services/analytics-implementation', desc: 'Flawless GA4 & GTM setup for exact revenue matching.' },
      { title: 'Conversion Tracking', href: '/services/conversion-event-tracking', desc: 'Track every add-to-cart, checkout step, and purchase.' },
      { title: 'Server-Side Tracking', href: '/services/server-side-tracking', desc: 'Bypass ad blockers and implement Meta CAPI.' }
    ],
    platformsTitle: "Supported Architectures",
    platformsDesc: "We deploy scalable tracking layers across major headless and monolithic commerce platforms.",
    platforms: ['Shopify Plus', 'WooCommerce', 'Adobe Commerce', 'Next.js Headless']
  },
  {
    id: "finance",
    title: "Sector 02 — Finance & BFSI",
    headline: "Compliant Measurement Architecture for Secure Funnels",
    description: "Enterprise-grade server-side analytics for banking and BFSI. Measure complex, multi-session credit applications while maintaining absolute PCI-DSS compliance and completely scrubbing PII at the edge.",
    icon: Shield,
    challengesTitle: "Security & Compliance Resolutions",
    challenges: [
      { title: 'PII Data Leakage', desc: 'Prevent accidental exposure of emails and phone numbers to ad networks via URL parameters.' },
      { title: 'Cross-Session Application Drop-offs', desc: 'Unify lead-to-application funnels that span multiple days without relying on volatile cookies.' },
      { title: 'PCI-DSS Constraints', desc: 'Deploy edge-hosted tracking proxies that strip sensitive financial payloads before vendor transmission.' }
    ],
    servicesTitle: "Recommended Infrastructure",
    services: [
      { title: 'Server-Side Tracking', href: '/services/server-side-tracking', desc: 'Secure proxy for all tracking data to scrub PII.' },
      { title: 'QA & Data Validation', href: '/services/qa-data-validation', desc: 'Automated monitoring to prevent sensitive data leaks.' },
      { title: 'Tracking Architecture', href: '/services/tracking-architecture', desc: 'Compliance-first measurement planning.' },
      { title: 'Analytics Reporting', href: '/services/analytics-reporting-attribution', desc: 'Unified dashboards for user acquisition and LTV.' }
    ],
    platformsTitle: "Supported Banking Environments",
    platformsDesc: "Deep integration expertise with enterprise financial systems and payment gateways.",
    platforms: ['Temenos', 'Mambu', 'Stripe', 'LendingClub']
  },
  {
    id: "healthcare",
    title: "Sector 03 — Healthcare & Telehealth",
    headline: "Privacy-First Analytics Without Sacrificing Insights",
    description: "Map patient journeys, track appointment conversions, and measure healthcare marketing ROI through strict, HIPAA-aware server-side architectures that enforce consent management and anonymization.",
    icon: HeartPulse,
    challengesTitle: "Healthcare Tracking Resolutions",
    challenges: [
      { title: 'Consent Management Chaos', desc: 'Align tag firing rules strictly with CMPs (OneTrust, Cookiebot) to ensure legal compliance.' },
      { title: 'Patient Journey Visibility', desc: 'Track multi-step booking funnels while fully anonymizing user identities.' },
      { title: 'Unsafe Pixel Deployments', desc: 'Replace risky client-side Meta/Google pixels with controlled, server-side data streams.' }
    ],
    servicesTitle: "Recommended Infrastructure",
    services: [
      { title: 'Tracking Architecture', href: '/services/tracking-architecture', desc: 'Privacy-by-design tracking blueprints.' },
      { title: 'Server-Side Tracking', href: '/services/server-side-tracking', desc: 'First-party data collection to prevent third-party leakage.' },
      { title: 'Analytics Implementation', href: '/services/analytics-implementation', desc: 'Compliant GA4 configuration without user IDs.' },
      { title: 'QA & Data Validation', href: '/services/qa-data-validation', desc: 'Continuous scanning for unauthorized pixel activity.' }
    ],
    platformsTitle: "Healthcare Ecosystems",
    platformsDesc: "Integrating marketing analytics safely alongside scheduling and portal systems.",
    platforms: ['Epic Systems', 'Cerner', 'Custom Telehealth', 'Zocdoc APIs']
  },
  {
    id: "travel",
    title: "Sector 04 — Travel & Hospitality",
    headline: "Optimize Complex, Multi-Device Booking Journeys",
    description: "Travel decisions take weeks and span multiple devices. We implement advanced identity resolution and cross-domain tracking to map the full journey from initial campaign click to final booking confirmation.",
    icon: Plane,
    challengesTitle: "Booking Journey Resolutions",
    challenges: [
      { title: 'Fragmented Attribution', desc: 'Bridge the gap between mobile research and desktop bookings using first-party identity graphs.' },
      { title: 'Cross-Domain Breakage', desc: 'Maintain session continuity across flight, hotel, and car rental partner domains.' },
      { title: 'Drop-off Identification', desc: 'Implement granular funnel steps to see exactly where users abandon complex booking forms.' }
    ],
    servicesTitle: "Recommended Infrastructure",
    services: [
      { title: 'Conversion Tracking', href: '/services/conversion-event-tracking', desc: 'Detailed e-commerce schemas for travel bookings.' },
      { title: 'Analytics Reporting', href: '/services/analytics-reporting-attribution', desc: 'Custom attribution models for long consideration cycles.' },
      { title: 'Tracking Architecture', href: '/services/tracking-architecture', desc: 'Unified data layers across property portfolios.' },
      { title: 'Analytics Implementation', href: '/services/analytics-implementation', desc: 'Cross-domain GA4 property configuration.' }
    ],
    platformsTitle: "Travel Tech Stacks",
    platformsDesc: "Expertise in specialized booking engines and hospitality platforms.",
    platforms: ['Sabre', 'Amadeus', 'Custom Booking Engines', 'Shopify (Travel)']
  },
  {
    id: "insurance",
    title: "Sector 05 — Insurance & Insurtech",
    headline: "Track Intent Across Long Quote-to-Policy Cycles",
    description: "Insurance requires tracking highly complex, conditional forms. We build analytics systems that measure lead quality, quote abandonment, and broker attribution while handling offline policy conversions.",
    icon: FileText,
    challengesTitle: "Insurtech Tracking Resolutions",
    challenges: [
      { title: 'Form Abandonment Analytics', desc: 'Track exactly which question in a 20-step quote form causes users to drop off.' },
      { title: 'Offline Conversion Sync', desc: 'Attribute policies closed over the phone back to the original digital marketing campaign.' },
      { title: 'Lead Quality Measurement', desc: 'Send scored events to ad platforms to optimize for high-value policies, not just cheap leads.' }
    ],
    servicesTitle: "Recommended Infrastructure",
    services: [
      { title: 'Analytics Implementation', href: '/services/analytics-implementation', desc: 'Granular form engagement tracking via GTM.' },
      { title: 'Server-Side Tracking', href: '/services/server-side-tracking', desc: 'Offline conversion uploads via Conversions API.' },
      { title: 'Analytics Reporting', href: '/services/analytics-reporting-attribution', desc: 'End-to-end CRM and GA4 data blending.' },
      { title: 'QA & Data Validation', href: '/services/qa-data-validation', desc: 'Ensure reliable data capture across complex forms.' }
    ],
    platformsTitle: "Insurance Ecosystems",
    platformsDesc: "Bridging frontend lead generation with backend CRM and policy systems.",
    platforms: ['Salesforce', 'HubSpot', 'Guidewire', 'Custom Portals']
  },
  {
    id: "lifesciences",
    title: "Sector 06 — Life Sciences & Pharma",
    headline: "Structured Data for Complex Regulatory Ecosystems",
    description: "Measure stakeholder engagement, clinical trial recruitment, and HCP (Healthcare Professional) portals with analytics architectures designed for stringent regulatory compliance and multi-channel reporting.",
    icon: FlaskConical,
    challengesTitle: "Life Sciences Resolutions",
    challenges: [
      { title: 'Regulated Content Tracking', desc: 'Measure interactions with gated medical information without violating compliance standards.' },
      { title: 'HCP Journey Visibility', desc: 'Track professional engagement across webinars, portals, and email campaigns in one unified view.' },
      { title: 'Enterprise Data Silos', desc: 'Standardize data collection schemas across dozens of brand and unbranded global websites.' }
    ],
    servicesTitle: "Recommended Infrastructure",
    services: [
      { title: 'Tracking Architecture', href: '/services/tracking-architecture', desc: 'Global taxonomy and nomenclature design.' },
      { title: 'Server-Side Tracking', href: '/services/server-side-tracking', desc: 'Secure data routing for enterprise ecosystems.' },
      { title: 'Analytics Reporting', href: '/services/analytics-reporting-attribution', desc: 'Looker Studio dashboards for stakeholder reporting.' },
      { title: 'QA & Data Validation', href: '/services/qa-data-validation', desc: 'Automated monitoring across portfolio sites.' }
    ],
    platformsTitle: "Enterprise CMS & CRM",
    platformsDesc: "Deploying standardized tracking across massive global infrastructure.",
    platforms: ['Veeva', 'Adobe Experience', 'Sitecore', 'Drupal']
  },
  {
    id: "d2c",
    title: "Sector 07 — Direct-to-Consumer (D2C)",
    headline: "First-Party Data Strategy for Subscription Growth",
    description: "Move beyond basic transaction tracking. We build robust analytics foundations that measure customer LTV, subscription retention, and true paid social attribution in a post-iOS 14 environment.",
    icon: Package,
    challengesTitle: "D2C Growth Resolutions",
    challenges: [
      { title: 'Subscription Blind Spots', desc: 'Track recurring revenue and churn metrics accurately within GA4 and ad platforms.' },
      { title: 'Influencer Attribution', desc: 'Move beyond unreliable promo codes with server-side click tracking and advanced UTM architectures.' },
      { title: 'First-Party Data Activation', desc: 'Build owned identity graphs to power highly targeted retention campaigns without relying on third-party cookies.' }
    ],
    servicesTitle: "Recommended Infrastructure",
    services: [
      { title: 'Conversion Tracking', href: '/services/conversion-event-tracking', desc: 'Recharge/subscription lifecycle tracking.' },
      { title: 'Server-Side Tracking', href: '/services/server-side-tracking', desc: 'Maximize match rates for Meta/TikTok CAPI.' },
      { title: 'Analytics Implementation', href: '/services/analytics-implementation', desc: 'Advanced LTV and cohort analysis setup.' },
      { title: 'Tracking Architecture', href: '/services/tracking-architecture', desc: 'Scalable data models for fast-growing brands.' }
    ],
    platformsTitle: "Modern Commerce Stacks",
    platformsDesc: "Deep integrations with the tools powering modern digital brands.",
    platforms: ['Shopify', 'Recharge', 'Klaviyo', 'Postscript']
  }
];
