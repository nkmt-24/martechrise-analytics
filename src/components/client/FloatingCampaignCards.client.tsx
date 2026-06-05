'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

export function FloatingCampaignCardsClient() {
    return (
        <>
            {/* Left Floating Card - Phone/Device Mockup */}
            <motion.div
                initial={{ opacity: 0, y: 150, rotate: 5 }}
                whileInView={{ opacity: 1, y: 0, rotate: 5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="absolute top-[119px] -left-16 w-[245px] xl:block hidden z-[5]"
                style={{
                    aspectRatio: '0.9245 / 1',
                    filter: 'drop-shadow(0px 4px 5px rgba(0,0,0,.05)) drop-shadow(0px 10px 22px rgba(0,0,0,.1)) drop-shadow(-20px 36px 22px rgba(0,0,0,.05))'
                }}
            >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-gradient-to-br from-indigo-500 to-purple-600">
                    <Image
                        src="https://images.unsplash.com/photo-1551650975-87deedd944c3"
                        alt="Campaign Analytics"
                        fill
                        className="object-cover"
                        sizes="245px"
                        unoptimized
                    />
                </div>
            </motion.div>

            {/* Right Floating Card - Stats/Chart Graphic */}
            <motion.div
                initial={{ opacity: 0, y: 150, rotate: -5 }}
                whileInView={{ opacity: 1, y: 0, rotate: -5 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.9 }}
                className="absolute bottom-[272px] -right-[73px] w-[288px] xl:block hidden z-[5]"
                style={{
                    aspectRatio: '2.2154 / 1',
                    filter: 'drop-shadow(0px 4px 5px rgba(0,0,0,.05)) drop-shadow(0px 10px 22px rgba(0,0,0,.1)) drop-shadow(-20px 36px 22px rgba(0,0,0,.05))'
                }}
            >
                <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white p-4">
                    <div className="flex flex-col gap-2 h-full">
                        <div className="flex items-center justify-between">
                            <span className="text-xs font-semibold text-gray-900">Campaign ROI</span>
                            <span className="text-xs font-bold text-green-600">+24.5%</span>
                        </div>
                        <div className="flex-1 flex items-end gap-1">
                            <div className="flex-1 bg-gradient-to-t from-indigo-600 to-indigo-400 rounded-t h-[40%]" />
                            <div className="flex-1 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t h-[60%]" />
                            <div className="flex-1 bg-gradient-to-t from-pink-600 to-pink-400 rounded-t h-[80%]" />
                            <div className="flex-1 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t h-[55%]" />
                        </div>
                    </div>
                </div>
            </motion.div>
        </>
    )
}
