"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
    question: string;
    answer: string;
}

const FAQ: React.FC<{ items: FAQItem[] }> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="max-w-3xl mx-auto divide-y divide-slate-100">
            {items.map((item, i) => (
                <div key={i} className="py-6">
                    <button
                        onClick={() => setOpenIndex(openIndex === i ? null : i)}
                        className="flex items-center justify-between w-full text-left group"
                    >
                        <span className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                            {item.question}
                        </span>
                        <ChevronDown
                            className={`w-5 h-5 text-slate-400 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                        />
                    </button>
                    <AnimatePresence>
                        {openIndex === i && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="pt-4 text-slate-600 leading-relaxed text-lg">
                                    {item.answer}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            ))}
        </div>
    );
};

export default FAQ;
