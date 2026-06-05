import { Metadata } from 'next';
import LogoCarousel from "@/components/sections/home/logo-carousel";
import Problems from "@/components/sections/home/problems";
import Services from "@/components/sections/home/services";
import CaseStudies from "@/components/sections/home/case-studies";
import Trust from "@/components/sections/home/trust";
import Tools from "@/components/sections/home/tools";
import Process from "@/components/sections/home/process";
import Testimonials from "@/components/sections/home/testimonials";
import About from "@/components/sections/home/About";
import LandingCTA from "@/components/sections/home/landing-cta";
import HeroSection from "./(home)/hero-section";
import TestimonialSection from "./(home)/testimonial-section";
import { OrganizationStructuredData } from '@/components/seo/StructuredData';
import { WebSiteStructuredData, LocalBusinessStructuredData } from '@/components/seo/WebSiteStructuredData';
import { generateSEO } from '@/lib/seo';

export const revalidate = 3600;

export const metadata: Metadata = generateSEO({
  title: 'Enterprise Analytics Implementation & Server-Side Tracking Experts',
  description: 'MarTechRise delivers precision digital analytics for enterprise brands. GA4, Adobe Analytics, server-side tracking, and conversion optimization. Fix broken tracking, build accurate data pipelines, and scale your marketing with confidence.',
  keywords: [
    'analytics implementation',
    'server-side tracking',
    'GA4 implementation',
    'Adobe Analytics',
    'GTM server-side',
    'digital analytics consulting',
    'conversion tracking',
    'marketing attribution',
    'data layer architecture',
    'enterprise analytics',
  ],
  url: '/',
});

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-slate-900 font-sans">
      <OrganizationStructuredData />
      <WebSiteStructuredData />
      <LocalBusinessStructuredData />
      <HeroSection />
      <LogoCarousel />
      <Problems />
      <Services />
      <CaseStudies />
      <Trust />
      <Tools />
      <Process />
      <TestimonialSection />
      <About />
      <LandingCTA />
    </div>
  );
}
