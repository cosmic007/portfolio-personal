'use client';

import Link from 'next/link';
import { Post } from '@/lib/markdown';

interface RecentPostsProps {
  posts: Post[];
}

export function RecentPosts({ posts }: RecentPostsProps) {
  const recent = posts.slice(0, 3);

  return (
    <section className="py-20 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">Latest Articles</h2>
          <div className="w-16 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {recent.map((post) => (
            <Link
              key={post.metadata.slug}
              href={`/blog/${post.metadata.slug}`}
              className="group"
            >
              <article className="bg-white rounded-xl p-8 md:p-10 border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col hover:shadow-lg">
                <time className="text-xs text-primary font-semibold uppercase tracking-wider mb-4">
                  {new Date(post.metadata.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric',
                  })}
                </time>
                <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-4 leading-snug flex-1">
                  {post.metadata.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {post.metadata.description}
                </p>
                {post.metadata.tags && (
                  <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                    {post.metadata.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="text-sm px-3 py-1.5 rounded-full bg-primary/10 text-primary font-semibold"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            </Link>
          ))}
        </div>

        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
          >
            Read All Articles →
          </Link>
        </div>
      </div>
    </section>
  );
}
