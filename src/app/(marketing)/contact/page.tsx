import { Metadata } from 'next';
import ContactPageClient from "./ContactPageClient";
import { BreadcrumbStructuredData, OrganizationStructuredData } from '@/components/seo/StructuredData';
import { ContactPageStructuredData } from '@/components/seo/ContactStructuredData';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: "Contact MarTechRise | Enterprise Digital Analytics Consulting",
    description: "Ready to fix your tracking architecture? Contact our certified GA4, Adobe Analytics, and CDP implementation experts for a custom enterprise audit. US & Global support available.",
    keywords: [
        'contact analytics consultant',
        'GA4 implementation quote',
        'analytics audit request',
        'server-side tracking consultation',
    ],
    url: '/contact',
});

export default function ContactPage() {
    return (
        <>
            <OrganizationStructuredData />
            <BreadcrumbStructuredData items={[
                { name: 'Home', item: '/' },
                { name: 'Contact', item: '/contact' },
            ]} />
            <ContactPageStructuredData />
            <ContactPageClient />
        </>
    );
}
