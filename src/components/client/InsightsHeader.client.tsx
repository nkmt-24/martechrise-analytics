'use client'

import { motion } from 'framer-motion'
import { AnimatedArrowClient } from './AnimatedArrow.client'

export function InsightsHeaderClient() {
    return (
        <div className="flex flex-col items-center text-center mb-16 relative z-10">
            {/* Pill Badge - Fade in from top */}
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 mb-6 shadow-sm"
            >
                Enterprise Solutions
            </motion.div>

            {/* Main Heading - Fade in with blur */}
            <motion.h2
                initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-[700px]"
            >
                How MarTechRise Helps Enterprise Teams Eliminate Data Loss
            </motion.h2>

            {/* Animated Arrow (text included in SVG) */}
            <div className="absolute left-0 top-20 hidden xl:block">
                <AnimatedArrowClient />
            </div>
        </div>
    )
}
