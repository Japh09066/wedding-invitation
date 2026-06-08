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

  const photoY = useTransform(scrollYProgress, [0, 1], ['0%', '18%']);
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const textY = useTransform(scrollYProgress, [0, 0.8], [0, 60]);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen w-full overflow-hidden bg-floral-deep select-none"
    >
      {/* ─── Photo with parallax ─── */}
      <motion.div
        className="absolute inset-0"
        style={{ y: photoY }}
      >
        <div
          className="w-full h-[120%] bg-cover bg-center -top-[10%] relative"
          style={{
            backgroundImage: "url('/images/couple-hero.png')",
            backgroundPosition: '50% 30%',
          }}
        />
      </motion.div>

      {/* ─── Cinematic overlay ─── */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: overlayOpacity }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/15" />
      </motion.div>

      {/* ─── Content ─── */}
      <motion.div
        variants={container}
        initial="hidden"
        animate={loaded ? 'show' : 'hidden'}
        style={{ y: textY }}
        className="relative z-10 flex flex-col items-center justify-center h-full w-full px-6"
      >
        <motion.p
          variants={fadeUp}
          className="font-sans text-floral-gold/70 text-[11px] sm:text-xs uppercase tracking-[0.22em] font-light mb-3"
        >
          You are cordially invited
        </motion.p>

        <motion.p
          variants={fadeUp}
          className="font-serif text-white/60 text-xs sm:text-sm uppercase tracking-[0.18em] font-light mb-6 sm:mb-8"
        >
          To the wedding of
        </motion.p>

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

        <motion.p
          variants={fadeUp}
          className="font-serif text-white/80 text-sm sm:text-base md:text-lg tracking-[0.06em] mb-8"
        >
          {weddingDate}
        </motion.p>

        <motion.button
          variants={fadeUp}
          onClick={onRSVPClick}
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          className="px-9 py-3 bg-floral-gold text-white rounded-full font-sans text-sm tracking-[0.15em] uppercase font-light shadow-lg shadow-black/20 hover:shadow-xl hover:bg-floral-taupe transition-all duration-300"
        >
          RSVP
        </motion.button>

        {/* Scroll hint */}
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
