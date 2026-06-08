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
    setTimeout(() => setShowInvitation(true), 2800);
    setTimeout(() => onEnter(), 3800);
  }, [onEnter]);

  return (
    <AnimatePresence mode="wait">
      {!showInvitation && (
        <motion.div
          key="envelope"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#faf6f0] overflow-hidden touch-none cursor-pointer select-none"
          exit={{ opacity: 0, transition: { duration: 0.7, ease: 'easeInOut' } }}
          onClick={handleOpen}
        >
          {/* Background floral pattern */}
          <div className="absolute inset-0 opacity-15 pointer-events-none">
            <BackgroundFloral />
          </div>

          {/* Floating petals */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            <FloatingPetals count={6} />
          </div>

          <div className="relative z-10 flex flex-col items-center px-4 w-full max-w-sm">
            {/* ─── ENVELOPE ─── */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[340px] sm:max-w-[400px]"
              style={{ aspectRatio: '400 / 280' }}
            >
              {/* Envelope body */}
              <svg viewBox="0 0 400 280" className="w-full h-full drop-shadow-xl">
                <defs>
                  <linearGradient id="env-body" x1="0" y1="0" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f8f4ed" />
                    <stop offset="50%" stopColor="#f0e8dc" />
                    <stop offset="100%" stopColor="#e8ddcd" />
                  </linearGradient>
                  <radialGradient id="env-blush">
                    <stop offset="0%" stopColor="#f2d5d5" stopOpacity="0.5" />
                    <stop offset="60%" stopColor="#ecc8c8" stopOpacity="0.2" />
                    <stop offset="100%" stopColor="#ecc8c8" stopOpacity="0" />
                  </radialGradient>
                  <radialGradient id="env-rose">
                    <stop offset="0%" stopColor="#e8a0a0" />
                    <stop offset="50%" stopColor="#df8a8a" />
                    <stop offset="100%" stopColor="#d47777" />
                  </radialGradient>
                  <linearGradient id="env-leaf" x1="0" y1="0" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#a3c4b5" />
                    <stop offset="100%" stopColor="#8bb5a0" />
                  </linearGradient>
                  <linearGradient id="env-gold" x1="0" y1="0" x2="100%" y2="0">
                    <stop offset="0%" stopColor="#d4a373" />
                    <stop offset="50%" stopColor="#c9986a" />
                    <stop offset="100%" stopColor="#b8885a" />
                  </linearGradient>
                </defs>

                {/* Body */}
                <rect x="20" y="40" width="360" height="220" rx="4" fill="url(#env-body)" stroke="#d4c9b5" strokeWidth="0.8" />

                {/* Watercolor wash */}
                <ellipse cx="200" cy="155" rx="60" ry="45" fill="url(#env-blush)" />

                {/* ─── PAINTED ROSES ─── */}
                {/* Stems */}
                <path d="M200,195 Q193,168 185,148" fill="none" stroke="#8bb5a0" strokeWidth="2.5" strokeLinecap="round" opacity="0.7" />
                <path d="M200,195 Q212,165 220,145" fill="none" stroke="#8bb5a0" strokeWidth="2" strokeLinecap="round" opacity="0.6" />
                <path d="M200,195 Q185,175 168,165" fill="none" stroke="#8bb5a0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
                <path d="M200,195 Q218,180 235,170" fill="none" stroke="#8bb5a0" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />

                {/* Leaves */}
                <g opacity="0.7">
                  <path d="M190,172 Q182,162 174,165 Q178,174 190,172Z" fill="url(#env-leaf)" />
                  <path d="M190,172 L174,165" fill="none" stroke="#7aa58f" strokeWidth="0.5" />
                  <path d="M212,168 Q222,158 230,162 Q226,172 212,168Z" fill="url(#env-leaf)" />
                  <path d="M212,168 L230,162" fill="none" stroke="#7aa58f" strokeWidth="0.5" />
                  <path d="M196,182 Q186,178 178,184 Q184,190 196,182Z" fill="url(#env-leaf)" opacity="0.6" />
                  <path d="M210,184 Q221,179 230,186 Q225,192 210,184Z" fill="url(#env-leaf)" opacity="0.6" />
                </g>

                {/* Baby's breath */}
                {[
                  [165,160], [245,165], [175,145], [228,145], [158,170], [250,175]
                ].map(([cx, cy], i) => (
                  <g key={i}>
                    <circle cx={cx} cy={cy} r="3" fill="#f7f0f0" opacity="0.7" />
                    <circle cx={cx} cy={cy} r="1.5" fill="#f2d5d5" />
                  </g>
                ))}

                {/* Main rose */}
                <g>
                  <ellipse cx="205" cy="155" rx="14" ry="10" fill="#ecc8c8" opacity="0.6" transform="rotate(15 205 155)" />
                  <ellipse cx="190" cy="152" rx="12" ry="9" fill="#ecc8c8" opacity="0.5" transform="rotate(-25 190 152)" />
                  <ellipse cx="202" cy="165" rx="12" ry="9" fill="#ecc8c8" opacity="0.5" transform="rotate(40 202 165)" />
                  <ellipse cx="193" cy="160" rx="10" ry="8" fill="#f0c8c8" opacity="0.5" transform="rotate(-10 193 160)" />
                  <ellipse cx="212" cy="163" rx="10" ry="8" fill="#f0c8c8" opacity="0.5" transform="rotate(30 212 163)" />
                  <ellipse cx="204" cy="157" rx="10" ry="7" fill="#e8a0a0" opacity="0.7" transform="rotate(10 204 157)" />
                  <ellipse cx="196" cy="154" rx="9" ry="6" fill="#df8a8a" opacity="0.65" transform="rotate(-15 196 154)" />
                  <ellipse cx="202" cy="162" rx="9" ry="6" fill="#df8a8a" opacity="0.65" transform="rotate(25 202 162)" />
                  <ellipse cx="200" cy="158" rx="7" ry="5" fill="url(#env-rose)" opacity="0.8" />
                  <ellipse cx="200" cy="157" rx="4" ry="3" fill="#d47777" opacity="0.9" />
                  <ellipse cx="200" cy="157" rx="2" ry="1.5" fill="#c96565" />
                </g>

                {/* Secondary rose bud */}
                <g opacity="0.6">
                  <ellipse cx="228" cy="155" rx="9" ry="6" fill="#f0c8c8" transform="rotate(-20 228 155)" />
                  <ellipse cx="227" cy="153" rx="6" ry="4.5" fill="#e8a0a0" transform="rotate(-10 227 153)" />
                  <ellipse cx="228" cy="155" rx="3.5" ry="2.5" fill="#d47777" />
                </g>

                {/* Third bud */}
                <g opacity="0.5">
                  <ellipse cx="182" cy="150" rx="7" ry="5" fill="#f0c8c8" transform="rotate(15 182 150)" />
                  <ellipse cx="181" cy="149" rx="4.5" ry="3.5" fill="#e8a0a0" transform="rotate(5 181 149)" />
                  <ellipse cx="181" cy="150" rx="2.5" ry="1.8" fill="#d47777" />
                </g>

                {/* Eucalyptus sprigs */}
                <ellipse cx="166" cy="170" rx="6" ry="2.5" fill="#a3c4b5" opacity="0.45" transform="rotate(-30 166 170)" />
                <ellipse cx="170" cy="166" rx="5" ry="2" fill="#a3c4b5" opacity="0.35" transform="rotate(-45 170 166)" />
                <ellipse cx="234" cy="172" rx="6" ry="2.5" fill="#a3c4b5" opacity="0.45" transform="rotate(25 234 172)" />
                <ellipse cx="230" cy="168" rx="5" ry="2" fill="#a3c4b5" opacity="0.35" transform="rotate(40 230 168)" />

                {/* Gold flourish accents */}
                <path d="M148,142 Q158,138 162,146" fill="none" stroke="#d4a373" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />
                <path d="M240,145 Q248,140 252,148" fill="none" stroke="#d4a373" strokeWidth="0.8" opacity="0.4" strokeLinecap="round" />

                {/* Monogram */}
                <text x="200" y="215" textAnchor="middle" fontFamily="'Dancing Script',cursive" fontSize="14" fill="url(#env-gold)" opacity="0.6">
                  J &amp; L
                </text>

                {/* Envelope flaps — drawn after decorations */}
                <polygon points="20,260 200,185 380,260" fill="#ede3d5" stroke="#d4c9b5" strokeWidth="0.8" />
                <polygon points="20,260 20,40 200,110" fill="#f5efe6" stroke="#d4c9b5" strokeWidth="0.5" />
                <polygon points="380,260 380,40 200,110" fill="#f2ebe0" stroke="#d4c9b5" strokeWidth="0.5" />
                <line x1="20" y1="260" x2="200" y2="185" stroke="#d4c9b5" strokeWidth="0.5" opacity="0.5" />
                <line x1="380" y1="260" x2="200" y2="185" stroke="#d4c9b5" strokeWidth="0.5" opacity="0.5" />
              </svg>

              {/* Animated top flap */}
              <div className="absolute inset-0" style={{ perspective: '1200px' }}>
                <motion.div
                  className="w-full h-full"
                  style={{ transformOrigin: '50% 100%', transformStyle: 'preserve-3d', backfaceVisibility: 'hidden' }}
                  animate={isOpened ? { rotateX: 180 } : { rotateX: 0 }}
                  transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
                >
                  <svg viewBox="0 0 400 280" className="w-full h-full">
                    <defs>
                      <linearGradient id="env-flap" x1="0" y1="0" x2="0" y2="100%">
                        <stop offset="0%" stopColor="#f2ebe0" />
                        <stop offset="100%" stopColor="#f5efe6" />
                      </linearGradient>
                    </defs>
                    <polygon points="20,40 200,110 380,40" fill="url(#env-flap)" stroke="#d4c9b5" strokeWidth="0.8" />
                    <line x1="20" y1="40" x2="200" y2="110" stroke="#d4c9b5" strokeWidth="0.5" opacity="0.4" />
                    <line x1="380" y1="40" x2="200" y2="110" stroke="#d4c9b5" strokeWidth="0.5" opacity="0.4" />
                  </svg>
                </motion.div>
              </div>
            </motion.div>

            {/* ─── INVITATION CARD (appears after opening) ─── */}
            <AnimatePresence>
              {isOpened && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="absolute z-20 w-[85%] max-w-[320px]"
                  style={{ top: '52%' }}
                >
                  <InvitationCard coupleName={coupleName} weddingDate={weddingDate} />
                </motion.div>
              )}
            </AnimatePresence>

            {/* ─── TAP INDICATOR ─── */}
            {!isOpened && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-4 sm:mt-5"
              >
                <motion.div
                  animate={{ y: [0, 4, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="flex flex-col items-center gap-1 text-[#caa687]/40"
                >
                  <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-['Inter',sans-serif] font-light">
                    Tap to Open
                  </span>
                  <svg width="12" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </motion.div>
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ─── INVITATION CARD ─── */
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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative bg-white rounded-lg shadow-[0_15px_40px_-10px_rgba(90,74,58,0.3)] border border-floral-cream p-6 sm:p-7 text-center"
    >
      {/* Card border ornament */}
      <div className="absolute inset-2 border border-[#caa687]/10 rounded-md pointer-events-none" />

      {/* Top ornament */}
      <div className="flex items-center justify-center gap-1.5 mb-3">
        <span className="block h-px w-6 bg-[#caa687]/25" />
        <span className="text-[#caa687] text-xs">✦</span>
        <span className="block h-px w-6 bg-[#caa687]/25" />
      </div>

      {/* Save the Date */}
      <p className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] uppercase tracking-[0.35em] font-medium mb-2">
        Save the Date
      </p>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <span className="block h-px w-4 bg-[#caa687]/15" />
        <svg className="w-1.5 h-1.5 text-[#caa687]/25" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="10" cy="10" r="2" />
          <ellipse cx="10" cy="7.5" rx="1.2" ry="0.8" opacity="0.5" />
        </svg>
        <span className="block h-px w-4 bg-[#caa687]/15" />
      </div>

      {/* Names */}
      <h1 className="flex flex-col items-center mb-2">
        <span className="font-['Playfair_Display',serif] text-[#253d5b] text-xl sm:text-2xl font-light tracking-[0.12em] uppercase leading-tight">
          {name1}
        </span>
        <span className="font-['Dancing_Script',cursive] text-[#caa687] text-lg sm:text-xl leading-none my-0.5">
          &amp;
        </span>
        <span className="font-['Playfair_Display',serif] text-[#253d5b] text-xl sm:text-2xl font-light tracking-[0.12em] uppercase leading-tight">
          {name2}
        </span>
      </h1>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-1.5 mb-2">
        <span className="block h-px w-4 bg-[#caa687]/15" />
        <svg className="w-1.5 h-1.5 text-[#caa687]/25" viewBox="0 0 20 20" fill="currentColor">
          <circle cx="10" cy="10" r="2" />
          <ellipse cx="10" cy="7.5" rx="1.2" ry="0.8" opacity="0.5" />
        </svg>
        <span className="block h-px w-4 bg-[#caa687]/15" />
      </div>

      {/* Date */}
      <p className="font-['Dancing_Script',cursive] text-[#caa687] text-lg sm:text-xl mb-1">
        {weddingDate}
      </p>

      {/* We're getting married */}
      <p className="font-['Playfair_Display',serif] italic text-[#5a4a3a]/60 text-[11px] sm:text-xs leading-tight">
        We are getting married
      </p>

      {/* Bottom ornament */}
      <div className="flex items-center justify-center gap-1.5 mt-3">
        <span className="block h-px w-6 bg-[#caa687]/25" />
        <span className="text-[#caa687] text-xs">✦</span>
        <span className="block h-px w-6 bg-[#caa687]/25" />
      </div>
    </motion.div>
  );
}

/* ─── BACKGROUND PATTERN ─── */
function BackgroundFloral() {
  return (
    <svg className="w-full h-full">
      <defs>
        <pattern id="env-bg-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          <circle cx="40" cy="40" r="7" fill="#f2d5d5" opacity="0.4" />
          <circle cx="40" cy="40" r="3.5" fill="#f5c4c4" opacity="0.25" />
          <circle cx="140" cy="110" r="5" fill="#a3c4b5" opacity="0.35" />
          <circle cx="140" cy="110" r="2.5" fill="#8bb5a0" opacity="0.25" />
          <circle cx="80" cy="150" r="4" fill="#f2d5d5" opacity="0.2" />
          <circle cx="170" cy="40" r="3.5" fill="#d4a373" opacity="0.25" />
          <ellipse cx="60" cy="90" rx="8" ry="2.5" transform="rotate(-30 60 90)" fill="#a3c4b5" opacity="0.2" />
          <ellipse cx="130" cy="70" rx="7" ry="2" transform="rotate(20 130 70)" fill="#a3c4b5" opacity="0.18" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#env-bg-pattern)" />
    </svg>
  );
}

/* ─── FLOATING PETALS ─── */
function FloatingPetals({ count = 6 }: { count?: number }) {
  const petals = Array.from({ length: count }, (_, i) => ({
    id: i,
    left: 5 + Math.random() * 90,
    delay: Math.random() * 5,
    duration: 8 + Math.random() * 4,
    size: 5 + Math.random() * 8,
    rotation: Math.random() * 360,
    color: ['#f2d5d5', '#f5efe6', '#a3c4b5', '#d4a373', '#f7f0f0', '#ecc8c8'][i % 6],
  }));

  return (
    <>
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute opacity-25"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            width: petal.size,
            height: petal.size * 1.2,
            backgroundColor: petal.color,
            borderRadius: '50% 0 50% 0',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, 15, -8, 12, 0],
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
