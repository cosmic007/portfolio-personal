'use client';

import Link from 'next/link';
import { Post } from '@/lib/markdown';

interface FeaturedProjectsProps {
  projects: Post[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = projects.slice(0, 2);

  return (
    <section className="py-20 md:py-32 border-t border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">Featured Projects</h2>
          <div className="w-16 h-1.5 bg-primary rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project) => (
            <Link
              key={project.metadata.slug}
              href={`/projects/${project.metadata.slug}`}
              className="group"
            >
              <div className="bg-white rounded-xl border border-border hover:border-primary/50 transition-all duration-300 p-8 md:p-10 hover:shadow-lg">
                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                  {project.metadata.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6">
                  {project.metadata.description}
                </p>
                {project.metadata.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.metadata.tags.slice(0, 3).map((tag) => (
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

        <div className="mt-12 md:mt-16 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
