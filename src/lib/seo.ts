import { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import { getAppUrl } from '@/lib/appUrl';

const defaultUrl = getAppUrl();

interface SEOProps {
  title: string;
  description: string;
  url?: string;
  image?: string;
  keywords?: string[];
  type?: 'website' | 'article';
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateSEO({
  title,
  description,
  url = defaultUrl,
  image = siteConfig.seo.defaultImage,
  keywords = [],
  type = 'website',
  publishedTime,
  modifiedTime,
}: SEOProps): Metadata {
  const siteName = siteConfig.name;
  const fullTitle = `${title} | ${siteName}`;

  // Ensure canonical URL is absolute
  const canonicalUrl = url.startsWith('http') ? url : `${defaultUrl}${url.startsWith('/') ? url : `/${url}`}`;

  return {
    title: fullTitle,
    description,
    keywords,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName,
      images: [
        {
          url: image.startsWith('http') ? image : `${defaultUrl}${image.startsWith('/') ? image : `/${image}`}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type,
      ...(type === 'article' && publishedTime ? { publishedTime } : {}),
      ...(type === 'article' && modifiedTime ? { modifiedTime } : {}),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      site: siteConfig.seo.twitterHandle,
      creator: siteConfig.seo.twitterHandle,
      images: [image.startsWith('http') ? image : `${defaultUrl}${image.startsWith('/') ? image : `/${image}`}`],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
