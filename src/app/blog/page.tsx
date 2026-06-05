import { Suspense } from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import { getBlogs } from '@/services/blogService';
import { getAllBlogCategories } from '@/services/blogCategoryService';
import BlogCard from '@/components/blog/BlogCard';
import { generateSEO } from '@/lib/seo';
import NewsletterSignup from '@/components/blog/NewsletterSignup';

export const revalidate = 3600;

interface PageProps {
  searchParams: Promise<{
    page?: string;
    category?: string;
  }>;
}

export async function generateMetadata({ searchParams }: PageProps): Promise<Metadata> {
  const { category } = await searchParams;

  if (category) {
    const name = category.charAt(0).toUpperCase() + category.slice(1).replace(/-/g, ' ');
    return generateSEO({
      title: `${name} Blog Posts`,
      description: `Read our latest articles about ${category.replace(/-/g, ' ')}`,
      url: `/blog?category=${category}`,
    });
  }

  return generateSEO({
    title: 'Blog',
    description: 'Analytics insights, tracking implementation guides, and MarTech best practices from the MarTechRise team.',
    url: '/blog',
  });
}

export default async function BlogPage({ searchParams }: PageProps) {
  const { page: pageParam, category: categorySlug } = await searchParams;
  const page = Number(pageParam) || 1;

  const [blogsData, categories, recentBlogs] = await Promise.all([
    getBlogs({ page, limit: 8, status: 'published', categorySlug }),
    getAllBlogCategories(),
    getBlogs({ page: 1, limit: 5, status: 'published' }), // Recent posts for sidebar
  ]);

  const { data: blogs, pagination } = blogsData;

  return (
    <main className="min-h-screen bg-slate-50 mt-24">
      {/* Hero Section */}
      <section className="bg-white border-b border-slate-200 py-12 lg:py-16">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-3">
            Latest Blog Posts
          </h1>
          <p className="text-lg text-slate-600 max-w-3xl">
            Discover insights, tutorials, and industry news
          </p>
        </div>
      </section>

      {/* Main Content: Two Column Layout */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Main Content Area (70%) */}
          <div className="flex-1 lg:max-w-[calc(100%-320px)]">
            {blogs.length === 0 ? (
              <div className="bg-white border border-slate-200 rounded-lg text-center py-24 px-6 shadow-sm">
                <p className="text-slate-400 text-lg mb-4">No blog posts found.</p>
                <Link href="/blog" className="text-blue-600 hover:text-blue-700 font-medium transition-colors rounded-md">
                  View all posts →
                </Link>
              </div>
            ) : (
              <>
                {/* Blog List */}
                <div className="space-y-8">
                  {blogs.map((blog) => (
                    <BlogCard key={blog.slug} blog={blog} variant="horizontal" />
                  ))}
                </div>

                {/* Pagination */}
                {pagination.totalPages > 1 && (
                  <div className="flex justify-center items-center gap-4 mt-12">
                    {page > 1 && (
                      <Link
                        href={`/blog?page=${page - 1}${categorySlug ? `&category=${categorySlug}` : ''}`}
                        className="px-6 py-3 bg-white rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        ← Previous
                      </Link>
                    )}
                    <span className="text-sm text-slate-600 font-medium">
                      Page {page} of {pagination.totalPages}
                    </span>
                    {pagination.hasMore && (
                      <Link
                        href={`/blog?page=${page + 1}${categorySlug ? `&category=${categorySlug}` : ''}`}
                        className="px-6 py-3 bg-white rounded-md border border-slate-300 text-slate-700 font-medium hover:bg-slate-50 transition-colors shadow-sm"
                      >
                        Next →
                      </Link>
                    )}
                  </div>
                )}
              </>
            )}
          </div>

          {/* Sidebar (30%) */}
          <aside className="lg:w-80 flex-shrink-0 space-y-6">

            {/* Recent Posts Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-6 uppercase tracking-wide">
                Recent Posts
              </h2>
              <div className="space-y-6">
                {recentBlogs.data.slice(0, 5).map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} variant="compact" />
                ))}
              </div>
            </div>
            {/* Categories Section */}
            <div className="bg-white rounded-lg border border-slate-200 p-6 shadow-sm">
              <h2 className="text-lg font-bold text-slate-900 mb-4 uppercase tracking-wide">
                Categories
              </h2>
              <div className="space-y-2">
                <Link
                  href="/blog"
                  className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-all ${!categorySlug
                    ? 'bg-slate-900 text-white'
                    : 'text-slate-700 hover:bg-slate-100'
                    }`}
                >
                  All Posts
                </Link>
                {categories.map((category) => (
                  <Link
                    key={category._id?.toString()}
                    href={`/blog?category=${category.slug}`}
                    className={`block px-4 py-2.5 text-sm font-medium rounded-md transition-all ${categorySlug === category.slug
                      ? 'bg-slate-900 text-white'
                      : 'text-slate-700 hover:bg-slate-100'
                      }`}
                  >
                    <span>{category.name}</span>
                    {category.blogCount > 0 && (
                      <span className="float-right text-xs opacity-70">
                        ({category.blogCount})
                      </span>
                    )}
                  </Link>
                ))}
              </div>
            </div>



            {/* Newsletter Signup in Sidebar */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-700 text-white rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-bold mb-2">Stay Updated</h3>
              <p className="text-sm text-blue-100 mb-4">
                Get the latest analytics insights delivered to your inbox
              </p>
              <Link
                href="#newsletter"
                className="block w-full text-center bg-white text-blue-600 font-semibold py-2.5 rounded-md hover:bg-blue-50 transition-colors"
              >
                Subscribe Now
              </Link>
            </div>
          </aside>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div id="newsletter" className="max-w-7xl mx-auto px-4 lg:px-8 pb-16">
        <NewsletterSignup variant="hero" source="blog-listing" />
      </div>
    </main>
  );
}
