import { Check } from "lucide-react";
import PricingAnimation from "./PricingAnimation";

export interface PricingPlan {
  title: string;
  desc: string;
  features: string[];
  isPopular: boolean;
}

interface Props {
  plans: PricingPlan[];
}

export default function PricingContent({ plans }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <PricingAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Flexible Ways to Work With Us
          </h2>
        </PricingAnimation>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => {
            if (plan.isPopular) {
              return (
                <PricingAnimation
                  key={index}
                  type="card"
                  index={index}
                  className="bg-gradient-to-b from-indigo-50 to-white transform lg:-translate-y-4 rounded-3xl p-8 border border-indigo-200 flex flex-col relative shadow-xl shadow-indigo-500/10"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white px-4 py-1 rounded-full text-sm font-semibold tracking-wide">
                    MOST POPULAR
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.title}</h3>
                  <p className="text-slate-600 mb-8 border-b border-indigo-200 pb-8 h-24">
                    {plan.desc}
                  </p>
                  <ul className="space-y-4 mb-8 flex-1">
                    {plan.features.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-slate-900">
                        <Check className="w-5 h-5 text-purple-600" /> {item}
                      </li>
                    ))}
                  </ul>
                </PricingAnimation>
              );
            }

            return (
              <PricingAnimation
                key={index}
                type="card"
                index={index}
                className="bg-slate-50 rounded-3xl p-8 border border-slate-200 hover:border-indigo-200 transition-all flex flex-col"
              >
                <h3 className="text-2xl font-bold text-slate-900 mb-4">{plan.title}</h3>
                <p className="text-slate-600 mb-8 border-b border-slate-200 pb-8 h-24">
                  {plan.desc}
                </p>
                <ul className="space-y-4 mb-8 flex-1">
                  {plan.features.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-700">
                      <Check className="w-5 h-5 text-indigo-600" /> {item}
                    </li>
                  ))}
                </ul>
              </PricingAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
