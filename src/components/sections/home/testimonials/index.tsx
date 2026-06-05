import TestimonialsContent, { TestimonialData } from "./TestimonialsContent";

const testimonials: TestimonialData[] = [
  {
    quote: "We were struggling with inaccurate data and broken tracking for months. MarTechRise fixed our GA4 and event tracking setup with precision. Now our marketing decisions are based on reliable data.",
    role: "Marketing Manager, E-commerce Brand"
  },
  {
    quote: "Their expertise in Adobe Analytics and server-side tracking is exceptional. They not only fixed our tagging issues but also improved our overall data architecture.",
    role: "Digital Analytics Lead, Enterprise Client"
  },
  {
    quote: "After implementing Meta CAPI with MarTechRise, we saw a noticeable improvement in attribution and campaign performance. Their approach is highly professional and results-driven.",
    role: "Performance Marketing Head, D2C Brand"
  },
  {
    quote: "What stood out was their attention to detail and clear documentation. They ensured everything was properly validated and aligned with our business goals.",
    role: "Product Owner, SaaS Company"
  }
];

export default function TestimonialsSection() {
  return <TestimonialsContent testimonials={testimonials} />;
}
