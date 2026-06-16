"use client"

import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    label: "Email",
    value: "adityashastri76@gmail.com",
    href: "mailto:adityashastri76@gmail.com",
  },
  {
    label: "Phone",
    value: "+91 7291065509",
    href: "tel:+917291065509",
  },
  {
    label: "Location",
    value: "India",
    href: null,
  },
]

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/Addy888/Addy888",
    username: "@Addy888",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/aditya-shastri-77b662245/",
    username: "Aditya Shastri",
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-24 relative bg-secondary/30">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-sm font-mono text-primary mb-4 tracking-wider uppercase">
              Get in Touch
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              {"Let's Connect"}
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Interested in collaborating on AI/ML projects or have an opportunity to discuss? 
              Feel free to reach out.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Contact Information</h4>
              
              {contactInfo.map((item, index) => {
                const content = (
                  <div key={index} className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group">
                    <div className="flex items-center gap-4">
                      
                      <div>
                        <p className="text-sm text-muted-foreground">{item.label}</p>
                        <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                          {item.value}
                        </p>
                      </div>
                      
                    </div>
                  </div>
                )
                
                return item.href ? (
                  <a key={index} href={item.href} className="block">
                    {content}
                  </a>
                ) : (
                  <div key={index}>{content}</div>
                )
              })}
            </div>

            {/* Social links & CTA */}
            <div className="space-y-6">
              <h4 className="text-lg font-semibold text-foreground mb-4">Social Profiles</h4>
              
              {socialLinks.map((link, index) => {
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <div className="glass-card rounded-xl p-5 hover:border-primary/30 transition-all duration-300 group">
                      <div className="flex items-center gap-4">
                        
                        <div>
                          <p className="text-sm text-muted-foreground">{link.label}</p>
                          <p className="font-medium text-foreground group-hover:text-primary transition-colors">
                            {link.username}
                          </p>
                        </div>
                        
                      </div>
                    </div>
                  </a>
                )
              })}

              {/* CTA */}
              <div className="glass-card rounded-xl p-8 mt-8">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Ready to work together?
                </h4>
                <p className="text-muted-foreground mb-6 text-sm">
                  {"I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision."}
                </p>
                <a href="mailto:adityashastri76@gmail.com">
                  <Button
                    size="lg"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90 glow-cyan"
                  >
                    
                    Send me an Email
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
