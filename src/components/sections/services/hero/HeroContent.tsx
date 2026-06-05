import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import HeroAnimation from "./HeroAnimation";

export default function HeroContent() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-white overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/50 to-purple-50/50" />
      <div className="absolute top-1/4 -left-64 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-64 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10 w-full grid lg:grid-cols-2 gap-12 items-center">
        <HeroAnimation type="content" className="space-y-8">
          <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-sm font-medium text-indigo-700 backdrop-blur-3xl">
            Enterprise Analytics Services
          </div>
          <h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
            End-to-End Analytics <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
              Implementation & Tracking
            </span>
          </h1>
          <p className="text-xl text-slate-600 max-w-xl leading-relaxed">
            From strategy to execution, we design and implement robust analytics systems that give you complete visibility into your customer journey and marketing performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/audit" className="group relative inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-indigo-600 to-purple-600 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-indigo-500/50 hover:scale-105">
              Book Free Analytics Audit
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </HeroAnimation>

        {/* Visual Illustration */}
        <HeroAnimation type="graphic-main" className="relative hidden lg:block">
          <div className="relative w-full aspect-[5/4] rounded-2xl overflow-hidden shadow-2xl shadow-indigo-500/20 border border-slate-200">
            <Image
              src="/assets/SERVICE PAGE_images/1.png"
              alt="Analytics Services Dashboard"
              fill
              className="object-cover object-top"
              priority
            />
          </div>
        </HeroAnimation>
      </div>
    </section>
  );
}
