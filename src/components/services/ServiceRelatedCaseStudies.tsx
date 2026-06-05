import { getProjectsByService } from '@/services/project.service'
import { FeaturedCaseStudyCardClient } from '@/components/client/FeaturedCaseStudyCard.client'

interface ServiceRelatedCaseStudiesProps {
  serviceSlug: string
  serviceTitle: string
}

/**
 * Server component — fetches case studies tagged with this service slug.
 * Returns null (renders nothing) when no matching case studies exist.
 * Reuses FeaturedCaseStudyCardClient for visual consistency with the homepage.
 */
export default async function ServiceRelatedCaseStudies({
  serviceSlug,
  serviceTitle,
}: ServiceRelatedCaseStudiesProps) {
  const projects = await getProjectsByService(serviceSlug, 3)

  if (!projects || projects.length === 0) {
    return null
  }

  return (
    <section
      className="bg-gray-50 text-gray-900 pb-16 mb-10 lg:pb-24 pt-10 overflow-hidden"
      aria-label={`Case studies for ${serviceTitle}`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Pill Badge */}
        <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 mb-6 shadow-sm">
          Case Studies
        </div>

        {/* Section heading — contextual to the service */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 lg:mb-16 text-left text-gray-900">
          Real results from our {serviceTitle} engagements
        </h2>

        {/* Case Study Cards */}
        <div className="flex flex-col gap-16 lg:gap-24">
          {projects.map((project: any, idx: number) => (
            <FeaturedCaseStudyCardClient
              key={project._id || idx}
              project={project}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
