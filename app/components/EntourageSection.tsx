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
      className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-20 h-20 sm:w-28 sm:h-28 text-[#caa687] opacity-70 pointer-events-none"
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
      className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-20 h-20 sm:w-28 sm:h-28 text-[#caa687] opacity-70 pointer-events-none scale-x-[-1]"
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
      className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-16 h-16 sm:w-24 sm:h-24 text-[#caa687] opacity-60 pointer-events-none scale-y-[-1]"
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
      className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-16 h-16 sm:w-24 sm:h-24 text-[#caa687] opacity-60 pointer-events-none scale-[-1]"
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

function FloralSprayTop() {
  return (
    <div className="flex items-center justify-center gap-1.5 mb-1 pointer-events-none">
      <svg width="32" height="18" viewBox="0 0 40 24" className="text-[#caa687]/50">
        <path d="M40 12 Q25 5 10 10 Q0 14 2 20" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M22 8 Q26 4 30 10 Q26 12 22 8Z" fill="#a3c4b5" opacity="0.5" />
        <path d="M12 12 Q16 8 18 14 Q14 16 12 12Z" fill="#a3c4b5" opacity="0.4" />
        <circle cx="8" cy="14" r="4" fill="#f2d5d5" opacity="0.5" />
        <circle cx="8" cy="14" r="2" fill="currentColor" opacity="0.25" />
        <circle cx="2" cy="18" r="2.5" fill="#f2d5d5" opacity="0.4" />
      </svg>
      <svg width="6" height="6" viewBox="0 0 8 8" className="text-[#caa687]/40">
        <circle cx="4" cy="4" r="2" fill="currentColor" />
      </svg>
      <svg width="32" height="18" viewBox="0 0 40 24" className="text-[#caa687]/50 scale-x-[-1]">
        <path d="M40 12 Q25 5 10 10 Q0 14 2 20" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M22 8 Q26 4 30 10 Q26 12 22 8Z" fill="#a3c4b5" opacity="0.5" />
        <path d="M12 12 Q16 8 18 14 Q14 16 12 12Z" fill="#a3c4b5" opacity="0.4" />
        <circle cx="8" cy="14" r="4" fill="#f2d5d5" opacity="0.5" />
        <circle cx="8" cy="14" r="2" fill="currentColor" opacity="0.25" />
        <circle cx="2" cy="18" r="2.5" fill="#f2d5d5" opacity="0.4" />
      </svg>
    </div>
  );
}

const groupLabel = "font-['Playfair_Display',serif] text-[#caa687] text-[10px] sm:text-[11px] uppercase tracking-[0.2em] font-medium";
const groupName  = "font-['Inter',sans-serif] text-[#253d5b] text-[11px] sm:text-xs font-light leading-tight";
const calligTitle = "font-['Great_Vibes',cursive] text-[#caa687] text-lg sm:text-xl md:text-2xl leading-snug";

export default function EntourageSection() {
  return (
    <section id="entourage" className="h-screen bg-gradient-to-b from-floral-cream to-floral-bg flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[820px] mx-3 sm:mx-6 h-full"
      >
        <FloralCornerTL />
        <FloralCornerTR />
        <FloralCornerBL />
        <FloralCornerBR />

        <div className="p-3 sm:p-5 md:p-6 relative h-full flex flex-col justify-center">

          {/* ===== TITLE ===== */}
          <div className="text-center mb-2 sm:mb-3">
            <p className="font-['Inter',sans-serif] text-[#caa687] text-[9px] sm:text-[10px] uppercase tracking-[0.3em] font-light">
              Our Wedding Party
            </p>
            <h2 className="font-['Playfair_Display',serif] text-[#253d5b] text-xl sm:text-2xl md:text-3xl font-light italic mt-0.5">
              The Entourage
            </h2>
            <div className="flex items-center justify-center gap-1.5 mt-1.5">
              <span className="block h-px w-10 bg-[#caa687]/30" />
              <span className="block w-1 h-1 rounded-full bg-[#caa687]/30" />
              <span className="block h-px w-10 bg-[#caa687]/30" />
            </div>
            <div className="mt-1">
              <FloralSprayTop />
            </div>
          </div>

          {/* ===== ROW 1: PARENTS + OFFICIATING MINISTER ===== */}
          <div className="grid grid-cols-3 gap-2 sm:gap-3 mb-1.5 sm:mb-2">
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Parents of the Groom</h3>
              <p className={groupName}>Father of the Groom</p>
              <p className={groupName}>Mother of the Groom</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Officiating Minister</h3>
              <p className={groupName}>Minister Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-1"}>Parents of the Bride</h3>
              <p className={groupName}>Father of the Bride</p>
              <p className={groupName}>Mother of the Bride</p>
            </div>
          </div>

          {/* ===== ROW 2: PRINCIPAL + SECONDARY SPONSORS ===== */}
          <div className="mb-1.5 sm:mb-2">
            <p className={calligTitle + " text-center mb-1"}>Principal Sponsors</p>
            <div className="grid grid-cols-5 gap-1 sm:gap-2 text-center max-w-2xl mx-auto">
              {[
                'Sponsor 1', 'Sponsor 2', 'Sponsor 3', 'Sponsor 4', 'Sponsor 5',
              ].map((name, i) => (
                <p key={i} className={groupName}>{name}</p>
              ))}
            </div>
          </div>

          <div className="mb-1.5 sm:mb-2">
            <p className={calligTitle + " text-center mb-1"}>Secondary Sponsors</p>
            <div className="grid grid-cols-3 gap-1 sm:gap-2 text-center max-w-md mx-auto">
              {['Sponsor 1', 'Sponsor 2', 'Sponsor 3'].map((name, i) => (
                <p key={i} className={groupName}>{name}</p>
              ))}
            </div>
          </div>

          {/* ===== ROW 3: BEST MAN / MAID / CANDLE / VEIL / CORD ===== */}
          <div className="grid grid-cols-5 gap-1 sm:gap-2 mb-1.5 sm:mb-2">
            <div className="col-span-1 text-center">
              <h3 className={groupLabel + " mb-0.5"}>Best Man</h3>
              <p className={groupName}>Name</p>
            </div>
            <div className="col-span-1 text-center">
              <h3 className={groupLabel + " mb-0.5"}>Maid of Honor</h3>
              <p className={groupName}>Name</p>
            </div>
            <div className="col-span-1 text-center">
              <h3 className={groupLabel + " mb-0.5"}>Candle</h3>
              <p className={groupName}>Name</p>
            </div>
            <div className="col-span-1 text-center">
              <h3 className={groupLabel + " mb-0.5"}>Veil</h3>
              <p className={groupName}>Name</p>
            </div>
            <div className="col-span-1 text-center">
              <h3 className={groupLabel + " mb-0.5"}>Cord</h3>
              <p className={groupName}>Name</p>
            </div>
          </div>

          {/* ===== ROW 4: RING / COIN / BIBLE / FLOWER GIRLS ===== */}
          <div className="grid grid-cols-4 gap-1 sm:gap-2 mb-2 sm:mb-3">
            <div className="text-center">
              <h3 className={groupLabel + " mb-0.5"}>Ring Bearers</h3>
              <p className={groupName}>Name</p>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-0.5"}>Coin Bearers</h3>
              <p className={groupName}>Name</p>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-0.5"}>Bible Bearers</h3>
              <p className={groupName}>Name</p>
              <p className={groupName}>Name</p>
            </div>
            <div className="text-center">
              <h3 className={groupLabel + " mb-0.5"}>Flower Girls</h3>
              <p className={groupName}>Name</p>
              <p className={groupName}>Name</p>
            </div>
          </div>

          {/* ===== ROW 5: DETAILS (ATTIRE + GIFT GUIDE) ===== */}
          <div className="pt-2 sm:pt-3 border-t border-[#caa687]/20">
            <div className="text-center mb-1.5">
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-[10px] uppercase tracking-[0.25em] font-medium">
                Details
              </h3>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:gap-4 text-center mb-1.5">
              <div>
                <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[9px] uppercase tracking-[0.2em] font-medium mb-0.5">Ladies</h4>
                <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[10px] sm:text-xs leading-snug">
                  Blush pink, olive green, or nude. Long dress or cocktail. Avoid sleeveless during church ceremony.
                </p>
              </div>
              <div>
                <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[9px] uppercase tracking-[0.2em] font-medium mb-0.5">Gentlemen</h4>
                <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[10px] sm:text-xs leading-snug">
                  Long sleeves &amp; slacks. Tie color same as motif.
                </p>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 mb-1.5">
              <span className="block h-px w-6 bg-[#caa687]/20" />
              <svg width="4" height="4" viewBox="0 0 64 64" className="text-[#caa687]/30"><circle cx="32" cy="32" r="3" fill="currentColor" /></svg>
              <span className="block h-px w-6 bg-[#caa687]/20" />
            </div>

            <div className="text-center">
              <h4 className="font-['Playfair_Display',serif] text-[#caa687] text-[9px] uppercase tracking-[0.2em] font-medium mb-0.5">Gift Guide</h4>
              <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[10px] sm:text-xs leading-snug max-w-xs mx-auto">
                Your presence is present enough. If you wish to give, a monetary gift would be greatly appreciated.
              </p>
            </div>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
