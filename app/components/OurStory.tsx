'use client';

import { motion } from 'framer-motion';
import { useRef } from 'react';

const storyMilestones = [
  {
    date: 'April 19, 2025',
    title: 'Where It All Began',
    description:
      'What started as a simple encounter at VSU during Sabbath blossomed into something beautiful when we officially met at Nava Seventh-day Adventist Church. On April 19, 2025, we captured our very first photo together\u2014a precious memory of the beginning of our journey.',
    icon: '🌸',
    image: '/images/story-began.jpg',
  },
  {
    date: 'June 3, 2025',
    title: 'Our First Date',
    description:
      'On June 3, 2025, we shared our first date at a humble 7-Eleven. It wasn\u2019t the place that made it special, but the laughter, conversations, and growing connection that made the moment unforgettable.',
    icon: '✨',
    image: '/images/story-date.jpg',
  },
  {
    date: 'March 22, 2026',
    title: 'Officially Engaged',
    description:
      'On March 22, 2026, we officially became engaged\u2014a beautiful question asked and answered with joy. In that moment, two hearts chose the same future and the promise of forever began.',
    icon: '💍',
    image: '/images/story-engaged.jpg',
  },
  {
    date: 'August 18, 2026',
    title: 'Our Wedding Day',
    description:
      'On August 18, 2026, surrounded by God\u2019s love, our family, and dear friends, we will begin our greatest adventure yet\u2014not as two separate stories, but as one beautiful journey together.',
    icon: '🤍',
    image: '/images/story-wedding.jpg',
  },
];

function TimelineDot({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: 'spring', damping: 12, stiffness: 200, delay }}
      className="relative z-20 w-5 h-5 rounded-full bg-floral-gold border-[3px] border-white shadow-lg flex-shrink-0"
    >
      <div className="w-2 h-2 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
    </motion.div>
  );
}

export default function OurStory() {
  return (
    <section
      id="story"
      className="py-16 md:py-24 bg-floral-bg relative overflow-hidden"
    >
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
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-floral-gold/20 md:-translate-x-px" />

          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              className={`relative flex items-start gap-5 mb-20 md:mb-28 last:mb-0 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Dot */}
              <div className="relative z-10 ml-3 mt-8 md:ml-0 md:absolute md:left-1/2 md:-translate-x-1/2">
                <TimelineDot delay={index * 0.1 + 0.2} />
              </div>

              {/* ─── Content Side ─── */}
              <div
                className={`flex-1 md:w-[calc(50%-1.5rem)] ${
                  index % 2 === 1
                    ? 'md:pl-0 md:pr-4'
                    : 'md:pr-0 md:pl-4'
                }`}
              >
                {/* Photo Art Frame — no overlays, pure brightness */}
                <motion.div
                  initial={{ scale: 1.08, opacity: 0.9 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: 'easeOut' }}
                  className="aspect-[3/4] w-full max-w-sm mx-auto rounded-lg overflow-hidden shadow-[0_8px_30px_-6px_rgba(90,74,58,0.15)]"
                >
                  <div
                    className="w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url(${milestone.image})` }}
                  />
                </motion.div>

                {/* Text Placard — layered on top like a physical card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                  className={`relative -mt-10 md:-mt-16 bg-white p-6 md:p-8 rounded-xl shadow-[0_12px_40px_-10px_rgba(90,74,58,0.12)] max-w-sm ${
                    index % 2 === 1
                      ? 'md:ml-auto md:mr-4'
                      : 'md:mr-auto md:ml-4'
                  }`}
                >
                  {/* Icon */}
                  <span className="text-2xl block mb-3">{milestone.icon}</span>

                  {/* Date — tiny, uppercase, wide tracking */}
                  <p className="font-sans text-[10px] uppercase tracking-[0.25em] text-floral-taupe font-medium mb-2">
                    {milestone.date}
                  </p>

                  {/* Title — deep espresso */}
                  <h3 className="font-serif text-xl md:text-2xl text-[#2C2520] mb-3 leading-tight">
                    {milestone.title}
                  </h3>

                  {/* Description */}
                  <p className="font-sans text-sm text-[#2C2520]/70 leading-relaxed">
                    {milestone.description}
                  </p>
                </motion.div>
              </div>

              {/* Spacer (desktop only) */}
              <div className="hidden md:block md:w-[calc(50%-1.5rem)]" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
