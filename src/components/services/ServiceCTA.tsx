import Link from 'next/link'
import { cn } from '@/lib/cn'

interface ServiceCTAProps {
  heading: string
  subheading: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
}

export function ServiceCTA({
  heading,
  subheading,
  primaryCta,
  secondaryCta,
}: ServiceCTAProps) {
  return (
    <section className="bg-gray-950 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mb-10 text-lg leading-relaxed text-gray-300 md:text-xl">
            {subheading}
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href={primaryCta.href}
              className={cn(
                'inline-flex items-center justify-center',
                'rounded-lg bg-white px-8 py-4 text-base font-semibold text-gray-900',
                'transition-all hover:bg-gray-100 hover:shadow-lg',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              )}
            >
              {primaryCta.label}
            </Link>
            <Link
              href={secondaryCta.href}
              className={cn(
                'inline-flex items-center justify-center',
                'rounded-lg border-2 border-white bg-transparent px-8 py-4 text-base font-semibold text-white',
                'transition-all hover:bg-white/10',
                'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white'
              )}
            >
              {secondaryCta.label}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
