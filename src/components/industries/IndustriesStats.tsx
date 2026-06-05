import React from 'react';
import { industryStats } from '@/data/industries';
import { ScrollReveal } from '@/components/ui/ScrollReveal.client';

export default function IndustriesStats() {
  return (
    <section aria-label="Key Industry Statistics" className="bg-slate-50 border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-slate-200">
            {industryStats.map((stat, i) => (
              <div key={i} className="flex flex-col items-start justify-center p-8 md:p-12">
                <span className="text-4xl md:text-5xl font-medium text-slate-900 mb-2 tracking-tight">{stat.val}</span>
                <span className="text-sm font-medium text-slate-500 uppercase tracking-wide">{stat.label}</span>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
