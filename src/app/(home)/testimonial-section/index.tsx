import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

// Using high-quality unsplash images as placeholders for the testimonials
const testimonials = [
    {
        quote: "We were struggling with inaccurate data and broken tracking for months. MarTechRise fixed our GA4 and event tracking setup with precision. Now our marketing decisions are based on reliable data.",
        name: "Robert Wilson",
        designation: "Marketing Manager, E-commerce Brand",
        src: "https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=3538&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=256&auto=format&fit=crop",
    },
    {
        quote: "Their expertise in Adobe Analytics and server-side tracking is exceptional. They not only fixed our tagging issues but also improved our overall data architecture.",
        name: "David Lee",
        designation: "Digital Analytics Lead, Enterprise Client",
        src: "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=3540&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=256&auto=format&fit=crop",
    },
    {
        quote: "After implementing Meta CAPI with MarTechRise, we saw a noticeable improvement in attribution and campaign performance. Their approach is highly professional and results-driven.",
        name: "Daniel Brooks",
        designation: "Performance Marketing Head, D2C Brand",
        src: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=3540&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=256&auto=format&fit=crop",
    },
    {
        quote: "What stood out was their attention to detail and clear documentation. They ensured everything was properly validated and aligned with our business goals.",
        name: "Sarah Jenkins",
        designation: "Product Owner, SaaS Company",
        src: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&w=3540&auto=format&fit=crop",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=256&auto=format&fit=crop",
    },
];

export default function TestimonialSection() {
    return (
        <section className="py-24 bg-gray-50 dark:bg-zinc-950 overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                        Testimonial <span className="text-primary text-blue-600">Cards</span>
                    </h2>
                    <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                        Hear from our satisfied clients about their experiences working with our team.
                    </p>
                </div>

                <AnimatedTestimonials testimonials={testimonials} autoplay={true} />
            </div>
        </section>
    );
}
