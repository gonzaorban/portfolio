import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SiteNav } from '@/components/site-nav'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
})

const jetbrainsMono = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono'
})

// En Vercel se resuelve al dominio del deploy; en local cae a localhost.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ?? (process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
    : 'http://localhost:3000')

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: 'Gonzalo Orban | Portfolio',
  description: 'Portfolio de Gonzalo Orban - Estudiante de Ingeniería en Sistemas, Desarrollador Backend y Especialista en Ciberseguridad.',
  generator: 'v0.app',
  keywords: ['Desarrollador Backend', 'Ciberseguridad', 'Arquitectura de Software', 'NestJS', 'Django', 'Investigación en Seguridad', 'UTN', 'Portfolio'],
  authors: [{ name: 'Gonzalo Orban' }],
  icons: {
    icon: [{ url: '/icon.svg', type: 'image/svg+xml' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  openGraph: {
    title: 'Gonzalo Orban | Portfolio',
    description: 'Portfolio de Gonzalo Orban - Estudiante de Ingeniería en Sistemas, Desarrollador Backend y Especialista en Ciberseguridad.',
    locale: 'es_AR',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'Gonzalo Orban - Backend & Ciberseguridad' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Gonzalo Orban | Portfolio',
    description: 'Portfolio de Gonzalo Orban - Desarrollador Backend y Especialista en Ciberseguridad.',
    images: ['/og-image.png'],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#f5f7fa' },
    { media: '(prefers-color-scheme: dark)', color: '#06090f' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    // next-themes agrega la clase "dark" en el cliente; suppressHydrationWarning
    // evita el aviso por esa diferencia con el HTML del servidor.
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body className="font-sans antialiased">
        {/* Arranca con la preferencia del sistema; el boton de la nav la pisa */}
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0"
            style={{
              zIndex: 0,
              background: [
                'radial-gradient(ellipse 75% 55% at 10% 5%, var(--glow-1) 0%, transparent 65%)',
                'radial-gradient(ellipse 65% 50% at 92% 92%, var(--glow-2) 0%, transparent 60%)',
              ].join(','),
            }}
          />
          <div className="relative" style={{ zIndex: 1 }}>
            <SiteNav />
            {children}
          </div>
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  )
}
