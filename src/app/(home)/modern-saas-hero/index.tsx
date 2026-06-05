"use client";

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { CreditCard, Search, LayoutDashboard, Users, PieChart, Map, MessageCircle, Briefcase, Download, ArrowUpRight, Flame, BarChart3, TrendingUp, Star, Edit2, MoreHorizontal } from 'lucide-react';

const FloatingIcon = ({
    children,
    className,
    delay = 0,
    baseRotation = 0
}: {
    children: React.ReactNode,
    className: string,
    delay?: number,
    baseRotation?: number
}) => {
    return (
        <motion.div
            className={`absolute shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] rounded-[2rem] bg-white border border-slate-100 flex items-center justify-center p-4 ${className}`}
            initial={{ y: 20, opacity: 0, rotate: baseRotation }}
            animate={{
                y: [0, -20, 0],
                opacity: 1,
                rotate: [baseRotation - 4, baseRotation + 4, baseRotation - 4]
            }}
            transition={{
                y: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay
                },
                rotate: {
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: delay + 0.5
                },
                opacity: { duration: 0.8, delay: delay * 0.2 }
            }}
        >
            {children}
        </motion.div>
    );
};

const DashboardMockup = () => {
    return (
        <div className="w-full max-w-6xl mx-auto bg-white rounded-t-3xl border border-slate-200/80 shadow-2xl overflow-hidden flex relative group h-[280px] sm:h-[400px] lg:h-[600px]">
            <img
                src="/assets/1.png"
                alt="Analytics Dashboard Mockup"
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.01]"
                onError={(e) => {
                    (e.target as HTMLImageElement).src = '/assets/1.png';
                }}
            />
            {/* Inner stroke for premium feel */}
            <div className="absolute inset-0 ring-1 ring-inset ring-slate-900/10 pointer-events-none rounded-t-3xl"></div>
        </div>
    );
};

const ModernSaaSHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const rotateX = useTransform(scrollYProgress, [0, 0.4], [30, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.4], [0.85, 1]);
    const y = useTransform(scrollYProgress, [0, 0.4], [100, 0]);
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);

    return (
        <section ref={containerRef} className="relative pt-32 pb-0 overflow-hidden bg-[#fafafa] min-h-screen">

            {/* Background Glows */}
            <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-[100%] bg-blue-500/10 blur-[100px] pointer-events-none" />

            {/* Floating Icons positioned viewport-relative */}
            <FloatingIcon className="w-[100px] h-[100px] top-[10%] left-[8%] xl:left-[12%] hidden lg:flex" delay={0} baseRotation={-8}>
                <svg viewBox="0 0 48 48" fill="none" className="w-[60px] h-[60px] text-blue-500">
                    <circle cx="24" cy="24" r="20" fill="currentColor" />
                    <path d="M16 30l16-16" stroke="white" strokeWidth="6" strokeLinecap="round" />
                    <path d="M30 34l8-10" stroke="white" strokeWidth="6" strokeLinecap="round" />
                </svg>
            </FloatingIcon>

            <FloatingIcon className="w-[100px] h-[100px] top-[12%] right-[8%] xl:right-[12%] hidden lg:flex" delay={1} baseRotation={6}>
                <svg viewBox="0 0 48 48" fill="none" className="w-[64px] h-[64px] text-orange-500">
                    <path d="M12 36V24c0-6.627 5.373-12 12-12s12 5.373 12 12v12" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                    <path d="M24 36v-4" stroke="currentColor" strokeWidth="10" strokeLinecap="round" />
                </svg>
            </FloatingIcon>

            <FloatingIcon className="w-[110px] h-[110px] top-[40%] left-[10%] xl:left-[15%] hidden lg:flex" delay={0.5} baseRotation={-12}>
                <svg viewBox="0 0 48 48" fill="none" className="w-[60px] h-[60px] text-slate-900">
                    <path d="M14 36V12l20 24V12" stroke="currentColor" strokeWidth="10" strokeLinecap="round" strokeLinejoin="miter" />
                </svg>
            </FloatingIcon>

            <FloatingIcon className="w-[110px] h-[110px] top-[45%] right-[10%] xl:right-[15%] hidden lg:flex" delay={1.5} baseRotation={10}>
                <svg viewBox="0 0 48 48" fill="none" className="w-[64px] h-[64px] text-blue-800">
                    <path d="M24 6l16 9v18l-16 9-16-9V15l16-9z" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                    <circle cx="24" cy="24" r="6" fill="currentColor" />
                </svg>
            </FloatingIcon>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center">

                    {/* Trusted Badge */}
                    <div className="flex items-center gap-3 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-600 font-medium text-sm mb-8">
                        <div className="flex -space-x-2">
                            <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=1" alt="Avatar 1" />
                            <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=2" alt="Avatar 2" />
                            <img className="w-6 h-6 rounded-full border border-white" src="https://i.pravatar.cc/100?img=3" alt="Avatar 3" />
                        </div>
                        Trusted by 1M+ users
                    </div>

                    {/* Headline - Primary H1 */}
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[80px] font-black text-slate-900 tracking-[-0.03em] leading-[1.05] mb-6 max-w-4xl mx-auto text-balance">
                        Enterprise Digital Analytics <br className="hidden md:block" /> &amp; Data Strategy
                    </h1>

                    {/* Subheadline - H2 for Semantic Hierarchy */}
                    <h2 className="text-xl md:text-2xl text-slate-500 font-medium max-w-[600px] mx-auto mb-10 leading-relaxed text-balance">
                        Turn scattered data into smart decisions. One simple dashboard to track your SaaS growth, MRR, churn, and user behavior.
                    </h2>

                    {/* CTA */}
                    <div className="flex flex-col items-center gap-4 mb-20">
                        <Button href="/contact" className="h-14 px-8 rounded-xl bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 transition-all text-lg font-semibold">
                            Get Started For Free
                        </Button>
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-medium">
                            <CreditCard size={16} className="text-blue-500" /> No credit card required
                        </div>
                    </div>
                </div>
            </div>

            {/* 3D Dashboard Container */}
            <div className="relative flex justify-center perspective-[2000px] mt-24">
                {/* Huge Blue Glow Behind Dashboard */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] rounded-[100%] bg-blue-400/20 blur-[120px] pointer-events-none" />

                <motion.div
                    style={{
                        rotateX,
                        scale,
                        y,
                        opacity,
                        transformStyle: "preserve-3d",
                    }}
                    className="w-full origin-bottom"
                >
                    <DashboardMockup />
                </motion.div>
            </div>

            {/* Base Fade to next section */}
            <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#fafafa] to-transparent z-20 pointer-events-none" />
        </section>
    );
};

export default ModernSaaSHero;
