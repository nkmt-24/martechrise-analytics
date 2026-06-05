import React from 'react';
import Button from '@/components/ui/Button';
import { auditCtaContent } from './content';

const AuditCtaSection: React.FC = () => {
    return (
        <section className="py-12 border-b border-slate-100 bg-slate-50/50">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                    <div className="max-w-xl">
                        <h2 className="text-2xl font-bold text-slate-900 mb-2">{auditCtaContent.title}</h2>
                        <p className="text-slate-600">{auditCtaContent.description}</p>
                    </div>
                    <div className="flex items-center gap-4">
                        {auditCtaContent.ctas.map((cta, i) => (
                            <Button
                                key={i}
                                variant={cta.variant}
                                href={cta.href}
                                className={`h-12 px-6 ${cta.className || ''}`}
                            >
                                {cta.text}
                            </Button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AuditCtaSection;
