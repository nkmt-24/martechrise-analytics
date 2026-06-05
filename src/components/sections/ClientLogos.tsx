'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Maximize, Aperture, Component, Hexagon, Asterisk } from 'lucide-react';

const LOGOS = [
    {
        name: 'DigiMinds',
        icon: Asterisk,
    },
    {
        name: 'CozyNest',
        icon: Maximize,
    },
    {
        name: 'Energetix',
        icon: Aperture,
    },
    {
        name: 'ZestyBite',
        icon: Component,
    },
    {
        name: 'NexaTech',
        icon: Hexagon,
    },
];

const BrainGrowthIcon = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <defs>
            <linearGradient id="brainArrow" x1="20" y1="80" x2="85" y2="15" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#006b8f" />
                <stop offset="50%" stopColor="#0093a8" />
                <stop offset="100%" stopColor="#f27013" />
            </linearGradient>
        </defs>

        {/* Left Brain Hemisphere (Blue Network) */}
        <g stroke="#003d66" strokeWidth="1.5" strokeLinecap="round">
            <path d="M50 15 C30 15, 12 30, 12 50 C12 70, 25 80, 40 85" fill="none" strokeWidth="2.5" />
            <circle cx="35" cy="25" r="3" fill="#003d66" />
            <circle cx="20" cy="40" r="3" fill="#003d66" />
            <circle cx="25" cy="65" r="3" fill="#003d66" />
            <circle cx="45" cy="50" r="3" fill="#003d66" />
            <circle cx="40" cy="75" r="3" fill="#003d66" />
            <circle cx="15" cy="50" r="3" fill="#003d66" />
            <path d="M35 25 L20 40 L25 65 L40 75 L45 50 Z" />
            <path d="M35 25 L45 50" />
            <path d="M15 50 L20 40" />
            <path d="M15 50 L25 65" />
            <path d="M50 15 L35 25" />
            <path d="M40 85 L40 75" />
        </g>

        {/* Right Brain Hemisphere (Orange/Gold Network) */}
        <g stroke="#e67300" strokeWidth="1.5" strokeLinecap="round">
            <path d="M50 15 C70 15, 88 30, 88 50 C88 70, 75 80, 60 85" fill="none" strokeWidth="2.5" />
            <circle cx="65" cy="25" r="3" fill="#e67300" />
            <circle cx="80" cy="40" r="3" fill="#e67300" />
            <circle cx="75" cy="65" r="3" fill="#e67300" />
            <circle cx="55" cy="50" r="3" fill="#e67300" />
            <circle cx="60" cy="75" r="3" fill="#e67300" />
            <circle cx="85" cy="50" r="3" fill="#e67300" />
            <path d="M65 25 L80 40 L75 65 L60 75 L55 50 Z" />
            <path d="M65 25 L55 50" />
            <path d="M85 50 L80 40" />
            <path d="M85 50 L75 65" />
            <path d="M50 15 L65 25" />
            <path d="M60 85 L60 75" />
        </g>

        {/* Growth Arrow (Teal to Orange Gradient) */}
        <path d="M25 80 L55 45 L45 35 L85 15" stroke="url(#brainArrow)" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        <path d="M65 15 L85 15 L85 35" stroke="#f27013" strokeWidth="7" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </svg>
);

export default function ClientLogos() {
    return (
        <section className="py-6 md:py-8 border-y border-border/40 bg-background/50 overflow-hidden relative backdrop-blur-sm">
            <div className="container mx-auto px-4 md:px-8">
                <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 w-full">
                    
                    {/* Left Fixed Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="flex items-center gap-4 shrink-0 lg:pr-8 lg:border-r border-border/40"
                    >
                        <BrainGrowthIcon className="w-14 h-14 md:w-20 md:h-20 shrink-0 drop-shadow-sm" />
                        <h2 className="text-sm md:text-base font-display font-semibold uppercase tracking-wider max-w-[280px] text-foreground leading-snug">
                            We've done 500+ enterprise and business consulting.
                        </h2>
                    </motion.div>

                    {/* Right Marquee Wrapper */}
                    <div className="relative flex overflow-hidden group flex-1 w-full" style={{ '--gap': '4rem' } as React.CSSProperties}>
                        {/* Fade Gradients for edges */}
                        <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background/80 to-transparent z-10" />
                        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background/80 to-transparent z-10" />

                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                            className="flex gap-[var(--gap)] min-w-full"
                        >
                            {/* First Track */}
                            <div className="flex shrink-0 animate-marquee items-center justify-around gap-[var(--gap)] min-w-full">
                                {LOGOS.map((logo, idx) => (
                                    <div key={`logo-1-${idx}`} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default shrink-0">
                                        <logo.icon size={32} strokeWidth={2.5} className="text-foreground" />
                                        <span className="text-xl font-bold font-display tracking-tight text-foreground">{logo.name}</span>
                                    </div>
                                ))}
                            </div>

                            {/* Second Track (Duplicate for seamless loop) */}
                            <div className="flex shrink-0 animate-marquee items-center justify-around gap-[var(--gap)] min-w-full" aria-hidden="true">
                                {LOGOS.map((logo, idx) => (
                                    <div key={`logo-2-${idx}`} className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0 cursor-default shrink-0">
                                        <logo.icon size={32} strokeWidth={2.5} className="text-foreground" />
                                        <span className="text-xl font-bold font-display tracking-tight text-foreground">{logo.name}</span>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </section>
    );
}
