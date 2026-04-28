export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background mt-32">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <h3 className="font-bold text-background mb-6 text-lg">About</h3>
            <p className="text-base text-background/80 leading-relaxed">
              Software Engineer specializing in Java, Spring Boot, and cloud solutions. Building scalable systems and solving complex problems.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-background mb-6 text-lg">Navigate</h3>
            <ul className="space-y-4 text-base">
              <li>
                <a href="/projects" className="text-background/80 hover:text-background transition-colors font-medium">
                  Projects
                </a>
              </li>
              <li>
                <a href="/blog" className="text-background/80 hover:text-background transition-colors font-medium">
                  Blog
                </a>
              </li>
              <li>
                <a href="mailto:abhijithvaofficial@gmail.com" className="text-background/80 hover:text-background transition-colors font-medium">
                  Get in Touch
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-background mb-6 text-lg">Connect</h3>
            <ul className="space-y-4 text-base">
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors font-medium">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-background/80 hover:text-background transition-colors font-medium">
                  LinkedIn
                </a>
              </li>
              <li>
                <a href="tel:+919633286984" className="text-background/80 hover:text-background transition-colors font-medium">
                  +91 9633286984
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-12">
          <p className="text-base text-background/70 text-center">
            © {currentYear} Abhijith V A. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
