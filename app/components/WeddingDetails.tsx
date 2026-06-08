'use client';

import { motion } from 'framer-motion';

export default function WeddingDetails() {
  return (
    <section id="details" className="bg-gradient-to-b from-floral-bg to-floral-cream py-12 sm:py-16 relative">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-lg mx-auto px-4"
      >
        <img
          src="/images/wedding-details-card.png"
          alt="Wedding Details"
          className="w-full h-auto block rounded-xl shadow-[0_12px_40px_-8px_rgba(202,166,135,0.2)]"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
}
