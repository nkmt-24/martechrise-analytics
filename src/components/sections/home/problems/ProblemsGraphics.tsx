"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { TrendingUp, AlertCircle, Waypoints } from "lucide-react";

export default function ProblemsGraphics() {
  return (
    <div className="w-full max-w-[1100px] mx-auto mb-24">

      {/* 🔥 IMAGE SECTION */}
      <div className="relative flex flex-col md:flex-row justify-center items-center gap-6 mb-16 px-4">

        {/* Background Glow */}
        <div className="absolute inset-0 flex justify-center items-center pointer-events-none">
          <div className="w-[600px] h-[300px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-[80px] rounded-full"></div>
        </div>

        {/* Image 1 */}
        <div className="relative z-10 w-full md:w-[32%] max-w-[340px]">
          <Image
            src="/assets/HOME-PAGE_IMAGES/2.png"
            alt="Marketing Dashboard"
            width={400}
            height={250}
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg transform md:-rotate-2 hover:-translate-y-2 hover:-rotate-1 transition-all duration-500"
          />
        </div>

        {/* Image 2 */}
        <div className="relative z-20 w-full md:w-[36%] max-w-[380px]">
          <Image
            src="/assets/HOME-PAGE_IMAGES/3.png"
            alt="Tracking Issues"
            width={420}
            height={260}
            className="w-full h-auto object-cover rounded-[2rem] shadow-2xl hover:-translate-y-2 transition-all duration-500"
          />
        </div>

        {/* Image 3 */}
        <div className="relative z-10 w-full md:w-[32%] max-w-[340px]">
          <Image
            src="/assets/HOME-PAGE_IMAGES/4.png"
            alt="Customer Journey"
            width={400}
            height={250}
            className="w-full h-auto object-cover rounded-[2rem] shadow-lg transform md:rotate-2 hover:-translate-y-2 hover:rotate-1 transition-all duration-500"
          />
        </div>
      </div>

      {/* 🔥 TEXT SECTION */}
      <div className="grid md:grid-cols-3 gap-10 lg:gap-16 px-4">

        {/* Item 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-start gap-5"
        >
          <div className="w-14 h-14 rounded-full bg-indigo-100 flex items-center justify-center">
            <TrendingUp className="w-6 h-6 text-indigo-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              All your data.<br />One clear view.
            </h3>
            <p className="text-slate-500 text-sm">
              See what's working (and what's not).
            </p>
          </div>
        </motion.div>

        {/* Item 2 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex items-start gap-5"
        >
          <div className="w-14 h-14 rounded-full bg-rose-100 flex items-center justify-center">
            <AlertCircle className="w-6 h-6 text-rose-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Errors you can't see.<br />Data you can't trust.
            </h3>
            <p className="text-slate-500 text-sm">
              Small tracking issues. Big business impact.
            </p>
          </div>
        </motion.div>

        {/* Item 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex items-start gap-5"
        >
          <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center">
            <Waypoints className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Understand every step.<br />Improve every touchpoint.
            </h3>
            <p className="text-slate-500 text-sm">
              A complete customer journey. No blind spots.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
}