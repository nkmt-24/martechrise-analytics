import { Metadata } from 'next';
import HeroIndustries from "@/components/sections/industries/hero-industries";
import WhoWeWork from "@/components/sections/industries/who-we-work";
import IndustriesGrid from "@/components/sections/industries/industries-grid";
import Approach from "@/components/sections/industries/approach";
import Impact from "@/components/sections/industries/impact";
import Challenges from "@/components/sections/industries/challenges";
import CTAIndustries from "@/components/sections/industries/cta-industries";
import { BreadcrumbStructuredData, OrganizationStructuredData } from '@/components/seo/StructuredData';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
  title: "Industry-Specific Analytics Solutions | MarTechRise",
  description: "Analytics systems tailored to your industry's customer journey, compliance needs, and growth metrics. Specialized solutions for E-commerce, SaaS, Fintech, Healthcare, Travel, and more.",
  keywords: [
    'e-commerce analytics',
    'SaaS analytics',
    'fintech analytics',
    'healthcare analytics HIPAA',
    'retail analytics',
    'travel analytics',
    'industry analytics solutions',
  ],
  url: '/industries',
});

export default function IndustriesPage() {
  return (
    <main className="bg-white min-h-screen text-slate-900 font-sans">
      <OrganizationStructuredData />
      <BreadcrumbStructuredData items={[
        { name: 'Home', item: '/' },
        { name: 'Industries', item: '/industries' },
      ]} />
      <HeroIndustries />
      <WhoWeWork />
      <IndustriesGrid />
      <Approach />
      <Impact />
      <Challenges />
      <CTAIndustries />
    </main>
  );
}
