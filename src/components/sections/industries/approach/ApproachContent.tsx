import ApproachAnimation from "./ApproachAnimation";

export interface ApproachData {
  title: string;
  desc: string;
}

interface Props {
  approaches: ApproachData[];
}

export default function ApproachContent({ approaches }: Props) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-100/50 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <ApproachAnimation type="header" className="text-center mb-16">
           <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
             Same Expertise. Different Execution.
           </h2>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
             While tools remain similar, implementation changes based on industry needs. This ensures your analytics setup reflects how your business actually operates.
           </p>
        </ApproachAnimation>

        <div className="grid md:grid-cols-2 gap-6">
          {approaches.map((item, i) => (
            <ApproachAnimation
              key={i}
              type="card"
              index={i}
              className="bg-white p-8 rounded-2xl border border-slate-200 hover:border-indigo-300 transition-all shadow-sm hover:shadow-md flex items-center justify-between group"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-indigo-600 font-medium">{item.desc}</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-all">
                <span className="text-lg font-bold">0{i + 1}</span>
              </div>
            </ApproachAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
