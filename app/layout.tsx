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
  title: 'Gonzalo Orban | Portfolio',
  description: 'Portfolio de Gonzalo Orban - Estudiante de Ingeniería en Sistemas, Desarrollador Backend y Especialista en Ciberseguridad.',
  generator: 'v0.app',
  keywords: ['Desarrollador Backend', 'Ciberseguridad', 'Arquitectura de Software', 'NestJS', 'Django', 'Investigación en Seguridad', 'UTN', 'Portfolio'],
  authors: [{ name: 'Gonzalo Orban' }],
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
        {children}
        <Analytics />
      </body>
    </html>
  )
}
