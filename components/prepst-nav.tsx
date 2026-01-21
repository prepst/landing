"use client"

import Link from "next/link"
import { motion } from "framer-motion"

export function PrepstNav() {
  return (
    <motion.nav 
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="prepst-nav fixed top-0 left-0 right-0 z-50"
    >
      <div className="prepst-container flex items-center justify-between h-16 px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-[oklch(0.55_0.18_165)] to-[oklch(0.50_0.20_175)] flex items-center justify-center">
            <span className="text-white font-bold text-sm">P</span>
          </div>
          <span className="font-bold text-xl text-[oklch(0.15_0.02_270)]">PrepSt</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link 
            href="#features" 
            className="text-sm font-medium text-[oklch(0.45_0.02_270)] hover:text-[oklch(0.25_0.02_270)] transition-colors"
          >
            Features
          </Link>
          <Link 
            href="#testimonials" 
            className="text-sm font-medium text-[oklch(0.45_0.02_270)] hover:text-[oklch(0.25_0.02_270)] transition-colors"
          >
            Results
          </Link>
          <Link 
            href="#pricing" 
            className="text-sm font-medium text-[oklch(0.45_0.02_270)] hover:text-[oklch(0.25_0.02_270)] transition-colors"
          >
            Pricing
          </Link>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <Link 
            href="/login"
            className="hidden sm:block text-sm font-medium text-[oklch(0.45_0.02_270)] hover:text-[oklch(0.25_0.02_270)] transition-colors"
          >
            Log in
          </Link>
          <Link 
            href="/signup"
            className="prepst-btn-primary text-sm py-2 px-5"
          >
            Start Free
          </Link>
        </div>
      </div>
    </motion.nav>
  )
}
