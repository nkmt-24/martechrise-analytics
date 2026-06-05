import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import CTAIndustriesAnimation from "./CTAIndustriesAnimation";

export default function CTAIndustriesContent() {
  return (
    <section className="bg-white py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-50/50 to-transparent" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <CTAIndustriesAnimation type="card" className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-indigo-500/20 text-white relative overflow-hidden border border-white/10">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">
            Looking for Analytics That Fits Your Industry?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto relative z-10">
            Your tracking setup should reflect your business model, not just your tools. We’ll help you design a system tailored to your industry’s needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12 relative z-10">
            <Link href="/audit" className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-8 py-4 text-base font-bold text-indigo-900 hover:bg-slate-50 transition-all hover:scale-105 shadow-xl w-full sm:w-auto">
              Book Free Analytics Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-md w-full sm:w-auto">
              Get a Custom Analytics Plan CTA
              <Calendar className="h-5 w-5" />
            </Link>
          </div>

          <p className="text-lg font-medium text-white/60 tracking-wider uppercase relative z-10">
            "Industry-specific tracking. Reliable data. Better decisions."
          </p>
        </CTAIndustriesAnimation>
      </div>
    </section>
  );
}
