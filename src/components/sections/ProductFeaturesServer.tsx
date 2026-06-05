import { Database, Server, BarChart3, ShieldCheck } from "lucide-react"
import { FloatingCampaignCardsClient } from "@/components/client/FloatingCampaignCards.client"
import { FeaturesMarqueeClient } from "@/components/client/FeaturesMarquee.client"
import { ProductBadgeClient } from "@/components/client/ProductBadge.client"
import { ProductContentClient } from "@/components/client/ProductContent.client"
import { ProductDashboardClient } from "@/components/client/ProductDashboard.client"
import { ProductFeaturesGridClient } from "@/components/client/ProductFeaturesGrid.client"
import { OtherFeaturesButtonClient } from "@/components/client/OtherFeaturesButton.client"
import Image from "next/image"

const features = [
    {
        icon: <Server className="w-6 h-6 text-white" />,
        title: "Server-Side Tracking",
        description: "Bypass ad blockers and iOS restrictions with secure server-to-server data pipelines."
    },
    {
        icon: <BarChart3 className="w-6 h-6 text-white" />,
        title: "GA4 & Adobe Analytics",
        description: "Enterprise-grade analytics implementation, custom events, and perfectly clean attribution."
    },
    {
        icon: <Database className="w-6 h-6 text-white" />,
        title: "Meta CAPI & Conversions",
        description: "Recover up to 30% of lost conversion data and optimize your ad spend efficiently."
    },
    {
        icon: <ShieldCheck className="w-6 h-6 text-white" />,
        title: "Data QA & Validation",
        description: "Rigorous testing protocols to ensure 100% accurate tracking and compliance."
    }
]

export const ProductFeaturesServer = () => {
    return (
        <section className="bg-[#111111] text-white py-[50px] px-10 overflow-hidden">
            <div className="max-w-[1240px] mx-auto flex flex-col gap-8 items-center">

                {/* Badge with Gradient Border */}
                <ProductBadgeClient />

                {/* Heading + Subtitle + CTA */}
                <ProductContentClient />

                {/* Dashboard Mockup with Floating Cards */}
                <ProductDashboardClient />

            </div>

            {/* FEATURE GRID */}
            <ProductFeaturesGridClient features={features} />

            {/* "Other Interesting Features" button with line */}
            <OtherFeaturesButtonClient />

            {/* MARQUEE */}
            <FeaturesMarqueeClient />

        </section>
    )
}
