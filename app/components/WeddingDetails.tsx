'use client';

import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const attireColors = [
  { hex: '#f5dbda', label: 'Blush' },
  { hex: '#ebc2c0', label: 'Dusty Pink' },
  { hex: '#dba8a5', label: 'Dusty Rose' },
  { hex: '#c98d8a', label: 'Mauve' },
  { hex: '#b87875', label: 'Deep Mauve' },
];

export default function WeddingDetails() {
  return (
    <section id="details" className="section-padding bg-gradient-to-b from-floral-cream via-floral-bg to-floral-cream relative overflow-hidden">
      {/* Subtle background rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.015]">
        <svg className="w-full max-w-4xl" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#5a4a3a" strokeWidth="0.3" />
          <circle cx="300" cy="300" r="220" stroke="#5a4a3a" strokeWidth="0.2" />
          <circle cx="300" cy="300" r="160" stroke="#5a4a3a" strokeWidth="0.15" />
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-80px' }}
        variants={stagger}
        className="section-container relative z-10 max-w-3xl"
      >
        {/* ═══════ Header ═══════ */}
        <motion.div variants={fadeUp} className="text-center mb-14">
          <h2 className="section-title font-['Playfair_Display',serif] text-floral-deep">
            The Details &amp; RSVP
          </h2>
          <div className="divider-dot mt-4" />
        </motion.div>

        {/* ═══════ RSVP Info ═══════ */}
        <motion.div
          variants={fadeUp}
          className="card-elegant text-center mb-12 max-w-xl mx-auto"
        >
          <p className="font-serif text-[15px] sm:text-[17px] text-floral-deep/85 leading-[1.8] max-w-md mx-auto">
            We have reserved{' '}
            <span className="inline-block w-8 border-b border-floral-gold/50 text-center font-serif">
              &nbsp;&nbsp;
            </span>{' '}
            seat(s) for you. A favor of your reply is requested on or before{' '}
            <span className="font-medium text-floral-gold">July 01, 2026</span>.
          </p>
          <p className="font-sans text-[11px] uppercase tracking-[0.2em] text-floral-taupe/70 mt-4">
            RSVP on this page to confirm your attendance.
          </p>
        </motion.div>

        {/* ═══════ Attire Guide ═══════ */}
        <motion.div variants={fadeUp} className="mb-14 text-center">
          <h3 className="heading-serif text-center mb-3">Attire</h3>
          <div className="divider-dot mb-5" />
          <p className="font-sans text-[12px] sm:text-[13px] uppercase tracking-[0.2em] text-floral-deep/70 max-w-lg mx-auto leading-relaxed mb-8">
            We kindly encourage our guests to wear semi-formal attire with
            these colors on our special day.
          </p>

          {/* Color Swatches */}
          <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
            {attireColors.map((color, i) => (
              <motion.div
                key={color.label}
                initial={{ opacity: 0, scale: 0.6 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + i * 0.08, type: 'spring', damping: 14 }}
                className="flex flex-col items-center gap-2"
              >
                <div
                  className="w-9 h-9 sm:w-11 sm:h-11 rounded-full border-2 border-white shadow-[0_2px_8px_-2px_rgba(90,74,58,0.15)] transition-transform duration-300 hover:scale-110"
                  style={{ backgroundColor: color.hex }}
                />
                <span className="font-sans text-[8px] sm:text-[9px] uppercase tracking-[0.15em] text-floral-taupe/60">
                  {color.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Attire Illustration — placed below color swatches */}
          <div className="flex justify-center mt-10">
            <img
              src="/images/attire-illustration.png"
              alt="Attire color guide illustration"
              className="w-full max-w-[340px] sm:max-w-[400px] h-auto rounded-xl shadow-[0_8px_30px_-6px_rgba(202,166,135,0.15)]"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* ═══════ Divider ═══════ */}
        <motion.div variants={fadeUp} className="divider-floral my-12" />

        {/* ═══════ Hashtag ═══════ */}
        <motion.div
          variants={fadeUp}
          className="text-center mb-14"
        >
          <a
            href="https://instagram.com/explore/tags/oriJAYnallymeantforLAARNIE"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-block"
          >
            <span className="font-['Playfair_Display',serif] text-[15px] sm:text-[18px] tracking-wide text-floral-deep/85 group-hover:text-floral-gold transition-colors duration-500">
              #oriJAYnallymeantforLAARNIE
            </span>
          </a>
        </motion.div>

        {/* ═══════ Divider ═══════ */}
        <motion.div variants={fadeUp} className="divider-floral my-12" />

        {/* ═══════ Gifts Section ═══════ */}
        <motion.div variants={fadeUp} className="text-center mb-12">
          <h3 className="heading-serif text-center mb-3">A Note on Gifts</h3>
          <div className="divider-dot mb-5" />
          <p className="font-serif text-[15px] sm:text-[17px] text-floral-deep/85 leading-[1.8] max-w-lg mx-auto">
            Having you with us on our special day is more than enough.
            Your love and prayers are what matter most.
          </p>
          <p className="font-serif text-[15px] sm:text-[17px] text-floral-deep/85 leading-[1.8] max-w-lg mx-auto mt-2">
            For those who wish to give, a monetary gift would be greatly
            appreciated.
          </p>
        </motion.div>

        {/* ═══════ QR Codes ═══════ */}
        <motion.div
          variants={fadeUp}
          className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-12 mb-4"
        >
          {/* QR 1 */}
          <div className="flex flex-col items-center">
            <div className="w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] bg-white rounded-xl shadow-[0_8px_30px_-6px_rgba(202,166,135,0.2)] border border-floral-cream/60 p-3 flex items-center justify-center">
              <img
                src="/images/qr-1.png"
                alt="InstaPay QR Code 1"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>

          {/* QR 2 */}
          <div className="flex flex-col items-center">
            <div className="w-[170px] h-[170px] sm:w-[200px] sm:h-[200px] bg-white rounded-xl shadow-[0_8px_30px_-6px_rgba(202,166,135,0.2)] border border-floral-cream/60 p-3 flex items-center justify-center">
              <img
                src="/images/qr-2.png"
                alt="InstaPay QR Code 2"
                className="w-full h-full object-contain"
                loading="lazy"
              />
            </div>
          </div>
        </motion.div>

        {/* Transfer fees disclaimer */}
        <motion.div variants={fadeUp} className="text-center">
          <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-floral-taupe/60">
            Transfer fees may apply.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
