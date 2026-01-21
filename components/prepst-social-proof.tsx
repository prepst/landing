"use client"

import { motion } from "framer-motion"

const testimonials = [
    {
        id: 1,
        name: "Sarah K.",
        avatar: "👩‍🎓",
        oldScore: 1180,
        newScore: 1450,
        improvement: 270,
        quote: "I went from struggling with the math section to actually enjoying practice sessions. PrepSt made it feel like a game!",
        color: "mint",
    },
    {
        id: 2,
        name: "Marcus T.",
        avatar: "🧑‍💻",
        oldScore: 1320,
        newScore: 1520,
        improvement: 200,
        quote: "The adaptive practice is incredible. It knew exactly where I needed help before I did.",
        color: "coral",
    },
    {
        id: 3,
        name: "Emily R.",
        avatar: "👩‍🔬",
        oldScore: 1050,
        newScore: 1340,
        improvement: 290,
        quote: "From feeling hopeless to getting into my dream school. PrepSt changed everything for me.",
        color: "lavender",
    },
    {
        id: 4,
        name: "James L.",
        avatar: "🧑‍🎓",
        oldScore: 1280,
        newScore: 1480,
        improvement: 200,
        quote: "The vocabulary builder alone was worth it. I actually remember the words now!",
        color: "yellow",
    },
]

export function PrepstSocialProof() {
    return (
        <section id="testimonials" className="prepst-section bg-[oklch(0.995_0_0)]">
            <div className="prepst-container">
                {/* Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-4xl mb-4">💪</span>
                    <h2 className="prepst-heading-lg text-[oklch(0.15_0.02_270)] mb-4">
                        Students using PrepSt are{" "}
                        <span className="bg-gradient-to-r from-[oklch(0.55_0.18_165)] to-[oklch(0.68_0.12_290)] bg-clip-text text-transparent">
                            crushing the SAT
                        </span>
                    </h2>
                    <p className="prepst-body max-w-2xl mx-auto">
                        Real students, real improvements. See how PrepSt has helped thousands achieve their target scores.
                    </p>
                </motion.div>

                {/* Testimonial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.id}
                            className={`prepst-card prepst-card-${testimonial.color} p-6 lg:p-8`}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            {/* Score Improvement */}
                            <div className="flex items-center justify-between mb-6">
                                <div className="score-badge">
                                    <span className="score-old">{testimonial.oldScore}</span>
                                    <span className="score-arrow">→</span>
                                    <span className="score-new">{testimonial.newScore}</span>
                                </div>
                                <div className="inline-flex items-center gap-1.5 bg-[oklch(0.55_0.18_165_/_0.1)] text-[oklch(0.45_0.18_165)] px-3 py-1.5 rounded-full text-sm font-semibold">
                                    <span className="text-base">📈</span>
                                    +{testimonial.improvement}
                                </div>
                            </div>

                            {/* Quote */}
                            <p className="text-[oklch(0.30_0.02_270)] text-lg leading-relaxed mb-6">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[var(--prepst-mint-light)] to-[var(--prepst-lavender-light)] flex items-center justify-center text-2xl">
                                    {testimonial.avatar}
                                </div>
                                <div>
                                    <p className="font-semibold text-[oklch(0.20_0.02_270)]">{testimonial.name}</p>
                                    <p className="text-sm text-[oklch(0.55_0.02_270)]">PrepSt Student</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Stats Row */}
                <motion.div
                    className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    {[
                        { value: "50K+", label: "Students", emoji: "🎓" },
                        { value: "+200", label: "Avg. Improvement", emoji: "📈" },
                        { value: "4.9★", label: "App Rating", emoji: "⭐" },
                        { value: "92%", label: "Hit Target Score", emoji: "🎯" },
                    ].map((stat, i) => (
                        <div
                            key={i}
                            className="text-center p-6 bg-[oklch(0.98_0.01_270)] rounded-2xl"
                        >
                            <span className="text-3xl mb-2 block">{stat.emoji}</span>
                            <p className="text-2xl font-bold text-[oklch(0.20_0.02_270)] mb-1">{stat.value}</p>
                            <p className="text-sm text-[oklch(0.55_0.02_270)]">{stat.label}</p>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
