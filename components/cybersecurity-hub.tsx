"use client"

import { motion } from "framer-motion"
import { Shield, Bug, Binary, Globe, Key, ExternalLink, Terminal, Target, Flag, Linkedin, FileCode, CheckCircle2, GitBranch, Github } from "lucide-react"

const platforms = [
  {
    name: "SoftwareSeguro",
    subtitle: "Hacklab UTN",
    description: "Plataforma de entrenamiento",
    icon: Shield,
    color: "text-purple-400",
    link: "https://app.softwareseguro.com.ar/ranking",
    linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_hacklab-2025-competencia-nacional-de-activity-7382128483705200640-kd0p",
    linkedinText: "HackLab 2025",
  },
  {
    name: "HackTheBox",
    subtitle: null,
    description: "Ver mi perfil",
    icon: Terminal,
    color: "text-green-400",
    link: "https://app.hackthebox.com/profile/2634163",
    linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_participaci%C3%B3n-en-el-university-ctf-2025-activity-7409708585808498688-6-kE",
    linkedinText: "University CTF 2025",
  },
  {
    name: "TryHackMe",
    subtitle: null,
    description: "Ver mi perfil",
    icon: Target,
    color: "text-red-400",
    link: "https://tryhackme.com/p/gonzaorban",
    linkedinUrl: null,
    linkedinText: null,
  },
  {
    name: "CyLab Security Academy",
    subtitle: "Carnegie Mellon",
    description: "Ver mi perfil",
    icon: Flag,
    color: "text-blue-400",
    link: "https://play.picoctf.org/users/gonzaorban",
    linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_participaci%C3%B3n-en-el-picoctf-2026-activity-7441251000369274881-8dTP",
    linkedinText: "picoCTF 2026",
  },
]

const skills = [
  { 
    icon: Globe, 
    name: "Web Security", 
    description: "SQLi, XSS, CSRF, IDOR, Broken Authentication",
    tags: ["OWASP Top 10", "Burp Suite"]
  },
  { 
    icon: Binary, 
    name: "Binary Exploitation", 
    description: "Buffer overflows, ROP chains, format strings",
    tags: ["GDB", "Ghidra"]
  },
  { 
    icon: Key, 
    name: "Criptografía", 
    description: "Análisis de cifrado, cracking de hashes, debilidades de protocolos",
    tags: ["Hashcat", "OpenSSL"]
  },
  { 
    icon: Bug, 
    name: "Reverse Engineering", 
    description: "Análisis de malware, binary patching, deobfuscación",
    tags: ["IDA", "Radare2"]
  },
]

export function CybersecurityHub() {
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
          <Shield className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Ciberseguridad</h2>
        </motion.div>

        {/* Platforms Grid */}
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mb-10">
          {platforms.map((platform, index) => {
            const IconComponent = platform.icon
            return (
              <motion.div
                key={platform.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="card-anim group rounded-xl border border-border/40 p-5 bg-secondary/15"
              >
                {/* Icon and Title Row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0`}>
                    <IconComponent className={`w-5 h-5 ${platform.color}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
                      {platform.name}
                    </h3>
                    {platform.subtitle && (
                      <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                        {platform.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Profile Link */}
                <a
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-anim link-muted text-xs mb-2"
                >
                  <span>{platform.description}</span>
                  <ExternalLink className="w-3 h-3" />
                </a>

                {/* LinkedIn Link */}
                {platform.linkedinUrl && (
                  <a
                    href={platform.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-anim link-linkedin text-[11px]"
                  >
                    <Linkedin className="w-3 h-3" />
                    <span>{platform.linkedinText}</span>
                  </a>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Skills Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-lg font-semibold mb-4 text-muted-foreground"
        >
          Skills
        </motion.h3>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-anim group flex flex-col rounded-xl border border-border/40 p-5 bg-secondary/15"
            >
              {/* Encabezado: icono en recuadro + titulo */}
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
                  <skill.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {skill.name}
                </h4>
              </div>

              <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                {skill.description}
              </p>

              {/* Herramientas */}
              <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-border/30">
                {skill.tags.map((tag) => (
                  <span key={tag} className="tech-badge">
                    {tag}
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
