'use client'

import { motion } from 'framer-motion'

const marqueeFeatures = [
    { label: 'Server-Side Tracking', color: 'bg-purple-500' },
    { label: 'GA4 Implementation', color: 'bg-green-500' },
    { label: 'Meta Conversions API', color: 'bg-pink-500' },
    { label: 'Adobe Analytics', color: 'bg-red-500' },
    { label: 'GTM Server-Side', color: 'bg-blue-500' },
    { label: 'Tealium iQ', color: 'bg-yellow-500' },
    { label: 'Data QA & Validation', color: 'bg-cyan-500' },
    { label: 'Attribution Modeling', color: 'bg-orange-500' },
]

export function FeaturesMarqueeClient() {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-10 relative"
        >
            {/* Constrained width wrapper */}
            <div className="max-w-[1240px] mx-auto relative overflow-hidden">
                {/* Left fade */}
                <div className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to right, #111111 0%, transparent 100%)' }}
                />
                {/* Right fade */}
                <div className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
                    style={{ background: 'linear-gradient(to left, #111111 0%, transparent 100%)' }}
                />

                <div className="flex gap-6 overflow-hidden">
                    <motion.div
                        animate={{ x: [0, -1920] }}
                        transition={{
                            x: {
                                repeat: Infinity,
                                repeatType: 'loop',
                                duration: 30,
                                ease: 'linear',
                            },
                        }}
                        className="flex gap-6 shrink-0"
                    >
                        {[...marqueeFeatures, ...marqueeFeatures, ...marqueeFeatures].map((feature, i) => (
                            <div
                                key={i}
                                className="px-5 py-2.5 rounded-full bg-[#1e1e1e] border border-[#3d3d3d] text-sm font-medium text-white whitespace-nowrap flex items-center gap-2.5"
                            >
                                <div className={`w-2 h-2 rounded-full ${feature.color}`} />
                                {feature.label}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
