import React from 'react';
import Link from 'next/link';
import { ArrowDown } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal.client';

export default function IndustriesHero() {
  const topIndustries = [
    { name: "E-commerce & Retail", id: "#ecommerce" },
    { name: "Finance & Banking", id: "#finance" },
    { name: "Healthcare & Telehealth", id: "#healthcare" },
    { name: "Travel & Hospitality", id: "#travel" },
  ];

  return (
    <section aria-labelledby="hero-heading" className="relative bg-white text-slate-900 pt-20 pb-10 md:pt-28 md:pb-16 border-b border-slate-200">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 items-end">
          <div className="lg:col-span-7">
            <ScrollReveal delay={0}>
              <div className="mb-8">
                <span className="text-xs font-mono font-medium tracking-widest uppercase text-slate-500">
                  Industry Solutions
                </span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 id="hero-heading" className="text-5xl md:text-7xl font-medium mb-8 leading-[1.05] tracking-tight text-slate-900">
                Specialized Analytics for
                <span className="text-slate-500"> Complex Data</span>
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
                We build highly accurate, compliant, and robust tracking infrastructure tailored specifically for the rigorous demands of high-stakes industries where data integrity directly impacts revenue.
              </p>
            </ScrollReveal>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start lg:items-end pb-2">
            <ScrollReveal delay={0.3} className="flex flex-col gap-1 w-full sm:w-auto">
              {topIndustries.map((ind, i) => (
                <Link
                  key={i}
                  href={ind.id}
                  className="group flex items-center justify-between gap-8 border-b border-slate-200 py-3 text-slate-600 hover:text-slate-900 transition-colors w-full sm:min-w-[280px]"
                >
                  <span className="font-medium">{ind.name}</span>
                  <ArrowDown className="w-4 h-4 opacity-50 group-hover:opacity-100 group-hover:translate-y-1 transition-all" aria-hidden="true" />
                </Link>
              ))}
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
