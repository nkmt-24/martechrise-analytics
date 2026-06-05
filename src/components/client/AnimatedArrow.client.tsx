'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'

export function AnimatedArrowClient() {
    const shouldReduce = useReducedMotion()

    if (shouldReduce) {
        return (
            <Image
                src="/arrow.svg"
                alt=""
                width={120}
                height={100}
                className="opacity-70 w-auto h-auto"
            />
        )
    }

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{
                duration: 0.8,
                delay: 0.8,
                ease: [0.22, 1, 0.36, 1]
            }}
        >
            <Image
                src="/arrow.svg"
                alt=""
                width={120}
                height={100}
                className="opacity-70 w-auto h-auto"
            />
        </motion.div>
    )
}
