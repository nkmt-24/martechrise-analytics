"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { tabs, contentMap } from "@/config/insights"

export function InsightsTabsClient() {
    const [activeTab, setActiveTab] = useState('ecommerce')
    const current = contentMap[activeTab]

    return (
        <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 p-8 md:p-10 relative z-10">

            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-3 mb-10 border-b border-slate-100 pb-8  md:justify-start">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab.id
                    return (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`
                                relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 z-0
                                ${isActive ? 'text-slate-900 shadow-md' : 'bg-slate-50 text-slate-500 hover:bg-slate-100'}
                            `}
                        >
                            {/* Gradient Border for Active State */}
                            {isActive && (
                                <div className="absolute inset-0 rounded-full p-[1px] bg-gradient-to-r from-[#FF7A18] via-[#D93A8A] to-[#7B3FE4] -z-10">
                                    <div className="w-full h-full bg-white rounded-full" />
                                </div>
                            )}
                            <tab.icon className={`w-4 h-4 ${isActive ? 'text-[#FF7A18]' : 'text-slate-400'}`} />
                            {tab.label}
                        </button>
                    )
                })}
            </div>

            {/* Tab Content */}
            <AnimatePresence mode="wait">
                <motion.div
                    key={activeTab}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
                >
                    {/* Left: Text Content */}
                    <div className="flex flex-col justify-center">
                        <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6 leading-tight">
                            {current.heading}
                        </h3>

                        <div className="space-y-6 mb-8">
                            {current.stats.map((stat, index) => (
                                <div key={index} className="relative">
                                    <h4 className="text-base font-bold text-slate-900 mb-1.5">
                                        {stat.heading}
                                    </h4>
                                    <p className="text-slate-500 text-sm leading-relaxed">
                                        {stat.description}
                                    </p>
                                    {index === 0 && (
                                        <div className="w-full h-px bg-slate-100 mt-6" />
                                    )}
                                </div>
                            ))}
                        </div>

                        <button className="self-start px-7 py-3 rounded-lg border-2 border-slate-900 text-slate-900 font-semibold hover:bg-slate-900 hover:text-white transition-all duration-300 hover:shadow-lg hover:scale-105 text-sm">
                            {current.buttonText}
                        </button>
                    </div>

                    {/* Right: Industry Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 1.03 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5 }}
                        className="relative h-[280px] md:h-[360px] rounded-2xl overflow-hidden shadow-md"
                    >
                        <Image
                            src={current.image}
                            alt={current.heading}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 50vw"
                            unoptimized
                        />
                        {/* Subtle gradient overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                    </motion.div>
                </motion.div>
            </AnimatePresence>

        </div>
    )
}
