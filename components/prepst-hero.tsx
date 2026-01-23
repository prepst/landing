"use client"

import { motion } from "framer-motion"
import { ArrowRight, PlayCircle } from "lucide-react"
import Image from "next/image"

export function PrepstHero() {
    return (
        <section className="prepst-gradient-hero relative min-h-screen flex items-center justify-center overflow-hidden pt-16">


            {/* Floating Mascots - Now with actual images */}
            {/* <motion.div
                className="hidden md:block absolute top-24 left-[10%] w-24 h-24 md:w-32 md:h-32 float-gentle z-20"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6, type: "spring" }}
            >
                <Image
                    src="/mascot-mint.png"
                    alt="PrepSt mascot"
                    width={128}
                    height={128}
                    className="w-full h-full object-contain drop-shadow-lg"
                />
            </motion.div> */}

            {/* <motion.div
                className="hidden md:block absolute top-32 right-[12%] w-20 h-20 md:w-28 md:h-28 float-bounce float-delayed-1 z-20"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6, type: "spring" }}
            >
                <Image
                    src="/mascot-coral.png"
                    alt="PrepSt mascot reading"
                    width={112}
                    height={112}
                    className="w-full h-full object-contain drop-shadow-lg"
                />
            </motion.div> */}

            {/* <motion.div
                className="hidden md:block absolute bottom-36 left-[15%] w-18 h-18 md:w-24 md:h-24 float-sway float-delayed-2 z-20"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6, type: "spring" }}
            >
                <Image
                    src="/mascot-purple.png"
                    alt="PrepSt mascot with glasses"
                    width={96}
                    height={96}
                    className="w-full h-full object-contain drop-shadow-lg"
                />
            </motion.div>

            <motion.div
                className="hidden md:block absolute bottom-40 right-[18%] w-16 h-16 md:w-20 md:h-20 float-gentle float-delayed-3 z-20"
                initial={{ opacity: 0, scale: 0.5, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6, type: "spring" }}
            >
                <Image
                    src="/mascot-star.png"
                    alt="PrepSt star mascot"
                    width={80}
                    height={80}
                    className="w-full h-full object-contain drop-shadow-lg"
                />
            </motion.div> */}

            {/* Content */}
            <div className="prepst-container relative z-10 text-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    {/* Score Badge */}
                    <motion.div
                        className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 mb-8 border border-[oklch(0.94_0.01_270)] shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span className="text-2xl">🎓</span>
                        <span className="font-medium text-sm text-[oklch(0.35_0.02_270)]">
                            Join 5,000+ students crushing the SAT
                        </span>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        className="mb-8"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.6, type: "spring" }}
                    >
                        <Image
                            src="/hero.png"
                            alt="PrepSt Hero"
                            width={1000}
                            height={800}
                            className="w-full max-w-3xl mx-auto h-auto object-contain"
                            priority
                        />
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="prepst-heading-xl text-[oklch(0.15_0.02_270)] max-w-3xl mx-auto mb-6"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                    >
                        Your dream score{" "}
                        <span className="text-black">
                            starts here.
                        </span>
                    </motion.h1>

                    {/* Subtext */}
                    <motion.p
                        className="prepst-body max-w-xl mx-auto mb-10"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                    >
                        Personalized prep that adapts to how you learn. Smarter practice,
                        targeted review, and real exam insights—all in one place.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.7 }}
                    >
                        <a
                            href="https://sat.prepst.com/"
                            className="prepst-btn-primary flex items-center gap-2 text-lg"
                        >
                            Get started
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="#features"
                            className="prepst-btn-secondary flex items-center gap-2 text-lg"
                        >
                            <PlayCircle className="w-5 h-5" />
                            See how it works
                        </a>
                    </motion.div>

                    {/* Trust Signals */}
                    <motion.div
                        className="mt-16 flex flex-wrap items-center justify-center gap-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <div className="flex items-center gap-2">
                            <div className="flex -space-x-2">
                                {["/mascot-mint.png", "/mascot-coral.png", "/mascot-purple.png", "/mascot-star.png"].map((src, i) => (
                                    <div
                                        key={i}
                                        className="w-8 h-8 rounded-full bg-white flex items-center justify-center border-2 border-white overflow-hidden shadow-sm"
                                    >
                                        <Image src={src} alt="" width={32} height={32} className="w-full h-full object-cover" />
                                    </div>
                                ))}
                            </div>
                            <span className="text-sm text-[oklch(0.45_0.02_270)]">
                                <strong className="text-[oklch(0.25_0.02_270)]">5,000+</strong> students
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-yellow-500">★★★★★</span>
                            <span className="text-sm text-[oklch(0.45_0.02_270)]">
                                <strong className="text-[oklch(0.25_0.02_270)]">4.9/5</strong> rating
                            </span>
                        </div>
                        <div className="text-sm text-[oklch(0.45_0.02_270)]">
                            Average <strong className="text-[oklch(0.25_0.02_270)]">+200 point</strong> improvement
                        </div>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, y: [0, 8, 0] }}
                transition={{ delay: 1.5, y: { repeat: Infinity, duration: 2 } }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-[oklch(0.80_0.02_270)] flex items-start justify-center p-2">
                    <div className="w-1.5 h-3 rounded-full bg-[oklch(0.55_0.18_165)]" />
                </div>
            </motion.div>
        </section>
    )
}
