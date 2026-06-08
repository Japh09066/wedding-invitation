'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-floral-deep text-white/80 overflow-hidden">
      {/* Decorative top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-floral-gold/40 to-transparent" />

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="footer-bg" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="6" fill="#fff" opacity="0.3" />
              <circle cx="120" cy="100" r="5" fill="#fff" opacity="0.2" />
              <ellipse cx="60" cy="60" rx="10" ry="2.5" transform="rotate(-30 60 60)" fill="#fff" opacity="0.15" />
              <ellipse cx="130" cy="40" rx="8" ry="2" transform="rotate(40 130 40)" fill="#fff" opacity="0.12" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-bg)" />
        </svg>
      </div>

      <div className="relative z-10 section-container text-center">
        {/* Couple names */}
        <motion.h3
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-3xl md:text-4xl text-floral-gold mb-1"
        >
          Jay Sam <span className="text-white/40">&amp;</span> Laarnie
        </motion.h3>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif text-white/50 italic text-sm mb-6"
        >
          August 18, 2026
        </motion.p>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-2 mb-6">
          <span className="block h-px w-8 bg-floral-gold/25" />
          <span className="text-floral-gold text-sm">✦</span>
          <span className="block h-px w-8 bg-floral-gold/25" />
        </div>

        {/* Message */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif italic text-white/60 text-sm leading-relaxed max-w-lg mx-auto"
        >
          &ldquo;With hearts full of gratitude, we look forward to celebrating this new chapter with the ones we love most.&rdquo;
        </motion.p>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-white/10"
        >
          <p className="font-sans text-[11px] text-white/25 tracking-wider uppercase">
            &copy; {year} Jay Sam &amp; Laarnie &mdash; Crafted with love
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
