"use client";

import { motion } from "framer-motion";
import { TrendingDown, Code2, CheckCircle2, Building2, Workflow } from "lucide-react";

export const OriginStoryClient = () => {
  return (
    <section className="py-24 md:py-32 bg-[#050505] text-white relative overflow-hidden">
      {/* Glow Effects */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] bg-brand-violet/10 blur-[150px] pointer-events-none rounded-full" />
      
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-sm font-semibold tracking-widest text-brand-orange uppercase mb-4">
              Our Origin Story
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
              Born from a <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-orange to-brand-violet">Broken System</span>
            </h3>
            <p className="text-lg text-white/70">
              We didn't just want to build another agency. We wanted to solve the fundamental data loss problem plaguing modern marketing.
            </p>
          </motion.div>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(200px,_auto)]">
          
          {/* Block 1: The Breaking Point (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col justify-between hover:bg-white/[0.07] transition-colors relative overflow-hidden group"
          >
            <div className="absolute right-0 top-0 w-64 h-64 bg-brand-orange/20 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:bg-brand-orange/30 transition-colors" />
            <TrendingDown className="w-10 h-10 text-brand-orange mb-6" />
            <div>
              <h4 className="text-2xl md:text-3xl font-display font-bold mb-4">The 50% Data Blackhole</h4>
              <p className="text-white/70 text-lg leading-relaxed max-w-xl">
                We watched enterprise teams lose up to 50% of their conversion data due to iOS restrictions, ad blockers, and outdated client-side tags. Marketing budgets were being burned blindly.
              </p>
            </div>
          </motion.div>

          {/* Block 2: Technical Focus */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-between hover:bg-white/[0.07] transition-colors relative overflow-hidden group"
          >
            <div className="absolute left-0 bottom-0 w-48 h-48 bg-brand-violet/20 blur-[60px] rounded-full -translate-x-1/2 translate-y-1/2 group-hover:bg-brand-violet/30 transition-colors" />
            <Code2 className="w-10 h-10 text-brand-violet mb-6" />
            <div>
              <h4 className="text-xl font-bold mb-3">Engineers, Not Just Strategists</h4>
              <p className="text-white/70">
                Strategy decks don't fix tracking. We built a team of developers who could directly code server-side GTM and APIs.
              </p>
            </div>
          </motion.div>

          {/* Block 3: Accuracy Target */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="bg-white/5 border border-white/10 rounded-3xl p-8 flex flex-col justify-center items-center text-center hover:bg-white/[0.07] transition-colors"
          >
            <CheckCircle2 className="w-12 h-12 text-green-400 mb-4" />
            <h4 className="text-5xl font-display font-bold text-white mb-2">98%+</h4>
            <p className="text-white/70 font-medium">Data Accuracy Target</p>
          </motion.div>

          {/* Block 4: The Solution (Large) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2 bg-gradient-to-br from-brand-violet/20 to-brand-orange/10 border border-brand-violet/30 rounded-3xl p-8 md:p-10 flex flex-col justify-between overflow-hidden relative group"
          >
            <Workflow className="w-10 h-10 text-white mb-6" />
            <div className="relative z-10">
              <h4 className="text-2xl md:text-3xl font-display font-bold mb-4">Building The Modern Pipeline</h4>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                We shifted the entire paradigm to Server-Side Tracking, Meta CAPI, and GA4 Measurement Protocol. By moving data processing to the server, we gave brands their accuracy back.
              </p>
            </div>
          </motion.div>

          {/* Block 5: Who we serve */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="md:col-span-3 bg-white border border-white/10 rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between text-black overflow-hidden"
          >
            <div className="mb-6 md:mb-0 md:pr-10">
              <Building2 className="w-12 h-12 text-brand-orange mb-4" />
              <h4 className="text-2xl md:text-3xl font-display font-bold mb-3">Today's Mission</h4>
              <p className="text-black/70 text-lg max-w-2xl">
                We empower B2B enterprises across SaaS, Fintech, and Healthcare to scale their marketing with absolute confidence in their attribution models.
              </p>
            </div>
            <div className="flex-shrink-0">
              <div className="px-6 py-3 bg-black text-white rounded-full font-semibold text-sm">
                Trusted by 50+ Enterprises
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
