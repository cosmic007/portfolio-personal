'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-foreground hover:text-primary transition-colors flex-shrink-0">
            Abhijith
          </Link>
          
          {/* Desktop Navigation - hidden on small screens */}
          <div className="hidden sm:flex gap-8 items-center">
            <Link 
              href="/" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/projects" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Projects
            </Link>
            <Link 
              href="/blog" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
            >
              Blog
            </Link>
            <a 
              href="mailto:abhijithvaofficial@gmail.com" 
              className="text-sm px-5 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button - visible only on small screens */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 text-foreground hover:text-primary transition-colors cursor-pointer"
            aria-label="Toggle menu"
            type="button"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation - only visible on small screens when open */}
        {isOpen && (
          <div className="sm:hidden border-t border-border/50 bg-background py-4">
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/projects" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                Projects
              </Link>
              <Link 
                href="/blog" 
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors font-medium py-2 px-4"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="mailto:abhijithvaofficial@gmail.com" 
                className="block text-sm px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium text-center m-4"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
