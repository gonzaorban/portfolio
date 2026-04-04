"use client"

import { motion } from "framer-motion"
import { Terminal } from "./terminal"
import { Github, Linkedin, Mail, MapPin } from "lucide-react"

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const socialLinks = [
  { icon: Github, href: "https://github.com/gonzaorban", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/gonzaorban", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/gonzaorban", label: "X" },
  { icon: Mail, href: "mailto:gonzaorban@gmail.com", label: "Email" },
]

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col justify-center px-4 py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8 flex items-center gap-2 text-muted-foreground"
        >
          <MapPin className="w-4 h-4" />
          <span className="text-sm font-mono">Resistencia, Chaco, Argentina</span>
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-balance"
        >
          <span className="text-foreground">Gonzalo Tomás</span>{" "}
          <span className="text-primary">Orban</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl"
        >
          Desarrollando Sistemas Seguros y Escalables. Apasionado por la arquitectura de software y la ciberseguridad.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex gap-4 mb-12"
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 flex items-center justify-center rounded-lg border border-border/50 text-muted-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 glass glass-hover"
              aria-label={link.label}
            >
              <link.icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>

        <Terminal />
      </div>
    </section>
  )
}
