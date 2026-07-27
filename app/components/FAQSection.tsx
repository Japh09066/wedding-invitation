'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'When is the RSVP deadline?',
    answer:
      'Please RSVP by <strong>August 01, 2026</strong> so we can have an accurate headcount. 🙂',
  },
  {
    question: 'Can I bring a date?',
    answer:
      'We appreciate your support and appreciation of our union. However, we are only able to accommodate guests named on the invitations.',
  },
  {
    question: 'Are kids welcome?',
    answer:
      'As much as we love your little ones, we will not be including them in the ceremony or reception. However, we recognize that some of you will be traveling with your kids, so kindly let us know ahead of time. Please reach out if you have questions!',
  },
  {
    question: 'Where should I park?',
    answer:
      'There is plenty of free parking at the wedding venue and reception.',
  },
  {
    question: 'What should I wear?',
    answer:
      'Guests are encouraged to wear semi-formal attire in shades of dusty pink, dusty rose, blush, or muted pink.',
  },
  {
    question: 'Is the wedding indoors or outdoors?',
    answer:
      'Our wedding ceremony will be held indoors while the reception will be held outdoors.',
  },
  {
    question: 'Is it okay to take pictures with our phones and cameras during the wedding?',
    answer:
      'Yes! We would love for you to take photos and share them on social media with the official hashtag <strong>#oriJAYnallymeantforLAARNIE</strong>',
  },
  {
    question: 'Whom should I call with questions?',
    answer:
      'Feel free to contact us through Messenger.',
  },
  {
    question: 'What time will the reception end?',
    answer:
      'Approximately between 7:00–8:00 PM.',
  },
  {
    question: 'Is there a gifts registry?',
    answer:
      'We are grateful for your presence at our wedding. Should you wish to give a gift, a monetary gift would be greatly appreciated as we begin our life together.',
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
