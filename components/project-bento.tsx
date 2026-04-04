"use client"

import { motion } from "framer-motion"
import { Folder, ExternalLink, Code2, Trophy, Server, Users } from "lucide-react"

const projects = [
  {
    title: "Sixty Club",
    description: "Aplicación web Fullstack para gestión de clubes con interfaz moderna y Backend robusto.",
    tech: ["Django", "Next.js", "PostgreSQL", "Tailwind"],
    icon: Users,
    span: "md:col-span-2",
    accent: "primary",
  },
  {
    title: "Microservicio de Logística",
    description: "Arquitectura de microservicios escalable con autenticación y autorización segura.",
    tech: ["NestJS", "Keycloak", "MySQL", "Docker"],
    icon: Server,
    span: "md:col-span-1",
    accent: "accent",
  },
  {
    title: "CTF Writeups",
    description: "Documentación de desafíos CTF resueltos en diversas plataformas con explicaciones detalladas.",
    tech: ["Binary Exploitation", "Web Security", "Crypto"],
    icon: Code2,
    span: "md:col-span-1",
    accent: "primary",
  },
  {
    title: "Programación Competitiva",
    description: "Soluciones y entrenamiento para competencias de programación ICPC y TAP.",
    tech: ["ICPC", "TAP", "Algoritmos", "C++"],
    icon: Trophy,
    span: "md:col-span-2",
    accent: "accent",
  },
]

export function ProjectBento() {
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
          <Folder className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Proyectos</h2>
        </motion.div>

        <div className="grid gap-4 md:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg border border-border/50 p-6 glass glass-hover transition-all duration-300 group cursor-pointer ${project.span}`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className={`w-10 h-10 rounded-lg ${project.accent === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center`}>
                  <project.icon className={`w-5 h-5 ${project.accent === 'primary' ? 'text-primary' : 'text-accent'}`} />
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              
              <h3 className={`font-semibold mb-2 group-hover:${project.accent === 'primary' ? 'text-primary' : 'text-accent'} transition-colors`}>
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
