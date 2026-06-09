'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface HeroSectionProps {
  coupleName?: string;
  weddingDate?: string;
  onRSVPClick?: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.8 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.25, delayChildren: 0.3 },
  },
};

export default function HeroSection({
  coupleName = 'Jay Sam & Laarnie',
  weddingDate = 'August 18, 2026',
  onRSVPClick,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name1, name2] = coupleName.split('&').map((s) => s.trim());

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full overflow-hidden select-none h-screen max-sm:h-[72vh]"
    >
      {/* ─── Background Image with parallax ─── */}
      <motion.div className="absolute inset-0 bg-[#1a1a1a]" style={{ scale }}>
        <div
          className="w-full h-full bg-cover"
          style={{
            backgroundImage: 'url(/images/couple-hero.png)',
            backgroundPosition: 'center',
          }}
        />
      </motion.div>

      {/* ─── Gradient overlay: top lighter, bottom darker ─── */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.25) 40%, rgba(0,0,0,0.40) 100%)',
        }}
      />

      {/* ─── Glass Card Content ─── */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 flex items-center justify-center h-full w-full px-4 max-sm:items-start max-sm:pt-[160px]"
      >
        <div
          className="text-center w-full max-w-[600px] px-[34px] py-[42px] max-sm:px-[18px] max-sm:py-6 max-sm:mx-[14px] max-sm:bg-white/[0.06] bg-white/[0.12] rounded-[20px] backdrop-blur-[6px] max-sm:backdrop-blur-[3px] border border-white/25 text-white"
        >
          {/* Together with their families */}
          <motion.p
            variants={fadeIn}
            className="font-['Cormorant_Garamond',serif] text-[12px] tracking-[3px] uppercase opacity-85"
          >
            Together with their families
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeIn} className="flex justify-center my-4">
            <span className="block w-[64px] h-[2px] bg-[#ffd6a5]" />
          </motion.div>

          {/* Sub-text */}
          <motion.p
            variants={fadeIn}
            className="font-['Cormorant_Garamond',serif] text-[15px] leading-relaxed italic opacity-90 mt-2.5 max-sm:text-[14px]"
          >
            request the honor of your presence at the marriage of
          </motion.p>

          {/* Names */}
          <motion.h1
            variants={fadeUp}
            className="font-['Allura',cursive] leading-tight my-[14px] relative"
            style={{
              color: '#ffdce5',
              textShadow:
                '0 0 6px rgba(255,200,210,0.6), 0 0 12px rgba(255,170,190,0.6)',
            }}
          >
            <span className="text-[clamp(48px,7vw,68px)] max-sm:text-[36px]">
              {name1}
            </span>
            <span className="block text-[clamp(24px,3.5vw,36px)] text-[#ffdce5] leading-none my-0.5">
              &amp;
            </span>
            <span className="text-[clamp(48px,7vw,68px)] max-sm:text-[36px]">
              {name2}
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={fadeIn} className="flex justify-center my-4">
            <span className="block w-[64px] h-[2px] bg-[#ffd6a5]" />
          </motion.div>

          {/* Date */}
          <motion.p
            variants={fadeIn}
            className="font-['Cormorant_Garamond',serif] text-[17px] opacity-90 tracking-[1px]"
          >
            {weddingDate}
          </motion.p>

          {/* RSVP Button */}
          <motion.button
            variants={fadeUp}
            onClick={onRSVPClick}
            className="inline-block mt-[22px] px-[28px] py-[11px] rounded-[30px] text-white text-[13px] tracking-[1px] border-none cursor-pointer transition-all duration-300 hover:scale-105"
            style={{ background: '#ff8fab' }}
            onMouseEnter={(e) => (e.currentTarget.style.background = '#ff5d8f')}
            onMouseLeave={(e) => (e.currentTarget.style.background = '#ff8fab')}
          >
            RSVP Now
          </motion.button>
        </div>
      </motion.div>

      {/* ─── Scroll Down Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.75 }}
        transition={{ delay: 2 }}
        className="absolute bottom-4 left-0 right-0 flex flex-col items-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-[11px] tracking-[2px] font-['Cormorant_Garamond',serif] flex flex-col items-center"
        >
          SCROLL DOWN
          <span className="block text-[18px] mt-0.5">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
