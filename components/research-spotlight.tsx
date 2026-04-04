"use client"

import { motion } from "framer-motion"
import { BookOpen, FlaskConical, Award, Linkedin, Microscope } from "lucide-react"

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
              {["Controles de Seguridad", "Arquitecturas", "Threat Intel"].map((tag) => (
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
                <Microscope className="w-6 h-6 text-accent" />
              </div>
              <div>
                <span className="text-xs font-mono text-accent uppercase tracking-wider">Congreso Nacional - CoNaIISI</span>
                <h3 className="text-lg font-semibold mt-1 group-hover:text-accent transition-colors">
                  Arquitectura híbrida para la detección de incidentes de seguridad en logs utilizando embeddings y aprendizaje automático clásico
                </h3>
              </div>
            </div>
            
            {/* Congress Context */}
            <p className="text-xs text-accent/80 font-medium mb-3">
              Presentado en el 13° Congreso Nacional de Ingeniería Informática y Sistemas de Información (Organizado por RIISIC y UTN-FRC)
            </p>
            
            <p className="text-muted-foreground text-sm leading-relaxed">
              Investigación realizada junto a Tomas Duarte donde propusimos un enfoque que combina el análisis semántico de LLMs (Embeddings) con la eficiencia de clasificadores clásicos (Random Forest, SVM). El sistema permite detectar anomalías en logs de seguridad sin depender de grandes volúmenes de datos etiquetados, equilibrando precisión y costo computacional para entornos de SOC reales.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["LLMs", "Random Forest / SVM", "SOC Ready", "Investigación"].map((tag) => (
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
