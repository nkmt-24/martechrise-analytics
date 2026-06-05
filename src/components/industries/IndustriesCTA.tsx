import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal.client';

export default function IndustriesCTA() {
  return (
    <section aria-labelledby="cta-heading" className="py-32 bg-white border-t border-slate-200">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <ScrollReveal>
          <div className="mb-6">
            <span className="text-sm font-mono font-medium tracking-widest uppercase text-slate-500">
              Next Steps
            </span>
          </div>
          
          <h2 id="cta-heading" className="text-3xl md:text-5xl font-medium text-slate-900 mb-8 tracking-tight">
            Ready to upgrade your infrastructure?
          </h2>
          
          <p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
            Whether you need to recover lost e-commerce revenue data or secure your fintech tracking systems, our implementation engineers are ready to assist.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link
              href="/analytics-audit"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-white bg-slate-900 rounded hover:bg-slate-800 transition-colors"
            >
              Request Technical Audit
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3 text-base font-medium text-slate-900 bg-white border border-slate-300 rounded hover:bg-slate-50 transition-colors"
            >
              Contact Engineering Team
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
