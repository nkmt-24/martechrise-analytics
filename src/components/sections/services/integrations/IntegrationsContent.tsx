import IntegrationsAnimation from "./IntegrationsAnimation";

export interface IntegrationCategory {
  name: string;
  tools: string;
}

interface Props {
  categories: IntegrationCategory[];
}

export default function IntegrationsContent({ categories }: Props) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <IntegrationsAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Works Seamlessly With Your Existing Stack
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            We integrate analytics across your full marketing ecosystem ensuring consistent data everywhere.
          </p>
        </IntegrationsAnimation>

        <div className="flex flex-wrap justify-center gap-6 max-w-5xl mx-auto">
          {categories.map((cat, i) => (
            <IntegrationsAnimation
              key={i}
              type="card"
              index={i}
              className="bg-white border border-slate-200 shadow-sm rounded-2xl p-6 text-center hover:shadow-md transition-shadow w-full md:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]"
            >
              <h3 className="text-xl font-semibold text-slate-900 mb-2">{cat.name}</h3>
              <p className="text-indigo-600">{cat.tools}</p>
            </IntegrationsAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
