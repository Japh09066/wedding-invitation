'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
});

/* ── SVG Floral Elements ── */

function FloralCornerTL() {
  return (
    <svg
      className="absolute -top-3 -left-3 sm:-top-5 sm:-left-5 w-24 h-24 sm:w-32 sm:h-32 text-[#caa687] opacity-70 pointer-events-none"
      viewBox="0 0 180 180"
      fill="none"
    >
      <path d="M5 175 Q20 120 45 80 Q70 40 110 20" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M5 175 Q30 130 55 95 Q80 55 120 30" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
      <path d="M35 105 Q45 95 50 100 Q45 110 35 105Z" fill="#a3c4b5" opacity="0.6" />
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
    </svg>
  );
}

function FloralCornerTR() {
  return (
    <svg
      className="absolute -top-3 -right-3 sm:-top-5 sm:-right-5 w-24 h-24 sm:w-32 sm:h-32 text-[#caa687] opacity-70 pointer-events-none scale-x-[-1]"
      viewBox="0 0 180 180"
      fill="none"
    >
      <path d="M5 175 Q20 120 45 80 Q70 40 110 20" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M5 175 Q30 130 55 95 Q80 55 120 30" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />
      <path d="M35 105 Q45 95 50 100 Q45 110 35 105Z" fill="#a3c4b5" opacity="0.6" />
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
    </svg>
  );
}

function FloralCornerBL() {
  return (
    <svg
      className="absolute -bottom-3 -left-3 sm:-bottom-5 sm:-left-5 w-20 h-20 sm:w-24 sm:h-24 text-[#caa687] opacity-60 pointer-events-none scale-y-[-1]"
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
    </svg>
  );
}

function FloralCornerBR() {
  return (
    <svg
      className="absolute -bottom-3 -right-3 sm:-bottom-5 sm:-right-5 w-20 h-20 sm:w-24 sm:h-24 text-[#caa687] opacity-60 pointer-events-none scale-[-1]"
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
    </svg>
  );
}

