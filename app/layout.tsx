import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
})
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://prepst.com"),
  title: "PrepSt | Free AI-Powered SAT Prep That Actually Works",
  description:
    "The only SAT prep that adapts to how YOU learn. Students improve an average of 215+ points. 50,000+ students trust PrepSt. Free forever.",
  keywords: ["SAT prep", "SAT study", "free SAT prep", "AI SAT tutor", "SAT practice", "SAT improvement", "cognitive learning"],
  authors: [{ name: "PrepSt" }],
  creator: "PrepSt",
  publisher: "PrepSt",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://prepst.com",
    siteName: "PrepSt",
    title: "PrepSt | Free AI-Powered SAT Prep That Actually Works",
    description: "The only SAT prep that adapts to how YOU learn. Students improve an average of 215+ points.",
    images: [
      {
        url: "/hero.png",
        width: 1200,
        height: 630,
        alt: "PrepSt - AI-Powered SAT Prep",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PrepSt | Free AI-Powered SAT Prep That Actually Works",
    description: "The only SAT prep that adapts to how YOU learn. Students improve an average of 215+ points.",
    images: ["/hero.png"],
    creator: "@prepst",
  },
  alternates: {
    canonical: "https://prepst.com",
  },
  icons: {
    icon: "/logo-2.svg",
    shortcut: "/logo-2.svg",
    apple: "/logo-2.svg",
  },
  manifest: "/site.webmanifest",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
