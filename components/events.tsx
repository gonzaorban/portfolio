"use client"

import { motion } from "framer-motion"
import {
  CalendarDays,
  MapPin,
  Linkedin,
  ExternalLink,
  Users,
  Mic,
  Handshake,
  Flag,
  Trophy,
  GraduationCap,
} from "lucide-react"

interface EventLink {
  url: string
  label: string
  kind: "linkedin" | "event"
}

interface EventStat {
  value: string
  label: string
}

interface CommunityEvent {
  title: string
  role: string
  date: string
  location?: string
  locationUrl?: string
  // Un string es un parrafo; una lista se muestra como varios parrafos
  description: string | string[]
  stats?: EventStat[]
  // Fotos en public/events; con 3, la primera ocupa todo el ancho en celular
  photos?: { src: string; alt: string }[]
  highlights?: { icon: typeof Users; text: string }[]
  icon: typeof Users
  accent: "highlight" | "accent" | "primary"
  links: EventLink[]
}

const events: CommunityEvent[] = [
  {
    title: "CTF CoNaIISI 2026",
    role: "Co-organizador",
    date: "2026",
    location: "UTN FRRe · Resistencia, Chaco",
    description: [
      "Organizamos junto a un gran equipo una competencia CTF presencial en el marco del CoNaIISI (Congreso Nacional de Ingeniería Informática y Sistemas de Información).",
      "Fue nuestra primera vez organizando un evento así: muchas horas de trabajo y un enorme aprendizaje. Se sumaron desde personas sin experiencia previa en ciberseguridad hasta equipos de regionales de distintos puntos del país.",
    ],
    stats: [
      { value: "12", label: "desafíos web" },
      { value: "3 h", label: "de competencia" },
      { value: "30+", label: "equipos" },
      { value: "100+", label: "participantes" },
    ],
    photos: [
      {
        src: "/events/ctf-conaiisi-2026-publico.jpg",
        alt: "Selfie con el aula llena de participantes del CTF CoNaIISI 2026",
      },
      {
        src: "/events/ctf-conaiisi-2026-competencia.jpg",
        alt: "Collage de equipos resolviendo los desafíos del CTF en distintas aulas y laboratorios",
      },
      {
        src: "/events/ctf-conaiisi-2026-premiacion.jpg",
        alt: "Equipo organizador frente al público durante la premiación, con el ranking proyectado",
      },
      {
        src: "/events/ctf-conaiisi-2026-equipo.jpg",
        alt: "Equipo organizador del CTF CoNaIISI 2026 posando frente al pizarrón",
      },
    ],
    highlights: [
      { icon: Trophy, text: "Entrega de premios a los primeros puestos y sorteo final" },
      {
        icon: Handshake,
        text: "Con el soporte de Germán Nicolás Parisi y GISSIC a través de su plataforma SoftwareSeguro",
      },
      { icon: GraduationCap, text: "Con la colaboración de la UTN FRRe y de Maria Jose Ojeda" },
    ],
    icon: Flag,
    accent: "highlight",
    links: [],
  },
  {
    title: "v0 Meetup Resistencia",
    role: "Co-organizador",
    date: "28/03/2026",
    location: "Casa de las Culturas · Resistencia, Chaco",
    locationUrl: "https://maps.app.goo.gl/wne3rjieS7XVL6kr9",
    description: [
      "Organizamos junto a Alejo Rojas la primera Meetup de v0 by Vercel en Resistencia, con el respaldo oficial de Vercel, para profundizar sobre los desafíos actuales en IA y Ciberseguridad.",
      "Fue la tercera meetup de la comunidad y la primera en la que me sumé a la organización. Cerramos la jornada con un espacio de networking para seguir conectando a la comunidad tecnológica de la región.",
    ],
    stats: [
      { value: "300+", label: "asistentes" },
      { value: "450+", label: "inscriptos" },
      { value: "3.ª", label: "meetup de la comunidad" },
    ],
    photos: [
      {
        src: "/events/v0-meetup-resistencia-publico.jpg",
        alt: "Sala de la Casa de las Culturas llena de asistentes durante la v0 Meetup",
      },
      {
        src: "/events/v0-meetup-resistencia-apertura.jpg",
        alt: "Apertura de la v0 Meetup en el escenario, con el logo de v0 proyectado",
      },
      {
        src: "/events/v0-meetup-resistencia-charla.jpg",
        alt: "Charla sobre gobierno de la ciberseguridad en la era de la IA vista desde el público",
      },
    ],
    highlights: [
      { icon: Mic, text: "Charlas de Diego Bolatti y Gonzalo Ivan Zelinka sobre IA y Ciberseguridad" },
      { icon: Handshake, text: "Organizado con el apoyo del ICCTI Chaco y el equipo de Vercel" },
    ],
    icon: Users,
    accent: "primary",
    links: [{ url: "https://lnkd.in/p/dbJWaZGs", label: "LinkedIn", kind: "linkedin" }],
  },
]

