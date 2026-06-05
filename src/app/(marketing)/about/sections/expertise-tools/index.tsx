import React from 'react';
import { expertiseToolsContent } from './content';

const ExpertiseTools: React.FC = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center">{expertiseToolsContent.title}</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
                    {expertiseToolsContent.tools.map((tool, i) => (
                        <div key={i} className="p-6 border border-slate-100 rounded-xl flex items-center justify-center font-black text-slate-300 uppercase tracking-[0.2em] text-xs hover:text-indigo-600 hover:border-indigo-100 transition-all cursor-default">
                            {tool}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExpertiseTools;
