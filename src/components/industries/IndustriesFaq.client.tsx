"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import { cn } from '@/lib/cn';
import { industriesFaq } from '@/data/industries';
import { ScrollReveal } from '@/components/ui/ScrollReveal.client';

export default function IndustriesFaq() {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  return (
    <section aria-labelledby="faq-heading" className="py-24 md:py-32 bg-white border-t border-slate-200" id="faq">
      <div className="container mx-auto px-6 max-w-4xl">
        <ScrollReveal>
          <div className="mb-16">
            <h2 id="faq-heading" className="text-3xl md:text-4xl font-medium text-slate-900 mb-4 tracking-tight">
              Implementation FAQs
            </h2>
            <p className="text-lg text-slate-600">
              Technical answers regarding analytics infrastructure.
            </p>
          </div>
          
          <div className="border-t border-slate-200">
            {industriesFaq.map((faq, index) => (
              <div 
                key={index} 
                className="border-b border-slate-200"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full text-left py-6 flex items-start justify-between focus:outline-none group"
                  aria-expanded={openFaqIndex === index}
                >
                  <span className={cn(
                    "text-lg font-medium pr-8 transition-colors duration-200",
                    openFaqIndex === index ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                  )}>
                    {faq.question}
                  </span>
                  <span className="flex-shrink-0 mt-1 text-slate-400 group-hover:text-slate-900 transition-colors">
                    {openFaqIndex === index ? <Minus className="w-4 h-4" aria-hidden="true" /> : <Plus className="w-4 h-4" aria-hidden="true" />}
                  </span>
                </button>
                <AnimatePresence>
                  {openFaqIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="pb-8 text-slate-600 leading-relaxed text-base pr-8">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
