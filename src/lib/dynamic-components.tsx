/**
 * Dynamic component imports for performance optimization
 * These components are loaded lazily to reduce initial bundle size
 */

import dynamic from 'next/dynamic';

// Loading component for better UX during lazy load
const LoadingPlaceholder = () => (
  <div className="min-h-[200px] flex items-center justify-center">
    <div className="animate-pulse text-slate-400">Loading...</div>
  </div>
);

// Homepage sections - loaded dynamically to improve initial page load
export const DynamicLogoCarousel = dynamic(
  () => import('@/components/sections/home/logo-carousel'),
  {
    loading: () => <div className="h-32" />,
    ssr: true, // SSR for SEO
  }
);

export const DynamicProblems = dynamic(
  () => import('@/components/sections/home/problems'),
  {
    loading: LoadingPlaceholder,
    ssr: true,
  }
);

export const DynamicServices = dynamic(
  () => import('@/components/sections/home/services'),
  {
    loading: LoadingPlaceholder,
    ssr: true,
  }
);

export const DynamicCaseStudies = dynamic(
  () => import('@/components/sections/home/case-studies'),
  {
    loading: LoadingPlaceholder,
    ssr: true,
  }
);

export const DynamicTrust = dynamic(
  () => import('@/components/sections/home/trust'),
  {
    loading: LoadingPlaceholder,
    ssr: true,
  }
);

export const DynamicTools = dynamic(
  () => import('@/components/sections/home/tools'),
  {
    loading: LoadingPlaceholder,
    ssr: true,
  }
);

export const DynamicProcess = dynamic(
  () => import('@/components/sections/home/process'),
  {
    loading: LoadingPlaceholder,
    ssr: true,
  }
);

export const DynamicTestimonialSection = dynamic(
  () => import('@/app/(home)/testimonial-section'),
  {
    loading: LoadingPlaceholder,
    ssr: false, // Animations don't need SSR
  }
);

export const DynamicAbout = dynamic(
  () => import('@/components/sections/home/About'),
  {
    loading: LoadingPlaceholder,
    ssr: true,
  }
);

export const DynamicLandingCTA = dynamic(
  () => import('@/components/sections/home/landing-cta'),
  {
    loading: () => <div className="h-96" />,
    ssr: true,
  }
);

// Add more dynamic components here as needed
// Example for animation-heavy components:
// export const DynamicAnimatedSection = dynamic(
//   () => import('@/components/ui/animated-section'),
//   { loading: LoadingPlaceholder, ssr: false }
// );
