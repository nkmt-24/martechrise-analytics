"use client"

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

export const AboutMissionCardClient = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 lg:row-span-2 bg-[#111111] rounded-3xl p-10 flex flex-col justify-between min-h-[400px] relative overflow-hidden"
        >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-20"
                style={{
                    backgroundImage: 'radial-gradient(#333 1px, transparent 1px)',
                    backgroundSize: '24px 24px'
                }}
            />

            <div className="relative z-10">
                <h3 className="text-white text-2xl font-bold mb-6">Our Mission</h3>
                <p className="text-slate-400 text-lg leading-relaxed">
                    We give enterprise marketing teams the robust tracking infrastructure and clean data pipelines they need to eliminate data loss and scale attribution with complete certainty.
                </p>
            </div>

            <div className="relative z-10 mt-4">
                <div className="flex items-center -space-x-4 mb-6">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="relative w-12 h-12 rounded-full border-2 border-[#111] overflow-hidden bg-slate-800">
                            <Image
                                src={`https://i.pravatar.cc/150?img=${i + 10}`}
                                alt="User"
                                fill
                                sizes="48px"
                                className="object-cover"
                                unoptimized
                            />
                        </div>
                    ))}
                </div>

                <div className="flex gap-1 mb-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                        <Star key={i} className="w-5 h-5 text-white fill-white" />
                    ))}
                </div>

                <div className="text-white font-bold text-lg mb-1">
                    Trusted by 50+ enterprise brands
                </div>
                <div className="text-slate-500 text-xs font-bold tracking-widest uppercase">
                    ELIMINATE DATA LOSS — SCALE CONFIDENTLY.
                </div>
            </div>
        </motion.div>
    )
}
