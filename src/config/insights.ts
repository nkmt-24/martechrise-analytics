import {
    ShoppingCart,
    Landmark,
    HeartPulse,
    Plane,
    Shield,
    FlaskConical,
} from "lucide-react"

export const bottomTags = [
    'Server-Side Tracking',
    'Google Analytics 4',
    'Meta Conversions API',
    'Adobe Analytics',
    'Tealium Tag Management',
]

export const tabs = [
    { id: 'ecommerce',    label: 'E-Commerce',    icon: ShoppingCart },
    { id: 'finance',      label: 'Finance (BFSI)', icon: Landmark },
    { id: 'healthcare',   label: 'Healthcare',     icon: HeartPulse },
    { id: 'travel',       label: 'Travel',         icon: Plane },
    { id: 'insurance',    label: 'Insurance',      icon: Shield },
    { id: 'lifesciences', label: 'Life Sciences',  icon: FlaskConical },
]

export const contentMap: Record<string, {
    heading: string
    buttonText: string
    image: string
    stats: { heading: string; description: string }[]
}> = {
    ecommerce: {
        heading: 'Track Revenue, Not Just Traffic',
        buttonText: 'See E-Commerce Solutions',
        image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80',
        stats: [
            {
                heading: 'Key Use Cases',
                description: 'Purchase tracking, cart abandonment analysis, product performance measurement, and cross-channel attribution for high-volume stores.',
            },
            {
                heading: 'Business Impact',
                description: 'Improve ROAS and recover lost conversions with server-side pixel tracking and accurate checkout funnel data.',
            },
        ],
    },
    finance: {
        heading: 'Analytics That Balances Accuracy & Compliance',
        buttonText: 'See BFSI Solutions',
        image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
        stats: [
            {
                heading: 'Key Use Cases',
                description: 'Lead-to-application tracking, secure data collection, funnel visibility, and attribution across complex financial journeys.',
            },
            {
                heading: 'Business Impact',
                description: 'Make reliable marketing decisions in regulated environments with privacy-compliant server-side data pipelines.',
            },
        ],
    },
    healthcare: {
        heading: 'Privacy-First Analytics Without Losing Insights',
        buttonText: 'See Healthcare Solutions',
        image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80',
        stats: [
            {
                heading: 'Key Use Cases',
                description: 'Consent-based tracking, appointment funnel monitoring, patient journey mapping, and HIPAA-aligned privacy compliance.',
            },
            {
                heading: 'Business Impact',
                description: 'Gain actionable insights while meeting strict compliance requirements through purpose-built data architecture.',
            },
        ],
    },
    travel: {
        heading: 'Optimize Complex Booking Journeys',
        buttonText: 'See Travel Solutions',
        image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
        stats: [
            {
                heading: 'Key Use Cases',
                description: 'Booking funnel tracking, drop-off analysis, multi-touch journey attribution, and campaign performance insights.',
            },
            {
                heading: 'Business Impact',
                description: 'Increase booking conversions and reduce abandonment with full-funnel visibility across every touchpoint.',
            },
        ],
    },
    insurance: {
        heading: 'Track Intent Across Long Customer Journeys',
        buttonText: 'See Insurance Solutions',
        image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
        stats: [
            {
                heading: 'Key Use Cases',
                description: 'Quote-to-policy tracking, lead quality measurement, multi-channel attribution, and conversion funnel analysis.',
            },
            {
                heading: 'Business Impact',
                description: 'Improve conversion rates by understanding where intent drops off across extended consideration cycles.',
            },
        ],
    },
    lifesciences: {
        heading: 'Structured Data for Complex Ecosystems',
        buttonText: 'See Life Sciences Solutions',
        image: 'https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80',
        stats: [
            {
                heading: 'Key Use Cases',
                description: 'Stakeholder engagement tracking, compliance-aligned data collection, CRM data integration, and cross-platform reporting.',
            },
            {
                heading: 'Business Impact',
                description: 'Gain better visibility across channels while maintaining the data integrity required in regulated scientific environments.',
            },
        ],
    },
}
