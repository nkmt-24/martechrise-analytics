'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

interface Project {
    _id: string
    title: string
    slug: string
    clientName: string
    shortSummary: string
    description?: string
    coverImage?: { url: string }
    metrics?: Array<{ label: string; value: string; unit?: string }>
    testimonial?: { quote: string; author: string; role: string }
}

interface FeaturedCaseStudyCardProps {
    project: Project
}

export function FeaturedCaseStudyCardClient({ project }: FeaturedCaseStudyCardProps) {
    // Truncate description to ~180 characters
    const description = project.shortSummary?.length > 180
        ? project.shortSummary.substring(0, 180) + '...'
        : project.shortSummary

    return (
        <div className="max-h-[800px] space-y-8">
            {/* Top: Large Image Card */}
            <motion.div
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-cyan-400 via-cyan-500 to-teal-500 shadow-xl"
            >
                {/* Image Container with 7:5 aspect ratio */}
                <div className="relative aspect-[7/5] md:aspect-video w-full max-h-[500px] md:max-h-[600px] overflow-hidden">
                    {project.coverImage?.url ? (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="absolute inset-0 w-full h-full"
                        >
                            <Image
                                src={project.coverImage.url}
                                alt={project.title}
                                fill
                                sizes="(max-width: 768px) 100vw, 1200px"
                                className="object-cover object-center"
                                priority
                            />
                        </motion.div>
                    ) : (
                        <div className="absolute inset-0 w-full h-full flex items-center justify-center bg-gray-800/20 backdrop-blur-sm">
                            <span className="text-white/80 text-sm font-medium">No image available</span>
                        </div>
                    )}
                </div>

                {/* Bottom gradient shadow */}
                <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/10 to-transparent pointer-events-none" />
            </motion.div>

            {/* Bottom: Content Grid */}
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
                {/* Left Column: Main Content */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="space-y-4"
                >
                    {/* Client Name */}
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                        {project.clientName}
                    </motion.p>

                    {/* Title */}
                    <motion.h3
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-2xl md:text-3xl font-bold text-gray-900 leading-tight"
                    >
                        {project.title}
                    </motion.h3>

                    {/* Description */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        className="text-gray-600 text-sm leading-relaxed"
                    >
                        {description}
                    </motion.p>

                    {/* CTA Link */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="pt-2"
                    >
                        <Link
                            href={`/portfolio/${project.slug}`}
                            className="inline-flex items-center text-red-500 hover:text-red-600 font-semibold transition-colors group text-sm"
                        >
                            View Case Study
                            <motion.div
                                whileHover={{ x: 5 }}
                                transition={{ duration: 0.2 }}
                            >
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </motion.div>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Right Column: Stats Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-start"
                >
                    {/* Stats Grid - Show up to 6 metrics in 3 columns */}
                    {project.metrics && project.metrics.length > 0 && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 w-full"
                        >
                            {project.metrics.slice(0, 6).map((metric, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0.9, y: 20 }}
                                    whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: 0.5 + i * 0.08 }}
                                    className="space-y-1.5"
                                >
                                    <motion.div
                                        className="text-3xl md:text-4xl font-bold text-gray-900"
                                        whileHover={{ scale: 1.05 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        {metric.value}
                                    </motion.div>
                                    <div className="text-xs text-gray-600 leading-tight font-medium">
                                        {metric.label}
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>
                    )}
                </motion.div>
            </div>
        </div>
    )
}
