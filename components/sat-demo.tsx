"use client";

import { Badge } from "@/components/ui/badge";
import {
  GraduationCap,
  TrendingUp,
  Calendar,
  UserCheck,
  ExternalLink,
  Zap,
  Target,
  Award,
} from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function SATDemo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: TrendingUp,
      title: "Guaranteed Score Improvement",
      description:
        "Average 200+ point increase. We track your progress daily and guarantee results — or your money back",
      gradient: "from-primary/20 to-primary/5",
      iconColor: "text-primary",
    },
    {
      icon: Calendar,
      title: "Your Personal Study Plan",
      description:
        "We build you a custom schedule that fits your life. Just 30 minutes a day, and we handle the rest",
      gradient: "from-secondary/20 to-secondary/5",
      iconColor: "text-secondary",
    },
    {
      icon: UserCheck,
      title: "24/7 Attentive Tutor",
      description:
        "Like having a tutor who's always there — catching mistakes, explaining concepts, celebrating wins",
      gradient: "from-accent/20 to-accent/5",
      iconColor: "text-accent",
    },
  ];

  const stats = [
    { label: "Average Score Increase", value: "+200 Points", icon: Zap },
    { label: "Daily Study Time", value: "30 Minutes", icon: Target },
    { label: "Practice Questions", value: "2,000+", icon: Award },
  ];

  const badges = [
    "95% Success Rate",
    "1,000+ Students",
    "Ivy League Ready",
    "Parent Approved",
  ];

  return (
    <section
      id="sat-demo"
      className="relative py-32 px-4 sm:px-6 lg:px-8 section-gradient scroll-mt-24 overflow-hidden"
      ref={ref}
    >
      {/* Background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <motion.div
          className="absolute top-20 -left-20 w-96 h-96 rounded-full bg-primary/10 blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-20 -right-20 w-80 h-80 rounded-full bg-secondary/10 blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 12, repeat: Infinity }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                transition={{ delay: 0.1 }}
              >
                <Badge className="mb-6 px-4 py-2 text-sm font-medium bg-gradient-to-r from-secondary/90 to-secondary text-secondary-foreground border-0 shadow-lg shadow-secondary/20">
                  Start Free Today
                </Badge>
              </motion.div>

              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 text-balance tracking-tight leading-[1.1]">
                <span className="text-white">Boost Your SAT Score</span>
                <br />
                <span className="gradient-text">with a Personal Tutor</span>
              </h2>

              <p className="text-lg text-white/60 mb-10 leading-relaxed max-w-xl">
                We create your personalized study plan. You just show up for 30
                minutes a day.
              </p>

              {/* Feature list */}
              <div className="space-y-5 mb-10">
                {features.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-4 group"
                  >
                    <div
                      className={`p-3 rounded-xl bg-gradient-to-br ${item.gradient} border border-white/5 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <item.icon className={`h-5 w-5 ${item.iconColor}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-white mb-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-white/50 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <motion.a
                  href="https://sat.prepst.com/dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glow-button inline-flex items-center justify-center gap-3 rounded-full text-base font-semibold h-14 px-8 text-white group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GraduationCap className="h-5 w-5" />
                  <span>Free SAT Tutoring</span>
                  <ExternalLink className="h-4 w-4 opacity-60 group-hover:opacity-100 transition-opacity" />
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right column - Card */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10">
                <div className="space-y-8">
                  <div>
                    <div className="text-sm text-white/40 mb-2 uppercase tracking-widest">
                      What You Get
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-bold text-white">
                      Everything You Need to Succeed
                    </h3>
                  </div>

                  {/* Stats */}
                  <div className="space-y-4">
                    {stats.map((item, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                        className="flex items-center justify-between p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-primary/30 hover:bg-white/10 transition-all duration-300 group cursor-default"
                      >
                        <div className="flex items-center gap-3">
                          <item.icon className="h-5 w-5 text-primary/70 group-hover:text-primary transition-colors" />
                          <span className="font-medium text-white/80">
                            {item.label}
                          </span>
                        </div>
                        <Badge
                          variant="secondary"
                          className="bg-gradient-to-r from-primary/20 to-primary/10 text-primary border-primary/20 font-semibold"
                        >
                          {item.value}
                        </Badge>
                      </motion.div>
                    ))}
                  </div>

                  {/* Success badges */}
                  <div className="pt-6 border-t border-white/10">
                    <div className="text-sm text-white/40 mb-4 uppercase tracking-widest">
                      Join These Success Stories
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {badges.map((stat, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                          transition={{
                            duration: 0.3,
                            delay: 0.8 + index * 0.05,
                          }}
                        >
                          <Badge
                            variant="outline"
                            className="border-white/20 text-white/70 hover:border-primary/40 hover:text-primary transition-colors cursor-default"
                          >
                            {stat}
                          </Badge>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative glow */}
              <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-8 -left-8 w-40 h-40 bg-secondary/15 rounded-full blur-3xl pointer-events-none" />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
