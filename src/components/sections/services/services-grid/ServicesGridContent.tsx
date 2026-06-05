import { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { Network, Blocks, Database, Server, CheckSquare, LineChart, HelpCircle } from "lucide-react";
import ServicesGridAnimation from "./ServicesGridAnimation";

export interface ServiceData {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

interface Props {
  services: ServiceData[];
}

export default function ServicesGridContent({ services }: Props) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Network": return <Network className="w-7 h-7" />;
      case "Blocks": return <Blocks className="w-7 h-7" />;
      case "Database": return <Database className="w-7 h-7" />;
      case "Server": return <Server className="w-7 h-7" />;
      case "CheckSquare": return <CheckSquare className="w-7 h-7" />;
      case "LineChart": return <LineChart className="w-7 h-7" />;
      default: return <HelpCircle className="w-7 h-7" />;
    }
  };

  const getImageForIndex = (index: number) => {
    switch (index) {
      case 0: return "/assets/SERVICE PAGE_images/2.png";
      case 1: return "/assets/SERVICE PAGE_images/3.png";
      case 2: return "/assets/SERVICE PAGE_images/4.png";
      case 3: return "/assets/SERVICE PAGE_images/5.png";
      case 4: return "/assets/SERVICE PAGE_images/6.png";
      case 5: return "/assets/SERVICE PAGE_images/7.png";
      default: return "";
    }
  };

  return (
    <section className="bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-50/50 via-white to-purple-50/50 py-24 relative overflow-hidden">
      {/* Decorative background blurs */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-300/20 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-purple-300/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ServicesGridAnimation type="header" className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Comprehensive Analytics & <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">MarTech Expertise</span>
          </h2>
          <p className="text-xl text-slate-600">
            A full-suite offering to ensure your tracking is completely accurate and built for scale.
          </p>
        </ServicesGridAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => {
            return (
              <ServicesGridAnimation
                key={index}
                type="card"
                index={index}
                className="relative flex flex-col overflow-hidden group transition-all duration-500 hover:-translate-y-2 rounded-[32px] p-6 lg:p-8 bg-white/90 backdrop-blur-xl border border-slate-200/60 shadow-xl shadow-slate-200/40 text-slate-900"
              >
                {/* Dedicated Visible Image Block */}
                <div className="relative w-full rounded-2xl overflow-hidden mb-8 shadow-inner flex-shrink-0 h-48 bg-slate-100">
                  <Image
                    src={getImageForIndex(index)}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content Section */}
                <div className="relative z-10 flex flex-col flex-1">


                  <h3 className="text-2xl font-bold mb-4 tracking-tight">
                    {service.title}
                  </h3>

                  <p className="mb-6 leading-relaxed font-medium text-slate-600">
                    {service.description}
                  </p>

                  <ul className="space-y-3 mt-auto">
                    {service.bullets.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm md:text-base font-medium text-slate-700">
                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-indigo-600" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

        
                </div>
              </ServicesGridAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
