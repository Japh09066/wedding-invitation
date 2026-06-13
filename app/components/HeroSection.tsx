'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { useCountdown } from '@/app/hooks/useCountdown';

interface HeroSectionProps {
  coupleName?: string;
  weddingDate?: string;
  location?: string;
  onRSVPClick?: () => void;
}

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const fadeIn = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 1 } },
};

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.3 },
  },
};

export default function HeroSection({
  coupleName = 'Jay Sam & Laarnie',
  weddingDate = 'August 18, 2026',
  location = 'Pangasinan, Philippines',
  onRSVPClick,
}: HeroSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [name1, name2] = coupleName.split('&').map((s) => s.trim());
  const countdown = useCountdown();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const imageParallax = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);

  const timeUnits = [
    { value: countdown.days, label: 'Days' },
    { value: countdown.hours, label: 'Hrs' },
    { value: countdown.minutes, label: 'Min' },
    { value: countdown.seconds, label: 'Sec' },
  ];

  const handleScrollToDetails = () => {
    const el = document.getElementById('details');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-screen overflow-visible bg-floral-bg"
    >
      <div className="flex flex-col-reverse lg:flex-row h-full min-h-screen">
        {/* ─── Left: Text Side ─── */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          className="relative z-20 w-full lg:w-1/2 flex items-center justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-0"
        >
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Save the Date */}
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-8 h-px bg-floral-gold/60" />
              <span className="font-sans text-[11px] sm:text-[12px] uppercase tracking-[0.25em] text-floral-deep font-medium">
                Save the Date
              </span>
            </motion.div>

            {/* ─── Names — negative-margin overlap into photo zone ─── */}
            <motion.h1
              variants={fadeUp}
              className="font-['Playfair_Display',serif] leading-[1.05] lg:-mr-[22%] relative z-30"
            >
              <span className="block text-[clamp(48px,7vw,90px)] text-floral-deep font-light tracking-tight">
                {name1}
              </span>
              <span className="block text-[clamp(24px,3vw,40px)] text-floral-gold font-script font-normal my-1 lg:my-2">
                &amp;
              </span>
              <span className="block text-[clamp(48px,7vw,90px)] text-floral-deep font-light tracking-tight">
                {name2}
              </span>
            </motion.h1>

            {/* Decorative Divider */}
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-3 my-8"
            >
              <span className="block w-12 h-px bg-floral-gold/40" />
              <span className="block w-2 h-2 rounded-full bg-floral-gold/30" />
              <span className="block w-12 h-px bg-floral-gold/40" />
            </motion.div>

            {/* Date & Location */}
            <motion.div variants={fadeUp} className="space-y-2 mb-10">
              <p className="font-sans text-[14px] sm:text-[15px] uppercase tracking-[0.3em] text-floral-deep font-medium">
                {weddingDate}
              </p>
              {location && (
                <p className="font-serif text-[15px] sm:text-[16px] italic text-floral-taupe/90">
                  {location}
                </p>
              )}
            </motion.div>

            {/* Mini Countdown */}
            <motion.div variants={fadeIn} className="mb-10">
              <div className="inline-flex items-center gap-4 sm:gap-6 py-4 px-5 bg-white/80 backdrop-blur-sm rounded-xl border border-floral-cream">
                {timeUnits.map((unit, i) => (
                  <div key={unit.label} className="flex items-center gap-4 sm:gap-6">
                    <div className="text-center">
                      <span className="block font-serif text-xl sm:text-2xl text-floral-deep tabular-nums">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span className="block text-[9px] uppercase tracking-[0.2em] text-floral-deep font-sans font-medium mt-0.5">
                        {unit.label}
                      </span>
                    </div>
                    {i < timeUnits.length - 1 && (
                      <span className="text-floral-deep/60 font-medium text-lg">:</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ─── CTA: Text links with center-out underline ─── */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-8"
            >
              <button
                onClick={onRSVPClick}
                className="group relative font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-floral-deep hover:text-floral-deep transition-all duration-500 ease-in-out py-1"
              >
                RSVP
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-floral-gold group-hover:w-full transition-all duration-500 ease-in-out -translate-x-1/2" />
              </button>
              <button
                onClick={handleScrollToDetails}
                className="group relative font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-floral-deep font-medium hover:text-floral-deep transition-all duration-500 ease-in-out py-1"
              >
                View Details
                <span className="absolute bottom-0 left-1/2 w-0 h-px bg-floral-deep/80 group-hover:w-full transition-all duration-500 ease-in-out -translate-x-1/2" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Right: 3:4 Aspect Ratio Photo Frame ─── */}
        <div className="relative w-full lg:w-1/2 min-h-[50vh] lg:min-h-screen flex items-center justify-center lg:items-center overflow-visible">
          <div className="w-full max-w-[85%] sm:max-w-[70%] lg:max-w-none lg:w-[88%] xl:w-[82%] lg:-ml-[10%]">
            <div className="aspect-[3/4] w-full relative overflow-hidden rounded-sm shadow-[0_24px_72px_-20px_rgba(90,74,58,0.3)]">
              <motion.div
                style={{ y: imageParallax }}
                className="absolute inset-0"
              >
                <div
                  className="w-full h-full bg-cover bg-center"
                  style={{
                    backgroundImage: 'url(/images/couple-hero.png)',
                    backgroundPosition: 'center 30%',
                  }}
                />
              </motion.div>
              {/* Subtle frame border */}
              <div className="absolute inset-0 border border-white/10 pointer-events-none rounded-sm" />
            </div>
          </div>
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-8 z-20 flex flex-col items-start pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -5, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2.5, repeat: Infinity }}
          className="flex items-center gap-2"
        >
          <span className="block w-6 h-px bg-floral-deep/20" />
          <span className="font-sans text-[9px] uppercase tracking-[0.25em] text-floral-deep/30 font-light">
            Scroll
          </span>
        </motion.div>
      </motion.div>
    </section>
  );
}
