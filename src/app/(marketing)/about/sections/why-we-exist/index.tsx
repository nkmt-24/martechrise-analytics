import React from 'react';
import { whyWeExistContent } from './content';

const WhyWeExist: React.FC = () => {
    return (
        <section className="py-32 bg-slate-50">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl font-bold text-slate-900 mb-8">{whyWeExistContent.title}</h2>
                    <p className="text-xl text-slate-600 leading-relaxed font-medium">
                        {whyWeExistContent.description}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {whyWeExistContent.painPoints.map((item, i) => (
                        <div key={i} className="p-10 bg-white rounded-2xl border border-slate-100 shadow-sm">
                            <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyWeExist;
