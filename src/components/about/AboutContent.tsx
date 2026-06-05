import { Award, Star, BarChart } from "lucide-react";
import AboutAnimation from "./AboutAnimation";

interface StatProps {
  id: string | number;
  label: string;
  value: string;
  icon: string;
  span?: number;
}

export interface AboutData {
  title: string;
  description: string[];
  stats: StatProps[];
}

export default function AboutContent({ data }: { data: AboutData }) {
  const renderIcon = (iconName: string) => {
    switch (iconName) {
      case "Award":
        return <Award className="w-8 h-8 text-yellow-500" />;
      case "Star":
        return <Star className="w-8 h-8 text-yellow-500" />;
      case "BarChart":
        return <BarChart className="w-8 h-8" />;
      default:
        return <Star className="w-8 h-8 text-yellow-500" />;
    }
  };

  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AboutAnimation direction="left">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              {data.title}
            </h2>
            {data.description.map((text, idx) => (
              <p
                key={idx}
                className={
                  idx === 0
                    ? "text-xl text-slate-700 font-medium mb-4"
                    : "text-lg text-slate-600 mb-6 leading-relaxed"
                }
              >
                {text}
              </p>
            ))}
          </AboutAnimation>

          <AboutAnimation
            direction="right"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {data.stats.map((stat) => (
              <div
                key={stat.id}
                className={`${
                  stat.span === 2 ? "sm:col-span-2" : ""
                } bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col items-center text-center shadow-sm hover:shadow-lg hover:border-indigo-200 transition-all group`}
              >
                <div className="w-16 h-16 rounded-full bg-indigo-100 flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                  {renderIcon(stat.icon)}
                </div>
                <h4 className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.value}
                </h4>
                <p className="text-slate-600 font-medium">{stat.label}</p>
              </div>
            ))}
          </AboutAnimation>
        </div>
      </div>
    </section>
  );
}
