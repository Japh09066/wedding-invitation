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

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-floral-bg"
    >
      {/* Background floral pattern */}
      <div className="absolute inset-0 opacity-15">
        <FloralHeroPattern />
      </div>

      {/* Decorative corner florals */}
      <div className="absolute top-0 left-0 w-64 h-64 opacity-40">
        <TopLeftFloral />
      </div>
      <div className="absolute top-0 right-0 w-64 h-64 opacity-40 scale-x-[-1]">
        <TopLeftFloral />
      </div>
      <div className="absolute bottom-0 left-0 w-80 h-80 opacity-30">
        <BottomFloral />
      </div>
      <div className="absolute bottom-0 right-0 w-80 h-80 opacity-30 scale-x-[-1]">
        <BottomFloral />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Subtitle line */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex items-center justify-center gap-4 mb-6"
        >
          <span className="block h-px w-12 bg-floral-gold/40" />
          <span className="font-script text-floral-gold text-xl">Together with their families</span>
          <span className="block h-px w-12 bg-floral-gold/40" />
        </motion.div>

        {/* Couple names */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-floral-deep mb-6"
        >
          {coupleName.split('&').map((name, i, arr) => (
            <span key={i} className="block">
              {name.trim()}
              {i < arr.length - 1 && (
                <span className="font-script text-floral-gold text-4xl md:text-5xl mx-3">
                  &amp;
                </span>
              )}
            </span>
          ))}
        </motion.h1>

        {/* Decorative divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={isVisible ? { opacity: 1, scaleX: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="flex items-center justify-center gap-3 my-8"
        >
          <span className="block h-px w-16 bg-floral-gold/40" />
          <span className="text-floral-gold text-2xl">✦</span>
          <span className="block h-px w-16 bg-floral-gold/40" />
        </motion.div>

        {/* Wedding date */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="font-script text-2xl md:text-3xl text-floral-gold mb-2"
        >
          {weddingDate}
        </motion.p>

        {/* Venue hint */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="font-serif text-floral-taupe text-lg md:text-xl italic mb-10"
        >
          Ceremony & Reception
        </motion.p>

        {/* RSVP Button */}
        <motion.button
          onClick={onRSVPClick}
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-10 py-4 bg-floral-gold hover:bg-floral-taupe text-white rounded-full font-serif text-lg tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
        >
          RSVP Now
        </motion.button>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ delay: 1.8 }}
          className="mt-16"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-floral-taupe/60"
          >
            <span className="text-xs uppercase tracking-widest font-sans">Scroll</span>
            <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="1.5" y="1.5" width="13" height="21" rx="6.5" />
              <circle cx="8" cy="8" r="2" fill="currentColor" />
            </svg>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─── Background floral pattern ─── */
function FloralHeroPattern() {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="hero-floral" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
          <circle cx="60" cy="60" r="12" fill="#f2d5d5" opacity="0.4" />
          <circle cx="60" cy="60" r="6" fill="#ecc8c8" opacity="0.3" />
          <circle cx="200" cy="150" r="10" fill="#a3c4b5" opacity="0.35" />
          <circle cx="200" cy="150" r="5" fill="#8bb5a0" opacity="0.25" />
          <circle cx="100" cy="220" r="8" fill="#d4a373" opacity="0.3" />
          <circle cx="250" cy="70" r="7" fill="#f2d5d5" opacity="0.3" />
          <ellipse cx="80" cy="140" rx="15" ry="4" transform="rotate(-20 80 140)" fill="#a3c4b5" opacity="0.25" />
          <ellipse cx="220" cy="200" rx="12" ry="3" transform="rotate(30 220 200)" fill="#a3c4b5" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-floral)" />
    </svg>
  );
}

/* ─── Top left floral decoration ─── */
function TopLeftFloral() {
  return (
    <svg viewBox="0 0 256 256" className="w-full h-full">
      <path d="M0,0 Q60,40 80,100 Q90,140 60,180" fill="none" stroke="#a3c4b5" strokeWidth="2" opacity="0.5" />
      <path d="M20,0 Q50,50 60,100 Q70,150 50,190" fill="none" stroke="#a3c4b5" strokeWidth="1.5" opacity="0.4" />
      <ellipse cx="70" cy="80" rx="14" ry="5" transform="rotate(-30 70 80)" fill="#a3c4b5" opacity="0.4" />
      <ellipse cx="50" cy="130" rx="12" ry="4" transform="rotate(20 50 130)" fill="#a3c4b5" opacity="0.35" />
      <circle cx="80" cy="100" r="14" fill="#f2d5d5" opacity="0.5" />
      <circle cx="80" cy="100" r="7" fill="#ecc8c8" opacity="0.35" />
      <circle cx="60" cy="180" r="10" fill="#f2d5d5" opacity="0.4" />
      <circle cx="60" cy="180" r="5" fill="#ecc8c8" opacity="0.3" />
      <circle cx="50" cy="190" r="6" fill="#d4a373" opacity="0.35" />
    </svg>
  );
}

/* ─── Bottom floral decoration ─── */
function BottomFloral() {
  return (
    <svg viewBox="0 0 320 320" className="w-full h-full">
      <path d="M0,320 Q60,260 100,200 Q140,150 180,120" fill="none" stroke="#a3c4b5" strokeWidth="2" opacity="0.45" />
      <path d="M40,320 Q80,270 120,220 Q160,170 200,140" fill="none" stroke="#a3c4b5" strokeWidth="1.5" opacity="0.35" />
      <ellipse cx="100" cy="240" rx="16" ry="5" transform="rotate(-25 100 240)" fill="#a3c4b5" opacity="0.4" />
      <ellipse cx="140" cy="180" rx="14" ry="4" transform="rotate(35 140 180)" fill="#a3c4b5" opacity="0.35" />
      <ellipse cx="180" cy="140" rx="12" ry="4" transform="rotate(-15 180 140)" fill="#a3c4b5" opacity="0.3" />
      <circle cx="120" cy="200" r="16" fill="#f2d5d5" opacity="0.45" />
      <circle cx="120" cy="200" r="8" fill="#ecc8c8" opacity="0.3" />
      <circle cx="140" cy="160" r="12" fill="#f2d5d5" opacity="0.4" />
      <circle cx="140" cy="160" r="6" fill="#ecc8c8" opacity="0.3" />
      <circle cx="180" cy="120" r="10" fill="#d4a373" opacity="0.35" />
      <circle cx="180" cy="120" r="5" fill="#c99a6a" opacity="0.25" />
      <circle cx="200" cy="140" r="7" fill="#f2d5d5" opacity="0.3" />
    </svg>
  );
}
