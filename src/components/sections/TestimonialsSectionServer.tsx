import { TestimonialsHeaderClient } from "@/components/client/TestimonialsHeader.client"
import { TestimonialsColumnServer } from "@/components/server/TestimonialsColumn.server"
import { firstColumn, secondColumn, thirdColumn } from "@/config/testimonials"

export const TestimonialsSectionServer = () => {
    return (
        <section className="relative w-full pb-24 pt-16 overflow-hidden border-t border-white/5 bg-[#050505] font-['Open_Sauce_One',_'Outfit',_sans-serif]">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-900/10 rounded-[100%] blur-[120px] pointer-events-none" />

            {/* Noise Texture */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 200 200\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'noiseFilter\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23noiseFilter)\'/%3E%3C/svg%3E")' }} />

            <div className="container relative z-10 mx-auto px-6">
                {/* Animated Header */}
                <TestimonialsHeaderClient />

                {/* Marquee Grid */}
                <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_20%,black_80%,transparent)] max-h-[600px] overflow-hidden">
                    <TestimonialsColumnServer
                        testimonials={firstColumn}
                        duration={25}
                        className="w-full max-w-[350px]"
                    />
                    <TestimonialsColumnServer
                        testimonials={secondColumn}
                        className="hidden md:block w-full max-w-[350px] pt-12"
                        duration={35}
                    />
                    <TestimonialsColumnServer
                        testimonials={thirdColumn}
                        className="hidden lg:block w-full max-w-[350px]"
                        duration={30}
                    />
                </div>
            </div>
        </section>
    )
}
