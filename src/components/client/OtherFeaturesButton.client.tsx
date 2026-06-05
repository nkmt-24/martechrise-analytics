'use client'

import { motion } from 'framer-motion'

export function OtherFeaturesButtonClient() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-[1240px] mx-auto mt-6 px-10"
        >
            <div className="relative flex items-center justify-center">
                {/* Full width line behind */}
                <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3d3d3d] to-transparent" />

                {/* Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="relative bg-[#111111] px-4"
                >
                    <div className="bg-[#1e1e1e] border border-[#3d3d3d] px-6 py-2.5 rounded-full text-sm font-medium text-white whitespace-nowrap">
                        Other Interesting Features
                    </div>
                </motion.div>
            </div>
        </motion.div>
    )
}
