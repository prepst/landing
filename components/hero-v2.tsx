"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Star, TrendingUp, Users, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"

const trustBadges = [
  { icon: Star, text: "4.9/5 Rating", subtext: "From 2,000+ reviews" },
  { icon: TrendingUp, text: "+200 Points", subtext: "Average improvement" },
  { icon: Users, text: "50,000+", subtext: "Students helped" },
  { icon: Zap, text: "92%", subtext: "Hit target score" },
]

const avatars = [
  "/mascot-mint.png",
  "/mascot-coral.png", 
  "/mascot-purple.png",
  "/mascot-star.png",
]

export function HeroV2() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-[#f8f7fd] to-white pt-20">
      {/* Animated Background Blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 -left-32 w-96 h-96 bg-[#dad3fd_/_0.5] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-40 -right-32 w-80 h-80 bg-[#e8e4fc_/_0.4] rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 left-1/4 w-64 h-64 bg-[#f0edfd_/_0.4] rounded-full blur-3xl"
          animate={{
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* Social Proof Badge - Above the Fold */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-3 bg-white rounded-full pl-2 pr-5 py-2 shadow-lg shadow-black/5 border border-gray-100 mb-8"
            >
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dad3fd] to-[#b8acf8] flex items-center justify-center border-2 border-white overflow-hidden"
                  >
                    <Image src={src} alt="" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-1.5">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <span className="text-sm font-semibold text-gray-800">
                  Join 50,000+ students
                </span>
              </div>
            </motion.div>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
            >
              Finally, an SAT prep that{" "}
              <span className="bg-gradient-to-r from-[#674bc4] via-[#7b5fd4] to-[#9575e0] bg-clip-text text-transparent">
                actually works
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              Our AI learns how you learn, then creates a personalized study plan 
              that adapts in real-time. Students improve an average of +200 points.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-10"
            >
              <a
                href="https://sat.prepst.com/"
                className="inline-flex items-center justify-center gap-2 bg-[#dad3fd] text-[#674bc4] font-semibold px-8 py-4 rounded-xl hover:bg-[#c8befc] transition-all shadow-lg shadow-[#dad3fd_/_0.5] hover:shadow-xl hover:shadow-[#dad3fd_/_0.6] hover:-translate-y-0.5 group"
              >
                Start Free Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center gap-2 bg-white text-gray-700 font-semibold px-8 py-4 rounded-xl border-2 border-gray-200 hover:border-[#dad3fd] hover:bg-[#f8f7fd] transition-all"
              >
                <Play className="w-5 h-5" />
                See How It Works
              </a>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#674bc4]" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#674bc4]" />
                <span>Free forever</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#dad3fd_/_0.4] to-[#b8acf8_/_0.3] rounded-3xl blur-3xl" />
              
              {/* Hero image */}
              <Image
                src="/hero.png"
                alt="PrepSt SAT Prep Platform"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />

              {/* Floating stat cards */}
              <motion.div
                className="absolute top-4 -left-4 bg-white rounded-xl p-3 shadow-xl border border-gray-100"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#dad3fd] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-[#674bc4]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Avg. Improvement</div>
                    <div className="text-lg font-bold text-gray-900">+215 pts</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-8 -right-4 bg-white rounded-xl p-3 shadow-xl border border-gray-100"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-lg bg-[#e8e4fc] flex items-center justify-center">
                    <Users className="w-5 h-5 text-[#674bc4]" />
                  </div>
                  <div>
                    <div className="text-xs text-gray-500">Active Students</div>
                    <div className="text-lg font-bold text-gray-900">50,000+</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="mt-16 lg:mt-24 grid grid-cols-2 md:grid-cols-4 gap-4"
        >
          {trustBadges.map((badge, i) => (
            <div
              key={i}
              className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 text-center border border-gray-100 shadow-sm"
            >
              <badge.icon className="w-6 h-6 mx-auto mb-2 text-[#674bc4]" />
              <div className="font-bold text-gray-900">{badge.text}</div>
              <div className="text-xs text-gray-500">{badge.subtext}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
