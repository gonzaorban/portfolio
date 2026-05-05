import { Hero } from "@/components/hero"
import { ResearchSpotlight } from "@/components/research-spotlight"
import { CybersecurityHub } from "@/components/cybersecurity-hub"
import { ProjectBento } from "@/components/project-bento"
import { TechStack } from "@/components/tech-stack"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent">
      <Hero />
      <ProjectBento />
      <ResearchSpotlight />
      <CybersecurityHub />
      <TechStack />
      <Contact />
      <Footer />
    </main>
  )
}
