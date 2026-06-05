import FeaturesAnimation from "./FeaturesAnimation";

export interface FeatureData {
  title: string;
  desc: string;
}

interface Props {
  features: FeatureData[];
}

export default function FeaturesContent({ features }: Props) {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-indigo-100/50 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
        <FeaturesAnimation type="header" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Built for Scale. Designed for Accuracy.
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Unlike generic implementations, our approach builds reliable data systems, not just "tags".
          </p>
        </FeaturesAnimation>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FeaturesAnimation
              key={i}
              type="card"
              index={i}
              className="bg-white border border-slate-200 shadow-sm p-8 rounded-2xl hover:bg-slate-50 transition-colors"
            >
              <h3 className="text-xl font-bold text-indigo-600 mb-3">{feature.title}</h3>
              <p className="text-slate-600">{feature.desc}</p>
            </FeaturesAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
