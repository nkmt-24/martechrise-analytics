import { ArrowRight, Check } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CaseStudiesAnimation from "./CaseStudiesAnimation";

export interface CaseStudy {
  title: string;
  desc: string;
  res1: string;
  res2: string;
  image?: string;
}

interface Props {
  studies: CaseStudy[];
}

export default function CaseStudiesContent({ studies }: Props) {
  const [study1, study2, study3] = studies;

  return (
    <section className="py-24 relative overflow-hidden bg-slate-50">
      {/* Soft animated background matching the screenshot */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-200/40 rounded-full blur-[100px] pointer-events-none mix-blend-multiply" />
      <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-pink-200/40 rounded-full blur-[120px] pointer-events-none mix-blend-multiply" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <CaseStudiesAnimation type="header" className="text-center mb-16 max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-[2.75rem] font-bold text-slate-800 mb-6 leading-tight tracking-tight">
            Real Results from Fixing Broken Data & Tracking Systems
          </h2>
        </CaseStudiesAnimation>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">

          {/* Card 1 - Top Row Full Width */}
          <CaseStudiesAnimation
            type="card"
            index={0}
            className="lg:col-span-3 flex flex-col md:flex-row bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2.5rem] p-6 md:p-10 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 group overflow-hidden"
          >
            {/* Image Side */}
            <div className="w-full md:w-1/2 rounded-[2rem] overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-50/50 to-purple-50/50 mb-8 md:mb-0 md:mr-10 relative">
              {study1?.image && (
                <Image
                  src={study1.image}
                  alt={study1.title}
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>

            {/* Text Side */}
            <div className="w-full md:w-1/2 flex flex-col justify-center px-2 md:px-4">
              <h3 className="text-[1.65rem] font-bold text-slate-800 mb-4">{study1?.title}</h3>
              <p className="text-slate-600/[0.85] text-[1.05rem] leading-relaxed mb-8">{study1?.desc}</p>

              <ul className="space-y-4">
                <li className="flex items-start gap-4 text-[1.05rem] text-slate-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  {study1?.res1}
                </li>
                <li className="flex items-start gap-4 text-[1.05rem] text-slate-700 font-medium">
                  <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  {study1?.res2}
                </li>
              </ul>
            </div>
          </CaseStudiesAnimation>

          {/* Card 2 - Bottom Row Left (Wide Text) */}
          <CaseStudiesAnimation
            type="card"
            index={1}
            className="lg:col-span-2 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2.5rem] p-8 md:p-12 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 flex flex-col justify-center"
          >
            <h3 className="text-[1.55rem] font-bold text-slate-800 mb-4">{study2?.title}</h3>
            <p className="text-slate-600/[0.85] text-base leading-relaxed mb-8">{study2?.desc}</p>
            {/* Image Side */}
            <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-50/50 to-purple-50/50 mb-6 relative">
              {study2?.image && (
                <Image
                  src={study2.image}
                  alt={study2.title}
                  width={400}
                  height={250}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>
            <ul className="space-y-3.5 mt-auto">
              <li className="flex items-start gap-3.5 text-[0.95rem] text-slate-700 font-medium">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                  <Check className="w-[14px] h-[14px]" strokeWidth={3} />
                </div>
                {study2?.res1}
              </li>

              <li className="flex items-start gap-3.5 text-[0.95rem] text-slate-700 font-medium">
                <div className="bg-green-100 p-1 rounded-full text-green-600 mt-0.5">
                  <Check className="w-[14px] h-[14px]" strokeWidth={3} />
                </div>
                {study2?.res2}
              </li>
            </ul>
          </CaseStudiesAnimation>

          {/* Card 3 - Bottom Row Right (Tall with Image) */}
          <CaseStudiesAnimation
            type="card"
            index={2}
            className="lg:col-span-1 bg-white/70 backdrop-blur-xl border border-white shadow-[0_8px_30px_rgb(0,0,0,0.06)] rounded-[2.5rem] p-6 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-shadow duration-500 group flex flex-col"
          >
            <div className="px-2 flex flex-col flex-1">
              <h3 className="text-[1.35rem] font-bold text-slate-800 mb-3">{study3?.title}</h3>
              <p className="text-slate-600/[0.85] text-[0.9rem] leading-relaxed mb-6 flex-1">{study3?.desc}</p>
              {/* Image Side */}
              <div className="w-full rounded-2xl overflow-hidden flex items-center justify-center bg-gradient-to-br from-indigo-50/50 to-purple-50/50 mb-6 relative">
                {study3?.image && (
                  <Image
                    src={study3.image}
                    alt={study3.title}
                    width={400}
                    height={400}
                    className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                )}
              </div>
              <ul className="space-y-3 pb-2 border-t border-slate-100/50 pt-5 mt-auto">
                <li className="flex items-start gap-3 text-[0.9rem] text-slate-700 font-medium">
                  <div className="bg-green-100 p-0.5 rounded-full text-green-600 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  {study3?.res1}
                </li>
                <li className="flex items-start gap-3 text-[0.9rem] text-slate-700 font-medium">
                  <div className="bg-green-100 p-0.5 rounded-full text-green-600 mt-0.5">
                    <Check className="w-3.5 h-3.5" strokeWidth={3} />
                  </div>
                  {study3?.res2}
                </li>
              </ul>
            </div>
          </CaseStudiesAnimation>

        </div>

      </div>
    </section>
  );
}
