"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { FiMail, FiLinkedin, FiPhone, FiSend, FiMapPin } from "react-icons/fi";
import { portfolioData } from "@/lib/data";

const { email, phone, linkedin, location } = portfolioData;

const contactInfo = [
  {
    icon: FiMail,
    label: "Email",
    value: email,
    href: `mailto:${email}`,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
  },
  {
    icon: FiLinkedin,
    label: "LinkedIn",
    value: "utkarshkumar",
    href: "https://www.linkedin.com/in/utkarsh-kumar-94783212b/",
    color: "text-violet-400",
    bg: "bg-violet-400/10",
  },
  {
    icon: FiPhone,
    label: "Phone",
    value: phone,
    href: `tel:${phone}`,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: FiMapPin,
    label: "Location",
    value: location,
    href: "#",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
];

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
    }, 1400);
  };

  return (
    <section id="contact" className="section-padding relative">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-violet-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-xs text-cyan-400 font-semibold tracking-[0.3em] uppercase mb-3">
            Get In Touch
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Let's <span className="gradient-text">Work Together</span>
          </h2>
          <p className="text-white/60 text-sm max-w-md mx-auto">
            Have a project in mind? I'd love to hear about it. Let's build something amazing.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left — Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="space-y-4"
          >
            {contactInfo.map((c, i) => (
              <motion.a
                key={c.label}
                href={c.href}
                target={c.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-4 glass rounded-2xl p-5 hover-lift border border-white/5 hover:border-white/10 transition-colors group"
              >
                <div className={`w-11 h-11 rounded-xl ${c.bg} flex items-center justify-center flex-shrink-0`}>
                  <c.icon size={18} className={c.color} />
                </div>
                <div>
                  <p className="text-white/50 text-xs mb-0.5 font-medium">{c.label}</p>
                  <p className="text-white/80 text-sm group-hover:text-white transition-colors">{c.value}</p>
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="glass-strong rounded-2xl p-8 gradient-border">
              {status === "sent" ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-16 h-16 rounded-full bg-green-400/20 flex items-center justify-center mx-auto mb-4">
                    <FiSend size={24} className="text-green-400" />
                  </div>
                  <h3 className="text-white font-semibold text-lg mb-2">Message Sent!</h3>
                  <p className="text-white/60 text-sm">I'll get back to you within 24 hours.</p>
                  <button
                    onClick={() => setStatus("idle")}
                    className="mt-6 text-xs text-violet-400 hover:text-violet-300 transition-colors"
                  >
                    Send another message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name-input" className="block text-xs text-white/60 font-medium mb-2">Your Name</label>
                    <input
                      id="name-input"
                      type="text"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      required
                      placeholder="Your name"
                      autoComplete="name"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="email-input" className="block text-xs text-white/60 font-medium mb-2">Email Address</label>
                    <input
                      id="email-input"
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      required
                      placeholder="Your email address"
                      autoComplete="email"
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors"
                    />
                  </div>
                  <div>
                    <label htmlFor="message-input" className="block text-xs text-white/60 font-medium mb-2">Message</label>
                    <textarea
                      id="message-input"
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      required
                      rows={5}
                      placeholder="Tell me about your project..."
                      className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white text-sm placeholder-white/40 focus:outline-none focus:border-violet-500/50 transition-colors resize-none"
                    />
                  </div>
                  <motion.button
                    type="submit"
                    disabled={status === "sending"}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-3.5 rounded-xl bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-white font-semibold text-sm flex items-center justify-center gap-2 disabled:opacity-70 shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-shadow"
                  >
                    {status === "sending" ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend size={15} />
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
