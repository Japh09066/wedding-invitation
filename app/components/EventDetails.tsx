'use client';

import { motion } from 'framer-motion';

interface EventDetailsProps {
  onRSVPClick?: () => void;
}

const events = [
  {
    id: 'ceremony',
    title: 'Wedding Ceremony',
    date: 'August 18, 2026',
    time: '9:00 AM',
    venue: 'Nava Seventh-Day Adventist Church',
    address: 'Nava, Hinunangan, Leyte, Philippines',
    icon: '⛪',
  },
  {
    id: 'reception',
    title: 'Reception Dinner',
    date: 'August 18, 2026',
    time: '12:00 NN',
    venue: 'Nava Municipal Gymnasium (tentative)',
    address: 'Nava, Hinunangan, Leyte, Philippines',
    icon: '🍽️',
  },
];

export default function EventDetails({ onRSVPClick }: EventDetailsProps) {
  return (
    <section id="events" className="section-padding bg-gradient-to-b from-floral-cream to-floral-bg relative overflow-hidden">
      {/* Background watermark — minimal */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.02]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="events-bg" x="0" y="0" width="350" height="350" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="40" fill="none" stroke="#5a4a3a" strokeWidth="0.6" />
              <circle cx="280" cy="250" r="55" fill="none" stroke="#5a4a3a" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#events-bg)" />
        </svg>
      </div>

      {/* Header */}
      <div className="section-container text-center mb-14 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          Join Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Event Details
        </motion.h2>
      </div>

      {/* Event cards */}
      <div className="section-container max-w-4xl relative z-10">
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, type: 'spring', damping: 18 }}
              whileHover={{ y: -4 }}
              className="bg-white/50 backdrop-blur-sm rounded-2xl shadow-[0_8px_30px_-6px_rgba(202,166,135,0.12)] border border-floral-cream/80 p-6 md:p-8 hover:shadow-[0_12px_40px_-8px_rgba(202,166,135,0.18)] hover:border-floral-taupe/15 transition-all duration-500"
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-floral-gold/10 to-floral-blush/20 flex items-center justify-center flex-shrink-0">
                  <span className="text-xl">{event.icon}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-floral-deep leading-tight">
                    {event.title}
                  </h3>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-x-4 gap-y-2">
                  <DetailPill label="Date" value={event.date} />
                  <DetailPill label="Time" value={event.time} />
                </div>
                <div>
                  <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-floral-gold block mb-0.5">Venue</span>
                  <p className="font-serif text-floral-deep text-sm md:text-base leading-snug">{event.venue}</p>
                  <p className="font-sans text-floral-taupe text-xs leading-snug mt-0.5">{event.address}</p>
                </div>
              </div>

              {/* Maps button */}
              <motion.a
                href={`https://www.google.com/maps/search/${encodeURIComponent(event.venue + ', ' + event.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 mt-5 px-5 py-2.5 bg-floral-deep hover:bg-floral-deep/90 text-white/90 hover:text-white rounded-full text-xs font-sans uppercase tracking-widest transition-all duration-300 shadow-md hover:shadow-lg"
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                View on Maps
              </motion.a>
            </motion.div>
          ))}
        </div>

        {/* RSVP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-14"
        >
          <p className="font-script text-xl text-floral-gold mb-3">
            Will you be joining us?
          </p>
          <motion.button
            onClick={onRSVPClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-3.5 bg-floral-gold hover:bg-floral-taupe text-white rounded-full font-serif text-base md:text-lg tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
          >
            RSVP Now
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

function DetailPill({ label, value }: { label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 bg-white/60 rounded-full px-4 py-1.5 border border-floral-cream/60">
      <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-floral-gold">{label}</span>
      <span className="font-serif text-floral-deep text-sm">{value}</span>
    </div>
  );
}
