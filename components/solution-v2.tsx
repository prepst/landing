"use client"

import { motion } from "framer-motion"
import { Brain, Target, Sparkles, LineChart, ArrowRight } from "lucide-react"
import Image from "next/image"

const steps = [
  {
    number: "01",
    icon: Brain,
    title: "We learn how you learn",
    description: "Our AI analyzes your answer patterns, timing, and confidence to build your unique cognitive profile in just 15 questions.",
    color: "from-[#dad3fd] to-[#b8acf8]",
  },
  {
    number: "02",
    icon: Target,
    title: "Personalized practice path",
    description: "No more one-size-fits-all. Every question is carefully selected to target your specific weak spots while building on your strengths.",
    color: "from-[#b8acf8] to-[#9f92f5]",
  },
  {
    number: "03",
    icon: Sparkles,
    title: "Smart review that sticks",
    description: "We bring back concepts at the perfect moment for your memory. Spaced repetition means you actually remember what you study.",
    color: "from-[#9f92f5] to-[#e8e4fc]",
  },
  {
    number: "04",
    icon: LineChart,
    title: "Watch your score climb",
    description: "Real-time progress tracking shows exactly where you're improving. Most students see their first 50-point gain within 2 weeks.",
    color: "from-[#e8e4fc] to-[#dad3fd]",
  },
]

export function SolutionV2() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#dad3fd_/_0.4] text-[#674bc4] rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            The student-built difference
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            How PrepSt helps you study{" "}
            <span className="bg-gradient-to-r from-[#674bc4] to-[#9575e0] bg-clip-text text-transparent">
              smarter every day
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We built PrepSt to feel focused, clear, and genuinely helpful. Every session
            adapts to you, so your study time actually moves your score.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="relative w-4/5 h-4/5 mx-auto">
                <div className="absolute inset-0 bg-gradient-to-br from-[#dad3fd_/_0.5] to-[#b8acf8_/_0.4] rounded-3xl blur-3xl" />
                <Image
                  src="/feature-adaptive.png"
                  alt="PrepSt Adaptive Learning"
                  fill
                  className="object-contain relative z-10 drop-shadow-2xl"
                />
              </div>
            </div>
          </motion.div>

          {/* Right: Steps */}
          <div className="space-y-6 order-1 lg:order-2">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group flex gap-4 p-5 rounded-2xl hover:bg-white hover:shadow-lg hover:shadow-black/5 transition-all duration-300 border border-transparent hover:border-gray-100"
              >
                <div className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center text-[#674bc4] shadow-lg`}>
                  <step.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-400 mb-1">Step {step.number}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-[#674bc4] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4"
            >
              <a
                href="https://sat.prepst.com/"
                className="inline-flex items-center gap-2 bg-[#dad3fd] text-[#674bc4] font-semibold px-6 py-3 rounded-xl hover:bg-[#c8befc] transition-colors shadow-lg shadow-[#dad3fd_/_0.3]"
              >
                Use PrepSt Free
                <ArrowRight className="w-4 h-4" />
              </a>
              <p className="text-sm text-gray-500 mt-3">
                Completely free. Built by students for students.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
