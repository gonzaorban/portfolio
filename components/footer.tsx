"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Circle } from "lucide-react"

// Custom X (Twitter) icon
const XIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const links = [
  { icon: Github, href: "https://github.com/gonzaorban", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/gonzaorban", label: "LinkedIn" },
  { icon: XIcon, href: "https://x.com/gonzaorban", label: "X" },
  { icon: Mail, href: "mailto:gonzaorban@gmail.com", label: "Email" },
]

const lastUpdatedRaw = process.env.NEXT_PUBLIC_LAST_UPDATED
const lastUpdated = lastUpdatedRaw
  ? new Date(lastUpdatedRaw).toLocaleDateString("es-AR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    })
  : null

export function Footer() {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <span className="font-semibold text-foreground">Gonza Orban</span>
            <span className="text-muted-foreground">·</span>
            <span className="text-sm text-muted-foreground">Backend & Seguridad</span>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4"
          >
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link w-10 h-10 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50"
                aria-label={link.label}
              >
                <link.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>

          {/* System Status */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center gap-2 text-sm"
          >
            <Circle className="w-2 h-2 fill-primary text-primary animate-pulse" />
            <span className="font-mono text-muted-foreground">Estado del Sistema:</span>
            <span className="font-mono text-primary">Online</span>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-6 pt-6 border-t border-border/20 text-center"
        >
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Gonza Orban. Desarrollado con Next.js & Tailwind CSS.
          </p>
          {lastUpdated && (
            <p className="text-xs text-muted-foreground/70 mt-1">
              Última actualización: {lastUpdated}
            </p>
          )}
        </motion.div>
      </div>
    </footer>
  )
}
