"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { marqueeVariants } from './animations';

const imageLogos = [

    { src: "/assets/logo-carousel/1.png", alt: "Logo 1" },
    { src: "/assets/logo-carousel/2.png", alt: "Logo 2" },
    { src: "/assets/logo-carousel/3.png", alt: "Logo 3" },
    { src: "/assets/logo-carousel/4.png", alt: "Logo 4" },
    { src: "/assets/logo-carousel/5.png", alt: "Logo 5" },
    { src: "/assets/logo-carousel/6.png", alt: "Logo 6" },
    { src: "/assets/logo-carousel/7.png", alt: "Logo 7" },
    { src: "/assets/logo-carousel/8.png", alt: "Logo 8" },
    { src: "/assets/logo-carousel/9.png", alt: "Logo 9" },
    { src: "/assets/logo-carousel/10.png", alt: "Logo 10" },
];

// Repeat logos to span wide screens without gaps
const renderedLogos = [...imageLogos, ...imageLogos, ...imageLogos];

const LogoCarousel: React.FC = () => {
    return (
        <div className="flex overflow-hidden group mb-20 py-12 bg-white border-y border-slate-200 shadow-sm relative max-w-[100vw]">
            {/* Gradient Masks */}
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

            <motion.div
                className="flex flex-nowrap items-center shrink-0"
                variants={marqueeVariants}
                animate="animate"
            >
                {renderedLogos.map((logo, i) => (
                    <div key={`original-${i}`} className="mx-16 shrink-0  duration-500">
                        <Image src={logo.src} alt={logo.alt} width={160} height={100} className="object-contain w-auto h-30" />
                    </div>
                ))}
            </motion.div>
            <motion.div
                className="flex flex-nowrap items-center shrink-0"
                variants={marqueeVariants}
                animate="animate"
            >
                {renderedLogos.map((logo, i) => (
                    <div key={`dup-${i}`} className="mx-16 shrink-0  duration-500">
                        <Image src={logo.src} alt={logo.alt} width={160} height={80} className="object-contain w-auto h-20" />
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default LogoCarousel;
