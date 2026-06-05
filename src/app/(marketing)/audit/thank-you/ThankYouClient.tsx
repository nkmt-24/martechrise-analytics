"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2, ChevronRight, FileSearch, Lightbulb } from 'lucide-react';

const ThankYouClient: React.FC = () => {
    return (
        <div className="pt-40 pb-24 min-h-[90vh] bg-slate-50 flex flex-col items-center justify-center relative overflow-hidden">
            
            {/* Background elements */}
            <div className="absolute top-0 right-0 -m-32 w-64 h-64 bg-indigo-100 rounded-full blur-3xl opacity-50" />
            <div className="absolute bottom-0 left-0 -m-32 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-50" />

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-2xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ type: "spring", stiffness: 200, damping: 20 }}
                        className="w-64 h-64 mx-auto mb-12 relative"
                    >
                        <Image 
                            src="/images/audit-success.png" 
                            alt="Success Celebration" 
                            fill 
                            className="object-contain drop-shadow-2xl"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight leading-tight mb-4 flex items-center justify-center gap-3 flex-wrap">
                            <CheckCircle2 className="text-green-500 w-10 h-10 md:w-12 md:h-12 flex-shrink-0" /> 
                            Thanks! Your Free Audit Request is Confirmed
                        </h1>
                        <p className="text-xl text-slate-500 font-medium mb-12">
                            Our team will get back to you within 24-48 hours.
                        </p>

                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <Link 
                                href="/case-studies"
                                className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-indigo-600 px-8 py-4 text-base font-bold text-white shadow-lg shadow-indigo-500/30 transition-all hover:bg-indigo-700 hover:shadow-indigo-500/50 hover:-translate-y-1 w-full sm:w-auto"
                            >
                                <FileSearch size={18} />
                                See Case Studies
                                <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>

                            <Link 
                                href="/blog"
                                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-slate-200 px-8 py-4 text-base font-bold text-slate-700 shadow-sm transition-all hover:bg-slate-50 hover:border-indigo-200 hover:text-indigo-600 hover:-translate-y-1 w-full sm:w-auto"
                            >
                                <Lightbulb size={18} />
                                View Insights
                                <ChevronRight size={16} className="text-slate-400 group-hover:translate-x-1 group-hover:text-indigo-600 transition-all" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default ThankYouClient;
