"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { aboutHeroContent } from './content';

const AboutHero: React.FC = () => {
    return (
        <section className="pt-40 pb-20 border-b border-slate-100">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex flex-col items-center text-center max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 leading-tight">
                        {aboutHeroContent.title.main} <br />
                        <span className="text-indigo-600">{aboutHeroContent.title.highlight}</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed max-w-2xl font-medium">
                        {aboutHeroContent.subtitle}
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default AboutHero;
