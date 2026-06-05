import { Check } from "lucide-react"
import Image from "next/image"
import { bottomTags } from "@/config/insights"
import { InsightsTabsClient } from "@/components/client/InsightsTabs.client"

export const IndustryInsightsServer = () => {
    return (
        <section className="bg-[#F4F4F4] py-[120px] font-['Open_Sauce_One',_'Outfit',_sans-serif] overflow-hidden">
            <div className="max-w-[1200px] mx-auto px-6 relative">

                {/* --- Header Section --- */}
                <div className="flex flex-col items-center text-center mb-16 relative z-10">
                    {/* Pill Badge */}
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 mb-6 shadow-sm">
                        Enterprise Solutions
                    </div>

                    {/* Main Heading */}
                    <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-[700px]">
                        How MarTechRise Helps Enterprise Teams Eliminate Data Loss
                    </h2>

                </div>

                {/* Decorative SVG — points toward tabs below */}
                <div className="absolute left-0 top-[155px] hidden xl:block pointer-events-none select-none z-20">
                    <Image
                        src="https://framerusercontent.com/images/RM7SroEIrEIxZGjpGsUOazxF4.svg"
                        alt=""
                        width={130}
                        height={90}
                        style={{ width: "auto", height: "auto" }}
                        unoptimized
                    />
                </div>

                {/* --- Tabs Container --- */}
                <InsightsTabsClient />

                {/* --- Bottom Feature Tags --- */}
                <div className="mt-16 flex flex-wrap justify-center gap-8 md:gap-12">
                    {bottomTags.map((tag, index) => (
                        <div key={index} className="flex items-center gap-3 group">
                            <div className="w-6 h-6 rounded-full bg-slate-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300">
                                <Check className="w-3.5 h-3.5 text-white" strokeWidth={3} />
                            </div>
                            <span className="text-slate-500 font-medium text-sm md:text-base group-hover:text-slate-900 transition-colors duration-300">
                                {tag}
                            </span>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    )
}
