'use client';

import { useState, useCallback } from 'react';
import Navigation from '@/app/components/Navigation';
import HeroSection from '@/app/components/HeroSection';

import OurStory from '@/app/components/OurStory';
import EventDetails from '@/app/components/EventDetails';
import EntourageSection from '@/app/components/EntourageSection';
import WeddingDetails from '@/app/components/WeddingDetails';
import FAQSection from '@/app/components/FAQSection';
import PhotoGallery from '@/app/components/PhotoGallery';
import RSVPForm from '@/app/components/RSVPForm';
import FloatingRSVP from '@/app/components/FloatingRSVP';
import MusicToggle from '@/app/components/MusicToggle';
import FloralDivider from '@/app/components/FloralDivider';
import Footer from '@/app/components/Footer';

export default function HomePage() {
  const [isRSVPModalOpen, setIsRSVPModalOpen] = useState(false);

  const handleFloatingRSVPClick = useCallback(() => {
    setIsRSVPModalOpen(true);
  }, []);

  return (
    <>
      {/* Main site content */}
      <div className="opacity-100">
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <HeroSection
          coupleName="Jay Sam & Laarnie"
          weddingDate="August 18, 2026"
          location=""
          onRSVPClick={handleFloatingRSVPClick}
        />

        {/* Our Story */}
        <OurStory />
        <FloralDivider variant="small" />

        {/* Event Details */}
        <EventDetails />
        <FloralDivider />

        {/* Entourage / Wedding Party */}
        <EntourageSection />
        <FloralDivider variant="small" />

        {/* Wedding Details */}
        <WeddingDetails />
        <FloralDivider />

        {/* FAQ Section */}
        <FAQSection />
        <FloralDivider variant="small" />

        {/* Photo Gallery */}
        <PhotoGallery />
        <FloralDivider />

        {/* RSVP Section */}
        <section id="rsvp" className="section-padding bg-gradient-to-b from-floral-cream to-floral-bg">
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
