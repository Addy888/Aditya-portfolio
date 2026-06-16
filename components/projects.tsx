"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "RevvTik – AI Sales Learning Platform",
    category: "SaaS",
    techStack: ["Next.js", "React", "Tailwind CSS", "Supabase", "PostgreSQL", "OpenAI API", "Voice APIs"],
    problem: "Sales professionals lack real-time, personalized feedback during training sessions.",
    solution: "A full-stack AI-powered sales training platform providing real-time feedback through chat and voice-based AI coaching.",
    features: [
      "AI Sales Coach with real-time response evaluation",
      "Voice & chat interaction capabilities",
      "Scalable SaaS architecture",
      "Modern dark-theme UI",
    ],
    impact: "Production-grade SaaS platform empowering sales professionals with AI-driven learning.",
    featured: true,
  },
  {
    title: "AI Tutor / Personal Learning Coach",
    category: "EdTech",
    techStack: ["Python", "PyTorch", "Scikit-learn", "Streamlit", "SQL/MongoDB", "GPT-based NLP"],
    problem: "Traditional learning systems don't adapt to individual learning patterns and behaviors.",
    solution: "An adaptive learning system that personalizes content based on user performance and learning behavior.",
    features: [
      "ML-based content recommendations",
      "GPT-powered doubt solving",
      "Real-time performance feedback",
      "Scalable modular design",
    ],
    impact: "Personalized learning experience improving student engagement and outcomes.",
    featured: true,
  },
  {
    title: "Traffic Sign Recognition System",
    category: "Computer Vision",
    techStack: ["Python", "OpenCV", "TensorFlow", "CNN"],
    problem: "Autonomous vehicles need reliable real-time traffic sign detection and classification.",
    solution: "Real-time traffic sign detection and classification system using Convolutional Neural Networks.",
    features: [
      "Image preprocessing pipeline",
      "Real-time webcam detection",
      "High accuracy classification",
    ],
    impact: "Enhanced road safety through accurate real-time sign recognition.",
    featured: false,
  },
  {
    title: "Medical Image Classification System",
    category: "Healthcare AI",
    techStack: ["TensorFlow", "CNN", "Python"],
    problem: "Manual medical image analysis is time-consuming and prone to human error.",
    solution: "Deep learning system for medical image classification achieving ~92% accuracy.",
    features: [
      "High-accuracy disease classification",
      "Optimized CNN architecture",
      "Scalable inference pipeline",
    ],
    impact: "Potential to assist medical professionals in faster, more accurate diagnoses.",
    featured: false,
  },
  {
    title: "AI Voice Assistant (Advanced ARU)",
    category: "NLP",
    techStack: ["Python", "Speech Recognition", "NLP", "APIs"],
    problem: "Existing voice assistants lack intelligent fallback logic for complex queries.",
    solution: "A smart AI voice assistant capable of executing commands with intelligent context-aware fallback logic.",
    features: [
      "Natural language command processing",
      "Multi-API integration",
      "Intelligent error handling",
    ],
    impact: "Enhanced user experience through smarter voice-based interactions.",
    featured: false,
  },
  {
    title: "Cognitive Load Estimation System",
    category: "BCI",
    techStack: ["Python", "EEG Data", "Machine Learning", "Signal Processing"],
    problem: "Understanding cognitive load is crucial for adaptive learning and workplace safety.",
    solution: "Real-time cognitive load estimation using EEG signals and machine learning models.",
    features: [
      "EEG signal processing",
      "Real-time load estimation",
      "ML model optimization",
    ],
    impact: "Enables adaptive systems to respond to user's mental state in real-time.",
    featured: true,
  },
  {
    title: "Brain-Controlled Games (BCI)",
    category: "BCI",
    techStack: ["Python", "BrainFlow SDK", "EEG", "ML"],
    problem: "Traditional gaming interfaces limit accessibility for users with motor impairments.",
    solution: "Brain-computer interface enabling game control using EEG signals.",
    features: [
      "BrainFlow SDK integration",
      "Real-time EEG processing",
      "Gesture classification",
    ],
    impact: "Opens gaming accessibility for users with physical limitations.",
    featured: false,
  },
  {
    title: "AI Music Genre Classification",
    category: "Audio AI",
    techStack: ["Python", "Machine Learning", "Audio Signal Processing"],
    problem: "Manual music categorization doesn't scale for large audio libraries.",
    solution: "Audio intelligence system for classifying music genres using machine learning.",
    features: [
      "Audio feature extraction",
      "Multi-genre classification",
      "Spectrogram analysis",
    ],
    impact: "Automated music organization for streaming platforms and libraries.",
    featured: false,
  },
]

export function Projects() {
  const [showAll, setShowAll] = useState(false)
  const displayedProjects = showAll ? projects : projects.slice(0, 4)

  return (
    <section id="projects" className="py-24 relative bg-secondary/30">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
              Featured Work
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Projects & Solutions
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A collection of production-grade AI/ML solutions spanning from SaaS platforms 
              to brain-computer interfaces.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {displayedProjects.map((project, idx) => {
              return (
                <div
                  key={project.title}
                  className={`glass-card rounded-2xl p-8 hover:border-primary/30 transition-all duration-300 group ${
                    project.featured ? "ring-1 ring-primary/20" : ""
                  }`}
                >
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      
                      <span className="text-xs font-mono text-accent uppercase tracking-wider">
                        {project.category}
                      </span>
                    </div>
                    {project.featured && (
                      <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-md">
                        Featured
                      </span>
                    )}
                  </div>

                  {/* Title */}
                  <h4 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h4>

                  {/* Problem & Solution */}
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                    {project.solution}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6">
                    {project.features.slice(0, 3).map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 4 && (
                      <span className="px-2 py-1 rounded-md text-xs font-medium bg-muted text-muted-foreground">
                        +{project.techStack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Impact */}
                  <p className="text-xs text-primary font-medium">
                    {project.impact}
                  </p>
                </div>
              )
            })}
          </div>

          {/* Show more button */}
          {projects.length > 4 && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                size="lg"
                onClick={() => setShowAll(!showAll)}
                className="border-border hover:bg-secondary hover:text-secondary-foreground"
              >
                {showAll ? "Show Less" : `View All ${projects.length} Projects`}
              </Button>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
