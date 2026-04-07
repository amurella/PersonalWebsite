"use client";

import { Github, Linkedin, Mail } from "lucide-react";

interface SocialLinksProps {
  className?: string;
  iconSize?: number;
}

export default function SocialLinks({ className = "", iconSize = 20 }: SocialLinksProps) {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <a
        href="https://github.com/amurella"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-accent transition-colors"
        aria-label="GitHub"
      >
        <Github size={iconSize} />
      </a>
      <a
        href="https://www.linkedin.com/in/akhila-murella"
        target="_blank"
        rel="noopener noreferrer"
        className="text-secondary hover:text-accent transition-colors"
        aria-label="LinkedIn"
      >
        <Linkedin size={iconSize} />
      </a>
      <a
        href="mailto:akhila.murella@gmail.com"
        className="text-secondary hover:text-accent transition-colors"
        aria-label="Email"
      >
        <Mail size={iconSize} />
      </a>
    </div>
  );
}
