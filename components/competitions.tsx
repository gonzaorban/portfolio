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
  Shield,
  ListOrdered,
} from "lucide-react"

interface CompetitionLink {
  url: string
  label: string
  kind: "repo" | "linkedin" | "video" | "prototype" | "ranking"
}

interface Rank {
  position: number
  total: number
}

// Una fila por edicion; la publicacion de LinkedIn de ese anio va en su fila
interface EditionResult {
  edition: string
  regional: Rank
  national: Rank
  linkedinUrl?: string
}

interface Competition {
  title: string
  role: string
  context?: string
  placement?: string
  description: string
  results?: EditionResult[]
  highlights?: { icon: typeof Trophy; text: string }[]
  // Solo tecnologias; las competencias sin stack propio no lo llevan
  tech?: string[]
  icon: typeof Trophy
  accent: "highlight" | "accent" | "primary"
  links: CompetitionLink[]
}

const competitions: Competition[] = [
  {
    title: "ICPC - TAP",
    role: "Competitive Programmer",
    context: "2025 · 2026",
    description: "Soluciones y entrenamiento para competencias de programación ICPC y TAP.",
    results: [
      {
        edition: "2026",
        regional: { position: 5, total: 21 },
        national: { position: 72, total: 186 },
        linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_icpc-tap-2026-por-segundo-a%C3%B1o-consecutivo-activity-7500567116048252929-UU3n",
      },
      {
        edition: "2025",
        regional: { position: 6, total: 13 },
        national: { position: 95, total: 184 },
        linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_icpc-argentina-2025-icpc-international-activity-7365448215111884801-3Vx6",
      },
    ],
    highlights: [
      { icon: FileCode, text: "Algoritmos y estructuras de datos avanzadas" },
      { icon: CheckCircle2, text: "Problemas de competencias oficiales" },
    ],
    tech: ["Python"],
    icon: Trophy,
    accent: "highlight",
    links: [
      { url: "https://github.com/gonzaorban/TAP", label: "Ver Repositorio", kind: "repo" },
    ],
  },
  {
    title: "HackLab",
    role: "CTF Player",
    context: "2025 · 2026",
    description: "Competencia nacional de ciberseguridad de la UTN, disputada en la plataforma SoftwareSeguro.",
    results: [
      {
        edition: "2026",
        regional: { position: 2, total: 22 },
        national: { position: 5, total: 115 },
        linkedinUrl: "https://lnkd.in/p/dmHdpS5Q",
      },
      {
        edition: "2025",
        regional: { position: 9, total: 13 },
        national: { position: 28, total: 74 },
        linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_hacklab-2025-competencia-nacional-de-activity-7382128483705200640-kd0p",
      },
    ],
    icon: Shield,
    accent: "primary",
    links: [
      { url: "https://app.softwareseguro.com.ar/ranking", label: "Ver Ranking", kind: "ranking" },
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
      { url: "https://caminito.vercel.app/", label: "Prototipo", kind: "prototype" },
      { url: "https://lnkd.in/p/dUqE2YZ3", label: "LinkedIn", kind: "linkedin" },
    ],
  },
]

const accentStyles: Record<Competition["accent"], { text: string; textHover: string; textSoft: string; bg: string }> = {
  primary: {
    text: "text-primary",
    textHover: "group-hover:text-primary",
    textSoft: "text-primary/70",
    bg: "bg-primary/10",
  },
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
  ranking: { icon: ListOrdered, className: "link-live" },
}

// Puestos de podio (1.º a 3.º) se destacan con medalla en ambar
function RankCell({ rank }: { rank: Rank }) {
  const podium = rank.position <= 3
  return (
    <span className="inline-flex items-center gap-1 whitespace-nowrap tabular-nums">
      {podium && <Medal aria-label="Podio" className="w-3.5 h-3.5 text-highlight" />}
      <span className={podium ? "font-semibold text-highlight" : "font-medium text-foreground"}>
        {rank.position}.º
      </span>
      <span className="text-muted-foreground">/ {rank.total}</span>
    </span>
  )
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

        {/* Si queda una tarjeta sola en la ultima fila de 2 columnas, ocupa todo el ancho */}
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {competitions.map((competition, index) => {
            const accent = accentStyles[competition.accent]
            return (
              <motion.div
                key={competition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-anim group flex flex-col rounded-xl border border-border/40 p-6 bg-secondary/15 md:last:odd:col-span-2 xl:last:odd:col-span-1"
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

                {competition.results && (
                  <div className="mb-5">
                    <div className="overflow-x-auto rounded-lg border border-border/40">
                      <table className="w-full text-xs sm:text-sm">
                        <thead className="bg-secondary/40 font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                          <tr>
                            <th scope="col" className="px-2 py-2 text-left font-medium sm:px-3">Edición</th>
                            <th scope="col" className="px-2 py-2 text-left font-medium sm:px-3">Regional</th>
                            <th scope="col" className="px-2 py-2 text-left font-medium sm:px-3">Nacional</th>
                            <th scope="col" className="px-2 py-2 sm:px-3">
                              <span className="sr-only">Publicación</span>
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {competition.results.map((result) => (
                            <tr key={result.edition} className="border-t border-border/30">
                              <th scope="row" className="px-2 py-2 text-left font-mono font-medium text-foreground sm:px-3">
                                {result.edition}
                              </th>
                              <td className="px-2 py-2 sm:px-3">
                                <RankCell rank={result.regional} />
                              </td>
                              <td className="px-2 py-2 sm:px-3">
                                <RankCell rank={result.national} />
                              </td>
                              <td className="px-2 py-2 text-right sm:px-3">
                                {result.linkedinUrl && (
                                  <a
                                    href={result.linkedinUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={`Publicación en LinkedIn sobre ${competition.title} ${result.edition}`}
                                    title="Ver publicación en LinkedIn"
                                    className="link-anim link-linkedin"
                                  >
                                    <Linkedin className="w-4 h-4" />
                                  </a>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                    <p className="mt-1.5 text-[11px] text-muted-foreground/70">
                      Regional: sede Resistencia · puesto / total
                    </p>
                  </div>
                )}

                {competition.highlights && (
                  <div className="space-y-2 mb-5">
                    {competition.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <highlight.icon className={`w-4 h-4 mt-0.5 shrink-0 ${accent.textSoft}`} />
                        <span className="text-muted-foreground leading-relaxed">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                )}

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
