import React from 'react';
import Link from 'next/link';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from '@/components/ui/ScrollReveal.client';

export interface IndustryData {
  id: string;
  title: string;
  headline: string;
  description: string;
  icon: React.ElementType;
  challengesTitle: string;
  challenges: { title: string; desc: string }[];
  servicesTitle: string;
  services: { title: string; href: string; desc: string }[];
  platformsTitle: string;
  platformsDesc: string;
  platforms: string[];
}

export default function IndustryBlock({ data, index }: { data: IndustryData; index: number }) {
  const isEven = index % 2 === 0;

  return (
    <section id={data.id} aria-labelledby={`${data.id}-heading`} className="py-24 bg-white border-t border-slate-200 scroll-mt-10">
      <div className="container mx-auto px-6 max-w-7xl">

        {/* Header & Main Content Split */}
        <div className="grid lg:grid-cols-12 gap-16 mb-32 items-start">
          <div className={`lg:col-span-5 ${isEven ? 'order-1' : 'order-1 lg:order-2'}`}>
            <ScrollReveal>
              <div className="mb-6">
                <span className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-400 text-xs font-medium text-slate-500 mb-6 shadow-sm">
                  {data.title}
                </span>
              </div>
              <h2 id={`${data.id}-heading`} className="text-3xl md:text-4xl font-medium text-slate-900 mb-6 leading-tight tracking-tight">
                {data.headline}
              </h2>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                {data.description}
              </p>

              <Link
                href="/analytics-audit"
                className="group inline-flex items-center gap-3 text-base font-medium text-blue-900 hover:text-blue-600 transition-colors"
              >
                <span>Book a Technical Audit</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </ScrollReveal>
          </div>

          <div className={`lg:col-span-7 ${isEven ? 'order-2' : 'order-2 lg:order-1'}`}>
            <ScrollReveal delay={0.1}>
              <div className="border border-slate-200 rounded-lg overflow-hidden bg-white">
                <div className="bg-slate-300 px-6 py-4 border-b border-slate-200 flex items-center gap-2">
                  <data.icon className="w-5 h-5 text-slate-500" aria-hidden="true" />
                  <h3 className="text-base font-medium text-slate-900">{data.challengesTitle}</h3>
                </div>
                <div className="divide-y divide-slate-100">
                  {data.challenges.map((item, i) => (
                    <article key={i} className="p-6 md:p-8 hover:bg-slate-50 transition-colors">
                      <h4 className="text-lg font-medium text-slate-900 mb-2">{item.title}</h4>
                      <p className="text-base text-slate-600 leading-relaxed">{item.desc}</p>
                    </article>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Recommended Services Grid */}
        <div className="mb-32">
          <ScrollReveal>
            <div className="flex items-end justify-between mb-8 pb-4 border-b border-slate-200">
              <h3 className="text-xl font-medium text-slate-900">{data.servicesTitle}</h3>
              <Link href="/services" className="text-base font-medium text-slate-500 hover:text-slate-900 transition-colors hidden sm:inline-flex items-center gap-1">
                View all <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {data.services.map((svc, idx) => (
                <Link key={idx} href={svc.href} className="group flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-slate-400 group-hover:bg-slate-50 transition-colors">
                      <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" aria-hidden="true" />
                    </div>
                  </div>
                  <h4 className="text-base font-medium text-slate-900 mb-2">{svc.title}</h4>
                  <p className="text-base text-slate-500 leading-relaxed">{svc.desc}</p>
                </Link>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Supported Platforms (Minimal list) */}
        <ScrollReveal delay={0.1}>
          <div className="bg-slate-950 text-white rounded-lg p-10 md:p-16 flex flex-col md:flex-row items-center justify-between gap-10">
            <div className="max-w-md">
              <h3 className="text-2xl font-medium mb-3">{data.platformsTitle}</h3>
              <p className="text-slate-400 text-base leading-relaxed">{data.platformsDesc}</p>
            </div>
            <div className="flex flex-wrap gap-4 justify-start md:justify-end">
              {data.platforms.map((platform, idx) => (
                <div key={idx} className="px-4 py-2 border border-slate-800 rounded-md bg-slate-900">
                  <span className="text-base font-mono text-slate-300">{platform}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
