import { Metadata } from 'next';
import Link from 'next/link';
import { BreadcrumbStructuredData } from '@/components/seo/StructuredData';
import { generateSEO } from '@/lib/seo';

export const metadata: Metadata = generateSEO({
    title: 'Cookie Policy | MarTechRise',
    description: 'How MarTechRise uses cookies and tracking technologies on martechrise.ai. Full breakdown of cookie types, purposes, and how to control them.',
    keywords: ['cookie policy', 'cookies', 'tracking', 'GDPR', 'MarTechRise'],
    url: '/cookie-policy',
});

const TOC = [
    { id: 'what-are-cookies', label: 'What Are Cookies?' },
    { id: 'our-approach', label: 'Our Approach' },
    { id: 'cookies-we-use', label: 'Cookies We Use' },
    { id: 'third-party', label: 'Third-Party Cookies' },
    { id: 'server-side', label: 'Server-Side Tracking' },
    { id: 'your-controls', label: 'Your Controls' },
    { id: 'updates', label: 'Updates' },
    { id: 'contact', label: 'Contact' },
];

const COOKIE_GROUPS = [
    {
        label: 'Strictly Necessary',
        tag: 'Always on',
        tagColor: 'bg-slate-100 text-slate-600',
        description: 'Required for the website to function. They cannot be disabled.',
        cookies: [
            { name: '__Host-next-auth', purpose: 'Manages authenticated user sessions', duration: 'Session' },
            { name: 'CSRF token', purpose: 'Protects against cross-site request forgery', duration: 'Session' },
        ],
    },
    {
        label: 'Analytics & Performance',
        tag: 'Optional',
        tagColor: 'bg-blue-50 text-blue-700',
        description: 'Help us understand how visitors use our site so we can make it better.',
        cookies: [
            { name: '_ga', purpose: 'Google Analytics — distinguishes users', duration: '2 years' },
            { name: '_ga_*', purpose: 'GA4 — stores session state', duration: '2 years' },
            { name: '_gid', purpose: 'Google Analytics — daily user distinction', duration: '24 hours' },
        ],
    },
    {
        label: 'Functional',
        tag: 'Optional',
        tagColor: 'bg-blue-50 text-blue-700',
        description: 'Remember your preferences to improve your experience.',
        cookies: [
            { name: 'cookie-consent', purpose: 'Stores your cookie preferences', duration: '12 months' },
        ],
    },
    {
        label: 'Marketing & Advertising',
        tag: 'Optional',
        tagColor: 'bg-blue-50 text-blue-700',
        description: 'Used to measure campaign performance and deliver relevant ads.',
        cookies: [
            { name: '_fbp', purpose: 'Meta Pixel — conversion tracking', duration: '90 days' },
            { name: 'IDE', purpose: 'Google Ads — personalisation', duration: '13 months' },
            { name: 'li_fat_id', purpose: 'LinkedIn Ads — conversion tracking', duration: '30 days' },
        ],
    },
];

