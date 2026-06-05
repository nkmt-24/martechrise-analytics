"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}

interface PencilSketchProps {
    type: 'Analytics' | 'Shield' | 'Gears' | 'Chart';
    className?: string;
    mousePos?: { x: number, y: number };
    color?: string;
}

const PencilSketch: React.FC<PencilSketchProps> = ({ type, className = "", mousePos, color = "text-indigo-600" }) => {
    const svgRef = useRef<SVGSVGElement>(null);
    const containerRef = useRef<SVGGElement>(null);

    useGSAP(() => {
        if (!containerRef.current) return;

        const paths = containerRef.current.querySelectorAll('path');

        // Setup for drawing animation using .from ensures visibility if GSAP is interrupted
        gsap.from(paths, {
            strokeDasharray: 1000,
            strokeDashoffset: 1000,
            duration: 1.5,
            stagger: 0.15,
            ease: "power2.out",
            scrollTrigger: {
                trigger: svgRef.current,
                start: "top 90%",
                toggleActions: "play none none none"
            }
        });

        // Subtle floating / sketch vibration
        gsap.to(paths, {
            x: "+=random(-1.5, 1.5)",
            y: "+=random(-1.5, 1.5)",
            duration: 0.15,
            repeat: -1,
            yoyo: true,
            ease: "none"
        });

    }, { scope: containerRef, dependencies: [type] });

    // Separate effect for mouse parallax to avoid triggering redraws of main animation
    useGSAP(() => {
        if (mousePos && containerRef.current) {
            const factor = type === 'Shield' ? 12 : 20;
            gsap.to(containerRef.current, {
                x: mousePos.x * factor,
                y: mousePos.y * factor,
                duration: 0.8,
                ease: "power3.out"
            });
        }
    }, { dependencies: [mousePos, type] });

    const renderPaths = () => {
        const getFillColor = () => {
            // Extract indigo-600 -> rgba for a soft fill
            // This is a bit manual but effective for "vibrancy"
            return "currentColor";
        };

        switch (type) {
            case 'Analytics':
                return (
                    <g ref={containerRef}>
                        <path d="M10,80 L90,80" stroke="currentColor" strokeWidth="3" fill="none" />
                        {/* Soft background shapes for better visibility */}
                        <path d="M20,80 L20,40" stroke="currentColor" strokeWidth="5" fill="none" />
                        <path d="M40,80 L40,20" stroke="currentColor" strokeWidth="5" fill="none" />
                        <path d="M60,80 L60,50" stroke="currentColor" strokeWidth="5" fill="none" />
                        <path d="M80,80 L80,30" stroke="currentColor" strokeWidth="5" fill="none" />
                        {/* Subtle inner fills */}
                        <rect x="18" y="40" width="4" height="40" fill="currentColor" opacity="0.1" />
                        <rect x="38" y="20" width="4" height="60" fill="currentColor" opacity="0.1" />
                        <rect x="58" y="50" width="4" height="30" fill="currentColor" opacity="0.1" />
                        <rect x="78" y="30" width="4" height="50" fill="currentColor" opacity="0.1" />
                    </g>
                );
            case 'Shield':
                return (
                    <g ref={containerRef}>
                        <path d="M50,10 L90,25 C90,60 50,90 50,90 C50,90 10,60 10,25 L50,10 Z" stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.05" />
                        <path d="M50,25 L50,75 M30,40 L70,40" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.4" />
                    </g>
                );
            case 'Gears':
                return (
                    <g ref={containerRef}>
                        <path d="M50,30 A20,20 0 1,1 50,70 A20,20 0 1,1 50,30" stroke="currentColor" strokeWidth="4" fill="currentColor" fillOpacity="0.05" />
                        <path d="M50,20 L50,10 M50,90 L50,80 M10,50 L20,50 M90,50 L80,50" stroke="currentColor" strokeWidth="5" fill="none" />
                        <circle cx="50" cy="50" r="8" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
                    </g>
                );
            case 'Chart':
                return (
                    <g ref={containerRef}>
                        <path d="M10,90 L90,90" stroke="currentColor" strokeWidth="3" fill="none" />
                        <path d="M15,90 L40,60 L60,75 L85,40" stroke="currentColor" strokeWidth="5" fill="none" />
                        <path d="M15,90 L40,60 L60,75 L85,40" stroke="currentColor" strokeWidth="10" fill="none" opacity="0.05" />
                        <path d="M15,90 L15,10" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3" />
                    </g>
                );
        }
    };

    return (
        <svg
            ref={svgRef}
            viewBox="0 0 100 100"
            className={`w-full h-full ${color} opacity-100 filter drop-shadow-[4px_6px_8px_rgba(0,0,0,0.15)] ${className}`}
            style={{
                strokeLinecap: 'round',
                strokeLinejoin: 'round'
            }}
        >
            {renderPaths()}
        </svg>
    );
};

export default PencilSketch;
