interface ServicePlatformsProps {
  heading: string
  platforms: string[]
}

export function ServicePlatforms({ heading, platforms }: ServicePlatformsProps) {
  return (
    <section className="bg-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight text-white md:text-4xl">
          {heading}
        </h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {platforms.map((platform, index) => (
            <span
              key={index}
              className="inline-flex items-center rounded-full border border-white/20 bg-white/5 px-6 py-2.5 text-sm font-medium text-white backdrop-blur-sm"
            >
              {platform}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
