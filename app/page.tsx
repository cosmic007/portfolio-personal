import { FeaturedProjects } from '@/components/featured-projects';
import { RecentPosts } from '@/components/recent-posts';
import { getAllPosts } from '@/lib/markdown';
import Link from 'next/link';

export default function Home() {
  const projects = getAllPosts('projects');
  const blogPosts = getAllPosts('blog');

  return (
    <>
      {/* Hero Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8 md:space-y-12">
            <div>
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-6 leading-tight">
                Abhijith V A
              </h1>
              <p className="text-2xl md:text-3xl text-primary font-semibold">
                Software Engineer
              </p>
            </div>

            <div className="max-w-2xl space-y-4">
              <p className="text-lg md:text-xl text-foreground leading-relaxed">
                Designing and building scalable systems with Java, Spring Boot, and cloud technologies at ZAFIN.
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Specialized in enterprise system design, production optimization, and solving complex technical challenges. Based in Thiruvananthapuram, Kerala.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Link
                href="/projects"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold"
              >
                View My Work
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center justify-center px-8 py-4 rounded-lg border-2 border-foreground text-foreground hover:bg-foreground/5 transition-colors font-semibold"
              >
                Read Articles
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects projects={projects} />

      {/* Recent Blog Posts */}
      <RecentPosts posts={blogPosts} />

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-32 border-t border-border/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Let&apos;s Work Together</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            I&apos;m always interested in hearing about new projects, challenges, and opportunities to build something meaningful.
          </p>
          <a
            href="mailto:abhijithvaofficial@gmail.com"
            className="inline-flex items-center px-10 py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold text-lg"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </>
  );
}
