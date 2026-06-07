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
      className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 text-[#caa687] opacity-70 pointer-events-none"
      viewBox="0 0 180 180"
      fill="none"
    >
      {/* Curving stem */}
      <path d="M5 175 Q20 120 45 80 Q70 40 110 20" stroke="currentColor" strokeWidth="1.2" fill="none" opacity="0.6" />
      <path d="M5 175 Q30 130 55 95 Q80 55 120 30" stroke="currentColor" strokeWidth="0.8" fill="none" opacity="0.35" />

      {/* Leaves */}
      <path d="M35 105 Q45 95 50 100 Q45 110 35 105Z" fill="#a3c4b5" opacity="0.6" />
      <path d="M55 80 Q65 70 70 75 Q65 85 55 80Z" fill="#a3c4b5" opacity="0.5" />
      <path d="M15 145 Q25 135 30 140 Q25 150 15 145Z" fill="#a3c4b5" opacity="0.4" />
      <path d="M75 55 Q85 50 88 58 Q80 62 75 55Z" fill="#a3c4b5" opacity="0.45" />

      {/* Flower 1 — large rose */}
      <circle cx="100" cy="25" r="16" fill="currentColor" opacity="0.15" />
      <circle cx="100" cy="25" r="12" fill="currentColor" opacity="0.2" />
      <circle cx="98" cy="23" r="8" fill="#f2d5d5" opacity="0.7" />
      <circle cx="100" cy="25" r="5" fill="currentColor" opacity="0.4" />
      <circle cx="99" cy="24" r="2.5" fill="currentColor" opacity="0.6" />

      {/* Flower 2 — bud */}
      <circle cx="50" cy="95" r="8" fill="currentColor" opacity="0.15" />
      <circle cx="50" cy="95" r="5" fill="#f2d5d5" opacity="0.6" />
      <circle cx="49" cy="94" r="2.5" fill="currentColor" opacity="0.35" />

      {/* Small accent dots */}
      <circle cx="115" cy="30" r="2" fill="#f2d5d5" opacity="0.5" />
      <circle cx="108" cy="18" r="1.5" fill="#f2d5d5" opacity="0.4" />
    </svg>
  );
}

function FloralCornerTR() {
  return (
    <svg
      className="absolute -top-2 -right-2 sm:-top-3 sm:-right-3 w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 text-[#caa687] opacity-70 pointer-events-none scale-x-[-1]"
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
      className="absolute -bottom-2 -left-2 sm:-bottom-3 sm:-left-3 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-[#caa687] opacity-60 pointer-events-none scale-y-[-1]"
      viewBox="0 0 180 180"
      fill="none"
    >
      <path d="M5 175 Q20 120 45 80 Q70 40 110 20" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.5" />
      <path d="M35 105 Q45 95 50 100 Q45 110 35 105Z" fill="#a3c4b5" opacity="0.5" />
      <path d="M55 80 Q65 70 70 75 Q65 85 55 80Z" fill="#a3c4b5" opacity="0.4" />
      {/* Small flower */}
      <circle cx="100" cy="25" r="12" fill="currentColor" opacity="0.12" />
      <circle cx="100" cy="25" r="8" fill="#f2d5d5" opacity="0.5" />
      <circle cx="100" cy="25" r="4" fill="currentColor" opacity="0.3" />
      {/* Leaves at base */}
      <path d="M40 110 Q52 105 55 112 Q48 116 40 110Z" fill="#a3c4b5" opacity="0.35" />
    </svg>
  );
}

