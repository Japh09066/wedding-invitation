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
      className="relative w-full overflow-hidden select-none h-screen max-sm:h-[85vh]"
    >
      {/* ─── Background Image with parallax ─── */}
      <motion.div className="absolute inset-0 bg-[#1a1a1a]" style={{ scale }}>
        <div
          className="w-full h-full bg-cover"
          style={{ backgroundImage: 'url(/images/couple-hero.png)', backgroundPosition: 'center' }}
        />
      </motion.div>

      {/* ─── Dark overlay ─── */}
      <div className="absolute inset-0 bg-black/35" />

      {/* ─── Glass Card Content ─── */}
      <motion.div
        initial="hidden"
        animate="show"
        variants={stagger}
        className="relative z-10 flex items-center justify-center h-full w-full px-4"
      >
        <div
          className="text-center w-full max-w-[640px] px-10 sm:px-12 py-12 sm:py-14 max-sm:px-5 max-sm:py-8 max-sm:mx-3"
          style={{
            background: 'rgba(255, 255, 255, 0.12)',
            borderRadius: '20px',
            backdropFilter: 'blur(6px)',
            WebkitBackdropFilter: 'blur(6px)',
            border: '1px solid rgba(255,255,255,0.25)',
            color: '#fff',
          }}
        >
          {/* Together with their families */}
          <motion.p
            variants={fadeIn}
            className="font-['Cormorant_Garamond',serif] text-[13px] tracking-[3px] uppercase opacity-85"
          >
            Together with their families
          </motion.p>

          {/* Divider */}
          <motion.div variants={fadeIn} className="flex justify-center my-[18px]">
            <span className="block w-[70px] h-[2px] bg-[#ffd6a5]" />
          </motion.div>

          {/* Sub-text */}
          <motion.p
            variants={fadeIn}
            className="font-['Cormorant_Garamond',serif] text-[16px] italic opacity-90 mt-2.5 max-sm:text-[14px]"
          >
            request the honor of your presence at the marriage of
          </motion.p>

          {/* Names */}
          <motion.h1
            variants={fadeUp}
            className="font-['Allura',cursive] leading-tight my-[15px] relative"
            style={{
              color: '#ffdce5',
              textShadow:
                '0 0 6px rgba(255,200,210,0.6), 0 0 12px rgba(255,170,190,0.6)',
            }}
          >
            <span className="text-[clamp(50px,7vw,70px)] max-sm:text-[40px]">
              {name1}
            </span>
            <span className="block text-[clamp(28px,4vw,40px)] text-[#ffdce5] leading-none my-0.5">
              &amp;
            </span>
            <span className="text-[clamp(50px,7vw,70px)] max-sm:text-[40px]">
              {name2}
            </span>
          </motion.h1>

          {/* Divider */}
          <motion.div variants={fadeIn} className="flex justify-center my-[18px]">
            <span className="block w-[70px] h-[2px] bg-[#ffd6a5]" />
          </motion.div>

          {/* Date */}
          <motion.p
            variants={fadeIn}
            className="font-['Cormorant_Garamond',serif] text-[18px] opacity-90 tracking-[1px]"
          >
            {weddingDate}
          </motion.p>

          {/* RSVP Button */}
          <motion.button
            variants={fadeUp}
            onClick={onRSVPClick}
            className="inline-block mt-[25px] px-[30px] py-3 rounded-[30px] text-white text-[14px] tracking-[1px] border-none cursor-pointer transition-all duration-300 hover:scale-105"
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
        animate={{ opacity: 0.85 }}
        transition={{ delay: 2 }}
        className="absolute bottom-6 left-0 right-0 flex flex-col items-center pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-white text-[12px] tracking-[2px] font-['Cormorant_Garamond',serif] flex flex-col items-center"
        >
          SCROLL DOWN
          <span className="block text-[20px] mt-1">↓</span>
        </motion.div>
      </motion.div>
    </section>
  );
}
