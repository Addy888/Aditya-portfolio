"use client"

import { Github, Linkedin, Mail, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-12 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            {/* Logo & tagline */}
            <div className="text-center md:text-left">
              <a
                href="#"
                className="text-xl font-bold text-foreground hover:text-primary transition-colors"
              >
                <span className="text-primary">A</span>ditya
              </a>
              <p className="text-sm text-muted-foreground mt-1">
                AI & Machine Learning Engineer
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              <a
                href="https://github.com/Addy888/Addy888"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/aditya-shastri-77b662245/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="mailto:adityashastri76@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-sm text-muted-foreground flex items-center gap-1 justify-center md:justify-end">
                Made with <Heart className="w-4 h-4 text-primary fill-primary" /> in India
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                © {currentYear} Aditya Kumar Shastri. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
