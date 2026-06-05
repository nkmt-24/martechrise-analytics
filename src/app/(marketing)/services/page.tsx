import { Metadata } from 'next';
import Hero from "@/components/sections/services/hero";
// import DeliverSection from "@/components/sections/services/DeliverSection";
import ServicesGrid from "@/components/sections/services/services-grid";
import Features from "@/components/sections/services/features";
import Deliverables from "@/components/sections/services/deliverables";
import Audience from "@/components/sections/services/audience";
import Scenarios from "@/components/sections/services/scenarios";
import Integrations from "@/components/sections/services/integrations";
import Pricing from "@/components/sections/services/pricing";
import CTA from "@/components/sections/services/cta";
import { BreadcrumbStructuredData, OrganizationStructuredData } from '@/components/seo/StructuredData';
import { ServicesListStructuredData } from '@/components/seo/ServiceStructuredData';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: "End-to-End Analytics Implementation & Tracking Solutions",
  description: "From strategy to execution, we design and implement robust analytics systems that give you complete visibility into your customer journey and marketing performance. GA4, Adobe Analytics, GTM, server-side tracking, and conversion optimization.",
  keywords: [
    'analytics implementation services',
    'GA4 implementation',
    'Adobe Analytics setup',
    'server-side tracking',
    'GTM implementation',
    'conversion tracking',
    'data layer implementation',
    'analytics consulting',
  ],
  url: '/services',
});

const SERVICES_LIST = [
  {
    name: 'Tracking Architecture Design',
    description: 'Custom data layer architecture and measurement plan design for enterprise analytics.',
    url: '/services/tracking-architecture',
  },
  {
    name: 'Analytics Implementation',
    description: 'Full-stack GA4, Adobe Analytics, and tag management implementation.',
    url: '/services/analytics-implementation',
  },
  {
    name: 'Server-Side Tracking',
    description: 'Privacy-first server-side tracking implementation with GTM Server and Stape.io.',
    url: '/services/server-side-tracking',
  },
  {
    name: 'Conversion Event Tracking',
    description: 'E-commerce tracking, enhanced conversions, and revenue attribution.',
    url: '/services/conversion-event-tracking',
  },
  {
    name: 'QA & Data Validation',
    description: 'Comprehensive testing and data quality assurance for analytics implementations.',
    url: '/services/qa-data-validation',
  },
  {
    name: 'Analytics Reporting & Attribution',
    description: 'Custom dashboards, attribution modeling, and business intelligence.',
    url: '/services/analytics-reporting-attribution',
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900 font-sans">
      <OrganizationStructuredData />
      <BreadcrumbStructuredData items={[
        { name: 'Home', item: '/' },
        { name: 'Services', item: '/services' },
      ]} />
      <ServicesListStructuredData services={SERVICES_LIST} />
      <Hero />
      {/* <DeliverSection /> */}
      <ServicesGrid />
      {/* <Features /> */}
      <Deliverables />
      <Audience />
      <Scenarios />
      <Integrations />
      <Pricing />
      <CTA />
    </main>
  );
}
