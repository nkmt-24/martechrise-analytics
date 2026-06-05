interface ServiceDeliverablesProps {
  heading: string
  items: Array<{ title: string; description: string }>
}

export function ServiceDeliverables({
  heading,
  items,
}: ServiceDeliverablesProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((item, index) => (
            <div
              key={index}
              className="group rounded-lg border border-gray-200 bg-white p-6 transition-all hover:border-gray-300 hover:shadow-md"
            >
              <h3 className="mb-3 text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
