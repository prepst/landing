"use client"

import { createAvatar } from "@bible-strong/avatar-react"
import "@bible-strong/avatar-react/styles.css"
import { AnimatePresence, motion, useReducedMotion } from "motion/react"
import { useState } from "react"
import { ThinkingOrb } from "thinking-orbs"

import definition from "@/public/strobi.avatar.json"

const Peppa = createAvatar(definition)

const steps = [
  {
    number: "01",
    title: "Diagnose",
    description: "Start with a quick read on what you know and where the next points are hiding.",
  },
  {
    number: "02",
    title: "Practice",
    description: "Work through focused questions that meet you at your current level.",
  },
  {
    number: "03",
    title: "Review",
    description: "See the pattern behind each miss, then return with a sharper plan.",
  },
]

const faqs = [
  {
    question: "What is PrepSt?",
    answer: "PrepSt is a free SAT prep platform that helps you practice, review, and decide what to work on next.",
  },
  {
    question: "Is the SAT tutor really free?",
    answer: "Yes. The SAT tutor is free to use, with no paid plan needed to start studying.",
  },
  {
    question: "How does practice adapt?",
    answer: "PrepSt uses your practice results to keep the next set of questions focused on the areas that need attention.",
  },
  {
    question: "Can I study in short sessions?",
    answer: "Yes. The experience is designed for focused sessions, so you can make progress without planning an entire afternoon.",
  },
]

function PrimaryLink({ className = "" }: { className?: string }) {
  return (
    <a className={`primary-link ${className}`} href="https://sat.prepst.com/">
      Start studying
    </a>
  )
}

