"use client";

import React from 'react';
import { METRICS } from '@/constants';
import MetricCard from '@/components/ui/MetricCard';

const MetricsSection: React.FC = () => {
    return (
        <section className="py-32">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-12">
                    {METRICS.map((m, i) => (
                        <MetricCard
                            key={i}
                            value={m.value}
                            suffix={m.suffix}
                            label={m.label}
                            delay={i * 0.1}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MetricsSection;
