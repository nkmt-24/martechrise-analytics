import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroIndustriesAnimation from "./HeroIndustriesAnimation";

export default function HeroIndustriesContent() {
  return (
    <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden text-center">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-b from-indigo-50/50 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-indigo-200/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 py-20 relative z-10 w-full flex flex-col items-center">
        <HeroIndustriesAnimation type="content" className="space-y-8 flex flex-col items-center">
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur-3xl">
            Industry Specific Analytics
          </div>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
            Analytics Built for Your Industry, <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Not Just Your Website
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
            Every business model has unique tracking challenges. We design analytics systems tailored to your industry's customer journey, compliance needs, and growth metrics.
          </p>
          <div className="pt-6">
            <Link href="#solutions" className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:scale-105">
              View Industry Solutions
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </HeroIndustriesAnimation>
      </div>
    </section>
  );
}
