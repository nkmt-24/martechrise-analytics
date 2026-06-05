import { generateSEO } from '@/lib/seo'
import { servicesData } from '@/lib/services-data'
import { siteConfig } from '@/config/site'
import { ServiceHero } from '@/components/services/ServiceHero'
import { ServiceProblemBlock } from '@/components/services/ServiceProblemBlock'
import { ServiceWhatIs } from '@/components/services/ServiceWhatIs'
import { ServiceDeliverables } from '@/components/services/ServiceDeliverables'
import { ServiceWhyChooseUs } from '@/components/services/ServiceWhyChooseUs'
import { ServiceProcess } from '@/components/services/ServiceProcess'
import ServiceRelatedCaseStudies from '@/components/services/ServiceRelatedCaseStudies'
import { ServicePlatforms } from '@/components/services/ServicePlatforms'
import { ServiceFaq } from '@/components/services/ServiceFaq'
import { ServiceCTA } from '@/components/services/ServiceCTA'

const SLUG = 'qa-data-validation'
const service = servicesData[SLUG]

export const metadata = generateSEO({
  title: service.meta.title,
  description: service.meta.description,
  url: `${siteConfig.url}/services/${SLUG}`,
  keywords: ['analytics QA', 'data validation', 'tracking audit', 'GA4 audit', 'tag validation'],
})

export default function QADataValidationPage() {
  return (
    <main itemScope itemType="https://schema.org/Service">
      <ServiceHero {...service.hero} badge={service.badge} />
      <ServiceProblemBlock {...service.problem} />
      <ServiceWhatIs {...service.whatIs} />
      <ServiceDeliverables {...service.deliverables} />
      <ServiceWhyChooseUs {...service.whyChooseUs} />
      <ServiceProcess {...service.process} />
      <ServiceRelatedCaseStudies serviceSlug={SLUG} serviceTitle="QA & Data Validation" />
      <ServicePlatforms {...service.platforms} />
      <ServiceFaq {...service.faq} />
      <ServiceCTA {...service.cta} />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Organization', name: siteConfig.organization.name, legalName: siteConfig.organization.legalName, url: siteConfig.url, logo: `${siteConfig.url}${siteConfig.organization.logo}`, description: siteConfig.organization.description, address: { '@type': 'PostalAddress', addressLocality: siteConfig.organization.address.addressLocality, addressRegion: siteConfig.organization.address.addressRegion, addressCountry: siteConfig.organization.address.addressCountry }, sameAs: siteConfig.organization.sameAs }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'Service', name: service.meta.title, description: service.meta.description, url: `${siteConfig.url}/services/${SLUG}`, provider: { '@type': 'Organization', name: siteConfig.organization.name, url: siteConfig.url }, areaServed: [{ '@type': 'Country', name: 'United States' }, { '@type': 'Country', name: 'India' }], serviceType: 'Analytics QA & Data Validation Services', hasOfferCatalog: { '@type': 'OfferCatalog', name: 'Deliverables', itemListElement: service.deliverables.items.map((item, i) => ({ '@type': 'Offer', position: i + 1, name: item.title, description: item.description })) } }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'FAQPage', mainEntity: service.faq.faqs.map((faq) => ({ '@type': 'Question', name: faq.question, acceptedAnswer: { '@type': 'Answer', text: faq.answer } })) }) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ '@context': 'https://schema.org', '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: siteConfig.url }, { '@type': 'ListItem', position: 2, name: 'Services', item: `${siteConfig.url}/services` }, { '@type': 'ListItem', position: 3, name: service.meta.title, item: `${siteConfig.url}/services/${SLUG}` }] }) }} />
    </main>
  )
}
