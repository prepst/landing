"use client"

import { motion } from "framer-motion"
import { ArrowRight, Sparkles, Check, Star } from "lucide-react"
import Image from "next/image"

const benefits = [
  "Free forever - no credit card",
  "See results in 2 weeks",
  "Cancel anytime",
]

export function CTAFinalV2() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-[#1a1640] to-gray-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#674bc4_/_0.15] rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[#9575e0_/_0.1] rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0],
            y: [0, 20, 0],
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 bg-white/10 text-white/90 rounded-full px-4 py-2 text-sm font-medium mb-6 backdrop-blur-sm border border-white/10">
              <Sparkles className="w-4 h-4 text-[#dad3fd]" />
              Your SAT success starts now
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to see your score{" "}
              <span className="bg-gradient-to-r from-[#dad3fd] to-[#b8acf8] bg-clip-text text-transparent">
                skyrocket?
              </span>
            </h2>

            <p className="text-lg text-gray-400 mb-8 leading-relaxed">
              Join 50,000+ students who transformed their SAT scores with PrepSt. 
              Start your personalized study plan in less than 5 minutes.
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
                Start Free - No Signup Required
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            {/* Social Proof */}
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

          {/* Right: Visual */}
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

              {/* Floating badges */}
              <motion.div
                className="absolute top-8 -right-4 bg-white rounded-xl p-3 shadow-xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl">🎯</div>
                  <div>
                    <div className="text-xs text-gray-500">Target Score</div>
                    <div className="text-sm font-bold text-gray-900">1550+</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute bottom-16 -left-4 bg-white rounded-xl p-3 shadow-xl"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
              >
                <div className="flex items-center gap-2">
                  <div className="text-2xl">📈</div>
                  <div>
                    <div className="text-xs text-gray-500">Improvement</div>
                    <div className="text-sm font-bold text-[#674bc4]">+215 pts</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
