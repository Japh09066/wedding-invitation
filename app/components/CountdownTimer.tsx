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

  const timeUnits = [
    { value: days, label: 'Days' },
    { value: hours, label: 'Hours' },
    { value: minutes, label: 'Minutes' },
    { value: seconds, label: 'Seconds' },
  ];

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-gradient-to-b from-floral-cream via-floral-bg to-floral-cream">
      {/* Subtle background — minimalist rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.02]">
        <svg className="w-full max-w-3xl" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="260" stroke="#5a4a3a" strokeWidth="0.4" />
          <circle cx="300" cy="300" r="200" stroke="#5a4a3a" strokeWidth="0.3" />
          <circle cx="300" cy="300" r="140" stroke="#5a4a3a" strokeWidth="0.2" />
          <circle cx="300" cy="300" r="80" stroke="#5a4a3a" strokeWidth="0.15" />
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
              className="section-title mb-14"
            >
              Our Special Day
            </motion.h2>

            <div className="flex justify-center gap-3 sm:gap-5 md:gap-8">
              {timeUnits.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, type: 'spring', damping: 15 }}
                  className="flex flex-col items-center"
                >
                  {/* Glass card */}
                  <div className="relative group">
                    <div className="w-[72px] h-[76px] sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl bg-white/40 backdrop-blur-xl shadow-[0_8px_32px_-8px_rgba(202,166,135,0.2)] border border-white/60 flex items-center justify-center group-hover:shadow-[0_12px_40px_-6px_rgba(202,166,135,0.3)] group-hover:border-white/80 transition-all duration-700">
                      {item.label === 'Seconds' ? (
                        <span className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-floral-deep tabular-nums tracking-tight">
                          {String(item.value).padStart(2, '0')}
                        </span>
                      ) : (
                        <motion.span
                          key={item.value}
                          initial={{ y: -8, opacity: 0 }}
                          animate={{ y: 0, opacity: 1 }}
                          transition={{ duration: 0.3 }}
                          className="font-serif text-3xl sm:text-5xl md:text-6xl font-light text-floral-deep tabular-nums tracking-tight"
                        >
                          {String(item.value).padStart(2, '0')}
                        </motion.span>
                      )}
                    </div>
                    {/* Glow dot on hover */}
                    <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-floral-gold/5 via-transparent to-floral-blush/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 -z-10 blur-sm" />
                  </div>
                  <span className="mt-3 text-[9px] sm:text-xs uppercase tracking-[0.25em] text-floral-taupe/70 font-sans font-light">
                    {item.label}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
