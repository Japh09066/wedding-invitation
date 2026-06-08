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
    <section className="relative py-20 md:py-28 overflow-hidden bg-gradient-to-b from-floral-cream via-floral-bg to-floral-cream">
      {/* Background decoration — concentric rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04]">
        <svg className="w-full max-w-2xl" viewBox="0 0 600 600" fill="none">
          <circle cx="300" cy="300" r="280" stroke="#253d5b" strokeWidth="0.6" />
          <circle cx="300" cy="300" r="230" stroke="#253d5b" strokeWidth="0.5" />
          <circle cx="300" cy="300" r="180" stroke="#253d5b" strokeWidth="0.4" />
          <circle cx="300" cy="300" r="130" stroke="#253d5b" strokeWidth="0.3" />
          <circle cx="300" cy="300" r="80" stroke="#253d5b" strokeWidth="0.2" />
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

            <div className="flex justify-center gap-3 sm:gap-4 md:gap-6">
              {timeUnits.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex flex-col items-center group"
                >
                  {/* Card */}
                  <div className="relative">
                    <div className="w-[68px] h-[72px] sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-xl bg-white/70 backdrop-blur-sm shadow-[0_4px_20px_-8px_rgba(202,166,135,0.3)] border border-[#caa687]/15 flex items-center justify-center group-hover:shadow-[0_8px_30px_-6px_rgba(202,166,135,0.4)] group-hover:border-[#caa687]/30 transition-all duration-500">
                      <span className="font-serif text-2xl sm:text-4xl md:text-5xl text-[#253d5b] tabular-nums tracking-tight">
                        {String(item.value).padStart(2, '0')}
                      </span>
                    </div>
                    {/* Subtle accent dot */}
                    {i < timeUnits.length - 1 && (
                      <span className="absolute -right-[10px] sm:-right-[14px] top-1/2 -translate-y-1/2 text-[#caa687]/20 text-[8px] sm:text-xs hidden sm:block">
                        :
                      </span>
                    )}
                  </div>
                  {/* Label */}
                  <span className="mt-2 text-[9px] sm:text-xs uppercase tracking-[0.25em] text-[#caa687]/70 font-['Inter',sans-serif] font-light">
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
