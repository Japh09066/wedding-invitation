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
        className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-black/60"
        style={{ opacity: overlayFade }}
      />

      {/* ─── Floral corner decorations ─── */}
      <div className="absolute inset-0 z-10 pointer-events-none" aria-hidden="true">
        {/* Top-left corner */}
        <svg className="absolute top-2 left-2 sm:top-4 sm:left-4 w-20 h-20 sm:w-28 sm:h-28" viewBox="0 0 80 80" fill="none">
          <g opacity="0.35">
            {/* Spiral vine */}
            <path d="M 0 40 Q 15 25 30 40 Q 45 60 60 40 M 50 40 Q 65 25 80 40" stroke="#c9a88e" strokeWidth="0.8" fill="none" />
            {/* Blossom cluster */}
            <ellipse cx="65" cy="32" rx="5" ry="8" fill="#f2d5d5" opacity="0.6" transform="rotate(-30 65 32)" />
            <ellipse cx="62" cy="28" rx="4" ry="7" fill="#f2d5d5" opacity="0.5" transform="rotate(20 62 28)" />
            <ellipse cx="68" cy="30" rx="4" ry="6" fill="#d4a373" opacity="0.4" transform="rotate(-60 68 30)" />
            <circle cx="65" cy="30" r="2.5" fill="#d4a373" opacity="0.5" />
            {/* Small leaves */}
            <ellipse cx="55" cy="36" rx="4" ry="1.5" fill="#a3c4b5" opacity="0.5" transform="rotate(-20 55 36)" />
            <ellipse cx="58" cy="40" rx="3.5" ry="1.5" fill="#a3c4b5" opacity="0.4" transform="rotate(15 58 40)" />
            {/* Tiny buds */}
            <circle cx="48" cy="42" r="1.5" fill="#f2d5d5" opacity="0.5" />
            <circle cx="52" cy="44" r="1" fill="#d4a373" opacity="0.4" />
          </g>
        </svg>

        {/* Top-right corner */}
        <svg className="absolute top-2 right-2 sm:top-4 sm:right-4 w-20 h-20 sm:w-28 sm:h-28" viewBox="0 0 80 80" fill="none">
          <g opacity="0.35">
            <path d="M 0 40 Q 15 25 30 40 Q 45 60 60 40 M 50 40 Q 65 25 80 40" stroke="#c9a88e" strokeWidth="0.8" fill="none" transform="scale(-1, 1) translate(-80, 0)" />
            <ellipse cx="15" cy="32" rx="5" ry="8" fill="#f2d5d5" opacity="0.6" transform="rotate(30 15 32)" />
            <ellipse cx="18" cy="28" rx="4" ry="7" fill="#f2d5d5" opacity="0.5" transform="rotate(-20 18 28)" />
            <ellipse cx="12" cy="30" rx="4" ry="6" fill="#d4a373" opacity="0.4" transform="rotate(60 12 30)" />
            <circle cx="15" cy="30" r="2.5" fill="#d4a373" opacity="0.5" />
            <ellipse cx="25" cy="36" rx="4" ry="1.5" fill="#a3c4b5" opacity="0.5" transform="rotate(20 25 36)" />
            <ellipse cx="22" cy="40" rx="3.5" ry="1.5" fill="#a3c4b5" opacity="0.4" transform="rotate(-15 22 40)" />
            <circle cx="32" cy="42" r="1.5" fill="#f2d5d5" opacity="0.5" />
            <circle cx="28" cy="44" r="1" fill="#d4a373" opacity="0.4" />
          </g>
        </svg>

        {/* Bottom-left corner */}
        <svg className="absolute bottom-2 left-2 sm:bottom-4 sm:left-4 w-20 h-20 sm:w-28 sm:h-28" viewBox="0 0 80 80" fill="none">
          <g opacity="0.35">
            <path d="M 0 40 Q 15 55 30 40 Q 45 20 60 40 M 50 40 Q 65 55 80 40" stroke="#c9a88e" strokeWidth="0.8" fill="none" />
            <ellipse cx="65" cy="48" rx="5" ry="8" fill="#f2d5d5" opacity="0.6" transform="rotate(30 65 48)" />
            <ellipse cx="62" cy="52" rx="4" ry="7" fill="#f2d5d5" opacity="0.5" transform="rotate(-20 62 52)" />
            <ellipse cx="68" cy="50" rx="4" ry="6" fill="#d4a373" opacity="0.4" transform="rotate(60 68 50)" />
            <circle cx="65" cy="50" r="2.5" fill="#d4a373" opacity="0.5" />
            <ellipse cx="55" cy="44" rx="4" ry="1.5" fill="#a3c4b5" opacity="0.5" transform="rotate(20 55 44)" />
            <ellipse cx="58" cy="40" rx="3.5" ry="1.5" fill="#a3c4b5" opacity="0.4" transform="rotate(-15 58 40)" />
            <circle cx="48" cy="38" r="1.5" fill="#f2d5d5" opacity="0.5" />
            <circle cx="52" cy="36" r="1" fill="#d4a373" opacity="0.4" />
          </g>
        </svg>

        {/* Bottom-right corner */}
        <svg className="absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-20 h-20 sm:w-28 sm:h-28" viewBox="0 0 80 80" fill="none">
          <g opacity="0.35">
            <path d="M 0 40 Q 15 55 30 40 Q 45 20 60 40 M 50 40 Q 65 55 80 40" stroke="#c9a88e" strokeWidth="0.8" fill="none" transform="scale(-1, 1) translate(-80, 0)" />
            <ellipse cx="15" cy="48" rx="5" ry="8" fill="#f2d5d5" opacity="0.6" transform="rotate(-30 15 48)" />
            <ellipse cx="18" cy="52" rx="4" ry="7" fill="#f2d5d5" opacity="0.5" transform="rotate(20 18 52)" />
            <ellipse cx="12" cy="50" rx="4" ry="6" fill="#d4a373" opacity="0.4" transform="rotate(-60 12 50)" />
            <circle cx="15" cy="50" r="2.5" fill="#d4a373" opacity="0.5" />
            <ellipse cx="25" cy="44" rx="4" ry="1.5" fill="#a3c4b5" opacity="0.5" transform="rotate(-20 25 44)" />
            <ellipse cx="22" cy="40" rx="3.5" ry="1.5" fill="#a3c4b5" opacity="0.4" transform="rotate(15 22 40)" />
            <circle cx="32" cy="38" r="1.5" fill="#f2d5d5" opacity="0.5" />
            <circle cx="28" cy="36" r="1" fill="#d4a373" opacity="0.4" />
          </g>
        </svg>
      </div>

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


      </div>
    </section>
  );
}
