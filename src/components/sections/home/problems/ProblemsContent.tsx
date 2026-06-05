import {
  Unlink,
  Database,
  EyeOff,
  Copy,
  Puzzle,
  Code2,
  Scale,
  RefreshCcw,
  Filter
} from "lucide-react";
import ProblemsAnimation from "./ProblemsAnimation";
import ProblemsGraphics from "./ProblemsGraphics";

const gridItems = [
  {
    title: "Broken tracking implementation",
    description: "Tags, pixels or events not firing as expected.",
    icon: Unlink
  },
  {
    title: "Inaccurate or inconsistent data",
    description: "Dirty, missing or conflicting data across platforms.",
    icon: Database
  },
  {
    title: "Poor visibility into the customer journey",
    description: "Gaps in data make it hard to see the full picture.",
    icon: EyeOff
  },
  {
    title: "Missing / duplicate conversion tracking",
    description: "Conversions under or over reported due to tracking errors.",
    icon: Copy
  },
  {
    title: "Disconnected marketing tools",
    description: "Your tools don't talk to each other, creating data silos.",
    icon: Puzzle
  },
  {
    title: "Meta Pixel & CAPI not firing correctly",
    description: "Server and browser events not working as they should.",
    icon: Code2
  },
  {
    title: "Incorrect attribution across channels",
    description: "Wrong data = wrong decisions = wasted budget.",
    icon: Scale
  },
  {
    title: "Data mismatches between tools",
    description: "Numbers don't match across GA4, Ads Manager, CRM, etc.",
    icon: RefreshCcw
  },
  {
    title: "Broken funnels and journey tracking",
    description: "Drop-offs, leaks and blind spots in your conversion funnel.",
    icon: Filter
  }
];

export default function ProblemsContent() {
  return (

    <section className="bg-[#fafafa] py-24 relative overflow-hidden">

      <div className="max-w-[1200px] mx-auto px-6">

        <ProblemsGraphics />

        <ProblemsAnimation type="header" className="text-center mb-16">
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-slate-900 mb-6 leading-tight">
            Is your <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#6b46c1] to-[#ec4899]">
              Marketing
              <svg className="absolute w-[110%] h-3 -bottom-1 -left-[5%] text-[#f472b6]" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 9 100 2" stroke="currentColor" strokeWidth="2.5" fill="none" strokeLinecap="round" />
              </svg>
            </span> data actually reliable?
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Many companies invest heavily in marketing but still struggle with foundational data issues.
          </p>
        </ProblemsAnimation>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-16">
          {gridItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <ProblemsAnimation
                key={i}
                type="card"
                index={i}
                className="bg-white border border-slate-100 p-6 sm:p-8 rounded-2xl flex items-start gap-5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-slate-200 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-full bg-red-50 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-5 h-5 text-slate-800" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-slate-900 font-semibold mb-2 text-[1.05rem] leading-snug">{item.title}</h3>
                  <p className="text-slate-500 text-[0.95rem] leading-relaxed">{item.description}</p>
                </div>
              </ProblemsAnimation>
            );
          })}
        </div>

        <ProblemsAnimation
          type="footer"
          className="bg-gradient-to-br from-[#f8fafc] to-white border border-slate-200/60 rounded-3xl p-10 text-center shadow-sm"
        >
          <p className="text-2xl font-semibold text-slate-900 mb-4">
            Without reliable data, marketing decisions become guesswork.
          </p>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            This leads to wasted ad spend, poor performance, and missed growth opportunities. That’s where MarTechRise comes in. We fix your tracking, eliminate data gaps, and build clean, reliable data pipelines.
          </p>
        </ProblemsAnimation>
      </div>

    </section>
  );
}
