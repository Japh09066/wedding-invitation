'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '@/app/lib/utils';

const navItems = [
  { label: 'Home', target: 'home' },
  { label: 'Story', target: 'story' },
  { label: 'Events', target: 'events' },
  { label: 'Entourage', target: 'entourage' },
  { label: 'FAQs', target: 'faq' },
  { label: 'Gallery', target: 'gallery' },
  { label: 'RSVP', target: 'rsvp' },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Scroll progress
      const docEl = document.documentElement;
      const scrollTop = window.scrollY;
      const docHeight = docEl.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? Math.min(scrollTop / docHeight, 1) : 0);

      // Active section
      const scrollPos = window.scrollY + 120;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.getElementById(navItems[i].target);
        if (section && section.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].target);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (target: string) => {
    scrollToSection(target);
    setIsMobileOpen(false);
  };

  return (
    <>
      {/* ─── Scroll Progress Bar ─── */}
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-[3px] bg-transparent"
        style={{ transformOrigin: '0% 50%' }}
      >
        <motion.div
          className="h-full bg-gradient-to-r from-floral-gold/60 via-floral-gold to-floral-taupe"
          style={{ scaleX: scrollProgress }}
        />
      </motion.div>

      {/* ─── Desktop navigation ─── */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/85 backdrop-blur-lg shadow-sm border-b border-floral-cream/60'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-10">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleNavClick(item.target)}
                  className={`font-sans text-[10px] uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                    activeSection === item.target
                      ? 'text-floral-gold'
                      : 'text-floral-deep/60 hover:text-floral-deep'
                  }`}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.span
                      layoutId="nav-indicator"
                      className="absolute -bottom-0.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-floral-gold"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-4">
                <motion.span
                  animate={isMobileOpen ? { rotate: 45, y: 7 } : { rotate: 0, y: 0 }}
                  className="absolute top-0 left-0 w-full h-0.5 bg-floral-deep rounded-full"
                />
                <motion.span
                  animate={isMobileOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="absolute top-[7px] left-0 w-full h-0.5 bg-floral-deep rounded-full"
                />
                <motion.span
                  animate={isMobileOpen ? { rotate: -45, y: -7 } : { rotate: 0, y: 0 }}
                  className="absolute bottom-0 left-0 w-full h-0.5 bg-floral-deep rounded-full"
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/40 backdrop-blur-sm md:hidden"
            onClick={() => setIsMobileOpen(false)}
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="absolute right-0 top-0 h-full w-72 bg-white shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="pt-24 px-8">
                {navItems.map((item, i) => (
                  <motion.button
                    key={item.target}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => handleNavClick(item.target)}
                    className={`block w-full text-left py-3.5 border-b border-floral-cream/60 font-sans text-sm uppercase tracking-widest transition-colors ${
                      activeSection === item.target
                        ? 'text-floral-gold'
                        : 'text-floral-deep/60 hover:text-floral-deep'
                    }`}
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
