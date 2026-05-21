"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import clsx from "clsx";

const navLinks = [
  { label: "Home", href: "#hero" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  // { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("Home");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
          scrolled
            ? "py-3 glass border-b border-white/5"
            : "py-5 bg-transparent"
        )}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M26.25 20V10C26.2496 9.56159 26.1338 9.13101 25.9144 8.75145C25.695 8.37189 25.3797 8.0567 25 7.8375L16.25 2.8375C15.87 2.61808 15.4388 2.50256 15 2.50256C14.5612 2.50256 14.13 2.61808 13.75 2.8375L5 7.8375C4.62033 8.0567 4.30498 8.37189 4.08558 8.75145C3.86618 9.13101 3.75045 9.56159 3.75 10V20C3.75045 20.4384 3.86618 20.869 4.08558 21.2485C4.30498 21.6281 4.62033 21.9433 5 22.1625L13.75 27.1625C14.13 27.3819 14.5612 27.4974 15 27.4974C15.4388 27.4974 15.87 27.3819 16.25 27.1625L25 22.1625C25.3797 21.9433 25.695 21.6281 25.9144 21.2485C26.1338 20.869 26.2496 20.4384 26.25 20Z" stroke="url(#paint0_linear_3_3)" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.375 5.2625L15 8.51251L20.625 5.2625" stroke="url(#paint1_linear_3_3)" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M9.375 24.7375V18.25L3.75 15" stroke="url(#paint2_linear_3_3)" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M26.25 15L20.625 18.25V24.7375" stroke="url(#paint3_linear_3_3)" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M4.08749 8.7L15 15.0125L25.9125 8.7" stroke="url(#paint4_linear_3_3)" stroke-linecap="round" stroke-linejoin="round" />
              <path d="M15 27.6V15" stroke="url(#paint5_linear_3_3)" stroke-linecap="round" stroke-linejoin="round" />
              <defs>
                <linearGradient id="paint0_linear_3_3" x1="15" y1="2.50256" x2="15" y2="27.4974" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00D9FF" />
                  <stop offset="0.5" stop-color="#8B5CF6" />
                  <stop offset="1" stop-color="#EC4899" />
                </linearGradient>
                <linearGradient id="paint1_linear_3_3" x1="15" y1="5.2625" x2="15" y2="8.51251" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00D9FF" />
                  <stop offset="0.5" stop-color="#8B5CF6" />
                  <stop offset="1" stop-color="#EC4899" />
                </linearGradient>
                <linearGradient id="paint2_linear_3_3" x1="6.5625" y1="15" x2="6.5625" y2="24.7375" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00D9FF" />
                  <stop offset="0.5" stop-color="#8B5CF6" />
                  <stop offset="1" stop-color="#EC4899" />
                </linearGradient>
                <linearGradient id="paint3_linear_3_3" x1="23.4375" y1="15" x2="23.4375" y2="24.7375" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00D9FF" />
                  <stop offset="0.5" stop-color="#8B5CF6" />
                  <stop offset="1" stop-color="#EC4899" />
                </linearGradient>
                <linearGradient id="paint4_linear_3_3" x1="15" y1="8.7" x2="15" y2="15.0125" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00D9FF" />
                  <stop offset="0.5" stop-color="#8B5CF6" />
                  <stop offset="1" stop-color="#EC4899" />
                </linearGradient>
                <linearGradient id="paint5_linear_3_3" x1="15.5" y1="15" x2="15.5" y2="27.6" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#00D9FF" />
                  <stop offset="0.5" stop-color="#8B5CF6" />
                  <stop offset="1" stop-color="#EC4899" />
                </linearGradient>
              </defs>
            </svg>
            <motion.a
              href="#hero"
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
              aria-label="Utkarsh Kumar Portfolio Home Logo"
            >
              UK<span className="text-white/30">.</span>
            </motion.a>
          </div>


          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center gap-1 m-0 p-0 list-none">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    onClick={() => setActive(link.label)}
                    className={clsx(
                      "relative px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 block",
                      active === link.label
                        ? "text-white"
                        : "text-white/60 hover:text-white/90"
                    )}
                  >
                    {active === link.label && (
                      <motion.span
                        layoutId="nav-pill"
                        className="absolute inset-0 bg-white/10 rounded-full"
                        transition={{ type: "spring", stiffness: 400, damping: 30 }}
                      />
                    )}
                    <span className="relative">{link.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Resume CTA */}
          <div className="hidden md:flex items-center gap-3">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-5 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-white shadow-lg shadow-violet-500/20 hover:shadow-violet-500/40 transition-shadow"
            >
              Contact
            </motion.a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white/70 hover:text-white transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 glass-strong flex flex-col items-center justify-center gap-6 md:hidden"
          >
            {navLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                onClick={() => {
                  setActive(link.label);
                  setMobileOpen(false);
                }}
                className="text-2xl font-semibold text-white/70 hover:text-white transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
            <motion.a
              href="#contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: navLinks.length * 0.07 }}
              className="mt-4 px-8 py-3 text-base font-semibold rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-pink-500 text-white"
              onClick={() => setMobileOpen(false)}
            >
              Contact
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
