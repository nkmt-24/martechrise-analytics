'use client'

import { motion } from 'framer-motion'
import { Check } from 'lucide-react'

interface InsightsTagsProps {
    tags: string[]
}

export function InsightsTagsClient({ tags }: InsightsTagsProps) {
    return (
        <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
            {tags.map((tag, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                        duration: 0.5,
                        delay: 0.1 * index,
                        ease: [0.22, 1, 0.36, 1]
                    }}
                    className="flex items-center gap-3 group"
                >
                    <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                        className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center shadow-md"
                    >
                        <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                    </motion.div>
                    <span className="text-slate-500 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors duration-300">
                        {tag}
                    </span>
                </motion.div>
            ))}
        </div>
    )
}
