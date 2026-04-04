"use client"

import { motion } from "framer-motion"
import { Shield, Bug, Binary, Globe, Key, ExternalLink } from "lucide-react"
import Image from "next/image"

const platforms = [
  {
    name: "SoftwareSeguro",
    subtitle: "Hacklab",
    description: "Plataforma de entrenamiento",
    logo: "/logos/softwareseguro.jpg",
    link: "https://softwareseguro.hacklab.com.ar",
    hasProfile: false,
  },
  {
    name: "HackTheBox",
    subtitle: null,
    description: "Ver mi perfil",
    logo: "/logos/hackthebox.jpg",
    link: "https://app.hackthebox.com/profile/2634163",
    hasProfile: true,
  },
  {
    name: "TryHackMe",
    subtitle: null,
    description: "Ver mi perfil",
    logo: "/logos/tryhackme.jpg",
    link: "https://tryhackme.com/p/gonzaorban",
    hasProfile: true,
  },
  {
    name: "picoCTF",
    subtitle: "CMU",
    description: "Ver mi perfil",
    logo: "/logos/picoctf.jpg",
    link: "https://play.picoctf.org/users/gonzaorban",
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

        {/* Platforms Grid - 2x2 on mobile, 4 columns on large */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 mb-10">
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
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 0 20px rgba(16, 185, 129, 0.15)"
              }}
              className="relative overflow-hidden rounded-xl border border-border/40 p-5 bg-background/40 backdrop-blur-md hover:border-primary/50 transition-all duration-300 group flex flex-col items-center text-center"
            >
              {/* Glow effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Logo Container */}
              <div className="relative w-full h-16 mb-4 flex items-center justify-center">
                <Image
                  src={platform.logo}
                  alt={`${platform.name} logo`}
                  width={120}
                  height={48}
                  className="object-contain max-h-12 w-auto brightness-90 group-hover:brightness-110 transition-all duration-300"
                />
              </div>
              
              {/* Platform Info */}
              <div className="relative z-10 flex-1 flex flex-col justify-center">
                <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors">
                  {platform.name}
                </h3>
                {platform.subtitle && (
                  <span className="text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                    {platform.subtitle}
                  </span>
                )}
                <p className="text-xs text-muted-foreground mt-1 group-hover:text-foreground/70 transition-colors">
                  {platform.description}
                </p>
              </div>
              
              {/* External Link Icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <ExternalLink className="w-3.5 h-3.5 text-primary" />
              </div>
              
              {/* Bottom border glow */}
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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
