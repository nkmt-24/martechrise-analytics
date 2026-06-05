"use client"

import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import { AnimatedText } from "@/components/anim/AnimatedText";
import { ShieldCheck, BadgeCheck } from "lucide-react";
import Link from "next/link";

export const AboutHeroClient = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Apply a spring for buttery-smooth GSAP-like scrolling
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 70,
    damping: 25,
    restDelta: 0.001
  });
  
  const heroOpacity = useTransform(smoothProgress, [0, 0.6], [1, 0]);
  const heroY = useTransform(smoothProgress, [0, 1], [0, -60]);

  return (
    <section ref={ref} className="relative w-full bg-hero-gradient flex flex-col">
      <div className="absolute inset-0 bg-noise pointer-events-none" />

      <div className="relative w-full">
        <motion.div
          style={{ opacity: heroOpacity, y: heroY }}
          className="w-full flex flex-col items-center justify-center px-6 pt-32 pb-[12vh] text-center min-h-[70vh]"
        >
          <motion.p
            initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="text-sm md:text-base mb-6"
          >
            <span className="text-gradient-brand font-semibold">About MarTechRise</span>
            <span className="text-foreground/80"> — The Analytics Architects</span>
          </motion.p>

          <AnimatedText
            text="We Fix Broken Tracking"
            as="h1"
            mode="word"
            delay={0.7}
            stagger={0.08}
            className="font-display font-bold text-4xl md:text-6xl lg:text-8xl leading-[0.95] text-foreground"
          />
          <AnimatedText
            text="So You Can Scale"
            as="h1"
            mode="word"
            delay={1.1}
            stagger={0.08}
            className="font-display font-bold text-4xl md:text-6xl lg:text-8xl leading-[0.95] text-foreground mt-2"
          />

          <motion.p
            initial={{ opacity: 0, y: 16, filter: "blur(6px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ delay: 1.7, duration: 0.8 }}
            className="mt-6 max-w-2xl text-base md:text-lg text-foreground/70"
          >
            MarTechRise is a technical analytics consultancy specializing in server-side tracking,
            GA4, Adobe Analytics, and clean data pipelines for enterprise B2B brands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2.0, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-7 flex flex-col items-center gap-5"
          >
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/analytics-audit">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full bg-foreground text-background font-medium shadow-card-soft w-full sm:w-auto"
                >
                  Book Free Audit
                </motion.button>
              </Link>
              <Link href="/case-studies">
                <motion.button
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  className="px-7 py-3.5 rounded-full border border-foreground/20 text-foreground font-medium hover:bg-foreground/5 transition-colors w-full sm:w-auto"
                >
                  View Case Studies
                </motion.button>
              </Link>
            </div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.4, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center gap-6 text-sm text-foreground/70"
            >
              <span className="flex items-center gap-2">
                <BadgeCheck className="w-4 h-4 text-foreground" />
                <b className="text-foreground">Technical First</b> Agency
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-foreground" />
                <b className="text-foreground">Enterprise Grade</b> Solutions
              </span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
