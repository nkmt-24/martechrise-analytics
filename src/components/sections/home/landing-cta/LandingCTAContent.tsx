import { ArrowRight, Calendar } from "lucide-react";
import Link from "next/link";
import LandingCTAAnimation from "./LandingCTAAnimation";

export default function LandingCTAContent() {
  return (
    <section className="bg-slate-50 py-32 relative overflow-hidden border-t border-slate-200">
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] pointer-events-none" />
      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <LandingCTAAnimation type="card" className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[3rem] p-12 md:p-20 shadow-2xl shadow-indigo-500/20 text-white relative overflow-hidden border border-indigo-400/20">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl" />

          <h2 className="text-4xl md:text-6xl font-bold mb-6 relative z-10">
            Still unsure if your data is accurate?
          </h2>
          <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-3xl mx-auto relative z-10">
            Most businesses lose valuable insights due to broken tracking and data gaps — without even realizing it.
          </p>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto relative z-10">
            Let us audit your setup and show you exactly what’s working, what’s not, and where you’re losing data.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 relative z-10 mb-8">
            <Link href="/audit" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white border border-transparent px-8 py-4 text-base font-bold text-indigo-900 hover:bg-slate-50 hover:shadow-xl transition-all hover:scale-105 w-full sm:w-auto">
              Book Free Analytics Audit
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 rounded-xl bg-white/10 border border-white/20 px-8 py-4 text-base font-bold text-white hover:bg-white/20 transition-all hover:scale-105 backdrop-blur-md w-full sm:w-auto">
              Get a Custom Analytics Plan CTA
              <Calendar className="h-5 w-5" />
            </Link>
          </div>

          <div className="relative z-10 text-indigo-100 space-y-2">
            <p className="font-semibold tracking-wider uppercase text-sm">"No commitment. Just actionable insights."</p>
            <p className="text-sm opacity-80">Trusted by businesses to fix tracking and unlock reliable data.</p>
          </div>
        </LandingCTAAnimation>
      </div>
    </section>
  );
}
