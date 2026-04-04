"use client"

import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Circle } from "lucide-react"

const links = [
  { icon: Github, href: "https://github.com/gonzaorban", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com/in/gonzaorban", label: "LinkedIn" },
  { icon: Mail, href: "mailto:gonzaorban@gmail.com", label: "Email" },
]

export function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-border/30">
      <div className="max-w-5xl mx-auto">
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
            <span className="text-sm text-muted-foreground">Backend & Security</span>
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
                className="w-10 h-10 flex items-center justify-center rounded-lg text-muted-foreground hover:text-primary hover:bg-secondary/50 transition-all"
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
            <span className="font-mono text-muted-foreground">System Status:</span>
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
            © {new Date().getFullYear()} Gonza Orban. Built with Next.js & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}
