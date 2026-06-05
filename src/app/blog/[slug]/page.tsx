import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { format } from 'date-fns';
import { Clock, Calendar, ArrowLeft } from 'lucide-react';
import { siteConfig } from '@/config/site';
import { getBlogBySlug, getRelatedBlogs, getAllBlogSlugs } from '@/services/blogService';
import { renderBlocksToHtml } from '@/lib/blog/blocksToHtml';
import { generateTableOfContents } from '@/lib/blog/tableOfContents';
import { generateSEO } from '@/lib/seo';
import AdvancedStructuredData from '@/components/seo/AdvancedStructuredData';
import SpeakableSchema from '@/components/seo/SpeakableSchema';
import TableOfContents from '@/components/blog/TableOfContents';
import BlogContent from '@/components/blog/BlogContent';
import AISummary from '@/components/blog/AISummary';
import FeaturedSnippet from '@/components/blog/FeaturedSnippet';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ShareButtons from '@/components/blog/ShareButtons';
import NewsletterSignup from '@/components/blog/NewsletterSignup';

export const revalidate = 3600;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = await getAllBlogSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) return { title: 'Blog Not Found' };

  return generateSEO({
    title: blog.seo?.metaTitle || blog.title,
    description: blog.seo?.metaDescription || blog.excerpt?.replace(/<[^>]*>/g, ''),
    image: blog.seo?.ogImage || blog.featuredImage?.url,
    url: `/blog/${blog.slug}`,
    keywords: [blog.seo?.focusKeyword, ...(blog.seo?.secondaryKeywords || []), ...blog.tags].filter(Boolean) as string[],
    type: 'article',
    publishedTime: blog.workflow?.publishedAt?.toString(),
    modifiedTime: blog.workflow?.lastModifiedAt?.toString(),
  });
}

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog || blog.workflow?.status !== 'published') {
    notFound();
  }

  const [relatedBlogs, toc] = await Promise.all([
    getRelatedBlogs(blog._id.toString(), blog.category?.slug, 3),
    generateTableOfContents(blog.contentBlocks || []),
  ]);

  const contentHtml = renderBlocksToHtml(blog.contentBlocks || []);

  // Extract first FAQ for Featured Snippet optimization
  const firstFaqBlock = blog.contentBlocks?.find((b) => b.type === 'faq' && b.question && b.answer);

  return (
    <>
      <AdvancedStructuredData
        blog={blog}
      />
      <SpeakableSchema
        blog={{
          title: blog.title,
          slug: blog.slug,
          excerpt: blog.excerpt?.replace(/<[^>]*>/g, '') || ''
        }}
      />

      <main className=" pt-16">
        {/* Hero Section */}
        <div className="bg-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-10 lg:pt-16">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-gray-900 mb-4 transition-colors group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Link>

            <div>
              {/* Category Badge */}
              {/* <Link
                href={`/blog?category=${blog.category?.slug}`}
                className="inline-block text-xs font-bold uppercase tracking-wider text-blue-600 hover:text-blue-700 mb-5 transition-colors border-b-2 border-blue-600 pb-1"
              >
                {blog.category?.name}
              </Link> */}

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-8 blog-title">
                {blog.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-gray-900 flex items-center justify-center text-white font-bold">
                    {blog.author?.charAt(0) || 'M'}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">BY {blog.author?.toUpperCase()}</p>
                    <p className="text-xs text-gray-500 uppercase tracking-wide">Author</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Calendar size={16} />
                  <span className="font-medium">
                    {blog.workflow?.publishedAt
                      ? format(new Date(blog.workflow.publishedAt), 'MMM dd, yyyy')
                      : 'Unknown'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock size={16} />
                  <span className="font-medium">{blog.seoMetrics?.readingTime ?? 1} min</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Image */}
        {blog.featuredImage?.url && (
          <div className="bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-8 pt-8">
              <div className="relative aspect-[21/9] w-full overflow-hidden ">
                <Image
                  src={blog.featuredImage.url}
                  alt={blog.featuredImage.alt || blog.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        )}

        {/* Main Content */}
        <div className="bg-white border-t-2 border-gray-200">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 ">
            <div className="flex flex-col lg:flex-row gap-12">
              {/* TOC Sidebar - Left */}
              {toc.length > 0 && (
                <aside className="hidden lg:block w-80 flex-shrink-0">
                  <div className="sticky top-28">
                    <div className="bg-gray-50 border-l-4 border-gray-900 p-6">
                      <h3 className="text-xs font-bold text-gray-900 mb-5 uppercase tracking-widest">
                        Table of Contents
                      </h3>
                      <TableOfContents items={toc} />
                    </div>
                  </div>
                </aside>
              )}

              {/* Article Content */}
              <article className="flex-1 min-w-0">
                <div className="bg-white">
                  {/* Excerpt */}
                  {blog.excerpt && (
                    <div className="mb-12 pb-12 border-b-2 border-gray-200">
                      <p className="text-2xl text-gray-700 leading-relaxed font-normal blog-excerpt">
                        {blog.excerpt.replace(/<[^>]*>/g, '')}
                      </p>
                    </div>
                  )}

                  {/* AI Summary */}
                  <div className="blog-summary mb-10">
                    <AISummary
                      blog={{
                        title: blog.title,
                        excerpt: blog.excerpt?.replace(/<[^>]*>/g, '') || '',
                        keyTakeaways: blog.keyTakeaways || []
                      }}
                    />
                  </div>

                  {/* Featured Snippet (AEO) */}
                  {firstFaqBlock && (
                    <div className="mb-10">
                      <FeaturedSnippet
                        question={firstFaqBlock.question || ''}
                        answer={firstFaqBlock.answer || ''}
                      />
                    </div>
                  )}

                  {/* Main Content */}
                  <BlogContent html={contentHtml} />

                  {/* Tags */}
                  {blog.tags?.length > 0 && (
                    <div className="mt-16 pt-10 border-t-2 border-gray-200">
                      <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">Tagged</h4>
                      <div className="flex flex-wrap gap-3">
                        {blog.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-4 py-2 bg-gray-100 text-gray-900 text-sm font-semibold border border-gray-300 hover:bg-gray-900 hover:text-white transition-colors cursor-pointer"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Share Buttons */}
                  <div className="mt-12 pt-10 border-t-2 border-gray-200">
                    <h4 className="text-xs font-bold text-gray-900 mb-4 uppercase tracking-widest">Share Article</h4>
                    <ShareButtons url={`/blog/${blog.slug}`} title={blog.title} />
                  </div>
                </div>

                {/* Related Posts */}
                {relatedBlogs.length > 0 && (
                  <div className="mt-16">
                    <RelatedPosts blogs={relatedBlogs} />
                  </div>
                )}

                {/* Newsletter CTA */}
                <div className="mt-16">
                  <NewsletterSignup
                    variant="hero"
                    source={`blog-post-${blog.slug}`}
                  />
                </div>
              </article>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
