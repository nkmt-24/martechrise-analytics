import { LayoutGrid, Wand2, Tags, FlaskConical, LineChart, PieChart, Activity, Cpu, Box, Target, Zap, Send, Users, Infinity as InfinityIcon } from "lucide-react";
import ToolsAnimation from "./ToolsAnimation";
import LogoCarouselAnimation from "../logo-carousel/LogoCarouselAnimation";

export interface ToolCategory {
  title: string;
  list: string[];
}

interface Props {
  categories: ToolCategory[];
}

export default function ToolsContent({ categories }: Props) {
  const getHeaderIcon = (index: number) => {
    switch(index) {
      case 0: return <LayoutGrid className="w-5 h-5 text-indigo-600" />;
      case 1: return <Wand2 className="w-5 h-5 text-purple-600" />;
      case 2: return <Tags className="w-5 h-5 text-indigo-600" />;
      default: return null;
    }
  };

  const getHeaderIconBg = (index: number) => {
    switch(index) {
      case 0: return "bg-indigo-100/80";
      case 1: return "bg-purple-100/80";
      case 2: return "bg-indigo-100/80";
      default: return "hidden";
    }
  };

  // Assign specific mini icons for visually rich bullet points
  const getListIcon = (blockIndex: number, itemIndex: number) => {
    if (blockIndex === 0) {
      const icons = [<PieChart className="w-3.5 h-3.5 text-indigo-800" />, <Cpu className="w-3.5 h-3.5 text-indigo-800" />, <Box className="w-3.5 h-3.5 text-indigo-800" />, <Activity className="w-3.5 h-3.5 text-indigo-800" />];
      return icons[itemIndex % icons.length];
    }
    if (blockIndex === 1) {
      return <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shrink-0 shadow-sm ml-1" />;
    }
    if (blockIndex === 2) {
      return <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shrink-0 shadow-sm ml-1" />;
    }
    return null;
  };

  const bottomLogos = [
    { name: "Google Tag Manager", ico: <div className="w-5 h-5 rounded bg-blue-400 rotate-45 transform" /> },
    { name: "Adobe Analytics", ico: <Activity className="text-purple-900 w-5 h-5" /> },
    { name: "Optimizely", ico: <div className="w-5 h-5 bg-[#0037FF] text-white rounded-full flex justify-center items-center text-[10px] font-bold">O</div> },
    { name: "Freshpaint", ico: <SparklesIcon className="text-emerald-500 w-5 h-5" /> },
    { name: "Looker Studio", ico: <div className="w-5 h-5 rounded-md bg-blue-500" /> },
    { name: "Meta", ico: <InfinityIcon className="text-blue-600 w-6 h-6" /> },
    { name: "Adobe", ico: <Activity className="text-red-600 w-5 h-5" /> },
  ];

  return (
    <section className="bg-transparent py-16 relative overflow-hidden z-10">
      {/* Soft animated background matching the screenshot */}
      <div className="absolute top-1/4 left-[10%] w-[600px] h-[600px] bg-purple-200/50 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />
      <div className="absolute top-1/3 right-[10%] w-[500px] h-[500px] bg-pink-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ToolsAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-[2.65rem] font-bold text-[#351e61] mb-6 tracking-tight">
            Powered by Industry-Leading Platforms
          </h2>
        </ToolsAnimation>

        <div className="grid grid-cols-1 md:grid-cols-6 gap-6 mb-12">
          {categories.map((cat, i) => {
            const isTopRow = i < 3;
            const colSpan = isTopRow ? "md:col-span-2" : "md:col-span-3";
            
            return (
              <ToolsAnimation
                key={i}
                type="card"
                index={i}
                className={`${colSpan} bg-white/70 backdrop-blur-xl border border-white p-7 rounded-[2rem] shadow-[0_4px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] transition-all duration-500`}
              >
                {isTopRow ? (
                  // TOP ROW STYLING
                  <>
                    <div className="flex items-start gap-4 mb-6">
                      <div className={`w-[46px] h-[46px] rounded-full flex items-center justify-center shrink-0 ${getHeaderIconBg(i)}`}>
                        {getHeaderIcon(i)}
                      </div>
                      <h3 className="font-bold text-[1.1rem] text-slate-800 leading-snug pt-1">
                        {cat.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-3.5">
                      {cat.list.map((item, idx) => (
                        <li key={idx} className="flex items-center gap-3.5 text-[0.95rem] text-slate-600 font-medium">
                          {getListIcon(i, idx)}
                          {item}
                        </li>
                      ))}
                    </ul>
                  </>
                ) : (
                  // BOTTOM ROW STYLING (Looks like logos)
                  <div className="h-full flex flex-col justify-center">
                    <h3 className="font-bold text-[1.15rem] text-slate-800 mb-6">{cat.title}</h3>
                    <div className="flex flex-wrap gap-x-8 gap-y-4 items-center">
                      {cat.list.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-[1.1rem] text-slate-800 font-bold tracking-tight">
                          {i === 3 ? (
                            <div className="text-[#0037FF] flex items-center gap-2"><div className="w-5 h-5 bg-[#0037FF] text-white rounded-full flex justify-center items-center text-[10px]">O</div> {item}</div>
                          ) : (
                            <div className="flex items-center gap-2">
                              <BoxesIcon index={idx} />
                              {item}
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </ToolsAnimation>
            );
          })}
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center gap-2 mb-8">
          <div className="w-2 h-2 rounded-full bg-white shadow-sm border border-slate-200"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-40 shadow-sm"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-40 shadow-sm"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-40 shadow-sm"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-40 shadow-sm"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-40 shadow-sm"></div>
          <div className="w-2 h-2 rounded-full bg-white opacity-40 shadow-sm"></div>
        </div>

        {/* The Animated Logo Pill */}
        <div className="max-w-[1100px] mx-auto px-2">
          <div className="bg-white/70 backdrop-blur-xl border border-white/80 shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2rem] py-5 px-4 relative overflow-hidden flex items-center">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white/90 to-transparent z-10 rounded-l-[2rem]" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white/90 to-transparent z-10 rounded-r-[2rem]" />
            
            <div className="flex w-full overflow-hidden">
               <LogoCarouselAnimation className="flex gap-16 items-center shrink-0 w-max px-10">
                 {[...bottomLogos, ...bottomLogos].map((logo, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-slate-800 font-bold tracking-tight text-[1.1rem]">
                       {logo.ico}
                       {logo.name}
                    </div>
                 ))}
               </LogoCarouselAnimation>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

// Mini icon component for the Data Viz logos
function BoxesIcon({ index }: { index: number }) {
  const colors = ["text-blue-500", "text-emerald-500", "text-purple-500", "text-indigo-500"];
  const Ico = [Activity, Target, SparklesIcon, HexagonIcon][index % 4];
  return <Ico className={`w-5 h-5 ${colors[index % colors.length]}`} />;
}

function SparklesIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
}

function HexagonIcon(props: any) {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
}
