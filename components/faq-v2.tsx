"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, HelpCircle, MessageCircle } from "lucide-react"

const faqs = [
  {
    question: "How is PrepSt different from Khan Academy or other free resources?",
    answer: "PrepSt is built to adapt to you. Instead of sending every student through the same sequence, it learns how you answer, where you slow down, and what you are ready for next. It is also built by students, so the experience feels simpler, faster, and more useful day to day."
  },
  {
    question: "How quickly will I see results?",
    answer: "Most students see their first meaningful improvement (50+ points) within 2-3 weeks of consistent use. Our AI starts building your cognitive profile from the very first question, so the personalization gets better every day. Students who use PrepSt for 30+ days see an average improvement of 200+ points."
  },
  {
    question: "Is PrepSt really free? What's the catch?",
    answer: "Yes. PrepSt is completely free. No credit card, no hidden upgrade, no catch. We built it because students should have access to serious SAT prep without having to pay for it."
  },
  {
    question: "How accurate are the score predictions?",
    answer: "Our predictive model has a 95% accuracy rate within +/- 30 points. After you've answered about 100 questions, we can forecast your SAT score with remarkable precision. This helps you know exactly when you're ready for the real test - no more guessing or taking the exam prematurely."
  },
  {
    question: "Does PrepSt work for all starting scores?",
    answer: "Absolutely! Whether you're starting at 900 or 1400, PrepSt adapts to your level. Students starting below 1100 see an average gain of 260 points. Students starting 1100-1300 improve by 200 points on average. Even high scorers (1300+) gain an average of 180 points. The AI meets you where you are."
  },
  {
    question: "How much time do I need to study each day?",
    answer: "We recommend 20-30 minutes daily for optimal results. The key is consistency, not marathon sessions. Our spaced repetition system is designed for bite-sized daily practice. Even 15 minutes a day will yield better results than cramming for 3 hours once a week."
  },
  {
    question: "Is my data safe?",
    answer: "100%. We take privacy seriously. Your data is encrypted, never sold to third parties, and used only to improve your learning experience. We're students too - we get it."
  },
]

function FAQItem({ question, answer, isOpen, onClick }: { 
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="text-lg font-medium text-gray-900 group-hover:text-[#674bc4] transition-colors pr-8">
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
          className="flex-shrink-0"
        >
          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
            isOpen ? 'bg-[#dad3fd]' : 'bg-gray-100 group-hover:bg-[#dad3fd]'
          }`}>
            <ChevronDown className={`w-5 h-5 transition-colors ${
              isOpen ? 'text-[#674bc4]' : 'text-gray-500'
            }`} />
          </div>
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-gray-600 leading-relaxed">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export function FAQV2() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-white text-gray-700 rounded-full px-4 py-2 text-sm font-medium mb-6 shadow-sm">
            <HelpCircle className="w-4 h-4" />
            Common Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Got questions? We've got answers.
          </h2>
          <p className="text-lg text-gray-600">
            Everything you need to know about PrepSt.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-600 mb-4">Still have questions?</p>
          <a
            href="mailto:hello@prepst.com"
            className="inline-flex items-center gap-2 text-[#674bc4] font-medium hover:underline"
          >
            <MessageCircle className="w-4 h-4" />
            Chat with the student team
          </a>
        </motion.div>
      </div>
    </section>
  )
}
