import { execSync } from 'node:child_process'

// Fecha del último commit a la rama desplegada (calculada en build).
// Fallback a la fecha actual del build si git no está disponible.
function getLastUpdated() {
  try {
    return execSync('git log -1 --format=%cI').toString().trim()
  } catch {
    return new Date().toISOString()
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_LAST_UPDATED: getLastUpdated(),
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.ibb.co',
      },
    ],
  },
}

export default nextConfig
