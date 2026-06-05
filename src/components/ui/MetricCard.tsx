"use client";

import React from 'react';
import { motion } from 'framer-motion';

interface MetricCardProps {
    value: string;
    suffix: string;
    label: string;
    delay?: number;
}

const MetricCard: React.FC<MetricCardProps> = ({ value, suffix, label, delay = 0 }) => {
    return (
        <div className="text-center">
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay }}
                className="text-5xl md:text-7xl font-black text-slate-900 mb-4"
            >
                {value}{suffix}
            </motion.div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest">{label}</div>
        </div>
    );
};

export default MetricCard;
