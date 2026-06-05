import { ClipboardList, ShieldCheck, LineChart, TrendingUp } from "lucide-react";
import Image from "next/image";
import DeliverablesAnimation from "./DeliverablesAnimation";

interface ApproachCard {
  title: string;
  description: string;
  image: string;
}

interface Feature {
  title: string;
  description: string;
  icon: string;
}

interface Props {
  approachCards: ApproachCard[];
  features: Feature[];
}

export default function DeliverablesContent({ approachCards, features }: Props) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "ClipboardList": return <ClipboardList className="w-5 h-5" />;
      case "ShieldCheck": return <ShieldCheck className="w-5 h-5" />;
      case "LineChart": return <LineChart className="w-5 h-5" />;
      case "TrendingUp": return <TrendingUp className="w-5 h-5" />;
      default: return null;
    }
  };

  return (
    <section className="bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-50/80 via-white to-blue-50/40 py-24 relative overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-blue-400/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-indigo-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Section */}
        <DeliverablesAnimation type="header" className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Built for Scale. Designed for Accuracy.
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Unlike generic implementations, our approach builds reliable data systems, not just "tags".
          </p>
          <div className="uppercase tracking-widest text-sm font-semibold text-indigo-500 mb-8">
            WHAT MAKES OUR APPROACH DIFFERENT
          </div>
        </DeliverablesAnimation>

        {/* 3 Large Approach Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {approachCards.map((card, idx) => (
            <DeliverablesAnimation
              key={idx}
              type="item"
              index={idx}
              className="group relative bg-white/70 backdrop-blur-xl border border-white/80 rounded-[32px] p-6 text-center hover:-translate-y-2 transition-all duration-500 shadow-[0_8px_30px_rgb(59,130,246,0.08)] hover:shadow-[0_20px_40px_rgb(59,130,246,0.15)] hover:border-indigo-100/80"
            >
              {/* Inner glowing effect on hover */}
              <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-white/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="w-full aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden mb-8 relative bg-gradient-to-br from-indigo-50/50 to-blue-50/50 border border-slate-100 shadow-inner">
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700 p-2"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-slate-900 mb-3">{card.title}</h3>
                <p className="text-slate-600 font-medium">{card.description}</p>
              </div>
            </DeliverablesAnimation>
          ))}
        </div>

        {/* 4 Small Pill Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, idx) => (
            <DeliverablesAnimation
              key={idx + 3} // Offset index for animation delay
              type="item"
              index={idx + 3}
              className="flex items-center gap-4 p-5 rounded-2xl bg-white/80 backdrop-blur-xl border border-white hover:border-slate-200/60 shadow-[0_4px_20px_rgb(59,130,246,0.05)] hover:shadow-[0_8px_25px_rgb(59,130,246,0.1)] transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 shadow-sm border border-indigo-100">
                {renderIcon(feature.icon)}
              </div>
              <div className="flex flex-col">
                <h4 className="font-bold text-slate-900 leading-tight mb-1">{feature.title}</h4>
                <p className="text-sm font-medium text-slate-500 leading-snug">{feature.description}</p>
              </div>
            </DeliverablesAnimation>
          ))}
        </div>

      </div>
    </section>
  );
}
