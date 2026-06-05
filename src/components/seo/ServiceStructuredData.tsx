import { siteConfig } from '@/config/site';

interface ServiceProps {
  name: string;
  description: string;
  url: string;
  provider?: string;
  areaServed?: string[];
  serviceType?: string;
}

export function ServiceStructuredData({
  name,
  description,
  url,
  provider = siteConfig.organization.name,
  areaServed = ['US', 'Global'],
  serviceType = 'Professional Service',
}: ServiceProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name,
    description,
    provider: {
      '@type': 'Organization',
      name: provider,
      url: baseUrl,
    },
    areaServed: areaServed.map(area => ({
      '@type': 'Country',
      name: area,
    })),
    serviceType,
    url: url.startsWith('http') ? url : `${baseUrl}${url}`,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

interface ServicesListProps {
  services: Array<{
    name: string;
    description: string;
    url: string;
  }>;
}

export function ServicesListStructuredData({ services }: ServicesListProps) {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

  const data = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: services.map((service, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      item: {
        '@type': 'Service',
        name: service.name,
        description: service.description,
        url: service.url.startsWith('http') ? service.url : `${baseUrl}${service.url}`,
        provider: {
          '@type': 'Organization',
          name: siteConfig.organization.name,
        },
      },
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
