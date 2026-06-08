'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface EnvelopeLandingProps {
  onEnter: () => void;
  coupleName?: string;
  weddingDate?: string;
}

export default function EnvelopeLanding({
  onEnter,
  coupleName = 'Jay Sam & Laarnie',
  weddingDate = '08.18.2026',
}: EnvelopeLandingProps) {
  const [showInvitation, setShowInvitation] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = useCallback(() => {
    setShowInvitation(true);
    setTimeout(() => onEnter(), 800);
  }, [onEnter]);

  const [name1, name2] = coupleName.split('&').map((s) => s.trim());

  return (
    <AnimatePresence mode="wait">
      {!showInvitation && (
        <motion.div
          key="envelope"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf6f0] overflow-hidden touch-none cursor-pointer select-none"
          exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
          onClick={handleOpen}
        >
          {/* Background floral pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <FloralBackground />
          </div>

          {/* Floating petals */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <FloatingPetals count={8} />
          </div>

          {/* Main content */}
          <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-sm">

            {/* ─── PHONE MOCKUP ─── */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative mb-5 sm:mb-6"
            >
              {/* Phone body */}
              <div className="relative w-[180px] h-[340px] sm:w-[210px] sm:h-[380px] rounded-[28px] sm:rounded-[32px] bg-[#1a1a1a] shadow-[0_15px_50px_-10px_rgba(90,74,58,0.35)] border-[3px] border-[#2a2a2a] flex items-center justify-center">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-5 sm:w-24 sm:h-6 bg-[#1a1a1a] rounded-b-xl z-10" />
                {/* Screen */}
                <div className="w-[calc(100%-8px)] h-[calc(100%-8px)] rounded-[24px] sm:rounded-[28px] overflow-hidden bg-gradient-to-br from-floral-cream via-floral-bg to-floral-blush/30 relative">
                  {/* Subtle floral screen texture */}
                  <div className="absolute inset-0 opacity-[0.06]">
                    <svg className="w-full h-full">
                      <defs>
                        <pattern id="screen-floral" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                          <circle cx="15" cy="15" r="4" fill="#caa687" />
                          <circle cx="45" cy="40" r="3" fill="#a3c4b5" />
                          <ellipse cx="30" cy="50" rx="6" ry="2" fill="#caa687" transform="rotate(-20 30 50)" />
                        </pattern>
                      </defs>
                      <rect width="100%" height="100%" fill="url(#screen-floral)" />
                    </svg>
                  </div>

                  {/* Couple silhouettes */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 sm:gap-4">
                    {/* Person 1 — Bride */}
                    <div className="flex flex-col items-center">
                      <svg className="w-14 h-20 sm:w-16 sm:h-24 text-[#caa687]/40" viewBox="0 0 48 72" fill="currentColor">
                        {/* Head */}
                        <circle cx="24" cy="12" r="8" />
                        {/* Body */}
                        <path d="M13,26 Q16,36 18,44 L18,68 L30,68 L30,44 Q32,36 35,26 Z" />
                        {/* Arms */}
                        <path d="M13,26 Q8,30 10,36 L13,32" />
                        <path d="M35,26 Q40,30 38,36 L35,32" />
                        {/* Veil/train suggestion */}
                        <path d="M13,26 Q8,22 4,28 Q2,34 8,34" opacity="0.4" />
                      </svg>
                      <span className="text-[#caa687]/30 text-[6px] sm:text-[7px] uppercase tracking-[0.2em] mt-0.5 font-['Playfair_Display',serif]">Bride</span>
                    </div>

                    {/* Heart between */}
                    <motion.div
                      animate={{ scale: [1, 1.15, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="text-[#caa687]/40 text-lg sm:text-xl"
                    >
                      ♡
                    </motion.div>

                    {/* Person 2 — Groom */}
                    <div className="flex flex-col items-center">
                      <svg className="w-14 h-20 sm:w-16 sm:h-24 text-[#253d5b]/30" viewBox="0 0 48 72" fill="currentColor">
                        {/* Head */}
                        <circle cx="24" cy="12" r="8" />
                        {/* Body (barong/suit) */}
                        <path d="M13,26 Q16,36 18,44 L18,68 L30,68 L30,44 Q32,36 35,26 Z" />
                        {/* Arms */}
                        <path d="M13,26 Q8,30 10,36 L13,32" />
                        <path d="M35,26 Q40,30 38,36 L35,32" />
                        {/* Collar */}
                        <path d="M18,26 L24,22 L30,26" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
                      </svg>
                      <span className="text-[#253d5b]/20 text-[6px] sm:text-[7px] uppercase tracking-[0.2em] mt-0.5 font-['Playfair_Display',serif]">Groom</span>
                    </div>
                  </div>

                  {/* Bottom text on screen */}
                  <div className="absolute bottom-2 sm:bottom-3 left-0 right-0 text-center">
                    <p className="font-['Playfair_Display',serif] italic text-[#caa687]/40 text-[8px] sm:text-[9px] leading-tight">
                      Save the Date
                    </p>
                  </div>
                </div>
              </div>

              {/* Floral ring around phone */}
              <div className="absolute -inset-8 sm:-inset-10 pointer-events-none">
                <svg viewBox="0 0 300 400" className="w-full h-full" fill="none">
                  {/* Top-left leaf cluster */}
                  <path d="M30,60 Q50,30 80,40 Q90,50 80,65 Q60,70 45,60Z" fill="#a3c4b5" opacity="0.35" />
                  <path d="M35,60 Q55,25 90,38" stroke="#a3c4b5" strokeWidth="1" opacity="0.3" />
                  <path d="M45,50 Q70,15 100,28" stroke="#a3c4b5" strokeWidth="0.8" opacity="0.25" />
                  {/* Top-right leaf cluster */}
                  <path d="M270,60 Q250,30 220,40 Q210,50 220,65 Q240,70 255,60Z" fill="#a3c4b5" opacity="0.35" />
                  <path d="M265,60 Q245,25 210,38" stroke="#a3c4b5" strokeWidth="1" opacity="0.3" />
                  <path d="M255,50 Q230,15 200,28" stroke="#a3c4b5" strokeWidth="0.8" opacity="0.25" />
                  {/* Bottom-left */}
                  <path d="M20,340 Q40,370 70,360 Q80,350 70,335 Q50,330 35,340Z" fill="#a3c4b5" opacity="0.25" />
                  <path d="M25,338 Q50,370 80,355" stroke="#a3c4b5" strokeWidth="0.8" opacity="0.2" />
                  {/* Bottom-right */}
                  <path d="M280,340 Q260,370 230,360 Q220,350 230,335 Q250,330 265,340Z" fill="#a3c4b5" opacity="0.25" />
                  <path d="M275,338 Q250,370 220,355" stroke="#a3c4b5" strokeWidth="0.8" opacity="0.2" />
                  {/* Small blush flowers */}
                  <circle cx="55" cy="48" r="6" fill="#f2d5d5" opacity="0.5" />
                  <circle cx="55" cy="48" r="3" fill="#f0c8c8" opacity="0.35" />
                  <circle cx="245" cy="48" r="6" fill="#f2d5d5" opacity="0.5" />
                  <circle cx="245" cy="48" r="3" fill="#f0c8c8" opacity="0.35" />
                  <circle cx="38" cy="55" r="4" fill="#f2d5d5" opacity="0.4" />
                  <circle cx="262" cy="55" r="4" fill="#f2d5d5" opacity="0.4" />
                  {/* Baby's breath dots */}
                  <circle cx="80" cy="30" r="2" fill="#f7f0f0" opacity="0.6" />
                  <circle cx="78" cy="35" r="1.2" fill="#f2d5d5" opacity="0.5" />
                  <circle cx="220" cy="30" r="2" fill="#f7f0f0" opacity="0.6" />
                  <circle cx="222" cy="35" r="1.2" fill="#f2d5d5" opacity="0.5" />
                  <circle cx="50" cy="42" r="1.5" fill="#f7f0f0" opacity="0.5" />
                  <circle cx="250" cy="42" r="1.5" fill="#f7f0f0" opacity="0.5" />
                  {/* Gold accent dots */}
                  <circle cx="70" cy="38" r="1.5" fill="#d4a373" opacity="0.3" />
                  <circle cx="230" cy="38" r="1.5" fill="#d4a373" opacity="0.3" />
                </svg>
              </div>
            </motion.div>

            {/* ─── TEXT DETAILS ─── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              {/* Top ornament */}
              <div className="flex items-center justify-center gap-2 mb-2 sm:mb-3">
                <span className="block h-px w-6 sm:w-10 bg-[#caa687]/30" />
                <span className="text-[#caa687] text-xs sm:text-sm">✦</span>
                <span className="block h-px w-6 sm:w-10 bg-[#caa687]/30" />
              </div>

              {/* Save the Date */}
              <p className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] sm:text-xs uppercase tracking-[0.35em] font-medium mb-2 sm:mb-3">
                Save the Date
              </p>

              {/* Names */}
              <h1 className="flex justify-center items-center gap-1 sm:gap-2 flex-wrap mb-1">
                <span className="font-['Playfair_Display',serif] text-[#253d5b] text-xl sm:text-2xl md:text-3xl font-light tracking-[0.15em] uppercase">
                  {name1}
                </span>
                <span className="font-['Dancing_Script',cursive] text-[#caa687] text-lg sm:text-xl md:text-2xl">
                  &amp;
                </span>
                <span className="font-['Playfair_Display',serif] text-[#253d5b] text-xl sm:text-2xl md:text-3xl font-light tracking-[0.15em] uppercase">
                  {name2}
                </span>
              </h1>

              {/* Decorative line */}
              <div className="flex items-center justify-center gap-2 my-2 sm:my-3">
                <span className="block h-px w-4 sm:w-6 bg-[#caa687]/20" />
                <svg className="w-2 h-2 text-[#caa687]/30" viewBox="0 0 20 20" fill="currentColor">
                  <circle cx="10" cy="10" r="2" />
                  <ellipse cx="10" cy="7" rx="1.5" ry="1" opacity="0.5" />
                  <ellipse cx="10" cy="13" rx="1.5" ry="1" opacity="0.5" />
                </svg>
                <span className="block h-px w-4 sm:w-6 bg-[#caa687]/20" />
              </div>

              {/* Date */}
              <p className="font-['Dancing_Script',cursive] text-[#caa687] text-lg sm:text-xl md:text-2xl mb-1 sm:mb-2">
                {weddingDate}
              </p>

              {/* Subtitle */}
              <p className="font-['Playfair_Display',serif] italic text-[#5a4a3a]/70 text-xs sm:text-sm">
                We are getting married
              </p>

              {/* Bottom ornament */}
              <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
                <span className="block h-px w-6 sm:w-10 bg-[#caa687]/30" />
                <span className="text-[#caa687] text-xs sm:text-sm">✦</span>
                <span className="block h-px w-6 sm:w-10 bg-[#caa687]/30" />
              </div>
            </motion.div>

            {/* ─── TAP INDICATOR ─── */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="mt-5 sm:mt-6"
            >
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="flex flex-col items-center gap-1 text-[#caa687]/40"
              >
                <span className="text-[8px] sm:text-[9px] uppercase tracking-[0.3em] font-['Inter',sans-serif] font-light">
                  Tap to open
                </span>
                <svg width="12" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Floral Background Pattern ─── */
function FloralBackground() {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="env-floral-pattern" x="0" y="0" width="180" height="180" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="40" r="7" fill="#f2d5d5" opacity="0.4" />
          <circle cx="40" cy="40" r="3.5" fill="#f5c4c4" opacity="0.25" />
          <circle cx="130" cy="100" r="5" fill="#a3c4b5" opacity="0.35" />
          <circle cx="130" cy="100" r="2.5" fill="#8bb5a0" opacity="0.25" />
          <circle cx="70" cy="140" r="4" fill="#f2d5d5" opacity="0.25" />
          <circle cx="160" cy="30" r="3.5" fill="#d4a373" opacity="0.25" />
          <ellipse cx="50" cy="80" rx="8" ry="2.5" transform="rotate(-30 50 80)" fill="#a3c4b5" opacity="0.25" />
          <ellipse cx="110" cy="60" rx="7" ry="2" transform="rotate(20 110 60)" fill="#a3c4b5" opacity="0.2" />
          <ellipse cx="90" cy="160" rx="6" ry="2" transform="rotate(-40 90 160)" fill="#a3c4b5" opacity="0.2" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#env-floral-pattern)" />
    </svg>
  );
}

/* ─── Floating Petals ─── */
function FloatingPetals({ count = 8 }: { count?: number }) {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 6,
    duration: 7 + Math.random() * 5,
    size: 5 + Math.random() * 10,
    rotation: Math.random() * 360,
    color: ['#f2d5d5', '#f5efe6', '#a3c4b5', '#d4a373', '#f7f0f0'][i % 5],
  }));

  return (
    <>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full opacity-30"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            width: petal.size,
            height: petal.size,
            backgroundColor: petal.color,
            borderRadius: '50% 0 50% 0',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, 20, -10, 15, 0],
            rotate: [petal.rotation, petal.rotation + 360],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
      ))}
    </>
  );
}
