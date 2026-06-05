import { ReactNode } from "react";
import { Users, ShoppingCart, ActivitySquare, MonitorPlay, Settings2, HelpCircle } from "lucide-react";
import AudienceAnimation from "./AudienceAnimation";

export interface AudienceData {
  icon: string;
  title: string;
  desc: string;
}

interface Props {
  audiences: AudienceData[];
}

export default function AudienceContent({ audiences }: Props) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "ShoppingCart": return <ShoppingCart className="w-6 h-6" />;
      case "MonitorPlay": return <MonitorPlay className="w-6 h-6" />;
      case "Settings2": return <Settings2 className="w-6 h-6" />;
      case "Users": return <Users className="w-6 h-6" />;
      case "ActivitySquare": return <ActivitySquare className="w-6 h-6" />;
      default: return <HelpCircle className="w-6 h-6" />;
    }
  };

  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <AudienceAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Designed for Teams That Rely on Data
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Our service is ideal for organizations that need absolute clarity on their marketing and user metrics.
          </p>
        </AudienceAnimation>

        <div className="flex flex-wrap justify-center gap-6">
          {audiences.map((item, i) => (
            <AudienceAnimation
              key={i}
              type="card"
              index={i}
              className="bg-white flex items-center gap-4 px-6 py-5 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md"
            >
              <div className="text-purple-600 w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center">
                {renderIcon(item.icon)}
              </div>
              <div className="text-left">
                <h4 className="text-slate-900 font-semibold">{item.title}</h4>
                <span className="text-sm text-slate-500">{item.desc}</span>
              </div>
            </AudienceAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
