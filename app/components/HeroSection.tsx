'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface HeroSectionProps {
  onRSVPClick?: () => void;
  coupleName?: string;
  weddingDate?: string;
}

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.18, delayChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] } },
};

export default function HeroSection({
  onRSVPClick,
  coupleName = 'Jay Sam & Laarnie',
  weddingDate = 'August 18, 2026',
}: HeroSectionProps) {
  const [loaded, setLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name1, name2] = coupleName.split('&').map((s) => s.trim());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const patternOpacity = useTransform(scrollYProgress, [0, 0.5], [0.04, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, 60]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen w-full overflow-hidden select-none"
    >
      {/* ─── Warm floral gradient ─── */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        {/* Base gradient: warm cream to soft beige */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6ee] via-[#f8efe4] to-[#f0e3d3]" />

        {/* Subtle warm glow — center */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-[#caa687]/8 blur-3xl" />

        {/* Soft sage corners */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-[#a3c4b5]/6 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-[#a3c4b5]/4 blur-3xl" />

        {/* Gentle edge vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#caa687]/5 via-transparent to-[#caa687]/5" />
      </motion.div>

      {/* ─── Subtle pattern ─── */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: patternOpacity }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 1px 1px, #caa687 1px, transparent 0)
            `,
            backgroundSize: '40px 40px',
          }}
        />
      </motion.div>

      {/* ─── Content ─── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={loaded ? 'show' : 'hidden'}
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6"
      >
        {/* Top decorative bar */}
        <motion.div
          variants={fadeUp}
          className="flex items-center justify-center gap-3 mb-4"
        >
          <span className="block h-px w-12 bg-floral-gold/30" />
          <svg className="w-4 h-4 text-floral-gold/50" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 2L14 9L21 9L15 14L17 21L12 17L7 21L9 14L3 9L10 9L12 2Z" />
          </svg>
          <span className="block h-px w-12 bg-floral-gold/30" />
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-script text-floral-gold/85 text-[clamp(1rem,3vw,1.8rem)] leading-snug mb-2"
        >
          You are cordially invited
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-script text-floral-deep/55 text-[clamp(0.85rem,2.5vw,1.4rem)] mb-5 sm:mb-6"
        >
          To the wedding of
        </motion.p>

        <motion.div variants={fadeUp} className="text-center mb-6 sm:mb-8">
          <h1 className="leading-none">
            <span className="font-script text-floral-deep text-[clamp(2.8rem,9vw,6rem)] leading-[1.05] block">
              {name1}
            </span>
            <span className="font-script text-floral-gold text-[clamp(1.2rem,4vw,2.5rem)] leading-none block my-0.5 sm:my-1">
              &amp;
            </span>
            <span className="font-script text-floral-deep text-[clamp(2.8rem,9vw,6rem)] leading-[1.05] block">
              {name2}
            </span>
          </h1>
        </motion.div>

        <motion.p
          variants={fadeUp}
          className="font-script text-floral-deep/75 text-[clamp(1.1rem,3.5vw,2rem)] mb-8"
        >
          {weddingDate}
        </motion.p>

        <motion.button
          variants={fadeUp}
          onClick={onRSVPClick}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="px-9 py-3 bg-floral-gold text-white rounded-full font-script text-[clamp(0.9rem,2.5vw,1.1rem)] shadow-lg shadow-floral-gold/20 hover:shadow-xl hover:bg-floral-taupe transition-all duration-300"
        >
          RSVP
        </motion.button>

        {/* Scroll hint */}
        <motion.div
          variants={fadeUp}
          className="absolute bottom-8 flex flex-col items-center gap-1.5 text-floral-deep/20"
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
