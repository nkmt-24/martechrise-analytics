'use client'

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { services } from "@/data/services";

export function ServiceCard({ slug, index }: { slug: string; index: number }) {
  const p = services.find(s => s.slug === slug)!;
  const highlighted = p.slug === "analytics-implementation";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ delay: (index % 3) * 0.12, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -10 }}
      className={`relative p-8 rounded-3xl border flex flex-col h-full ${highlighted
          ? "bg-slate-900 text-white border-slate-900 shadow-2xl ring-1 ring-white/10"
          : "bg-white border-slate-200 shadow-sm"
        }`}
    >
      {highlighted && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 text-[10px] uppercase tracking-widest font-bold rounded-full bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg">
          Most requested
        </span>
      )}

      <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${highlighted ? "bg-white/10 text-white" : "bg-slate-100 text-slate-900"}`}>
        <p.icon className="w-6 h-6" />
      </div>

      <h3 className="font-display text-2xl font-bold leading-tight mb-3">
        {p.name}
      </h3>

      <p className={`text-sm mb-6 ${highlighted ? "text-white/70" : "text-slate-500"}`}>
        {p.short}
      </p>

      <ul className={`space-y-3 mb-8 text-sm flex-1 ${highlighted ? "text-white/80" : "text-slate-600"}`}>
        {p.deliverables.slice(0, 3).map((f) => (
          <li key={f} className="flex gap-2">
            <span aria-hidden="true">—</span>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        href={`/services/${p.slug}`}
        className={`mt-auto w-full py-3.5 rounded-full font-semibold transition-colors inline-flex items-center justify-center gap-2 ${highlighted
            ? "bg-white text-slate-900 hover:bg-slate-100"
            : "bg-slate-900 text-white hover:bg-slate-800"
          }`}
      >
        Learn more <ArrowRight className="w-4 h-4" />
      </Link>
    </motion.div>
  );
}
