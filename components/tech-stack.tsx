"use client"

import { motion } from "framer-motion"
import { Layers, Shield, Wrench, BookOpen, Languages, Code2, Database, Server, Monitor, FlaskConical } from "lucide-react"

const categories = [
  {
    title: "Lenguajes",
    icon: Code2,
    items: ["Python", "TypeScript", "SQL"],
  },
  {
    title: "Backend",
    icon: Server,
    items: ["NestJS", "Django", "FastAPI", "TypeORM", "Django ORM"],
  },
  {
    title: "Frontend",
    icon: Monitor,
    items: ["Next.js", "React", "Tailwind CSS"],
  },
  {
    title: "Bases de Datos",
    icon: Database,
    items: ["PostgreSQL", "MySQL"],
  },
  {
    title: "Testing",
    icon: FlaskConical,
    items: ["Jest", "Supertest", "Cypress"],
  },
  {
    title: "DevOps & Deploy",
    icon: Wrench,
    items: ["Docker", "GitHub Actions", "GHCR", "Vercel", "Cloudflare", "Linux"],
  },
  {
    title: "Seguridad",
    icon: Shield,
    items: ["JWT/OAuth2", "RBAC"],
  },
]

const languages = [
  {
    name: "Español",
    level: "Nativo",
    progress: 100,
    accent: "primary" as const,
    note: "Lengua materna",
  },
  {
    name: "Inglés",
    level: "A2",
    progress: 40,
    accent: "accent" as const,
    note: "En formación activa · lectura técnica y documentación",
  },
]

export function TechStack() {
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
          <Layers className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Stack Tecnológico</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 mb-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card-anim group rounded-xl border border-border/40 p-6 bg-secondary/15"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0 transition-colors duration-300 group-hover:bg-primary/20 group-hover:border-primary/40">
                  <category.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-semibold group-hover:text-primary transition-colors">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span key={item} className="tech-badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Continuous Learning Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="grid gap-4 md:grid-cols-2"
        >
          {/* Languages */}
          <div className="card-anim rounded-xl border border-border/40 p-5 bg-secondary/15">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Languages className="w-4 h-4 text-primary" />
              </div>
              <h4 className="font-semibold text-sm">Idiomas</h4>
            </div>

            <div className="space-y-4">
              {languages.map((lang) => (
                <div key={lang.name}>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-sm font-medium text-foreground">{lang.name}</span>
                    <span
                      className={`text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full ${
                        lang.accent === "primary"
                          ? "bg-primary/15 text-primary border border-primary/25"
                          : "bg-accent/15 text-accent border border-accent/25"
                      }`}
                    >
                      {lang.level}
                    </span>
                  </div>

                  {/* Barra de progreso */}
                  <div className="h-1.5 w-full rounded-full bg-secondary/60 overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${lang.progress}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.9, ease: "easeOut", delay: 0.2 }}
                      className={`h-full rounded-full ${
                        lang.accent === "primary" ? "bg-primary" : "bg-accent"
                      }`}
                    />
                  </div>

                  <p className="text-[11px] text-muted-foreground mt-1.5">{lang.note}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Continuous Learning */}
          <div className="card-anim rounded-xl border border-border/40 p-5 bg-secondary/15">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent/10 border border-accent/20 flex items-center justify-center shrink-0">
                <BookOpen className="w-4 h-4 text-accent" />
              </div>
              <h4 className="font-semibold text-sm">Aprendizaje Continuo</h4>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mejorando activamente mi nivel de inglés mientras me mantengo actualizado con las amenazas 
              de seguridad emergentes y patrones de desarrollo Backend.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
