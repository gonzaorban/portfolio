"use client"

import { motion } from "framer-motion"
import { FlaskConical, Award, Linkedin, Microscope, CheckCircle2 } from "lucide-react"

export function ResearchSpotlight() {
  return (
    <section id="investigacion" className="scroll-mt-20 py-20 px-4 relative">
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
            className="card-anim group rounded-xl border border-border/40 p-6 bg-secondary/15"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <div>
                <span className="text-xs font-mono text-primary uppercase tracking-wider">Beca de Investigación</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-primary transition-colors">
                  CInApTIC
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Centro de Investigación Aplicada a Tecnologías de la Información y Comunicación
                </p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Desarrollo de un Esquema de Ciberseguridad (Controles, Arquitecturas e Inteligencia de Amenazas) para Entornos Empresariales.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Security Controls", "Architectures", "Threat Intel"].map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>

            {/* Simposio - LinkedIn */}
            <div className="mt-4 pt-4 border-t border-border/30">
              <a
                href="https://www.linkedin.com/posts/gonzaorban_este-s%C3%A1bado-tuvimos-el-orgullo-de-exponer-activity-7469116587887845376-t5LU"
                target="_blank"
                rel="noopener noreferrer"
                className="link-anim link-linkedin text-xs font-medium"
              >
                <Linkedin className="w-3.5 h-3.5" />
                Exposición en el Simposio
              </a>
            </div>
          </motion.div>

          {/* Published Paper Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="card-anim group rounded-xl border border-border/40 p-6 bg-secondary/15"
          >
            <div className="flex items-start gap-4 mb-3">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                <Microscope className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider">Presentación Paper</span>
                <h3 className="text-base font-semibold mt-1 group-hover:text-accent transition-colors leading-snug">
                  Arquitectura híbrida para la detección de incidentes de seguridad en logs utilizando embeddings y aprendizaje automático clásico
                </h3>
              </div>
            </div>
            
            {/* Congress Context - More discrete */}
            <p className="text-[11px] text-muted-foreground/70 mb-3 pl-16">
              13° CoNaIISI (RIISIC / UTN-FRC) · 2025
            </p>
            
            {/* Brief Description */}
            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              Investigación y propuesta de una arquitectura híbrida diseñada para optimizar la detección de amenazas en entornos de SOC reales, desarrollada junto a Tomas Duarte.
            </p>
            
            {/* Key Points */}
            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Objetivo:</span> Equilibrar precisión y costo computacional en el análisis de logs.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Innovación:</span> Uso de Embeddings (LLMs) para análisis semántico sin datos etiquetados masivos.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                <p className="text-xs text-muted-foreground">
                  <span className="text-foreground font-medium">Clasificación:</span> Integración de algoritmos clásicos (Random Forest / SVM) para detección eficiente.
                </p>
              </div>
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-3">
              {["LLMs", "Random Forest", "SVM", "SOC"].map((tag) => (
                <span key={tag} className="tech-badge">
                  {tag}
                </span>
              ))}
            </div>
            
            {/* Status Badge */}
            <div className="flex items-center justify-between flex-wrap gap-3">
              <span className="text-[10px] text-muted-foreground/60 italic">
                Estado: Propuesta de investigación presentada y aprobada por comité académico.
              </span>
              
              {/* LinkedIn Link */}
              <a
                href="https://www.linkedin.com/posts/gonzaorban_presentamos-nuestro-paper-en-el-13-conaiisi-activity-7393672118036496384-Xelh"
                target="_blank"
                rel="noopener noreferrer"
                className="link-anim link-linkedin text-xs font-medium"
              >
                <Linkedin className="w-3.5 h-3.5" />
                LinkedIn
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
