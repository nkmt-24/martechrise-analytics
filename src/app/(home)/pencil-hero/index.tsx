"use client";

import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { pencilHeroContent } from './content';
import PencilSketch from './PencilSketch';
import { ArrowRight, Sparkles } from 'lucide-react';

const SpeedLines = () => {
    const [lines, setLines] = React.useState<any[]>([]);

    React.useEffect(() => {
        const generatedLines = Array.from({ length: 30 }).map(() => ({
            left: Math.random() * 100,
            rotation: Math.random() * 40 - 20,
            duration: 0.8 + Math.random() * 1.5,
            delay: Math.random() * 2
        }));
        setLines(generatedLines);
    }, []);

    if (lines.length === 0) return null;

    return (
        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-20">
            {lines.map((line, i) => (
                <div
                    key={i}
                    className="absolute bg-slate-900"
                    style={{
                        width: '2px',
                        height: '300px',
                        left: `${line.left}%`,
                        top: '0',
                        transform: `rotate(${line.rotation}deg)`,
                        animation: `drawLines ${line.duration}s linear infinite`,
                        animationDelay: `${line.delay}s`
                    }}
                />
            ))}
            <style jsx>{`
                @keyframes drawLines {
                    0% { transform: translateY(-300px) skewY(10deg); opacity: 0; }
                    50% { opacity: 1; }
                    100% { transform: translateY(120vh) skewY(-10deg); opacity: 0; }
                }
            `}</style>
        </div>
    );
};

const PencilHero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const [mousePos, setMousePos] = React.useState({ x: 0, y: 0 });

    useGSAP(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Anime "Blast" entrance
        tl.from(".anime-blast", {
            scale: 2,
            opacity: 0,
            duration: 1,
            stagger: 0.1,
            clearProps: "all"
        });

        // Sketch-in title
        tl.from(".sketch-title", {
            x: -50,
            opacity: 0,
            skewX: -20,
            duration: 1,
            stagger: 0.1
        }, "-=0.5");

        // Cards entry
        tl.from(".pencil-card", {
            y: 50,
            scale: 0.9,
            opacity: 0,
            stagger: 0.2,
            duration: 1
        }, "-=0.8");

        // Mouse Parallax tracking
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5);
            const y = (e.clientY / window.innerHeight - 0.5);
            setMousePos({ x, y });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);

    }, { scope: containerRef });

    const handleHover = (target: any) => {
        const paths = target.querySelectorAll('path');
        gsap.fromTo(paths,
            { strokeDashoffset: 1000 },
            { strokeDashoffset: 0, duration: 1, stagger: 0.05, ease: "power2.out" }
        );
    };

    return (
        <section ref={containerRef} className="relative pt-32  overflow-hidden bg-[#fafafa] min-h-[300px]">
            {/* Paper Texture Overlay */}
            <div className="absolute inset-0 z-0 opacity-[0.05] pointer-events-none"
                style={{ backgroundImage: 'url("https://www.transparenttextures.com/patterns/paper.png")' }}
            />

            {/* Blueprint Grid */}
            <div className="absolute inset-0 z-0 opacity-[0.03] pointer-events-none"
                style={{
                    backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
                    backgroundSize: '100px 100px'
                }}
            />

            <SpeedLines />

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex flex-col items-center text-center mb-16">
                    {/* Badge */}
                    <div className="anime-blast inline-flex items-center gap-2 px-6 py-2 rounded-xl bg-white border-2 border-slate-900 shadow-[4px_4px_0px_0px_rgba(15,23,42,1)] mb-8">
                        <Sparkles size={16} className="text-indigo-600" />
                        <span className="text-xs font-black uppercase tracking-[0.3em] text-slate-900">{pencilHeroContent.badge}</span>
                    </div>

                    {/* Headline with hand-drawn feel */}
                    <h1 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter leading-[0.85] mb-8 relative">
                        <span className="sketch-title block italic text-slate-400/50 absolute -top-12 left-0 text-4xl hidden md:block opacity-30 select-none">
                            {pencilHeroContent.title.sketch}...
                        </span>
                        <div className="sketch-title block">{pencilHeroContent.title.main}</div>
                        <div className="sketch-title block text-indigo-600 underline decoration-indigo-200 decoration-8 underline-offset-8">
                            {pencilHeroContent.title.highlight}
                        </div>
                    </h1>

                    <p className="anime-blast text-xl md:text-2xl text-slate-500 font-medium max-w-2xl mb-16 leading-relaxed">
                        {pencilHeroContent.subtitle}
                    </p>

                    <Link href={pencilHeroContent.cta.href} className="anime-blast">
                        <Button className="h-20 px-12 rounded-2xl bg-slate-900 text-white border-4 border-slate-900 shadow-[8px_8px_0px_0px_rgba(79,70,229,0.3)] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all text-xl font-black uppercase tracking-widest group">
                            <span className="flex items-center gap-4">
                                {pencilHeroContent.cta.text}
                                <ArrowRight size={24} className="group-hover:translate-x-2 transition-transform" />
                            </span>
                        </Button>
                    </Link>
                </div>

                {/* Service Sketches Grid */}
                {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
                    {pencilHeroContent.sketches.map((sketch, i) => (
                        <div
                            key={sketch.id}
                            onMouseEnter={(e) => handleHover(e.currentTarget)}
                            className="pencil-card group p-10 bg-white border-2 border-slate-900 rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,0.05)] hover:shadow-[12px_12px_0px_0px_rgba(79,70,229,0.1)] transition-all flex flex-col items-center"
                        >
                            <div className="w-48 h-48 mb-6 group-hover:scale-110 transition-transform duration-500">
                                <PencilSketch type={sketch.icon as any} mousePos={mousePos} color={sketch.color} />
                            </div>
                            <h3 className="text-2xl font-black text-slate-900 mb-4 uppercase tracking-tighter">{sketch.title}</h3>
                            <p className="text-slate-500 text-center font-medium leading-relaxed">
                                {sketch.description}
                            </p>
                        </div>
                    ))}
                </div> */}
            </div>

            {/* Background Hand-Drawn Elements (Decorative) */}
            <div className="absolute top-1/4 right-0 w-64 h-64 rotate-12 opacity-30 hidden xl:block pointer-events-none">
                <PencilSketch type="Gears" mousePos={mousePos} color="text-amber-500" />
            </div>
            <div className="absolute bottom-1/4 left-0 w-80 h-80 -rotate-12 opacity-30 hidden xl:block pointer-events-none">
                <PencilSketch type="Analytics" mousePos={mousePos} color="text-indigo-500" />
            </div>
        </section>
    );
};

export default PencilHero;
