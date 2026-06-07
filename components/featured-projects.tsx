'use client';

import Link from 'next/link';
import { Post } from '@/lib/markdown';

interface FeaturedProjectsProps {
  projects: Post[];
}

export function FeaturedProjects({ projects }: FeaturedProjectsProps) {
  const featured = projects.slice(0, 2);

  return (
    <section className="py-20 md:py-32 border-t border-border/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">Featured Projects</h2>
          <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-primary/40 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {featured.map((project) => (
            <Link
              key={project.metadata.slug}
              href={`/projects/${project.metadata.slug}`}
              className="group"
            >
              <div className="bg-gradient-to-br from-white to-white/50 rounded-xl border border-border hover:border-primary/50 transition-all duration-300 p-8 md:p-10 hover:shadow-xl hover:shadow-primary/10 cursor-pointer backdrop-blur-sm h-full relative overflow-hidden">
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors mb-4">
                  {project.metadata.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed mb-6 group-hover:text-foreground transition-colors">
                  {project.metadata.description}
                </p>
                {project.metadata.tags && (
                  <div className="flex flex-wrap gap-2">
                    {project.metadata.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-semibold group-hover:from-primary group-hover:to-primary/70 group-hover:text-primary-foreground transition-all duration-300 border border-primary/20 group-hover:border-primary/50"
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
            className="inline-flex items-center px-8 py-4 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-primary-foreground hover:shadow-lg hover:shadow-primary/50 hover:-translate-y-1 transition-all duration-300 font-semibold active:translate-y-0"
          >
            View All Projects →
          </Link>
        </div>
      </div>
    </section>
  );
}
