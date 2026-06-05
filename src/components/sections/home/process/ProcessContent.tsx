import { Search, Map, Wrench, BarChart2 } from "lucide-react";
import ProcessAnimation from "./ProcessAnimation";

export interface ProcessStep {
  iconName: "Search" | "Map" | "Wrench" | "BarChart2";
  title: string;
  desc: string;
  micro: string;
}

interface Props {
  steps: ProcessStep[];
}

const iconMap = {
  Search,
  Map,
  Wrench,
  BarChart2
};

export default function ProcessContent({ steps }: Props) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <ProcessAnimation type="header" className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Our Proven Analytics Implementation Process
          </h2>
          <p className="text-xl text-slate-600">
            A structured approach to fix, optimize, and scale your marketing data.
          </p>
        </ProcessAnimation>

        <div className="grid md:grid-cols-4 gap-6 relative">
          <div className="hidden md:block absolute top-[44px] left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-indigo-200/0 via-indigo-300 to-indigo-200/0" />
          
          {steps.map((step, i) => {
            const IconComponent = iconMap[step.iconName];
            
            return (
              <ProcessAnimation
                key={i}
                type="card"
                index={i}
                className="relative bg-white border border-slate-200 p-8 rounded-3xl hover:border-indigo-300 transition-all flex flex-col group z-10 shadow-sm hover:shadow-lg"
              >
                <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-indigo-600 mb-6 mx-auto group-hover:scale-110 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                  <IconComponent className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 text-center">{step.title}</h3>
                <p className="text-slate-600 text-center mb-6 flex-1 text-sm">{step.desc}</p>
                
                <div className="mt-auto pt-4 border-t border-slate-100 text-center">
                  <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-700 rounded-full text-xs font-semibold tracking-wider uppercase">
                    {step.micro}
                  </span>
                </div>
              </ProcessAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
