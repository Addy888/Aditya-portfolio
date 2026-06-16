"use client"

import { useEffect, useState } from "react"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const roles = [
  "AI & Machine Learning Engineer",
  "Deep Learning Specialist",
  "NLP & GenAI Developer",
  "Computer Vision Engineer",
]

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          if (displayedText.length < role.length) {
            setDisplayedText(role.slice(0, displayedText.length + 1))
          } else {
            setTimeout(() => setIsDeleting(true), 2000)
          }
        } else {
          if (displayedText.length > 0) {
            setDisplayedText(displayedText.slice(0, -1))
          } else {
            setIsDeleting(false)
            setCurrentRole((prev) => (prev + 1) % roles.length)
          }
        }
      },
      isDeleting ? 50 : 100
    )
    return () => clearTimeout(timeout)
  }, [displayedText, isDeleting, currentRole])

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-16"
    >

      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan/5 rounded-full blur-3xl" />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass-card px-4 py-2 rounded-full mb-8 animate-slide-up">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-muted-foreground">
              Available for opportunities
            </span>
          </div>

          {/* Name */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 animate-slide-up"
            style={{ animationDelay: "0.1s" }}
          >
            <span className="text-foreground">Aditya Kumar</span>
            <br />
            <span className="text-primary text-glow-cyan">Shastri</span>
          </h1>

          {/* Animated role */}
          <div
            className="h-12 md:h-16 flex items-center justify-center mb-8 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <span className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-mono">
              {displayedText}
              <span className="animate-pulse text-primary">|</span>
            </span>
          </div>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed animate-slide-up"
            style={{ animationDelay: "0.3s" }}
          >
            Building intelligent systems that solve real-world problems.
            Specializing in Deep Learning, NLP, Computer Vision, and GenAI.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a href="#projects">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan px-8"
              >
                View My Work
              </Button>
            </a>
            <a href="#contact">
              <Button
                size="lg"
                variant="outline"
                className="border-border hover:bg-secondary hover:text-secondary-foreground px-8 bg-transparent"
              >
                Contact Me
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-6 animate-slide-up"
            style={{ animationDelay: "0.5s" }}
          >
            <a
              href="https://github.com/Addy888/Addy888"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/aditya-shastri-77b662245/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:adityashastri76@gmail.com"
              className="text-muted-foreground hover:text-primary transition-colors p-2 hover:bg-secondary rounded-lg"
              aria-label="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Hero Illustration */}
          <div className="mt-16 w-full max-w-4xl mx-auto animate-slide-up" style={{ animationDelay: "0.6s" }}>
            <Image
              src="/hero-bg.png"
              alt="AI & Machine Learning Engineer"
              width={1920}
              height={1080}
              className="w-full h-auto object-cover rounded-xl shadow-2xl border border-white/10"
              priority
            />
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown size={24} />
          </a>
        </div>
      </div>
    </section>
  )
}
