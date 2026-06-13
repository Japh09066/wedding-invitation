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

  const imageParallax = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const textOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const timeUnits = [
    { value: countdown.days, label: 'Days' },
    { value: countdown.hours, label: 'Hrs' },
    { value: countdown.minutes, label: 'Min' },
    { value: countdown.seconds, label: 'Sec' },
  ];

  const handleScrollToDetails = () => {
    const el = document.getElementById('our-story');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative w-full min-h-screen overflow-hidden bg-floral-bg"
    >
      {/* ─── Split Layout ─── */}
      <div className="flex flex-col-reverse lg:flex-row h-full min-h-screen">
        {/* ─── Left: Text Side ─── */}
        <motion.div
          initial="hidden"
          animate="show"
          variants={stagger}
          style={{ opacity: textOpacity as unknown as number }}
          className="relative z-10 w-full lg:w-[55%] xl:w-[58%] flex items-center justify-center px-6 sm:px-12 lg:px-16 xl:px-20 py-20 lg:py-0"
        >
          <div className="w-full max-w-xl mx-auto lg:mx-0">
            {/* Save the Date label */}
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-3 mb-6"
            >
              <span className="block w-8 h-px bg-floral-gold/60" />
              <span className="font-sans text-[10px] sm:text-[11px] uppercase tracking-[0.25em] text-floral-taupe/70 font-light">
                Save the Date
              </span>
            </motion.div>

            {/* ─── Names ─── */}
            <motion.h1
              variants={fadeUp}
              className="font-['Playfair_Display',serif] leading-[1.1]"
            >
              <span className="block text-[clamp(44px,6vw,80px)] text-floral-deep font-light tracking-tight">
                {name1}
              </span>
              <span className="block text-[clamp(22px,2.5vw,36px)] text-floral-gold font-script font-normal my-1 -ml-1">
                &amp;
              </span>
              <span className="block text-[clamp(44px,6vw,80px)] text-floral-deep font-light tracking-tight">
                {name2}
              </span>
            </motion.h1>

            {/* ─── Decorative Divider ─── */}
            <motion.div
              variants={fadeIn}
              className="flex items-center gap-3 my-8"
            >
              <span className="block w-12 h-px bg-floral-gold/40" />
              <span className="block w-2 h-2 rounded-full bg-floral-gold/30" />
              <span className="block w-12 h-px bg-floral-gold/40" />
            </motion.div>

            {/* ─── Date & Location ─── */}
            <motion.div variants={fadeUp} className="space-y-2 mb-10">
              <p className="font-sans text-[13px] sm:text-[14px] uppercase tracking-[0.3em] text-floral-deep/80 font-light">
                {weddingDate}
              </p>
              <p className="font-serif text-[15px] sm:text-[16px] italic text-floral-taupe/80">
                {location}
              </p>
            </motion.div>

            {/* ─── Mini Countdown ─── */}
            <motion.div
              variants={fadeIn}
              className="mb-10"
            >
              <div className="inline-flex items-center gap-4 sm:gap-6 py-4 px-5 bg-white/50 backdrop-blur-sm rounded-xl border border-floral-cream/80">
                {timeUnits.map((unit, i) => (
                  <div key={unit.label} className="flex items-center gap-4 sm:gap-6">
                    <div className="text-center">
                      <span className="block font-serif text-xl sm:text-2xl text-floral-deep tabular-nums">
                        {String(unit.value).padStart(2, '0')}
                      </span>
                      <span className="block text-[8px] uppercase tracking-[0.2em] text-floral-taupe/60 font-sans font-light mt-0.5">
                        {unit.label}
                      </span>
                    </div>
                    {i < timeUnits.length - 1 && (
                      <span className="text-floral-taupe/30 font-light text-lg">:</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>

            {/* ─── CTA Buttons ─── */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-5"
            >
              <button
                onClick={onRSVPClick}
                className="group relative px-9 py-3.5 bg-floral-gold hover:bg-floral-taupe text-white rounded-full font-sans text-xs sm:text-sm uppercase tracking-[0.2em] font-medium transition-all duration-500 ease-in-out shadow-lg shadow-floral-gold/20 hover:shadow-xl hover:shadow-floral-taupe/25 hover:-translate-y-0.5"
              >
                RSVP
                <span className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
              <button
                onClick={handleScrollToDetails}
                className="group relative font-sans text-xs sm:text-sm uppercase tracking-[0.2em] text-floral-deep/70 hover:text-floral-deep transition-all duration-500 ease-in-out py-2"
              >
                View Details
                <span className="absolute bottom-0 left-0 w-full h-px bg-floral-deep/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out origin-left" />
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* ─── Right: Photo Side ─── */}
        <div className="relative w-full lg:w-[45%] xl:w-[42%] h-[50vh] sm:h-[55vh] lg:h-screen overflow-hidden">
          {/* Photo with parallax */}
          <motion.div
            style={{ y: imageParallax }}
            className="absolute inset-0"
            aria-hidden="true"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: 'url(/images/couple-hero.png)',
                backgroundPosition: 'center 30%',
              }}
            />
          </motion.div>

          {/* Gradient overlay to blend text into photo edge */}
          <div className="absolute inset-0 bg-gradient-to-r from-floral-bg/60 via-transparent to-transparent lg:from-floral-bg/80 lg:via-transparent lg:to-transparent pointer-events-none" />

          {/* Bottom gradient for mobile transition */}
          <div className="absolute inset-0 bg-gradient-to-t from-floral-bg via-floral-bg/60 to-transparent lg:hidden pointer-events-none" />
        </div>
      </div>

      {/* ─── Scroll Indicator ─── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-8 lg:left-[55%] xl:left-[58%] flex flex-col items-start pointer-events-none z-20"
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
