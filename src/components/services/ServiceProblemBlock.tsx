"use client";

import React from "react";
import { motion } from "framer-motion";
import * as LucideIcons from "lucide-react";

interface ServiceProblemBlockProps {
  heading: string;
  problems: Array<{ icon: string; title: string; description: string }>;
}

export function ServiceProblemBlock({
  heading,
  problems,
}: ServiceProblemBlockProps) {
  return (
    <section className="relative bg-[#FAFAFA] py-12 md:py-16 overflow-hidden">
      {/* Subtle background texture */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-red-500/5 blur-[140px] rounded-full" />
        <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-violet-400/6 blur-[140px] rounded-full" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-red-200 bg-red-50 mb-6">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
            <span className="text-xs font-semibold text-red-600 tracking-wider uppercase">The Problem</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 leading-tight tracking-tight max-w-3xl">
            {heading}
          </h2>
        </motion.div>

        {/* Problems Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-gray-200 rounded-2xl overflow-hidden border border-gray-200">
          {problems.map((problem, index) => {
            const Icon = (LucideIcons[problem.icon as keyof typeof LucideIcons] || LucideIcons.AlertCircle) as React.ComponentType<{ className?: string }>;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="group relative bg-white p-10 hover:bg-red-50/40 transition-colors duration-300"
              >
                {/* Ghost number */}
                <span className="absolute top-8 right-8 text-6xl font-bold text-gray-900/[0.04] font-display select-none leading-none">
                  {String(index + 1).padStart(2, "0")}
                </span>

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-gray-100 border border-gray-200 flex items-center justify-center mb-6 group-hover:border-red-200 group-hover:bg-red-50 transition-all duration-300">
                  <Icon className="w-6 h-6 text-gray-500 group-hover:text-red-500 transition-colors duration-300" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-red-600 transition-colors duration-300">
                  {problem.title}
                </h3>
                <p className="text-gray-500 leading-relaxed text-sm">
                  {problem.description}
                </p>

                {/* Bottom accent on hover */}
                <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-red-400 to-violet-400 group-hover:w-full transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
