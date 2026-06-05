/**
 * SEED CASE STUDIES
 *
 * Seeds the database with MarTechRise case studies
 * Based on: https://www.martechrise.ai/case-studies
 *
 * Run: npx tsx scripts/seed-case-studies.ts
 */

import mongoose from 'mongoose'
import dbConnect from '../src/lib/db'
import Project from '../src/models/Project'
import Category from '../src/models/Category'

// Placeholder image URLs - replace with actual Cloudinary URLs after upload
const PLACEHOLDER_IMAGES = {
  ecommerce: {
    thumbnail: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800',
    cover: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920',
    hero: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=2560',
  },
  fintech: {
    thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800',
    cover: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=1920',
    hero: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=2560',
  },
  healthcare: {
    thumbnail: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    cover: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=1920',
    hero: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=2560',
  },
  travel1: {
    thumbnail: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800',
    cover: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920',
    hero: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=2560',
  },
  travel2: {
    thumbnail: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
    cover: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1920',
    hero: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=2560',
  },
  lifesciences: {
    thumbnail: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800',
    cover: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=1920',
    hero: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=2560',
  },
}

const caseStudiesData = [
  // ─── CASE STUDY 1: E-COMMERCE ──────────────────────────────────────────
  {
    title: 'How Fixing Broken Tracking Increased ROAS by 2.3X for an E-commerce Brand',
    slug: 'ecommerce-attribution-fix',
    shortSummary: 'Revenue mismatches and inflated conversion data were burning $47K/month in wasted ad spend. We fixed their tracking stack and recovered accurate attribution.',
    description: 'A fast-growing fashion e-commerce brand was scaling aggressively on Meta and Google Ads but couldn\'t trust their numbers. GA4 revenue didn\'t match Shopify, Meta showed inflated conversions, and their marketing team was optimizing campaigns based on incomplete data. We rebuilt their tracking architecture from scratch — implementing server-side GTM, Meta CAPI, and a clean data layer — and immediately uncovered where their ad budget was actually working.',

    // Client Info
    clientName: 'Sarah Chen',
    clientCompany: 'StyleVault',
    clientWebsite: 'https://stylevault.example.com',
    clientIndustry: 'E-commerce Fashion',
    clientLogo: {
      url: 'https://via.placeholder.com/200x80/1a1a1a/ffffff?text=StyleVault',
      alt: 'StyleVault Logo',
      width: 200,
      height: 80,
    },

    // Project Meta
    projectYear: '2025',
    projectLocation: 'Los Angeles, CA',
    projectDuration: '6 weeks',
    projectUrl: 'https://stylevault.example.com',

    // Classification
    tags: ['E-commerce', 'Server-Side Tracking', 'Meta CAPI', 'GA4', 'Attribution Fix', 'ROAS Optimization'],
    techStack: [
      { name: 'GA4', category: 'Analytics' },
      { name: 'Server-Side GTM', category: 'Tag Management' },
      { name: 'Meta Conversions API', category: 'Ad Platform Integration' },
      { name: 'Google Ads Enhanced Conversions', category: 'Ad Platform Integration' },
      { name: 'Shopify', category: 'E-commerce Platform' },
      { name: 'BigQuery', category: 'Data Warehouse' },
    ],

    // Media
    thumbnail: {
      url: PLACEHOLDER_IMAGES.ecommerce.thumbnail,
      alt: 'E-commerce analytics dashboard',
      width: 800,
      height: 600,
    },
    coverImage: {
      url: PLACEHOLDER_IMAGES.ecommerce.cover,
      alt: 'StyleVault case study cover',
      width: 1920,
      height: 1080,
    },
    galleryImages: [
      {
        url: PLACEHOLDER_IMAGES.ecommerce.cover,
        alt: 'Before and after GA4 dashboard comparison',
        width: 1920,
        height: 1080,
      },
    ],

    // Case Study Content
    overview: 'StyleVault was spending $180K/month on Meta and Google Ads but couldn\'t trust which campaigns were driving real revenue. Their GA4 data showed 23% more revenue than Shopify, Meta Pixel was firing duplicate purchase events, and cross-device attribution was completely broken. The result: they were over-investing in underperforming campaigns and cutting budget from channels that actually worked.',

    problemStatement: 'The marketing team couldn\'t make confident budget decisions because their tracking data was fundamentally broken. GA4 revenue didn\'t reconcile with Shopify. Meta Ads showed inflated conversion counts. Google Ads attribution was incomplete. And nobody knew which of the three platforms to trust.',

    objectives: 'Fix all tracking discrepancies, implement server-side tracking to recover iOS 14+ signal loss, establish GA4 as the single source of truth for performance data, and build attribution reports the team could actually use to optimize ad spend.',

    goals: 'Reconcile GA4 and Shopify revenue within 5%, recover at least 25% of lost conversion signal from iOS users, eliminate duplicate conversion events across all platforms, and provide clear ROAS visibility by campaign.',

    targetAudience: 'Fashion-conscious women aged 25-40 shopping via mobile devices, with 68% of purchases happening on iOS.',

    challenges: [
      'GA4 revenue was 23% higher than Shopify — nobody knew which was correct',
      'Meta Pixel fired duplicate purchase events, inflating conversion counts by 34%',
      'Over 40% of iOS users were invisible to client-side tracking due to ATT restrictions',
      'Google Ads couldn\'t see cross-device conversions, under-reporting performance by 28%',
      'No unified customer ID across platforms — same user counted as multiple customers',
      'Marketing team had lost trust in analytics and was making gut-feel decisions',
    ],

    solution: [
      'Conducted full tracking audit across GA4, GTM, Meta Pixel, Google Ads, and Shopify',
      'Rebuilt data layer with clean, consistent e-commerce event structure',
      'Deployed server-side GTM on a first-party subdomain to bypass ad blockers',
      'Implemented Meta Conversions API with event deduplication to eliminate double-counting',
      'Configured Google Ads Enhanced Conversions using hashed customer data',
      'Set up BigQuery export for long-term attribution analysis and custom reporting',
      'Created Looker Studio dashboards with ROAS by campaign, product, and audience',
    ],

    processSteps: [
      {
        title: '1. Tracking Audit & Root Cause Analysis',
        description: 'We spent the first week mapping every tracking tag, identifying exactly where data was being lost, duplicated, or miscounted. We discovered the Meta Pixel was firing twice per purchase, GA4 was missing Shopify discounts in revenue calculations, and Google Ads had no visibility into mobile app conversions.',
      },
      {
        title: '2. Data Layer & Server-Side Infrastructure',
        description: 'We designed and implemented a clean data layer that pushed consistent e-commerce events across all pages. Then we deployed server-side GTM on track.stylevault.com, configured Meta CAPI, and set up Google Ads Enhanced Conversions with SHA-256 hashed emails.',
      },
      {
        title: '3. Attribution Model Configuration',
        description: 'We configured GA4 data-driven attribution and built custom Looker Studio reports that combined GA4, Meta, Google Ads, and Shopify data into a single unified view. Marketing finally had one dashboard they could trust.',
      },
      {
        title: '4. Validation & Handoff',
        description: 'We ran parallel tracking for two weeks, comparing old vs new setups. Once revenue reconciliation was within 3%, we cut over fully and trained the team on how to read and act on the new reports.',
      },
    ],

    // Results
    metrics: [
      { label: 'ROAS Improvement', value: '2.3X', unit: 'increase' },
      { label: 'Data Accuracy', value: '97%', unit: 'GA4/Shopify match' },
      { label: 'iOS Signal Recovery', value: '+32%', unit: 'conversions' },
      { label: 'Ad Spend Waste Eliminated', value: '$47K', unit: 'per month' },
      { label: 'Revenue Tracking Accuracy', value: '3%', unit: 'variance' },
      { label: 'Duplicate Events Eliminated', value: '100%', unit: 'fixed' },
    ],

    testimonial: {
      quote: 'Before MarTechRise, we were flying blind. We thought our Meta campaigns were crushing it, but we were actually losing money on half of them. Now we know exactly where every dollar goes and what it returns. Our ROAS more than doubled in 8 weeks.',
      author: 'Sarah Chen',
      role: 'Head of Growth, StyleVault',
    },

    // Portfolio Control
    featured: true,
    showInPortfolio: true,
    showInHomepage: true,
    displayOrder: 1,
    publishDate: new Date('2025-01-15'),

    // SEO
    seoTitle: 'E-commerce Attribution Fix: 2.3X ROAS Increase | MarTechRise',
    seoDescription: 'How we fixed broken GA4 tracking and Meta Pixel attribution for a fashion e-commerce brand, recovering $47K/month in wasted ad spend and increasing ROAS by 2.3X.',
    seoKeywords: ['ecommerce tracking fix', 'meta capi implementation', 'ga4 shopify integration', 'roas optimization', 'server-side tracking ecommerce'],

    status: 'published',
  },

  // ─── CASE STUDY 2: FINTECH ────────────────────────────────────────────
  {
    title: 'How Fixing Attribution Increased Qualified Leads by 45% for a Fintech Company',
    slug: 'fintech-attribution-optimization',
    shortSummary: 'Their campaigns were optimized for form fills, not qualified approvals. We rebuilt attribution to track the full funnel and slashed CAC by 62%.',
    description: 'A lending fintech was spending $240K/month on paid search and display, optimizing for form submissions. But their approval rate was only 12%, meaning 88% of leads were wasted spend. We implemented full-funnel tracking from click to approval, trained their campaigns on qualified conversions, and helped them stop paying for users who would never convert.',

    clientName: 'Michael Rodriguez',
    clientCompany: 'ClearPath Lending',
    clientWebsite: 'https://clearpathlending.example.com',
    clientIndustry: 'Fintech',
    clientLogo: {
      url: 'https://via.placeholder.com/200x80/0052CC/ffffff?text=ClearPath',
      alt: 'ClearPath Lending Logo',
      width: 200,
      height: 80,
    },

    projectYear: '2025',
    projectLocation: 'Austin, TX',
    projectDuration: '8 weeks',
    projectUrl: 'https://clearpathlending.example.com',

    tags: ['Fintech', 'Attribution', 'Lead Quality', 'GA4', 'Google Ads', 'CRM Integration'],
    techStack: [
      { name: 'GA4', category: 'Analytics' },
      { name: 'Google Tag Manager', category: 'Tag Management' },
      { name: 'Google Ads', category: 'Ad Platform' },
      { name: 'Salesforce', category: 'CRM' },
      { name: 'Zapier', category: 'Integration' },
      { name: 'Looker Studio', category: 'Reporting' },
    ],

    thumbnail: {
      url: PLACEHOLDER_IMAGES.fintech.thumbnail,
      alt: 'Fintech analytics dashboard',
      width: 800,
      height: 600,
    },
    coverImage: {
      url: PLACEHOLDER_IMAGES.fintech.cover,
      alt: 'ClearPath Lending case study',
      width: 1920,
      height: 1080,
    },
    galleryImages: [],

    overview: 'ClearPath Lending was generating thousands of leads per month, but their approval rate was abysmal. Google Ads was optimized for form submissions, not creditworthy applicants. They were paying $180 per lead, but only 12% passed underwriting. The real cost per qualified customer was over $1,500.',

    problemStatement: 'Marketing and product teams were misaligned. Marketing was measured on lead volume. Product cared about approval rate. Nobody was tracking which traffic sources delivered qualified applicants vs junk leads.',

    objectives: 'Track the complete funnel from ad click through credit approval, feed approval data back to Google Ads for smart bidding, identify which campaigns and keywords drive qualified vs unqualified leads, and reduce cost per approved customer.',

    goals: 'Increase approval rate from 12% to 25%, reduce cost per approved lead by at least 40%, and shift budget away from high-volume/low-quality sources.',

    targetAudience: 'Credit-seeking consumers aged 30-55 with FICO scores above 650, stable income, and low DTI ratios.',

    challenges: [
      'Google Ads was optimized for form fills, not creditworthy applicants',
      'No connection between marketing attribution and CRM approval data',
      'Approval rates varied wildly by traffic source (4% to 31%) but marketing had no visibility',
      'High CPL ($180/lead) made scaling impossible without tanking unit economics',
      'Salesforce held approval/rejection data but it never flowed back to GA4 or Google Ads',
      '6-8 week lag between lead generation and final approval decision',
    ],

    solution: [
      'Built Salesforce → GA4 integration via Measurement Protocol to send approval events',
      'Configured Google Ads offline conversion imports using hashed email matching',
      'Created custom GA4 events for each funnel stage: lead, qualified_lead, approved_loan',
      'Set up conversion value rules in Google Ads based on loan amount and approval likelihood',
      'Implemented lead scoring model in GA4 using UTM parameters and user behavior signals',
      'Built executive dashboard showing cost per approved customer by campaign and keyword',
    ],

    processSteps: [
      {
        title: '1. CRM Integration & Data Pipeline',
        description: 'We connected Salesforce to GA4 using the Measurement Protocol API. Every time a lead was approved or rejected, that outcome was sent back to GA4 with the original client ID and campaign attribution intact.',
      },
      {
        title: '2. Google Ads Offline Conversions',
        description: 'We configured Google Ads to accept offline conversions via hashed email matching. Now when someone applies and gets approved 3 weeks later, Google Ads knows which keyword and ad drove that approval — and adjusts bidding accordingly.',
      },
      {
        title: '3. Attribution Model Rebuild',
        description: 'We rebuilt all attribution reporting around "approved_loan" instead of "form_submit". Marketing could finally see which campaigns were burning money on unqualified traffic.',
      },
      {
        title: '4. Smart Bidding Migration',
        description: 'Once Google Ads had 30 days of approval conversion data, we migrated from manual CPC to Target CPA bidding focused on approved customers. The algorithm immediately started cutting spend on low-quality keywords.',
      },
    ],

    metrics: [
      { label: 'Qualified Leads Increase', value: '45%', unit: 'growth' },
      { label: 'Cost per Approved Customer', value: '-62%', unit: 'reduction' },
      { label: 'Approval Rate', value: '28%', unit: 'from 12%' },
      { label: 'Wasted Ad Spend Eliminated', value: '$89K', unit: 'per month' },
      { label: 'Google Ads ROAS', value: '+3.1X', unit: 'improvement' },
    ],

    testimonial: {
      quote: 'We were hemorrhaging money on leads that would never get approved. MarTechRise showed us exactly which campaigns were driving qualified applicants vs tire-kickers. Within 60 days our CAC dropped by more than half and our approval rate doubled.',
      author: 'Michael Rodriguez',
      role: 'VP of Growth, ClearPath Lending',
    },

    featured: true,
    showInPortfolio: true,
    showInHomepage: true,
    displayOrder: 2,
    publishDate: new Date('2025-02-01'),

    seoTitle: 'Fintech Attribution Fix: 45% More Qualified Leads | MarTechRise',
    seoDescription: 'How full-funnel attribution tracking increased qualified leads by 45% and reduced CAC by 62% for a lending fintech company.',
    seoKeywords: ['fintech attribution', 'crm ga4 integration', 'salesforce google ads', 'lead quality optimization', 'offline conversion tracking'],

    status: 'published',
  },

  // ─── CASE STUDY 3: HEALTHCARE ──────────────────────────────────────────
  {
    title: 'How Unified Patient Data Across Adobe, Tealium & CRM Increased Appointment Conversions by 47%',
    slug: 'healthcare-unified-patient-data',
    shortSummary: 'Fragmented data across web, app, and call center meant they couldn\'t see the full patient journey. We unified everything and unlocked smarter retargeting.',
    description: 'A leading healthcare group had patient touchpoints across website, mobile app, call center, and in-clinic systems — but no unified view. Patients who booked online, called to reschedule, then completed via app were counted as three separate people. We integrated Adobe Analytics, Tealium, and their CRM to stitch the full journey together.',

    clientName: 'Dr. Jennifer Park',
    clientCompany: 'Meridian Health Group',
    clientWebsite: 'https://meridianhealthgroup.example.com',
    clientIndustry: 'Healthcare',
    clientLogo: {
      url: 'https://via.placeholder.com/200x80/00A3A3/ffffff?text=Meridian',
      alt: 'Meridian Health Group Logo',
      width: 200,
      height: 80,
    },

    projectYear: '2025',
    projectLocation: 'Boston, MA',
    projectDuration: '10 weeks',
    projectUrl: 'https://meridianhealthgroup.example.com',

    tags: ['Healthcare', 'Adobe Analytics', 'Tealium', 'Patient Journey', 'CRM Integration', 'Cross-Device Tracking'],
    techStack: [
      { name: 'Adobe Analytics', category: 'Analytics' },
      { name: 'Tealium iQ', category: 'Tag Management' },
      { name: 'Tealium AudienceStream', category: 'CDP' },
      { name: 'Salesforce Health Cloud', category: 'CRM' },
      { name: 'Firebase', category: 'Mobile Analytics' },
      { name: 'Adobe Experience Platform', category: 'CDP' },
    ],

    thumbnail: {
      url: PLACEHOLDER_IMAGES.healthcare.thumbnail,
      alt: 'Healthcare patient journey analytics',
      width: 800,
      height: 600,
    },
    coverImage: {
      url: PLACEHOLDER_IMAGES.healthcare.cover,
      alt: 'Meridian Health Group case study',
      width: 1920,
      height: 1080,
    },
    galleryImages: [],

    overview: 'Meridian Health Group operates 47 clinics across the Northeast. Patients can book appointments via website, mobile app, or phone. But each channel lived in a separate data silo. Marketing couldn\'t retarget incomplete bookings. Analytics couldn\'t measure cross-device journeys. And the call center had no idea if a caller had already started booking online.',

    problemStatement: 'The patient journey was fragmented across 5+ touchpoints with no unified identity. Marketing was sending appointment reminders to people who had already booked. Analytics under-counted conversions by 34% because cross-device journeys weren\'t stitched. And retargeting was a mess.',

    objectives: 'Unify patient identity across web, app, call center, and in-clinic systems. Track the complete journey from first website visit through appointment completion. Enable smarter retargeting based on where patients drop off.',

    goals: 'Reduce appointment booking abandonment by 30%, increase online booking completion rate, eliminate duplicate patient records, and enable personalized follow-up based on patient journey stage.',

    targetAudience: 'Health-conscious adults aged 35-65 seeking primary care, specialist consultations, and preventive health services.',

    challenges: [
      'Web and app analytics were completely siloed — couldn\'t track cross-device journeys',
      'Call center bookings had no digital attribution — marketing got zero credit',
      'Patient identity was fragmented: same person had 3-5 different IDs across systems',
      'Retargeting campaigns were blind to offline behavior (calls, in-clinic visits)',
      'Appointment confirmation emails were sent to patients who had already cancelled',
      'No way to measure the impact of content (blog posts, symptom checkers) on appointments',
    ],

    solution: [
      'Implemented Tealium AudienceStream as a customer data platform to unify patient identity',
      'Built bidirectional sync between Adobe Analytics, Tealium, Salesforce Health Cloud, and Firebase',
      'Created persistent patient ID using hashed email/phone as the stitching key',
      'Configured event forwarding to send web/app events to Salesforce in real-time',
      'Set up cross-device journey reporting in Adobe Analytics using AudienceStream visitor profiles',
      'Built automated workflows to trigger abandoned booking emails based on Tealium audience rules',
    ],

    processSteps: [
      {
        title: '1. Identity Resolution Strategy',
        description: 'We designed a persistent patient ID strategy using hashed email and phone number. Tealium AudienceStream became the source of truth for visitor/patient identity stitching.',
      },
      {
        title: '2. Data Integration & Event Forwarding',
        description: 'We connected Adobe Analytics, Firebase, and Salesforce Health Cloud to Tealium. Now every touchpoint — web visit, app interaction, phone call, clinic check-in — is tied to a single patient profile.',
      },
      {
        title: '3. Cross-Device Journey Mapping',
        description: 'We configured Adobe Analytics to track full patient journeys across devices and channels. Marketing could finally see that 43% of online bookings started on mobile but completed on desktop.',
      },
      {
        title: '4. Retargeting & Automation',
        description: 'We built Tealium audiences for "appointment abandoned" and "booking incomplete" and connected them to email, SMS, and paid media retargeting. Conversion rates jumped immediately.',
      },
    ],

    metrics: [
      { label: 'Appointment Conversions', value: '+47%', unit: 'increase' },
      { label: 'Cross-Device Journeys Tracked', value: '78%', unit: 'visibility' },
      { label: 'Booking Abandonment', value: '-34%', unit: 'reduction' },
      { label: 'Duplicate Patient Records', value: '-89%', unit: 'eliminated' },
      { label: 'Online Booking Completion Rate', value: '+41%', unit: 'increase' },
    ],

    testimonial: {
      quote: 'We finally have a complete view of how patients interact with us across every channel. The impact on our marketing efficiency was immediate — we stopped wasting money on people who had already booked and started recovering appointments that would have been lost.',
      author: 'Dr. Jennifer Park',
      role: 'Chief Digital Officer, Meridian Health Group',
    },

    featured: true,
    showInPortfolio: true,
    showInHomepage: true,
    displayOrder: 3,
    publishDate: new Date('2025-02-15'),

    seoTitle: 'Healthcare Patient Journey Tracking: 47% Conversion Increase | MarTechRise',
    seoDescription: 'How unified patient data across Adobe Analytics, Tealium, and CRM increased appointment conversions by 47% for a leading healthcare group.',
    seoKeywords: ['healthcare analytics', 'patient journey tracking', 'adobe tealium integration', 'cross-device healthcare', 'patient data platform'],

    status: 'published',
  },

  // ─── CASE STUDY 4: TRAVEL PLATFORM 1 ───────────────────────────────────
  {
    title: 'How Unifying Cross-Channel Traveler Data Increased Bookings by 41% for a Travel Platform',
    slug: 'travel-cross-channel-unification',
    shortSummary: 'Checkout abandonment was 73% and retargeting was broken. We unified their data and built smart recovery flows.',
    description: 'An online travel platform was losing 73% of bookings at checkout. Users would browse on mobile, abandon on desktop, and never return. We unified their tracking, implemented cross-device retargeting, and built automated recovery campaigns that brought travelers back.',

    clientName: 'Amanda Foster',
    clientCompany: 'WanderWise Travel',
    clientWebsite: 'https://wanderwise.example.com',
    clientIndustry: 'Travel & Hospitality',
    clientLogo: {
      url: 'https://via.placeholder.com/200x80/FF6B35/ffffff?text=WanderWise',
      alt: 'WanderWise Travel Logo',
      width: 200,
      height: 80,
    },

    projectYear: '2025',
    projectLocation: 'Seattle, WA',
    projectDuration: '7 weeks',
    projectUrl: 'https://wanderwise.example.com',

    tags: ['Travel', 'Cross-Device Tracking', 'Checkout Abandonment', 'Retargeting', 'GA4', 'Customer Data Platform'],
    techStack: [
      { name: 'GA4', category: 'Analytics' },
      { name: 'Google Tag Manager', category: 'Tag Management' },
      { name: 'Segment', category: 'CDP' },
      { name: 'Braze', category: 'Marketing Automation' },
      { name: 'Google Ads', category: 'Ad Platform' },
      { name: 'Meta Ads', category: 'Ad Platform' },
    ],

    thumbnail: {
      url: PLACEHOLDER_IMAGES.travel1.thumbnail,
      alt: 'Travel booking analytics',
      width: 800,
      height: 600,
    },
    coverImage: {
      url: PLACEHOLDER_IMAGES.travel1.cover,
      alt: 'WanderWise Travel case study',
      width: 1920,
      height: 1080,
    },
    galleryImages: [],

    overview: 'WanderWise had a beautiful booking experience but terrible conversion rates. 73% of users abandoned at checkout, and retargeting only recovered 8% of them. The problem: travelers would research on mobile during their commute, start booking on desktop at home, then disappear. Each device looked like a different person.',

    problemStatement: 'Checkout abandonment was destroying revenue, but the company couldn\'t effectively retarget abandoners because cross-device journeys weren\'t tracked. Marketing was sending generic "come back" emails with no context about what the user was booking.',

    objectives: 'Track complete booking journeys across devices, recover abandoned bookings with personalized retargeting, and reduce checkout abandonment rate.',

    goals: 'Reduce checkout abandonment from 73% to under 50%, increase booking completion rate by 35%, and improve retargeting conversion rate from 8% to 25%.',

    targetAudience: 'Leisure travelers aged 28-55 booking domestic and international trips 30-90 days in advance.',

    challenges: [
      '73% checkout abandonment rate — astronomical even for travel industry',
      'Cross-device journeys weren\'t tracked — mobile browse → desktop abandon looked like two people',
      'Retargeting emails had no context: "Finish your booking" with no mention of destination or dates',
      'No visibility into which abandonment stage (payment, dates, travelers) was the biggest leak',
      'Retargeting ads couldn\'t show the exact trip the user had configured',
      'Email and SMS recovery campaigns weren\'t triggered in real-time',
    ],

    solution: [
      'Implemented Segment CDP to unify user identity across mobile, desktop, and app',
      'Built persistent traveler profiles using email, device ID, and login-based stitching',
      'Configured GA4 cross-device reporting and funnel analysis',
      'Created granular checkout abandonment events for each drop-off point',
      'Integrated Braze for real-time abandoned booking email/SMS with dynamic content',
      'Set up Google and Meta dynamic retargeting showing exact abandoned trip details',
    ],

    processSteps: [
      {
        title: '1. User Identity & Cross-Device Tracking',
        description: 'We implemented Segment CDP to create unified user profiles. Now when someone browses on mobile and abandons on desktop, we know it\'s the same person and can retarget accordingly.',
      },
      {
        title: '2. Checkout Funnel Instrumentation',
        description: 'We rebuilt checkout tracking with granular events for every step: search, select_flight, add_travelers, enter_payment, purchase. Now we know exactly where users drop off.',
      },
      {
        title: '3. Dynamic Retargeting Setup',
        description: 'We connected abandoned booking data to Braze and ad platforms. Users now get personalized "Your Seattle trip is waiting" emails with their exact dates, flight, and hotel.',
      },
      {
        title: '4. Optimization & Testing',
        description: 'We A/B tested email timing, discount offers, and messaging. "Your trip expires in 24 hours" with a 10% discount recovered 34% more bookings than generic reminders.',
      },
    ],

    metrics: [
      { label: 'Booking Increase', value: '+41%', unit: 'growth' },
      { label: 'Checkout Abandonment', value: '-38%', unit: 'reduction' },
      { label: 'Retargeting Conversion Rate', value: '27%', unit: 'from 8%' },
      { label: 'Cross-Device Journey Visibility', value: '84%', unit: 'tracked' },
      { label: 'Revenue Recovery', value: '$1.2M', unit: 'per month' },
    ],

    testimonial: {
      quote: 'Our abandonment rate was killing us. Now we can see the full booking journey across devices and recover trips that would have been lost forever. The revenue impact in the first 60 days paid for the entire project.',
      author: 'Amanda Foster',
      role: 'VP of Product, WanderWise Travel',
    },

    featured: false,
    showInPortfolio: true,
    showInHomepage: false,
    displayOrder: 4,
    publishDate: new Date('2025-03-01'),

    seoTitle: 'Travel Booking Optimization: 41% Increase | MarTechRise',
    seoDescription: 'How cross-device tracking and smart retargeting increased bookings by 41% and recovered $1.2M/month in abandoned travel purchases.',
    seoKeywords: ['travel analytics', 'booking abandonment', 'cross-device tracking travel', 'retargeting optimization', 'segment cdp'],

    status: 'published',
  },

  // ─── CASE STUDY 5: TRAVEL PLATFORM 2 (ADOBE) ───────────────────────────
  {
    title: 'How Leveraging Adobe Experience Platform Increased Bookings by 46% for a Travel Brand',
    slug: 'travel-adobe-experience-platform',
    shortSummary: 'Generic marketing and poor segmentation meant they were treating all travelers the same. Adobe AEP unlocked real-time personalization.',
    description: 'A premium travel company had rich customer data locked in silos. Website behavior, booking history, loyalty status, and email engagement never talked to each other. We implemented Adobe Experience Platform to create unified customer profiles and enable real-time personalization across every touchpoint.',

    clientName: 'David Zhang',
    clientCompany: 'LuxeTravel Co',
    clientWebsite: 'https://luxetravel.example.com',
    clientIndustry: 'Luxury Travel',
    clientLogo: {
      url: 'https://via.placeholder.com/200x80/2C3E50/ffffff?text=LuxeTravel',
      alt: 'LuxeTravel Co Logo',
      width: 200,
      height: 80,
    },

    projectYear: '2025',
    projectLocation: 'San Francisco, CA',
    projectDuration: '12 weeks',
    projectUrl: 'https://luxetravel.example.com',

    tags: ['Travel', 'Adobe Experience Platform', 'Personalization', 'Customer Data Platform', 'Real-Time Marketing'],
    techStack: [
      { name: 'Adobe Experience Platform', category: 'CDP' },
      { name: 'Adobe Analytics', category: 'Analytics' },
      { name: 'Adobe Target', category: 'Personalization' },
      { name: 'Adobe Journey Optimizer', category: 'Marketing Automation' },
      { name: 'Snowflake', category: 'Data Warehouse' },
    ],

    thumbnail: {
      url: PLACEHOLDER_IMAGES.travel2.thumbnail,
      alt: 'Premium travel analytics',
      width: 800,
      height: 600,
    },
    coverImage: {
      url: PLACEHOLDER_IMAGES.travel2.cover,
      alt: 'LuxeTravel case study',
      width: 1920,
      height: 1080,
    },
    galleryImages: [],

    overview: 'LuxeTravel caters to high-net-worth travelers booking $15K+ trips. But their website treated everyone the same. First-time visitors saw the same content as loyalty members. Repeat bookers got generic newsletters. And high-value segments couldn\'t be activated in real-time.',

    problemStatement: 'Customer data lived in 7 different systems with no unified view. Marketing couldn\'t personalize experiences. Website couldn\'t show relevant offers based on past behavior. And real-time activation was impossible.',

    objectives: 'Unify customer data into a single platform, enable real-time personalization on website and email, activate high-value segments instantly, and measure the revenue impact of personalized experiences.',

    goals: 'Increase repeat booking rate by 40%, improve on-site conversion rate for loyalty members, and enable same-day campaign activation for time-sensitive offers.',

    targetAudience: 'Affluent travelers aged 40-65 with household income over $250K, booking luxury vacations and multi-destination trips.',

    challenges: [
      'Customer data scattered across website, CRM, booking system, loyalty platform, email, and data warehouse',
      'No unified customer profile — same person had 5+ IDs',
      'Personalization was manual and batch-based, taking weeks to implement',
      'High-value segments like "booked Europe 3+ times" couldn\'t be activated in real-time',
      'Email campaigns sent to everyone regardless of website behavior or loyalty status',
      'No way to measure incremental revenue impact of personalized vs generic experiences',
    ],

    solution: [
      'Implemented Adobe Experience Platform (AEP) as the unified customer data platform',
      'Built real-time customer profiles combining web, booking, loyalty, and email data',
      'Configured Adobe Target for on-site personalization based on AEP segments',
      'Set up Adobe Journey Optimizer for triggered campaigns based on real-time behavior',
      'Created "VIP traveler" and "high-intent browser" segments with instant activation',
      'Built attribution reporting to measure lift from personalized experiences',
    ],

    processSteps: [
      {
        title: '1. Data Architecture & AEP Implementation',
        description: 'We connected all data sources to AEP: website events, booking transactions, loyalty platform, email engagement, and customer service interactions. Real-time customer profiles were built from 7 previously siloed systems.',
      },
      {
        title: '2. Segmentation & Audience Building',
        description: 'We created 23 high-value segments in AEP: repeat bookers, high LTV customers, abandoners with past purchases, loyalty tier groups, and destination-based cohorts. All segments updated in real-time.',
      },
      {
        title: '3. Personalization Activation',
        description: 'We configured Adobe Target to show personalized homepage content, offers, and destination recommendations based on AEP segments. VIP customers saw exclusive packages. Past Europe travelers got Mediterranean offers.',
      },
      {
        title: '4. Journey Orchestration',
        description: 'We built automated journeys in Adobe Journey Optimizer: post-booking upsells, abandoned booking recovery, loyalty milestone celebrations, and destination-specific inspiration emails.',
      },
    ],

    metrics: [
      { label: 'Booking Increase', value: '+46%', unit: 'growth' },
      { label: 'Repeat Customer Rate', value: '+52%', unit: 'increase' },
      { label: 'Personalization Lift', value: '+38%', unit: 'conversion improvement' },
      { label: 'Customer Profile Unification', value: '94%', unit: 'match rate' },
      { label: 'Real-Time Segment Activation', value: '<2min', unit: 'latency' },
    ],

    testimonial: {
      quote: 'Adobe Experience Platform transformed how we engage with our travelers. We went from batch campaigns that took weeks to real-time personalization that happens instantly. Our most valuable customers now get the VIP treatment they deserve at every touchpoint.',
      author: 'David Zhang',
      role: 'Chief Marketing Officer, LuxeTravel Co',
    },

    featured: false,
    showInPortfolio: true,
    showInHomepage: false,
    displayOrder: 5,
    publishDate: new Date('2025-03-15'),

    seoTitle: 'Adobe Experience Platform Travel: 46% Booking Increase | MarTechRise',
    seoDescription: 'How Adobe Experience Platform enabled real-time personalization and increased bookings by 46% for a luxury travel brand.',
    seoKeywords: ['adobe experience platform', 'travel personalization', 'customer data platform travel', 'real-time marketing', 'adobe aep'],

    status: 'published',
  },

  // ─── CASE STUDY 6: LIFE SCIENCES ───────────────────────────────────────
  {
    title: 'How Real-Time Patient Journey Tracking Increased Trial Conversions by 39% for a Life Sciences Company',
    slug: 'life-sciences-patient-journey',
    shortSummary: 'Clinical trial enrollment was stuck at 18%. We mapped the full patient journey and identified invisible drop-off points.',
    description: 'A global life sciences company was struggling to enroll patients in clinical trials. Their website got traffic, but enrollment conversion was only 18%. We implemented real-time journey tracking and discovered patients were dropping off at steps the company didn\'t even know existed.',

    clientName: 'Dr. Rachel Morrison',
    clientCompany: 'NovaCure Therapeutics',
    clientWebsite: 'https://novacure.example.com',
    clientIndustry: 'Life Sciences',
    clientLogo: {
      url: 'https://via.placeholder.com/200x80/8E44AD/ffffff?text=NovaCure',
      alt: 'NovaCure Therapeutics Logo',
      width: 200,
      height: 80,
    },

    projectYear: '2025',
    projectLocation: 'Cambridge, MA',
    projectDuration: '9 weeks',
    projectUrl: 'https://novacure.example.com',

    tags: ['Life Sciences', 'Clinical Trials', 'Patient Journey', 'Healthcare Analytics', 'Conversion Optimization'],
    techStack: [
      { name: 'Adobe Analytics', category: 'Analytics' },
      { name: 'Tealium iQ', category: 'Tag Management' },
      { name: 'Tealium EventStream', category: 'CDP' },
      { name: 'Veeva CRM', category: 'CRM' },
      { name: 'Salesforce', category: 'Patient Management' },
    ],

    thumbnail: {
      url: PLACEHOLDER_IMAGES.lifesciences.thumbnail,
      alt: 'Life sciences patient journey analytics',
      width: 800,
      height: 600,
    },
    coverImage: {
      url: PLACEHOLDER_IMAGES.lifesciences.cover,
      alt: 'NovaCure Therapeutics case study',
      width: 1920,
      height: 1080,
    },
    galleryImages: [],

    overview: 'NovaCure was running 14 active clinical trials but struggling to hit enrollment targets. Their trial finder website got 47K monthly visitors, but only 18% completed the eligibility screener. Patient recruitment costs were $12K per enrolled participant — unsustainable.',

    problemStatement: 'The patient journey from website visit to trial enrollment was a black box. Analytics could see page views but not behavior within the eligibility screener or drop-off reasons. And there was no connection between digital engagement and actual enrollment.',

    objectives: 'Map the complete patient journey from awareness through enrollment, identify where patients drop off and why, measure time-to-enrollment by traffic source, and reduce cost per enrolled patient.',

    goals: 'Increase eligibility screener completion rate to 40%, reduce time-to-enrollment by 25%, and cut patient acquisition cost in half.',

    targetAudience: 'Patients with specific medical conditions seeking clinical trial participation, typically diagnosed within the past 12 months.',

    challenges: [
      'Eligibility screener was a black box — couldn\'t track which questions caused abandonment',
      'No real-time alerts when high-intent patients dropped off mid-screener',
      'Patient journey took 21-45 days from first visit to enrollment, but tracking only lasted 30 days',
      'Veeva CRM held enrollment data but wasn\'t connected to web analytics',
      'Couldn\'t measure which content (blog posts, condition info) drove qualified vs unqualified traffic',
      'Retargeting was blind to screener progress — everyone got the same "Learn about trials" ads',
    ],

    solution: [
      'Rebuilt eligibility screener with granular event tracking for every question and drop-off point',
      'Implemented Tealium EventStream to capture real-time patient behavior and route to multiple systems',
      'Connected Veeva CRM enrollment data back to Adobe Analytics via Measurement Protocol',
      'Built patient journey reports showing time-to-enrollment and conversion rates by source',
      'Set up automated alerts for "high-intent abandoners" triggering immediate outreach',
      'Created retargeting audiences based on screener progress and condition relevance',
    ],

    processSteps: [
      {
        title: '1. Screener Instrumentation',
        description: 'We rebuilt the eligibility screener with detailed event tracking. Every question view, answer, validation error, and abandonment was captured. We immediately saw that 41% of patients dropped off at the "upload medical records" step.',
      },
      {
        title: '2. Real-Time Journey Tracking',
        description: 'We implemented Tealium EventStream to track patient behavior in real-time and trigger immediate follow-up for high-intent abandoners. If someone completed 80% of the screener but didn\'t submit, patient recruitment got an alert within 2 minutes.',
      },
      {
        title: '3. CRM Integration & Attribution',
        description: 'We connected Veeva enrollment data back to Adobe Analytics. Now when a patient enrolled 6 weeks after their first website visit, that conversion was attributed to the original traffic source and content.',
      },
      {
        title: '4. Drop-Off Analysis & Optimization',
        description: 'We analyzed every abandonment point and worked with the clinical team to simplify requirements. The "upload medical records" step became optional for initial screening, and completion rates jumped 34%.',
      },
    ],

    metrics: [
      { label: 'Trial Enrollment Conversions', value: '+39%', unit: 'increase' },
      { label: 'Screener Completion Rate', value: '43%', unit: 'from 18%' },
      { label: 'Time-to-Enrollment', value: '-31%', unit: 'reduction' },
      { label: 'Cost per Enrolled Patient', value: '-54%', unit: 'from $12K to $5.5K' },
      { label: 'Drop-Off Recovery', value: '27%', unit: 'via real-time alerts' },
    ],

    testimonial: {
      quote: 'We had no idea patients were abandoning at the medical records upload step until MarTechRise instrumented the full journey. The real-time alerts alone recovered 27% of abandoners who would have been lost forever. Our enrollment targets went from impossible to achievable.',
      author: 'Dr. Rachel Morrison',
      role: 'Head of Patient Recruitment, NovaCure Therapeutics',
    },

    featured: false,
    showInPortfolio: true,
    showInHomepage: false,
    displayOrder: 6,
    publishDate: new Date('2025-04-01'),

    seoTitle: 'Clinical Trial Patient Journey: 39% Enrollment Increase | MarTechRise',
    seoDescription: 'How real-time patient journey tracking increased clinical trial enrollments by 39% and reduced acquisition cost by 54% for a life sciences company.',
    seoKeywords: ['clinical trial analytics', 'patient journey tracking', 'life sciences analytics', 'trial enrollment optimization', 'healthcare conversion tracking'],

    status: 'published',
  },
]