const accentStyles: Record<CommunityEvent["accent"], { text: string; textHover: string; textSoft: string; bg: string }> = {
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
const linkStyles: Record<EventLink["kind"], { icon: typeof Users; className: string }> = {
  linkedin: { icon: Linkedin, className: "link-linkedin" },
  event: { icon: ExternalLink, className: "link-live" },
}

export function Events() {
  return (
    <section id="eventos" className="scroll-mt-20 py-20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <CalendarDays className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Eventos</h2>
        </motion.div>

        {/* Si queda una tarjeta sola en la ultima fila, ocupa todo el ancho */}
        <div className="grid gap-6 md:grid-cols-2">
          {events.map((event, index) => {
            const accent = accentStyles[event.accent]
            return (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-anim group flex flex-col rounded-xl border border-border/40 p-6 bg-secondary/15 md:last:odd:col-span-2"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${accent.bg} flex items-center justify-center shrink-0`}>
                    <event.icon className={`w-6 h-6 ${accent.text}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${accent.textHover} transition-colors`}>{event.title}</h3>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mt-1">
                      <span className={`text-xs font-mono ${accent.text}`}>{event.role}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-xs text-muted-foreground">{event.date}</span>
                    </div>
                    {event.location &&
                      (event.locationUrl ? (
                        <a
                          href={event.locationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Ver ubicación en Google Maps"
                          className="flex w-fit items-center gap-1.5 mt-1 text-xs text-muted-foreground underline-offset-2 transition-colors hover:text-primary hover:underline"
                        >
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {event.location}
                        </a>
                      ) : (
                        <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                          <MapPin className="w-3.5 h-3.5 shrink-0" />
                          {event.location}
                        </div>
                      ))}
                  </div>
                </div>

                {/* Cifras del evento */}
                {event.stats && (
                  <dl
                    className={`grid grid-cols-2 gap-3 mb-5 ${event.stats.length === 4 ? "sm:grid-cols-4" : "sm:grid-cols-3"}`}
                  >
                    {event.stats.map((stat) => (
                      <div key={stat.label} className="rounded-lg border border-border/40 bg-secondary/30 px-3 py-2.5">
                        <dt className="sr-only">{stat.label}</dt>
                        <dd>
                          <span className={`block text-xl font-bold tabular-nums ${accent.text}`}>{stat.value}</span>
                          <span className="block text-xs text-muted-foreground">{stat.label}</span>
                        </dd>
                      </div>
                    ))}
                  </dl>
                )}

                <div className="space-y-3 mb-4">
                  {[event.description].flat().map((paragraph) => (
                    <p key={paragraph} className="text-sm text-muted-foreground leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>

                {/* Con 3 fotos: la primera ancha en celular y 3 columnas despues; con otra cantidad, grilla de 2 */}
                {event.photos && (
                  <div
                    className={`grid grid-cols-2 gap-2 mb-5 ${event.photos.length === 3 ? "sm:grid-cols-3" : ""}`}
                  >
                    {event.photos.map((photo, i) => (
                      <a
                        key={photo.src}
                        href={photo.src}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`block overflow-hidden rounded-lg border border-border/40 ${i === 0 && event.photos!.length === 3 ? "col-span-2 sm:col-span-1" : ""}`}
                      >
                        <img
                          src={photo.src}
                          alt={photo.alt}
                          loading="lazy"
                          className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
                        />
                      </a>
                    ))}
                  </div>
                )}

                {event.highlights && (
                  <div className="space-y-2 mb-5">
                    {event.highlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3 text-sm">
                        <highlight.icon className={`w-4 h-4 mt-0.5 shrink-0 ${accent.textSoft}`} />
                        <span className="text-muted-foreground leading-relaxed">{highlight.text}</span>
                      </div>
                    ))}
                  </div>
                )}

                {/* Pie anclado abajo con los links, solo si hay alguno */}
                {event.links.length > 0 && (
                  <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-border/30">
                    {event.links.map((link) => {
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
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
