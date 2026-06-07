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
  coupleName = 'Cindy & Keys',
  weddingDate = '03.31.2026',
}: EnvelopeLandingProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [showInvitation, setShowInvitation] = useState(false);
  const [floralLoaded, setFloralLoaded] = useState(false);

  useEffect(() => {
    setFloralLoaded(true);
  }, []);

  const handleOpen = useCallback(() => {
    setIsOpened(true);
    setTimeout(() => setShowInvitation(true), 1200);
    setTimeout(() => onEnter(), 3500);
  }, [onEnter]);

  return (
    <AnimatePresence mode="wait">
      {!showInvitation ? (
        <motion.div
          key="envelope"
          className="fixed inset-0 z-50 flex items-center justify-center bg-floral-bg overflow-hidden"
          exit={{ opacity: 0, transition: { duration: 0.8, ease: 'easeInOut' } }}
        >
          {/* Background floral pattern */}
          <div className="absolute inset-0 opacity-20">
            <FloralBackground />
          </div>

          {/* Floating petals */}
          <FloatingPetals count={8} />

          {/* Envelope container */}
          <div className="envelope-perspective relative">
            {/* Back envelope body */}
            <div className="relative" style={{ width: 420, height: 300 }}>
              {/* Envelope base - visible always */}
              <svg
                viewBox="0 0 420 300"
                className="absolute inset-0 w-full h-full drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 20px 40px rgba(90,74,58,0.2))' }}
              >
                <defs>
                  <linearGradient id="envGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#f5efe6" />
                    <stop offset="50%" stopColor="#ede3d5" />
                    <stop offset="100%" stopColor="#e8dccb" />
                  </linearGradient>
                  <linearGradient id="envShadow" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="rgba(0,0,0,0.06)" />
                    <stop offset="100%" stopColor="rgba(0,0,0,0)" />
                  </linearGradient>
                </defs>
                {/* Envelope body */}
                <rect x="20" y="40" width="380" height="240" rx="4" fill="url(#envGrad)" stroke="#d4c9b5" strokeWidth="1" />
                {/* Envelope flap (bottom triangles) */}
                <polygon points="20,280 210,200 400,280" fill="#ede3d5" stroke="#d4c9b5" strokeWidth="1" />
                <polygon points="20,280 20,40 210,120" fill="#f5efe6" stroke="#d4c9b5" strokeWidth="0.5" />
                <polygon points="400,280 400,40 210,120" fill="#f2ebe0" stroke="#d4c9b5" strokeWidth="0.5" />
                {/* Flap crease */}
                <line x1="20" y1="280" x2="210" y2="200" stroke="#d4c9b5" strokeWidth="0.5" opacity="0.6" />
                <line x1="400" y1="280" x2="210" y2="200" stroke="#d4c9b5" strokeWidth="0.5" opacity="0.6" />
              </svg>

              {/* Envelope top flap - animated */}
              <motion.div
                className="absolute inset-0 z-10 origin-bottom"
                style={{ bottom: 0 }}
                animate={
                  isOpened
                    ? { rotateX: 180, z: -50 }
                    : { rotateX: 0 }
                }
                transition={{ duration: 1, ease: [0.4, 0, 0.2, 1] }}
                initial={false}
                // Use a clip to simulate the flap
              >
                <svg
                  viewBox="0 0 420 300"
                  className="w-full h-full"
                >
                  {/* Flap - top half */}
                  <polygon
                    points="20,40 210,120 400,40"
                    fill="#f5efe6"
                    stroke="#d4c9b5"
                    strokeWidth="1"
                  />
                  {/* Flap seal line */}
                  <path
                    d="M20,40 L210,120 L400,40"
                    fill="none"
                    stroke="#c9b89a"
                    strokeWidth="0.5"
                    opacity={isOpened ? 0 : 0.6}
                  />
                </svg>
              </motion.div>

              {/* Invitation card inside */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={
                  isOpened
                    ? { y: -20, scale: 1.05, opacity: 1 }
                    : { y: 0, scale: 0.95, opacity: 0.8 }
                }
                transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
              >
                <InvitationCard
                  coupleName={coupleName}
                  weddingDate={weddingDate}
                />
              </motion.div>

              {/* Wax seal */}
              <motion.div
                className="absolute"
                style={{ bottom: -10, left: '50%', marginLeft: -20 }}
                animate={isOpened ? { y: -20, opacity: 0, scale: 0.5 } : { y: 0, opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <circle cx="20" cy="20" r="18" fill="#d4a373" stroke="#c4956a" strokeWidth="1" />
                  <circle cx="20" cy="20" r="14" fill="none" stroke="#c4956a" strokeWidth="0.5" opacity="0.5" />
                  {/* Bow icon in seal */}
                  <path d="M14,16 Q20,12 26,16 Q20,20 14,16Z" fill="#c4956a" opacity="0.7" />
                  <path d="M14,16 Q20,20 26,16 Q20,24 14,16Z" fill="#b8865a" opacity="0.5" />
                  <circle cx="20" cy="16" r="2" fill="#b8865a" />
                </svg>
              </motion.div>
            </div>

            {/* Open Invitation button */}
            {!isOpened && (
              <motion.button
                onClick={handleOpen}
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 px-8 py-3 bg-floral-gold hover:bg-floral-taupe text-white rounded-full font-serif text-lg tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Open Invitation
              </motion.button>
            )}

            {/* Loading/opening text */}
            {isOpened && !showInvitation && (
              <motion.p
                className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-floral-taupe font-serif text-lg italic"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                You are cordially invited...
              </motion.p>
            )}
          </div>

          {/* Floral decorative corners */}
          <div className="absolute bottom-0 left-0 w-48 h-48 opacity-30">
            <FloralCorner />
          </div>
          <div className="absolute bottom-0 right-0 w-48 h-48 opacity-30 scale-x-[-1]">
            <FloralCorner />
          </div>
        </motion.div>
      ) : null}
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
  return (
    <motion.div
      className="bg-white/90 backdrop-blur-sm rounded-lg shadow-xl border border-floral-cream p-6 w-72 text-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Decorative line */}
      <div className="flex items-center justify-center gap-2 mb-4">
        <span className="block h-px w-8 bg-floral-gold/50" />
        <span className="text-floral-gold text-lg">✦</span>
        <span className="block h-px w-8 bg-floral-gold/50" />
      </div>

      <p className="font-script text-floral-gold text-lg mb-2">
        Together with their families
      </p>

      {/* Couple names — vertical ticket style */}
      <div className="flex justify-center gap-3 mb-3">
        <span className="font-serif text-2xl tracking-widest text-floral-deep uppercase">
          {coupleName.split('&')[0]?.trim()}
        </span>
        <span className="font-script text-floral-gold text-2xl">&amp;</span>
        <span className="font-serif text-2xl tracking-widest text-floral-deep uppercase">
          {coupleName.split('&')[1]?.trim()}
        </span>
      </div>

      <div className="w-16 h-px bg-floral-taupe/30 mx-auto my-3" />

      <p className="font-serif text-floral-taupe text-sm uppercase tracking-[0.3em] mb-1">
        Save the Date
      </p>
      <p className="font-script text-floral-gold text-3xl mb-3">
        {weddingDate}
      </p>

      <p className="font-serif text-floral-deep text-sm italic">
        We are getting married
      </p>

      {/* Decorative line */}
      <div className="flex items-center justify-center gap-2 mt-4">
        <span className="block h-px w-8 bg-floral-gold/50" />
        <span className="text-floral-gold text-lg">✦</span>
        <span className="block h-px w-8 bg-floral-gold/50" />
      </div>
    </motion.div>
  );
}

/* ─── Floral Background SVG Pattern ─── */
function FloralBackground() {
  return (
    <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="floral-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
          {/* Subtle flower pattern */}
          <circle cx="50" cy="50" r="8" fill="#f2d5d5" opacity="0.5" />
          <circle cx="50" cy="50" r="4" fill="#f5c4c4" opacity="0.3" />
          <circle cx="150" cy="120" r="6" fill="#a3c4b5" opacity="0.4" />
          <circle cx="150" cy="120" r="3" fill="#8bb5a0" opacity="0.3" />
          <circle cx="80" cy="160" r="5" fill="#f2d5d5" opacity="0.3" />
          <circle cx="180" cy="40" r="4" fill="#d4a373" opacity="0.3" />
          {/* Leaf shapes */}
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
    left: Math.random() * 100,
    delay: Math.random() * 5,
    duration: 6 + Math.random() * 4,
    size: 8 + Math.random() * 12,
    rotation: Math.random() * 360,
    color: i % 3 === 0 ? '#f2d5d5' : i % 3 === 1 ? '#f5efe6' : '#a3c4b5',
  }));

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      {petals.map((petal) => (
        <motion.div
          key={petal.id}
          className="absolute rounded-full opacity-20"
          style={{
            left: `${petal.left}%`,
            top: '-5%',
            width: petal.size,
            height: petal.size,
            backgroundColor: petal.color,
          }}
          animate={{
            y: ['0vh', '105vh'],
            x: [0, 30, -20, 10],
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
    </div>
  );
}

/* ─── Floral Corner Decoration ─── */
function FloralCorner() {
  return (
    <svg viewBox="0 0 200 200" className="w-full h-full">
      {/* Stems */}
      <path d="M0,200 Q40,150 60,100 Q80,60 100,40" fill="none" stroke="#a3c4b5" strokeWidth="2" opacity="0.6" />
      <path d="M60,200 Q90,160 100,120 Q110,80 130,60" fill="none" stroke="#a3c4b5" strokeWidth="1.5" opacity="0.5" />
      {/* Leaves */}
      <ellipse cx="55" cy="140" rx="12" ry="4" transform="rotate(-40 55 140)" fill="#a3c4b5" opacity="0.5" />
      <ellipse cx="80" cy="110" rx="10" ry="3" transform="rotate(30 80 110)" fill="#a3c4b5" opacity="0.4" />
      {/* Flowers */}
      <circle cx="60" cy="100" r="10" fill="#f2d5d5" opacity="0.6" />
      <circle cx="60" cy="100" r="5" fill="#ecc8c8" opacity="0.4" />
      <circle cx="100" cy="40" r="8" fill="#f2d5d5" opacity="0.5" />
      <circle cx="100" cy="40" r="4" fill="#ecc8c8" opacity="0.3" />
      <circle cx="130" cy="60" r="6" fill="#d4a373" opacity="0.4" />
      <circle cx="140" cy="30" r="5" fill="#f2d5d5" opacity="0.3" />
      {/* Small buds */}
      <circle cx="35" cy="170" r="4" fill="#f2d5d5" opacity="0.4" />
      <circle cx="35" cy="170" r="2" fill="#ecc8c8" opacity="0.3" />
    </svg>
  );
}
