"use client"

import { motion } from "framer-motion"
import { LineChart, Line, XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts"

const scoreData = [
    { week: "Start", low: 1000, mid: 1150, high: 1300 },
    { week: "Week 2", low: 1040, mid: 1200, high: 1340 },
    { week: "Week 4", low: 1100, mid: 1260, high: 1390 },
    { week: "Week 6", low: 1160, mid: 1320, high: 1440 },
    { week: "Week 8", low: 1220, mid: 1380, high: 1490 },
    { week: "Week 10", low: 1280, mid: 1430, high: 1530 },
    { week: "Week 12", low: 1340, mid: 1480, high: 1560 },
]

export function PrepstDataViz() {
    return (
        <section className="prepst-gradient-dark py-20 lg:py-32 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[oklch(0.55_0.18_165_/_0.1)] rounded-full blur-3xl" />
                <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-[oklch(0.68_0.12_290_/_0.1)] rounded-full blur-3xl" />
            </div>

            <div className="prepst-container relative z-10">
                <motion.div
                    className="text-center mb-12"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="inline-block text-4xl mb-4">📊</span>
                    <h2 className="prepst-heading-lg text-white mb-4">
                        Proven score growth across{" "}
                        <span className="bg-gradient-to-r from-[oklch(0.85_0.12_165)] to-[oklch(0.88_0.15_85)] bg-clip-text text-transparent">
                            all starting levels
                        </span>
                    </h2>
                    <p className="text-lg text-[oklch(0.75_0.02_270)] max-w-2xl mx-auto">
                        Whether you're starting at 1000 or 1400, PrepSt students see consistent improvement.
                    </p>
                </motion.div>

                {/* Chart */}
                <motion.div
                    className="bg-[oklch(0.15_0.02_270_/_0.5)] backdrop-blur-md rounded-3xl p-6 lg:p-10 border border-[oklch(0.30_0.02_270_/_0.3)]"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    {/* Legend */}
                    <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[oklch(0.85_0.12_165)]" />
                            <span className="text-sm text-[oklch(0.75_0.02_270)]">High performers (1300+)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[oklch(0.72_0.16_165)]" />
                            <span className="text-sm text-[oklch(0.75_0.02_270)]">Average (1100-1300)</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[oklch(0.55_0.14_165)]" />
                            <span className="text-sm text-[oklch(0.75_0.02_270)]">Building up (&lt;1100)</span>
                        </div>
                    </div>

                    {/* Chart Container */}
                    <div className="h-64 md:h-80 w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={scoreData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="highGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="oklch(0.85 0.12 165)" stopOpacity={0.4} />
                                        <stop offset="95%" stopColor="oklch(0.85 0.12 165)" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="midGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="oklch(0.72 0.16 165)" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="oklch(0.72 0.16 165)" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="lowGradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="oklch(0.55 0.14 165)" stopOpacity={0.2} />
                                        <stop offset="95%" stopColor="oklch(0.55 0.14 165)" stopOpacity={0} />
                                    </linearGradient>
                                    <filter id="glow">
                                        <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                                        <feMerge>
                                            <feMergeNode in="coloredBlur" />
                                            <feMergeNode in="SourceGraphic" />
                                        </feMerge>
                                    </filter>
                                </defs>
                                <XAxis
                                    dataKey="week"
                                    stroke="oklch(0.50 0.02 270)"
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fill: 'oklch(0.60 0.02 270)', fontSize: 12 }}
                                />
                                <YAxis
                                    stroke="oklch(0.50 0.02 270)"
                                    tickLine={false}
                                    axisLine={false}
                                    tick={{ fill: 'oklch(0.60 0.02 270)', fontSize: 12 }}
                                    domain={[900, 1600]}
                                    ticks={[1000, 1200, 1400, 1600]}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="high"
                                    stroke="oklch(0.85 0.12 165)"
                                    strokeWidth={3}
                                    fill="url(#highGradient)"
                                    filter="url(#glow)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="mid"
                                    stroke="oklch(0.72 0.16 165)"
                                    strokeWidth={3}
                                    fill="url(#midGradient)"
                                    filter="url(#glow)"
                                />
                                <Area
                                    type="monotone"
                                    dataKey="low"
                                    stroke="oklch(0.55 0.14 165)"
                                    strokeWidth={3}
                                    fill="url(#lowGradient)"
                                    filter="url(#glow)"
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    {/* Improvement callouts */}
                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { range: "Starting below 1100", improvement: "+260 avg", emoji: "🚀" },
                            { range: "Starting 1100-1300", improvement: "+200 avg", emoji: "📈" },
                            { range: "Starting above 1300", improvement: "+180 avg", emoji: "⭐" },
                        ].map((item, i) => (
                            <div
                                key={i}
                                className="flex items-center gap-3 p-4 bg-[oklch(0.20_0.03_270_/_0.5)] rounded-xl border border-[oklch(0.35_0.02_270_/_0.3)]"
                            >
                                <span className="text-2xl">{item.emoji}</span>
                                <div>
                                    <p className="text-sm text-[oklch(0.70_0.02_270)]">{item.range}</p>
                                    <p className="text-lg font-bold text-white">{item.improvement}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    )
}
