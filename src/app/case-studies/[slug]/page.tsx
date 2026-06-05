import { getProjectBySlug, getRelatedProjects } from '@/lib/data/project.queries';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { siteConfig } from '@/config/site';
import Link from 'next/link';
import { ExternalLink, ArrowLeft } from 'lucide-react';
import Container from '@/components/layout/Container';
import CaseStudyHero from '@/components/case-study/CaseStudyHero';
import CaseStudyGallery from '@/components/case-study/CaseStudyGallery';
import CaseStudyProcess from '@/components/case-study/CaseStudyProcess';
import CaseStudyMetrics from '@/components/case-study/CaseStudyMetrics';
import CaseStudyTechStack from '@/components/case-study/CaseStudyTechStack';
import CaseStudyTestimonial from '@/components/case-study/CaseStudyTestimonial';
import WorkCard from '@/components/works/WorkCard';
import ProjectStructuredData from '@/components/seo/ProjectStructuredData';
import CaseStudyStructuredData from '@/components/seo/CaseStudyStructuredData';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export const revalidate = 60; // ISR

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);
    if (!project) return { title: 'Project Not Found' };

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    return {
        title: project.seoTitle || `${project.title} | Portfolio`,
        description: project.seoDescription || project.description || project.shortSummary,
        keywords: project.tags?.join(', '),
        
        openGraph: {
            title: project.seoTitle || project.title,
            description: project.seoDescription || project.description || project.shortSummary,
            url: `/case-studies/${project.slug}`,
            siteName: siteConfig.name,
            images: [
                {
                    url: project.ogImage?.url || project.coverImage?.url || '/default-og.jpg',
                    width: 1200,
                    height: 630,
                    alt: project.title,
                },
                ...(project.galleryImages?.slice(0, 3).map((img: any) => ({
                    url: img.url,
                    width: 1200,
                    height: 630,
                    alt: img.alt || project.title,
                })) || []),
            ],
            locale: 'en_US',
            type: 'article',
            publishedTime: project.publishedAt ? new Date(project.publishedAt).toISOString() : undefined,
            modifiedTime: project.updatedAt ? new Date(project.updatedAt).toISOString() : undefined,
            tags: project.tags,
        },
        
        twitter: {
            card: 'summary_large_image',
            title: project.seoTitle || project.title,
            description: project.seoDescription || project.description || project.shortSummary,
            images: [project.ogImage?.url || project.coverImage?.url || '/default-og.jpg'],
            creator: siteConfig.seo.twitterHandle,
        },
        
        alternates: {
            canonical: project.canonicalUrl || `/case-studies/${project.slug}`,
        },
        
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

export default async function CaseStudyPage({ params }: PageProps) {
    const { slug } = await params;
    const project = await getProjectBySlug(slug);

    if (!project) {
        notFound();
    }

    const relatedProjects = await getRelatedProjects(project._id as string, typeof project.categoryId === 'string' ? project.categoryId : (project.categoryId as any)?._id);

    const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'http://localhost:3000';

    return (
        <>
            <ProjectStructuredData project={project} />
            {project.problemStatement && (
                <CaseStudyStructuredData
                    project={project}
                    challenge={project.problemStatement}
                    solution={project.solution?.map((s: any) => typeof s === 'string' ? s : s.value).join('. ')}
                    results={project.metrics}
                />
            )}
            <article className="pb-32 bg-white">
                {/* 1. Hero Section */}
                <CaseStudyHero project={project} />

            {/* 2. Overview & Problem */}
            <section className="py-24 lg:py-32 relative">
                <Container>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                        <div className="lg:col-span-7 space-y-12">
                            <div>
                                <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-6">Overview</h2>
                                <h3 className="text-3xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                    {project.shortSummary}
                                </h3>
                                <div className="prose prose-lg text-gray-600 leading-relaxed max-w-none">
                                    {project.description}
                                </div>
                            </div>

                            {project.problemStatement && (
                                <div className="bg-orange-50/50 p-10 rounded-3xl border border-orange-100">
                                    <h4 className="flex items-center text-xl font-bold text-orange-900 mb-4">
                                        <span className="w-8 h-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center mr-3 text-sm">!</span>
                                        The Challenge
                                    </h4>
                                    <p className="text-gray-700 text-lg leading-relaxed">{project.problemStatement}</p>
                                </div>
                            )}

                            {project.projectUrl && (
                                <div className="pt-4">
                                    <a
                                        href={project.projectUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center px-8 py-4 bg-gray-900 text-white font-bold rounded-full hover:bg-gray-800 transition-all hover:scale-105 shadow-lg shadow-gray-900/20"
                                    >
                                        Visit Live Site <ExternalLink size={20} className="ml-3" />
                                    </a>
                                </div>
                            )}
                        </div>

                        <div className="lg:col-span-4 lg:col-start-9 space-y-12">
                            <div className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                                <h4 className="font-bold text-gray-900 mb-6 text-xl">Technologies</h4>
                                <CaseStudyTechStack techStack={project.techStack} />
                            </div>

                            {project.objectives && (
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 text-xl border-b border-gray-100 pb-2">Objectives</h4>
                                    <p className="text-gray-600 leading-relaxed">{project.objectives}</p>
                                </div>
                            )}
                            {project.targetAudience && (
                                <div>
                                    <h4 className="font-bold text-gray-900 mb-4 text-xl border-b border-gray-100 pb-2">Platform & Audience</h4>
                                    <p className="text-gray-600 leading-relaxed">{project.targetAudience}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </Container>
            </section>

            {/* 3. Gallery (Full Width Impact) */}
            {project.galleryImages && project.galleryImages.length > 0 && (
                <section className="py-20 bg-gray-50">
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-16">
                            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Gallery</h2>
                            <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Visual Highlights</h3>
                        </div>
                        <CaseStudyGallery images={project.galleryImages} />
                    </Container>
                </section>
            )}

            {/* 4. Process */}
            {project.processSteps && project.processSteps.length > 0 && (
                <section className="py-24 lg:py-32 overflow-hidden">
                    <Container>
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Process</h2>
                            <h3 className="text-4xl md:text-5xl font-bold text-gray-900">How we made it happen</h3>
                        </div>
                        <CaseStudyProcess steps={project.processSteps} />
                    </Container>
                </section>
            )}

            {/* 5. Results Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-b from-white to-slate-50 relative">
                <Container className="relative">
                    <div className="max-w-5xl mx-auto">
                        {/* Header */}
                        <div className="mb-16 lg:mb-20">
                            <div className="inline-block mb-6">
                                <span className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-semibold border border-blue-100">
                                    <span className="w-2 h-2 bg-blue-600 rounded-full" />
                                    Results
                                </span>
                            </div>
                            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                                Measurable Outcomes
                            </h2>
                            <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
                                The solution delivered measurable improvements and satisfied users, proving the value of the design and engineering choices.
                            </p>
                        </div>

                        {/* Metrics Card */}
                        <div className="bg-white rounded-2xl border border-gray-200 p-10 lg:p-14 shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <CaseStudyMetrics metrics={project.metrics} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* 6. Testimonial Section */}
            <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 to-blue-800 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl opacity-10 transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-400 rounded-full blur-3xl opacity-10 transform -translate-x-1/2 translate-y-1/2" />

                <Container className="relative z-10">
                    <div className="max-w-3xl mx-auto text-center">
                        {/* Quote Icon */}
                        <div className="mb-8 flex justify-center">
                            <svg className="w-16 h-16 text-blue-200 opacity-80" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5S0 3.75 0 5v8c0 0 0 7 3 7z"></path>
                                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-4.716-5-7-5s-7 3.75-7 5v8c0 0 0 7 3 7z"></path>
                            </svg>
                        </div>

                        {/* Testimonial Content */}
                        <div className="text-white">
                            <CaseStudyTestimonial testimonial={project.testimonial} />
                        </div>
                    </div>
                </Container>
            </section>

            {/* 7. Solution List */}
            {project.solution && project.solution.length > 0 && (
                <section className="py-24">
                    <Container>
                        <div className="bg-emerald-50/50 rounded-3xl p-12 border border-emerald-100">
                            <div className="text-center max-w-3xl mx-auto mb-12">
                                <h3 className="text-3xl font-bold text-emerald-900">Key Solutions</h3>
                                <p className="text-emerald-700 mt-2">Specific features and implementations that solved the problem.</p>
                            </div>

                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                                {project.solution.map((item: any, idx: number) => (
                                    <li key={idx} className="flex items-start bg-white p-5 rounded-xl shadow-sm border border-emerald-100/50">
                                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center text-xs font-bold mr-4 mt-0.5">✓</span>
                                        <span className="text-gray-700 font-medium">{typeof item === 'string' ? item : item.value || item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Container>
                </section>
            )}

            {/* 8. Next Projects */}
            <section className="py-24 border-t border-gray-100">
                <Container>
                    <div className="flex justify-between items-end mb-12">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900">Selected Work</h2>
                            <p className="text-gray-500 mt-2">More projects you might find interesting</p>
                        </div>

                        <Link href="/case-studies" className="group flex items-center text-gray-900 font-bold hover:text-blue-600 transition-colors">
                            View All <ArrowLeft size={18} className="ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {relatedProjects.map((proj: any) => (
                            <WorkCard key={proj._id as string} project={proj} />
                        ))}
                    </div>
                </Container>
            </section>
        </article>
        </>
    );
}
