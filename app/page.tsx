'use client';

import { useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import EnvelopeLanding from '@/app/components/EnvelopeLanding';
import Navigation from '@/app/components/Navigation';
import HeroSection from '@/app/components/HeroSection';
import CountdownTimer from '@/app/components/CountdownTimer';
import EventDetails from '@/app/components/EventDetails';
import FAQSection from '@/app/components/FAQSection';
import PhotoGallery from '@/app/components/PhotoGallery';
import RSVPForm from '@/app/components/RSVPForm';
import FloatingRSVP from '@/app/components/FloatingRSVP';
import MusicToggle from '@/app/components/MusicToggle';
import Footer from '@/app/components/Footer';
import { scrollToSection } from '@/app/lib/utils';

export default function HomePage() {
  const [showSite, setShowSite] = useState(false);
  const [showRSVPMenu, setShowRSVPMenu] = useState(false);
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const handleEnter = useCallback(() => {
    setShowSite(true);
    // Small delay then scroll to hero
    setTimeout(() => scrollToSection('home'), 500);
  }, []);

  const handleRSVPClick = useCallback(() => {
    setIsRSVPModalOpen(true);
  }, []);

  const handleFloatingRSVPClick = useCallback(() => {
    setIsRSVPModalOpen(true);
  }, []);

  return (
    <>
      {/* Envelope landing overlay */}
      <AnimatePresence>
        {!showSite && (
          <EnvelopeLanding
            onEnter={handleEnter}
            coupleName="Jay Sam & Laarnie"
            weddingDate="08.18.2026"
          />
        )}
      </AnimatePresence>

      {/* Main site content */}
      <div className={`transition-opacity duration-1000 ${showSite ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection
          onRSVPClick={handleRSVPClick}
          coupleName="Jay Sam & Laarnie"
          weddingDate="August 18, 2026"
        />

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Event Details */}
        <EventDetails onRSVPClick={handleRSVPClick} />

        {/* FAQ Section */}
        <FAQSection />

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* RSVP Section */}
        <section id="rsvp" className="section-padding bg-gradient-to-b from-floral-cream to-floral-bg">
          <div className="section-container text-center mb-12">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="font-script text-xl md:text-2xl text-floral-gold mb-3"
            >
              Will you join us?
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="section-title"
            >
              RSVP
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="font-sans text-floral-taupe text-sm"
            >
              Kindly respond by August 4, 2026
            </motion.p>
          </div>

          <div className="section-container max-w-xl">
            <RSVPForm />
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Floating elements */}
        <FloatingRSVP onClick={handleFloatingRSVPClick} />
        <MusicToggle />

        {/* RSVP Modal */}
        {isRSVPModalOpen && (
          <RSVPForm
            isModal
            onClose={() => setIsRSVPModalOpen(false)}
            onSuccess={() => {
              setTimeout(() => setIsRSVPModalOpen(false), 4000);
            }}
          />
        )}
      </div>
    </>
  );
}

