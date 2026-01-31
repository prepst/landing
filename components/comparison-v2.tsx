"use client"

import { motion } from "framer-motion"
import { Check, X, Crown } from "lucide-react"

const comparisonData = [
  { feature: "Personalized study plan", prepst: true, khan: false, princeton: true, tutor: true },
  { feature: "AI-powered adaptive questions", prepst: true, khan: false, princeton: false, tutor: false },
  { feature: "Cognitive learning analysis", prepst: true, khan: false, princeton: false, tutor: false },
  { feature: "Score prediction (95% accuracy)", prepst: true, khan: false, princeton: false, tutor: false },
  { feature: "Spaced repetition review", prepst: true, khan: false, princeton: false, tutor: false },
  { feature: "Real-time difficulty adjustment", prepst: true, khan: false, princeton: false, tutor: true },
  { feature: "15,000+ practice questions", prepst: true, khan: true, princeton: true, tutor: false },
  { feature: "Progress tracking & analytics", prepst: true, khan: true, princeton: true, tutor: true },
  { feature: "Affordable pricing", prepst: true, khan: true, princeton: false, tutor: false },
]

const pricing = [
  { name: "PrepSt", price: "Free", period: "", highlight: true },
  { name: "Khan Academy", price: "Free", period: "", highlight: false },
  { name: "Princeton Review", price: "$299", period: "+ / course", highlight: false },
  { name: "Private Tutor", price: "$100-300", period: "/ hour", highlight: false },
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
            <Crown className="w-4 h-4" />
            Why PrepSt Wins
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Compare the options
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            See how PrepSt stacks up against other SAT prep options.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {pricing.map((item, i) => (
            <div
              key={item.name}
              className={`rounded-2xl p-6 text-center ${
                item.highlight
                  ? 'bg-[#dad3fd] text-[#674bc4] shadow-lg shadow-[#dad3fd_/_0.3]'
                  : 'bg-gray-50 border border-gray-100'
              }`}
            >
              <div className="text-sm font-medium mb-2 opacity-80">{item.name}</div>
              <div className="text-2xl sm:text-3xl font-bold">{item.price}</div>
              <div className={`text-sm ${item.highlight ? 'opacity-80' : 'text-gray-500'}`}>
                {item.period}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Comparison Table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl border border-gray-200 overflow-hidden shadow-sm"
        >
          {/* Header */}
          <div className="grid grid-cols-5 gap-4 p-4 bg-gray-50 border-b border-gray-200 font-semibold text-sm">
            <div className="col-span-2 text-gray-900">Feature</div>
            <div className="text-center text-[#674bc4]">PrepSt</div>
            <div className="text-center text-gray-600 hidden sm:block">Khan</div>
            <div className="text-center text-gray-600 hidden sm:block">Princeton</div>
          </div>

          {/* Rows */}
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
                {row.khan ? (
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center">
                    <Check className="w-4 h-4 text-gray-500" />
                  </div>
                ) : (
                  <X className="w-4 h-4 text-gray-200" />
                )}
              </div>
              <div className="hidden sm:flex justify-center">
                {row.princeton ? (
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

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">
            Why pay $299+ when PrepSt offers more for free?
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
