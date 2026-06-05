import React from 'react';
import { philosophyContent } from './content';

const Philosophy: React.FC = () => {
    return (
        <section className="py-32 bg-slate-900 text-white overflow-hidden relative">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_0.5px,transparent_0.5px)] [background-size:24px_24px]"></div>
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="text-4xl font-bold mb-8">{philosophyContent.title}</h2>
                        <div className="space-y-12">
                            {philosophyContent.points.map((p, i) => {
                                const Icon = p.icon;
                                return (
                                    <div key={i} className="flex gap-6">
                                        <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center flex-shrink-0 text-indigo-400">
                                            <Icon size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-xl font-bold mb-2">{p.title}</h4>
                                            <p className="text-slate-400 leading-relaxed">{p.desc}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div className="bg-white/5 p-12 rounded-[2rem] border border-white/10">
                        <h3 className="text-2xl font-bold mb-6">{philosophyContent.governance.title}</h3>
                        <p className="text-slate-400 leading-relaxed mb-8">
                            {philosophyContent.governance.description}
                        </p>
                        <div className="grid grid-cols-2 gap-4">
                            {philosophyContent.governance.metrics.map((m, i) => (
                                <div key={i} className="p-4 bg-white/5 rounded-lg border border-white/5 text-center">
                                    <div className="text-2xl font-bold text-indigo-400">{m.value}</div>
                                    <div className="text-[10px] uppercase font-bold tracking-[0.2em] opacity-60">{m.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
