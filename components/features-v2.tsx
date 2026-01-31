"use client"

import { motion } from "framer-motion"
import { Brain, Target, Repeat, BookOpen, BarChart3, Zap, Check } from "lucide-react"
import Image from "next/image"

const features = [
  {
    icon: Brain,
    title: "Cognitive Intelligence",
    headline: "15,000+ questions that adapt to YOUR brain",
    description: "Our AI doesn't just track right and wrong answers. It understands HOW you think - your timing patterns, confidence levels, and learning velocity to serve the perfect question every time.",
    benefits: ["Real-time difficulty adjustment", "Pattern recognition analysis", "Cognitive efficiency scoring"],
    image: "/feature-adaptive.png",
    color: "bg-gradient-to-br from-[#dad3fd] to-[#b8acf8]",
  },
  {
    icon: Target,
    title: "Predictive Analytics",
    headline: "Know your score before test day",
    description: "We forecast your SAT score with 95% accuracy weeks in advance. No surprises. You'll know exactly when you're ready to take the real test.",
    benefits: ["30-day score predictions", "Confidence intervals", "Readiness indicators"],
    image: "/feature-insight.png",
    color: "bg-gradient-to-br from-[#b8acf8] to-[#9f92f5]",
  },
  {
    icon: Repeat,
    title: "Smart Review System",
    headline: "Never forget what you learned",
    description: "Our spaced repetition algorithm brings concepts back at the optimal moment for YOUR memory. It's like having a photographic memory trainer built in.",
    benefits: ["Personalized review timing", "Forgetting curve optimization", "Retention tracking"],
    image: "/feature-review.png",
    color: "bg-gradient-to-br from-[#9f92f5] to-[#e8e4fc]",
  },
  {
    icon: BookOpen,
    title: "Vocabulary Builder",
    headline: "Master 1000+ SAT words effortlessly",
    description: "Bite-sized daily lessons, engaging exercises, and streak tracking make vocab building actually enjoyable. Most students learn 50+ new words per week.",
    benefits: ["Daily bite-sized lessons", "Progress streaks", "Contextual learning"],
    image: "/feature-vocab.png",
    color: "bg-gradient-to-br from-[#e8e4fc] to-[#dad3fd]",
  },
]

export function FeaturesV2() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-[#dad3fd_/_0.4] text-[#674bc4] rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Zap className="w-4 h-4" />
            Powerful Features
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to crush the SAT
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Built by students who aced the SAT, backed by cognitive science, powered by AI.
          </p>
        </motion.div>

        <div className="space-y-24 lg:space-y-32">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
            >
              {/* Content */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className={`inline-flex items-center gap-2 ${feature.color} text-[#674bc4] rounded-xl p-3 mb-6 shadow-lg`}>
                  <feature.icon className="w-6 h-6" />
                </div>
                <div className="text-sm font-semibold text-[#674bc4] uppercase tracking-wider mb-3">
                  {feature.title}
                </div>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                  {feature.headline}
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  {feature.description}
                </p>
                <ul className="space-y-3">
                  {feature.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#dad3fd] flex items-center justify-center flex-shrink-0">
                        <Check className="w-3.5 h-3.5 text-[#674bc4]" />
                      </div>
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <div className="relative aspect-square max-w-lg mx-auto">
                  <div className={`absolute inset-4 ${feature.color} rounded-3xl opacity-30 blur-2xl`} />
                  <Image
                    src={feature.image}
                    alt={feature.headline}
                    fill
                    className="object-contain relative z-10 drop-shadow-xl"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
