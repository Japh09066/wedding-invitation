'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const storyMilestones = [
  {
    date: 'April 19, 2025',
    title: 'Where It All Began',
    description:
      'What started as a simple encounter at VSU during Sabbath blossomed into something beautiful when we officially met at Nava Seventh-day Adventist Church. On April 19, 2025, we captured our very first photo together\u2014a precious memory of the beginning of our journey.',
    icon: '🌸',
  },
  {
    date: 'June 3, 2026',
    title: 'Our First Date',
    description:
      'On June 3, 2026, we shared our first date at a humble 7-Eleven. It wasn\u2019t the place that made it special, but the laughter, conversations, and growing connection that made the moment unforgettable.',
    icon: '✨',
  },
  {
    date: 'March 22, 2026',
    title: 'The Proposal',
    description:
      'On March 22, 2026, a beautiful question was asked and answered with joy. In that moment, two hearts chose the same future and the promise of forever began.',
    icon: '💍',
  },
  {
    date: 'August 18, 2026',
    title: 'Our Wedding Day',
    description:
      'On August 18, 2026, surrounded by God\u2019s love, our family, and dear friends, we will begin our greatest adventure yet\u2014not as two separate stories, but as one beautiful journey together.',
    icon: '🤍',
  },
];

function TimelineDot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', damping: 12, stiffness: 200, delay }}
      className="relative z-10 w-4 h-4 rounded-full bg-floral-gold border-[3px] border-floral-cream shadow-md flex-shrink-0"
    >
      <div className="w-1.5 h-1.5 rounded-full bg-floral-bg absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}

export default function OurStory() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const lineHeight = useTransform(scrollYProgress, [0, 0.6], ['0%', '100%']);

  return (
    <section
      ref={sectionRef}
      id="story"
      className="section-padding bg-gradient-to-b from-floral-bg via-floral-cream/30 to-floral-bg relative overflow-hidden"
    >
      {/* Background floral accents — very subtle */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
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
          {/* Timeline line — animated fill */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-floral-gold/15 md:-translate-x-px">
            <motion.div
              className="w-full bg-gradient-to-b from-floral-gold/50 via-floral-gold/30 to-transparent"
              style={{ height: lineHeight }}
            />
          </div>

          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: index * 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
              className={`relative flex items-start gap-5 mb-16 md:mb-24 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="relative z-10 ml-7 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <TimelineDot delay={index * 0.1 + 0.2} />
              </div>

              {/* Card */}
              <div className={`flex-1 md:w-[calc(50%-2rem)] ${index % 2 === 1 ? 'md:pl-8' : 'md:pr-8'}`}>
                <motion.div
                  whileHover={{ y: -3 }}
                  className="bg-white/60 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_-6px_rgba(202,166,135,0.12)] border border-floral-cream/80 p-6 md:p-8 hover:shadow-[0_12px_40px_-8px_rgba(202,166,135,0.18)] hover:border-floral-taupe/15 transition-all duration-500"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl flex-shrink-0 mt-0.5">{milestone.icon}</span>
                    <div>
                      <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-floral-gold font-medium mb-1">
                        {milestone.date}
                      </p>
                      <h3 className="font-serif text-xl md:text-2xl text-floral-deep mb-2">
                        {milestone.title}
                      </h3>
                      <p className="font-sans text-floral-taupe text-sm leading-relaxed">
                        {milestone.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Spacer */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
