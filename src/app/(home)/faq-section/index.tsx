import React from 'react';
import FAQ from '@/components/common/FAQ';
import { HOME_FAQ } from '@/constants';

const FAQSection: React.FC = () => {
    return (
        <section className="py-32 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-20">
                    <h2 className="text-4xl font-bold text-slate-900 mb-6">Common Industry Queries</h2>
                    <p className="text-slate-500">Structured answers to enterprise analytics challenges.</p>
                </div>
                <FAQ items={HOME_FAQ} />
            </div>
        </section>
    );
};

export default FAQSection;
