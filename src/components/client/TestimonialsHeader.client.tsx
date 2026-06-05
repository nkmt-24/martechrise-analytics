'use client'

import { motion } from 'framer-motion'

export function TestimonialsHeaderClient() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="text-center mb-16 relative z-10"
        >
            <div className="inline-flex px-4 py-1 rounded-full border border-white/10 bg-white/5 text-xs mb-6 shadow-[0_0_15px_rgba(255,255,255,0.05)] text-slate-300">
                What Our Clients Say
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight max-w-2xl mx-auto">
                Trusted by Marketing Teams Worldwide
            </h2>

            <p className="text-slate-400 mt-4 max-w-xl mx-auto">
                See how brands are transforming their advertising campaigns with our platform
            </p>
        </motion.div>
    )
}
