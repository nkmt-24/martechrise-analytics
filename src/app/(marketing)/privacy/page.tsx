import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbStructuredData } from '@/components/seo/StructuredData';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: 'Privacy Policy | MarTechRise',
    description: 'How MarTechRise collects, uses, and protects your personal data. GDPR & CCPA compliant.',
    keywords: ['privacy policy', 'data protection', 'GDPR', 'CCPA', 'MarTechRise'],
    url: '/privacy',
});

const TOC = [
    { id: 'who-we-are', label: 'Who We Are' },
    { id: 'what-we-collect', label: 'What We Collect' },
    { id: 'how-we-use-it', label: 'How We Use It' },
    { id: 'sharing', label: 'Sharing & Third Parties' },
    { id: 'cookies', label: 'Cookies' },
    { id: 'retention', label: 'Data Retention' },
    { id: 'your-rights', label: 'Your Rights' },
    { id: 'security', label: 'Security' },
    { id: 'changes', label: 'Changes' },
    { id: 'contact', label: 'Contact' },
];

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-white">
            <BreadcrumbStructuredData items={[
                { name: 'Home', item: '/' },
                { name: 'Privacy Policy', item: '/privacy' },
            ]} />

            {/* ── Page header ── */}
            <div className="pt-36 pb-16 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-slate-700">Privacy Policy</span>
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4">Legal</p>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Privacy Policy
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            We handle your data with care. This page explains exactly what we collect, why,
                            and what you can do about it.
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
                                    Questions about your data?
                                </p>
                                <Link href="/contact" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                                    Get in touch →
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="max-w-2xl">

                        <Section id="who-we-are" title="Who We Are">
                            <P>
                                <strong>MarTechRise Intelligence Private Limited</strong> (&quot;MarTechRise&quot;, &quot;we&quot;, &quot;our&quot;, &quot;us&quot;)
                                operates <strong>martechrise.ai</strong> and provides enterprise digital analytics consulting,
                                server-side tracking implementation, and marketing technology services.
                            </P>
                            <P>
                                We are headquartered in Chennai, Tamil Nadu, India, and serve clients globally — including
                                in the United States and European Union. This policy covers all interactions with our website
                                and services.
                            </P>
                        </Section>

                        <Section id="what-we-collect" title="What We Collect">
                            <SubHeading>Information you give us</SubHeading>
                            <BulletList items={[
                                'Name and email address from contact or audit request forms',
                                'Company name, job title, and business requirements when you engage our services',
                                'Phone number if you choose to provide one',
                                'Project details and technical specifications shared during consultations',
                            ]} />

                            <SubHeading>Information collected automatically</SubHeading>
                            <BulletList items={[
                                'IP address and approximate location',
                                'Browser type, operating system, and device',
                                'Pages visited, time on page, and how you arrived at our site',
                                'UTM parameters and campaign attribution data',
                                'Click and scroll behaviour through analytics tools',
                            ]} />

                            <SubHeading>From third parties</SubHeading>
                            <P>
                                We may receive limited information from LinkedIn or Google when you interact with our
                                paid advertisements. This is used solely for campaign attribution.
                            </P>
                        </Section>

                        <Section id="how-we-use-it" title="How We Use It">
                            <P>We use your information to:</P>
                            <BulletList items={[
                                'Respond to enquiries and deliver contracted analytics services',
                                'Understand how visitors use our site so we can improve it',
                                "Send project updates and — where you've consented — marketing content",
                                'Measure which channels bring qualified leads to our own business',
                                'Detect fraud and maintain security of our infrastructure',
                                'Meet our legal and contractual obligations',
                            ]} />
                            <P>
                                Our legal bases for processing are <strong>contractual necessity</strong>,{' '}
                                <strong>legitimate interests</strong>, and <strong>consent</strong> — depending on the activity.
                            </P>
                        </Section>

                        <Section id="sharing" title="Sharing & Third Parties">
                            <P>
                                We do not sell your data. We share it only with service providers that help us run
                                our business, under strict data processing agreements:
                            </P>

                            <div className="my-8 border border-slate-200 rounded-2xl overflow-hidden">
                                <table className="w-full text-sm">
                                    <thead>
                                        <tr className="border-b border-slate-200 bg-slate-50">
                                            <th className="text-left px-6 py-3.5 font-semibold text-slate-700">Category</th>
                                            <th className="text-left px-6 py-3.5 font-semibold text-slate-700">Purpose</th>
                                            <th className="text-left px-6 py-3.5 font-semibold text-slate-700">Examples</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            ['Analytics', 'Site measurement', 'Google Analytics 4'],
                                            ['Email / CRM', 'Communication & leads', 'HubSpot, Mailchimp'],
                                            ['Cloud hosting', 'Infrastructure', 'Vercel, AWS'],
                                            ['Advertising', 'Ad attribution', 'Google Ads, Meta'],
                                            ['Security', 'DDoS & bot protection', 'Cloudflare'],
                                        ].map(([cat, purpose, examples]) => (
                                            <tr key={cat}>
                                                <td className="px-6 py-4 font-medium text-slate-800">{cat}</td>
                                                <td className="px-6 py-4 text-slate-500">{purpose}</td>
                                                <td className="px-6 py-4 text-slate-400 text-sm">{examples}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>

                            <P>
                                We may also disclose data when required by law, a court order, or in connection with a merger
                                or acquisition.
                            </P>
                        </Section>

                        <Section id="cookies" title="Cookies">
                            <P>
                                We use cookies and similar tracking technologies. For a full breakdown of which cookies we
                                set and how to control them, see our{' '}
                                <Link href="/cookie-policy" className="text-indigo-600 hover:underline underline-offset-2">Cookie Policy</Link>.
                                Where required by law, we obtain your consent before placing non-essential cookies.
                            </P>
                        </Section>

                        <Section id="retention" title="Data Retention">
                            <P>We keep data only as long as necessary:</P>
                            <div className="my-6 space-y-2">
                                {[
                                    ['Contact form submissions', '24 months from last interaction'],
                                    ['Client project data', 'Contract duration + 5 years'],
                                    ['Newsletter subscribers', 'Until you unsubscribe'],
                                    ['Analytics data', '26 months (GA4 default)'],
                                    ['Server logs', '90 days'],
                                ].map(([label, period]) => (
                                    <div key={label} className="flex items-baseline justify-between gap-6 py-3 border-b border-slate-100">
                                        <span className="text-sm text-slate-700">{label}</span>
                                        <span className="text-sm text-slate-400 text-right whitespace-nowrap">{period}</span>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="your-rights" title="Your Rights">
                            <P>
                                Depending on your location, you have rights over your personal data. These include:
                            </P>
                            <div className="my-6 grid sm:grid-cols-2 gap-3">
                                {[
                                    ['Access', 'Request a copy of the data we hold about you.'],
                                    ['Rectification', 'Correct inaccurate or incomplete information.'],
                                    ['Erasure', 'Ask us to delete your data.'],
                                    ['Restriction', 'Limit how we process your data.'],
                                    ['Portability', 'Receive your data in a machine-readable format.'],
                                    ['Objection', 'Object to processing based on legitimate interests.'],
                                    ['Withdraw consent', 'Opt out at any time where processing is consent-based.'],
                                    ['CCPA opt-out', 'California residents may opt out of data "sales".'],
                                ].map(([right, desc]) => (
                                    <div key={right} className="p-4 rounded-xl border border-slate-200 hover:border-indigo-200 transition-colors">
                                        <p className="text-sm font-semibold text-slate-800 mb-1">{right}</p>
                                        <p className="text-sm text-slate-500 leading-relaxed">{desc}</p>
                                    </div>
                                ))}
                            </div>
                            <P>
                                Email <a href="mailto:hello@martechrise.ai" className="text-indigo-600 hover:underline underline-offset-2">hello@martechrise.ai</a>{' '}
                                to exercise any of these rights. We respond within 30 days.
                            </P>
                        </Section>

                        <Section id="security" title="Security">
                            <P>
                                We use industry-standard measures to protect your data: TLS encryption in transit,
                                role-based access controls, server-side data processing to minimise client-side
                                exposure, and regular security reviews. No transmission is 100% guaranteed — but
                                we treat your data the way we&apos;d want ours treated.
                            </P>
                        </Section>

                        <Section id="changes" title="Changes to This Policy">
                            <P>
                                When we update this policy, we revise the date at the top of this page. Material changes
                                will be communicated by email or a site notice. Continued use of our website after
                                any update constitutes acceptance.
                            </P>
                        </Section>

                        <Section id="contact" title="Contact">
                            <P>For any privacy questions or data requests:</P>
                            <ContactCard />
                        </Section>

                        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-4 text-sm">
                            <Link href="/terms" className="text-slate-500 hover:text-indigo-600 transition-colors">Terms of Service</Link>
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
