'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

interface HeroSectionProps {
  onRSVPClick?: () => void;
  coupleName?: string;
  weddingDate?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection({
  onRSVPClick,
  coupleName = 'Jay Sam & Laarnie',
  weddingDate = 'August 18, 2026',
}: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);
  const [name1, name2] = coupleName.split('&').map((s) => s.trim());

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-floral-deep select-none">
      {/* ─── Photo ─── */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/couple-hero.png')",
          backgroundPosition: '50% 30%',
        }}
      />

      {/* ─── Cinematic overlay — dark at center for text, lighter at edges ─── */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15" />

      {/* ─── Content ─── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={loaded ? 'show' : 'hidden'}
        className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6"
      >
        {/* "you are cordially invited" */}
        <motion.p
          variants={fadeUp}
          className="font-sans text-floral-gold/70 text-[11px] sm:text-xs uppercase tracking-[0.22em] font-light mb-3"
        >
          You are cordially invited
        </motion.p>

        {/* "TO THE WEDDING OF" */}
        <motion.p
          variants={fadeUp}
          className="font-serif text-white/60 text-xs sm:text-sm uppercase tracking-[0.18em] font-light mb-6 sm:mb-8"
        >
          To the wedding of
        </motion.p>

        {/* ─── Names ─── */}
        <motion.div variants={fadeUp} className="text-center mb-6 sm:mb-8">
          <h1 className="text-white leading-none">
            <span className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-light tracking-[0.04em] block">
              {name1}
            </span>
            <span className="font-script text-floral-gold text-[clamp(1.2rem,4vw,2.5rem)] leading-none block my-1 sm:my-2">
              &amp;
            </span>
            <span className="font-serif text-[clamp(2.5rem,8vw,5.5rem)] font-light tracking-[0.04em] block">
              {name2}
            </span>
          </h1>
        </motion.div>

        {/* ─── Date ─── */}
        <motion.p
          variants={fadeUp}
          className="font-serif text-white/80 text-sm sm:text-base md:text-lg tracking-[0.06em] mb-8"
        >
          {weddingDate}
        </motion.p>

        {/* ─── RSVP ─── */}
        <motion.button
          variants={fadeUp}
          onClick={onRSVPClick}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="px-9 py-3 bg-floral-gold text-white rounded-full font-sans text-sm tracking-[0.15em] uppercase font-light shadow-lg shadow-black/20 hover:shadow-xl hover:bg-floral-taupe transition-all duration-300"
        >
          RSVP
        </motion.button>

        {/* ─── Scroll hint ─── */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-8 flex flex-col items-center gap-1.5 text-white/25"
        >
          <motion.svg
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            width="12"
            height="20"
            viewBox="0 0 12 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.2"
          >
            <rect x="1.5" y="1.5" width="9" height="17" rx="4.5" />
            <motion.circle
              cx="6"
              cy="6.5"
              r="1.5"
              fill="currentColor"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </motion.svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
