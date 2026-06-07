'use client';

export function SkillsExperience() {
  const skills = {
    'Languages & Frameworks': ['Java', 'SQL', 'Spring Boot', 'Spring Framework', 'Hibernate', 'Maven', 'REST APIs'],
    'Cloud & DevOps': ['Oracle Cloud Infrastructure (OCI)', 'Docker', 'Jenkins', 'GitHub Actions', 'CI/CD Pipelines', 'Linux Administration'],
    'Databases & Deployment': ['Oracle', 'MySQL', 'PostgreSQL', 'Application Deployment', 'Environment Management'],
    'Tools & Platforms': ['Git', 'GitHub', 'JFrog Artifactory', 'Jira', 'Postman', 'Zendesk', 'Android Studio', 'Firebase'],
    'Automation & Process': ['Process Automation', 'Scripting', 'Workflow Automation', 'Power Automate'],
  };

  const experience = [
    {
      title: 'Software Engineer',
      company: 'Zafin',
      period: '10/2024 - Present',
      highlights: [
        'Managed end-to-end production deployments for enterprise banking applications across multiple cloud-hosted environments, ensuring stability and high availability.',
        'Performed root cause analysis and resolved critical production incidents, reducing recurring issues through permanent fixes.',
        'Designed and implemented complex data loading procedures and backend enhancements using Java, Spring Framework, Maven, and Oracle technologies.',
        'Collaborated directly with clients during production releases and incident resolution, enhancing client satisfaction and post-deployment validation.',
        'Independently owned and successfully delivered three customer projects with minimal supervision.',
        'Participated in release planning, deployment validation, rollback procedures, and supported production, improving system reliability.',
        'Worked with Jenkins, Maven, JFrog Artifactory, and deployment pipelines as part of enterprise release management activities.',
      ],
    },
    {
      title: 'Application Support Engineer',
      company: 'Zafin',
      period: '08/2023 - 09/2024',
      highlights: [
        'Monitored and supported mission-critical production workloads across multiple business regions.',
        'Developed Java-based automation utilities that eliminated repetitive operational tasks and improved support efficiency.',
        'Built Excel and scripting-based automation solutions, reducing manual effort by over 50%.',
        'Utilized Power Automate and cloud-based workflows to streamline operational processes.',
        'Performed log analysis, troubleshooting, incident management, and stakeholder communication during critical production events.',
        'Contributed to process automation and continuous improvement initiatives within support operations.',
      ],
    },
    {
      title: 'Software Engineering Intern',
      company: 'Canddella, Sniqsys Technosphere Pvt Ltd',
      period: '04/2023 - 08/2023',
      highlights: [
        'Developed backend modules for a Product & Customer Relationship Management (CRM) platform using Java, Spring Boot, Maven, and MySQL.',
        'Designed RESTful APIs and business logic components for customer and inventory management.',
        'Implemented database operations, reporting modules, and analytics features to improve product sales visibility.',
        'Participated in requirement analysis, development, testing, debugging, and deployment activities following SDLC practices.',
      ],
    },
  ];

  return (
    <section className="py-20 md:py-32 border-t border-border/50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 -z-10"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20 -z-10"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Skills Section */}
        <div className="mb-20 md:mb-32">
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">Skills & Expertise</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-primary/40 rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {Object.entries(skills).map(([category, items]) => (
              <div 
                key={category} 
                className="bg-gradient-to-br from-white to-white/50 rounded-xl border border-border/50 p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group cursor-pointer backdrop-blur-sm"
              >
                <h3 className="text-lg font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 rounded-full bg-gradient-to-r from-primary/10 to-primary/5 text-primary text-xs font-semibold hover:from-primary hover:to-primary/70 hover:text-primary-foreground transition-all duration-300 border border-primary/20 hover:border-primary/50 hover:shadow-md hover:shadow-primary/20"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div>
          <div className="mb-12 md:mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-3">Professional Experience</h2>
            <div className="w-16 h-1.5 bg-gradient-to-r from-primary to-primary/40 rounded-full"></div>
          </div>

          <div className="space-y-6 md:space-y-8">
            {experience.map((job, index) => (
              <div 
                key={index} 
                className="bg-gradient-to-br from-white to-white/50 rounded-xl border border-border/50 p-6 md:p-10 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300 group backdrop-blur-sm overflow-hidden relative"
              >
                {/* Animated background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">{job.title}</h3>
                    <p className="text-primary font-semibold mt-2 flex items-center gap-2">
                      <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                      {job.company}
                    </p>
                  </div>
                  <span className="text-sm text-muted-foreground font-semibold whitespace-nowrap px-4 py-2 rounded-lg bg-primary/5 group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {job.period}
                  </span>
                </div>
                <ul className="space-y-3">
                  {job.highlights.map((highlight, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-primary font-bold mt-1 flex-shrink-0">→</span>
                      <span className="text-muted-foreground leading-relaxed group-hover:text-foreground transition-colors duration-300">{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
