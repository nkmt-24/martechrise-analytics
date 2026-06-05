"use client";

import { motion } from "framer-motion";
import {
  AlertTriangle,
  Database,
  Eye,
  Repeat,
  Unplug,
  Activity,
  Compass,
  GitCompare,
  TrendingDown,
} from "lucide-react";

const issues = [
  { icon: AlertTriangle, title: "Broken tracking implementation", desc: "Tags, pixels or events not firing as expected." },
  { icon: Database, title: "Inaccurate or inconsistent data", desc: "Dirty, missing or conflicting data across platforms." },
  { icon: Eye, title: "Poor visibility into the customer journey", desc: "Gaps in data make it hard to see the full picture." },
  { icon: Repeat, title: "Missing / duplicate conversion tracking", desc: "Conversions under or over reported due to tracking errors." },
  { icon: Unplug, title: "Disconnected marketing tools", desc: "Your tools don't talk to each other, creating data silos." },
  { icon: Activity, title: "Meta Pixel & CAPI not firing correctly", desc: "Server and browser events not working as they should." },
  { icon: Compass, title: "Incorrect attribution across channels", desc: "Wrong data = wrong decisions = wasted budget." },
  { icon: GitCompare, title: "Data mismatches between tools", desc: "Numbers don't match across GA4, Ads Manager, CRM, etc." },
  { icon: TrendingDown, title: "Broken funnels and journey tracking", desc: "Drop-offs, leaks and blind spots in your conversion funnel." },
];

export const IssuesGridClient = () => {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-15%" }}
      variants={{ hidden: {}, show: { transition: { staggerChildren: 0.08 } } }}
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-5"
    >
      {issues.map((f, i) => (
        <motion.div
          key={i}
          variants={{
            hidden: { opacity: 0, y: 40, filter: "blur(8px)" },
            show: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } },
          }}
          whileHover={{ y: -8, transition: { duration: 0.3 } }}
          className="group relative p-7 rounded-2xl bg-card border border-border overflow-hidden cursor-default"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-[hsl(var(--brand-orange)/0.1)] via-transparent to-[hsl(var(--brand-pink)/0.1)]" />
          <div className="absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
               style={{ background: "linear-gradient(135deg, hsl(var(--brand-orange)/0.4), transparent 50%, hsl(var(--brand-pink)/0.4))", padding: "1px", WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)", WebkitMaskComposite: "xor", maskComposite: "exclude" }} />
          <div className="relative">
            <div className="w-11 h-11 rounded-xl bg-secondary flex items-center justify-center mb-5 group-hover:bg-foreground group-hover:text-background transition-colors duration-300">
              <f.icon className="w-5 h-5" />
            </div>
            <h3 className="font-display text-lg font-semibold mb-2 text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{f.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
};
