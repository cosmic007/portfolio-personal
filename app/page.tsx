import { FeaturedProjects } from '@/components/featured-projects';
import { RecentPosts } from '@/components/recent-posts';
import { SkillsExperience } from '@/components/skills-experience';
import { SocialLinks } from '@/components/social-links';
import { getAllPosts } from '@/lib/markdown';
import Image from 'next/image';
import Link from 'next/link';
import { Download } from 'lucide-react';

export default function Home() {
  const projects = getAllPosts('projects');
  const blogPosts = getAllPosts('blog');

  return (
    <>
      {/* Hero Section */}
      <section className="py-12 md:py-32">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-start">
            {/* Right Column - Profile Image (appears first on mobile due to order) */}
            <div className="flex justify-center md:justify-end order-first md:order-last">
              <div className="relative w-48 h-48 md:w-80 md:h-80">
                <Image
                  src="/images/profile.jpg"
                  alt="Abhijith V A"
                  width={320}
                  height={320}
                  className="w-full h-full object-cover rounded-full shadow-2xl border-4 border-primary/20"
                  priority
                />
              </div>
            </div>

            {/* Left Column - Text Content */}
            <div className="space-y-6 md:space-y-8 order-last md:order-first">
              <div>
                <h1 className="text-5xl md:text-7xl lg:text-7xl font-bold text-foreground mb-4 md:mb-6 leading-tight">
                  Abhijith V A
                </h1>
                <p className="text-xl md:text-3xl text-primary font-semibold">
                  Software Engineer
                </p>
              </div>

              <div className="space-y-3 md:space-y-4">
                <p className="text-base md:text-lg text-foreground leading-relaxed">
                  Designing and building scalable systems with Java, Spring Boot, and cloud technologies. Currently at ZAFIN, managing end-to-end production deployments for enterprise banking applications.
                </p>
                <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                  Specialized in enterprise application development, production support, cloud infrastructure (OCI), CI/CD pipelines, and DevOps. Experienced in solving complex technical challenges and driving process automation. Based in Thiruvananthapuram, Kerala, India.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-semibold text-sm md:text-base"
                >
                  View My Work
                </Link>
                <Link
                  href="/blog"
                  className="inline-flex items-center justify-center px-6 md:px-8 py-3 md:py-4 rounded-lg border-2 border-foreground text-foreground hover:bg-foreground/5 transition-colors font-semibold text-sm md:text-base"
                >
                  Read Articles
                </Link>
                <a
                  href="/AbhijithVAResume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg bg-primary/10 text-primary border-2 border-primary hover:bg-primary hover:text-primary-foreground transition-colors font-semibold text-sm md:text-base"
                >
                  <Download className="w-4 h-4 md:w-5 md:h-5" />
                  Download Resume
                </a>
              </div>

              {/* Social Links */}
              <div className="pt-2 md:pt-4">
                <SocialLinks />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <FeaturedProjects projects={projects} />

      {/* Skills & Experience */}
      <SkillsExperience />

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
