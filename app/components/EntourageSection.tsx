'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
});

/* ── Gentle floating animation for floral elements ── */
const floatSlow = (delay = 0) => ({
  animate: {
    y: [0, -4, 0, 3, 0],
    rotate: [0, 1, 0, -1, 0],
  },
  transition: {
    duration: 6,
    delay,
    repeat: Infinity,
    ease: 'easeInOut',
  },
});

/* ── SVG Floral Corner Elements ── */

function FloralCornerTL() {
  return (
    <motion.svg
      {...floatSlow(0)}
      className="absolute -top-4 -left-4 sm:-top-6 sm:-left-6 w-28 h-28 sm:w-36 sm:h-36 text-[#caa687] opacity-80 pointer-events-none"
      viewBox="0 0 180 180"
      fill="none"
    >
      <path d="M5 175 Q20 120 45 80 Q70 40 110 20" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5" />
      <path d="M5 175 Q30 130 55 95 Q80 55 120 30" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M35 105 Q45 95 50 100 Q45 110 35 105Z" fill="#a3c4b5" opacity="0.55" />
      <path d="M55 80 Q65 70 70 75 Q65 85 55 80Z" fill="#a3c4b5" opacity="0.5" />
      <path d="M15 145 Q25 135 30 140 Q25 150 15 145Z" fill="#a3c4b5" opacity="0.4" />
      <path d="M75 55 Q85 50 88 58 Q80 62 75 55Z" fill="#a3c4b5" opacity="0.45" />
      <circle cx="100" cy="25" r="16" fill="currentColor" opacity="0.15" />
      <circle cx="100" cy="25" r="12" fill="currentColor" opacity="0.2" />
      <circle cx="98" cy="23" r="8" fill="#f2d5d5" opacity="0.7" />
      <circle cx="100" cy="25" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="99" cy="24" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="95" r="8" fill="currentColor" opacity="0.15" />
      <circle cx="50" cy="95" r="5" fill="#f2d5d5" opacity="0.6" />
      <circle cx="49" cy="94" r="2.5" fill="currentColor" opacity="0.35" />
      <circle cx="115" cy="30" r="2" fill="#f2d5d5" opacity="0.5" />
      <circle cx="108" cy="18" r="1.5" fill="#f2d5d5" opacity="0.4" />
    </motion.svg>
  );
}

