'use client'

import { motion } from 'framer-motion'

export function ProductContentClient() {
    return (
        <div className="flex flex-col items-center gap-3.5 max-w-[750px] text-center">
            {/* Heading */}
            <motion.h2
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-[52px] font-semibold leading-[120%] text-white"
            >
                Flawless Tracking Architecture & Data Pipelines
            </motion.h2>

            {/* Subtitle */}
            <motion.p
                initial={{ opacity: 0, y: 80, scale: 0.9 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-base font-medium leading-[150%] text-[#ded8d3]"
            >
                MarTechRise delivers enterprise-grade server-side tracking, GA4 implementation, and conversion APIs to eliminate data loss and scale with confidence.
            </motion.p>

            {/* CTA Button */}
            <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-[#1e1e1e] px-5 py-3.5 rounded-lg text-lg font-medium leading-[150%] mt-2"
            >
                Book Free Audit
            </motion.button>
        </div>
    )
}