function FloralCornerBR() {
  return (
    <svg
      className="absolute -bottom-2 -right-2 sm:-bottom-3 sm:-right-3 w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 text-[#caa687] opacity-60 pointer-events-none scale-[-1]"
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
      {/* Left spray */}
      <svg width="40" height="24" viewBox="0 0 40 24" className="text-[#caa687]/50">
        <path d="M40 12 Q25 5 10 10 Q0 14 2 20" stroke="currentColor" strokeWidth="0.8" fill="none" />
        <path d="M22 8 Q26 4 30 10 Q26 12 22 8Z" fill="#a3c4b5" opacity="0.5" />
        <path d="M12 12 Q16 8 18 14 Q14 16 12 12Z" fill="#a3c4b5" opacity="0.4" />
        <circle cx="8" cy="14" r="4" fill="#f2d5d5" opacity="0.5" />
        <circle cx="8" cy="14" r="2" fill="currentColor" opacity="0.25" />
        <circle cx="2" cy="18" r="2.5" fill="#f2d5d5" opacity="0.4" />
      </svg>
      {/* Center dot */}
      <svg width="8" height="8" viewBox="0 0 8 8" className="text-[#caa687]/40">
        <circle cx="4" cy="4" r="2" fill="currentColor" />
      </svg>
      {/* Right spray */}
      <svg width="40" height="24" viewBox="0 0 40 24" className="text-[#caa687]/50 scale-x-[-1]">
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

export default function EntourageSection() {
  return (
    <section id="entourage" className="py-16 md:py-20 bg-gradient-to-b from-floral-cream to-floral-bg flex items-center justify-center">
      {/* Bond paper frame */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[820px] mx-4 sm:mx-6"
      >
        {/* Floral corners — positioned outside the borders */}
        <FloralCornerTL />
        <FloralCornerTR />
        <FloralCornerBL />
        <FloralCornerBR />

        {/* Content container — no frame, flush with site bg */}
        <div className="p-4 sm:p-6 md:p-8 relative">
            {/* ===== TITLE ===== */}
            <div className="text-center mb-8 md:mb-10">
              <p
                {...fadeUp(0.1)}
                className="font-['Inter',sans-serif] text-[#caa687] text-[10px] sm:text-xs uppercase tracking-[0.3em] font-light"
              >
                Our Wedding Party
              </p>
              <h2
                {...fadeUp(0.2)}
                className="font-['Playfair_Display',serif] text-[#253d5b] text-3xl sm:text-4xl md:text-5xl font-light italic mt-2"
              >
                The Entourage
              </h2>
              <div
                {...fadeUp(0.25)}
                className="flex items-center justify-center gap-2 mt-4"
              >
                <span className="block h-px w-16 bg-[#caa687]/30" />
                <span className="block w-1.5 h-1.5 rounded-full bg-[#caa687]/30" />
                <span className="block h-px w-16 bg-[#caa687]/30" />
              </div>

              {/* Small floral spray under title */}
              <div {...fadeUp(0.25)} className="mt-3">
                <FloralSprayTop />
              </div>
            </div>

            {/* ===== PARENTS OF GROOM + PARENTS OF BRIDE (2-col) ===== */}
            <div
              {...fadeUp(0.3)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6"
            >
              {/* Parents of Groom */}
              <div className="text-center sm:text-left">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-3">
                  Parents of the Groom
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light leading-relaxed">
                  Father of the Groom
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light leading-relaxed">
                  Mother of the Groom
                </p>
              </div>

              {/* Parents of Bride */}
              <div className="text-center sm:text-right">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-3">
                  Parents of the Bride
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light leading-relaxed">
                  Father of the Bride
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light leading-relaxed">
                  Mother of the Bride
                </p>
              </div>
            </div>

            {/* ===== OFFICIATING MINISTER (center, below parents) ===== */}
            <div
              {...fadeUp(0.35)}
              className="text-center mb-7"
            >
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                Officiating Minister
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                Officiating Minister Name
              </p>
            </div>

            {/* Gold rule */}
            <div
              {...fadeUp(0.35)}
              className="flex items-center justify-center gap-2 mb-7"
            >
              <span className="block h-px w-full bg-[#caa687]/20" />
            </div>

            {/* ===== PRINCIPAL SPONSORS (2-col) ===== */}
            <div
              {...fadeUp(0.4)}
              className="text-center mb-7"
            >
              <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-2xl sm:text-3xl md:text-4xl mb-4 leading-snug">
                Principal Sponsors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-2 max-w-xl mx-auto">
                {[
                  'Sponsor Name 1',
                  'Sponsor Name 2',
                  'Sponsor Name 3',
                  'Sponsor Name 4',
                ].map((name, i) => (
                  <p
                    key={i}
                    className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light"
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>

            {/* Gold rule */}
            <div className="flex items-center justify-center gap-2 mb-7">
              <span className="block h-px w-full bg-[#caa687]/20" />
            </div>

            {/* ===== SECONDARY SPONSORS (3-col) ===== */}
            <div
              {...fadeUp(0.45)}
              className="text-center mb-7"
            >
              <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-2xl sm:text-3xl md:text-4xl mb-4 leading-snug">
                Secondary Sponsors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
                {[
                  'Sponsor Name 1',
                  'Sponsor Name 2',
                  'Sponsor Name 3',
                ].map((name, i) => (
                  <p
                    key={i}
                    className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light"
                  >
                    {name}
                  </p>
                ))}
              </div>
            </div>

            {/* Gold rule */}
            <div className="flex items-center justify-center gap-2 mb-7">
              <span className="block h-px w-full bg-[#caa687]/20" />
            </div>

            {/* ===== BEST MAN / MAID OF HONOR (2-col) ===== */}
            <div
              {...fadeUp(0.5)}
              className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-7 max-w-lg mx-auto"
            >
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                  Best Man
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Best Man Name
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                  Maid of Honor
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Maid of Honor Name
                </p>
              </div>
            </div>

            {/* Gold rule */}
            <div className="flex items-center justify-center gap-2 mb-7">
              <span className="block h-px w-full bg-[#caa687]/20" />
            </div>

            {/* ===== CANDLE / VEIL / CORD SPONSORS (3-col) ===== */}
            <div
              {...fadeUp(0.55)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7"
            >
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                  Candle Sponsors
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Sponsor Name
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                  Veil Sponsors
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Sponsor Name
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                  Cord Sponsors
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Sponsor Name
                </p>
              </div>
            </div>

            {/* Gold rule */}
            <div className="flex items-center justify-center gap-2 mb-7">
              <span className="block h-px w-full bg-[#caa687]/20" />
            </div>

            {/* ===== RING BEARERS / COIN BEARERS / BIBLE BEARERS (3-col) ===== */}
            <div
              {...fadeUp(0.6)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7"
            >
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                  Ring Bearers
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Bearer Name
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Bearer Name
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                  Coin Bearers
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Bearer Name
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Bearer Name
                </p>
              </div>
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-2">
                  Bible Bearers
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Bearer Name
                </p>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Bearer Name
                </p>
              </div>
            </div>

            {/* Gold rule */}
            <div className="flex items-center justify-center gap-2 mb-7">
              <span className="block h-px w-full bg-[#caa687]/20" />
            </div>

            {/* ===== FLOWER GIRLS / FLOWER BOYS (centered) ===== */}
            <div
              {...fadeUp(0.65)}
              className="text-center"
            >
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-3">
                Flower Girls
              </h3>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light mb-1">
                Flower Girl Name
              </p>
              <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light mb-1">
                Flower Girl Name
              </p>
            </div>
        </div>
      </motion.div>
    </section>
  );
}
