import { ArrowRight, BarChart3 } from "lucide-react";
import Link from "next/link";
import ImpactAnimation from "./ImpactAnimation";

export interface ImpactData {
  industry: string;
  text: string;
}

interface Props {
  highlights: ImpactData[];
}

export default function ImpactContent({ highlights }: Props) {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ImpactAnimation type="header" className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Proven Results Across Different Business Models
            </h2>
          </div>
          <Link href="/case-studies" className="inline-flex items-center gap-2 text-indigo-600 hover:text-slate-900 transition-colors font-semibold py-2">
             See Case Studies <ArrowRight className="w-4 h-4" />
          </Link>
        </ImpactAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, i) => (
            <ImpactAnimation
              key={i}
              type="card"
              index={i}
              className="bg-gradient-to-b from-slate-50 to-white border border-slate-200 p-8 rounded-2xl relative group hover:border-indigo-300 transition-all shadow-sm hover:shadow-xl hover:shadow-indigo-500/10"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 group-hover:scale-110 transition-all text-indigo-600">
                <BarChart3 className="w-16 h-16" />
              </div>
              <h3 className="text-xl font-bold text-indigo-700 mb-4">{item.industry}</h3>
              <p className="text-slate-600 relative z-10 leading-relaxed">{item.text}</p>
            </ImpactAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
