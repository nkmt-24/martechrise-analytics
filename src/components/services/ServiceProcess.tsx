interface ServiceProcessProps {
  heading: string
  steps: Array<{ number: string; title: string; description: string }>
}

export function ServiceProcess({ heading, steps }: ServiceProcessProps) {
  return (
    <section className="bg-white py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-16 text-center text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          {heading}
        </h2>

        {/* Desktop: Horizontal with connecting line */}
        <div className="hidden md:block">
          <div className="relative">
            {/* Connecting line */}
            <div className="absolute left-0 right-0 top-10 h-0.5 bg-gray-200" />

            <div className="grid grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  {/* Number badge */}
                  <div className="relative z-10 mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-gray-900 text-2xl font-bold text-white shadow-lg">
                    {step.number}
                  </div>
                  {/* Title and description */}
                  <h3 className="mb-3 text-center text-lg font-bold text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-center text-sm leading-relaxed text-gray-600">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: Vertical stack */}
        <div className="space-y-8 md:hidden">
          {steps.map((step, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-900 text-xl font-bold text-white">
                  {step.number}
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-lg font-bold text-gray-900">
                  {step.title}
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
