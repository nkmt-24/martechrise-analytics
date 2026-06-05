import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbStructuredData } from '@/components/seo/StructuredData';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: 'Terms of Service | MarTechRise',
    description: 'The terms governing your use of MarTechRise services and website. Read before engaging our analytics consulting services.',
    keywords: ['terms of service', 'terms and conditions', 'service agreement', 'MarTechRise'],
    url: '/terms',
});

const TOC = [
    { id: 'agreement', label: 'The Agreement' },
    { id: 'services', label: 'Our Services' },
    { id: 'your-responsibilities', label: 'Your Responsibilities' },
    { id: 'payments', label: 'Payments' },
    { id: 'intellectual-property', label: 'Intellectual Property' },
    { id: 'confidentiality', label: 'Confidentiality' },
    { id: 'liability', label: 'Liability' },
    { id: 'termination', label: 'Termination' },
    { id: 'governing-law', label: 'Governing Law' },
    { id: 'contact', label: 'Contact' },
];

export default function TermsOfServicePage() {
    return (
        <div className="bg-white">
            <BreadcrumbStructuredData items={[
                { name: 'Home', item: '/' },
                { name: 'Terms of Service', item: '/terms' },
            ]} />

            {/* ── Page header ── */}
            <div className="pt-36 pb-16 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-slate-700">Terms of Service</span>
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4">Legal</p>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Terms of Service
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            These terms govern your use of the MarTechRise website and any engagement with our
                            analytics services. Please read them before working with us.
                        </p>
                        <p className="mt-6 text-sm text-slate-400">Last updated: <strong className="text-slate-600">May 27, 2026</strong></p>
                    </div>
                </div>
            </div>

            {/* ── Body ── */}
            <div className="container mx-auto px-4 md:px-6 py-20 max-w-7xl">
                <div className="grid lg:grid-cols-[220px_1fr] xl:grid-cols-[260px_1fr] gap-16">

                    {/* Sticky sidebar */}
                    <aside className="hidden lg:block">
                        <div className="sticky top-28">
                            <p className="text-[11px] font-bold uppercase tracking-widest text-slate-400 mb-5">Contents</p>
                            <nav className="space-y-0.5">
                                {TOC.map((item) => (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        className="block px-3 py-2 text-sm text-slate-500 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                ))}
                            </nav>
                            <div className="mt-10 pt-8 border-t border-slate-100">
                                <p className="text-xs text-slate-400 mb-3 leading-relaxed">
                                    Need a formal service agreement?
                                </p>
                                <Link href="/contact" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                                    Talk to us →
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="max-w-2xl">

                        {/* Preamble notice */}
                        <div className="mb-14 p-6 border-l-4 border-indigo-500 bg-indigo-50 rounded-r-xl">
                            <p className="text-sm text-indigo-800 leading-relaxed">
                                By accessing our website or engaging our services, you agree to these Terms. Client
                                projects are additionally governed by a separate Statement of Work (&quot;SOW&quot;) which
                                takes precedence over these general Terms where there is any conflict.
                            </p>
                        </div>

                        <Section id="agreement" title="The Agreement">
                            <P>
                                These Terms of Service form a legally binding agreement between you (&quot;you&quot; or &quot;Client&quot;)
                                and <strong>MarTechRise Intelligence Private Limited</strong>. They apply to all visitors
                                to martechrise.ai, anyone who submits an enquiry, and any business that engages us for services.
                            </P>
                        </Section>

                        <Section id="services" title="Our Services">
                            <P>
                                MarTechRise provides enterprise analytics consulting and implementation. This includes,
                                but is not limited to:
                            </P>
                            <BulletList items={[
                                'Tracking architecture & measurement plan design',
                                'GA4 and Adobe Analytics implementation',
                                'Server-side tracking (GTM Server / Stape.io)',
                                'Conversion and e-commerce event tracking',
                                'QA, data validation, and analytics audits',
                                'Analytics reporting, attribution, and dashboarding',
                            ]} />
                            <P>
                                Specific scope, deliverables, timelines, and pricing are defined in a Statement of Work
                                agreed before each project begins. We reserve the right to update or discontinue any
                                free website resources at any time.
                            </P>
                        </Section>

                        <Section id="your-responsibilities" title="Your Responsibilities">
                            <P>To allow us to deliver quality work, you agree to:</P>

                            <div className="my-6 space-y-4">
                                {[
                                    {
                                        title: 'Provide accurate information',
                                        body: 'Give us complete and truthful details about your business, technology stack, and goals.',
                                    },
                                    {
                                        title: 'Grant necessary access',
                                        body: 'Provide timely access to analytics platforms, tag managers, websites, and third-party accounts needed for implementation.',
                                    },
                                    {
                                        title: 'Obtain user consents',
                                        body: 'Ensure your end-users have consented to tracking as required by GDPR, CCPA, and any other applicable law. Compliance with these laws on your own properties is your responsibility.',
                                    },
                                    {
                                        title: 'Respect our work',
                                        body: 'Don\'t copy, reverse-engineer, or redistribute our methodologies, documentation, or code without written permission.',
                                    },
                                    {
                                        title: 'Use the site lawfully',
                                        body: 'Don\'t use martechrise.ai for spam, unlawful activity, or anything that infringes on the rights of others.',
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="pl-5 border-l border-slate-200">
                                        <p className="text-base font-bold text-slate-800 mb-1">{item.title}</p>
                                        <p className="text-base text-slate-500 leading-relaxed">{item.body}</p>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="payments" title="Payments">
                            <BulletList items={[
                                'All fees and payment schedules are set out in the SOW before work begins.',
                                'Invoices are due within 14 days unless otherwise agreed.',
                                'Late payments may accrue interest at 1.5% per month.',
                                'Work may be paused on invoices unpaid for more than 30 days.',
                                'Quoted fees exclude applicable taxes (GST, VAT, or equivalent).',
                                'Completed and delivered work is non-refundable except where agreed in writing.',
                                'Third-party costs (tools, ad spend) are billed at cost with prior approval.',
                            ]} />
                        </Section>

                        <Section id="intellectual-property" title="Intellectual Property">
                            <SubHeading>MarTechRise content</SubHeading>
                            <P>
                                All content on martechrise.ai — articles, frameworks, code, graphics, and brand assets —
                                belongs to MarTechRise and is protected by applicable IP law. You may not reproduce or
                                redistribute it without written consent.
                            </P>

                            <SubHeading>Client deliverables</SubHeading>
                            <P>
                                Upon full payment, you own the custom deliverables created for your project (data layer code,
                                GTM configurations, documentation, etc.). We retain the right to reuse non-identifiable
                                patterns and methodologies from the engagement in future work.
                            </P>

                            <SubHeading>Third-party platforms</SubHeading>
                            <P>
                                We implement solutions on Google, Meta, Adobe, and other platforms. Your use of these
                                platforms is governed by their own terms. We are not responsible for changes to
                                third-party platforms or policies.
                            </P>
                        </Section>

                        <Section id="confidentiality" title="Confidentiality">
                            <P>
                                Both parties agree to keep confidential any non-public information shared during an
                                engagement — business strategies, analytics data, pricing, and technical architecture.
                                These obligations last for three years after the engagement ends.
                            </P>
                            <P>
                                Exceptions apply where disclosure is required by law or where the information is already
                                public knowledge. We may mention your company name and a high-level service description
                                in our portfolio unless you request otherwise in writing.
                            </P>
                        </Section>

                        <Section id="liability" title="Liability">
                            <P>
                                Our website and free resources are provided &quot;as is&quot; without warranty.
                                Analytics results depend on the accuracy of client data, platform behaviour, and
                                factors outside our control — we do not guarantee specific business outcomes.
                            </P>
                            <P>
                                To the maximum extent permitted by law, our total liability for any claim is capped at
                                the fees you paid us in the three months preceding the claim. We are not liable for
                                indirect, incidental, or consequential damages.
                            </P>
                        </Section>

                        <Section id="termination" title="Termination">
                            <P>
                                Either party may terminate an engagement with written notice as defined in the SOW
                                (typically 14–30 days). On termination: fees for completed work become immediately
                                payable, all client-owned deliverables are handed over, and confidentiality obligations
                                survive. We may suspend website access for users who violate these Terms.
                            </P>
                        </Section>

                        <Section id="governing-law" title="Governing Law">
                            <P>
                                These Terms are governed by the laws of India. Disputes will first be addressed through
                                good-faith negotiation. If unresolved after 30 days, binding arbitration in Chennai,
                                Tamil Nadu applies. For US and EU clients, we will work in good faith to identify a
                                mutually acceptable resolution process.
                            </P>
                            <P>
                                If any provision of these Terms is found unenforceable, the remaining provisions
                                continue in full force.
                            </P>
                        </Section>

                        <Section id="changes" title="Changes">
                            <P>
                                We may update these Terms at any time. Changes take effect when published here — the
                                &quot;Last updated&quot; date reflects the most recent revision. Continued use of our site
                                constitutes acceptance. We will notify active clients directly of material changes.
                            </P>
                        </Section>

                        <Section id="contact" title="Contact">
                            <P>For legal questions or to request a formal service agreement:</P>
                            <ContactCard />
                        </Section>

                        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-4 text-sm">
                            <Link href="/privacy" className="text-slate-500 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
                            <Link href="/cookie-policy" className="text-slate-500 hover:text-indigo-600 transition-colors">Cookie Policy</Link>
                        </div>
                    </article>
                </div>
            </div>
        </div>
    );
}

/* ── Shared sub-components ── */
function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
    return (
        <section id={id} className="mb-16 scroll-mt-28">
            <h2 className="text-2xl font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">{title}</h2>
            <div className="space-y-4">{children}</div>
        </section>
    );
}

function SubHeading({ children }: { children: React.ReactNode }) {
    return <h3 className="text-base font-bold text-slate-800 mt-8 mb-3">{children}</h3>;
}

function P({ children }: { children: React.ReactNode }) {
    return <p className="text-slate-600 leading-relaxed">{children}</p>;
}

function BulletList({ items }: { items: string[] }) {
    return (
        <ul className="space-y-2 my-4">
            {items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-base text-slate-600 leading-relaxed">
                    <span className="mt-2.5 w-1.5 h-1.5 bg-indigo-500 rounded-full flex-shrink-0" />
                    {item}
                </li>
            ))}
        </ul>
    );
}

function ContactCard() {
    return (
        <div className="mt-6 p-8 bg-slate-900 rounded-2xl text-white">
            <p className="font-bold text-lg mb-1">MarTechRise Intelligence Private Limited</p>
            <p className="text-slate-400 text-sm mb-6">Chennai, Tamil Nadu, India</p>
            <div className="space-y-2 text-sm">
                <a href="mailto:hello@martechrise.ai" className="block text-slate-300 hover:text-white transition-colors">
                    hello@martechrise.ai
                </a>
                <a href="tel:+916382915027" className="block text-slate-300 hover:text-white transition-colors">
                    +91 63829 15027
                </a>
            </div>
        </div>
    );
}
