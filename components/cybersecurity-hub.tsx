"use client"

import { motion } from "framer-motion"
import { Shield, Bug, Binary, Globe, Key, ExternalLink, Terminal, Target, Flag, Linkedin, FileCode, CheckCircle2, GitBranch, Github, FileSearch } from "lucide-react"

const platforms = [
  {
    name: "SoftwareSeguro",
    subtitle: "Hacklab UTN",
    description: "Plataforma de entrenamiento",
    icon: Shield,
    color: "text-purple-400",
    link: "https://app.softwareseguro.com.ar/ranking",
    linkedinPosts: [
      {
        url: "https://www.linkedin.com/posts/gonzaorban_hacklab-2025-competencia-nacional-de-activity-7382128483705200640-kd0p",
        text: "HackLab 2025",
      },
      {
        url: "https://lnkd.in/p/dmHdpS5Q",
        text: "HackLab 2026",
      },
    ],
  },
  {
    name: "HackTheBox",
    subtitle: null,
    description: "Ver mi perfil",
    icon: Terminal,
    color: "text-green-400",
    link: "https://app.hackthebox.com/users/2634163?profile-top-tab=machines&ownership-period=1M&profile-bottom-tab=prolabs",
    linkedinPosts: [
      {
        url: "https://www.linkedin.com/posts/gonzaorban_participaci%C3%B3n-en-el-university-ctf-2025-activity-7409708585808498688-6-kE",
        text: "University CTF 2025",
      },
    ],
  },
  {
    name: "TryHackMe",
    subtitle: null,
    description: "Ver mi perfil",
    icon: Target,
    color: "text-red-400",
    link: "https://tryhackme.com/p/gonzaorban",
    linkedinPosts: [],
  },
  {
    name: "CyLab Security Academy",
    subtitle: null,
    description: "Ver mi perfil",
    icon: Flag,
    color: "text-blue-400",
    link: "https://learn.cylabacademy.org/users/gonzaorban",
    linkedinPosts: [
      {
        url: "https://www.linkedin.com/posts/gonzaorban_participaci%C3%B3n-en-el-picoctf-2026-activity-7441251000369274881-8dTP",
        text: "picoCTF 2026",
      },
    ],
  },
]

const skills = [
  {
    icon: Globe,
    name: "Web Security",
    description: "Race conditions, mass assignment, JWT forgery, CSP bypass, IDOR, SQLi, XSS",
    tags: ["Burp Suite", "Turbo Intruder", "OWASP Top 10"]
  },
  {
    icon: Binary,
    name: "Binary Exploitation",
    description: "Buffer overflows, análisis de binarios, debugging dinámico",
    tags: ["GDB", "Ghidra", "pwntools"]
  },
  {
    icon: Key,
    name: "Cryptography",
    description: "Ataques RSA (factor común), cifrados custom por análisis estadístico, cracking de hashes salteados",
    tags: ["Hashcat", "OpenSSL", "Python"]
  },
  {
    icon: Bug,
    name: "Reverse Engineering",
    description: "Reversing de APK, análisis estático, deobfuscación",
    tags: ["jadx", "apktool", "Ghidra"]
  },
  {
    icon: FileSearch,
    name: "Forensics",
    description: "Recuperación de imágenes por lógica de paridad, inyección y análisis de metadata",
    tags: ["ExifTool", "binwalk"]
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
                className="card-anim group flex h-full flex-col rounded-xl border border-border/40 p-5 bg-secondary/15"
              >
                {/* Icon and Title Row */}
                <div className="flex items-start gap-3 mb-4">
                  <div className={`w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0`}>
                    <IconComponent className={`w-5 h-5 ${platform.color}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug text-balance">
                      {platform.name}
                    </h3>
                    {platform.subtitle && (
                      <span className="mt-1 block text-[10px] text-muted-foreground font-mono uppercase tracking-wider">
                        {platform.subtitle}
                      </span>
                    )}
                  </div>
                </div>

                {/* Links: cada uno en su propia linea, anclados al pie */}
                <div className="mt-auto flex flex-col items-start gap-2 pt-1">
                  <a
                    href={platform.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-anim link-muted text-xs"
                  >
                    <span>{platform.description}</span>
                    <ExternalLink className="w-3 h-3 shrink-0" />
                  </a>

                  {platform.linkedinPosts.length > 0 ? (
                    platform.linkedinPosts.map((post) => (
                      <a
                        key={post.url}
                        href={post.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="link-anim link-linkedin text-[11px]"
                      >
                        <Linkedin className="w-3 h-3 shrink-0" />
                        <span>{post.text}</span>
                      </a>
                    ))
                  ) : (
                    /* Reserva el alto del segundo link para que las tarjetas
                       sin publicacion no queden desalineadas */
                    <span aria-hidden="true" className="text-[11px] leading-4 invisible">
                      &nbsp;
                    </span>
                  )}
                </div>
              </motion.div>
            )
          })}
        </div>

        {/* Writeups Repo */}
        <motion.a
          href="https://github.com/gonzaorban/CTF-Writeups"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card-anim group mb-10 flex items-center gap-4 rounded-xl border border-border/40 p-5 bg-secondary/15"
        >
          <div className="w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center shrink-0">
            <Github className="w-5 h-5 text-foreground" />
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-semibold text-sm text-foreground group-hover:text-primary transition-colors leading-snug">
              Writeups de CTFs
            </h3>
            <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
              Resoluciones documentadas de maquinas y desafios que fui completando
            </p>
          </div>
          <span className="link-anim link-muted text-xs shrink-0 transition-colors group-hover:text-foreground group-hover:after:scale-x-100 group-hover:[&>svg]:translate-x-px group-hover:[&>svg]:scale-110">
            <span className="hidden sm:inline">Ver repositorio</span>
            <ExternalLink className="w-3 h-3 shrink-0" />
          </span>
        </motion.a>

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
