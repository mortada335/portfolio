"use client"

import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <footer className="relative border-t border-border/40 bg-card/30 backdrop-blur-sm">
      {/* Subtle top glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>

      <div className="container mx-auto max-w-6xl px-4 md:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="space-y-3">
            <h3 className="text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-indigo-400">
              Mortada Ahmed
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Software Developer crafting premium web experiences with Vue.js, React, and modern full-stack technologies.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Quick Links</h4>
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 w-fit"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-semibold text-foreground uppercase tracking-wider">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/Mortada335"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border/50 bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.2)] transition-all duration-300"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
              <a
                href="https://linkedin.com/in/mortada-ahmed"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full border border-border/50 bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.2)] transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a
                href="mailto:mortadaahmed335@gmail.com"
                className="p-2.5 rounded-full border border-border/50 bg-muted/30 text-muted-foreground hover:text-primary hover:border-primary/40 hover:bg-primary/10 hover:shadow-[0_0_12px_rgba(139,92,246,0.2)] transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-10 pt-6 border-t border-border/30 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground flex items-center gap-1.5">
            © {new Date().getFullYear()} Mortada Ahmed. Built with
            <Heart className="h-3 w-3 text-primary fill-primary" />
            All rights reserved.
          </p>

          {/* Back to top */}
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-xs text-muted-foreground hover:text-primary transition-colors duration-200"
          >
            Back to top
            <span className="p-1.5 rounded-full border border-border/50 group-hover:border-primary/40 group-hover:bg-primary/10 transition-all duration-300">
              <ArrowUp className="h-3 w-3" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
