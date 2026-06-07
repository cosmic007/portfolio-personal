import Script from 'next/script';
import Image from 'next/image';
import Link from 'next/link';
import { getAllPosts } from '@/lib/markdown';
import { Download, ArrowRight, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Abhijith V A - Software Engineer | Java | Spring Boot | Cloud',
  description: 'Software Engineer specializing in Java, Spring Boot, Oracle Cloud Infrastructure, CI/CD pipelines, and enterprise application development.',
}

export default function Home() {
  const projects = getAllPosts('projects');
  const blogPosts = getAllPosts('blog');

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Abhijith V A',
    url: 'https://abhijithva.in',
    image: 'https://abhijithva.in/images/profile.jpg',
    jobTitle: 'Software Engineer',
    worksFor: { '@type': 'Organization', name: 'Zafin' },
    sameAs: ['https://www.linkedin.com/in/abhijithofficial', 'https://github.com/cosmic007'],
    email: 'mail@abhijithva.in',
    telephone: '+919633286984',
  }

  return (
    <>
      <Script id="person-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container-max mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium border border-primary/20">
                    🚀 PORTFOLIO
                  </span>
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-on-surface leading-tight">
                  Designing and building <span className="text-primary italic">scalable systems</span> with Java & Cloud
                </h1>
              </div>

              <p className="text-lg text-on-surface-variant leading-relaxed max-w-xl">
                A talented software engineer specializing in distributed architecture, cloud-native solutions, and production-driven performance tuning.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-1 transition-all duration-300 font-semibold"
                >
                  View Portfolio
                  <ArrowRight className="w-5 h-5" />
                </a>
                <a
                  href="/AbhijithVAResume.pdf"
                  download
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass-card text-primary hover:bg-primary/20 transition-all duration-300 font-semibold border border-primary/40"
                >
                  <Download className="w-5 h-5" />
                  Download Resume
                </a>
              </div>
            </div>

            {/* Right Image */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-72 h-96 rounded-2xl overflow-hidden glass-card border border-primary/20">
                <Image
                  src="/images/profile.jpg"
                  alt="Abhijith V A"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section id="work" className="py-20 px-6 border-t border-outline-variant">
        <div className="container-max mx-auto">
          <div className="mb-16">
            <h2 className="text-4xl font-bold text-on-surface mb-4">Featured Work</h2>
            <p className="text-on-surface-variant">Recent projects showcasing expertise in enterprise architecture and cloud solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.slice(0, 4).map((project) => (
              <a
                key={project.metadata.slug}
                href={`/projects/${project.metadata.slug}`}
                className="glass-card p-8 rounded-lg hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group cursor-pointer"
              >
                <h3 className="text-xl font-bold text-on-surface group-hover:text-primary transition-colors mb-3">
                  {project.metadata.title}
                </h3>
                <p className="text-sm text-on-surface-variant mb-6 line-clamp-2">
                  {project.metadata.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {project.metadata.tags?.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary/10 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 font-semibold border border-primary/40"
            >
              View All Projects
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6">
        <div className="container-max mx-auto">
          <h2 className="text-4xl font-bold text-on-surface mb-12">Professional Journey</h2>

          <div className="space-y-6">
            {/* Software Engineer at Zafin */}
            <div className="glass-card p-8 rounded-lg border-l-4 border-primary hover:border-primary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-on-surface">Software Engineer</h3>
                  <p className="text-primary font-semibold text-sm">Zafin • Trivandrum</p>
                </div>
                <span className="text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">10/2024 - Present</span>
              </div>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li>• Managed end-to-end production deployments for enterprise banking applications</li>
                <li>• Performed root cause analysis and resolved critical production incidents</li>
                <li>• Designed complex data loading procedures with Java, Spring Framework, and Oracle</li>
                <li>• Implemented performance optimization reducing query execution time by 35%</li>
                <li>• Developed automation scripts for infrastructure management and monitoring</li>
                <li>• Collaborated with cross-functional teams on system architecture improvements</li>
                <li>• Maintained 99.9% uptime for production systems through proactive monitoring</li>
              </ul>
            </div>

            {/* Application Support Engineer at Zafin */}
            <div className="glass-card p-8 rounded-lg border-l-4 border-secondary hover:border-secondary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-on-surface">Application Support Engineer</h3>
                  <p className="text-secondary font-semibold text-sm">Zafin • Trivandrum</p>
                </div>
                <span className="text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">08/2023 - 09/2024</span>
              </div>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li>• Monitored and supported mission-critical production workloads 24/7</li>
                <li>• Developed Java-based automation utilities for operational efficiency</li>
                <li>• Reduced manual effort by 50% with custom scripting solutions</li>
                <li>• Identified and documented 40+ process improvement opportunities</li>
                <li>• Handled Tier-2 and Tier-3 incident resolution with 95% first-contact resolution</li>
                <li>• Created comprehensive troubleshooting documentation and runbooks</li>
              </ul>
            </div>

            {/* Software Engineering Intern */}
            <div className="glass-card p-8 rounded-lg border-l-4 border-tertiary hover:border-tertiary/50 transition-all duration-300">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-on-surface">Software Engineering Intern</h3>
                  <p className="text-tertiary font-semibold text-sm">Zafin • Trivandrum</p>
                </div>
                <span className="text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">04/2023 - 08/2023</span>
              </div>
              <ul className="space-y-2 text-sm text-on-surface-variant">
                <li>• Developed backend services using Spring Boot and Java</li>
                <li>• Contributed to database optimization and query performance tuning</li>
                <li>• Participated in code reviews and learned enterprise development practices</li>
                <li>• Built RESTful APIs for internal tools and support systems</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 border-t border-outline-variant">
        <div className="container-max mx-auto">
          <h2 className="text-4xl font-bold text-on-surface mb-12">Technical Proficiencies</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Languages & Frameworks',
                skills: ['Java', 'Spring Boot', 'Spring Framework', 'Hibernate', 'Maven', 'REST APIs', 'JDBC'],
              },
              {
                title: 'Cloud & DevOps',
                skills: ['Oracle Cloud Infrastructure', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines', 'Linux'],
              },
              {
                title: 'Databases & Deployment',
                skills: ['Oracle Database', 'MySQL', 'PostgreSQL', 'PL/SQL', 'Database Optimization'],
              },
              {
                title: 'Tools & Platforms',
                skills: ['Git', 'Maven', 'Gradle', 'JIRA', 'Confluence', 'IntelliJ IDEA', 'VS Code', 'Apache Tomcat', 'Unix/Linux'],
              },
              {
                title: 'Development Practices',
                skills: ['System Design', 'Performance Tuning', 'Production Support', 'Process Automation', 'Debugging', 'API Design'],
              },
              {
                title: 'Soft Skills',
                skills: ['Problem Solving', 'Team Collaboration', 'Technical Documentation', 'Communication', 'Agile/Scrum', 'Root Cause Analysis'],
              },
            ].map((category) => (
              <div key={category.title} className="glass-card p-8 rounded-lg hover:border-primary/50 transition-all duration-300">
                <h3 className="text-lg font-bold text-on-surface mb-6">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-medium hover:bg-primary/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-20 px-6">
        <div className="container-max mx-auto">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-4xl font-bold text-on-surface">Writing & Insights</h2>
            <Link href="/blog" className="text-primary hover:text-primary/80 transition-colors text-sm font-medium">
              See all articles →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.slice(0, 2).map((post) => (
              <Link
                key={post.metadata.slug}
                href={`/blog/${post.metadata.slug}`}
                className="glass-card p-8 rounded-lg hover:border-primary/50 transition-all duration-300 group"
              >
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xs text-on-surface-variant bg-surface-container px-3 py-1 rounded-full">
                    {new Date(post.metadata.date).toLocaleDateString()}
                  </span>
                  <ExternalLink className="w-4 h-4 text-on-surface-variant group-hover:text-primary transition-colors" />
                </div>
                <h3 className="text-lg font-bold text-on-surface group-hover:text-primary transition-colors mb-3">
                  {post.metadata.title}
                </h3>
                <p className="text-sm text-on-surface-variant">
                  {post.metadata.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 border-t border-outline-variant">
        <div className="container-max mx-auto text-center">
          <h2 className="text-4xl font-bold text-on-surface mb-6">Ready to build something extraordinary?</h2>
          <p className="text-lg text-on-surface-variant mb-8 max-w-2xl mx-auto">
            I'm actively open to exciting projects and collaborations. Let's discuss how we can build scalable solutions together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:mail@abhijithva.in"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 font-semibold"
            >
              Get in Touch
            </a>
            <a
              href="https://www.linkedin.com/in/abhijithofficial"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-lg glass-card text-primary hover:bg-primary/20 transition-all duration-300 font-semibold border border-primary/40"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
