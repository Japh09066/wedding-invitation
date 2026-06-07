'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  return (
    <footer className="relative py-16 bg-floral-deep text-white/80 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-floral-gold/20 via-floral-gold/40 to-floral-gold/20" />

      {/* Background floral pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full">
          <defs>
            <pattern id="footer-floral" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="8" fill="#fff" />
              <circle cx="160" cy="120" r="6" fill="#fff" />
              <ellipse cx="80" cy="80" rx="12" ry="3" transform="rotate(-30 80 80)" fill="#fff" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-floral)" />
        </svg>
      </div>

      <div className="relative z-10 section-container text-center">
        {/* Couple names */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-3xl md:text-4xl text-floral-gold mb-2"
        >
          Jay Sam &amp; Laarnie
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-white/60 italic mb-6"
        >
          August 18, 2026
        </motion.p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <span className="block h-px w-12 bg-floral-gold/30" />
          <span className="text-floral-gold">✦</span>
          <span className="block h-px w-12 bg-floral-gold/30" />
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-sm text-white/50 max-w-md mx-auto"
        >
          With hearts full of gratitude, we look forward to celebrating our special day with you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-white/10"
        >
          <p className="font-sans text-xs text-white/30 tracking-wider">
            &copy; {new Date().getFullYear()} Jay Sam &amp; Laarnie &mdash; Made with love
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
