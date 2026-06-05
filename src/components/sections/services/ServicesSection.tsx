import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";
import { services } from "@/data/services";
import { ServiceCard } from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section id="services" className="relative py-24 md:py-32 px-6 bg-slate-50" aria-label="Our Services">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-slate-200/50 border border-slate-200 text-slate-600 text-xs font-bold uppercase tracking-[0.2em] mb-6 shadow-sm">
              Services
            </span>
          </FadeIn>
          <AnimatedText
            text="Our Analytics & MarTech Solutions"
            as="h2"
            className="font-display font-black text-4xl md:text-5xl lg:text-6xl text-slate-900 max-w-4xl mx-auto tracking-tight"
          />
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((p, i) => (
            <ServiceCard key={p.slug} slug={p.slug} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
