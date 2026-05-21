"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FiExternalLink, FiStar } from "react-icons/fi";
import { portfolioData } from "@/lib/data";
import clsx from "clsx";

const { projects } = portfolioData;

const colorMap: Record<string, { border: string; badge: string; glow: string; tag: string }> = {
  cyan: {
    border: "hover:border-cyan-500/40",
    badge: "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
    glow: "hover:shadow-cyan-500/10",
    tag: "bg-cyan-500/5 text-cyan-400/70",
  },
  purple: {
    border: "hover:border-violet-500/40",
    badge: "bg-violet-500/10 text-violet-400 border-violet-500/20",
    glow: "hover:shadow-violet-500/10",
    tag: "bg-violet-500/5 text-violet-400/70",
  },
  pink: {
    border: "hover:border-pink-500/40",
    badge: "bg-pink-500/10 text-pink-400 border-pink-500/20",
    glow: "hover:shadow-pink-500/10",
    tag: "bg-pink-500/5 text-pink-400/70",
  },
};

export default function Projects() {
  const [showAll, setShowAll] = useState(false);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const displayed = showAll ? projects : featured;

  return (
    <section id="projects" className="section-padding relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-1/4 w-80 h-80 bg-pink-600/8 rounded-full blur-[120px]" />
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
          <p className="text-xs text-violet-400 font-semibold tracking-[0.3em] uppercase mb-3">
            Portfolio
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-white/60 text-sm max-w-xl mx-auto">
            A selection of freelance and open projects. Company projects are under NDA.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayed.map((project, i) => {
            const colors = colorMap[project.color] ?? colorMap.purple;
            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                className={clsx(
                  "glass rounded-2xl p-6 border border-white/5 transition-all duration-300 hover-lift hover:shadow-xl group cursor-pointer",
                  colors.border,
                  colors.glow
                )}
              >
                {/* Top Row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className={clsx("text-xs px-2.5 py-1 rounded-full border", colors.badge)}>
                      {project.type}
                    </span>
                    {project.featured && (
                      <span className="flex items-center gap-1 text-xs text-amber-400/80 font-medium">
                        <FiStar size={10} className="fill-amber-400/80" />
                        Featured
                      </span>
                    )}
                  </div>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white/40 hover:text-white transition-colors group-hover:text-white/70"
                    aria-label={`Open ${project.title}`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FiExternalLink size={16} />
                  </a>
                </div>

                {/* Title */}
                <h3 className="text-white font-semibold text-lg mb-2 group-hover:gradient-text transition-all">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-white/70 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={clsx(
                        "text-xs px-2 py-0.5 rounded-md font-medium",
                        colors.tag
                      )}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Show More */}
        {!showAll && rest.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.7 }}
            className="text-center mt-10"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowAll(true)}
              className="px-8 py-3 rounded-full glass border border-white/10 text-white/70 text-sm font-medium hover:text-white hover:border-white/20 transition-all"
            >
              Show {rest.length} More Projects ↓
            </motion.button>
          </motion.div>
        )}
      </div>
    </section>
  );
}
