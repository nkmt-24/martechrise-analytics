import { AlertCircle } from "lucide-react";
import ChallengesAnimation from "./ChallengesAnimation";

interface Props {
  problems: string[];
}

export default function ChallengesContent({ problems }: Props) {
  return (
    <section className="bg-slate-50 py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <ChallengesAnimation type="header" className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Different Industries. Same Data Problems.
          </h2>
          <p className="text-xl text-slate-600">
            We solve these by building structured, validated, and scalable tracking systems.
          </p>
        </ChallengesAnimation>

        <div className="flex flex-wrap justify-center gap-4">
          {problems.map((prob, i) => (
            <ChallengesAnimation
              key={i}
              type="card"
              index={i}
              className="flex items-center gap-3 bg-white border border-red-200 px-6 py-4 rounded-full text-slate-700 hover:border-red-300 transition-colors shadow-sm"
            >
              <AlertCircle className="w-5 h-5 text-red-500 shrink-0" />
              <span className="font-medium text-lg">{prob}</span>
            </ChallengesAnimation>
          ))}
        </div>
      </div>
    </section>
  );
}
