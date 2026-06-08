'use client';

import { useState, useCallback } from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/app/components/Navigation';
import HeroSection from '@/app/components/HeroSection';
import CountdownTimer from '@/app/components/CountdownTimer';
import OurStory from '@/app/components/OurStory';
import EventDetails from '@/app/components/EventDetails';
import EntourageSection from '@/app/components/EntourageSection';
import FAQSection from '@/app/components/FAQSection';
import PhotoGallery from '@/app/components/PhotoGallery';
import RSVPForm from '@/app/components/RSVPForm';
import FloatingRSVP from '@/app/components/FloatingRSVP';
import MusicToggle from '@/app/components/MusicToggle';
import Footer from '@/app/components/Footer';

export default function HomePage() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const handleRSVPClick = useCallback(() => {
    setIsRSVPModalOpen(true);
  }, []);

  const handleFloatingRSVPClick = useCallback(() => {
    setIsRSVPModalOpen(true);
  }, []);

  return (
    <>
      {/* Main site content */}
      <div className="opacity-100">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section with full-screen photo */}
        <HeroSection
          onRSVPClick={handleRSVPClick}
          coupleName="Jay Sam & Laarnie"
          weddingDate="August 18, 2026"
        />

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Our Story */}
        <OurStory />

        {/* Event Details */}
        <EventDetails onRSVPClick={handleRSVPClick} />

        {/* Entourage / Wedding Party */}
        <EntourageSection />

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
              className="heading-script mb-3"
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
