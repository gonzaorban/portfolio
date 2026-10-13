"use client"

import { useEffect, useState } from "react"
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

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    const target = document.getElementById(id)
    if (!target) return
    event.preventDefault()
    target.scrollIntoView({ behavior: "smooth", block: "start" })
    setActive(id)
  }

  return (
    <nav
      aria-label="Secciones del sitio"
      className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-background/70 backdrop-blur-md"
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-3">
        <a
          href="#top"
          onClick={(event) => {
            event.preventDefault()
            window.scrollTo({ top: 0, behavior: "smooth" })
            setActive(null)
          }}
          className="font-mono text-sm font-semibold text-foreground transition-colors hover:text-primary"
        >
          GO
        </a>

        <ul className="flex items-center gap-1 overflow-x-auto sm:gap-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                onClick={(event) => handleClick(event, section.id)}
                aria-current={active === section.id ? "true" : undefined}
                className={cn(
                  "block whitespace-nowrap rounded-md px-2.5 py-1.5 text-xs transition-colors sm:text-sm",
                  active === section.id
                    ? "bg-secondary/60 text-primary"
                    : "text-muted-foreground hover:bg-secondary/40 hover:text-foreground",
                )}
              >
                {section.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
