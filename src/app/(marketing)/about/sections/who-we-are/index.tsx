import React from 'react';
import { whoWeAreContent } from './content';

const WhoWeAre: React.FC = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-20 items-center">
                    <div>
                        <h2 className="font-bold text-slate-900 mb-6 uppercase tracking-widest text-sm">{whoWeAreContent.badge}</h2>
                        <h3 className="text-4xl font-bold text-slate-900 mb-8 leading-tight">{whoWeAreContent.title}</h3>
                        <p className="text-slate-600 text-lg leading-relaxed mb-6">
                            {whoWeAreContent.description1}
                        </p>
                        <p className="text-slate-600 text-lg leading-relaxed">
                            {whoWeAreContent.description2}
                        </p>
                    </div>
                    <div className="relative">
                        <img
                            src={whoWeAreContent.image}
                            alt="MarTechRise Technical Team"
                            className="rounded-3xl shadow-2xl grayscale"
                        />
                        <div className="absolute -bottom-8 -right-8 bg-indigo-600 text-white p-8 rounded-2xl shadow-xl max-w-xs">
                            <div className="text-sm font-bold opacity-80 mb-2 uppercase tracking-widest">{whoWeAreContent.reachInfo.badge}</div>
                            <div className="text-2xl font-bold">{whoWeAreContent.reachInfo.text}</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhoWeAre;
