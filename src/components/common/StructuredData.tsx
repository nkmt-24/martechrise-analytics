import React from 'react';

interface StructuredDataProps {
    type?: 'Organization' | 'ProfessionalService' | 'WebSite' | 'Service' | 'FAQPage';
    data?: any;
}

export default function StructuredData({ type, data }: StructuredDataProps) {
    const baseUrl = 'https://martechrise.ai';

    // 1. Global Organization & ProfessionalService (US Focus)
    const orgSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "Organization",
                "@id": `${baseUrl}/#organization`,
                "name": "MarTechRise.ai",
                "url": baseUrl,
                "logo": {
                    "@type": "ImageObject",
                    "url": `${baseUrl}/logo.png`,
                    "width": 112,
                    "height": 28
                },
                "sameAs": [
                    "https://linkedin.com/company/martechrise"
                ],
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+91-6382915027",
                    "contactType": "sales",
                    "areaServed": "US",
                    "availableLanguage": ["en"]
                }
            },
            {
                "@type": "ProfessionalService",
                "@id": `${baseUrl}/#service`,
                "name": "MarTechRise.ai",
                "url": baseUrl,
                "image": `${baseUrl}/og-image.jpg`,
                "priceRange": "$$$",
                "address": {
                    "@type": "PostalAddress",
                    "addressLocality": "Chennai",
                    "addressRegion": "TN",
                    "addressCountry": "IN"
                },
                "serviceArea": [
                    { "@type": "Country", "name": "United States" },
                    { "@type": "Country", "name": "United Kingdom" },
                    { "@type": "Country", "name": "Canada" }
                ],
                "description": "Technical digital analytics architects specializing in GA4, Adobe Analytics, and server-side tracking for US enterprise clients."
            }
        ]
    };

    // 2. WebSite with Search Action
    const websiteSchema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        "@id": `${baseUrl}/#website`,
        "url": baseUrl,
        "name": "MarTechRise.ai",
        "publisher": { "@id": `${baseUrl}/#organization` },
        "potentialAction": {
            "@type": "SearchAction",
            "target": `${baseUrl}/search?q={search_term_string}`,
            "query-input": "required name=search_term_string"
        }
    };

    // 3. BreadcrumbList (Global)
    const breadcrumbSchema = {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
            {
                "@type": "ListItem",
                "position": 1,
                "name": "Home",
                "item": baseUrl
            },
            {
                "@type": "ListItem",
                "position": 2,
                "name": "Services",
                "item": `${baseUrl}/services`
            }
        ]
    };

    const renderSchema = () => {
        if (!type) {
            return (
                <>
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
                    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
                </>
            );
        }

        if (type && data) {
            return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
        }

        return null;
    };

    return renderSchema();
}
