import Image from 'next/image'
import Link from 'next/link'
import { Database, Server, ShieldCheck, ArrowUpRight } from 'lucide-react'

interface ServiceWhatIsProps {
    heading: string
    ctaHeading: string
    ctaImage: string
    features: Array<{ title: string; description: string }>
}

const cardIcons = [Server, ShieldCheck, Database, ArrowUpRight]

export function ServiceWhatIs({ heading, ctaHeading, ctaImage, features }: ServiceWhatIsProps) {
    return (
        <section className="relative bg-[#050505] text-white py-20 md:py-28 overflow-hidden">

            {/* Cinematic vertical light streaks */}
            <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
                <div className="absolute left-[30%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.04] to-transparent" />
                <div className="absolute left-[60%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.03] to-transparent" />
                <div className="absolute right-[20%] top-0 h-full w-px bg-gradient-to-b from-transparent via-white/[0.025] to-transparent" />
            </div>

            <div className="relative z-10 max-w-[1240px] mx-auto px-6 lg:px-10">

                {/* Section Heading */}
                <h2 className="text-[32px] md:text-[40px] font-bold text-white tracking-tight leading-[1.15] mb-14">
                    {heading}
                </h2>

                {/* Main layout */}
                <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-8 lg:gap-10 items-stretch">

                    {/* LEFT: open 2x2 feature grid, no cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-12">
                        {features.slice(0, 4).map((feature, i) => {
                            const Icon = cardIcons[i % cardIcons.length]
                            return (
                                <div key={i} className="flex flex-col gap-6">
                                    {/* Top row: icon + number */}
                                    <div className="flex items-start justify-between">
                                        <div className="w-10 h-10 rounded-lg border border-white/10 bg-white/[0.04] flex items-center justify-center shrink-0">
                                            <Icon className="w-[18px] h-[18px] text-white/70" strokeWidth={1.5} />
                                        </div>
                                        <span className="text-[#3a3a3a] text-xs font-medium tabular-nums mt-1">
                                            {String(i + 1).padStart(2, '0')}
                                        </span>
                                    </div>

                                    {/* Text */}
                                    <div className="flex flex-col gap-2.5">
                                        <h3 className="text-white font-semibold text-[17px] tracking-tight leading-snug">
                                            {feature.title}
                                        </h3>
                                        <p className="text-[#666] text-sm leading-[1.7] max-w-[280px]">
                                            {feature.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* RIGHT: Image card */}
                    <div className="bg-[#f9f9f9] rounded-[24px] overflow-hidden flex flex-col justify-between min-h-[400px]">

                        {/* Card heading */}
                        <div className="px-7 pt-7">
                            <h3 className="text-slate-900 text-[20px] font-bold leading-[1.35]">
                                {ctaHeading}
                            </h3>
                        </div>

                        {/* Image */}
                        <div className="relative w-auto aspect-[3/2] mx-7 my-4 rounded-xl overflow-hidden bg-slate-100">
                            {ctaImage ? (
                                <Image
                                    src={ctaImage}
                                    alt={ctaHeading}
                                    fill
                                    className="object-cover object-center"
                                    sizes="(max-width: 768px) 100vw, 380px"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-slate-100 to-slate-200">
                                    <span className="text-slate-400 text-xs font-medium">Image coming soon</span>
                                </div>
                            )}
                        </div>

                        {/* CTA Button */}
                        <div className="px-7 pb-7">
                            <Link
                                href="/analytics-audit"
                                className="flex items-center justify-center gap-2 w-full bg-[#5B4CF6] hover:bg-[#4c3de0] text-white font-semibold py-3.5 rounded-xl transition-colors duration-200 text-sm"
                            >
                                Book Free Audit
                                <ArrowUpRight className="w-4 h-4" />
                            </Link>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
