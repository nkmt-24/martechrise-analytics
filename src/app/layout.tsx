import type { Metadata } from 'next';
import { Inter, Instrument_Serif, Caveat } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import FloatingContact from '@/components/layout/FloatingContact';
import NextTopLoader from 'nextjs-toploader';
import AuthProvider from '@/components/providers/AuthProvider';
import { siteConfig } from '@/config/site';

// Fonts
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const instrumentSerif = Instrument_Serif({ weight: '400', subsets: ['latin'], variable: '--font-instrument-serif', style: ['italic', 'normal'] });
const caveat = Caveat({ subsets: ['latin'], variable: '--font-caveat', weight: ['400', '700'] });

export const metadata: Metadata = {
    title: {
        default: siteConfig.seo.defaultTitle,
        template: siteConfig.seo.titleTemplate,
    },
    description: siteConfig.seo.defaultDescription,
    icons: {
        icon: '/icon.png',
        apple: '/icon.png',
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" data-scroll-behavior="smooth" className={`${inter.variable} ${instrumentSerif.variable} ${GeistSans.variable} ${caveat.variable} scroll-smooth`}>
            <body>
                <AuthProvider>
                    <NextTopLoader color="#7c3aed" showSpinner={false} />
                    <Navbar />
                    {children}
                    <FloatingContact />
                </AuthProvider>
                <Footer />
            </body>
        </html>
    );
}
