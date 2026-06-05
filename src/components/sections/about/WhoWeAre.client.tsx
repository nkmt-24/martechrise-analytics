"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ShieldCheck, Award, Zap } from "lucide-react";

export const WhoWeAreClient = () => {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          
          {/* Left Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted border border-border text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4 text-brand-orange" />
                <span>Who We Are</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-[54px] font-display font-bold text-foreground leading-[1.1] tracking-tight mb-6">
                Technical Architects for <br className="hidden md:block" />
                <span className="text-gradient-brand">Global Enterprises</span>
              </h2>
              
              <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                At MarTechRise, our expertise is backed by globally recognized certifications in digital analytics, customer data platforms, and marketing technology.
              </p>
              
              <p className="text-lg text-foreground/70 leading-relaxed mb-8">
                We continuously upskill to stay ahead in the ever-evolving MarTech ecosystem and deliver industry-best solutions.
              </p>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <div className="w-8 h-8 rounded-full bg-brand-orange/10 flex items-center justify-center">
                    <Award className="w-4 h-4 text-brand-orange" />
                  </div>
                  Certified Experts
                </div>
                <div className="flex items-center gap-2 text-sm font-medium text-foreground">
                  <div className="w-8 h-8 rounded-full bg-brand-violet/10 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-brand-violet" />
                  </div>
                  Industry Best Solutions
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Image with Animations */}
          <div className="w-full lg:w-1/2 relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="relative rounded-3xl overflow-hidden shadow-frame border border-border/50 bg-card aspect-[4/3] w-full"
            >
              <Image
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                alt="MarTechRise Technical Architects collaborating"
                fill
                className="object-cover"
                unoptimized // since it's an external url not in domains
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-foreground/10 to-transparent mix-blend-overlay" />
            </motion.div>

            {/* Floating Badge 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -left-6 md:-left-12 bg-card border border-border p-4 rounded-2xl shadow-card-soft flex items-center gap-4 z-20"
            >
              <div className="w-12 h-12 bg-brand-violet/10 rounded-xl flex items-center justify-center">
                <Award className="w-6 h-6 text-brand-violet" />
              </div>
              <div>
                <p className="text-sm text-foreground/60 font-medium">Platform</p>
                <p className="text-foreground font-bold">Certified Partners</p>
              </div>
            </motion.div>

            {/* Floating Badge 2 */}
            <motion.div
              initial={{ opacity: 0, y: -30, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-8 -right-4 md:-right-8 bg-card border border-border p-4 rounded-2xl shadow-card-soft flex items-center gap-3 z-20"
            >
              <div className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-orange opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-brand-orange"></span>
              </div>
              <p className="text-foreground font-bold text-sm">Always Innovating</p>
            </motion.div>

            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-brand-violet/20 to-brand-orange/20 blur-[100px] -z-10 rounded-full" />
          </div>

        </div>
      </div>
    </section>
  );
};
