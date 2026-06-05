import { TestimonialCardClient } from '@/components/client/TestimonialCard.client'

interface Testimonial {
    name: string
    role: string
    company: string
    content: string
    avatar?: string
}

interface TestimonialsColumnProps {
    testimonials: Testimonial[]
    duration?: number
    className?: string
}

export function TestimonialsColumnServer({
    testimonials,
    duration = 30,
    className = '',
}: TestimonialsColumnProps) {
    return (
        <div className={`flex flex-col gap-6 ${className}`}>
            <TestimonialCardClient testimonials={testimonials} duration={duration} />
        </div>
    )
}
