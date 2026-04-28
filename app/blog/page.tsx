import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Blog',
  description: 'Read my latest articles and thoughts on web development',
};

export default function BlogPage() {
  const posts = getAllPosts('blog');

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="mb-12 md:mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">Blog</h1>
        <div className="w-16 h-1.5 bg-primary rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground leading-relaxed">
          Insights on web development, system design, and building scalable solutions.
        </p>
      </div>

      <div className="space-y-8">
        {posts.map((post) => (
          <Link
            key={post.metadata.slug}
            href={`/blog/${post.metadata.slug}`}
            className="group block"
          >
            <article className="bg-white rounded-xl p-8 md:p-10 border border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg">
              <time className="text-xs font-semibold text-primary uppercase tracking-wider">
                {new Date(post.metadata.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'short',
                  day: 'numeric',
                })}
              </time>
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors mt-4 mb-4 leading-snug">
                {post.metadata.title}
              </h2>
              <p className="text-base md:text-lg text-muted-foreground mb-6 leading-relaxed">
                {post.metadata.description}
              </p>
              {post.metadata.tags && (
                <div className="flex flex-wrap gap-2">
                  {post.metadata.tags.map((tag) => (
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

      {posts.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No articles yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
