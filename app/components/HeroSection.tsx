'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onRSVPClick?: () => void;
  coupleName?: string;
  weddingDate?: string;
}

export default function HeroSection({
  onRSVPClick,
  coupleName = 'Jay Sam & Laarnie',
  weddingDate = 'August 18, 2026',
}: HeroSectionProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const [name1, name2] = coupleName.split('&').map((s) => s.trim());

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-floral-deep"
    >
      {/* Photo background */}
      <div className="absolute inset-0">
        <div
          className="w-full h-full bg-cover bg-center"
          style={{
            backgroundImage: "url('/images/couple-hero.png')",
            backgroundPosition: '50% 30%',
          }}
        />
        {/* Dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/30" />
        {/* Side vignettes for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/20" />
      </div>

      {/* Subtle gold accent line at bottom of photo */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-floral-gold/50 to-transparent" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto w-full">
        <div className="pb-16">
          {/* "you are cordially invited" */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-floral-gold/80 text-[10px] sm:text-xs uppercase tracking-[0.4em] font-light mb-2"
          >
            You are cordially invited
          </motion.p>

          {/* "TO THE WEDDING OF" */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.35 }}
            className="font-serif text-white/70 text-xs sm:text-sm uppercase tracking-[0.5em] font-light mb-5 sm:mb-6"
          >
            To the wedding of
          </motion.p>

          {/* Couple names */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.9, delay: 0.5 }}
            className="mb-4 sm:mb-5"
          >
            <h1 className="text-white">
              <span className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.08em] block leading-tight">
                {name1}
              </span>
              <span className="font-['Dancing_Script',cursive] text-floral-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl block leading-none my-1 sm:my-2">
                &amp;
              </span>
              <span className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-[0.08em] block leading-tight">
                {name2}
              </span>
            </h1>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="block h-px w-10 sm:w-14 bg-floral-gold/40" />
            <motion.span
              animate={{ opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="text-floral-gold text-lg sm:text-xl"
            >
              ✦
            </motion.span>
            <span className="block h-px w-10 sm:w-14 bg-floral-gold/40" />
          </motion.div>

          {/* Date */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="font-['Dancing_Script',cursive] text-floral-gold text-xl sm:text-2xl md:text-3xl mb-1"
          >
            {weddingDate}
          </motion.p>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.05 }}
            className="font-serif text-white/60 italic text-sm sm:text-base mb-8 sm:mb-10"
          >
            Ceremony &middot; Reception
          </motion.p>

          {/* RSVP Button */}
          <motion.button
            onClick={onRSVPClick}
            initial={{ opacity: 0, y: 15 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 1.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3.5 bg-floral-gold hover:bg-floral-taupe text-white rounded-full font-serif text-base md:text-lg tracking-wider shadow-lg hover:shadow-xl shadow-black/20 transition-all duration-300"
          >
            RSVP Now
          </motion.button>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isVisible ? { opacity: 1 } : {}}
            transition={{ delay: 1.6 }}
            className="mt-16 sm:mt-20"
          >
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              className="flex flex-col items-center gap-1.5 text-white/40"
            >
              <span className="text-[9px] uppercase tracking-[0.3em] font-sans">Scroll</span>
              <svg width="14" height="22" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                <rect x="1.8" y="1.8" width="12.4" height="20.4" rx="6.2" />
                <motion.circle
                  cx="8" cy="8" r="1.8" fill="currentColor"
                  animate={{ y: [0, 5, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
                />
              </svg>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
