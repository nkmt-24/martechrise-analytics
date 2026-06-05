import React from 'react';
import Link from 'next/link';
import { INDUSTRIES, getIcon } from '@/constants';

const IndustriesSection: React.FC = () => {
    return (
        <section className="py-32 bg-slate-900 text-white rounded-[3rem] mx-4 md:mx-12 overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>
            <div className="container mx-auto px-8 relative z-10">
                <div className="max-w-3xl mb-20 text-balance">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">Vertical Domain Expertise</h2>
                    <p className="text-slate-400 text-lg">We build custom schemas tailored to the unique logic of your industry.</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {INDUSTRIES.map((industry, i) => (
                        <Link href={`/industries/${industry.slug}`} key={i} className="group p-8 border border-white/10 rounded-2xl hover:bg-white/5 transition-all">
                            <div className="w-10 h-10 bg-white/10 text-white rounded-lg flex items-center justify-center mb-6">
                                {getIcon(industry.icon)}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{industry.name}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed mb-6">{industry.solution}</p>
                            <div className="text-xs font-black uppercase tracking-widest text-indigo-400 group-hover:text-white transition-colors">Case Studies</div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesSection;
