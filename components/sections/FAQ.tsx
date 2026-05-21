"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What frontend technologies do you specialize in?",
    answer: "I specialize in modern React.js, Next.js (App Router & Pages Router), TypeScript, Vue.js, and ES6+ JavaScript. For design and layouts, I am an expert in Tailwind CSS, SCSS, responsive CSS frameworks, and implementing high-fidelity designs directly from Figma.",
  },
  {
    question: "What is your experience with No-Code platforms like Bubble.io?",
    answer: "I have over 3 years of hands-on experience building complex SaaS architectures, admin dashboards, databases, and custom workflows on Bubble.io. I bridge the gap between traditional engineering and No-Code, creating hybrid web experiences that are fast, flexible, and scalable.",
  },
  {
    question: "Do you offer remote consulting and contract freelance services?",
    answer: "Yes! I work with clients and companies worldwide. I am available for short-term and long-term freelance frontend development roles, custom React/NextJS migrations, WordPress setups, and Bubble.io consulting projects.",
  },
  {
    question: "How do you optimize web applications for speed and core web vitals?",
    answer: "I employ senior frontend optimization techniques: leveraging Next.js static page generation (SSG) and incremental static regeneration (ISR), dynamically importing heavy components below the fold, optimizing custom asset loading (next/image, font subsets), minimizing paint/reflow using hardware-accelerated CSS properties (like scaleX instead of width animations), and reducing bundle sizes.",
  },
  {
    question: "What is your typical project handoff and collaboration workflow?",
    answer: "I follow a modern collaborative model: starting with architectural mapping and Figma reviews, setting up Git repositories with robust CI/CD, providing weekly interactive milestones, performing cross-browser and accessibility audits (WCAG compliant), and delivering clean, commented, and typed codebase.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding relative">
      {/* Background radial accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 left-10 w-80 h-80 bg-cyan-600/5 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-violet-400 font-semibold tracking-[0.3em] uppercase mb-3">
            Q&A Section
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            Get quick answers to common questions about my technical skillset, professional experience, and work availability.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                className="glass rounded-2xl overflow-hidden border border-white/5 hover:border-white/10 transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 text-white font-medium hover:text-cyan-400 focus:outline-none transition-colors"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-button-${index}`}
                >
                  <span className="text-sm md:text-base pr-4">{faq.question}</span>
                  <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center flex-shrink-0 text-white/50 group-hover:text-white transition-colors">
                    {isOpen ? <FiMinus size={14} /> : <FiPlus size={14} />}
                  </div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-answer-${index}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      role="region"
                      aria-labelledby={`faq-button-${index}`}
                    >
                      <div className="px-6 pb-6 pt-1 text-sm text-white/70 border-t border-white/5 leading-relaxed bg-white/[0.01]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
