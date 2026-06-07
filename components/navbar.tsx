'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Terminal, Download } from 'lucide-react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: 'Work', href: '/#work' },
    { label: 'Experience', href: '/#experience' },
    { label: 'Skills', href: '/#skills' },
    { label: 'Articles', href: '/#articles' },
    { label: 'Contact', href: '/#contact' },
  ];

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Desktop Navigation */}
      <header className="fixed top-0 w-full z-50 glass-card h-16">
        <div className="container-max mx-auto px-6 flex justify-between items-center h-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 cursor-pointer hover:opacity-80 transition-opacity active:scale-95">
            <Terminal className="w-6 h-6 text-primary" />
            <span className="font-bold text-on-surface text-lg tracking-tight">Abhijith V A</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={handleNavClick}
                className="text-on-surface-variant hover:text-primary transition-colors duration-200 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Download Resume Button */}
          <div className="hidden md:flex">
            <a
              href="/AbhijithVAResume.pdf"
              download
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 text-sm font-medium border border-primary/40 hover:border-primary"
            >
              <Download className="w-4 h-4" />
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-on-surface hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="fixed inset-0 z-40 pt-16">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute top-16 right-0 w-64 bg-surface-container-highest shadow-lg rounded-lg">
            <nav className="flex flex-col py-4">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-6 py-3 text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors duration-200 text-sm font-medium"
                  onClick={handleNavClick}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="/AbhijithVAResume.pdf"
                download
                className="mx-4 my-2 px-4 py-2 rounded-lg bg-primary/20 text-primary hover:bg-primary hover:text-on-primary transition-all duration-300 text-sm font-medium text-center flex items-center justify-center gap-2 border border-primary/40 hover:border-primary"
              >
                <Download className="w-4 h-4" />
                Resume
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
