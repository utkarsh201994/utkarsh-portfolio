"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiBriefcase, FiCalendar, FiMapPin, FiCheck } from "react-icons/fi";
import { portfolioData } from "@/lib/data";
import clsx from "clsx";

const { experience } = portfolioData;

const colorMap: Record<string, { dot: string; glow: string; badge: string }> = {
  cyan: {
    dot: "bg-cyan-400",
    glow: "shadow-cyan-400/40",
    badge: "bg-cyan-400/10 text-cyan-400 border border-cyan-400/20",
  },
  purple: {
    dot: "bg-violet-400",
    glow: "shadow-violet-400/40",
    badge: "bg-violet-400/10 text-violet-400 border border-violet-400/20",
  },
  pink: {
    dot: "bg-pink-400",
    glow: "shadow-pink-400/40",
    badge: "bg-pink-400/10 text-pink-400 border border-pink-400/20",
  },
};

export default function Experience() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="section-padding relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/8 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-pink-400 font-semibold tracking-[0.3em] uppercase mb-3">
            Work History
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="gradient-text">Experience</span>
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyan-500/50 via-violet-500/50 to-pink-500/50 -translate-x-px" />

          <div className="space-y-12">
            {experience.map((exp, i) => {
              const colors = colorMap[exp.color] ?? colorMap.purple;
              const isEven = i % 2 === 0;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isEven ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                  className={clsx(
                    "relative flex md:items-center",
                    isEven
                      ? "md:flex-row flex-col pl-14 md:pl-0"
                      : "md:flex-row-reverse flex-col pl-14 md:pl-0"
                  )}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                    <div
                      className={clsx(
                        "w-4 h-4 rounded-full border-2 border-dark-950 shadow-lg",
                        colors.dot,
                        colors.glow
                      )}
                    />
                  </div>

                  {/* Card */}
                  <div
                    className={clsx(
                      "md:w-[calc(50%-2rem)] w-full",
                      isEven ? "md:mr-auto md:pr-8" : "md:ml-auto md:pl-8"
                    )}
                  >
                    <div className="glass rounded-2xl p-6 hover-lift">
                      {/* Header */}
                      <div className="flex items-start justify-between gap-3 mb-3">
                        <div>
                          <h3 className="text-white font-semibold text-base mb-0.5">{exp.role}</h3>
                          <div className="flex items-center gap-2">
                            <FiBriefcase size={12} className="text-white/40" />
                            <span className="text-white/70 text-sm font-medium">{exp.company}</span>
                          </div>
                        </div>
                        <span className={clsx("text-xs px-2.5 py-1 rounded-full flex-shrink-0", colors.badge)}>
                          {exp.duration}
                        </span>
                      </div>

                      {/* Meta */}
                      <div className="flex flex-wrap gap-x-4 gap-y-1 mb-4 text-xs text-white/60 font-medium">
                        <span className="flex items-center gap-1">
                          <FiCalendar size={10} />
                          {exp.period}
                        </span>
                        <span className="flex items-center gap-1">
                          <FiMapPin size={10} />
                          {exp.location}
                        </span>
                      </div>

                      <p className="text-white/80 text-sm leading-relaxed mb-4">
                        {exp.description}
                      </p>

                      {/* Highlights */}
                      <ul className="space-y-2">
                        {exp.highlights.map((h, j) => (
                          <li key={j} className="flex items-start gap-2 text-xs text-white/70 font-medium leading-relaxed">
                            <FiCheck size={12} className={clsx("mt-0.5 flex-shrink-0", `text-${exp.color === "cyan" ? "cyan" : exp.color === "pink" ? "pink" : "violet"}-400`)} />
                            {h}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
