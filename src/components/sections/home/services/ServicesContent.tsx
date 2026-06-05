import Image from "next/image";
import ServicesAnimation from "./ServicesAnimation";

export interface ServiceData {
  title: string;
  desc: string;
  image: string;
  bullets: string[];
}

interface Props {
  services: ServiceData[];
}

export default function ServicesContent({ services }: Props) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-purple-100/50 rounded-full blur-[150px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <ServicesAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tight">
            Our Analytics & MarTech Solutions
          </h2>
        </ServicesAnimation>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((srv, i) => {

            return (
              <ServicesAnimation
                key={i}
                type="card"
                index={i}
                className="bg-white border border-slate-100 rounded-3xl pb-8 hover:border-indigo-200 transition-all group hover:-translate-y-2 shadow-sm hover:shadow-xl hover:shadow-indigo-500/10 flex flex-col overflow-hidden"
              >
                {/* Image Section spanning the top */}
                <div className="w-full bg-gradient-to-br from-indigo-50/50 to-purple-50/50 rounded-t-3xl overflow-hidden mb-6 relative">
                  <Image 
                    src={srv.image} 
                    alt={srv.title} 
                    width={400} 
                    height={250} 
                    className="w-full h-auto object-cover transform group-hover:scale-[1.02] transition-transform duration-500"
                  />
                </div>
                
                <div className="px-8 flex flex-col flex-1">
                  <h3 className="text-[1.35rem] font-bold text-slate-900 mb-3">{srv.title}</h3>
                  <p className="text-slate-500 text-[0.95rem] leading-relaxed mb-6 flex-1">{srv.desc}</p>
                  
                  <ul className="space-y-3.5 pt-6 border-t border-slate-100/80">
                    {srv.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-4 text-[0.9rem] text-slate-600 font-medium leading-snug">
                        <span className="w-1.5 h-1.5 rounded-full bg-purple-500 mt-1.5 shrink-0 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </ServicesAnimation>
            );
          })}
        </div>
      </div>
    </section>
  );
}
