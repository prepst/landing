"use client"

import { motion } from "framer-motion"
import { Check, X, Sparkles } from "lucide-react"

const comparisonData = [
  { feature: "Completely free access", prepst: true, generic: false, static: false },
  { feature: "Built by students for students", prepst: true, generic: false, static: false },
  { feature: "Adaptive question flow", prepst: true, generic: true, static: false },
  { feature: "Cognitive learning analysis", prepst: true, generic: false, static: false },
  { feature: "Score prediction insights", prepst: true, generic: true, static: false },
  { feature: "Spaced repetition review", prepst: true, generic: true, static: false },
  { feature: "15,000+ practice questions", prepst: true, generic: true, static: true },
  { feature: "Clear progress tracking", prepst: true, generic: true, static: true },
]

const highlights = [
  { name: "Free", value: "100%", detail: "Always free to use" },
  { name: "Student-built", value: "Yes", detail: "Made for real study habits" },
  { name: "Adaptive", value: "Live", detail: "Adjusts as you work" },
  { name: "Experience", value: "Polished", detail: "Clean, fast, focused" },
]

export function ComparisonV2() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#dad3fd_/_0.4] text-[#674bc4] rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            Why students pick PrepSt
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Free should still feel excellent
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            PrepSt is designed to feel thoughtful, capable, and student-first from the
            moment you land on it.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {highlights.map((item) => (
            <div
              key={item.name}
              className="rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-sm"
            >
              <div className="mb-2 text-sm font-medium text-gray-500">{item.name}</div>
              <div className="text-2xl sm:text-3xl font-bold text-gray-900">{item.value}</div>
              <div className="text-sm text-[#674bc4]">{item.detail}</div>
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm"
        >
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-semibold text-sm">
            <div className="col-span-2 text-gray-900">Feature</div>
            <div className="text-center text-[#674bc4]">PrepSt</div>
            <div className="text-center text-gray-600 hidden sm:block">Generic apps</div>
            <div className="text-center text-gray-600 hidden sm:block">Static prep</div>
          </div>

          {comparisonData.map((row, index) => (
            <motion.div
              key={row.feature}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.03 }}
              className={`grid grid-cols-5 gap-4 p-4 items-center ${
                index !== comparisonData.length - 1 ? 'border-b border-gray-100' : ''
              } hover:bg-gray-50 transition-colors`}
            >
              <div className="col-span-2 text-sm text-gray-700">{row.feature}</div>
              <div className="flex justify-center">
                {row.prepst ? (
                  <div className="w-6 h-6 rounded-full bg-[#dad3fd] flex items-center justify-center">
                    <Check className="w-4 h-4 text-[#674bc4]" />
                  </div>
                ) : (
                  <X className="w-4 h-4 text-gray-300" />
                )}
              </div>
              <div className="hidden sm:flex justify-center">
                {row.generic ? (
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gray-500" />
                  </div>
                ) : (
                  <X className="w-4 h-4 text-gray-200" />
                )}
              </div>
              <div className="hidden sm:flex justify-center">
                {row.static ? (
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gray-500" />
                  </div>
                ) : (
                  <X className="w-4 h-4 text-gray-200" />
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Free means free. That is the point.
          </p>
          <a
            href="https://sat.prepst.com/"
            className="inline-flex items-center gap-2 bg-[#dad3fd] text-[#674bc4] font-semibold px-8 py-4 rounded-xl hover:bg-[#c8befc] transition-colors shadow-lg shadow-[#dad3fd_/_0.3]"
          >
            Start Free Today
            <Check className="w-5 h-5" />
          </a>
        </motion.div>
      </div>
    </section>
  )
}
