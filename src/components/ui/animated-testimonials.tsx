"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

type Testimonial = {
    quote: string;
    name: string;
    designation: string;
    src: string;
    avatar: string;
};

export const AnimatedTestimonials = ({
    testimonials,
    autoplay = false,
}: {
    testimonials: Testimonial[];
    autoplay?: boolean;
}) => {
    const [active, setActive] = useState(0);

    const handleNext = () => {
        setActive((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrev = () => {
        setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const isActive = (index: number) => {
        return index === active;
    };

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(handleNext, 5000);
            return () => clearInterval(interval);
        }
    }, [autoplay]);

    return (
        <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-12 antialiased font-sans">
            <div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">
                <div>
                    <div className="relative h-80 w-full mb-10 md:mb-0 flex items-center justify-center pointer-events-none">
                        {testimonials.map((testimonial, index) => {
                            const rotateY = isActive(index)
                                ? 0
                                : index < active
                                    ? -40
                                    : 40;

                            const zIndex = isActive(index) ? 10 : 0;
                            const scale = isActive(index) ? 1 : 0.8;
                            const opacity = isActive(index) ? 1 : 0.5;

                            // Calculate Y position based on distance from active index
                            // We want active in center (0), previous above (negative Y), next below (positive Y)
                            // But image reference shows: active is highest layer and flat. 
                            // Previous (index < active) are above active
                            // Next (index > active) are below active
                            const yOffset = (index - active) * 120; // Adjust vertical spacing

                            return (
                                <motion.div
                                    key={testimonial.name}
                                    initial={{
                                        opacity: 0,
                                        scale: 0.9,
                                        rotateX: 0,
                                        y: 0,
                                    }}
                                    animate={{
                                        opacity: opacity,
                                        scale: scale,
                                        rotateX: isActive(index) ? 0 : 40,
                                        y: yOffset,
                                        zIndex: zIndex,
                                    }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeInOut",
                                    }}
                                    className="absolute inset-0 flex items-center justify-center p-4"
                                    style={{
                                        perspective: "1000px",
                                    }}
                                >
                                    <div className="bg-white/80 backdrop-blur-md rounded-2xl p-6 md:p-8 shadow-2xl relative w-full pointer-events-auto">
                                        {/* Add a subtle highlight or border to active card */}
                                        {isActive(index) && (
                                            <div className="absolute inset-0 rounded-2xl border border-blue-100 dark:border-blue-900 pointer-events-none" />
                                        )}
                                        <div className="relative z-10">
                                            <p className="text-gray-700 text-lg md:text-xl font-medium leading-relaxed mb-6">
                                                "{testimonial.quote}"
                                            </p>
                                            <div className="flex items-center gap-4 mt-auto">
                                                <div className="relative h-12 w-12 rounded-full overflow-hidden shrink-0">
                                                    <Image
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>
                                                <div>
                                                    <h4 className="text-gray-900 font-semibold text-lg">
                                                        {testimonial.name}
                                                    </h4>
                                                    <p className="text-gray-500 text-sm">
                                                        {testimonial.designation}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            );
                        })}
                    </div>

                </div>

                {/* Right column for larger dynamic image fading in and out */}
                <div className="relative h-[400px] w-full rounded-2xl overflow-hidden hidden md:block group">
                    <AnimatePresence mode="popLayout">
                        <motion.div
                            key={active}
                            initial={{
                                opacity: 0,
                                scale: 1.05,
                            }}
                            animate={{
                                opacity: 1,
                                scale: 1,
                            }}
                            exit={{
                                opacity: 0,
                                scale: 0.95,
                            }}
                            transition={{
                                duration: 0.8,
                                ease: [0.16, 1, 0.3, 1],
                            }}
                            className="absolute inset-0"
                        >
                            <Image
                                src={testimonials[active].src}
                                alt={testimonials[active].name}
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Controls over image (optional, user wanted auto-move but controls are nice) */}
                    <div className="absolute bottom-6 right-6 flex gap-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <button
                            onClick={handlePrev}
                            className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                        >
                            <svg xmlns="http://www.w000.svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </svg>
                        </button>
                        <button
                            onClick={handleNext}
                            className="h-10 w-10 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors"
                        >
                            <svg xmlns="http://www.w000.svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
