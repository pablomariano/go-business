import type React from "react"
import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Latorre y Palma - Corredores de Seguros",
  description:
    "Asesoría profesional en seguros de vida, seguros generales y seguros complementarios de salud. Más de 15 años de experiencia protegiendo a su familia y patrimonio.",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className="font-body">{children}</body>
    </html>
  )
}
