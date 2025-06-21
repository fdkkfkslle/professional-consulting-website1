import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevCraft - Professional Software Development Services",
  description:
    "Custom web development, mobile apps, and software solutions. Expert developers creating cutting-edge applications for your business.",
  keywords: "web development, mobile apps, software development, custom software, cybersecurity, technical consulting",
  authors: [{ name: "DevCraft Team" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
