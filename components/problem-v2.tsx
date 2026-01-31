"use client"

import { motion } from "framer-motion"
import { XCircle, Clock, DollarSign, Brain, Frown, AlertTriangle } from "lucide-react"

const problems = [
  {
    icon: Clock,
    title: "Wasting hours on generic practice",
    description: "Traditional prep books give everyone the same questions. You're either bored with easy stuff or overwhelmed by things you're not ready for.",
  },
  {
    icon: DollarSign,
    title: "Spending $2000+ on tutors",
    description: "Private SAT tutors charge $100-300/hour. Most families can't afford that, so students are left to figure it out alone.",
  },
  {
    icon: Brain,
    title: "Forgetting what you learned",
    description: "You study for weeks, but when test day comes, you can't remember half of it. Traditional methods don't account for how memory actually works.",
  },
  {
    icon: Frown,
    title: "Losing motivation fast",
    description: "Endless practice tests without seeing progress kills your drive. Most students give up before they ever see real improvement.",
  },
]

export function ProblemV2() {
  return (
    <section className="py-20 lg:py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 rounded-full px-4 py-2 text-sm font-medium mb-6">
            <AlertTriangle className="w-4 h-4" />
            The SAT prep struggle is real
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why most students never reach their target score
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            If you have tried SAT prep before and felt frustrated, you are not alone. 
            The traditional approach is fundamentally broken.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 rounded-2xl p-6 lg:p-8 border border-gray-100 hover:border-red-200 hover:bg-red-50/30 transition-all duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center group-hover:bg-red-200 transition-colors">
                  <problem.icon className="w-6 h-6 text-red-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    {problem.title}
                    <XCircle className="w-4 h-4 text-red-400" />
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-3 bg-gray-900 text-white rounded-2xl px-8 py-6 shadow-xl">
            <div className="text-4xl font-bold">73%</div>
            <div className="text-left">
              <div className="font-medium">of students</div>
              <div className="text-gray-400 text-sm">don't improve with traditional prep</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
