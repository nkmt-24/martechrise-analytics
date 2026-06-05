interface FAQItem {
    question: string;
    answer: string;
}

interface SchemaProps {
    faqs?: FAQItem[];
}

// Global utility component for rendering JSON-LD Search SEO 
export default function Schema({ faqs }: SchemaProps) {

    // Auto-generate FAQ structured data if FAQ array exists
    if (faqs && faqs.length > 0) {
        const faqSchema = {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": faq.answer
                }
            }))
        };

        return (
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
        );
    }

    // Default fallback (though layout.tsx handles Organization explicitly)    
}
