"use client";

import { motion } from "framer-motion";
import { FiLinkedin, FiMail, FiHeart } from "react-icons/fi";
import { portfolioData } from "@/lib/data";

const { name, linkedin, email } = portfolioData;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 py-10 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
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
            >
              UK<span className="text-white/30">.</span>
            </motion.a>
          </div>
          {/* Copyright */}
          <p className="text-white/60 text-xs flex items-center gap-1 font-medium" suppressHydrationWarning>
            © {year} {name}
          </p>

          {/* Social */}
          <div className="flex gap-3">
            {[
              { icon: FiLinkedin, href: "https://www.linkedin.com/in/utkarsh-kumar-94783212b/", label: "LinkedIn" },
              { icon: FiMail, href: `mailto:${email}`, label: "Email" },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15, y: -2 }}
                aria-label={label}
                className="w-9 h-9 rounded-full glass border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:border-white/20 transition-colors"
              >
                <Icon size={15} />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
