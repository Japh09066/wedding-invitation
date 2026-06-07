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
  const [isOpened, setIsOpened] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
    setTimeout(() => setShowInvitation(true), 1200);
    setTimeout(() => onEnter(), 3500);
  }, [onEnter]);

  return (
    <AnimatePresence mode="wait">
      {!showInvitation && (
        <motion.div
          key="envelope"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf6f0] overflow-hidden touch-none"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Background floral pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <FloralBackground />
          </div>

          {/* Floating petals */}
          <FloatingPetals count={6} />

          {/* Centered content */}
          <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-md">
            {/* Envelope with proper aspect ratio */}
            <div
              className="relative w-full max-w-[420px]"
              style={{ aspectRatio: '420 / 300' }}
            >
              {/* Envelope base SVG */}
              <svg
                viewBox="0 0 420 300"
                className="absolute inset-0 w-full h-full drop-shadow-xl"
                style={{ filter: 'drop-shadow(0 15px 35px rgba(90,74,58,0.18))' }}
              >
                <defs>
                  <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5efe6" />
                    <stop offset="50%" stopColor="#ede3d5" />
                    <stop offset="100%" stopColor="#e8dccb" />
                  </linearGradient>
                </defs>
                {/* Body */}
                <rect x="20" y="40" width="380" height="240" rx="4" fill="url(#envGrad)" stroke="#d4c9b5" strokeWidth="1" />
                {/* Bottom triangles (flap underside) */}
                <polygon points="20,280 210,200 400,280" fill="#ede3d5" stroke="#d4c9b5" strokeWidth="1" />
                <polygon points="20,280 20,40 210,120" fill="#f5efe6" stroke="#d4c9b5" strokeWidth="0.5" />
                <polygon points="400,280 400,40 210,120" fill="#f2ebe0" stroke="#d4c9b5" strokeWidth="0.5" />
                {/* Crease lines */}
                <line x1="20" y1="280" x2="210" y2="200" stroke="#d4c9b5" strokeWidth="0.5" opacity="0.6" />
                <line x1="400" y1="280" x2="210" y2="200" stroke="#d4c9b5" strokeWidth="0.5" opacity="0.6" />
              </svg>

              {/* Animated top flap */}
              <div
                className="absolute inset-0 z-10"
                style={{ perspective: '1200px' }}
              >
                <motion.div
                  className="w-full h-full"
                  style={{ transformOrigin: '50% 100%', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                  animate={isOpened ? { rotateX: 180 } : { rotateX: 0 }}
                  transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                >
                  <svg
                    viewBox="0 0 420 300"
                    className="w-full h-full"
                  >
                    <polygon points="20,40 210,120 400,40" fill="#f5efe6" stroke="#d4c9b5" strokeWidth="1" />
                    <path d="M20,40 L210,120 L400,40" fill="none" stroke="#c9b89a" strokeWidth="0.5" opacity={isOpened ? 0 : 0.6} />
                  </svg>
                </motion.div>
              </div>

              {/* Invitation card inside */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center p-4 sm:p-6"
                animate={
                  isOpened
                    ? { y: -8, scale: 1.03, opacity: 1 }
                    : { y: 2, scale: 0.93, opacity: 0.7 }
                }
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <InvitationCard coupleName={coupleName} weddingDate={weddingDate} />
              </motion.div>

              {/* Wax seal */}
              <motion.div
                className="absolute z-20"
                style={{ bottom: '2%', left: '50%', marginLeft: -18 }}
                animate={isOpened ? { y: -20, opacity: 0, scale: 0.3 } : { y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <svg width="36" height="36" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="#d4a373" stroke="#c4956a" strokeWidth="1" />
                  <circle cx="20" cy="20" r="14" fill="none" stroke="#c4956a" strokeWidth="0.5" opacity="0.5" />
                  <path d="M14,16 Q20,12 26,16 Q20,20 14,16Z" fill="#c4956a" opacity="0.7" />
                  <path d="M14,16 Q20,20 26,16 Q20,24 14,16Z" fill="#b8865a" opacity="0.5" />
                  <circle cx="20" cy="16" r="2" fill="#b8865a" />
                </svg>
              </motion.div>
            </div>

            {/* Button / text — below envelope */}
            <div className="mt-6 sm:mt-8 flex justify-center min-h-[56px]">
              {!isOpened ? (
                <motion.button
                  onClick={handleOpen}
                  className="px-8 py-3 sm:px-10 sm:py-4 bg-[#d4a373] hover:bg-[#c9a88e] text-white rounded-full font-serif text-lg tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 active:scale-95 select-none"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 0.6 }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Open Invitation
                </motion.button>
              ) : (
                <motion.p
                  className="text-[#c9a88e] font-serif text-lg italic"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  You are cordially invited...
                </motion.p>
              )}
            </div>
          </div>

          {/* Floral decorative corners */}
          <div className="absolute bottom-0 left-0 w-32 sm:w-48 h-32 sm:h-48 opacity-30 pointer-events-none">
            <FloralCorner />
          </div>
          <div className="absolute bottom-0 right-0 w-32 sm:w-48 h-32 sm:h-48 opacity-30 scale-x-[-1] pointer-events-none">
            <FloralCorner />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── Invitation Card ─── */
function InvitationCard({
  coupleName,
  weddingDate,
}: {
  coupleName: string;
  weddingDate: string;
}) {
  const [name1, name2] = coupleName.split('&').map((s) => s.trim());

  return (
    <motion.div
      className="bg-white/95 backdrop-blur-sm rounded-lg shadow-xl border border-[#f5efe6] p-4 sm:p-6 text-center w-full max-w-[260px] sm:max-w-[280px]"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Top ornament */}
      <div className="flex items-center justify-center gap-2 mb-3">
        <span className="block h-px w-6 sm:w-8 bg-[#d4a373]/50" />
        <span className="text-[#d4a373] text-base sm:text-lg">✦</span>
        <span className="block h-px w-6 sm:w-8 bg-[#d4a373]/50" />
      </div>

      <p className="font-['Dancing_Script',cursive] text-[#d4a373] text-sm sm:text-lg mb-2">
        Together with their families
      </p>

      <div className="flex justify-center items-center gap-1 sm:gap-2 mb-2 flex-wrap">
        <span className="font-serif text-xl sm:text-2xl tracking-widest text-[#5a4a3a] uppercase">
          {name1}
        </span>
        <span className="font-['Dancing_Script',cursive] text-[#d4a373] text-xl sm:text-2xl">&amp;</span>
        <span className="font-serif text-xl sm:text-2xl tracking-widest text-[#5a4a3a] uppercase">
          {name2}
        </span>
      </div>

      <div className="w-12 sm:w-16 h-px bg-[#c9a88e]/30 mx-auto my-2 sm:my-3" />

      <p className="font-serif text-[#c9a88e] text-xs sm:text-sm uppercase tracking-[0.3em] mb-1">
        Save the Date
      </p>
      <p className="font-['Dancing_Script',cursive] text-[#d4a373] text-2xl sm:text-3xl mb-2">
        {weddingDate}
      </p>

      <p className="font-serif text-[#5a4a3a] text-xs sm:text-sm italic">
        We are getting married
      </p>

      {/* Bottom ornament */}
      <div className="flex items-center justify-center gap-2 mt-3 sm:mt-4">
        <span className="block h-px w-6 sm:w-8 bg-[#d4a373]/50" />
        <span className="text-[#d4a373] text-base sm:text-lg">✦</span>
        <span className="block h-px w-6 sm:w-8 bg-[#d4a373]/50" />
      </div>
    </motion.div>
  );
}

/* ─── Floral Background Pattern ─── */
function FloralBackground() {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="floral-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <circle cx="50" cy="50" r="8" fill="#f2d5d5" opacity="0.5" />
          <circle cx="50" cy="50" r="4" fill="#f5c4c4" opacity="0.3" />
          <circle cx="150" cy="120" r="6" fill="#a3c4b5" opacity="0.4" />
          <circle cx="150" cy="120" r="3" fill="#8bb5a0" opacity="0.3" />
          <circle cx="80" cy="160" r="5" fill="#f2d5d5" opacity="0.3" />
          <circle cx="180" cy="40" r="4" fill="#d4a373" opacity="0.3" />
          <ellipse cx="60" cy="100" rx="10" ry="3" transform="rotate(-30 60 100)" fill="#a3c4b5" opacity="0.3" />
          <ellipse cx="130" cy="70" rx="8" ry="2.5" transform="rotate(20 130 70)" fill="#a3c4b5" opacity="0.25" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#floral-pattern)" />
    </svg>
  );
}

/* ─── Floating Petals ─── */
function FloatingPetals({ count = 6 }: { count?: number }) {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 10 + Math.random() * 80,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 4,
    size: 6 + Math.random() * 10,
    rotation: Math.random() * 360,
    color: i % 3 === 0 ? '#f2d5d5' : i % 3 === 1 ? '#f5efe6' : '#a3c4b5',
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {mountedPetals(petals)}
    </div>
  );
}

function mountedPetals(
  petals: { id: number; left: number; delay: number; duration: number; size: number; rotation: number; color: string }[]
) {
  return petals.map((petal) => (
    <motion.div
      key={petal.id}
      className="absolute rounded-full opacity-30"
      style={{
        left: `${petal.left}%`,
        top: '-5%',
        width: petal.size,
        height: petal.size,
        backgroundColor: petal.color,
      }}
      animate={{
        y: ['0vh', '105vh'],
        x: [0, 25, -15, 10],
        rotate: [petal.rotation, petal.rotation + 360],
      }}
      transition={{
        duration: petal.duration,
        delay: petal.delay,
        repeat: Infinity,
        ease: 'linear',
      }}
    />
  ));
}

/* ─── Floral Corner Decoration ─── */
function FloralCorner() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      <path d="M0,200 Q40,150 60,100 Q80,60 100,40" fill="none" stroke="#a3c4b5" strokeWidth="2" opacity="0.6" />
      <path d="M60,200 Q90,160 100,120 Q110,80 130,60" fill="none" stroke="#a3c4b5" strokeWidth="1.5" opacity="0.5" />
      <ellipse cx="55" cy="140" rx="12" ry="4" transform="rotate(-40 55 140)" fill="#a3c4b5" opacity="0.5" />
      <ellipse cx="80" cy="110" rx="10" ry="3" transform="rotate(30 80 110)" fill="#a3c4b5" opacity="0.4" />
      <circle cx="60" cy="100" r="10" fill="#f2d5d5" opacity="0.6" />
      <circle cx="60" cy="100" r="5" fill="#ecc8c8" opacity="0.4" />
      <circle cx="100" cy="40" r="8" fill="#f2d5d5" opacity="0.5" />
      <circle cx="100" cy="40" r="4" fill="#ecc8c8" opacity="0.3" />
      <circle cx="130" cy="60" r="6" fill="#d4a373" opacity="0.4" />
      <circle cx="140" cy="30" r="5" fill="#f2d5d5" opacity="0.3" />
      <circle cx="35" cy="170" r="4" fill="#f2d5d5" opacity="0.4" />
      <circle cx="35" cy="170" r="2" fill="#ecc8c8" opacity="0.3" />
    </svg>
  );
}
