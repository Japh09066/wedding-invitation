'use client';

import { useCountdown } from '@/app/hooks/useCountdown';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function CountdownTimer() {
  const { days, hours, minutes, seconds, isComplete } = useCountdown();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-floral-cream to-floral-bg">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full">
          <defs>
            <pattern id="countdown-pattern" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
              <circle cx="40" cy="40" r="6" fill="#d4a373" opacity="0.4" />
              <circle cx="160" cy="120" r="4" fill="#a3c4b5" opacity="0.4" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#countdown-pattern)" />
        </svg>
      </div>

      <div className="section-container relative z-10">
        {isComplete ? (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <span className="font-script text-4xl text-floral-gold">🎉</span>
            <h3 className="font-serif text-3xl md:text-4xl text-floral-deep mt-4">
              Today is the day!
            </h3>
            <p className="font-script text-xl text-floral-gold mt-2">
              We are getting married!
            </p>
          </motion.div>
        ) : (
          <div className="text-center">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-script text-xl md:text-2xl text-floral-gold mb-3"
            >
              Counting down to
            </motion.p>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title mb-12"
            >
              Our Special Day
            </motion.h2>

            <div className="flex justify-center gap-4 md:gap-8">
              {[
                { value: days, label: 'Days' },
                { value: hours, label: 'Hours' },
                { value: minutes, label: 'Minutes' },
                { value: seconds, label: 'Seconds' },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg border border-floral-cream flex items-center justify-center">
                    <span className="font-serif text-3xl md:text-5xl text-floral-deep tabular-nums">
                      {String(item.value).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="mt-2 text-xs md:text-sm uppercase tracking-widest text-floral-taupe font-sans">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Decorative divider */}
      <div className="divider-floral mt-16">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}
