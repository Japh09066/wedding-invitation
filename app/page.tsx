'use client';

import Navigation from '@/app/components/Navigation';
import HeroSection from '@/app/components/HeroSection';
import CountdownTimer from '@/app/components/CountdownTimer';
import OurStory from '@/app/components/OurStory';
import EventDetails from '@/app/components/EventDetails';
import EntourageSection from '@/app/components/EntourageSection';
import WeddingDetails from '@/app/components/WeddingDetails';
import FAQSection from '@/app/components/FAQSection';
import PhotoGallery from '@/app/components/PhotoGallery';
import RSVPForm from '@/app/components/RSVPForm';
import MusicToggle from '@/app/components/MusicToggle';
import Footer from '@/app/components/Footer';

export default function HomePage() {
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
        />

        {/* Countdown Timer */}
        <CountdownTimer />

        {/* Our Story */}
        <OurStory />

        {/* Event Details */}
        <EventDetails />

        {/* Entourage / Wedding Party */}
        <EntourageSection />

        {/* Wedding Details */}
        <WeddingDetails />

        {/* FAQ Section */}
        <FAQSection />

        {/* Photo Gallery */}
        <PhotoGallery />

        {/* RSVP Section */}
        <section id="rsvp" className="section-padding bg-gradient-to-b from-floral-cream to-floral-bg">
          <div className="section-container text-center mb-12">
            <p className="font-script text-xl md:text-2xl text-floral-gold mb-3">
              Will you join us?
            </p>
            <h2 className="section-title">
              RSVP
            </h2>
            <p className="font-sans text-floral-taupe text-sm">
              Kindly respond by July 01, 2026
            </p>
          </div>

          <div className="section-container max-w-xl">
            <RSVPForm />
          </div>
        </section>

        {/* Footer */}
        <Footer />

        {/* Floating elements */}
        <MusicToggle />
      </div>
    </>
  );
}
