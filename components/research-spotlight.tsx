"use client"

import { motion } from "framer-motion"
import { BookOpen, FlaskConical, FileText, Award, Linkedin } from "lucide-react"

export function ResearchSpotlight() {
  return (
    <section className="py-20 px-4 relative">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/3 via-accent/2 to-transparent pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <FlaskConical className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Investigación</h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Research Fellowship Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-lg border border-border/50 p-6 glass glass-hover transition-all duration-300 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Beca de Investigación</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                  Beca CInApTIC
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desarrollo de un Framework de Ciberseguridad integral que incluye controles de seguridad, 
              arquitecturas y sistemas de inteligencia de amenazas para entornos empresariales.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Threat Intel", "Security Controls", "Enterprise Security"].map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Published Paper Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="rounded-lg border border-border/50 p-6 glass glass-hover transition-all duration-300 group"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider">Publicación</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
                  Arquitectura híbrida para la detección de incidentes de seguridad en logs utilizando embeddings y aprendizaje automático clásico
                </h3>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Un enfoque novedoso que combina embeddings y Machine Learning clásico para la detección 
              de incidentes de seguridad en logs de sistemas, mejorando la precisión en la identificación de amenazas.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Embeddings", "Machine Learning", "Logs", "Detección de Anomalías"].map((tag) => (
                <span key={tag} className="text-xs px-2 py-1 rounded-md bg-secondary/50 text-muted-foreground">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* LinkedIn Link */}
            <a
              href="https://www.linkedin.com/posts/gonzaorban_presentamos-nuestro-paper-en-el-13-conaiisi-activity-7393672118036496384-Xelh"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
            >
              <Linkedin className="w-4 h-4" />
              Ver publicación en LinkedIn
            </a>
          </motion.div>
        </div>

        {/* Academic Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8 p-4 rounded-lg border border-border/30 bg-secondary/20 flex items-center gap-4"
        >
          <BookOpen className="w-5 h-5 text-muted-foreground shrink-0" />
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Estudiante de 4to Año</span> — Ingeniería en Sistemas de Información en UTN 
            (Universidad Tecnológica Nacional), Facultad Regional Resistencia, Chaco.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
