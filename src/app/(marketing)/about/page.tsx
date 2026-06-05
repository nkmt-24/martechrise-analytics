import { Metadata } from 'next';
import AboutHero from './sections/about-hero';
import WhoWeAre from './sections/who-we-are';
import WhyWeExist from './sections/why-we-exist';
import ExpertiseTools from './sections/expertise-tools';
import CertifiedExpertise from './sections/certified-expertise';
import Philosophy from './sections/philosophy';
import Trust from './sections/trust';
import FAQ from '@/components/common/FAQ';
import AboutCta from './sections/about-cta';
import Schema from '@/components/common/Schema';
import LogoCarousel from './sections/logo-carousel';
import { BreadcrumbStructuredData, OrganizationStructuredData } from '@/components/seo/StructuredData';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: "Enterprise Digital Analytics Experts | MarTechRise",
    description: "Meet the enterprise digital analytics experts at MarTechRise. We provide data governance, analytics audits, server-side tracking implementation, and trust-centered consulting for global firms.",
    keywords: [
        'analytics consulting',
        'enterprise analytics experts',
        'GA4 experts',
        'Adobe Analytics consultants',
        'server-side tracking experts',
        'data governance',
        'analytics audit',
    ],
    url: '/about',
});

const ABOUT_FAQ = [
    {
        question: "What makes MarTechRise different from other analytics consultancies?",
        answer: "We combine deep technical expertise with a philosophy of clean, maintainable data architecture. Unlike agencies that prioritize quick fixes, we build sustainable tracking systems designed for long-term accuracy and scalability."
    },
    {
        question: "Do you work with companies outside the US?",
        answer: "Yes, while our primary market is the United States, we serve enterprise clients globally. Our team operates across time zones to support international organizations."
    },
    {
        question: "What is your typical engagement model?",
        answer: "We offer both project-based implementations and ongoing retainer relationships. Most clients start with an analytics audit, then move into implementation and ongoing optimization support."
    }
];

export default function AboutPage() {
    return (
        <div className="bg-white">
            <OrganizationStructuredData />
            <BreadcrumbStructuredData items={[
                { name: 'Home', item: '/' },
                { name: 'About', item: '/about' },
            ]} />
            <Schema faqs={ABOUT_FAQ} />
            <AboutHero />
            <WhoWeAre />
            {/* <WhyWeExist />
            <ExpertiseTools /> */}
            <CertifiedExpertise />
            <LogoCarousel />
            <Philosophy />
            <Trust />

            {/* FAQ Section */}
            <section className="py-32 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl font-bold text-slate-900 mb-6">Philosophy & Practice FAQ</h2>
                        <p className="text-slate-500">Understanding our approach to technical analytics.</p>
                    </div>
                    <FAQ items={ABOUT_FAQ} />
                </div>
            </section>

            <AboutCta />
        </div>
    );
}
