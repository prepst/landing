"use client";

import { motion } from "framer-motion";

export function Navigation() {
  return (
    <motion.nav 
      className="fixed top-6 left-0 right-0 z-50"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-center">
          <motion.div 
            className="flex items-center gap-8 px-6 py-3 rounded-full nav-glass"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <a href="/" className="flex items-center group">
              <motion.img 
                src="/logo-2.svg" 
                alt="Prep St." 
                className="h-8 w-auto transition-all duration-300 group-hover:brightness-125"
                whileHover={{ scale: 1.05 }}
              />
            </a>
            
            <div className="hidden md:flex items-center gap-8">
              <motion.a
                href="#sat-demo"
                className="relative text-sm font-medium text-white/80 hover:text-white transition-colors group"
                whileHover={{ scale: 1.05 }}
              >
                SAT Demo
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300"></span>
              </motion.a>
            </div>
            
            <motion.a
              href="https://sat.prepst.com/dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-semibold h-10 px-6 text-white"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">Try for Free</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </motion.nav>
  );
}
