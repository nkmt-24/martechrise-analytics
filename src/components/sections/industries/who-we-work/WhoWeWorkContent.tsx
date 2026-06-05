import { TrendingUp, ShieldCheck, Users } from "lucide-react";
import WhoWeWorkAnimation from "./WhoWeWorkAnimation";

export interface WorkValueData {
  iconName: "TrendingUp" | "ShieldCheck" | "Users";
  title: string;
  iconColor: string;
}

interface Props {
  workValues: WorkValueData[];
}

const iconMap = {
  TrendingUp,
  ShieldCheck,
  Users
};

export default function WhoWeWorkContent({ workValues }: Props) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <WhoWeWorkAnimation type="content">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Trusted Across High-Growth & Data-Driven Industries
          </h2>
          <p className="text-xl text-slate-600 mb-12 hidden md:block">
            We partner with businesses where data accuracy directly impacts revenue, compliance, and customer experience. From fast-scaling e-commerce brands to regulated financial platforms, we build analytics systems that align with real business outcomes — not just tools.
          </p>
          
          <div className="grid sm:grid-cols-3 gap-6 text-left">
            {workValues.map((val, i) => {
              const IconComponent = iconMap[val.iconName];
              
              return (
                 <div key={i} className="bg-white border border-slate-200 shadow-sm p-6 rounded-2xl flex flex-col items-center text-center">
                   <IconComponent className={`w-8 h-8 ${val.iconColor} mb-4`} />
                   <h4 className="text-slate-900 font-semibold text-lg">{val.title}</h4>
                 </div>
              );
            })}
          </div>
        </WhoWeWorkAnimation>
      </div>
    </section>
  );
}
