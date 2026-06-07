'use client';

import { motion } from 'framer-motion';

const storyMilestones = [
  {
    date: 'Summer 2018',
    title: 'First Met',
    description:
      'It all started at a mutual friend\'s gathering. A chance encounter, a shared laugh, and neither of us knew that this moment would change everything.',
    icon: '💫',
  },
  {
    date: 'Spring 2019',
    title: 'First Date',
    description:
      'Coffee turned into dinner, dinner turned into late-night walks. We talked for hours like we had known each other for a lifetime.',
    icon: '☕',
  },
  {
    date: 'Winter 2021',
    title: 'The Proposal',
    description:
      'Under the stars at our favorite spot, with a ring that had been kept secret for months, one knee, and a question that led to the happiest "Yes!"',
    icon: '💍',
  },
  {
    date: 'August 18, 2026',
    title: 'The Wedding',
    description:
      'The beginning of forever. Surrounded by our loved ones, we will finally say "I do." This is the day we\'ve been dreaming of.',
    icon: '💒',
  },
];

export default function OurStory() {
  return (
    <section id="story" className="section-padding bg-floral-bg">
      {/* Decorative header */}
      <div className="section-container text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          Our Journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          How We Met
        </motion.h2>
      </div>

      {/* Timeline */}
      <div className="section-container max-w-3xl">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-floral-gold/40 via-floral-blush/40 to-floral-gold/40 md:-translate-x-px" />

          {storyMilestones.map((milestone, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative flex items-start gap-6 mb-16 last:mb-0 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-6 md:left-1/2 w-4 h-4 -translate-x-1/2 rounded-full bg-floral-gold border-4 border-floral-cream z-10 shadow-md" />

              {/* Content card */}
              <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${
                  index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'
                }`}
              >
                <div className="card inline-block text-left max-w-md">
                  <span className="text-2xl block mb-2">{milestone.icon}</span>
                  <p className="font-sans text-xs uppercase tracking-widest text-floral-gold mb-1">
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

              {/* Spacer for alternating layout */}
              <div className="hidden md:block md:w-[calc(50%-2rem)]" />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Divider */}
      <div className="divider-floral mt-16">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}
