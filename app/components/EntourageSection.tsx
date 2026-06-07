'use client';

import { motion } from 'framer-motion';

interface EntourageGroup {
  title: string;
  names: string[];
}

const entourageData: EntourageGroup[] = [
  {
    title: 'Principal Sponsors',
    names: [
      'John Francis Ontog & Francheska Alysa Ontog',
      'Clifford Bulandi & Trixia Bulanadi',
      'Derrick Bulanadi & Kiana Bulanadi',
    ],
  },
  {
    title: 'Best Man',
    names: ['JM Bulanadi'],
  },
  {
    title: 'Bridesmaids & Groomsmen',
    names: ['Amara Panganiban', 'Keith Zairus Nolasco'],
  },
  {
    title: 'Flower Maidens',
    names: [
      'Calliah Grace Aguilar',
      'Gia Wynna Faith Aroyo',
      'Haven Kyoko Cuales',
    ],
  },
  {
    title: 'Ring Bearers',
    names: ['Jacob Zakeo Delos Santos', 'Aki Cabanesas'],
  },
  {
    title: 'Bible Bearers',
    names: ['Bible Bearers'],
  },
  {
    title: 'Coin Bearers',
    names: ['Coin Bearers'],
  },
  {
    title: 'Cord Sponsors',
    names: ['Cord Sponsors'],
  },
  {
    title: 'Candle Sponsors',
    names: ['Candle Sponsors'],
  },
];

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5 },
  }),
};

export default function EntourageSection() {
  return (
    <section id="entourage" className="py-16 md:py-20 bg-[#faf6f0] flex items-center justify-center">
      {/* The paper frame */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[900px] mx-4 md:mx-6"
      >
        {/* Decorative outer border */}
        <div className="border-2 border-[#caa687]/30 rounded-sm p-2 sm:p-3">
          <div className="border border-[#caa687]/20 rounded-sm p-4 sm:p-6 md:p-8 bg-white shadow-lg shadow-[#caa687]/5">
            {/* Top-left corner flourish */}
            <div className="absolute top-3 left-3 sm:top-5 sm:left-5 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-t-2 border-[#caa687]/40 rounded-tl-sm" />

            {/* Top-right corner flourish */}
            <div className="absolute top-3 right-3 sm:top-5 sm:right-5 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-t-2 border-[#caa687]/40 rounded-tr-sm" />

            {/* Bottom-left corner flourish */}
            <div className="absolute bottom-3 left-3 sm:bottom-5 sm:left-5 w-12 h-12 sm:w-16 sm:h-16 border-l-2 border-b-2 border-[#caa687]/40 rounded-bl-sm" />

            {/* Bottom-right corner flourish */}
            <div className="absolute bottom-3 right-3 sm:bottom-5 sm:right-5 w-12 h-12 sm:w-16 sm:h-16 border-r-2 border-b-2 border-[#caa687]/40 rounded-br-sm" />

            {/* Inner content */}
            <div className="relative">
              {/* Section heading */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1, duration: 0.6 }}
                className="text-center mb-8 md:mb-10"
              >
                <p className="text-[#caa687] font-['Montserrat',sans-serif] text-[10px] sm:text-xs uppercase tracking-[0.25em] mb-3">
                  Our Wedding Party
                </p>
                <h2 className="font-['Great_Vibes',cursive] text-4xl sm:text-5xl md:text-6xl text-[#caa687] leading-none mb-3">
                  The Entourage
                </h2>
                {/* Gold rule under title */}
                <div className="flex items-center justify-center gap-2">
                  <span className="block h-px w-12 bg-[#caa687]/40" />
                  <svg width="12" height="12" viewBox="0 0 64 64" fill="none" className="text-[#caa687]/40">
                    <circle cx="32" cy="32" r="4" fill="currentColor" />
                  </svg>
                  <span className="block h-px w-12 bg-[#caa687]/40" />
                </div>
              </motion.div>

              {/* Two-column layout for compact fit */}
              <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 md:gap-y-7">
                {/* LEFT COLUMN */}
                <div className="space-y-6">
                  {/* Principal Sponsors */}
                  <motion.div
                    custom={0}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-xl sm:text-2xl md:text-3xl mb-2.5 leading-snug">
                      Principal Sponsors
                    </h3>
                    <div className="space-y-1.5">
                      {entourageData[0].names.map((name, i) => (
                        <p key={i} className="font-['Dancing_Script',cursive] text-[#253d5b] text-base sm:text-lg md:text-xl leading-relaxed">
                          {name}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* Best Man */}
                  <motion.div
                    custom={1}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-xl sm:text-2xl md:text-3xl mb-2 leading-snug">
                      Best Man
                    </h3>
                    <p className="font-['Dancing_Script',cursive] text-[#253d5b] text-base sm:text-lg md:text-xl">
                      JM Bulanadi
                    </p>
                  </motion.div>

                  {/* Bridesmaids & Groomsmen */}
                  <motion.div
                    custom={2}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-xl sm:text-2xl md:text-3xl mb-2.5 leading-snug">
                      Bridesmaids &amp; Groomsmen
                    </h3>
                    <div className="space-y-1.5">
                      {entourageData[2].names.map((name, i) => (
                        <p key={i} className="font-['Dancing_Script',cursive] text-[#253d5b] text-base sm:text-lg md:text-xl leading-relaxed">
                          {name}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>

                {/* RIGHT COLUMN */}
                <div className="space-y-6">
                  {/* Flower Maidens */}
                  <motion.div
                    custom={3}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-xl sm:text-2xl md:text-3xl mb-2.5 leading-snug">
                      Flower Maidens
                    </h3>
                    <div className="space-y-1.5">
                      {entourageData[3].names.map((name, i) => (
                        <p key={i} className="font-['Dancing_Script',cursive] text-[#253d5b] text-base sm:text-lg md:text-xl leading-relaxed">
                          {name}
                        </p>
                      ))}
                    </div>
                  </motion.div>

                  {/* Ring Bearers */}
                  <motion.div
                    custom={4}
                    variants={itemVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-xl sm:text-2xl md:text-3xl mb-2.5 leading-snug">
                      Ring Bearers
                    </h3>
                    <div className="space-y-1.5">
                      {entourageData[4].names.map((name, i) => (
                        <p key={i} className="font-['Dancing_Script',cursive] text-[#253d5b] text-base sm:text-lg md:text-xl leading-relaxed">
                          {name}
                        </p>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Bottom row: secondary sponsors */}
              <motion.div
                custom={5}
                variants={itemVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="mt-6 md:mt-7 pt-6 md:pt-7 border-t border-[#caa687]/20"
              >
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                  {[
                    { title: 'Bible Bearers', names: ['Bible Bearers'] },
                    { title: 'Coin Bearers', names: ['Coin Bearers'] },
                    { title: 'Cord Sponsors', names: ['Cord Sponsors'] },
                    { title: 'Candle Sponsors', names: ['Candle Sponsors'] },
                  ].map((group) => (
                    <div key={group.title} className="text-center">
                      <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-lg md:text-xl mb-1.5 leading-snug">
                        {group.title}
                      </h3>
                      {group.names.map((name, i) => (
                        <p key={i} className="font-['Dancing_Script',cursive] text-[#253d5b] text-sm sm:text-base md:text-lg">
                          {name}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
