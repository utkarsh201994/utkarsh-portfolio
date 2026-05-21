"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiUser, FiMapPin, FiMail, FiPhone } from "react-icons/fi";
import { portfolioData } from "@/lib/data";

const { about, name, location, email, phone, education } = portfolioData;

const stats = [
  { value: "4+", label: "Years Experience" },
  { value: "30+", label: "Projects Delivered" },
  { value: "10+", label: "Technologies" },
  { value: "100%", label: "Client Satisfaction" },
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative" itemScope itemType="http://schema.org/Person">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-violet-400 font-semibold tracking-[0.3em] uppercase mb-3">
            About Me
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            The Person Behind{" "}
            <span className="gradient-text">the Code</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left — Avatar + Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Avatar Block */}
            <div className="gradient-border p-0.5 inline-block rounded-2xl glow-purple w-full flex-1">
              <div className="glass rounded-2xl p-6 flex items-center gap-5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400 via-violet-500 to-pink-500 flex items-center justify-center text-white font-bold text-2xl flex-shrink-0">
                  UK
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg" itemProp="name">{name}</h3>
                  <p className="text-white/70 text-sm font-medium" itemProp="jobTitle">UI & Frontend Developer</p>
                  <div className="flex items-center gap-1.5 mt-1 text-white/60 text-xs" itemProp="address" itemScope itemType="http://schema.org/PostalAddress">
                    <FiMapPin size={11} />
                    <span itemProp="addressLocality">{location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="glass rounded-2xl py-8 px-6">
              <p className="text-white/80 leading-relaxed text-sm" itemProp="description">
                {about}
              </p>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-2 gap-3 flex-1">
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <FiMail className="text-cyan-400 flex-shrink-0" size={16} />
                <div className="min-w-0">
                  <p className="text-white/50 text-xs mb-0.5 font-medium">Email</p>
                  <p className="text-white/80 text-xs truncate font-medium" itemProp="email">{email}</p>
                </div>
              </div>
              <div className="glass rounded-xl p-4 flex items-center gap-3">
                <FiPhone className="text-violet-400 flex-shrink-0" size={16} />
                <div>
                  <p className="text-white/50 text-xs mb-0.5 font-medium">Phone</p>
                  <p className="text-white/80 text-xs font-medium" itemProp="telephone">{phone}</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Stats + Education */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                  className="glass rounded-2xl p-5 text-center hover-lift"
                >
                  <p className="text-3xl font-bold gradient-text mb-1">{s.value}</p>
                  <p className="text-white/60 text-xs font-medium">{s.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Education */}
            <div className="glass rounded-2xl p-6" itemProp="alumniOf" itemScope itemType="http://schema.org/EducationalOrganization">
              <h4 className="text-white font-semibold text-sm mb-4 flex items-center gap-2">
                <FiUser className="text-violet-400" size={14} />
                Education
              </h4>
              <div className="space-y-4">
                {education.slice(0, 2).map((edu, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex gap-3"
                  >
                    <div className="w-1 bg-gradient-to-b from-violet-500 to-cyan-500 rounded-full flex-shrink-0 mt-1" />
                    <div>
                      <p className="text-white/80 font-medium text-sm">{edu.degree}</p>
                      <p className="text-white/60 text-xs mt-0.5">{edu.school}</p>
                      <p className="text-violet-400/80 text-xs font-medium">{edu.period}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
