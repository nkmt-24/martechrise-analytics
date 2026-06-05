"use client"

import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { cn } from '@/lib/cn'

interface ServiceHeroProps {
  badge: string
  headline: string
  subheadline: string
  ctaLabel: string
  ctaHref: string
  statOne: { value: string; label: string }
  statTwo: { value: string; label: string }
  statThree: { value: string; label: string }
}

export function ServiceHero({
  badge,
  headline,
  subheadline,
  ctaLabel,
  ctaHref,
  statOne,
  statTwo,
  statThree,
}: ServiceHeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
    },
  }

  return (
    <section className="relative bg-[#050505] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background glow effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-brand-cyan/20 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-brand-blue/10 blur-[150px] rounded-full mix-blend-screen" />
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-8 items-center">
          {/* Left: Content */}
          <motion.div 
            className="lg:col-span-7 flex flex-col justify-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium text-white backdrop-blur-sm shadow-[0_0_20px_rgba(255,255,255,0.05)]">
                <span className="w-2 h-2 rounded-full bg-brand-cyan animate-pulse" />
                {badge}
              </span>
            </motion.div>
            
            <motion.h1 
              variants={itemVariants}
              className="mb-6 text-4xl font-bold leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl xl:text-[68px]"
            >
              {headline}
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="mb-10 text-lg leading-relaxed text-gray-400 md:text-xl max-w-2xl"
            >
              {subheadline}
            </motion.p>
            
            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 sm:items-center">
              <Link
                href={ctaHref}
                className={cn(
                  'inline-flex items-center justify-center gap-2',
                  'rounded-full bg-white px-8 py-4 text-sm font-semibold text-gray-900',
                  'transition-all duration-300 hover:bg-gray-100 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]',
                  'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
                )}
              >
                {ctaLabel}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </motion.div>

          {/* Right: Stats */}
          <motion.div 
            className="lg:col-span-5 flex flex-col justify-center gap-4 lg:pl-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <StatCard value={statOne.value} label={statOne.label} delay={0.3} />
            <StatCard value={statTwo.value} label={statTwo.label} delay={0.4} />
            <StatCard value={statThree.value} label={statThree.label} delay={0.5} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function StatCard({ value, label, delay }: { value: string; label: string; delay: number }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] as const }}
      className="group relative rounded-2xl border border-white/5 bg-white/[0.02] p-6 backdrop-blur-md overflow-hidden hover:bg-white/[0.04] transition-colors duration-500"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-brand-cyan/0 via-brand-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10 flex items-start gap-5">
        <div className="mt-1 flex-shrink-0 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10 group-hover:border-brand-cyan/30 transition-colors duration-300">
          <CheckCircle2 className="w-5 h-5 text-gray-400 group-hover:text-brand-cyan transition-colors duration-300" />
        </div>
        <div>
          <div className="text-3xl font-display font-bold text-white md:text-4xl tracking-tight">{value}</div>
          <div className="mt-2 text-sm leading-relaxed text-gray-400 md:text-base group-hover:text-gray-300 transition-colors duration-300">
            {label}
          </div>
        </div>
      </div>
    </motion.div>
  )
}
