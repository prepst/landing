"use client"

import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import Image from "next/image"

export function PrepstClosing() {
    return (
        <section className="relative overflow-hidden">
            {/* Full-bleed Journey Scene */}
            <div className="relative">
                <Image
                    src="/journey-scene.png"
                    alt="Journey to 1600"
                    width={1920}
                    height={1080}
                    className="w-full h-auto min-h-[500px] object-cover"
                    priority
                />

                {/* Overlay content */}
                <div className="absolute inset-0 flex items-end justify-center pb-16 md:pb-24 bg-gradient-to-t from-[oklch(0.08_0.03_270)] via-transparent to-transparent">
                    <motion.div
                        className="text-center px-6 max-w-2xl"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                            Built for you,{" "}
                            <span className="bg-gradient-to-r from-[oklch(0.85_0.12_165)] to-[oklch(0.88_0.15_85)] bg-clip-text text-transparent">
                                by students
                            </span>
                        </h2>
                        <p className="text-lg text-[oklch(0.80_0.02_270)] mb-8">
                            We remember the stress of SAT prep. Your success is our mission.
                        </p>

                        {/* Final CTA */}
                        <button className="prepst-btn-primary text-lg flex items-center gap-2 mx-auto">
                            Start your journey
                            <ArrowRight className="w-5 h-5" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
