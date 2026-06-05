import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import { ArrowRight } from 'lucide-react';
import type { IBlog } from '@/types/blog';

interface BlogCardProps {
  blog: IBlog;
  variant?: 'horizontal' | 'compact';
}

export default function BlogCard({ blog, variant = 'horizontal' }: BlogCardProps) {
  // Compact variant for sidebar
  if (variant === 'compact') {
    return (
      <article className="group">
        <Link href={`/blog/${blog.slug}`} className="block">
          <h3 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 mb-2">
            {blog.title}
          </h3>
          <time className="text-xs text-slate-500">
            {blog.workflow?.publishedAt
              ? format(new Date(blog.workflow.publishedAt), 'MMMM d, yyyy')
              : 'Unpublished'}
          </time>
        </Link>
      </article>
    );
  }

  // Horizontal variant for main listing
  return (
    <article className="bg-white rounded-lg border border-slate-200 overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="flex flex-col lg:flex-row">
        {/* Featured Image */}
        {blog.featuredImage?.url && (
          <Link
            href={`/blog/${blog.slug}`}
            className="block relative overflow-hidden bg-slate-100 w-full lg:w-[420px] flex-shrink-0 aspect-[16/9] "
          >
            <Image
              src={blog.featuredImage.url}
              alt={blog.featuredImage.alt || blog.title}
              fill
              sizes="(max-width: 1024px) 100vw, 420px"
              className="object-contain group-hover:scale-105 transition-transform duration-500"
              priority={false}
            />
          </Link>
        )}

        {/* Content */}
        <div className="flex flex-col justify-between p-6 lg:p-8 flex-1">
          <div>
            {/* Title */}
            <Link href={`/blog/${blog.slug}`}>
              <h2 className="text-xl lg:text-2xl font-bold text-slate-900 group-hover:text-blue-600 transition-colors mb-3 leading-tight">
                {blog.title}
              </h2>
            </Link>

            {/* Excerpt */}
            <p className="text-slate-600 text-sm lg:text-base leading-relaxed mb-4 line-clamp-2 lg:line-clamp-3">
              {blog.excerpt?.replace(/<[^>]*>/g, '')}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between mt-4">
            <time className="text-sm text-slate-500">
              {blog.workflow?.publishedAt
                ? format(new Date(blog.workflow.publishedAt), 'MMMM d, yyyy')
                : 'Unpublished'}
            </time>
            <Link
              href={`/blog/${blog.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-blue-600 hover:text-blue-700 hover:gap-3 transition-all rounded-md"
            >
              Read More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </article>
  );
}
