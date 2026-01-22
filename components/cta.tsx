"use client";

import { GraduationCap, ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="relative py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
      ref={ref}
    >
      {/* Background */}
      <div className="absolute inset-0 section-gradient-alt" />

      {/* Floating accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-72 h-72 rounded-full bg-primary/15 blur-3xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.35, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full bg-accent/15 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      {/* Video showcase */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10 mb-20"
      >
        <div className="flex justify-center">
          <div className="relative w-11/12 max-w-5xl group">
            {/* Glow border */}
            <div className="absolute -inset-1 bg-gradient-to-r from-primary via-secondary to-accent rounded-2xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-500" />

            {/* Video container */}
            <div className="relative glass-card rounded-2xl overflow-hidden">
              <video
                src="/intr2o gif.mp4"
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8"
          >
            <Sparkles className="h-4 w-4 text-secondary" />
            <span className="text-sm text-white/80">
              The Future of Learning
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-8 text-balance tracking-tight leading-[1.1]"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <span className="text-white">Ready to Transform</span>
            <br />
            <span className="gradient-text">Learning?</span>
          </motion.h2>

          <motion.p
            className="text-lg sm:text-xl text-white/60 mb-12 text-pretty leading-relaxed max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Join the cognitive revolution. Start building personalized learning
            experiences powered by the world&apos;s first cognitive learning
            engine.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <motion.a
              href="https://sat.prepst.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="glow-button inline-flex items-center justify-center gap-3 rounded-full text-lg font-semibold h-16 px-10 text-white group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <GraduationCap className="h-5 w-5" />
              <span>Try for Free</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="h-5 w-5" />
              </motion.span>
            </motion.a>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="mt-16 flex items-center justify-center gap-8 text-white/40"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-primary/40 to-primary/20 border-2 border-background"
                  />
                ))}
              </div>
              <span className="text-sm">1,000+ students</span>
            </div>
            <div className="h-4 w-px bg-white/20" />
            <span className="text-sm">No credit card required</span>
          </motion.div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
}
