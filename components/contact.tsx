"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Send, Mail, Check, Circle, MessageSquare, AlertCircle } from "lucide-react"

const EMAIL = "gonzaorban@gmail.com"

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)
    
    const form = e.currentTarget
    const formData = new FormData(form)
    
    // Validate email format
    const email = formData.get("email") as string
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email || !emailRegex.test(email)) {
      setError("Por favor, ingresa un correo electrónico válido.")
      setIsSubmitting(false)
      return
    }
    
    try {
      const response = await fetch("https://formspree.io/f/xnjkpkpy", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      })
      
      if (response.ok) {
        setIsSubmitted(true)
        form.reset()
      } else {
        const data = await response.json()
        if (data.errors) {
          setError(data.errors.map((err: { message: string }) => err.message).join(", "))
        } else {
          setError("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.")
        }
      }
    } catch (err) {
      console.error("Error sending form:", err)
      setError("Error de conexión. Por favor, verifica tu conexión a internet e intenta nuevamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contacto" className="scroll-mt-20 py-20">
      <div className="container-wide">
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
            <div className="card-anim rounded-xl border border-border/40 p-5 bg-secondary/15">
              <div className="flex items-center gap-3 mb-3">
                <Circle className="w-3 h-3 fill-primary text-primary animate-pulse" />
                <span className="text-sm font-medium text-foreground">Estado</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Disponible para proyectos y consultas técnicas
              </p>
            </div>

            {/* Direct Email */}
            <a
              href={`mailto:${EMAIL}`}
              className="card-anim group flex items-center gap-3 rounded-xl border border-border/40 p-5 bg-secondary/15"
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
            <div className="card-anim card-static rounded-xl border border-border/40 p-6 md:p-8 bg-secondary/15">
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
                  {/* Error Message */}
                  {error && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-start gap-3 p-4 rounded-lg bg-red-500/10 border border-red-500/20"
                    >
                      <AlertCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                      <div>
                        <p className="text-sm text-red-500 font-medium">Error al enviar</p>
                        <p className="text-xs text-red-600 dark:text-red-400 mt-1">{error}</p>
                      </div>
                    </motion.div>
                  )}

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
