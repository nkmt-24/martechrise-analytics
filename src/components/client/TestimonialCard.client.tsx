'use client'

import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

interface Testimonial {
    name: string
    role: string
    company: string
    content: string
    avatar?: string
}

interface TestimonialCardProps {
    testimonials: Testimonial[]
    duration?: number
}

export function TestimonialCardClient({ testimonials, duration = 30 }: TestimonialCardProps) {
    return (
        <motion.div
            animate={{ y: ['0%', '-50%'] }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'linear',
            }}
            className="flex flex-col gap-6"
        >
            {[...testimonials, ...testimonials].map((testimonial, i) => (
                <div
                    key={i}
                    className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors duration-300"
                >
                    <div className="flex gap-1 mb-4">
                        {[...Array(5)].map((_, j) => (
                            <Star
                                key={j}
                                className="w-4 h-4 fill-yellow-400 text-yellow-400"
                            />
                        ))}
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed mb-6">
                        &quot;{testimonial.content}&quot;
                    </p>

                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center text-white font-bold">
                            {testimonial.name.charAt(0)}
                        </div>
                        <div>
                            <p className="text-white font-semibold text-sm">
                                {testimonial.name}
                            </p>
                            <p className="text-slate-400 text-xs">
                                {testimonial.role} at {testimonial.company}
                            </p>
                        </div>
                    </div>
                </div>
            ))}
        </motion.div>
    )
}
