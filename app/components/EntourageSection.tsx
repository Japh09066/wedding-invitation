'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 10 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.5, ease: 'easeOut' },
});

// ─── Ornate Corner SVG ───────────────────────────────────────
function OrnateCorner({ className }: { className: string }) {
  return (
    <svg
      className={`absolute pointer-events-none text-[#caa687] ${className}`}
      viewBox="0 0 120 120"
      fill="none"
    >
      <path d="M2 118 V2 H118" stroke="currentColor" strokeWidth="1.2" opacity="0.35" />
      <path d="M8 112 V8 H112" stroke="currentColor" strokeWidth="0.6" opacity="0.25" />
      <path
        d="M15 15 Q25 5 40 10 Q55 18 50 30 Q45 42 30 38 Q18 34 20 22 Q22 14 30 18"
        stroke="currentColor"
        strokeWidth="0.7"
        fill="none"
        opacity="0.3"
      />
      <ellipse cx="24" cy="24" rx="4" ry="2" transform="rotate(-40 24 24)" fill="#a3c4b5" opacity="0.35" />
      <circle cx="18" cy="18" r="2" fill="#f2d5d5" opacity="0.5" />
    </svg>
  );
}

// ─── Tiny Decorative Divider ──────────────────────────────────
function TinyDivider() {
  return (
    <div className="flex items-center justify-center gap-1.5 my-0.5 sm:my-1">
      <span className="block h-px w-6 bg-[#caa687]/20" />
      <span className="block w-1 h-1 rounded-full bg-[#caa687]/25" />
      <span className="block h-px w-6 bg-[#caa687]/20" />
    </div>
  );
}

// ─── Mini Floral Bullet ───────────────────────────────────────
function MiniLeaf() {
  return (
    <svg className="inline-block w-2.5 h-2.5 text-[#a3c4b5] mr-1 -mt-0.5" viewBox="0 0 20 20" fill="currentColor" opacity="0.5">
      <path d="M10 2 Q18 10 10 18 Q2 10 10 2Z" />
    </svg>
  );
}

// ─── Style Classes ────────────────────────────────────────────
const groupLabel = "font-['Playfair_Display',serif] text-[#caa687] text-[9px] sm:text-[10px] md:text-[11px] uppercase tracking-[0.22em] font-medium";
const groupName  = "font-['Playfair_Display',serif] text-[#253d5b] text-[10px] sm:text-[11px] md:text-xs leading-relaxed";
const callig     = "font-['Great_Vibes',cursive] text-[#caa687]";
const sectionRule = "block h-px bg-gradient-to-r from-transparent via-[#caa687]/25 to-transparent";

