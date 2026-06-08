'use client';

import { motion } from 'framer-motion';

export default function WeddingDetails() {
  return (
    <section id="details" className="section-padding bg-gradient-to-b from-floral-bg to-floral-cream relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="details-bg" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <circle cx="80" cy="80" r="35" fill="none" stroke="#5a4a3a" strokeWidth="0.6" />
              <circle cx="220" cy="200" r="45" fill="none" stroke="#5a4a3a" strokeWidth="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#details-bg)" />
        </svg>
      </div>

      {/* Header */}
      <div className="section-container text-center mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          For Our Guests
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Wedding Details
        </motion.h2>
      </div>

      {/* Content */}
      <div className="section-container max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-10">
          {/* ─── Attire ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_-6px_rgba(202,166,135,0.12)] border border-floral-cream/80 p-7 md:p-9 hover:shadow-[0_12px_40px_-8px_rgba(202,166,135,0.18)] hover:border-floral-taupe/15 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">👗</span>
              <h3 className="font-serif text-2xl text-floral-deep">Attire</h3>
            </div>

            <p className="font-sans text-floral-taupe text-sm leading-relaxed mb-6">
              As we gather to celebrate our special day, we invite you to embrace the elegance of the occasion with your attire.
            </p>

            <div className="space-y-4">
              {/* Ladies */}
              <div className="bg-white/60 rounded-xl p-4 border border-floral-cream/60">
                <h4 className="font-serif text-floral-deep text-base mb-2">Ladies</h4>
                <p className="font-sans text-floral-taupe text-sm leading-relaxed">
                  Blush pink, olive green, or nude long dress or cocktail dress.
                </p>
                <p className="font-sans text-floral-taupe/60 text-xs italic mt-1">
                  Please avoid sleeveless outfits during the church ceremony.
                </p>
              </div>

              {/* Gentlemen */}
              <div className="bg-white/60 rounded-xl p-4 border border-floral-cream/60">
                <h4 className="font-serif text-floral-deep text-base mb-2">Gentlemen</h4>
                <p className="font-sans text-floral-taupe text-sm leading-relaxed">
                  Long Sleeves &amp; Slacks
                </p>
                <p className="font-sans text-floral-taupe/60 text-xs italic mt-1">
                  Tie color same as motif
                </p>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="flex items-center gap-2 mt-5 pt-4 border-t border-floral-cream/60">
              <span className="block h-px w-6 bg-floral-gold/20" />
              <span className="text-floral-gold/30 text-xs">✦</span>
              <span className="font-serif italic text-floral-taupe/50 text-xs">Smart Casual &middot; Semi-Formal</span>
            </div>
          </motion.div>

          {/* ─── Guests ─── */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_-6px_rgba(202,166,135,0.12)] border border-floral-cream/80 p-7 md:p-9 hover:shadow-[0_12px_40px_-8px_rgba(202,166,135,0.18)] hover:border-floral-taupe/15 transition-all duration-500"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-2xl">🎩</span>
              <h3 className="font-serif text-2xl text-floral-deep">Guests</h3>
            </div>

            <p className="font-sans text-floral-taupe text-sm leading-relaxed mb-6">
              We want everyone to feel comfortable and look their best as we celebrate this joyful occasion together.
            </p>

            <div className="bg-white/60 rounded-xl p-5 border border-floral-cream/60">
              <div className="space-y-4">
                <div>
                  <h4 className="font-serif text-floral-deep text-base mb-2">Dress Code</h4>
                  <p className="font-sans text-floral-taupe text-sm leading-relaxed">
                    Ladies and Gentlemen are kindly requested to wear smart casual or semi-formal attire.
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <svg className="w-4 h-4 text-floral-gold mt-0.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="16" x2="12" y2="12" />
                    <line x1="12" y1="8" x2="12.01" y2="8" />
                  </svg>
                  <p className="font-sans text-floral-taupe/60 text-xs italic">
                    Semi-Formal or Barong Tagalog is also welcome.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative accent */}
            <div className="flex items-center gap-2 mt-5 pt-4 border-t border-floral-cream/60">
              <span className="block h-px w-6 bg-floral-gold/20" />
              <span className="text-floral-gold/30 text-xs">✦</span>
              <span className="font-serif italic text-floral-taupe/50 text-xs">Thank you for celebrating with us</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
