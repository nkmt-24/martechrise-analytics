import { Metadata } from 'next';
import AuditPageClient from "./AuditPageClient";
import { BreadcrumbStructuredData, OrganizationStructuredData } from '@/components/seo/StructuredData';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: "Free Analytics Technical Audit | MarTechRise",
    description: "Get a comprehensive free technical audit of your digital analytics implementation. We analyze your GA4, Adobe Analytics, GTM setup, server-side tracking, and conversion tracking for gaps and opportunities.",
    keywords: [
        'free analytics audit',
        'GA4 audit',
        'analytics health check',
        'tracking audit',
        'GTM audit free',
        'analytics implementation review',
    ],
    url: '/audit',
});

export default function AuditPage() {
    return (
        <>
            <OrganizationStructuredData />
            <BreadcrumbStructuredData items={[
                { name: 'Home', item: '/' },
                { name: 'Free Audit', item: '/audit' },
            ]} />
            <AuditPageClient />
        </>
    );
}
