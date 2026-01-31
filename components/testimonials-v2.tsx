"use client"

import { motion } from "framer-motion"
import { Star, Quote, TrendingUp, Trophy } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Sarah K.",
    school: "Yale '28",
    avatar: "👩‍🎓",
    oldScore: 1180,
    newScore: 1550,
    improvement: 370,
    quote: "I was stuck at 1180 for months using Khan Academy. PrepSt figured out I was rushing through easy questions and overthinking hard ones. Within 6 weeks, I hit 1550. Crazy.",
    highlight: "+370 points",
    color: "mint",
  },
  {
    id: 2,
    name: "Marcus T.",
    school: "Stanford '27",
    avatar: "🧑‍💻",
    oldScore: 1320,
    newScore: 1580,
    improvement: 260,
    quote: "The predictive analytics are insane. It told me I'd score 1570-1590 two weeks before my test. I got 1580. It's like having a crystal ball.",
    highlight: "Predicted within 10 points",
    color: "coral",
  },
  {
    id: 3,
    name: "Emily R.",
    school: "MIT '28",
    avatar: "👩‍🔬",
    oldScore: 1050,
    newScore: 1480,
    improvement: 430,
    quote: "I started with a 1050 and honestly thought I'd never break 1200. The adaptive practice made me actually enjoy studying. 430 points later, I'm going to MIT.",
    highlight: "+430 points",
    color: "lavender",
  },
  {
    id: 4,
    name: "James L.",
    school: "Harvard '27",
    avatar: "🧑‍🎓",
    oldScore: 1280,
    newScore: 1600,
    improvement: 320,
    quote: "Went from 1280 to a perfect 1600. The vocabulary builder alone was worth it. I actually remember words now instead of cramming and forgetting.",
    highlight: "Perfect 1600",
    color: "yellow",
  },
]

const stats = [
  { value: "50K+", label: "Students Helped", icon: "🎓" },
  { value: "+215", label: "Avg. Point Gain", icon: "📈" },
  { value: "4.9★", label: "App Store Rating", icon: "⭐" },
  { value: "92%", label: "Hit Target Score", icon: "🎯" },
]

export function TestimonialsV2() {
  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-[#dad3fd_/_0.4] text-[#674bc4] rounded-full px-4 py-2 text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            Real Results
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Students who switched to PrepSt
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what real students achieved.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl p-6 text-center border border-gray-100 shadow-sm"
            >
              <span className="text-3xl mb-2 block">{stat.icon}</span>
              <p className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1">{stat.value}</p>
              <p className="text-sm text-gray-500">{stat.label}</p>
            </div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl p-6 lg:p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden"
            >
              {/* Score Badge */}
              <div className="absolute top-6 right-6">
                <div className="bg-gradient-to-br from-[#dad3fd] to-[#b8acf8] text-[#674bc4] text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {t.highlight}
                </div>
              </div>

              {/* Quote */}
              <div className="mb-6">
                <Quote className="w-8 h-8 text-[#dad3fd] mb-4" />
                <p className="text-gray-700 leading-relaxed text-lg">
                  {t.quote}
                </p>
              </div>

              {/* Score Comparison */}
              <div className="flex items-center gap-4 mb-6 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">Before</div>
                  <div className="text-xl font-bold text-gray-400 line-through">{t.oldScore}</div>
                </div>
                <div className="text-[#674bc4]">
                  <TrendingUp className="w-5 h-5" />
                </div>
                <div className="text-center">
                  <div className="text-xs text-gray-500 mb-1">After</div>
                  <div className="text-2xl font-bold text-[#674bc4]">{t.newScore}</div>
                </div>
                <div className="ml-auto">
                  <div className="bg-[#dad3fd] text-[#674bc4] text-sm font-bold px-3 py-1 rounded-full">
                    +{t.improvement}
                  </div>
                </div>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#dad3fd] to-[#b8acf8] flex items-center justify-center text-2xl">
                  {t.avatar}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{t.name}</p>
                  <p className="text-sm text-gray-500">{t.school}</p>
                </div>
                <div className="ml-auto flex">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
