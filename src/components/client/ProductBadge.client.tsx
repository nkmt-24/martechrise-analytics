'use client'

import { motion } from 'framer-motion'

export function ProductBadgeClient() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative inline-flex p-[1px] rounded-[100px] overflow-hidden"
        >
            {/* Gradient Border Background */}
            <div
                className="absolute inset-0 rounded-[100px]"
                style={{
                    background: 'linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)'
                }}
            />

            {/* Badge Content */}
            <div className="relative bg-[#1e1e1e] rounded-[100px] px-3.5 py-2.5 flex items-center gap-3 z-[2]">
                <span className="text-white font-medium text-base leading-[150%]">
                    Product Overview
                </span>
            </div>
        </motion.div>
    )
}
