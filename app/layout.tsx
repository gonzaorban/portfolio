import type { Metadata, Viewport } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
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
    images: [{ url: '/icon-512.png', width: 512, height: 512, alt: 'Gonzalo Orban' }],
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  themeColor: '#050505',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} dark`}>
      <body className="font-sans antialiased">
        <div
          aria-hidden="true"
          className="pointer-events-none fixed inset-0"
          style={{
            zIndex: 0,
            background: [
              'radial-gradient(ellipse 75% 55% at 10% 5%, rgba(34,211,238,0.25) 0%, transparent 65%)',
              'radial-gradient(ellipse 65% 50% at 92% 92%, rgba(74,222,128,0.18) 0%, transparent 60%)',
            ].join(','),
          }}
        />
        <div className="relative" style={{ zIndex: 1 }}>
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
