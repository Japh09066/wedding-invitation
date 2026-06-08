'use client';

import { motion } from 'framer-motion';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative py-16 bg-floral-deep text-white/80 overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-floral-gold/30 to-transparent" />
      <div className="absolute inset-0 opacity-4 pointer-events-none">
        <svg className="w-full h-full">
          <defs>
            <pattern id="footer-bg" x="0" y="0" width="160" height="160" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="6" fill="#fff" opacity="0.3" />
              <ellipse cx="60" cy="60" rx="10" ry="2.5" transform="rotate(-30 60 60)" fill="#fff" opacity="0.15" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#footer-bg)" />
        </svg>
      </div>

      <div className="relative z-10 section-container text-center">
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

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-serif italic text-white/60 text-sm leading-relaxed max-w-lg mx-auto"
        >
          &ldquo;With hearts full of gratitude, we look forward to celebrating this new chapter with the ones we love most.&rdquo;
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-10 pt-8 border-t border-white/10"
        >
          <p className="font-sans text-[11px] text-white/25 tracking-wider uppercase">
            &copy; {year} Jay Sam &amp; Laarnie
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
