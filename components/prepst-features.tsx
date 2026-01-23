"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const features = [
    {
        id: "adaptive",
        title: "Adaptive Practice",
        headline: "15,000+ ways to ace the SAT",
        description: "Our AI analyzes your performance in real-time, serving questions at exactly the right difficulty. Practice smarter, not harder.",
        image: "/feature-adaptive.png",
        color: "mint",
        align: "right",
    },
    {
        id: "insight",
        title: "Real Exam Insight",
        headline: "Crack the exam's crazy code",
        description: "PrepSt understands the SAT inside and out. We've analyzed thousands of real exam questions to show you exactly what to expect.",
        image: "/feature-insight.png",
        color: "coral",
        align: "left",
    },
    {
        id: "review",
        title: "Smart Review",
        headline: "Practice like the real game",
        description: "Missed a question? We'll bring it back at the perfect moment. Our spaced repetition system ensures you actually remember what you learn.",
        image: "/feature-review.png",
        color: "lavender",
        align: "right",
    },
    {
        id: "vocab",
        title: "Vocabulary Builder",
        headline: "Level up your vocab game",
        description: "Build your vocabulary with engaging exercises, daily streaks, and bite-sized lessons. Watch your progress grow as you master SAT-level words.",
        image: "/feature-vocab.png",
        color: "yellow",
        align: "left",
    },
]

export function PrepstFeatures() {
    return (
        <section id="features" className="py-0">
            {features.map((feature, index) => (
                <FeatureSection key={feature.id} feature={feature} index={index} />
            ))}
        </section>
    )
}

function FeatureSection({
    feature,
    index
}: {
    feature: typeof features[0]
    index: number
}) {
    const isImageRight = feature.align === "right"

    return (
        <motion.div
            className={`prepst-section ${index % 2 === 0 ? 'bg-white' : 'bg-[oklch(0.99_0.005_270)]'
                }`}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
        >
            <div className="prepst-container">
                <div className={`flex flex-col ${isImageRight ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-20`}>
                    {/* Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        initial={{ opacity: 0, x: isImageRight ? -30 : 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-3 ${feature.color === 'mint' ? 'text-[oklch(0.45_0.15_165)]' :
                                feature.color === 'coral' ? 'text-[oklch(0.50_0.14_25)]' :
                                    feature.color === 'lavender' ? 'text-[oklch(0.50_0.12_290)]' :
                                        'text-[oklch(0.50_0.15_85)]'
                            }`}>
                            {feature.title}
                        </span>

                        <h2 className="prepst-heading-lg text-[oklch(0.15_0.02_270)] mb-4">
                            {feature.headline}
                        </h2>

                        <p className="prepst-body max-w-lg mx-auto lg:mx-0 mb-6">
                            {feature.description}
                        </p>

                        <a
                            href="https://sat.prepst.com/"
                            className={`inline-flex items-center gap-2 font-semibold text-sm transition-colors ${feature.color === 'mint' ? 'text-[oklch(0.45_0.15_165)] hover:text-[oklch(0.35_0.18_165)]' :
                                feature.color === 'coral' ? 'text-[oklch(0.50_0.14_25)] hover:text-[oklch(0.40_0.16_25)]' :
                                    feature.color === 'lavender' ? 'text-[oklch(0.50_0.12_290)] hover:text-[oklch(0.40_0.14_290)]' :
                                        'text-[oklch(0.50_0.15_85)] hover:text-[oklch(0.40_0.18_85)]'
                            }`}>
                            Learn more
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </a>
                    </motion.div>

                    {/* Illustration */}
                    <motion.div
                        className="flex-1 w-full max-w-md lg:max-w-xl"
                        initial={{ opacity: 0, x: isImageRight ? 30 : -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                    >
                        <div className="relative">
                            <Image
                                src={feature.image}
                                alt={feature.headline}
                                width={600}
                                height={600}
                                className="w-full h-auto object-contain drop-shadow-xl"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </motion.div>
    )
}
