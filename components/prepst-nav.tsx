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
          <img src="/logo-2.svg" alt="PrepSt" className="h-8 w-auto" />
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
          <a
            href="https://sat.prepst.com/"
            className="text-sm font-medium text-[oklch(0.45_0.02_270)] hover:text-[oklch(0.25_0.02_270)] transition-colors"
          >
            SAT App
          </a>
        </div>

        {/* CTA */}
        <div className="flex items-center gap-3">
          <a
            href="https://sat.prepst.com/"
            className="hidden sm:block text-sm font-medium text-[oklch(0.45_0.02_270)] hover:text-[oklch(0.25_0.02_270)] transition-colors"
          >
            Log in
          </a>
          <a
            href="https://sat.prepst.com/"
            className="prepst-btn-primary text-sm py-2 px-5"
          >
            Start Free
          </a>
        </div>
      </div>
    </motion.nav>
  )
}
