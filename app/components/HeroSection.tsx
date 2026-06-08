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
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-floral-bg"
    >
      {/* Background floral pattern */}
      <div className="absolute inset-0 opacity-[0.08]">
        <HeroPattern />
      </div>

      {/* Decorative corner florals */}
      <div className="absolute top-0 left-0 w-56 h-56 sm:w-72 sm:h-72 opacity-35">
        <CornerFloral />
      </div>
      <div className="absolute top-0 right-0 w-56 h-56 sm:w-72 sm:h-72 opacity-35 scale-x-[-1]">
        <CornerFloral />
      </div>
      <div className="absolute bottom-0 left-0 w-72 h-72 sm:w-96 sm:h-96 opacity-25">
        <BottomFloral />
      </div>
      <div className="absolute bottom-0 right-0 w-72 h-72 sm:w-96 sm:h-96 opacity-25 scale-x-[-1]">
        <BottomFloral />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Subtitle line */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="flex items-center justify-center gap-3 mb-5 sm:mb-6"
        >
          <span className="block h-px w-10 sm:w-14 bg-floral-gold/35" />
          <span className="font-script text-floral-gold text-lg sm:text-xl">Together with their families</span>
          <span className="block h-px w-10 sm:w-14 bg-floral-gold/35" />
        </motion.div>

        {/* Couple names */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mb-5 sm:mb-6"
        >
          <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-floral-deep leading-[1.15] tracking-tight">
            <span className="block">{name1}</span>
            <span className="block font-script text-floral-gold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-none my-1 sm:my-2">
              &amp;
            </span>
            <span className="block">{name2}</span>
          </h1>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center justify-center gap-3 mb-6 sm:mb-7"
        >
          <span className="block h-px w-12 sm:w-16 bg-floral-gold/35" />
          <motion.span
            animate={{ rotate: [0, 15, -15, 0] }}
            transition={{ duration: 3, repeat: Infinity, repeatDelay: 1 }}
            className="text-floral-gold text-xl sm:text-2xl"
          >
            ✦
          </motion.span>
          <span className="block h-px w-12 sm:w-16 bg-floral-gold/35" />
        </motion.div>

        {/* Wedding date */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.75 }}
          className="font-script text-2xl sm:text-3xl md:text-4xl text-floral-gold mb-1"
        >
          {weddingDate}
        </motion.p>

        {/* Venue hint */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="font-serif text-floral-taupe text-base sm:text-lg italic mb-8 sm:mb-10"
        >
          Ceremony &middot; Reception
        </motion.p>

        {/* RSVP Button */}
        <motion.button
          onClick={onRSVPClick}
          initial={{ opacity: 0, y: 15 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.1 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary relative overflow-hidden group"
        >
          <span className="relative z-10">RSVP Now</span>
          <span className="absolute inset-0 bg-gradient-to-r from-floral-taupe to-floral-gold opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-full" />
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.6 }}
          className="mt-16 sm:mt-20"
        >
          <motion.div
            animate={{ y: [0, 6, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-1.5 text-floral-taupe/50"
          >
            <span className="text-[10px] uppercase tracking-[0.3em] font-sans">Scroll</span>
            <svg width="14" height="22" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.3">
              <rect x="1.8" y="1.8" width="12.4" height="20.4" rx="6.2" />
              <motion.circle
                cx="8" cy="8" r="1.8" fill="currentColor"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Background pattern ─── */
function HeroPattern() {
  return (
    <svg className="w-full h-full">
      <defs>
        <pattern id="hero-bg-pattern" x="0" y="0" width="280" height="280" patternUnits="userSpaceOnUse">
          <circle cx="55" cy="55" r="10" fill="#f2d5d5" opacity="0.35" />
          <circle cx="55" cy="55" r="5" fill="#ecc8c8" opacity="0.25" />
          <circle cx="190" cy="140" r="9" fill="#a3c4b5" opacity="0.3" />
          <circle cx="190" cy="140" r="4.5" fill="#8bb5a0" opacity="0.2" />
          <circle cx="95" cy="210" r="7" fill="#d4a373" opacity="0.25" />
          <circle cx="230" cy="65" r="6" fill="#f2d5d5" opacity="0.25" />
          <ellipse cx="75" cy="130" rx="14" ry="3.5" transform="rotate(-20 75 130)" fill="#a3c4b5" opacity="0.2" />
          <ellipse cx="210" cy="190" rx="11" ry="3" transform="rotate(30 210 190)" fill="#a3c4b5" opacity="0.18" />
          <ellipse cx="150" cy="45" rx="10" ry="2.5" transform="rotate(-40 150 45)" fill="#a3c4b5" opacity="0.15" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-bg-pattern)" />
    </svg>
  );
}

/* ─── Top left corner floral ─── */
function CornerFloral() {
  return (
    <svg viewBox="0 0 288 288" className="w-full h-full">
      <path d="M0,0 Q55,35 75,95 Q85,130 55,170" fill="none" stroke="#a3c4b5" strokeWidth="1.8" opacity="0.45" />
      <path d="M18,0 Q48,48 58,95 Q68,140 48,178" fill="none" stroke="#a3c4b5" strokeWidth="1.2" opacity="0.35" />
      <ellipse cx="65" cy="75" rx="13" ry="4.5" transform="rotate(-30 65 75)" fill="#a3c4b5" opacity="0.35" />
      <ellipse cx="48" cy="122" rx="11" ry="3.5" transform="rotate(20 48 122)" fill="#a3c4b5" opacity="0.3" />
      <circle cx="75" cy="95" r="13" fill="#f2d5d5" opacity="0.45" />
      <circle cx="75" cy="95" r="6.5" fill="#ecc8c8" opacity="0.3" />
      <circle cx="55" cy="168" r="9" fill="#f2d5d5" opacity="0.35" />
      <circle cx="55" cy="168" r="4.5" fill="#ecc8c8" opacity="0.25" />
      <circle cx="48" cy="178" r="5.5" fill="#d4a373" opacity="0.3" />
      <circle cx="85" cy="63" r="3" fill="#f7f0f0" opacity="0.5" />
      <circle cx="40" cy="145" r="2.5" fill="#f7f0f0" opacity="0.4" />
    </svg>
  );
}

/* ─── Bottom corner floral ─── */
function BottomFloral() {
  return (
    <svg viewBox="0 0 300 300" className="w-full h-full">
      <path d="M0,300 Q55,245 95,190 Q130,140 170,115" fill="none" stroke="#a3c4b5" strokeWidth="1.8" opacity="0.4" />
      <path d="M35,300 Q75,255 115,210 Q150,165 185,138" fill="none" stroke="#a3c4b5" strokeWidth="1.2" opacity="0.3" />
      <ellipse cx="95" cy="225" rx="15" ry="4.5" transform="rotate(-25 95 225)" fill="#a3c4b5" opacity="0.35" />
      <ellipse cx="130" cy="170" rx="13" ry="4" transform="rotate(35 130 170)" fill="#a3c4b5" opacity="0.3" />
      <ellipse cx="170" cy="135" rx="11" ry="3.5" transform="rotate(-15 170 135)" fill="#a3c4b5" opacity="0.25" />
      <circle cx="115" cy="190" r="15" fill="#f2d5d5" opacity="0.4" />
      <circle cx="115" cy="190" r="7.5" fill="#ecc8c8" opacity="0.28" />
      <circle cx="130" cy="152" r="11" fill="#f2d5d5" opacity="0.35" />
      <circle cx="130" cy="152" r="5.5" fill="#ecc8c8" opacity="0.25" />
      <circle cx="170" cy="115" r="9" fill="#d4a373" opacity="0.3" />
      <circle cx="170" cy="115" r="4.5" fill="#c99a6a" opacity="0.2" />
      <circle cx="190" cy="135" r="6.5" fill="#f2d5d5" opacity="0.25" />
      <circle cx="140" cy="130" r="3" fill="#f7f0f0" opacity="0.4" />
      <circle cx="160" cy="160" r="2.5" fill="#f7f0f0" opacity="0.35" />
    </svg>
  );
}
