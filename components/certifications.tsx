"use client"

import { motion } from "framer-motion"
import { Award, BadgeCheck, CalendarDays, Clock, FileText, Shield, Network } from "lucide-react"

interface CertificationLink {
  url: string
  label: string
  kind: "pdf" | "credential"
}

interface Certification {
  title: string
  issuer: string
  // Fecha de emision, en dd/mm/aaaa como en Eventos
  date: string
  duration?: string
  description: string
  // Vista previa en public/certificates, generada a partir de la primera pagina del PDF
  preview: { src: string; alt: string }
  icon: typeof Award
  accent: "highlight" | "accent" | "primary"
  links: CertificationLink[]
}

// Ordenadas de la mas reciente a la mas antigua
const certifications: Certification[] = [
  {
    title: "API Security Fundamentals '25",
    issuer: "APIsec University",
    date: "11/09/2026",
    duration: "2 horas",
    description: "Curso sobre los fundamentos de la seguridad en APIs, dictado por APIsec University.",
    preview: {
      src: "/certificates/apisec-api-security-fundamentals-2025.jpg",
      alt: "Certificado de finalización del curso API Security Fundamentals '25 de APIsec University",
    },
    icon: Shield,
    accent: "accent",
    links: [
      {
        url: "/certificates/apisec-api-security-fundamentals-2025.pdf",
        label: "Ver certificado",
        kind: "pdf",
      },
      {
        url: "https://www.credly.com/badges/0fa3d2c4-f58b-4158-87ed-bb5d18b66484",
        label: "Credly",
        kind: "credential",
      },
    ],
  },
  {
    title: "Introducción a la Ciberseguridad",
    issuer: "Cisco Networking Academy",
    date: "19/02/2026",
    description: "Curso introductorio de ciberseguridad ofrecido a través del programa Cisco Networking Academy.",
    preview: {
      src: "/certificates/cisco-introduccion-ciberseguridad.jpg",
      alt: "Certificado de finalización del curso Introducción a la Ciberseguridad de Cisco Networking Academy",
    },
    icon: Network,
    accent: "primary",
    links: [
      {
        url: "/certificates/cisco-introduccion-ciberseguridad.pdf",
        label: "Ver certificado",
        kind: "pdf",
      },
    ],
  },
]

const accentStyles: Record<Certification["accent"], { text: string; textHover: string; bg: string }> = {
  primary: { text: "text-primary", textHover: "group-hover:text-primary", bg: "bg-primary/10" },
  highlight: { text: "text-highlight", textHover: "group-hover:text-highlight", bg: "bg-highlight/10" },
  accent: { text: "text-accent", textHover: "group-hover:text-accent", bg: "bg-accent/10" },
}

// Cada tipo de link reutiliza un estilo existente de globals.css
const linkStyles: Record<CertificationLink["kind"], { icon: typeof Award; className: string }> = {
  pdf: { icon: FileText, className: "link-live" },
  credential: { icon: BadgeCheck, className: "link-repo" },
}

export function Certifications() {
  return (
    <section id="certificaciones" className="scroll-mt-20 py-20">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <Award className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Certificaciones</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {certifications.map((cert, index) => {
            const accent = accentStyles[cert.accent]
            const pdf = cert.links.find((link) => link.kind === "pdf")
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-anim group flex flex-col rounded-xl border border-border/40 p-6 bg-secondary/15"
              >
                {/* Header */}
                <div className="flex items-start gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-lg ${accent.bg} flex items-center justify-center shrink-0`}>
                    <cert.icon className={`w-6 h-6 ${accent.text}`} />
                  </div>
                  <div>
                    <h3 className={`font-semibold text-lg ${accent.textHover} transition-colors`}>{cert.title}</h3>
                    <span className={`block mt-1 text-xs font-mono ${accent.text}`}>{cert.issuer}</span>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1.5">
                        <CalendarDays className="w-3.5 h-3.5 shrink-0" />
                        {cert.date}
                      </span>
                      {cert.duration && (
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3.5 h-3.5 shrink-0" />
                          {cert.duration}
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground leading-relaxed mb-5">{cert.description}</p>

                {/* Vista previa del certificado; abre el PDF completo */}
                <a
                  href={pdf?.url ?? cert.preview.src}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block overflow-hidden rounded-lg border border-border/40 bg-white mb-5"
                >
                  <img
                    src={cert.preview.src}
                    alt={cert.preview.alt}
                    loading="lazy"
                    className="aspect-[4/3] w-full object-contain transition-transform duration-500 hover:scale-105"
                  />
                </a>

                {/* Pie anclado abajo con los links */}
                <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 border-t border-border/30">
                  {cert.links.map((link) => {
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
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
