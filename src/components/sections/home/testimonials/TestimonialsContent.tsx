import { Star } from "lucide-react";
import TestimonialsAnimation from "./TestimonialsAnimation";

export interface TestimonialData {
  quote: string;
  role: string;
}

interface Props {
  testimonials: TestimonialData[];
}

export default function TestimonialsContent({ testimonials }: Props) {
  return (
    <section className="bg-white py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <TestimonialsAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            What Our Clients Say
          </h2>
        </TestimonialsAnimation>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((test, i) => (
            <TestimonialsAnimation
              key={i}
              type="card"
              index={i}
              className="bg-slate-50 border border-slate-200 p-8 rounded-3xl flex flex-col gap-6 shadow-sm hover:shadow-md hover:border-indigo-200 transition-all"
            >
              <div className="flex gap-1 text-yellow-500">
                {[...Array(5)].map((_, idx) => (
                  <Star key={idx} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <p className="text-lg text-slate-700 italic flex-1 leading-relaxed">
                "{test.quote}"
              </p>
              <div className="border-t border-slate-200 pt-6">
                <p className="text-indigo-700 font-semibold">{test.role}</p>
              </div>
            </TestimonialsAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
