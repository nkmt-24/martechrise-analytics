"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { CheckCircle2, MessageSquare, Calendar, Code, FolderKanban, Search, Lightbulb, FileText, MousePointer2 } from 'lucide-react';
import Button from '@/components/ui/Button';

const ProcessSection: React.FC = () => {
    // Animation Variants
    const fadeUp: Variants = {
        hidden: { opacity: 0, y: 40 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15
            }
        }
    };

    const listItemVariant: Variants = {
        hidden: { opacity: 0, x: -20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.4, ease: "easeOut" } }
    };

    const cardVariant: Variants = {
        hidden: { opacity: 0, scale: 0.9, y: 20 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
    };

    const pathVariant: Variants = {
        hidden: { pathLength: 0, opacity: 0 },
        visible: { pathLength: 1, opacity: 1, transition: { duration: 1.2, ease: "easeInOut" } }
    };

    const nodeVariant: Variants = {
        hidden: { opacity: 0, scale: 0.8 },
        visible: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } }
    };

    return (
        <section className="py-24 bg-white font-sans overflow-hidden">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-20 md:mb-32 flex flex-col items-center"
                >
                    <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 text-slate-600 text-sm font-semibold mb-8 shadow-sm">
                        Process
                    </motion.div>
                    <motion.h2 variants={fadeUp} className="text-4xl md:text-5xl lg:text-[56px] font-bold text-[#0B0F19] leading-[1.1] tracking-tight mb-6">
                        Getting started in simple steps
                    </motion.h2>
                    <motion.p variants={fadeUp} className="text-lg text-slate-500 leading-relaxed max-w-2xl">
                        Bring all your work together in one workspace. Connect your tools,
                        organize tasks automatically, and move faster with AI-powered insights.
                    </motion.p>
                </motion.div>

                {/* Steps Container */}
                <div className="relative w-full">
                    {/* Vertical Connecting Line (Desktop) */}
                    <motion.div
                        initial={{ scaleY: 0, originY: 0 }}
                        whileInView={{ scaleY: 1 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        viewport={{ once: true, margin: "-200px" }}
                        className="hidden md:block absolute left-1/2 top-[5%] bottom-[5%] w-px bg-slate-100 -translate-x-1/2 z-0"
                    />

                    {/* Step 1 */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-0 items-center mb-24 md:mb-32">
                        {/* Step 1: Text (Left) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className="md:pr-12 lg:pr-24 order-2 md:order-1 flex justify-center md:justify-end"
                        >
                            <div className="max-w-[400px]">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#0B0F19] mb-4 leading-tight">
                                    Connect all your tools<br />into one workspace
                                </h3>
                                <p className="text-slate-500 mb-8 text-base md:text-lg leading-relaxed">
                                    Bring your work together by connecting the tools you already use. Veylo keeps everything in sync, so nothing falls through the cracks.
                                </p>
                                <motion.ul variants={staggerContainer} className="space-y-4">
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Import existing work
                                    </motion.li>
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Sync tools instantly
                                    </motion.li>
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Start with live data
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </motion.div>

                        {/* Step 1: Number (Center) */}
                        <div className="hidden md:flex flex-col items-center justify-center relative z-10 order-1 md:order-2 px-8">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 200, damping: 15 }}
                                className="w-10 h-10 bg-[#0B0F19] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-white"
                            >
                                1
                            </motion.div>
                        </div>

                        {/* Step 1: Visual (Right) */}
                        <div className="md:pl-12 lg:pl-24 order-3 flex justify-center md:justify-start">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className="relative w-full max-w-[400px] aspect-[4/3] flex items-center justify-center"
                            >
                                {/* Blurred Background */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-blue-50/80 via-pink-50/80 to-purple-50/80 blur-3xl rounded-full"
                                />

                                <div className="relative w-full flex flex-col gap-4 z-10 px-4 md:px-0">
                                    {/* Card 1: MessageSquare */}
                                    <motion.div variants={cardVariant} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center justify-between border border-slate-100/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center">
                                                <MessageSquare className="w-5 h-5 text-orange-500" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-700">Connect with MessageSquare</span>
                                        </div>
                                        {/* Toggle Off */}
                                        <div className="bg-slate-200 w-11 h-6 rounded-full flex items-center p-1 cursor-pointer">
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                                        </div>
                                    </motion.div>

                                    {/* Card 2: Calendar (Active) */}
                                    <motion.div
                                        variants={cardVariant}
                                        whileHover={{ y: -5 }}
                                        className="bg-white rounded-2xl shadow-[0_15px_40px_rgb(0,0,0,0.08)] p-4 flex items-center justify-between border border-slate-100 z-10 scale-[1.03] transform"
                                    >
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                                                <Calendar className="w-5 h-5 text-blue-600" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-800">Connect with Calendar</span>
                                        </div>
                                        {/* Toggle On */}
                                        <div className="bg-[#0B0F19] w-11 h-6 rounded-full flex items-center justify-end p-1 cursor-pointer">
                                            <motion.div
                                                layout
                                                className="w-4 h-4 bg-white rounded-full shadow-sm"
                                            />
                                        </div>
                                    </motion.div>

                                    {/* Card 3: Code */}
                                    <motion.div variants={cardVariant} className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] p-4 flex items-center justify-between border border-slate-100/60 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow">
                                        <div className="flex items-center gap-4">
                                            <div className="w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center">
                                                <Code className="w-5 h-5 text-slate-700" />
                                            </div>
                                            <span className="text-sm font-semibold text-slate-700">Connect with Code</span>
                                        </div>
                                        {/* Toggle Off */}
                                        <div className="bg-slate-200 w-11 h-6 rounded-full flex items-center p-1 cursor-pointer">
                                            <div className="w-4 h-4 bg-white rounded-full shadow-sm" />
                                        </div>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>
                    </div>


                    {/* Step 2 */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-0 items-center mb-24 md:mb-32">
                        {/* Step 2: Visual (Left) */}
                        <div className="md:pr-12 lg:pr-24 order-3 md:order-1 flex justify-center md:justify-end">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className="relative w-full max-w-[400px] aspect-[4/3] flex items-center justify-center"
                            >
                                {/* Background Highlights */}
                                <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:24px_24px] opacity-40 rounded-3xl" />
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] h-[110%] bg-gradient-to-tr from-pink-50/80 via-blue-50/60 to-purple-50/80 blur-3xl rounded-full"
                                />

                                <div className="relative w-full h-full z-10 mt-12">
                                    {/* Lines SVG */}
                                    <svg className="absolute inset-0 w-full h-full" style={{ zIndex: 0, pointerEvents: 'none' }}>
                                        {/* Trunk */}
                                        <motion.path variants={pathVariant} d="M 50% 80% L 50% 55%" stroke="#cbd5e1" strokeWidth="2" fill="none" />

                                        {/* Top Level Nodes */}
                                        <motion.path variants={pathVariant} d="M 50% 55% Q 20% 55% 20% 30%" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                                        <motion.path variants={pathVariant} d="M 50% 55% L 50% 30%" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                                        <motion.path variants={pathVariant} d="M 50% 55% Q 80% 55% 80% 30%" stroke="#cbd5e1" strokeWidth="2" fill="none" />

                                        {/* Mid Level Nodes */}
                                        <motion.path variants={pathVariant} d="M 20% 55% Q 35% 55% 35% 45%" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                                        <motion.path variants={pathVariant} d="M 80% 55% Q 65% 55% 65% 45%" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                                        <motion.path variants={pathVariant} d="M 50% 55% Q 65% 55% 60% 45%" stroke="#cbd5e1" strokeWidth="2" fill="none" />
                                    </svg>

                                    {/* Bottom Root Node */}
                                    <motion.div variants={nodeVariant} whileHover={{ scale: 1.05 }} className="absolute bottom-[20%] left-1/2 -translate-x-1/2 bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 px-5 py-3 flex items-center gap-3 z-10 cursor-pointer hover:shadow-lg transition-all duration-300">
                                        <div className="w-8 h-8 rounded-lg bg-pink-500 flex items-center justify-center">
                                            <FolderKanban className="w-4 h-4 text-white" />
                                        </div>
                                        <span className="text-sm font-bold text-slate-800 whitespace-nowrap">New Project Planning</span>
                                    </motion.div>

                                    {/* Top Level Labels */}
                                    <motion.div variants={nodeVariant} className="absolute top-[30%] left-[20%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm border border-slate-100 px-3.5 py-1.5 z-10 text-xs font-semibold text-slate-700 whitespace-nowrap hover:shadow-md transition-shadow">
                                        Assigned people
                                    </motion.div>
                                    <motion.div variants={nodeVariant} className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm border border-slate-100 px-3.5 py-1.5 z-10 text-xs font-semibold text-slate-700 whitespace-nowrap hover:shadow-md transition-shadow">
                                        Availability
                                    </motion.div>
                                    <motion.div variants={nodeVariant} className="absolute top-[30%] left-[80%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm border border-slate-100 px-3.5 py-1.5 z-10 text-xs font-semibold text-slate-700 whitespace-nowrap hover:shadow-md transition-shadow">
                                        Estimated effort
                                    </motion.div>

                                    {/* Mid Level Labels */}
                                    <motion.div variants={nodeVariant} className="absolute top-[45%] left-[30%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm border border-slate-100 px-3.5 py-1.5 z-10 text-xs font-semibold text-slate-700 whitespace-nowrap hover:shadow-md transition-shadow">
                                        Priorities
                                    </motion.div>
                                    <motion.div variants={nodeVariant} className="absolute top-[45%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm border border-slate-100 px-3.5 py-1.5 z-10 text-xs font-semibold text-slate-700 whitespace-nowrap hover:shadow-md transition-shadow">
                                        Deadlines
                                    </motion.div>
                                    <motion.div variants={nodeVariant} className="absolute top-[45%] left-[70%] -translate-x-1/2 -translate-y-1/2 bg-white rounded-xl shadow-sm border border-slate-100 px-3.5 py-1.5 z-10 text-xs font-semibold text-slate-700 whitespace-nowrap hover:shadow-md transition-shadow">
                                        Due dates
                                    </motion.div>
                                </div>
                            </motion.div>
                        </div>

                        {/* Step 2: Number (Center) */}
                        <div className="hidden md:flex flex-col items-center justify-center relative z-10 order-1 md:order-2 px-8">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
                                className="w-10 h-10 bg-[#0B0F19] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-white"
                            >
                                2
                            </motion.div>
                        </div>

                        {/* Step 2: Text (Right) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className="md:pl-12 lg:pl-24 order-2 md:order-3 flex justify-center md:justify-start"
                        >
                            <div className="max-w-[400px]">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#0B0F19] mb-4 leading-tight">
                                    Automatically organize work<br />around how you operate
                                </h3>
                                <p className="text-slate-500 mb-8 text-base md:text-lg leading-relaxed">
                                    Once connected, Veylo automatically organizes your work into clear tasks, timelines, and priorities, no manual setup required.
                                </p>
                                <motion.ul variants={staggerContainer} className="space-y-4">
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Auto-organize tasks
                                    </motion.li>
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Learn your workflow
                                    </motion.li>
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Adapt priorities daily
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </motion.div>
                    </div>


                    {/* Step 3 */}
                    <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-12 md:gap-0 items-center">
                        {/* Step 3: Text (Left) */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-100px" }}
                            variants={fadeUp}
                            className="md:pr-12 lg:pr-24 order-2 md:order-1 flex justify-center md:justify-end"
                        >
                            <div className="max-w-[400px]">
                                <h3 className="text-2xl md:text-3xl font-bold text-[#0B0F19] mb-4 leading-tight">
                                    Take action faster<br />with AI by your side
                                </h3>
                                <p className="text-slate-500 mb-8 text-base md:text-lg leading-relaxed">
                                    Get instant summaries, smarter schedules, and real-time suggestions that keep your work moving forward.
                                </p>
                                <motion.ul variants={staggerContainer} className="space-y-4">
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Instant summaries
                                    </motion.li>
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Smart next steps
                                    </motion.li>
                                    <motion.li variants={listItemVariant} className="flex items-center gap-3 text-slate-600 font-medium">
                                        <CheckCircle2 className="w-5 h-5 text-white fill-slate-400" /> Decisions, faster
                                    </motion.li>
                                </motion.ul>
                            </div>
                        </motion.div>

                        {/* Step 3: Number (Center) */}
                        <div className="hidden md:flex flex-col items-center justify-center relative z-10 order-1 md:order-2 px-8">
                            <motion.div
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.2 }}
                                className="w-10 h-10 bg-[#0B0F19] text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-lg ring-4 ring-white"
                            >
                                3
                            </motion.div>
                        </div>

                        {/* Step 3: Visual (Right) */}
                        <div className="md:pl-12 lg:pl-24 order-3 flex justify-center md:justify-start">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-100px" }}
                                variants={staggerContainer}
                                className="relative w-full max-w-[420px] pt-8 md:pt-0"
                            >
                                {/* Blurred Background */}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 1.5, ease: "easeOut" }}
                                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-pink-50/80 via-purple-50/60 to-blue-50/70 blur-3xl rounded-full"
                                />

                                <motion.div
                                    variants={fadeUp}
                                    className="relative bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] p-6 md:p-8 border border-slate-100 w-full z-10"
                                >
                                    <h4 className="text-sm font-bold text-slate-800 mb-3">Task description</h4>
                                    <div className="bg-slate-50 text-slate-500 text-sm leading-relaxed p-4 rounded-xl border border-slate-100 mb-6 w-full">
                                        Redesign the homepage with modern layout. Focus on responsiveness and improved navigation flow.
                                    </div>

                                    <h4 className="text-sm font-bold text-slate-800 mb-3">Quick AI actions</h4>
                                    <div className="flex gap-2 relative">
                                        {/* Action 1 */}
                                        <button className="flex-1 flex flex-col items-center justify-center gap-2 py-4 rounded-xl border border-slate-100 bg-white shadow-sm transition-all cursor-default">
                                            <Search className="w-5 h-5 text-slate-400" />
                                            <span className="text-xs font-semibold text-slate-600">Analyse</span>
                                        </button>

                                        {/* Action 2 */}
                                        <motion.button
                                            whileHover={{ scale: 1.06 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex-1 flex flex-col items-center justify-center gap-2 py-4 rounded-xl border border-slate-200 bg-slate-100 text-slate-900 shadow-sm relative transform scale-[1.03] z-10"
                                        >
                                            <Lightbulb className="w-5 h-5 text-slate-800" />
                                            <span className="text-xs font-bold">Ideas</span>

                                            {/* Mouse Cursor Highlight */}
                                            <motion.div
                                                initial={{ opacity: 0, x: 20, y: 20 }}
                                                whileInView={{ opacity: 1, x: 0, y: 0 }}
                                                transition={{ delay: 0.8, type: "spring", stiffness: 100 }}
                                                className="absolute bottom-[-10px] right-2 translate-y-1/2 translate-x-1/2 z-20 pointer-events-none"
                                            >
                                                <MousePointer2 className="w-6 h-6 text-[#0B0F19] fill-[#0B0F19] -rotate-[20deg]" />
                                                <div className="bg-[#0B0F19] text-white text-[10px] tracking-wide font-bold px-3 py-1.5 rounded-full absolute top-full left-1/2 -translate-x-1/2 mt-0.5 shadow-lg whitespace-nowrap">
                                                    Caitlyn
                                                </div>
                                            </motion.div>
                                        </motion.button>

                                        {/* Action 3 */}
                                        <button className="flex-1 flex flex-col items-center justify-center gap-2 py-4 rounded-xl border border-slate-100 bg-white shadow-sm transition-all cursor-default">
                                            <FileText className="w-5 h-5 text-slate-400" />
                                            <span className="text-xs font-semibold text-slate-600">Plan</span>
                                        </button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>

                {/* Footer CTA */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    variants={fadeUp}
                    className="text-center mt-32"
                >
                    <p className="text-slate-600 mb-6 font-medium text-lg">Everything you need to start is in place.</p>
                    <Button
                        href="/contact"
                        className="h-14 bg-[#0B0F19] hover:bg-slate-800 text-white px-8 rounded-xl font-semibold shadow-lg transition-all duration-300"
                    >
                        Start your setup
                    </Button>
                </motion.div>

            </div>
        </section>
    );
};

export default ProcessSection;
