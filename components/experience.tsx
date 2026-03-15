"use client"

import { Building2, Calendar, ArrowUpRight } from "lucide-react"

const experiences = [
  {
    title: "Data Analytics Intern",
    company: "FM News",
    location: "Noida",
    period: "Aug 2025",
    description: [
      "Performed data analytics using Python, Excel, and Google Sheets for news content optimization",
      "Conducted SEO analysis and audience engagement research to improve content reach",
      "Created weekly reports with data visualizations for editorial decision-making",
    ],
    skills: ["Python", "Excel", "Data Analytics", "SEO", "Visualization"],
  },
  {
    title: "AI/ML Intern",
    company: "Campalin",
    location: "Bangalore",
    period: "Jul 2023 – Sep 2023",
    description: [
      "Developed real-world international AI/ML projects for enterprise clients",
      "Built CNN and NLP-based predictive systems for business intelligence",
      "Applied advanced AI frameworks to solve complex business problems",
    ],
    skills: ["CNN", "NLP", "TensorFlow", "PyTorch", "Machine Learning"],
  },
]

export function Experience() {
  return (
    <section id="experience" className="py-24 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 right-0 w-1/3 h-1/2 bg-accent/5 blur-3xl pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
              Work Experience
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground">
              Professional Journey
            </h3>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences.map((exp, idx) => (
                <div
                  key={exp.company}
                  className="relative pl-8 md:pl-24"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary glow-cyan" />

                  {/* Content card */}
                  <div className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 gap-2">
                      <div>
                        <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.title}
                        </h4>
                        <div className="flex items-center gap-2 text-muted-foreground mt-1">
                          <Building2 className="w-4 h-4" />
                          <span>{exp.company}</span>
                          <span className="text-border">•</span>
                          <span>{exp.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-primary font-mono">
                        <Calendar className="w-4 h-4" />
                        {exp.period}
                      </div>
                    </div>

                    {/* Description */}
                    <ul className="space-y-3 mb-6">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-muted-foreground">
                          <ArrowUpRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Skills */}
                    <div className="flex flex-wrap gap-2">
                      {exp.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-md text-xs font-medium bg-primary/10 text-primary border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
