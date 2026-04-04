"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Github, Linkedin, Mail, Copy, Check, Circle, MessageSquare } from "lucide-react"

const EMAIL = "gonzaorban@gmail.com"

export function Contact() {
  const [copied, setCopied] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const copyEmail = async () => {
    await navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    try {
      const response = await fetch("https://formspree.io/f/xwpkgjkr", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      }
    } catch (error) {
      console.error("Error sending form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-8"
        >
          <MessageSquare className="w-5 h-5 text-primary" />
          <h2 className="text-2xl md:text-3xl font-bold">Contacto</h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Sidebar - Status & Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-6 lg:col-span-1"
          >
            {/* Status Card */}
            <div className="rounded-lg border border-border/50 p-5 glass">
              <div className="flex items-center gap-3 mb-3">
                <Circle className="w-3 h-3 fill-primary text-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">Estado</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Disponible para proyectos y consultas técnicas
              </p>
            </div>

            {/* Quick Links */}
            <div className="rounded-lg border border-border/50 p-5 glass">
              <h3 className="text-sm font-medium text-foreground mb-4">Links Rápidos</h3>
              <div className="space-y-3">
                <a
                  href="https://linkedin.com/in/gonzaorban"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-[#0A66C2] transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-[#0A66C2]/10 transition-colors">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <span>LinkedIn</span>
                </a>
                <a
                  href="https://github.com/gonzaorban"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-secondary transition-colors">
                    <Github className="w-4 h-4" />
                  </div>
                  <span>GitHub</span>
                </a>
                <button
                  onClick={copyEmail}
                  className="flex items-center gap-3 text-sm text-muted-foreground hover:text-primary transition-colors group w-full"
                >
                  <div className="w-9 h-9 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                    {copied ? <Check className="w-4 h-4 text-primary" /> : <Copy className="w-4 h-4" />}
                  </div>
                  <span>{copied ? "Copiado" : "Copiar Email"}</span>
                </button>
              </div>
            </div>

            {/* Direct Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="flex items-center gap-3 rounded-lg border border-border/50 p-5 glass glass-hover transition-all group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-primary" />
              </div>
              <div>
                <span className="text-xs text-muted-foreground block">Email directo</span>
                <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">{EMAIL}</span>
              </div>
            </a>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="rounded-lg border border-border/50 p-6 md:p-8 glass">
              <h3 className="text-lg font-semibold mb-2">Iniciemos una conversación</h3>
              <p className="text-sm text-muted-foreground mb-6">
                Completá el formulario y te respondo a la brevedad.
              </p>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Check className="w-8 h-8 text-primary" />
                  </div>
                  <h4 className="text-lg font-semibold mb-2">Mensaje enviado</h4>
                  <p className="text-sm text-muted-foreground">
                    Gracias por contactarme. Te responderé pronto.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-sm text-primary hover:text-primary/80 transition-colors"
                  >
                    Enviar otro mensaje
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 md:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                        Nombre
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                        placeholder="Tu nombre"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                        Correo electrónico
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                        placeholder="tu@email.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                      Asunto <span className="text-muted-foreground font-normal">(opcional)</span>
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm"
                      placeholder="Asunto del mensaje"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                      Mensaje
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg bg-background border border-border/50 text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all text-sm resize-none"
                      placeholder="Contame sobre tu proyecto o consulta..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full md:w-auto px-8 py-3 rounded-lg bg-primary text-primary-foreground font-medium text-sm flex items-center justify-center gap-2 hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        Enviar mensaje
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
