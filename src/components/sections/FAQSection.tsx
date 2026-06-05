'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import Container from '../layout/Container';

const FAQS = [
  {
    question: "How long does a typical GA4 implementation take?",
    answer: "A standard GA4 implementation typically takes 2-4 weeks. Complex enterprise setups with custom data pipelines, server-side tracking, and multi-domain configurations can take 6-8 weeks depending on the business requirements."
  },
  {
    question: "Do you provide server-side tracking?",
    answer: "Yes, we specialize in server-side Google Tag Manager (sGTM) setups. This helps bypass ad blockers, improves page speed, and ensures more accurate data collection for platforms like Facebook CAPI and Google Ads."
  },
  {
    question: "What makes your tracking solutions different?",
    answer: "We don't just install tags; we build robust data architectures. We ensure data hygiene, perform rigorous QA, build custom dashboards, and align tracking directly with your overarching business KPIs."
  },
  {
    question: "Do you audit existing Google Analytics setups?",
    answer: "Absolutely. We conduct comprehensive audits to identify data discrepancies, fix broken events, optimize the data layer, and ensure compliance with privacy regulations like GDPR and CCPA."
  },
  {
    question: "What happens after the implementation is complete?",
    answer: "We offer ongoing support and retainer options to monitor data quality, add new tracking requirements as your website evolves, and provide actionable reporting and insights to your marketing teams."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-200">
      <Container>
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about our analytics and tracking services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {FAQS.map((faq, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-sm transition-all hover:shadow-md"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</span>
                <ChevronDown 
                  className={`w-5 h-5 text-gray-500 shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="p-6 pt-0 text-gray-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* SEO FAQ Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQS.map(faq => ({
                "@type": "Question",
                "name": faq.question,
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": faq.answer
                }
              }))
            })
          }}
        />
      </Container>
    </section>
  );
}
