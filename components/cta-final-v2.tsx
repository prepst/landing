"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Check, Star } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Completely free forever",
  "Built by students for students",
  "Personalized from your first session",
]

export function CTAFinalV2() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-[#1a1640] to-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-[#674bc4_/_0.15] blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 h-80 w-80 rounded-full bg-[#9575e0_/_0.1] blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 rounded-full px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-4 h-4 text-[#dad3fd]" />
              Free SAT prep, done right
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Built by students.{" "}
              <span className="bg-gradient-to-r from-[#dad3fd] to-[#b8acf8] bg-clip-text text-transparent">
                Free for students.
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              PrepSt gives you a polished, adaptive SAT prep experience that costs
              nothing to use. Just open it and start improving.
            </p>

            <ul className="space-y-3 mb-8">
              {benefits.map((benefit, i) => (
                <li key={i} className="flex items-center gap-3 text-gray-300">
                  <div className="w-5 h-5 rounded-full bg-[#674bc4_/_0.3] flex items-center justify-center">
                    <Check className="w-3 h-3 text-[#dad3fd]" />
                  </div>
                  {benefit}
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://sat.prepst.com/"
                className="inline-flex items-center justify-center gap-2 bg-[#dad3fd] text-[#674bc4] font-semibold px-8 py-4 rounded-xl hover:bg-[#c8befc] transition-colors shadow-lg shadow-[#dad3fd_/_0.4] group"
              >
                Start Free
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {["/mascot-mint.png", "/mascot-coral.png", "/mascot-purple.png"].map((src, i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded-full bg-gradient-to-br from-[#dad3fd] to-[#b8acf8] border-2 border-gray-900 overflow-hidden"
                  >
                    <Image src={src} alt="" width={32} height={32} className="w-full h-full object-cover" />
                  </div>
                ))}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-sm text-gray-500">
                  <span className="text-white font-medium">4.9/5</span> from 2,000+ reviews
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-[#674bc4_/_0.3] to-[#9575e0_/_0.2] rounded-3xl blur-3xl" />
              
              <Image
                src="/journey-scene.png"
                alt="Start your SAT journey"
                fill
                className="object-contain relative z-10 drop-shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
