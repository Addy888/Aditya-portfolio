"use client"

import { Award, CheckCircle } from "lucide-react"

const certifications = [
  {
    title: "Artificial Intelligence",
    issuer: "Kodacy",
    category: "AI/ML",
  },
  {
    title: "Data Analytics using Python",
    issuer: "Samatrix",
    category: "Data Science",
  },
  {
    title: "R Language",
    issuer: "Samatrix",
    category: "Programming",
  },
  {
    title: "Statistics using Python",
    issuer: "Samatrix",
    category: "Data Science",
  },
  {
    title: "Data Analytics",
    issuer: "Deloitte",
    category: "Analytics",
  },
  {
    title: "AI Certification",
    issuer: "Campalin",
    category: "AI/ML",
  },
]

export function Certifications() {
  return (
    <section id="certifications" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-primary/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
              Credentials
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Certifications
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Professional certifications validating expertise in AI, Machine Learning, 
              and Data Analytics.
            </p>
          </div>

          {/* Certifications grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={cert.title}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-primary/10 rounded-lg flex-shrink-0">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors text-sm leading-tight">
                      {cert.title}
                    </h4>
                    <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    <span className="inline-flex items-center gap-1 mt-2 text-xs text-primary">
                      <CheckCircle className="w-3 h-3" />
                      {cert.category}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
