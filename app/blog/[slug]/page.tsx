import Link from 'next/link';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/markdown';

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const posts = getAllPosts('blog');
  return posts.map((post) => ({
    slug: post.metadata.slug,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'blog');

  if (!post) {
    return {
      title: 'Article Not Found',
    };
  }

  return {
    title: post.metadata.title,
    description: post.metadata.description,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug, 'blog');

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Article not found</h1>
          <Link
            href="/blog"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Back to blog
          </Link>
        </div>
      </div>
    );
  }

  const html = await markdownToHtml(post.content);
  const publishDate = new Date(post.metadata.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/blog"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Back to Blog
      </Link>

      <header className="mb-12">
        <time className="text-sm text-muted-foreground">
          {publishDate}
        </time>
        <h1 className="text-4xl md:text-5xl font-bold text-foreground my-4">
          {post.metadata.title}
        </h1>
        <p className="text-xl text-muted-foreground">
          {post.metadata.description}
        </p>

        {post.metadata.tags && (
          <div className="flex flex-wrap gap-2 mt-4">
            {post.metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-secondary/30 text-sm text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-sm max-w-none">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="space-y-6 text-foreground
            [&>h1]:hidden
            [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-8 [&>h2]:mb-4
            [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-6 [&>h3]:mb-2
            [&>p]:text-muted-foreground [&>p]:leading-relaxed
            [&>ul]:space-y-2 [&>ul]:list-disc [&>ul]:pl-6
            [&>ol]:space-y-2 [&>ol]:list-decimal [&>ol]:pl-6
            [&>li]:text-muted-foreground
            [&>pre]:bg-secondary/50 [&>pre]:rounded-lg [&>pre]:p-4 [&>pre]:overflow-x-auto
            [&>code]:bg-secondary/30 [&>code]:px-2 [&>code]:py-1 [&>code]:rounded [&>code]:text-sm [&>code]:font-mono
            [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground
            [&>a]:text-primary [&>a]:hover:text-primary/80 [&>a]:transition-colors
          "
        />
      </article>

      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/blog"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Blog
        </Link>
      </div>
    </div>
  );
}
