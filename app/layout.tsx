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

export const metadata: Metadata = {
  title: 'Gonza Orban | Desarrollador Backend & Investigador en Seguridad',
  description: 'Portfolio de Ingeniería de Software enfocado en Desarrollo Backend, Arquitectura de Software y Ciberseguridad. Estudiante de 4to año de Ingeniería en Sistemas de Información en UTN Resistencia, Chaco.',
  generator: 'v0.app',
  keywords: ['Desarrollador Backend', 'Ciberseguridad', 'Arquitectura de Software', 'NestJS', 'Django', 'Investigación en Seguridad'],
  authors: [{ name: 'Gonza Orban' }],
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
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
    <html lang="es" className={`${inter.variable} ${jetbrainsMono.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
