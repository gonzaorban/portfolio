"use client"

import { motion } from "framer-motion"
import { 
  Folder, 
  ExternalLink, 
  Shield, 
  Server, 
  Users, 
  FileCode, 
  Lock, 
  TestTube, 
  GitBranch,
  Container,
  CheckCircle2,
  Boxes
} from "lucide-react"

interface ProjectHighlight {
  icon: typeof Shield
  text: string
}

interface Project {
  title: string
  role: string
  context?: string
  description: string
  highlights: ProjectHighlight[]
  tech: string[]
  icon: typeof Shield
  span: string
  accent: "primary" | "accent"
}

const projects: Project[] = [
  {
    title: "Sixty Club",
    role: "Full Stack Developer",
    description: "Desarrollo de plataforma integral para gestión de clubes con Django y Next.js.",
    highlights: [
      { icon: FileCode, text: "Documentación de API con OpenAPI/Swagger" },
      { icon: Lock, text: "Autenticación JWT con rotación de tokens y RBAC" },
      { icon: TestTube, text: "Suite de testing automatizado (Unitario, Integración, Seguridad)" },
      { icon: GitBranch, text: "Scripts Bash con estrategia Fail-Fast" },
    ],
    tech: ["Django", "Next.js", "PostgreSQL", "JWT", "OpenAPI"],
    icon: Users,
    span: "md:col-span-2",
    accent: "primary",
  },
  {
    title: "Módulo Logística E-Commerce",
    role: "Backend Developer",
    context: "Proyecto Académico UTN 2025",
    description: "Co-desarrollo en ecosistema de microservicios (equipo de 30 personas), liderando el módulo de Logística.",
    highlights: [
      { icon: Boxes, text: "Clean Architecture y principios SOLID" },
      { icon: Shield, text: "DTOs para validación (prevención Mass Assignment)" },
      { icon: Lock, text: "Seguridad con Keycloak (SSO) y NGINX" },
      { icon: Container, text: "Docker y CI/CD con GitHub Actions" },
    ],
    tech: ["NestJS", "TypeORM", "Keycloak", "MySQL", "Docker"],
    icon: Server,
    span: "md:col-span-2",
    accent: "accent",
  },
  {
    title: "Seguridad & CTF",
    role: "Security Researcher",
    description: "Entrenamiento activo en plataformas de ciberseguridad con enfoque en vulnerabilidades web.",
    highlights: [
      { icon: Shield, text: "SoftwareSeguro (Hacklab), HackTheBox, TryHackMe" },
      { icon: CheckCircle2, text: "SQLi, XSS, CSRF, IDOR, Broken Authentication" },
      { icon: FileCode, text: "Burp Suite y scripts de automatización en Python" },
      { icon: GitBranch, text: "Análisis de código fuente y parches correctivos" },
    ],
    tech: ["OWASP", "Burp Suite", "Python", "Web Security"],
    icon: Shield,
    span: "md:col-span-2",
    accent: "primary",
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
          <h2 className="text-2xl md:text-3xl font-bold">Experiencia y Proyectos</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`rounded-lg border border-border/50 p-6 glass glass-hover transition-all duration-300 group ${project.span}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${project.accent === 'primary' ? 'bg-primary/10' : 'bg-accent/10'} flex items-center justify-center shrink-0`}>
                    <project.icon className={`w-6 h-6 ${project.accent === 'primary' ? 'text-primary' : 'text-accent'}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg group-hover:${project.accent === 'primary' ? 'text-primary' : 'text-accent'} transition-colors`}>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className={`text-xs font-mono ${project.accent === 'primary' ? 'text-primary' : 'text-accent'}`}>
                        {project.role}
                      </span>
                      {project.context && (
                        <>
                          <span className="text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">{project.context}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>
                <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technical Highlights */}
              <div className="space-y-2 mb-5">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <highlight.icon className={`w-4 h-4 mt-0.5 shrink-0 ${project.accent === 'primary' ? 'text-primary/70' : 'text-accent/70'}`} />
                    <span className="text-muted-foreground leading-relaxed">{highlight.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 border-t border-border/30">
                {project.tech.map((tech) => (
                  <span 
                    key={tech} 
                    className="text-xs px-2.5 py-1 rounded-md bg-secondary/50 text-muted-foreground font-mono hover:text-foreground hover:bg-secondary/80 transition-colors"
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
