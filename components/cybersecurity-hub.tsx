"use client"

import { motion } from "framer-motion"
import { Shield, Bug, Lock, Binary, Globe, Key, ExternalLink, Target } from "lucide-react"

const platforms = [
  {
    name: "SoftwareSeguro (Hacklab)",
    description: "Plataforma de entrenamiento en seguridad ofensiva",
    color: "text-purple-400",
    bgColor: "bg-purple-400/10",
    link: "https://softwareseguro.hacklab.com.ar",
    hasProfile: false,
  },
  {
    name: "HackTheBox",
    description: "Laboratorios avanzados de pentesting",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    link: "https://app.hackthebox.com/profile/2634163",
    hasProfile: true,
  },
  {
    name: "TryHackMe",
    description: "Plataforma de aprendizaje en ciberseguridad",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    link: "https://tryhackme.com/p/gonzaorban",
    hasProfile: true,
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

        {/* Platforms */}
        <div className="grid gap-4 md:grid-cols-3 mb-8">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-border/50 p-5 glass glass-hover transition-all duration-300 group flex items-center gap-4"
            >
              <div className={`w-10 h-10 rounded-lg ${platform.bgColor} flex items-center justify-center shrink-0`}>
                <Target className={`w-5 h-5 ${platform.color}`} />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className={`font-semibold text-sm ${platform.color} group-hover:brightness-110 transition-all truncate`}>
                  {platform.name}
                </h3>
                <p className="text-xs text-muted-foreground truncate">
                  {platform.hasProfile ? "Ver mi perfil" : platform.description}
                </p>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
            </motion.a>
          ))}
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
