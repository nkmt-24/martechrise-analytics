import React from 'react';
import { IProject } from '@/models/Project';
import { siteConfig } from '@/config/site';

const defaultUrl = process.env.NEXT_PUBLIC_APP_URL || siteConfig.url;

export function OrganizationStructuredData() {
  const socialLinks = [
    siteConfig.social.twitter ? `https://twitter.com/${siteConfig.social.twitter.replace('@', '')}` : '',
    siteConfig.social.linkedin,
    siteConfig.social.github,
    siteConfig.social.facebook,
    siteConfig.social.instagram,
    siteConfig.social.youtube,
  ].filter(Boolean);

  const data = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: siteConfig.organization.name,
    legalName: siteConfig.organization.legalName,
    url: siteConfig.url,
    logo: `${siteConfig.url}${siteConfig.organization.logo}`,
    email: siteConfig.email,
    telephone: siteConfig.phone,
    foundingDate: siteConfig.organization.foundingDate,
    address: {
      '@type': 'PostalAddress',
      addressLocality: siteConfig.organization.address.addressLocality,
      addressRegion: siteConfig.organization.address.addressRegion,
      addressCountry: siteConfig.organization.address.addressCountry,
    },
    description: siteConfig.organization.description,
    sameAs: socialLinks,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function ProjectStructuredData({ project }: { project: IProject }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.seoTitle || project.title,
    description: project.seoDescription || project.shortSummary,
    image: project.thumbnail?.url || `${defaultUrl}/og-default.png`,
    author: {
      '@type': 'Organization',
      name: project.clientCompany || project.clientName || siteConfig.organization.name
    },
    datePublished: project.publishDate || project.createdAt,
    dateModified: project.updatedAt,
    keywords: project.seoKeywords?.join(', ') || project.tags?.join(', '),
    inLanguage: 'en-US'
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function BreadcrumbStructuredData({ items }: { items: { name: string, item: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.item.startsWith('http') ? item.item : `${defaultUrl}${item.item}`
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
