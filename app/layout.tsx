import type React from "react"
import type { Metadata } from "next"
import { Orbitron } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-orbitron",
})

export const metadata: Metadata = {
  title: "RevoClash - Torneios Mobile com Prêmios Reais | Plataforma de eSports",
  description:
    "Crie e participe de torneios mobile pagos com prêmios em dinheiro. Duelos 1v1, pagamentos via PIX, saques seguros. A maior plataforma de torneios mobile do Brasil. +18 anos.",
  keywords:
    "torneios mobile, esports brasil, duelos pagos, prêmios em dinheiro, PIX, jogos mobile competitivos, torneios pagos",
  generator: "v0.app",
  openGraph: {
    title: "RevoClash - Torneios Mobile com Prêmios Reais",
    description: "Crie e participe de torneios mobile pagos. Duelos 1v1, pagamentos via PIX, saques seguros.",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${orbitron.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
