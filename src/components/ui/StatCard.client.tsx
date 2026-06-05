"use client"

import { motion } from "framer-motion"
import { ReactNode } from "react"

interface StatCardProps {
    value: string
    label: string
    icon: ReactNode
    delay?: number
}

export const StatCardClient = ({ value, label, icon, delay = 0 }: StatCardProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay, duration: 0.5 }}
            className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col justify-between min-h-[200px]"
        >
            <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-slate-800 mb-6">
                {icon}
            </div>
            <div>
                <div className="text-4xl font-bold text-slate-900 mb-2">{value}</div>
                <div className="text-slate-600 font-medium">{label}</div>
            </div>
        </motion.div>
    )
}
