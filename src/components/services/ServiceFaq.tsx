interface ServiceFaqProps {
  heading: string
  faqs: Array<{ question: string; answer: string }>
}

export function ServiceFaq({ heading, faqs }: ServiceFaqProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {heading}
        </h2>
        <div className="mx-auto max-w-3xl space-y-4">
          {faqs.map((faq, index) => (
            <details
              key={index}
              className="group rounded-lg border border-gray-200 bg-white transition-colors hover:border-gray-300"
            >
              <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
                <span className="text-base leading-relaxed md:text-lg">
                  {faq.question}
                </span>
                <span className="ml-4 flex-shrink-0 text-gray-400 transition-transform group-open:rotate-180">
                  <svg
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </span>
              </summary>
              <div className="border-t border-gray-100 px-6 pb-6 pt-4">
                <p className="leading-relaxed text-gray-600">{faq.answer}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
