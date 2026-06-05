"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { strategicValueContent } from './content';

const StrategicValueSection: React.FC = () => {
    return (
        <section className="py-24 md:py-32 bg-slate-50 relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

                    {/* Left Content Column */}
                    <div>
                        <div className="mb-12">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight text-balance">
                                {strategicValueContent.title}
                            </h2>
                            <p className="text-slate-500 text-base md:text-lg leading-relaxed max-w-xl">
                                {strategicValueContent.description}
                            </p>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                            {strategicValueContent.propositions.map((prop, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1 }}
                                    className="p-5 md:p-8 rounded-2xl bg-white border border-slate-100 hover:border-indigo-100 hover:shadow-xl transition-all group"
                                >
                                    <div className="w-12 h-12 bg-indigo-50 text-indigo-600 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                                        <prop.icon size={24} />
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2 md:mb-3">{prop.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed">{prop.desc}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Right Image Placeholder Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative w-full h-[300px] sm:h-[400px] lg:h-full lg:min-h-[600px] rounded-3xl mt-12 lg:mt-0"
                    >
                        {/* Decorative glow behind the image */}
                        <div className="absolute inset-0 bg-indigo-400 rounded-3xl blur-[80px] opacity-20 translate-x-4 translate-y-4"></div>

                        <div className="relative w-full h-full rounded-3xl border border-slate-200/60 shadow-2xl bg-white overflow-hidden flex items-center justify-center group">

                            {/* Replace this src with your analytics report image path */}
                            <img
                                src="/assets/2.png"
                                alt="Strategic Analytics Report"
                                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                                onError={(e) => {
                                    // Fallback placeholder
                                    (e.target as HTMLImageElement).src = '/assets/2.png';
                                }}
                            />

                            {/* Inner stroke for premium glass effect feel */}
                            <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 rounded-3xl pointer-events-none"></div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};

export default StrategicValueSection;
