'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { scrollToSection } from '@/app/lib/utils';

const navItems = [
  { label: 'Home', target: 'home' },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);

      // Determine active section
      const sections = navItems.map((item) => document.getElementById(item.target));
      const scrollPos = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
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
      {/* Desktop navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-floral-cream'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Brand */}
            <button
              onClick={() => handleNavClick('home')}
              className="font-script text-xl md:text-2xl text-floral-gold hover:text-floral-taupe transition-colors"
            >
              Jay Sam &amp; Laarnie
            </button>

            {/* Desktop menu */}
            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.target}
                  onClick={() => handleNavClick(item.target)}
                  className={`font-sans text-xs uppercase tracking-[0.2em] transition-all duration-300 relative py-2 ${
                    activeSection === item.target
                      ? 'text-floral-gold'
                      : 'text-floral-deep/70 hover:text-floral-deep'
                  }`}
                >
                  {item.label}
                  {activeSection === item.target && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-floral-gold"
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
            className="fixed inset-0 z-30 bg-black/30 backdrop-blur-sm md:hidden"
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
                    transition={{ delay: i * 0.05 }}
                    onClick={() => handleNavClick(item.target)}
                    className={`block w-full text-left py-4 border-b border-floral-cream font-sans text-sm uppercase tracking-widest transition-colors ${
                      activeSection === item.target
                        ? 'text-floral-gold'
                        : 'text-floral-deep/70'
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
