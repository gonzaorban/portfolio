"use client"

import { motion } from "framer-motion"
import { FlaskConical, Award, Linkedin, Microscope, CheckCircle2 } from "lucide-react"

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
              Desarrollo de un Esquema de Ciberseguridad (Controles, Arquitecturas e Inteligencia de Amenazas) para Entornos Empresariales.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Security Controls", "Architectures", "Threat Intel"].map((tag) => (
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
              13° CoNaIISI (RIISIC / UTN-FRC)
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
                <span key={tag} className="text-xs px-2 py-0.5 rounded-md bg-accent/10 text-accent font-mono">
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
                className="inline-flex items-center gap-1.5 text-xs font-medium text-[#0A66C2] hover:text-[#0A66C2]/80 transition-colors"
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