function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode
  delay?: number
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  return (
    <motion.div
      className={className}
      initial={reduceMotion ? false : { opacity: 0, y: 22 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}

export function HomepageClient() {
  const reduceMotion = useReducedMotion()
  const [openFaq, setOpenFaq] = useState<number | null>(0)

  return (
    <div className="site-shell">
      <header className="site-nav">
        <a className="wordmark" href="#top" aria-label="PrepSt home">
          <span className="wordmark-mark" aria-hidden="true">P</span>
          <span>PrepSt</span>
        </a>
        <nav className="nav-links" aria-label="Primary navigation">
          <a href="#features">How it works</a>
          <a href="#faq">FAQ</a>
          <PrimaryLink />
        </nav>
      </header>

      <main id="top">
        <section className="hero-section">
          <div className="hero-copy">
            <motion.div
              className="eyebrow"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.45 }}
            >
              SAT prep, without the noise
            </motion.div>
            <motion.h1
              className="hero-title"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              Study with momentum.
            </motion.h1>
            <motion.p
              className="hero-description"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
            >
              A free SAT tutor that turns practice into a clear next step.
            </motion.p>
            <motion.div
              className="hero-actions"
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.24 }}
            >
              <PrimaryLink />
              <a className="text-link" href="#features">See the method <span aria-hidden="true">↘</span></a>
            </motion.div>
          </div>

          <motion.div
            className="hero-stage"
            initial={reduceMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="stage-topline">
              <span>Peppa / study guide</span>
              <span className="stage-live"><span className="live-dot" aria-hidden="true" /> Live</span>
            </div>
            <div className="avatar-wrap">
              <div className="avatar-halo" aria-hidden="true" />
              <div className="avatar-canvas">
                <Peppa animation="idle" size="100%" ariaLabel="Peppa, your SAT study guide" />
              </div>
              <div className="orb-card">
                <ThinkingOrb
                  state="working"
                  size={64}
                  theme="light"
                  aria-label="Peppa is working"
                />
                <div>
                  <span className="orb-label">Currently</span>
                  <strong>Finding your next win</strong>
                </div>
              </div>
            </div>
            <div className="stage-footer">
              <span>Focused practice</span>
              <span>Start where you are</span>
            </div>
          </motion.div>
        </section>

        <Reveal className="statement-section">
          <div className="section-rule" />
          <div className="statement-grid">
            <p className="section-kicker">A better study loop</p>
            <h2>Most prep gives you more to do. PrepSt shows you what matters next.</h2>
          </div>
        </Reveal>

        <section className="method-section" id="features">
          <Reveal>
            <div className="section-heading">
              <p className="section-kicker">The method</p>
              <h2>A study loop that gets clearer every time.</h2>
            </div>
          </Reveal>
          <div className="steps-list">
            {steps.map((step, index) => (
              <Reveal key={step.number} delay={index * 0.08} className="step-row">
                <span className="step-number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                <span className="step-arrow" aria-hidden="true">↗</span>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="features-section">
          <Reveal className="feature-intro">
            <p className="section-kicker">Built for the moments between “I should study” and “I know what to do.”</p>
            <h2>Less setup. More useful practice.</h2>
          </Reveal>
          <div className="feature-grid">
            <Reveal delay={0.04} className="feature-block feature-block-tall">
              <div className="feature-visual adaptive-visual" aria-hidden="true">
                <span className="visual-label">Your practice</span>
                <div className="practice-line"><i /><i /><i /><i /><i /></div>
                <div className="practice-caption"><span>Warm-up</span><strong>Ready for the next set</strong></div>
              </div>
              <div className="feature-copy">
                <span className="feature-index">01</span>
                <h3>Adaptive practice</h3>
                <p>Questions move with you, so each session has a point.</p>
              </div>
            </Reveal>
            <Reveal delay={0.12} className="feature-block feature-block-offset">
              <div className="feature-visual review-visual" aria-hidden="true">
                <span className="visual-label">Review note</span>
                <div className="review-note"><span>Why it missed</span><strong>Look for the relationship first.</strong></div>
                <div className="review-line" />
              </div>
              <div className="feature-copy">
                <span className="feature-index">02</span>
                <h3>Targeted review</h3>
                <p>Turn mistakes into patterns you can actually remember.</p>
              </div>
            </Reveal>
            <Reveal delay={0.2} className="feature-block feature-block-wide">
              <div className="feature-visual insight-visual" aria-hidden="true">
                <ThinkingOrb state="searching" size={20} theme="light" aria-label="Searching for patterns" />
                <div><span className="visual-label">Exam insight</span><strong>See the shape of your progress.</strong></div>
                <div className="insight-bars"><i /><i /><i /><i /></div>
              </div>
              <div className="feature-copy">
                <span className="feature-index">03</span>
                <h3>Exam insight</h3>
                <p>Know what to keep, what to change, and when to move on.</p>
              </div>
            </Reveal>
          </div>
        </section>

        <Reveal className="trust-section">
          <div className="trust-mark" aria-hidden="true">+</div>
          <div>
            <p className="section-kicker">Free SAT prep for real study days</p>
            <h2>No paywall between you and the next useful session.</h2>
          </div>
          <PrimaryLink />
        </Reveal>

        <section className="faq-section" id="faq">
          <Reveal>
            <div className="section-heading faq-heading">
              <p className="section-kicker">Questions, answered</p>
              <h2>Keep the plan simple.</h2>
            </div>
          </Reveal>
          <div className="faq-list">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index
              const answerId = `faq-answer-${index}`

              return (
                <Reveal key={faq.question} delay={index * 0.05} className="faq-item">
                  <button
                    type="button"
                    className="faq-trigger"
                    aria-expanded={isOpen}
                    aria-controls={answerId}
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                  >
                    <span>{faq.question}</span>
                    <span className="faq-plus" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen ? (
                      <motion.div
                        id={answerId}
                        className="faq-answer"
                        initial={reduceMotion ? false : { height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: reduceMotion ? 0 : 0.25 }}
                      >
                        <p>{faq.answer}</p>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </Reveal>
              )
            })}
          </div>
        </section>

        <Reveal className="closing-section">
          <div>
            <p className="section-kicker">Your next session starts here</p>
            <h2>Make the next question count.</h2>
          </div>
          <PrimaryLink />
        </Reveal>
      </main>

      <footer className="site-footer">
        <span className="wordmark"><span className="wordmark-mark" aria-hidden="true">P</span>PrepSt</span>
        <span>Free SAT prep, built for focused students.</span>
        <span>© {new Date().getFullYear()} PrepSt</span>
      </footer>
    </div>
  )
}
