import { ArrowRight } from "lucide-react";
import Link from "next/link";
import CTAAnimation from "./CTAAnimation";

export default function CTAContent() {
  return (
    <section className="bg-slate-50 py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/50 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <CTAAnimation className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-indigo-500/20 text-white">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Build a Reliable Analytics Foundation?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto">
            Whether you're starting fresh or fixing an existing setup, we'll help you design and implement a tracking system you can trust.
          </p>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-10 py-5 text-lg font-bold text-indigo-900 hover:bg-slate-50 transition-all hover:scale-105 shadow-xl hover:shadow-2xl">
            Get a Custom Analytics Plan
            <ArrowRight className="h-5 w-5" />
          </Link>
        </CTAAnimation>
      </div>
    </section>
  );
}