async function seedCaseStudies() {
  try {
    console.log('🔌 Connecting to MongoDB...')
    await dbConnect()

    console.log('🗑️  Clearing existing projects...')
    await Project.deleteMany({})

    console.log('📁 Finding or creating categories...')

    // Create/find categories for the case studies
    const categories = [
      { name: 'E-commerce', slug: 'ecommerce' },
      { name: 'Fintech', slug: 'fintech' },
      { name: 'Healthcare', slug: 'healthcare' },
      { name: 'Travel & Hospitality', slug: 'travel' },
      { name: 'Life Sciences', slug: 'life-sciences' },
    ]

    const categoryMap: Record<string, any> = {}

    for (const cat of categories) {
      let category = await Category.findOne({ slug: cat.slug })
      if (!category) {
        category = await Category.create({
          name: cat.name,
          slug: cat.slug,
          status: 'active',
        })
        console.log(`   ✅ Created category: ${cat.name}`)
      } else {
        console.log(`   ℹ️  Category exists: ${cat.name}`)
      }
      categoryMap[cat.slug] = category._id
    }

    console.log('\n📝 Seeding case studies...\n')

    // Map case studies to their category IDs
    const projectsToInsert = caseStudiesData.map((project) => {
      let categoryId

      // Assign category based on slug
      if (project.slug.includes('ecommerce')) {
        categoryId = categoryMap['ecommerce']
      } else if (project.slug.includes('fintech')) {
        categoryId = categoryMap['fintech']
      } else if (project.slug.includes('healthcare') || project.slug.includes('patient')) {
        categoryId = categoryMap['healthcare']
      } else if (project.slug.includes('travel')) {
        categoryId = categoryMap['travel']
      } else if (project.slug.includes('life-sciences')) {
        categoryId = categoryMap['life-sciences']
      }

      return {
        ...project,
        categoryId,
      }
    })

    const insertedProjects = await Project.insertMany(projectsToInsert)

    console.log(`✅ Successfully seeded ${insertedProjects.length} case studies:\n`)
    insertedProjects.forEach((project) => {
      console.log(`   📄 ${project.title}`)
      console.log(`      Slug: ${project.slug}`)
      console.log(`      Status: ${project.status}`)
      console.log(`      Featured: ${project.featured ? 'Yes' : 'No'}`)
      console.log('')
    })

    console.log('✨ Seed complete!')
    console.log('\n📊 Summary:')
    console.log(`   Total case studies: ${insertedProjects.length}`)
    console.log(`   Featured: ${insertedProjects.filter((p) => p.featured).length}`)
    console.log(`   Published: ${insertedProjects.filter((p) => p.status === 'published').length}`)
    console.log(`   Categories: ${categories.length}`)

    process.exit(0)
  } catch (error) {
    console.error('❌ Seed failed:', error)
    process.exit(1)
  }
}

seedCaseStudies()
