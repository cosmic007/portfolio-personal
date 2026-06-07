export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-outline-variant bg-surface py-20">
      <div className="container-max mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div>
            <h3 className="font-bold text-on-surface mb-4 text-lg">About</h3>
            <p className="text-on-surface-variant leading-relaxed">
              Software Engineer specializing in Java, Spring Boot, and cloud solutions. Building scalable systems and solving complex problems with enterprise applications and DevOps expertise.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-on-surface mb-4 text-lg">Navigate</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="/projects" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a href="mailto:mail@abhijithva.in" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-on-surface mb-4 text-lg">Connect</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="https://github.com/cosmic007" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/abhijithofficial" target="_blank" rel="noopener noreferrer" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="tel:+919633286984" className="text-on-surface-variant hover:text-primary transition-colors duration-300 font-medium">
                  +91 9633286984
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-outline-variant pt-8">
          <p className="text-sm text-on-surface-variant text-center">
            © {currentYear} Abhijith V A. All rights reserved. | Built with Next.js & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
