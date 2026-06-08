'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroSectionProps {
  coupleName?: string;
  weddingDate?: string;
}

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

export default function HeroSection({
  coupleName = 'Jay Sam & Laarnie',
  weddingDate = 'August 18, 2026',
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name1, name2] = coupleName.split('&').map((s) => s.trim());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const overlayFade = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative h-screen w-full overflow-hidden select-none"
    >
      {/* ─── Photo ─── */}
      <motion.div className="absolute inset-0 bg-[#1a1a1a]" style={{ scale }}>
        <div
          className="w-full h-full bg-cover bg-center"
          style={{ backgroundImage: 'url(/images/couple-hero.png)' }}
        />
      </motion.div>

      {/* ─── Dark overlay ─── */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/10"
        style={{ opacity: overlayFade }}
      />

      {/* ─── Content ─── */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full w-full px-4 sm:px-6">
        <motion.div
          initial="hidden"
          animate="show"
          className="flex flex-col items-center text-center absolute top-8 sm:top-12 left-0 right-0 px-4 sm:px-6"
        >
          {/* Top line */}
          <motion.div variants={fadeIn} className="flex items-center gap-2 mb-4 sm:mb-5">
            <div className="w-8 sm:w-12 h-px bg-white/30" />
            <div className="w-1.5 h-1.5 rounded-full bg-[#d4a373]/70" />
            <div className="w-8 sm:w-12 h-px bg-white/30" />
          </motion.div>

          {/* Subtitle */}
          <motion.p
            variants={fadeIn}
            className="font-serif text-[#e8d8c0] text-[clamp(0.8rem,2vw,1.1rem)] tracking-[0.3em] uppercase mb-1"
            style={{textShadow:'0 2px 12px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.6)'}}
          >
            You are cordially invited
          </motion.p>

          {/* Subtitle 2 */}
          <motion.p
            variants={fadeIn}
            className="font-serif text-[#d4c4aa] text-[clamp(0.65rem,1.6vw,0.9rem)] tracking-[0.35em] uppercase mb-0"
            style={{textShadow:'0 2px 12px rgba(0,0,0,0.5), 0 1px 2px rgba(0,0,0,0.6)'}}
          >
            To the wedding of
          </motion.p>
        </motion.div>

        {/* ─── Names + Date at the bottom ─── */}
        <motion.div
          initial="hidden"
          animate="show"
          className="absolute bottom-20 sm:bottom-24 left-0 right-0 flex flex-col items-center text-center px-4 sm:px-6"
        >
          {/* Names — big, bold, clear */}
          <motion.div variants={fadeUp} className="mb-6 sm:mb-8">
            <h1 className="leading-tight space-y-1 sm:space-y-2">
              <span className="font-['Great_Vibes',cursive] text-[#f0d9b5] text-[clamp(3.5rem,12vw,7rem)] leading-[1.1] block" style={{textShadow:'0 0 20px rgba(240,217,181,0.15), 0 4px 30px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.5)'}}>
                {name1}
              </span>
              <span className="font-['Great_Vibes',cursive] text-[#d4a373] text-[clamp(1.6rem,5vw,3rem)] leading-none block drop-shadow-lg">
                &amp;
              </span>
              <span className="font-['Great_Vibes',cursive] text-[#f0d9b5] text-[clamp(3.5rem,12vw,7rem)] leading-[1.1] block" style={{textShadow:'0 0 20px rgba(240,217,181,0.15), 0 4px 30px rgba(0,0,0,0.4), 0 1px 3px rgba(0,0,0,0.5)'}}>
                {name2}
              </span>
            </h1>
          </motion.div>

          {/* Bottom divider */}
          <motion.div variants={fadeIn} className="flex items-center gap-2 mb-4">
            <div className="w-8 sm:w-12 h-px bg-white/20" />
            <div className="w-1 h-1 rounded-full bg-white/40" />
            <div className="w-8 sm:w-12 h-px bg-white/20" />
          </motion.div>

          {/* Date */}
          <motion.p
            variants={fadeUp}
            className="font-serif text-white/80 text-[clamp(1rem,2.8vw,1.6rem)] tracking-[0.15em]"
          >
            {weddingDate}
          </motion.p>
        </motion.div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 flex flex-col items-center gap-2"
        >
          <span className="font-sans text-[9px] uppercase tracking-[0.35em] text-white/25">Scroll</span>
          <svg width="14" height="22" viewBox="0 0 14 22" fill="none" stroke="white" strokeWidth="1" className="opacity-25">
            <rect x="1.5" y="1.5" width="11" height="19" rx="5.5" />
            <motion.circle
              cx="7" cy="7" r="1.5" fill="white"
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
          </svg>
        </motion.div>
      </div>
    </section>
  );
}
