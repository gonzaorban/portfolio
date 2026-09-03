"use client"

import { motion } from "framer-motion"
import { 
  Folder, 
  Shield, 
  Server, 
  Users, 
  FileCode, 
  Lock, 
  TestTube, 
  GitBranch,
  Container,
  CheckCircle2,
  Boxes,
  Trophy,
  Github,
  Linkedin,
  Globe
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
  accent: "primary" | "accent" | "highlight"
  liveUrl?: string
  repoUrl?: string
  linkedinUrl?: string
  linkedinLinks?: { url: string; label: string }[]
}

const projects: Project[] = [
  {
    title: "Sixty Club",
    role: "Full Stack Developer",
    context: "2026",
    description: "Desarrollo de plataforma integral para gestión de clubes.",
    highlights: [
      { icon: FileCode, text: "Documentación de API con OpenAPI/Swagger" },
      { icon: Lock, text: "Autenticación JWT con rotación de tokens y RBAC" },
      { icon: TestTube, text: "Suite de testing automatizado (Unitario, Integración, Seguridad)" },
      { icon: GitBranch, text: "Scripts Bash con estrategia Fail-Fast" },
    ],
    tech: ["Django", "Next.js", "PostgreSQL", "JWT", "RBAC"],
    icon: Users,
    span: "md:col-span-2",
    accent: "primary",
    liveUrl: "https://www.sixtyclub.win/",
    linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_orgulloso-de-lo-que-logramos-por-mas-proyectos-ugcPost-7458195361224880128-NUhm/",
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
      { icon: Container, text: "Despliegue con Docker" },
    ],
    tech: ["NestJS", "Next.js", "MySQL", "Keycloak", "NGINX"],
    icon: Server,
    span: "md:col-span-2",
    accent: "accent",
    repoUrl: "https://github.com/FRRe-DS/2025-03-TPI",
    linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_de-la-teor%C3%ADa-a-la-pr%C3%A1ctica-microservicios-activity-7402749299010428928-mS7Y",
  },
  {
    title: "ICPC - TAP",
    role: "Competitive Programmer",
    description: "Soluciones y entrenamiento para competencias de programación ICPC y TAP.",
    highlights: [
      { icon: FileCode, text: "Algoritmos y estructuras de datos avanzadas" },
      { icon: CheckCircle2, text: "Problemas de competencias oficiales" },
    ],
    tech: ["Python"],
    icon: Trophy,
    span: "md:col-span-1",
    accent: "highlight",
    repoUrl: "https://github.com/gonzaorban/TAP",
    linkedinLinks: [
      {
        url: "https://www.linkedin.com/posts/gonzaorban_icpc-argentina-2025-icpc-international-activity-7365448215111884801-3Vx6",
        label: "Edición 2025",
      },
      {
        url: "https://www.linkedin.com/posts/gonzaorban_icpc-tap-2026-por-segundo-a%C3%B1o-consecutivo-activity-7500567116048252929-UU3n",
        label: "Edición 2026",
      },
    ],
  },
]

const accentStyles: Record<Project["accent"], {
  text: string
  textHover: string
  textSoft: string
  bg: string
}> = {
  primary: {
    text: "text-primary",
    textHover: "group-hover:text-primary",
    textSoft: "text-primary/70",
    bg: "bg-primary/10",
  },
  accent: {
    text: "text-accent",
    textHover: "group-hover:text-accent",
    textSoft: "text-accent/70",
    bg: "bg-accent/10",
  },
  highlight: {
    text: "text-highlight",
    textHover: "group-hover:text-highlight",
    textSoft: "text-highlight/70",
    bg: "bg-highlight/10",
  },
}

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
          {projects.map((project, index) => {
            const accent = accentStyles[project.accent]
            return (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`card-anim group flex flex-col rounded-xl border border-border/40 p-6 bg-secondary/15 ${project.span}`}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg ${accent.bg} flex items-center justify-center shrink-0`}>
                    <project.icon className={`w-6 h-6 ${accent.text}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${accent.textHover} transition-colors`}>
                      {project.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className={`text-xs font-mono ${accent.text}`}>
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
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Technical Highlights */}
              <div className="space-y-2 mb-5">
                {project.highlights.map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm">
                    <highlight.icon className={`w-4 h-4 mt-0.5 shrink-0 ${accent.textSoft}`} />
                    <span className="text-muted-foreground leading-relaxed">{highlight.text}</span>
                  </div>
                ))}
              </div>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 pt-4 mt-auto border-t border-border/30">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mt-4">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-anim link-live text-sm font-medium"
                  >
                    <Globe className="w-4 h-4" />
                    Ver Deploy
                  </a>
                )}
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-anim link-repo text-sm font-medium"
                  >
                    <Github className="w-4 h-4" />
                    Ver Repositorio
                  </a>
                )}
                {project.linkedinUrl && (
                  <a
                    href={project.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-anim link-linkedin text-sm font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </a>
                )}
                {project.linkedinLinks?.map((item) => (
                  <a
                    key={item.url}
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-anim link-linkedin text-sm font-medium"
                  >
                    <Linkedin className="w-4 h-4" />
                    {item.label}
                  </a>
                ))}
              </div>
            </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
