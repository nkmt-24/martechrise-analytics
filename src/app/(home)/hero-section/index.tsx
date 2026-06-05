"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Button from '@/components/ui/Button';
import { heroContent } from './content';
import { heroAnimations } from './animation';
import Image from 'next/image';

const HeroSection: React.FC = () => {
    return (
        <section className="relative pt-32 overflow-hidden bg-white">
            <div className="container mx-auto px-4 md:px-6 relative z-10">
                <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                    <motion.div
                        {...heroAnimations.container}
                        className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-700 text-xs font-bold tracking-tight mb-8"
                    >
                        {(() => {
                            const BadgeIcon = heroContent.badge.icon;
                            return <BadgeIcon size={14} />;
                        })()}
                        {heroContent.badge.text}
                    </motion.div>

                    <motion.h1
                        {...heroAnimations.title}
                        className="text-5xl md:text-8xl font-black text-slate-900 tracking-tight leading-[0.95] mb-8 text-balance"
                    >
                        {heroContent.title.main} <br />
                        <span className="text-indigo-600">{heroContent.title.highlight}</span>
                    </motion.h1>

                    <motion.p
                        {...heroAnimations.subtitle}
                        className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-4xl mb-12 text-balance font-medium"
                    >
                        {heroContent.subtitle}
                    </motion.p>

                    <motion.div
                        {...heroAnimations.ctas}
                        className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                    >
                        {heroContent.ctas.map((cta, i) => (
                            <Button
                                key={i}
                                variant={cta.variant}
                                href={cta.href}
                                className="w-full sm:w-auto h-14 px-8 text-lg"
                            >
                                {cta.text}
                            </Button>
                        ))}
                    </motion.div>
                </div>

                <motion.div
                    {...heroAnimations.dashboard}
                    className="mt-10 relative max-w-6xl mx-auto"
                >
                    <div className="aspect-[16/8] rounded-2xl overflow-hidden border border-slate-200 shadow-2xl relative">
                        <Image
                            src={heroContent.dashboardImage}
                            alt="Analytical Dashboard"
                            fill
                            className="w-full h-full object-contain object-center"
                        />
                        {/* <div className="absolute inset-0 bg-slate-900/5"></div> */}
                    </div>

                    {/* Floating Indicators */}
                    <div className="absolute top-1/2 -left-12 -translate-y-1/2 hidden xl:flex flex-col gap-4">
                        {heroContent.floatingIndicators.map((indicator, i) => {
                            const Icon = indicator.icon;
                            return (
                                <div key={i} className="bg-white p-4 rounded-xl border border-slate-100 shadow-xl flex items-center gap-4">
                                    <div className={`w-10 h-10 ${indicator.color === 'emerald' ? 'bg-emerald-100 text-emerald-600' : 'bg-indigo-100 text-indigo-600'} rounded-lg flex items-center justify-center`}>
                                        <Icon size={20} />
                                    </div>
                                    <div>
                                        <div className="text-sm font-bold text-slate-900">{indicator.title}</div>
                                        <div className="text-xs text-slate-400">{indicator.subtitle}</div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
