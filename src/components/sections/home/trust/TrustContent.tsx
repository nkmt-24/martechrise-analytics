import { Check } from "lucide-react";
import TrustAnimation from "./TrustAnimation";

interface Props {
  reasons: string[];
}

export default function TrustContent({ reasons }: Props) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[400px] bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <TrustAnimation type="header" className="mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Why Businesses Trust MarTechRise
          </h2>
        </TrustAnimation>

        <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto text-left">
          {reasons.map((reason, i) => (
            <TrustAnimation
              key={i}
              type="card"
              index={i}
              className="flex items-center gap-4 bg-white border border-slate-200 p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow w-full sm:w-[calc(50%-0.5rem)]"
            >
              <div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 shrink-0">
                 <Check className="w-4 h-4" />
              </div>
              <span className="text-slate-800 font-medium">{reason}</span>
            </TrustAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
