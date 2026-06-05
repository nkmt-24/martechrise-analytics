'use client'

import { motion } from 'framer-motion'

interface Feature {
    icon: React.ReactNode
    title: string
    description: string
}

interface ProductFeaturesGridProps {
    features: Feature[]
}

export function ProductFeaturesGridClient({ features }: ProductFeaturesGridProps) {
    return (
        <div className="max-w-[1240px] mx-auto mt-20 px-10">
            <motion.div
                initial={{ opacity: 0, y: 60, filter: 'blur(10px)' }}
                whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{
                    duration: 0.8,
                    delay: 0.1,
                    ease: [0.22, 1, 0.36, 1]
                }}
                className="flex flex-col min-[1100px]:flex-row gap-0 border-t border-[#3d3d3d] relative"
            >
                {/* Center Vertical Gradient Line for Desktop */}
                <div
                    className="absolute left-1/2 top-0 bottom-[-64px] w-[1px] hidden min-[1100px]:block z-0"
                    style={{
                        background: 'linear-gradient(180deg, rgba(255,47,47,0) 0%, #ff2f2f 35%, #ef7b16 55%, #8a43e1 75%, #d511fd 100%)'
                    }}
                />
                {features.map((feature, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 30, scale: 0.95 }}
                        whileInView={{ opacity: 1, y: 0, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.6,
                            delay: 0.2 + i * 0.1,
                            ease: [0.22, 1, 0.36, 1]
                        }}
                        whileHover={{
                            scale: 1.02,
                            transition: { duration: 0.3 }
                        }}
                        className={`flex-1 p-8 relative z-10 border-[#3d3d3d] ${i !== features.length - 1 ? 'border-b min-[1100px]:border-b-0' : ''
                            } ${i !== features.length - 1 && i !== 1 ? 'min-[1100px]:border-r' : ''
                            }`}
                    >
                        {/* Icon Container */}
                        <motion.div
                            initial={{ scale: 0, rotate: -180 }}
                            whileInView={{ scale: 1, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.3 + i * 0.1,
                                ease: [0.34, 1.56, 0.64, 1]
                            }}
                            className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors"
                        >
                            {feature.icon}
                        </motion.div>

                        {/* Title */}
                        <motion.h3
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.4 + i * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-lg font-medium leading-[150%] text-white mb-2"
                        >
                            {feature.title}
                        </motion.h3>

                        {/* Description */}
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                duration: 0.5,
                                delay: 0.5 + i * 0.1,
                                ease: [0.22, 1, 0.36, 1]
                            }}
                            className="text-sm font-normal leading-[150%] text-[#808080]"
                        >
                            {feature.description}
                        </motion.p>
                    </motion.div>
                ))}
            </motion.div>
        </div>
    )
}
