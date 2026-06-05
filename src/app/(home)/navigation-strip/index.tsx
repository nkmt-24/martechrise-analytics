import React from 'react';
import Link from 'next/link';

const NavigationStrip: React.FC = () => {
    return (
        <section className="py-12 border-t border-slate-100">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center gap-x-12 gap-y-4 text-sm font-bold text-slate-400 uppercase tracking-widest">
                    <Link href="/about" className="hover:text-indigo-600">Our Methodology</Link>
                    <Link href="/services/digital-analytics-implementation" className="hover:text-indigo-600">GA4 Migration</Link>
                    <Link href="/industries/e-commerce" className="hover:text-indigo-600">Ecommerce Strategy</Link>
                    <Link href="/blog" className="hover:text-indigo-600">Insights &amp; Tech Blueprint</Link>
                </div>
            </div>
        </section>
    );
};

export default NavigationStrip;
