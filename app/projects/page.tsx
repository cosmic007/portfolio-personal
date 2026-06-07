import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';

export const metadata = {
  title: 'Projects | Abhijith V A - Software Engineer',
  description: 'Explore my portfolio of projects showcasing expertise in Java, Spring Boot, Oracle Cloud, DevOps, and enterprise application development. Real-world solutions to complex technical challenges.',
  keywords: ['Projects', 'Portfolio', 'Java Projects', 'Spring Boot', 'Cloud Applications', 'Enterprise Solutions', 'Software Development'],
  openGraph: {
    title: 'Projects | Abhijith V A',
    description: 'Explore my portfolio of projects built with Java, Spring Boot, and cloud technologies.',
    url: 'https://abhijithva.in/projects',
    type: 'website',
  },
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
            <div className="
  bg-gradient-to-br
  from-white/[0.03]
  to-white/[0.01]
  backdrop-blur-md
  rounded-2xl
  border border-white/10
  hover:border-primary/40
  transition-all duration-500
  h-full flex flex-col
  p-8 md:p-10
  hover:-translate-y-1
  hover:shadow-2xl
">
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
