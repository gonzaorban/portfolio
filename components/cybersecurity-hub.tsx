"use client"

import { motion } from "framer-motion"
import { Shield, Bug, Binary, Globe, Key, ExternalLink, Terminal, Target, Flag, Linkedin } from "lucide-react"

const platforms = [
  {
    name: "SoftwareSeguro",
    subtitle: "Hacklab UTN",
    description: "Plataforma de entrenamiento",
    icon: Shield,
    color: "text-purple-400",
    link: "https://app.softwareseguro.com.ar/ranking",
    linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_hacklab-2025-competencia-nacional-de-activity-7382128483705200640-kd0p",
    linkedinText: "Ver publicación de competencia",
  },
  {
    name: "HackTheBox",
    subtitle: null,
    description: "Ver mi perfil",
    icon: Terminal,
    color: "text-green-400",
    link: "https://app.hackthebox.com/profile/2634163",
    linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_participaci%C3%B3n-en-el-university-ctf-2025-activity-7409708585808498688-6-kE",
    linkedinText: "Ver publicación de competencia",
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
    name: "picoCTF",
    subtitle: null,
    description: "Ver mi perfil",
    icon: Flag,
    color: "text-blue-400",
    link: "https://play.picoctf.org/users/gonzaorban",
    linkedinUrl: "https://www.linkedin.com/posts/gonzaorban_participaci%C3%B3n-en-el-picoctf-2026-activity-7441251000369274881-8dTP",
    linkedinText: "Ver publicación de competencia",
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
          <h2 className="text-2xl md:text-3xl font-bold">Hub de Ciberseguridad</h2>
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
                className="rounded-xl border border-border/40 p-5 bg-secondary/10 hover:bg-secondary/20 hover:border-border/60 hover:shadow-lg hover:shadow-black/20 transition-all duration-300 group"
              >
                {/* Icon and Title Row */}
                <div className="flex items-center gap-3 mb-3">
                  <div className={`w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0`}>
                    <IconComponent className={`w-5 h-5 ${platform.color}`} />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors truncate">
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
                  className="flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors mb-2"
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
                    className="flex items-center gap-1.5 text-[11px] text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
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
          Habilidades en Seguridad
        </motion.h3>
        
        <div className="grid gap-4 sm:grid-cols-2">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-border/30 p-4 bg-secondary/20 hover:bg-secondary/30 transition-colors group"
            >
              <div className="flex items-center gap-3 mb-2">
                <skill.icon className="w-4 h-4 text-primary group-hover:text-accent transition-colors" />
                <h4 className="font-medium text-sm">{skill.name}</h4>
              </div>
              <p className="text-xs text-muted-foreground pl-7 mb-3">{skill.description}</p>
              <div className="flex flex-wrap gap-1.5 pl-7">
                {skill.tags.map((tag) => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded bg-primary/10 text-primary/80 font-mono">
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
