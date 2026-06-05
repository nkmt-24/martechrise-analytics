'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { fadeUp, transitions } from '@/lib/motion'
import type { HTMLMotionProps } from 'framer-motion'

interface FadeUpProps extends Omit<HTMLMotionProps<'div'>, 'variants' | 'initial' | 'whileInView'> {
  delay?: number
  duration?: number
  once?: boolean
  children: React.ReactNode
}

/**
 * Scroll-triggered fade-up reveal wrapper.
 * The most common reveal pattern — use this for section headings,
 * paragraphs, and card groups.
 *
 * @example
 * <FadeUp delay={0.1}>
 *   <h2>How It Works</h2>
 * </FadeUp>
 */
export default function FadeUp({
  delay = 0,
  duration = 0.55,
  once = true,
  children,
  className,
  ...props
}: FadeUpProps) {
  const shouldReduce = useReducedMotion()

  if (shouldReduce) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, margin: '-72px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...props}
    >
      {children}
    </motion.div>
  )
}
