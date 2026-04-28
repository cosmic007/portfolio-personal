import Link from 'next/link';
import { getAllPosts, getPostBySlug, markdownToHtml } from '@/lib/markdown';

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = getAllPosts('projects');
  return projects.map((project) => ({
    slug: project.metadata.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPostBySlug(slug, 'projects');

  if (!project) {
    return {
      title: 'Project Not Found',
    };
  }

  return {
    title: project.metadata.title,
    description: project.metadata.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getPostBySlug(slug, 'projects');

  if (!project) {
    return (
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">Project not found</h1>
          <Link
            href="/projects"
            className="text-primary hover:text-primary/80 transition-colors"
          >
            Back to projects
          </Link>
        </div>
      </div>
    );
  }

  const html = await markdownToHtml(project.content);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground hover:text-foreground transition-colors mb-8 inline-block"
      >
        ← Back to Projects
      </Link>

      {project.metadata.image && (
        <div className="relative h-96 overflow-hidden rounded-lg mb-8">
          <img
            src={project.metadata.image}
            alt={project.metadata.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      <header className="mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          {project.metadata.title}
        </h1>
        <p className="text-xl text-muted-foreground mb-6">
          {project.metadata.description}
        </p>

        {project.metadata.tags && (
          <div className="flex flex-wrap gap-2">
            {project.metadata.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 rounded-full bg-secondary text-sm text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </header>

      <article className="prose prose-sm max-w-none text-foreground">
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          className="space-y-6 [&>h2]:text-2xl [&>h2]:font-bold [&>h2]:text-foreground [&>h2]:mt-8 [&>h2]:mb-4 [&>h3]:text-xl [&>h3]:font-semibold [&>h3]:text-foreground [&>h3]:mt-6 [&>h3]:mb-2 [&>p]:text-muted-foreground [&>p]:leading-relaxed [&>ul]:space-y-2 [&>li]:text-muted-foreground [&>ol]:space-y-2 [&>pre]:bg-secondary/50 [&>pre]:rounded-lg [&>pre]:p-4 [&>code]:text-sm [&>blockquote]:border-l-4 [&>blockquote]:border-primary [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-muted-foreground"
        />
      </article>

      <div className="mt-16 pt-8 border-t border-border">
        <Link
          href="/projects"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          ← Back to Projects
        </Link>
      </div>
    </div>
  );
}
