"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Server, TerminalSquare, LineChart, Briefcase } from "lucide-react";
import Link from "next/link";

const features = [
  {
    icon: <Server className="w-5 h-5 text-primary" />,
    title: "Server-Side First",
    description: "We specialize in server-side GTM and Meta CAPI to recover 20-30% of conversions lost to iOS and ad blockers."
  },
  {
    icon: <TerminalSquare className="w-5 h-5 text-primary" />,
    title: "Technical Implementation",
    description: "Our consultants don't just strategize—they write code, debug tags, and build enterprise-grade data pipelines."
  },
  {
    icon: <LineChart className="w-5 h-5 text-primary" />,
    title: "Data Accuracy",
    description: "We validate every tracking setup to ensure 98%+ data accuracy so you can scale campaigns with confidence."
  },
  {
    icon: <Briefcase className="w-5 h-5 text-primary" />,
    title: "B2B Enterprise Focus",
    description: "Exclusive focus on B2B enterprises, handling complex attribution, long sales cycles, and multi-touch journeys."
  }
];

const coreValues = [
  {
    icon: <LineChart className="w-5 h-5 text-primary" />,
    title: "Technical Excellence",
    description: "We implement, test, and validate every tracking setup to ensure 98%+ data accuracy for your business."
  },
  {
    icon: <Server className="w-5 h-5 text-primary" />,
    title: "Transparent Communication",
    description: "No jargon, no black boxes. We explain what we're doing and why it matters in plain English."
  },
  {
    icon: <Briefcase className="w-5 h-5 text-primary" />,
    title: "Outcome-Driven",
    description: "We measure success by your business outcomes—accurate attribution and recovered conversions."
  },
  {
    icon: <TerminalSquare className="w-5 h-5 text-primary" />,
    title: "Long-Term Partnerships",
    description: "We build lasting relationships, not one-off projects. We grow with you through platform migrations."
  }
];

export const FoundationSectionClient = () => {
  const [activeTab, setActiveTab] = useState<"features" | "values">("features");

  const activeData = activeTab === "features" ? features : coreValues;

  const getBorderClass = (index: number) => {
    switch (index) {
      case 0: return "border-b md:border-r border-border";
      case 1: return "border-b border-border";
      case 2: return "border-b md:border-b-0 md:border-r border-border";
      case 3: return "";
      default: return "";
    }
  };

  return (
    <section className="py-24 px-4 md:px-8 bg-background overflow-hidden relative">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-12 relative z-10">
        
        {/* Left Column */}
        <div className="w-full lg:w-[40%] flex flex-col items-start justify-center">
          {/* Pill Toggle */}
          <div className="flex items-center bg-muted rounded-full p-1.5 mb-10 border border-border">
            <button
              onClick={() => setActiveTab("features")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "features"
                  ? "bg-foreground text-background shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Features
            </button>
            <button
              onClick={() => setActiveTab("values")}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "values"
                  ? "bg-foreground text-background shadow-md"
                  : "text-foreground/70 hover:text-foreground"
              }`}
            >
              Core values
            </button>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-[54px] font-display font-bold text-foreground leading-[1.05] mb-6 tracking-tight">
            Foundation of Everything We Build
          </h2>
          
          <p className="text-lg text-foreground/70 mb-10 max-w-md leading-relaxed">
            We believe in creating tracking infrastructure that is reliable, scalable, and easy to use, while maintaining 100% transparency.
          </p>

          <Link href="/contact">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg shadow-card-soft hover:bg-primary/90 transition-colors"
            >
              Get Started
            </motion.button>
          </Link>
        </div>

        {/* Right Column - Grid */}
        <div className="w-full lg:w-[60%]">
          <div className="bg-card rounded-3xl border border-border overflow-hidden shadow-sm grid grid-cols-1 md:grid-cols-2 relative h-full">
            <AnimatePresence mode="wait">
              {activeData.map((item, index) => (
                <motion.div
                  key={`${activeTab}-${item.title}`}
                  initial={{ opacity: 0, filter: "blur(4px)", y: 10 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  exit={{ opacity: 0, filter: "blur(4px)", y: -10 }}
                  transition={{ duration: 0.4, delay: index * 0.1, ease: "easeOut" }}
                  className={`p-10 xl:p-12 flex flex-col group ${getBorderClass(index)} ${index === 0 && 'bg-gradient-to-br from-primary/5 to-transparent'}`}
                >
                  <div className="w-12 h-12 rounded-2xl bg-muted border border-border flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        
      </div>
    </section>
  );
};
