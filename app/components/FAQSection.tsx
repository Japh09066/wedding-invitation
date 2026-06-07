'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'Can I bring additional guests?',
    answer:
      "We'd love to celebrate with everyone, but due to limited space, we are only able to accommodate those listed on your invitation. Thank you for understanding!",
  },
  {
    question: 'What time should I arrive?',
    answer:
      'The ceremony will start promptly at 9:00 AM. We ask that you arrive at least 30 minutes before the ceremony begins to allow time for seating and preparation.',
  },
  {
    question: 'When is the RSVP deadline?',
    answer: 'Kindly RSVP on or before August 4, 2026 so we can finalize our arrangements.',
  },
  {
    question: 'Do you have a gift preference?',
    answer:
      'Your presence is the most precious gift. We kindly ask for no other gifts, as your love and support are already more than enough.',
  },
  {
    question: 'Can I take photos and videos during the ceremony?',
    answer:
      "This isn't an unplugged ceremony — you're free to take photos and videos! However, during the procession, we kindly ask everyone to put down their phones and cameras so you can be fully present and not block the view of our official photographers and videographers.",
  },
  {
    question: 'Is there a dress code?',
    answer:
      'Semi-formal or Barong attire is preferred. We want everyone to look their best while remaining comfortable for the celebration.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="section-padding bg-gradient-to-b from-floral-bg to-floral-cream">
      {/* Decorative header */}
      <div className="section-container text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          Everything You Need to Know
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          FAQs
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-floral-taupe text-sm max-w-xl mx-auto"
        >
          If you have any other questions, feel free to reach out to us directly.
        </motion.p>
      </div>

      {/* FAQ Accordion */}
      <div className="section-container max-w-3xl">
        {faqs.map((faq, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className="mb-3"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className={`w-full text-left p-5 md:p-6 rounded-2xl transition-all duration-300 border ${
                openIndex === index
                  ? 'bg-white shadow-lg shadow-floral-taupe/10 border-floral-gold/30'
                  : 'bg-white/70 hover:bg-white shadow-sm shadow-floral-taupe/5 border-floral-cream hover:border-floral-taupe/20'
              }`}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-serif text-lg md:text-xl text-floral-deep flex-1">
                  {faq.question}
                </h3>
                <motion.div
                  animate={{ rotate: openIndex === index ? 45 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="flex-shrink-0 w-8 h-8 rounded-full bg-floral-gold/10 flex items-center justify-center"
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke="#d4a373"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <line x1="8" y1="2" x2="8" y2="14" />
                    <line x1="2" y1="8" x2="14" y2="8" />
                  </svg>
                </motion.div>
              </div>

              {/* Answer */}
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
                    <div className="pt-4 border-t border-floral-cream mt-4">
                      <p className="font-sans text-floral-taupe text-sm leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </motion.div>
        ))}
      </div>

      {/* Decorative divider */}
      <div className="divider-floral mt-16">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}
