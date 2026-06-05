import React from 'react';
import { ScrollReveal } from '@/components/ui/ScrollReveal.client';

export default function IndustriesOverview() {
  return (
    <section aria-labelledby="overview-heading" className="py-24 md:py-32 bg-white">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <div className="max-w-3xl">
            <h2 id="overview-heading" className="text-sm font-mono font-medium tracking-widest uppercase text-slate-500 mb-6">
              The Architecture Problem
            </h2>
            <p className="text-2xl md:text-4xl font-medium text-slate-900 leading-[1.3] tracking-tight">
              Generic analytics setups are designed for simple content sites. When applied to complex e-commerce funnels or secure financial applications, they <span className="text-slate-400">inevitably break</span>—causing revenue discrepancies, compliance violations, and marketing inefficiencies.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
