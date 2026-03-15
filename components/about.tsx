"use client"

import { MapPin, GraduationCap, Briefcase, Sparkles } from "lucide-react"

export function About() {
  return (
    <section id="about" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
              About Me
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Crafting Intelligent Solutions
            </h3>
          </div>

          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Main content */}
            <div className="lg:col-span-3 space-y-6">
              <p className="text-lg text-muted-foreground leading-relaxed">
                I am an AI & Machine Learning Engineer with a passion for developing intelligent systems 
                that bridge the gap between cutting-edge research and real-world applications. My expertise 
                spans across Deep Learning, Natural Language Processing, Computer Vision, and Generative AI.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With hands-on experience in building production-grade AI solutions, I specialize in 
                transforming complex business challenges into scalable, data-driven products. From 
                developing SaaS platforms with AI coaching to creating brain-computer interfaces, 
                I thrive on pushing the boundaries of what&apos;s possible with machine learning.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My approach combines rigorous technical foundations with practical problem-solving, 
                ensuring that every solution is not just innovative but also deployable and maintainable 
                in production environments.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">8+</div>
                  <div className="text-sm text-muted-foreground">AI Projects</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">6+</div>
                  <div className="text-sm text-muted-foreground">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-2">2+</div>
                  <div className="text-sm text-muted-foreground">Internships</div>
                </div>
              </div>
            </div>

            {/* Info cards */}
            <div className="lg:col-span-2 space-y-4">
              <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Location</h4>
                    <p className="text-muted-foreground">India</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Education</h4>
                    <p className="text-muted-foreground">B.Tech CSE (AI & ML)</p>
                    <p className="text-sm text-muted-foreground/70">IIMT University • 2021–2025</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Focus Areas</h4>
                    <p className="text-muted-foreground">Deep Learning, NLP, GenAI</p>
                  </div>
                </div>
              </div>

              <div className="glass-card rounded-xl p-6 hover:border-primary/50 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent/10 rounded-lg">
                    <Sparkles className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Interests</h4>
                    <p className="text-muted-foreground">AI Research, SaaS, BCI Systems</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