export default function CookiePolicyPage() {
    return (
        <div className="bg-white">
            <BreadcrumbStructuredData items={[
                { name: 'Home', item: '/' },
                { name: 'Cookie Policy', item: '/cookie-policy' },
            ]} />

            {/* ── Page header ── */}
            <div className="pt-36 pb-16 border-b border-slate-100">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex items-center gap-2 text-sm text-slate-400 mb-8">
                        <Link href="/" className="hover:text-slate-700 transition-colors">Home</Link>
                        <span>/</span>
                        <span className="text-slate-700">Cookie Policy</span>
                    </div>
                    <div className="max-w-2xl">
                        <p className="text-sm font-bold uppercase tracking-widest text-indigo-600 mb-4">Legal</p>
                        <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 leading-tight">
                            Cookie Policy
                        </h1>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            A full breakdown of the cookies and tracking technologies we use on martechrise.ai,
                            and how you can control them.
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
                                    Questions about how we track?
                                </p>
                                <Link href="/contact" className="text-sm font-semibold text-indigo-600 hover:text-indigo-700 transition-colors">
                                    Ask us →
                                </Link>
                            </div>
                        </div>
                    </aside>

                    {/* Article */}
                    <article className="max-w-2xl">

                        <Section id="what-are-cookies" title="What Are Cookies?">
                            <P>
                                Cookies are small text files stored on your device when you visit a website. They let
                                the site recognise your browser on return visits and remember things like session state
                                or preferences.
                            </P>
                            <P>
                                We also use related technologies — tracking pixels, server-side tags, and browser local
                                storage. This policy covers all of them.
                            </P>
                        </Section>

                        <Section id="our-approach" title="Our Approach">
                            <P>
                                We are an analytics implementation company. We use tracking on our own website for the
                                same reason our clients do: to understand what&apos;s working and measure marketing performance.
                                Because of this, we hold ourselves to the same standard we set for clients — only collect
                                what&apos;s necessary, be transparent about it, and give you control.
                            </P>
                            <P>
                                Non-essential cookies are only activated after you give consent through our cookie banner.
                            </P>
                        </Section>

                        <Section id="cookies-we-use" title="Cookies We Use">
                            <div className="space-y-10 mt-2">
                                {COOKIE_GROUPS.map((group) => (
                                    <div key={group.label}>
                                        <div className="flex items-center gap-3 mb-3">
                                            <h3 className="text-base font-bold text-slate-800">{group.label}</h3>
                                            <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${group.tagColor}`}>
                                                {group.tag}
                                            </span>
                                        </div>
                                        <p className="text-base text-slate-500 mb-4 leading-relaxed">{group.description}</p>
                                        <div className="border border-slate-200 rounded-xl overflow-hidden">
                                            <table className="w-full text-base">
                                                <thead>
                                                    <tr className="bg-slate-50 border-b border-slate-200">
                                                        <th className="text-left px-5 py-3 font-semibold text-slate-600 text-sm uppercase tracking-wide">Name</th>
                                                        <th className="text-left px-5 py-3 font-semibold text-slate-600 text-sm uppercase tracking-wide">Purpose</th>
                                                        <th className="text-left px-5 py-3 font-semibold text-slate-600 text-sm uppercase tracking-wide whitespace-nowrap">Expires</th>
                                                    </tr>
                                                </thead>
                                                <tbody className="divide-y divide-slate-100">
                                                    {group.cookies.map((c) => (
                                                        <tr key={c.name} className="hover:bg-slate-50 transition-colors">
                                                            <td className="px-5 py-3.5 font-mono text-sm text-slate-700 font-medium">{c.name}</td>
                                                            <td className="px-5 py-3.5 text-slate-500 text-sm">{c.purpose}</td>
                                                            <td className="px-5 py-3.5 text-slate-400 text-sm whitespace-nowrap">{c.duration}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </Section>

                        <Section id="third-party" title="Third-Party Cookies">
                            <P>
                                Some cookies are set by third parties whose services we use. We don&apos;t control these
                                cookies — they&apos;re covered by each provider&apos;s own privacy policy:
                            </P>
                            <div className="mt-6 border border-slate-200 rounded-2xl overflow-hidden">
                                <table className="w-full text-base">
                                    <thead>
                                        <tr className="bg-slate-50 border-b border-slate-200">
                                            <th className="text-left px-6 py-3.5 font-semibold text-slate-700">Provider</th>
                                            <th className="text-left px-6 py-3.5 font-semibold text-slate-700">Category</th>
                                            <th className="text-left px-6 py-3.5 font-semibold text-slate-700">Policy</th>
                                        </tr>
                                    </thead>
                                    <tbody className="divide-y divide-slate-100">
                                        {[
                                            { p: 'Google', cat: 'Analytics & Ads', url: 'https://policies.google.com/privacy' },
                                            { p: 'Meta', cat: 'Advertising', url: 'https://www.facebook.com/privacy/policy/' },
                                            { p: 'LinkedIn', cat: 'Advertising', url: 'https://www.linkedin.com/legal/privacy-policy' },
                                            { p: 'Cloudflare', cat: 'Security', url: 'https://www.cloudflare.com/privacypolicy/' },
                                        ].map(({ p, cat, url }) => (
                                            <tr key={p} className="hover:bg-slate-50 transition-colors">
                                                <td className="px-6 py-4 font-medium text-slate-800">{p}</td>
                                                <td className="px-6 py-4 text-slate-500">{cat}</td>
                                                <td className="px-6 py-4 text-base">
                                                    <a href={url} target="_blank" rel="noopener noreferrer"
                                                        className="text-indigo-600 hover:text-indigo-700 text-sm hover:underline underline-offset-2">
                                                        View →
                                                    </a>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </Section>

                        <Section id="server-side" title="Server-Side Tracking">
                            <P>
                                We implement our own analytics via a server-side Google Tag Manager container. This means
                                some data is processed on our server before being forwarded to analytics and ad platforms —
                                rather than being sent directly from your browser.
                            </P>
                            <P>
                                This approach uses fewer client-side cookies, reduces browser fingerprinting risk, lets us
                                strip PII before it reaches third parties, and improves measurement accuracy even for visitors
                                using ad blockers. Your consent controls still apply.
                            </P>
                        </Section>

                        <Section id="your-controls" title="Your Controls">
                            <SubHeading>Cookie banner</SubHeading>
                            <P>
                                When you first visit, our consent banner lets you accept all, reject non-essential, or
                                customise by category. Your choice is saved for future visits.
                            </P>

                            <SubHeading>Browser settings</SubHeading>
                            <P>
                                You can block or delete cookies directly in your browser. Instructions vary by browser —
                                search &quot;manage cookies&quot; in your browser&apos;s help centre, or use the links below:
                            </P>
                            <div className="mt-3 flex flex-wrap gap-2">
                                {[
                                    { name: 'Chrome', url: 'https://support.google.com/chrome/answer/95647' },
                                    { name: 'Firefox', url: 'https://support.mozilla.org/kb/cookies-information-websites-store-on-your-computer' },
                                    { name: 'Safari', url: 'https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac' },
                                    { name: 'Edge', url: 'https://support.microsoft.com/windows/delete-and-manage-cookies' },
                                ].map((b) => (
                                    <a
                                        key={b.name}
                                        href={b.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                                    >
                                        {b.name}
                                    </a>
                                ))}
                            </div>

                            <SubHeading>Opt-out tools</SubHeading>
                            <div className="flex flex-wrap gap-2 mt-3">
                                {[
                                    { name: 'Google Ads Settings', url: 'https://adssettings.google.com/' },
                                    { name: 'Meta Ad Preferences', url: 'https://www.facebook.com/adpreferences/' },
                                    { name: 'YourAdChoices', url: 'https://youradchoices.com/' },
                                ].map((b) => (
                                    <a
                                        key={b.name}
                                        href={b.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="px-4 py-2 border border-slate-200 rounded-lg text-sm text-slate-600 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
                                    >
                                        {b.name}
                                    </a>
                                ))}
                            </div>

                            <div className="mt-8 p-5 bg-slate-50 rounded-xl border border-slate-200">
                                                <p className="text-base text-slate-600 leading-relaxed">
                                    <strong className="text-slate-800">Note:</strong> Disabling strictly necessary cookies
                                    will affect how the site functions. Disabling analytics cookies won&apos;t change your
                                    browsing experience but limits our ability to improve the site.
                                </p>
                            </div>
                        </Section>

                        <Section id="updates" title="Updates">
                            <P>
                                As our website evolves, the cookies we use may change. We&apos;ll update this policy and
                                revise the &quot;Last updated&quot; date. Continued use of our site after updates constitutes acceptance.
                            </P>
                        </Section>

                        <Section id="contact" title="Contact">
                            <P>Questions about how we track? We&apos;re happy to walk you through it.</P>
                            <ContactCard />
                        </Section>

                        <div className="mt-16 pt-8 border-t border-slate-100 flex flex-wrap gap-4 text-sm">
                            <Link href="/privacy" className="text-slate-500 hover:text-indigo-600 transition-colors">Privacy Policy</Link>
                            <Link href="/terms" className="text-slate-500 hover:text-indigo-600 transition-colors">Terms of Service</Link>
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
