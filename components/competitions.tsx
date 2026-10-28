"use client"

import { motion } from "framer-motion"
import {
  Trophy,
  Lightbulb,
  Medal,
  FileCode,
  CheckCircle2,
  Smartphone,
  Route,
  Github,
  Linkedin,
  PlayCircle,
  MonitorSmartphone,
} from "lucide-react"

interface CompetitionLink {
  url: string
  label: string
  kind: "repo" | "linkedin" | "video" | "prototype"
}

interface Competition {
  title: string
  role: string
  context?: string
  placement?: string
  description: string
  highlights: { icon: typeof Trophy; text: string }[]
  // Solo tecnologias; las competencias sin stack propio no lo llevan
  tech?: string[]
  icon: typeof Trophy
  accent: "highlight" | "accent"
  links: CompetitionLink[]
}

const competitions: Competition[] = [
  {
    title: "ICPC - TAP",
    role: "Competitive Programmer",
    context: "2025 · 2026",
    description: "Soluciones y entrenamiento para competencias de programación ICPC y TAP.",
    highlights: [
      { icon: FileCode, text: "Algoritmos y estructuras de datos avanzadas" },
      { icon: CheckCircle2, text: "Problemas de competencias oficiales" },
    ],
    tech: ["Python"],
    icon: Trophy,
    accent: "highlight",
    links: [
      { url: "https://github.com/gonzaorban/TAP", label: "Ver Repositorio", kind: "repo" },
      {
        url: "https://www.linkedin.com/posts/gonzaorban_icpc-argentina-2025-icpc-international-activity-7365448215111884801-3Vx6",
        label: "Edición 2025",
        kind: "linkedin",
      },
      {
        url: "https://www.linkedin.com/posts/gonzaorban_icpc-tap-2026-por-segundo-a%C3%B1o-consecutivo-activity-7500567116048252929-UU3n",
        label: "Edición 2026",
        kind: "linkedin",
      },
    ],
  },
  {
    title: "Rally Latinoamericano de Innovación",
    role: "Equipo Big Brain",
    context: "2026",
    placement: "2° · Impacto Social · Sede UTN FRRe",
    description:
      "En 28 horas diseñamos una solución para las veredas en mal estado que limitan la movilidad de muchas personas, sin fabricar hardware nuevo.",
    highlights: [
      { icon: Smartphone, text: "Caminante: celulares en desuso sobre ruedas detectan pozos, grietas y baldosas levantadas" },
      { icon: Route, text: "Caminito: guía por rutas accesibles y aporta evidencia al municipio para priorizar reparaciones" },
    ],
    icon: Lightbulb,
    accent: "accent",
    links: [
      { url: "https://lnkd.in/dg_kgsgT", label: "Video", kind: "video" },
      { url: "https://lnkd.in/d5U5yH-j", label: "Prototipo", kind: "prototype" },
      { url: "https://lnkd.in/p/dUqE2YZ3", label: "LinkedIn", kind: "linkedin" },
    ],
  },
]

const accentStyles: Record<Competition["accent"], { text: string; textHover: string; textSoft: string; bg: string }> = {
  highlight: {
    text: "text-highlight",
    textHover: "group-hover:text-highlight",
    textSoft: "text-highlight/70",
    bg: "bg-highlight/10",
  },
  accent: {
    text: "text-accent",
    textHover: "group-hover:text-accent",
    textSoft: "text-accent/70",
    bg: "bg-accent/10",
  },
}

// Cada tipo de link reutiliza un estilo existente de globals.css
const linkStyles: Record<CompetitionLink["kind"], { icon: typeof Trophy; className: string }> = {
  repo: { icon: Github, className: "link-repo" },
  linkedin: { icon: Linkedin, className: "link-linkedin" },
  video: { icon: PlayCircle, className: "link-live" },
  prototype: { icon: MonitorSmartphone, className: "link-repo" },
}

export function Competitions() {
  return (
    <section id="competencias" className="scroll-mt-20 py-20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <Trophy className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Competencias</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {competitions.map((competition, index) => {
            const accent = accentStyles[competition.accent]
            return (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-anim group flex flex-col rounded-xl border border-border/40 p-6 bg-secondary/15"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${accent.bg} flex items-center justify-center shrink-0`}>
                    <competition.icon className={`w-6 h-6 ${accent.text}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${accent.textHover} transition-colors`}>
                      {competition.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-2 mt-1">
                      <span className={`text-xs font-mono ${accent.text}`}>{competition.role}</span>
                      {competition.context && (
                        <>
                          <span className="text-muted-foreground">·</span>
                          <span className="text-xs text-muted-foreground">{competition.context}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Puesto obtenido */}
                {competition.placement && (
                  <span className="mb-4 inline-flex w-fit items-center gap-1.5 rounded-full border border-highlight/30 bg-highlight/10 px-3 py-1 text-xs font-medium text-highlight">
                    <Medal className="w-3.5 h-3.5" />
                    <span className="font-semibold">Puesto:</span>
                    {competition.placement}
                  </span>
                )}

                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{competition.description}</p>

                <div className="space-y-2 mb-5">
                  {competition.highlights.map((highlight, i) => (
                    <div key={i} className="flex items-start gap-3 text-sm">
                      <highlight.icon className={`w-4 h-4 mt-0.5 shrink-0 ${accent.textSoft}`} />
                      <span className="text-muted-foreground leading-relaxed">{highlight.text}</span>
                    </div>
                  ))}
                </div>

                {/* Pie anclado abajo: tecnologias (si hay) y links */}
                <div className="mt-auto pt-4 border-t border-border/30">
                  {competition.tech && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {competition.tech.map((tech) => (
                        <span key={tech} className="tech-badge">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
                    {competition.links.map((link) => {
                      const style = linkStyles[link.kind]
                      return (
                        <a
                          key={link.url}
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`link-anim ${style.className} text-sm font-medium`}
                        >
                          <style.icon className="w-4 h-4" />
                          {link.label}
                        </a>
                      )
                    })}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
