'use client';

import { motion } from 'framer-motion';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { delay, duration: 0.6, ease: 'easeOut' },
});

export default function EntourageSection() {
  return (
    <section id="entourage" className="py-16 md:py-20 bg-[#faf6f0] flex items-center justify-center">
      {/* Bond paper frame */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[820px] mx-4 sm:mx-6"
      >
        {/* Outer frame */}
        <div className="border border-[#caa687]/25 p-2 sm:p-3">
          <div className="border border-[#caa687]/15 p-6 sm:p-8 md:p-10 bg-white shadow-sm">
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
            </div>

            {/* ===== PARENTS + OFFICIATING MINISTER (3-col) ===== */}
            <div
              {...fadeUp(0.3)}
              className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-7"
            >
              {/* Parents of Groom */}
              <div className="text-center">
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

              {/* Officiating Minister */}
              <div className="text-center">
                <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-3">
                  Officiating Minister
                </h3>
                <p className="font-['Inter',sans-serif] text-[#253d5b] text-sm font-light">
                  Officiating Minister Name
                </p>
              </div>

              {/* Parents of Bride */}
              <div className="text-center">
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
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-4">
                Principal Sponsors
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 max-w-xl mx-auto">
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
              <h3 className="font-['Playfair_Display',serif] text-[#caa687] text-sm uppercase tracking-[0.2em] font-medium mb-4">
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
        </div>
      </motion.div>
    </section>
  );
}
