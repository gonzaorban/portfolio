"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

const sections = [
  { id: "experiencia", label: "Experiencia" },
  { id: "investigacion", label: "Investigación" },
  { id: "ciberseguridad", label: "Ciberseguridad" },
  { id: "stack", label: "Stack" },
  { id: "contacto", label: "Contacto" },
]

export function SiteNav() {
  const [active, setActive] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null)

    // Resalta la seccion cuyo encabezado esta mas cerca del tope visible.
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)

        if (visible.length > 0) {
          setActive(visible[0].target.id)
        }
      },
      // El margen superior compensa la barra fija; el inferior evita que
      // varias secciones cuenten como activas a la vez.
      { rootMargin: "-20% 0px -70% 0px", threshold: 0 },
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  // La barra gana solidez/sombra una vez que el usuario deja el hero.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })
    setActive(id)
  }

  const goTop = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.scrollTo({ top: 0, behavior: "smooth" })
    setActive(null)
  }

  return (
    <motion.nav
      aria-label="Secciones del sitio"
      initial={{ y: -64, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 backdrop-blur-md transition-colors duration-300",
        scrolled
          ? "border-b border-primary/15 bg-background/80 shadow-[0_8px_30px_rgba(0,0,0,0.35)]"
          : "border-b border-transparent bg-background/40",
      )}
    >
      {/* Hairline con gradiente esmeralda -> azul, como las tarjetas */}
      <div
        aria-hidden="true"
        className={cn(
          "pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-primary/60 via-accent/40 to-transparent transition-transform duration-500",
          scrolled ? "scale-x-100" : "scale-x-0",
        )}
      />

      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        {/* Logotipo estilo terminal, en mono, acorde al Hero */}
        <a
          href="#top"
          onClick={goTop}
          aria-label="Volver al inicio"
          className="group flex items-center gap-1.5 font-mono text-sm"
        >
          <span className="text-muted-foreground transition-colors group-hover:text-primary">
            ~/
          </span>
          <span className="font-semibold text-foreground transition-colors group-hover:text-primary">
            gonzalo
          </span>
          <span className="text-primary terminal-cursor">_</span>
        </a>

        <ul className="flex items-center gap-0.5 overflow-x-auto font-mono sm:gap-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {sections.map((section, index) => {
            const isActive = active === section.id
            return (
              <li key={section.id} className="relative shrink-0">
                <a
                  href={`#${section.id}`}
                  onClick={(event) => handleClick(event, section.id)}
                  aria-current={isActive ? "true" : undefined}
                  className={cn(
                    "relative flex items-center gap-1.5 whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs transition-colors duration-200 sm:text-[13px]",
                    isActive
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {/* Pastilla deslizante detras del item activo */}
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      aria-hidden="true"
                      className="absolute inset-0 -z-10 rounded-md border border-primary/25 bg-primary/10 shadow-[0_0_14px_color-mix(in_oklch,var(--primary)_28%,transparent)]"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span
                    aria-hidden="true"
                    className={cn(
                      "text-[10px] tabular-nums transition-colors",
                      isActive ? "text-primary/70" : "text-muted-foreground/50",
                    )}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="hidden sm:inline">{section.label}</span>
                  {/* En pantallas chicas mostramos solo la primera palabra */}
                  <span className="sm:hidden">{section.label.split(" ")[0]}</span>
                </a>
              </li>
            )
          })}
        </ul>
      </div>
    </motion.nav>
  )
}
