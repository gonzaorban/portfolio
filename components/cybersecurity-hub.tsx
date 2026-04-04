"use client"

import { motion } from "framer-motion"
import { Shield, Bug, Lock, Binary, Globe, Key, ExternalLink } from "lucide-react"

const platforms = [
  {
    name: "TryHackMe",
    description: "Learning platform for cybersecurity skills",
    color: "text-red-400",
    bgColor: "bg-red-400/10",
    link: "#",
  },
  {
    name: "HackTheBox",
    description: "Advanced penetration testing labs",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    link: "#",
  },
]

const skills = [
  { icon: Binary, name: "Binary Exploitation", description: "Buffer overflows, ROP chains, format strings" },
  { icon: Globe, name: "Web Security", description: "IDOR, XSS, SQLi, SSRF, Authentication Bypass" },
  { icon: Key, name: "Cryptography", description: "Encryption analysis, hash cracking, protocol weaknesses" },
  { icon: Bug, name: "Reverse Engineering", description: "Malware analysis, binary patching, deobfuscation" },
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
          <h2 className="text-2xl md:text-3xl font-bold">Cybersecurity Hub</h2>
        </motion.div>

        {/* Platforms */}
        <div className="grid gap-4 md:grid-cols-2 mb-8">
          {platforms.map((platform, index) => (
            <motion.a
              key={platform.name}
              href={platform.link}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="rounded-lg border border-border/50 p-6 glass glass-hover transition-all duration-300 group flex items-center justify-between"
            >
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-lg ${platform.bgColor} flex items-center justify-center`}>
                  <Lock className={`w-6 h-6 ${platform.color}`} />
                </div>
                <div>
                  <h3 className={`font-semibold ${platform.color} group-hover:brightness-110 transition-all`}>
                    {platform.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">{platform.description}</p>
                </div>
              </div>
              <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
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
          Security Skills
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
              <p className="text-xs text-muted-foreground pl-7">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
