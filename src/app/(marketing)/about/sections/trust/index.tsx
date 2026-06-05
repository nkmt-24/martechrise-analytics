import React from 'react';
import { trustContent } from './content';

const Trust: React.FC = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-4xl font-bold text-slate-900 mb-12">{trustContent.title}</h2>
                <div className="grid md:grid-cols-3 gap-12 max-w-5xl mx-auto">
                    {trustContent.reasons.map((item, i) => (
                        <div key={i} className="flex flex-col items-center">
                            <div className="w-16 h-16 bg-indigo-50 text-indigo-600 rounded-2xl flex items-center justify-center mb-6">
                                <item.icon size={32} />
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-4">{item.title}</h4>
                            <p className="text-slate-500 leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Trust;