// ─── Main Component ───────────────────────────────────────────
export default function EntourageSection() {
  return (
    <section
      id="entourage"
      className="h-screen bg-gradient-to-b from-floral-cream to-floral-bg flex items-center justify-center overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[640px] mx-3 sm:mx-6 h-[92vh] sm:h-[88vh] flex items-center justify-center"
      >
        {/* Outer ornate frame */}
        <div className="absolute inset-0 border border-[#caa687]/25 rounded-sm" />
        <div className="absolute inset-[6px] border border-[#caa687]/10 rounded-sm" />

        {/* Corner ornaments */}
        <OrnateCorner className="-top-2 -left-2 w-20 h-20 opacity-80" />
        <OrnateCorner className="-top-2 -right-2 w-20 h-20 opacity-80 scale-x-[-1]" />
        <OrnateCorner className="-bottom-2 -left-2 w-20 h-20 opacity-60 scale-y-[-1]" />
        <OrnateCorner className="-bottom-2 -right-2 w-20 h-20 opacity-60 scale-[-1]" />

        {/* Subtle background watermark */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035]">
          <svg className="w-3/4 h-3/4" viewBox="0 0 400 400" fill="none">
            <circle cx="200" cy="200" r="120" stroke="#253d5b" strokeWidth="0.8" />
            <circle cx="200" cy="200" r="90" stroke="#253d5b" strokeWidth="0.6" />
            <circle cx="200" cy="200" r="60" stroke="#253d5b" strokeWidth="0.4" />
            <path d="M200 80 L200 320" stroke="#253d5b" strokeWidth="0.4" />
            <path d="M80 200 L320 200" stroke="#253d5b" strokeWidth="0.4" />
          </svg>
        </div>

        {/* ─── CONTENT ─── */}
        <div className="relative px-5 sm:px-8 md:px-10 py-3 sm:py-4 w-full h-full flex flex-col justify-center">

          {/* ===== TITLE ===== */}
          <motion.div {...fadeUp()} className="text-center">
            <p className="font-['Inter',sans-serif] text-[#caa687] text-[9px] sm:text-[10px] uppercase tracking-[0.35em] font-light">
              Our Wedding Party
            </p>
            <h2 className={callig + " text-[#253d5b] text-2xl sm:text-3xl md:text-4xl leading-snug mt-0.5"}>
              The Entourage
            </h2>
            {/* Ornamental divider */}
            <div className="flex items-center justify-center gap-2 mt-1.5 mb-2">
              <span className="block h-px w-8 bg-[#caa687]/25" />
              <svg className="w-3 h-3 text-[#caa687]/40" viewBox="0 0 20 20" fill="currentColor">
                <circle cx="10" cy="10" r="2" />
                <ellipse cx="10" cy="7" rx="1.5" ry="1" opacity="0.5" />
                <ellipse cx="10" cy="13" rx="1.5" ry="1" opacity="0.5" />
              </svg>
              <span className="block h-px w-8 bg-[#caa687]/25" />
            </div>
          </motion.div>

          {/* ===== BRIDE & GROOM (2-column) ===== */}
          <motion.div {...fadeUp(0.04)} className="grid grid-cols-2 gap-4 sm:gap-8 max-w-sm mx-auto">
            <div className="text-center">
              <span className={groupLabel}>The Groom</span>
              <p className={groupName + " mt-0.5"}>Jay Sam</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>The Bride</span>
              <p className={groupName + " mt-0.5"}>Laarnie</p>
            </div>
          </motion.div>

          <TinyDivider />

          {/* ===== PARENTS (2-column) ===== */}
          <motion.div {...fadeUp(0.07)} className="grid grid-cols-2 gap-4 sm:gap-8 max-w-sm mx-auto">
            <div className="text-center">
              <span className={groupLabel}>Parents of the Groom</span>
              <p className={groupName + " mt-0.5"}>Father of the Groom</p>
              <p className={groupName}>Mother of the Groom</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Parents of the Bride</span>
              <p className={groupName + " mt-0.5"}>Father of the Bride</p>
              <p className={groupName}>Mother of the Bride</p>
            </div>
          </motion.div>

          {/* ===== OFFICIATING MINISTER (centered below parents) ===== */}
          <motion.div {...fadeUp(0.1)} className="text-center mt-1">
            <span className={groupLabel}>Officiating Minister</span>
            <p className={groupName + " mt-0.5"}>Minister Name</p>
          </motion.div>

          <span className={sectionRule + " my-1.5 mx-12"} />

          {/* ===== PRINCIPAL SPONSORS ===== */}
          <motion.div {...fadeUp(0.12)} className="text-center">
            <h3 className={callig + " text-base sm:text-lg leading-tight"}>
              <MiniLeaf />Principal Sponsors
            </h3>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0.5 max-w-xs mx-auto mt-1">
              <p className={groupName + " text-right"}>Sponsor Name 1</p>
              <p className={groupName + " text-left"}>Sponsor Name 2</p>
              <p className={groupName + " text-right"}>Sponsor Name 3</p>
              <p className={groupName + " text-left"}>Sponsor Name 4</p>
            </div>
          </motion.div>

          <span className={sectionRule + " my-1.5 mx-16"} />

          {/* ===== SECONDARY SPONSORS ===== */}
          <motion.div {...fadeUp(0.15)} className="text-center">
            <h3 className={callig + " text-sm sm:text-base leading-tight"}>
              <MiniLeaf />Secondary Sponsors
            </h3>
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto mt-1">
              <p className={groupName}>Sponsor 1</p>
              <p className={groupName}>Sponsor 2</p>
              <p className={groupName}>Sponsor 3</p>
            </div>
          </motion.div>

          <span className={sectionRule + " my-1.5 mx-16"} />

          {/* ===== BEST MAN / MAID OF HONOR ===== */}
          <motion.div {...fadeUp(0.18)} className="grid grid-cols-2 gap-4 sm:gap-8 max-w-sm mx-auto">
            <div className="text-center">
              <span className={groupLabel}>Best Man</span>
              <p className={groupName + " mt-0.5"}>Name</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Maid of Honor</span>
              <p className={groupName + " mt-0.5"}>Name</p>
            </div>
          </motion.div>

          {/* ===== CANDLE / VEIL / CORD SPONSORS ===== */}
          <motion.div {...fadeUp(0.2)} className="grid grid-cols-3 gap-2 mt-0.5">
            <div className="text-center">
              <span className={groupLabel}>Candle</span>
              <p className={groupName + " mt-0.5"}>Sponsor Name</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Veil</span>
              <p className={groupName + " mt-0.5"}>Sponsor Name</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Cord</span>
              <p className={groupName + " mt-0.5"}>Sponsor Name</p>
            </div>
          </motion.div>

          {/* ===== BEARERS ===== */}
          <motion.div {...fadeUp(0.22)} className="grid grid-cols-3 gap-2 mt-0.5">
            <div className="text-center">
              <span className={groupLabel}>Ring Bearers</span>
              <p className={groupName + " mt-0.5"}>Name</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Coin Bearers</span>
              <p className={groupName + " mt-0.5"}>Name</p>
            </div>
            <div className="text-center">
              <span className={groupLabel}>Bible Bearers</span>
              <p className={groupName + " mt-0.5"}>Name</p>
            </div>
          </motion.div>

          {/* ===== FLOWER GIRLS ===== */}
          <motion.div {...fadeUp(0.24)} className="text-center">
            <span className={groupLabel}>Flower Girls</span>
            <p className={groupName + " mt-0.5"}>Name</p>
          </motion.div>

          <span className={sectionRule + " my-1.5 mx-12"} />

          {/* ===== GIFT GUIDE ===== */}
          <motion.div {...fadeUp(0.26)} className="text-center">
            <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-[9px] sm:text-[10px] uppercase tracking-[0.25em] font-medium mb-0.5">
              Gift Guide
            </h3>
            <p className="font-['Playfair_Display',serif] italic text-[#253d5b] text-[10px] sm:text-[11px] leading-tight max-w-xs mx-auto">
              Your presence is present enough.<br />A monetary gift would be greatly appreciated.
            </p>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}
