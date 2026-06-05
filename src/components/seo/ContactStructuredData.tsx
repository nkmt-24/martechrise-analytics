import { siteConfig } from '@/config/site';

export function ContactPageStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    name: 'Contact MarTechRise',
    description: 'Get in touch with MarTechRise for enterprise analytics consulting',
    url: `${baseUrl}/contact`,
    mainEntity: {
      '@type': 'Organization',
      name: siteConfig.organization.name,
      url: baseUrl,
      contactPoint: [
        {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          contactType: 'customer service',
          email: siteConfig.email,
          areaServed: ['US', 'IN', 'Global'],
          availableLanguage: ['English'],
        },
        {
          '@type': 'ContactPoint',
          telephone: siteConfig.phone,
          contactType: 'sales',
          email: siteConfig.email,
          areaServed: ['US', 'IN', 'Global'],
          availableLanguage: ['English'],
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
