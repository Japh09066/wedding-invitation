'use client';

import { motion } from 'framer-motion';

const storyMilestones = [
  {
    date: 'Summer 2018',
    title: 'First Met',
    description:
      'It all began at a quiet gathering of friends. A chance meeting, a shared laugh, and a spark neither of us expected. That night, two strangers became something more.',
    icon: '💫',
    side: 'left' as const,
  },
  {
    date: 'Spring 2019',
    title: 'First Date',
    description:
      'Coffee turned into dinner, dinner stretched into late-night walks. Hours vanished like minutes as we discovered how much we had to say — and how comfortable silence could be.',
    icon: '☕',
    side: 'right' as const,
  },
  {
    date: 'Winter 2021',
    title: 'The Proposal',
    description:
      'Under a canopy of stars at our favorite spot, a question that had been whispered in the heart for months finally found its voice. The answer was — and always will be — yes.',
    icon: '💍',
    side: 'left' as const,
  },
  {
    date: 'August 18, 2026',
    title: 'The Wedding',
    description:
      'The beginning of forever. Surrounded by the people who matter most, we will finally say the words we have been waiting for: \u201cI do.\u201d This is the day we have dreamed of.',
    icon: '💒',
    side: 'right' as const,
  },
];

export default function OurStory() {
  return (
    <section id="story" className="section-padding bg-gradient-to-b from-floral-bg via-floral-cream/40 to-floral-bg relative overflow-hidden">
      {/* Background floral accents */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="story-bg" x="0" y="0" width="300" height="300" patternUnits="userSpaceOnUse">
              <circle cx="80" cy="80" r="35" fill="none" stroke="#5a4a3a" strokeWidth="0.8" />
              <circle cx="250" cy="200" r="50" fill="none" stroke="#5a4a3a" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#story-bg)" />
        </svg>
      </div>

      {/* Header */}
      <div className="section-container text-center mb-16 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          Our Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          How We Met
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="section-container max-w-4xl relative z-10">
        <div className="relative">
          {/* Timeline line — gradient */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-floral-gold/30 via-floral-blush/40 via-floral-gold/30 to-floral-gold/20 md:-translate-x-px" />

          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className={`relative flex items-start gap-5 mb-14 md:mb-20 last:mb-0 ${
                milestone.side === 'right' ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline dot */}
              <div className="relative z-10 flex-shrink-0 ml-7 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <motion.div
                  whileInView={{ scale: [0, 1] }}
                  viewport={{ once: true }}
                  transition={{ type: 'spring', damping: 12, stiffness: 200, delay: index * 0.12 + 0.2 }}
                  className="w-4 h-4 rounded-full bg-floral-gold border-[3px] border-floral-cream shadow-md flex items-center justify-center"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-floral-bg" />
                </motion.div>
              </div>

              {/* Content card */}
              <div className={`flex-1 md:w-[calc(50%-2rem)] ${milestone.side === 'right' ? 'md:pl-8' : 'md:pr-8'}`}>
                <motion.div
                  whileHover={{ y: -2 }}
                  className="card-elegant"
                >
                  <span className="text-2xl block mb-2">{milestone.icon}</span>
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-floral-gold font-medium mb-1">
                    {milestone.date}
                  </p>
                  <h3 className="font-serif text-xl md:text-2xl text-floral-deep mb-2">
                    {milestone.title}
                  </h3>
                  <p className="font-sans text-floral-taupe text-sm leading-relaxed">
                    {milestone.description}
                  </p>
                  {/* Subtle bottom accent */}
                  <div className="flex items-center gap-2 mt-3 pt-3 border-t border-floral-cream/60">
                    <span className="block h-px w-4 bg-floral-gold/20" />
                    <span className="text-floral-gold/30 text-xs">✦</span>
                  </div>
                </motion.div>
              </div>

              {/* Spacer for alternate layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="divider-floral mt-16 relative z-10">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}
