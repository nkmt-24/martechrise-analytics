import React from 'react';
import Button from '@/components/ui/Button';
import { aboutCtaContent } from './content';

const AboutCta: React.FC = () => {
    return (
        <section className="py-32 border-t border-slate-100">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-8">{aboutCtaContent.title}</h2>
                <p className="text-slate-500 mb-12 max-w-xl mx-auto text-lg leading-relaxed">
                    {aboutCtaContent.description}
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    {aboutCtaContent.ctas.map((cta, i) => (
                        <Button
                            key={i}
                            variant={cta.variant}
                            href={cta.href}
                            className="h-16 px-12 text-lg"
                        >
                            {cta.text}
                        </Button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutCta;
