import { ShoppingCart, Landmark, Stethoscope, Plane, Shield, Database } from "lucide-react";
import Image from "next/image";
import IndustriesGridAnimation from "./IndustriesGridAnimation";

export interface IndustryData {
  iconName: "ShoppingCart" | "Landmark" | "Stethoscope" | "Plane" | "Shield" | "Database";
  title: string;
  tagline: string;
  cases: string[];
  impact: string;
  imageSrc?: string;
}

interface Props {
  industries: IndustryData[];
}

const iconMap = {
  ShoppingCart,
  Landmark,
  Stethoscope,
  Plane,
  Shield,
  Database
};

export default function IndustriesGridContent({ industries }: Props) {
  return (
    <section id="solutions" className="bg-white py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Industries We Serve</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.map((ind, index) => {
            const IconComponent = iconMap[ind.iconName];

            return (
              <IndustriesGridAnimation
                key={index}
                type="card"
                index={index}
                className="group bg-white rounded-2xl p-6 md:p-8 border border-slate-200 hover:border-indigo-300 transition-all duration-300 hover:scale-[1.02] shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col overflow-hidden"
              >
                {ind.imageSrc && (
                  <div className="relative w-full h-48 mb-6 rounded-xl overflow-hidden bg-slate-50 flex-shrink-0">
                    <Image
                      src={ind.imageSrc}
                      alt={ind.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                )}
                
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors shrink-0">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">{ind.title}</h3>
                </div>
                
                <p className="text-indigo-600 font-medium text-sm mb-6 pb-4 border-b border-slate-100">{ind.tagline}</p>
                
                <div className="flex-1">
                  <h4 className="text-sm text-slate-500 uppercase tracking-wider font-semibold mb-3">Key Use Cases</h4>
                  <ul className="space-y-2 mb-6">
                    {ind.cases.map((useCase, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 mt-1.5 shrink-0" />
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mt-auto bg-indigo-50 p-4 rounded-xl border border-indigo-100/50">
                  <h4 className="text-xs text-indigo-700 uppercase tracking-wider font-semibold mb-1">Business Impact</h4>
                  <p className="text-slate-900 text-sm font-medium">{ind.impact}</p>
                </div>
              </IndustriesGridAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
