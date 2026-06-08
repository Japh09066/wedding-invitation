'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Can I bring additional guests?',
    answer:
      'Due to limited venue capacity, we are only able to accommodate the guests listed on your invitation. We hope you understand — and we look forward to celebrating with you!',
  },
  {
    question: 'What time should I arrive?',
    answer:
      'Our ceremony will begin promptly at 9:00 AM. We kindly ask that you arrive at least 30 minutes early to find your seat, greet familiar faces, and settle in before we start.',
  },
  {
    question: 'When is the RSVP deadline?',
    answer:
      'Please let us know if you can make it on or before <strong>August 4, 2026</strong>. This helps us finalize the guest list, seating, and meals. Every response means the world to us.',
  },
  {
    question: 'Do you have a gift preference?',
    answer:
      'Your presence at our wedding is the most beautiful gift we could ask for. If you wish to give something more, a monetary gift would be gratefully received and help us start our new chapter together.',
  },
  {
    question: 'Can I take photos and videos?',
    answer:
      'Absolutely! We would love for you to capture memories. However, during the ceremony and procession, we kindly ask everyone to set aside their phones and cameras so you can be fully present — and leave the professional shots to our photographers.',
  },
  {
    question: 'Is there a dress code?',
    answer:
      'Semi-formal or Barong Tagalog is preferred. We want everyone to look and feel their best as we celebrate this joyful occasion together.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-floral-bg to-floral-cream">
      {/* Header */}
      <div className="section-container text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          Everything You Need to Know
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          FAQs
        </motion.h2>
      </div>

      {/* FAQ accordion */}
      <div className="section-container max-w-3xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.04 }}
            className="mb-3"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left p-5 md:p-6 rounded-xl transition-all duration-300 border ${
                openIndex === index
                  ? 'bg-white shadow-lg shadow-floral-taupe/10 border-floral-gold/25'
                  : 'bg-white/60 backdrop-blur-sm hover:bg-white/80 shadow-sm border-floral-cream hover:border-floral-taupe/20'
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="font-serif text-base md:text-lg text-floral-deep flex-1 leading-snug">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-7 h-7 rounded-full bg-floral-gold/10 flex items-center justify-center"
                >
                  <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="#d4a373" strokeWidth="2" strokeLinecap="round">
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </motion.div>
              </div>

              <AnimatePresence initial={false}>
                {openIndex === index && (
                  <motion.div
                    key="answer"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 border-t border-floral-cream/60 mt-4">
                      <p
                        className="font-sans text-floral-taupe text-sm leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: faq.answer }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Bottom spacer */}
      <div className="mt-8" />
    </section>
  );
}
