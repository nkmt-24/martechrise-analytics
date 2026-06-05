import { AlertCircle } from "lucide-react";
import ScenariosAnimation from "./ScenariosAnimation";

interface Props {
  scenarios: string[];
}

export default function ScenariosContent({ scenarios }: Props) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-4xl mx-auto px-6">
        <ScenariosAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            When Do You Need This Service?
          </h2>
          <p className="text-xl text-slate-600">
            Consider exploring a robust implementation if any of these resonate:
          </p>
        </ScenariosAnimation>

        <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-8 space-y-12">
          {scenarios.map((text, i) => (
            <ScenariosAnimation 
              key={i}
              type="item"
              index={i}
              className="relative pl-8"
            >
              <div className="absolute -left-[18px] top-1 bg-white p-1 rounded-full">
                <AlertCircle className="w-6 h-6 text-indigo-500" />
              </div>
              <p className="text-xl text-slate-700 font-medium">{text}</p>
            </ScenariosAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
