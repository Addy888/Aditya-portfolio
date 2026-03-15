"use client"

import { Code2, Brain, Wrench, Database } from "lucide-react"

const skillCategories = [
  {
    title: "Programming",
    icon: Code2,
    skills: ["Python", "SQL", "JavaScript", "C", "HTML", "CSS"],
    color: "primary",
  },
  {
    title: "AI / ML",
    icon: Brain,
    skills: ["Machine Learning", "Deep Learning", "CNN", "NLP", "LLM", "RAG", "GenAI"],
    color: "accent",
  },
  {
    title: "Frameworks & Tools",
    icon: Wrench,
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "OpenCV", "Pandas", "NumPy"],
    color: "primary",
  },
  {
    title: "Data & DevOps",
    icon: Database,
    skills: ["Git", "GitHub", "MongoDB", "MySQL", "Tableau", "Matplotlib", "Seaborn"],
    color: "accent",
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-secondary/30">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
              Technical Expertise
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Skills & Technologies
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit spanning machine learning, deep learning frameworks, 
              and modern development practices.
            </p>
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, idx) => {
              const Icon = category.icon
              const colorClass = category.color === "primary" ? "text-primary bg-primary/10" : "text-accent bg-accent/10"
              const badgeClass = category.color === "primary" 
                ? "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20" 
                : "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20"
              
              return (
                <div
                  key={category.title}
                  className="glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div className={`p-3 rounded-xl ${colorClass}`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h4 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h4>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-all duration-200 ${badgeClass}`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>

          {/* Additional tools */}
          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">Also experienced with</p>
            <div className="flex flex-wrap justify-center gap-3">
              {["VS Code", "Jupyter", "Streamlit", "FastAPI", "Docker", "Linux"].map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 rounded-lg text-sm font-medium bg-muted/50 text-muted-foreground border border-border hover:border-primary/30 transition-all duration-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