function FloralCornerTR() {
  return (
    <motion.svg
      {...floatSlow(0.5)}
      className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 w-28 h-28 sm:w-36 sm:h-36 text-[#caa687] opacity-80 pointer-events-none scale-x-[-1]"
      viewBox="0 0 180 180"
      fill="none"
    >
      <path d="M5 175 Q20 120 45 80 Q70 40 110 20" stroke="currentColor" strokeWidth="1.4" fill="none" opacity="0.5" />
      <path d="M5 175 Q30 130 55 95 Q80 55 120 30" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.3" />
      <path d="M35 105 Q45 95 50 100 Q45 110 35 105Z" fill="#a3c4b5" opacity="0.55" />
      <path d="M55 80 Q65 70 70 75 Q65 85 55 80Z" fill="#a3c4b5" opacity="0.5" />
      <path d="M15 145 Q25 135 30 140 Q25 150 15 145Z" fill="#a3c4b5" opacity="0.4" />
      <path d="M75 55 Q85 50 88 58 Q80 62 75 55Z" fill="#a3c4b5" opacity="0.45" />
      <circle cx="100" cy="25" r="16" fill="currentColor" opacity="0.15" />
      <circle cx="100" cy="25" r="12" fill="currentColor" opacity="0.2" />
      <circle cx="98" cy="23" r="8" fill="#f2d5d5" opacity="0.7" />
      <circle cx="100" cy="25" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="99" cy="24" r="2.5" fill="currentColor" opacity="0.6" />
      <circle cx="50" cy="95" r="8" fill="currentColor" opacity="0.15" />
      <circle cx="50" cy="95" r="5" fill="#f2d5d5" opacity="0.6" />
      <circle cx="49" cy="94" r="2.5" fill="currentColor" opacity="0.35" />
      <circle cx="115" cy="30" r="2" fill="#f2d5d5" opacity="0.5" />
      <circle cx="108" cy="18" r="1.5" fill="#f2d5d5" opacity="0.4" />
    </motion.svg>
  );
}

function FloralCornerBL() {
  return (
    <motion.svg
      {...floatSlow(1.0)}
      className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 w-20 h-20 sm:w-28 sm:h-28 text-[#caa687] opacity-70 pointer-events-none scale-y-[-1]"
      viewBox="0 0 180 180"
      fill="none"
    >
      <path d="M5 175 Q20 120 45 80 Q70 40 110 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M35 105 Q45 95 50 100 Q45 110 35 105Z" fill="#a3c4b5" opacity="0.5" />
      <path d="M55 80 Q65 70 70 75 Q65 85 55 80Z" fill="#a3c4b5" opacity="0.4" />
      <circle cx="100" cy="25" r="12" fill="currentColor" opacity="0.12" />
      <circle cx="100" cy="25" r="8" fill="#f2d5d5" opacity="0.5" />
      <circle cx="100" cy="25" r="4" fill="currentColor" opacity="0.3" />
      <path d="M40 110 Q52 105 55 112 Q48 116 40 110Z" fill="#a3c4b5" opacity="0.35" />
    </motion.svg>
  );
}

function FloralCornerBR() {
  return (
    <motion.svg
      {...floatSlow(1.5)}
      className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 w-20 h-20 sm:w-28 sm:h-28 text-[#caa687] opacity-70 pointer-events-none scale-[-1]"
      viewBox="0 0 180 180"
      fill="none"
    >
      <path d="M5 175 Q20 120 45 80 Q70 40 110 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M35 105 Q45 95 50 100 Q45 110 35 105Z" fill="#a3c4b5" opacity="0.5" />
      <path d="M55 80 Q65 70 70 75 Q65 85 55 80Z" fill="#a3c4b5" opacity="0.4" />
      <circle cx="100" cy="25" r="12" fill="currentColor" opacity="0.12" />
      <circle cx="100" cy="25" r="8" fill="#f2d5d5" opacity="0.5" />
      <circle cx="100" cy="25" r="4" fill="currentColor" opacity="0.3" />
      <path d="M40 110 Q52 105 55 112 Q48 116 40 110Z" fill="#a3c4b5" opacity="0.35" />
    </motion.svg>
  );
}

function FloralDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className="flex items-center justify-center gap-2 my-2 sm:my-3"
    >
      <span className="block h-px flex-1 bg-gradient-to-r from-transparent via-[#caa687]/25 to-[#caa687]/15" />
      <motion.svg
        animate={{ rotate: [0, 15, 0, -15, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        width="12" height="12" viewBox="0 0 24 24" className="text-[#caa687]/40"
      >
        <circle cx="12" cy="12" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="12" cy="12" r="2" fill="#f2d5d5" opacity="0.8" />
        <circle cx="5" cy="12" r="2" fill="#a3c4b5" opacity="0.4" />
        <circle cx="19" cy="12" r="2" fill="#a3c4b5" opacity="0.4" />
      </motion.svg>
      <span className="block h-px flex-1 bg-gradient-to-r from-[#caa687]/15 via-[#caa687]/25 to-transparent" />
    </motion.div>
  );
}

/* ── Subtle floating leaf accent ── */
function FloatingLeaf({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.svg
      animate={{
        y: [0, -6, 0, 4, 0],
        rotate: [0, 3, 0, -3, 0],
        opacity: [0.3, 0.5, 0.3, 0.4, 0.3],
      }}
      transition={{ duration: 5 + delay, repeat: Infinity, ease: 'easeInOut' }}
      width="10" height="14" viewBox="0 0 20 28" fill="none"
      className={'text-[#a3c4b5] pointer-events-none ' + (className || '')}
    >
      <path d="M10 2 Q18 10 14 20 Q10 26 10 26 Q10 26 6 20 Q2 10 10 2Z" fill="currentColor" opacity="0.35" />
      <path d="M10 2 Q14 8 12 16" stroke="#caa687" strokeWidth="0.5" opacity="0.3" fill="none" />
    </motion.svg>
  );
}

export default function EntourageSection() {
  const groupLabel = "font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium";
  const groupName  = "font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light leading-relaxed";
  const calligTitle = "font-['Great_Vibes',cursive] text-[#caa687] text-xl sm:text-2xl md:text-3xl leading-snug text-center";

  return (
    <section id="entourage" className="h-screen bg-gradient-to-b from-floral-cream to-floral-bg flex items-center justify-center overflow-hidden relative">
      {/* Floating leaves background accents */}
      <FloatingLeaf className="absolute top-[12%] left-[6%] sm:left-[10%]" delay={0} />
      <FloatingLeaf className="absolute top-[20%] right-[6%] sm:right-[10%]" delay={1} />
      <FloatingLeaf className="absolute bottom-[15%] left-[8%]" delay={2} />
      <FloatingLeaf className="absolute bottom-[25%] right-[8%]" delay={0.5} />

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[820px] mx-4 sm:mx-6 h-full"
      >
        <FloralCornerTL />
        <FloralCornerTR />
        <FloralCornerBL />
        <FloralCornerBR />

        <div className="p-4 sm:p-6 md:p-8 relative h-full flex flex-col justify-center">

          {/* ===== TITLE ===== */}
          <motion.div {...fadeUp(0.1)} className="text-center mb-3 sm:mb-4">
            <p className="font-['Inter',sans-serif] text-[#caa687] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light">
              Our Wedding Party
            </p>
            <h2 className="font-['Playfair_Display',serif] text-[#253d5b] text-2xl sm:text-3xl md:text-4xl font-light italic mt-1">
              The Entourage
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex items-center justify-center gap-2 mt-2"
            >
              <span className="block h-px w-12 bg-gradient-to-r from-transparent via-[#caa687]/30 to-[#caa687]/20" />
              <motion.span
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                className="block w-1.5 h-1.5 rounded-full bg-[#caa687]/30"
              />
              <span className="block h-px w-12 bg-gradient-to-r from-[#caa687]/20 via-[#caa687]/30 to-transparent" />
            </motion.div>
          </motion.div>

          {/* ===== ROW 1: PARENTS + OFFICIATING MINISTER ===== */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-3 gap-3 sm:gap-4 mb-2 sm:mb-3">
            <div className="text-center">
              <h3 className={groupLabel + " mb-1.5"}>Parents of the Groom</h3>
              <p className={groupName}>Father of the Groom</p>
              <p className={groupName}>Mother of the Groom</p>
            </div>
            <div className="text-center border-x border-[#caa687]/10 px-2">
              <h3 className={groupLabel + " mb-1.5"}>Officiating Minister</h3>
              <p className={groupName}>Minister Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1.5"}>Parents of the Bride</h3>
              <p className={groupName}>Father of the Bride</p>
              <p className={groupName}>Mother of the Bride</p>
            </div>
          </motion.div>

          <FloralDivider />

          {/* ===== ROW 2: BEST MAN / MAID + CANDLE / VEIL / CORD ===== */}
          <motion.div {...fadeUp(0.3)} className="grid grid-cols-5 gap-2 sm:gap-3 mb-2 sm:mb-3">
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Best Man</h3>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Maid of Honor</h3>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center border-l border-[#caa687]/10 pl-2">
              <h3 className={groupLabel + " mb-1"}>Candle</h3>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Veil</h3>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Cord</h3>
              <p className={groupName}>Name</p>
            </div>
          </motion.div>

          <FloralDivider />

          {/* ===== ROW 3: PRINCIPAL + SECONDARY SPONSORS ===== */}
          <motion.div {...fadeUp(0.35)} className="mb-2 sm:mb-3">
            <p className={calligTitle + " mb-1.5"}>Principal Sponsors</p>
            <div className="grid grid-cols-5 gap-2 text-center max-w-xl mx-auto">
              {['Sponsor 1', 'Sponsor 2', 'Sponsor 3', 'Sponsor 4', 'Sponsor 5'].map((name, i) => (
                <p key={i} className={groupName}>{name}</p>
              ))}
            </div>
          </motion.div>

          <motion.div {...fadeUp(0.4)} className="mb-2 sm:mb-3">
            <p className={calligTitle + " mb-1"}>Secondary Sponsors</p>
            <div className="grid grid-cols-3 gap-2 text-center max-w-sm mx-auto">
              {['Sponsor 1', 'Sponsor 2', 'Sponsor 3'].map((name, i) => (
                <p key={i} className={groupName}>{name}</p>
              ))}
            </div>
          </motion.div>

          <FloralDivider />

          {/* ===== ROW 4: RING / COIN / BIBLE / FLOWER GIRLS ===== */}
          <motion.div {...fadeUp(0.45)} className="grid grid-cols-4 gap-3 sm:gap-4 mb-3 sm:mb-4">
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Ring Bearers</h3>
              <p className={groupName}>Name</p>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Coin Bearers</h3>
              <p className={groupName}>Name</p>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Bible Bearers</h3>
              <p className={groupName}>Name</p>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Flower Girls</h3>
              <p className={groupName}>Name</p>
              <p className={groupName}>Name</p>
            </div>
          </motion.div>

          {/* ===== DETAILS (ATTIRE + GIFT GUIDE) ===== */}
          <motion.div {...fadeUp(0.5)} className="pt-2.5 sm:pt-3 border-t border-[#caa687]/20">
            <div className="text-center mb-2">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium">
                Details
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-6 text-center max-w-lg mx-auto mb-2">
              <div>
                <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium mb-1">
                  Ladies
                </h4>
                <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[11px] sm:text-sm leading-relaxed">
                  Blush pink, olive green, or nude. Long dress or cocktail.
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-[10px] sm:text-xs font-light mt-1 opacity-70">
                  Please avoid sleeveless during church ceremony.
                </p>
              </div>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium mb-1">
                  Gentlemen
                </h4>
                <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[11px] sm:text-sm leading-relaxed">
                  Long sleeves &amp; slacks.
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-[10px] sm:text-xs font-light mt-1 opacity-70">
                  Tie color same as motif.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-2 mb-2">
              <span className="block h-px w-8 bg-[#caa687]/15" />
              <motion.svg
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                width="5" height="5" viewBox="0 0 64 64" className="text-[#caa687]/30"
              >
                <circle cx="32" cy="32" r="3" fill="currentColor" />
              </motion.svg>
              <span className="block h-px w-8 bg-[#caa687]/15" />
            </div>

            <div className="text-center">
              <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium mb-1">
                Gift Guide
              </h4>
              <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[11px] sm:text-sm leading-relaxed max-w-xs mx-auto">
                Your presence is present enough. If you wish to give, a monetary gift would be greatly appreciated.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
