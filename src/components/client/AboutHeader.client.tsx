"use client"

import { motion } from "framer-motion"

export const AboutHeaderClient = () => {
    return (
        <div className="mb-16">
            <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#E5E5E5] text-xs font-bold uppercase tracking-wider text-slate-600 mb-6"
            >
                <div className="w-1.5 h-1.5 rounded-full bg-slate-800" />
                Our Impact
            </motion.div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight max-w-3xl"
                >
                    Flawless <span className="text-slate-400">Data</span> Pipelines.
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="text-lg text-slate-500 max-w-md text-right lg:text-right leading-relaxed"
                >
                    Deep technical expertise + server-side focus—so you can track accurately and scale with confidence.
                </motion.p>
            </div>
        </div>
    )
}
