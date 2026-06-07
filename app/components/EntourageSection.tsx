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

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function EntourageSection() {
  return (
    <section id="entourage" className="py-24 md:py-32 bg-[#faf6f0]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-[#caa687] font-['Montserrat',sans-serif] text-xs uppercase tracking-[0.3em] mb-5">
            Our Wedding Party
          </p>
          <h2 className="font-['Great_Vibes',cursive] text-5xl md:text-6xl lg:text-7xl text-[#caa687] leading-none">
            The Entourage
          </h2>
        </motion.div>

        {/* Entourage groups */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="space-y-14 md:space-y-16"
        >
          {entourageData.map((group, idx) => (
            <motion.div
              key={group.title}
              variants={itemVariants}
              className="text-center"
            >
              {/* Group title in script */}
              <h3 className="font-['Great_Vibes',cursive] text-[#caa687] text-3xl md:text-4xl lg:text-5xl mb-6 leading-snug">
                {group.title}
              </h3>

              {/* Names */}
              <div className="space-y-2.5">
                {group.names.map((name, nIdx) => (
                  <p
                    key={`${group.title}-${nIdx}`}
                    className="font-['Dancing_Script',cursive] text-[#253d5b] text-xl md:text-2xl lg:text-3xl leading-relaxed"
                  >
                    {name}
                  </p>
                ))}
              </div>

              {/* Divider between groups */}
              {idx < entourageData.length - 1 && (
                <div className="flex items-center justify-center gap-3 mt-10">
                  <span className="block h-px w-10 bg-[#caa687]/30" />
                  <svg width="16" height="16" viewBox="0 0 64 64" fill="none" className="text-[#caa687]/50">
                    <circle cx="32" cy="32" r="5" fill="currentColor" />
                  </svg>
                  <span className="block h-px w-10 bg-[#caa687]/30" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
