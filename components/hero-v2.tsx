"use client"

import { motion } from "framer-motion"
import { ArrowRight, Play, Star, TrendingUp, Users, Zap, CheckCircle } from "lucide-react"
import Image from "next/image"

const trustBadges = [
  { icon: Star, text: "100% Free", subtext: "Always free to use" },
  { icon: TrendingUp, text: "+200 Points", subtext: "Average improvement" },
  { icon: Users, text: "Built by students", subtext: "For students like us" },
  { icon: Zap, text: "50,000+", subtext: "Students already using it" },
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
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 -left-32 h-96 w-96 rounded-full bg-[#dad3fd_/_0.5] blur-3xl" />
        <div className="absolute top-40 -right-32 h-80 w-80 rounded-full bg-[#e8e4fc_/_0.4] blur-3xl" />
        <div className="absolute bottom-20 left-1/4 h-64 w-64 rounded-full bg-[#f0edfd_/_0.4] blur-3xl" />
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
                <span className="text-sm font-semibold text-gray-800">
                  Built by students, for students
                </span>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-gray-900 leading-[1.1] mb-6"
            >
              The SAT prep that feels polished and stays{" "}
              <span className="bg-gradient-to-r from-[#674bc4] via-[#7b5fd4] to-[#9575e0] bg-clip-text text-transparent">
                completely free
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0"
            >
              PrepSt is a beautifully designed SAT prep platform built by students for
              students. It adapts in real time, feels polished from the first click,
              and costs you absolutely nothing.
            </motion.p>

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
                Start Free Now
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500"
            >
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#674bc4]" />
                <span>Free from the first session</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-[#674bc4]" />
                <span>Built by students, for students</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/3] max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 bg-gradient-to-br from-[#dad3fd_/_0.4] to-[#b8acf8_/_0.3] rounded-3xl blur-3xl" />

              <Image
                src="/hero.png"
                alt="PrepSt SAT Prep Platform"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
                priority
              />
            </div>
          </motion.div>
        </div>

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
