"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { portfolioData } from "@/lib/data";

const { skills } = portfolioData;
const categories = ["All", "Frontend", "Styling", "No-Code", "Tools"];

const categoryColors: Record<string, string> = {
  Frontend: "from-cyan-400 to-cyan-600",
  Styling: "from-violet-400 to-violet-600",
  "No-Code": "from-pink-400 to-pink-600",
  Tools: "from-amber-400 to-orange-500",
};

const badgeColors: Record<string, string> = {
  Frontend: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  Styling: "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "No-Code": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  Tools: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState("All");
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const filtered = activeCategory === "All"
    ? skills
    : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="section-padding relative">
      {/* Bg accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 right-0 w-72 h-72 bg-violet-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-xs text-cyan-400 font-semibold tracking-[0.3em] uppercase mb-3">
            Skills & Expertise
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/20"
                  : "glass border border-white/10 text-white/50 hover:text-white hover:border-white/20"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-2 gap-4">
          {filtered.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.05 }}
              className="glass rounded-2xl p-5 hover-lift group"
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-3">
                  <span className={`text-xs px-2.5 py-0.5 rounded-full border ${badgeColors[skill.category]}`}>
                    {skill.category}
                  </span>
                  <span className="text-white font-semibold text-sm">{skill.name}</span>
                </div>
                <span className="text-white/70 text-sm font-semibold font-mono">{skill.level}%</span>
              </div>
              {/* Progress Bar */}
              <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={inView ? { scaleX: skill.level / 100 } : { scaleX: 0 }}
                  transition={{ duration: 1, delay: 0.4 + i * 0.05, ease: "easeOut" }}
                  style={{ transformOrigin: "left" }}
                  className={`h-full rounded-full bg-gradient-to-r ${categoryColors[skill.category] ?? "from-gray-400 to-gray-600"}`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