export default function EntourageSection() {
  return (
    <section id="entourage" className="h-screen bg-gradient-to-b from-floral-cream to-floral-bg flex items-center justify-center overflow-hidden">
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
          <div className="text-center mb-3 sm:mb-4">
            <motion.p {...fadeUp(0.1)} className="font-['Inter',sans-serif] text-[#caa687] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light">
              Our Wedding Party
            </motion.p>
            <motion.h2 {...fadeUp(0.15)} className="font-['Playfair_Display',serif] text-[#253d5b] text-2xl sm:text-3xl md:text-4xl font-light italic mt-1">
              The Entourage
            </motion.h2>
            <motion.div {...fadeUp(0.2)} className="flex items-center justify-center gap-2 mt-2">
              <span className="block h-px w-12 bg-[#caa687]/30" />
              <span className="block w-1.5 h-1.5 rounded-full bg-[#caa687]/30" />
              <span className="block h-px w-12 bg-[#caa687]/30" />
            </motion.div>
          </div>

          {/* ===== PARENTS OF GROOM + PARENTS OF BRIDE (2-col) ===== */}
          <motion.div
            {...fadeUp(0.25)}
            className="flex items-stretch justify-center gap-4 sm:gap-8 mb-3 sm:mb-4"
          >
            <div className="text-center sm:text-left flex-1">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-2">
                Parents of the Groom
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light leading-relaxed">Father of the Groom</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light leading-relaxed">Mother of the Groom</p>
            </div>
            <div className="w-px bg-[#caa687]/15 self-stretch" />
            <div className="text-center sm:text-right flex-1">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-2">
                Parents of the Bride
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light leading-relaxed">Father of the Bride</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light leading-relaxed">Mother of the Bride</p>
            </div>
          </motion.div>

          {/* ===== OFFICIATING MINISTER (centered) ===== */}
          <motion.div {...fadeUp(0.3)} className="text-center mb-3 sm:mb-4">
            <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
              Officiating Minister
            </h3>
            <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Minister Name</p>
          </motion.div>

          {/* ===== PRINCIPAL SPONSORS ===== */}
          <motion.div {...fadeUp(0.35)} className="text-center mb-2 sm:mb-3">
            <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-lg sm:text-xl md:text-2xl mb-2">
              Principal Sponsors
            </h3>
            <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-10 gap-y-1 max-w-xl mx-auto">
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light w-[40%] sm:w-auto">Sponsor Name 1</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light w-[40%] sm:w-auto">Sponsor Name 2</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light w-[40%] sm:w-auto">Sponsor Name 3</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light w-[40%] sm:w-auto">Sponsor Name 4</p>
            </div>
          </motion.div>

          {/* ===== SECONDARY SPONSORS ===== */}
          <motion.div {...fadeUp(0.4)} className="text-center mb-2 sm:mb-3">
            <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-lg sm:text-xl md:text-2xl mb-2">
              Secondary Sponsors
            </h3>
            <div className="flex justify-center gap-6 sm:gap-10 max-w-md mx-auto">
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Sponsor Name 1</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Sponsor Name 2</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Sponsor Name 3</p>
            </div>
          </motion.div>

          {/* ===== BEST MAN / MAID OF HONOR ===== */}
          <motion.div {...fadeUp(0.45)} className="flex items-stretch justify-center gap-4 sm:gap-8 mb-2 sm:mb-3">
            <div className="text-center flex-1">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
                Best Man
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Name</p>
            </div>
            <div className="w-px bg-[#caa687]/15 self-stretch" />
            <div className="text-center flex-1">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
                Maid of Honor
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Name</p>
            </div>
          </motion.div>

          {/* ===== CANDLE / VEIL / CORD SPONSORS ===== */}
          <motion.div {...fadeUp(0.5)} className="flex justify-center gap-4 sm:gap-8 mb-2 sm:mb-3">
            <div className="text-center">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
                Candle Sponsors
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Sponsor Name</p>
            </div>
            <div className="w-px bg-[#caa687]/15" />
            <div className="text-center">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
                Veil Sponsors
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Sponsor Name</p>
            </div>
            <div className="w-px bg-[#caa687]/15" />
            <div className="text-center">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
                Cord Sponsors
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Sponsor Name</p>
            </div>
          </motion.div>

          {/* ===== RING / COIN / BIBLE BEARERS ===== */}
          <motion.div {...fadeUp(0.55)} className="flex justify-center gap-4 sm:gap-8 mb-2 sm:mb-3">
            <div className="text-center">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
                Ring Bearers
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Name</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Name</p>
            </div>
            <div className="w-px bg-[#caa687]/15" />
            <div className="text-center">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
                Coin Bearers
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Name</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Name</p>
            </div>
            <div className="w-px bg-[#caa687]/15" />
            <div className="text-center">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
                Bible Bearers
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Name</p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Name</p>
            </div>
          </motion.div>

          {/* ===== FLOWER GIRLS ===== */}
          <motion.div {...fadeUp(0.6)} className="text-center mb-2 sm:mb-3">
            <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-xs sm:text-sm uppercase tracking-[0.2em] font-medium mb-1">
              Flower Girls
            </h3>
            <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Flower Girl Name</p>
            <p className="font-['Inter',sans-serif] text-[#253d5b] text-xs sm:text-sm font-light">Flower Girl Name</p>
          </motion.div>

          {/* ===== DETAILS: ATTIRE + GIFT GUIDE ===== */}
          <motion.div {...fadeUp(0.65)} className="pt-2 sm:pt-3 border-t border-[#caa687]/20">
            <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-[11px] sm:text-xs uppercase tracking-[0.25em] font-medium text-center mb-2">
              Details
            </h3>

            <div className="flex justify-center gap-4 sm:gap-8 text-center mb-2">
              <div className="flex-1 max-w-[200px]">
                <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium mb-0.5">Ladies</h4>
                <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[11px] sm:text-xs leading-relaxed">
                  Blush pink, olive green, or nude. Long dress or cocktail.
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-[10px] sm:text-[11px] font-light mt-0.5 opacity-60">
                  Avoid sleeveless during church ceremony.
                </p>
              </div>
              <div className="flex-1 max-w-[200px]">
                <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium mb-0.5">Gentlemen</h4>
                <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[11px] sm:text-xs leading-relaxed">
                  Long sleeves &amp; slacks.
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-[10px] sm:text-[11px] font-light mt-0.5 opacity-60">
                  Tie color same as motif.
                </p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium mb-0.5">Gift Guide</h4>
              <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[11px] sm:text-xs leading-relaxed max-w-xs mx-auto">
                Your presence is present enough. If you wish to give, a monetary gift would be greatly appreciated.
              </p>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
