'use client';

import { Github, Linkedin, Mail, Phone } from 'lucide-react';

export function SocialLinks() {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/cosmic007',
      icon: Github,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/abhijithofficial',
      icon: Linkedin,
    },
    {
      name: 'Email',
      url: 'mailto:mail@abhijithva.in',
      icon: Mail,
    },
    {
      name: 'Phone',
      url: 'tel:+919633286984',
      icon: Phone,
    },
  ];

  return (
    <div className="flex gap-6 items-center">
      {socialLinks.map((link) => {
        const Icon = link.icon;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.name !== 'Email' && link.name !== 'Phone' ? '_blank' : undefined}
            rel={link.name !== 'Email' && link.name !== 'Phone' ? 'noopener noreferrer' : undefined}
            aria-label={link.name}
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <Icon className="w-6 h-6" />
          </a>
        );
      })}
    </div>
  );
}
