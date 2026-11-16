"use client"

import { motion } from "framer-motion"
import { CalendarDays, MapPin, Linkedin, ExternalLink, Users } from "lucide-react"

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
  // Un string es un parrafo; una lista se muestra como varios parrafos
  description: string | string[]
  stats?: EventStat[]
  highlights?: { icon: typeof Users; text: string }[]
  icon: typeof Users
  accent: "highlight" | "accent" | "primary"
  links: EventLink[]
}

const events: CommunityEvent[] = []

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
                    {event.location && (
                      <div className="flex items-center gap-1.5 mt-1 text-xs text-muted-foreground">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        {event.location}
                      </div>
                    )}
                  </div>
                </div>

                {/* Cifras del evento */}
                {event.stats && (
                  <dl className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-5">
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
