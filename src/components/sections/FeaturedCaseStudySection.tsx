import { getFeaturedProjects } from '@/services/project.service'
import { FeaturedCaseStudyCardClient } from '@/components/client/FeaturedCaseStudyCard.client'

export default async function FeaturedCaseStudySection() {
    const featuredProjects = await getFeaturedProjects()

    // Get up to two featured projects
    const featured = featuredProjects.slice(0, 2)

    if (!featured || featured.length === 0) {
        return (
            <section className="bg-black text-white py-20">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-gray-400">Featured case studies coming soon.</p>
                </div>
            </section>
        )
    }

    return (
        <section className="bg-gray-50 text-gray-900 pb-16 lg:pb-24 pt-10 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
                {/* Pill Badge */}
                <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium text-slate-500 mb-6 shadow-sm">
                    Case Studies
                </div>

                {/* Heading for Featured Section */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-10 lg:mb-16 text-left text-gray-900">
                    Trusted partner for leading B2B tech teams
                </h2>

                {/* Featured Case Study Cards */}
                <div className="flex flex-col gap-16 lg:gap-24">
                    {featured.map((project: any, idx: number) => (
                        <FeaturedCaseStudyCardClient key={project._id || idx} project={project} />
                    ))}
                </div>
            </div>
        </section>
    )
}
