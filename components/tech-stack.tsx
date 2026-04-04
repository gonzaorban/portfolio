"use client"

import { motion } from "framer-motion"
import { Layers, Server, Shield, Wrench, BookOpen, Languages } from "lucide-react"

const categories = [
  {
    title: "Backend",
    icon: Server,
    color: "text-primary",
    bgColor: "bg-primary/10",
    items: ["Python", "Django", "NestJS", "Node.js", "PostgreSQL", "MySQL", "Redis"],
  },
  {
    title: "Security",
    icon: Shield,
    color: "text-accent",
    bgColor: "bg-accent/10",
    items: ["Keycloak", "OWASP", "Burp Suite", "Wireshark", "Nmap", "Ghidra", "IDA"],
  },
  {
    title: "Tools",
    icon: Wrench,
    color: "text-yellow-400",
    bgColor: "bg-yellow-400/10",
    items: ["Git", "Docker", "Linux", "VS Code", "Postman", "GitHub Actions"],
  },
]

export function TechStack() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <Layers className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Tech Stack & Skills</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3 mb-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-border/50 p-6 glass"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg ${category.bgColor} flex items-center justify-center`}>
                  <category.icon className={`w-5 h-5 ${category.color}`} />
                </div>
                <h3 className="font-semibold">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span 
                    key={item} 
                    className="text-xs px-2.5 py-1.5 rounded-md bg-secondary/50 text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {/* Languages */}
          <div className="rounded-lg border border-border/30 p-4 bg-secondary/20">
            <div className="flex items-center gap-3 mb-3">
              <Languages className="w-4 h-4 text-muted-foreground" />
              <h4 className="font-medium text-sm">Languages</h4>
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">Spanish</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary">Native</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">English</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-accent/20 text-accent">A2 - Learning</span>
              </div>
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="rounded-lg border border-border/30 p-4 bg-secondary/20">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-4 h-4 text-muted-foreground" />
              <h4 className="font-medium text-sm">Continuous Learning</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Actively improving English proficiency while staying current with 
              emerging security threats and backend development patterns.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
