import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Projects',
  description: 'Check out my latest projects and work',
};

export default function ProjectsPage() {
  const projects = getAllPosts('projects');

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
      <div className="mb-12 md:mb-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4">Projects</h1>
        <div className="w-16 h-1.5 bg-primary rounded-full mb-6"></div>
        <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
          A collection of my recent work showcasing expertise in building scalable systems and solving complex problems.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {projects.map((project) => (
          <Link
            key={project.metadata.slug}
            href={`/projects/${project.metadata.slug}`}
            className="group"
          >
            <div className="bg-white rounded-xl border border-border hover:border-primary/50 transition-all duration-300 h-full flex flex-col p-8 md:p-10 hover:shadow-lg">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                {project.metadata.title}
              </h2>
              <p className="text-muted-foreground text-base leading-relaxed mb-6 flex-1">
                {project.metadata.description}
              </p>
              {project.metadata.tags && (
                <div className="flex flex-wrap gap-2 pt-6 border-t border-border">
                  {project.metadata.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>

      {projects.length === 0 && (
        <div className="text-center py-16">
          <p className="text-muted-foreground text-lg">No projects yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}
