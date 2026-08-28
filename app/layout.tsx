import type React from "react"
import type { Metadata } from "next"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://prepst.com"),
  title: "PrepSt | Free SAT Tutor",
  description: "A free SAT tutor that turns practice into a clear next step.",
  keywords: ["SAT prep", "SAT study", "free SAT prep", "SAT tutor", "SAT practice"],
  authors: [{ name: "PrepSt" }],
  creator: "PrepSt",
  publisher: "PrepSt",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prepst.com",
    siteName: "PrepSt",
    title: "PrepSt | Free SAT Tutor",
    description: "A free SAT tutor that turns practice into a clear next step.",
  },
  twitter: {
    card: "summary_large_image",
    title: "PrepSt | Free SAT Tutor",
    description: "A free SAT tutor that turns practice into a clear next step.",
    creator: "@prepst",
  },
  alternates: {
    canonical: "https://prepst.com",
  },
  icons: {
    icon: "/peppa-avatar.svg",
    shortcut: "/peppa-avatar.svg",
    apple: "/peppa-avatar.svg",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
