import { siteConfig } from '@/config/site';

export function WebSiteStructuredData() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: siteConfig.name,
    alternateName: siteConfig.organization.name,
    url: baseUrl,
    description: siteConfig.seo.defaultDescription,
    publisher: {
      '@type': 'Organization',
      name: siteConfig.organization.name,
      logo: {
        '@type': 'ImageObject',
        url: `${baseUrl}${siteConfig.organization.logo}`,
      },
    },
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${baseUrl}/blog?search={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface LocalBusinessProps {
  name?: string;
  description?: string;
}

export function LocalBusinessStructuredData({
  name = siteConfig.organization.name,
  description = siteConfig.organization.description,
}: LocalBusinessProps = {}) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    '@id': `${baseUrl}/#organization`,
    name,
    description,
    url: baseUrl,
    logo: `${baseUrl}${siteConfig.organization.logo}`,
    image: `${baseUrl}${siteConfig.organization.logo}`,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.organization.address.addressLocality,
      addressRegion: siteConfig.organization.address.addressRegion,
      addressCountry: siteConfig.organization.address.addressCountry,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '13.0827',
      longitude: '80.2707',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    sameAs: [
      siteConfig.social.linkedin,
      siteConfig.social.twitter,
      siteConfig.social.github,
    ].filter(Boolean),
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      reviewCount: '47',
      bestRating: '5',
      worstRating: '1',
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
