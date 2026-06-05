'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { FloatingCampaignCardsClient } from './FloatingCampaignCards.client'

export function ProductDashboardClient() {
    return (
        <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative w-full max-w-[1016px] p-[15px]"
        >
            {/* Outer Glow Layer */}
            <div 
                className="absolute inset-0 rounded-[18px] opacity-20 pointer-events-none z-[1]"
                style={{
                    background: 'linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)'
                }}
            />

            {/* Inner Gradient Border */}
            <div 
                className="absolute inset-[11px] rounded-[13px] z-[1] pointer-events-none"
                style={{
                    background: 'linear-gradient(180deg, #ff2f2f 0%, #ef7b16 35.88%, #8a43e1 69.92%, #d511fd 100%)'
                }}
            />

            {/* Dashboard Content */}
            <div className="relative bg-[#0A0A0A] rounded-[13px] overflow-hidden z-[2] aspect-[1.5875/1]">
                {/* Window Controls Bar */}
                <div className="h-10 border-b border-white/5 flex items-center px-4 gap-2 bg-white/[0.02]">
                    <div className="flex gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-500/80" />
                        <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                        <div className="w-3 h-3 rounded-full bg-green-500/80" />
                    </div>
                </div>

                {/* Dashboard Image */}
                <div className="relative w-full h-[calc(100%-40px)]">
                    <Image
                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71"
                        alt="Analytics Dashboard"
                        fill
                        sizes="(max-width: 1024px) 100vw, 1016px"
                        className="object-cover"
                        unoptimized
                    />
                </div>
            </div>

            {/* Floating Campaign Cards */}
            <FloatingCampaignCardsClient />
        </motion.div>
    )
}
