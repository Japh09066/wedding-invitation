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
    address: 'Nava, San Andres, Catanduanes, Philippines',
    dress: 'Semi-Formal / Barong',
  },
  {
    id: 'reception',
    title: 'Reception Dinner',
    date: 'August 18, 2026',
    time: '12:00 NN',
    venue: 'Nava Municipal Gymnasium (tentative)',
    address: 'Nava, San Andres, Catanduanes, Philippines',
    dress: 'Semi-Formal / Barong',
  },
];

export default function EventDetails({ onRSVPClick }: EventDetailsProps) {
  return (
    <section id="events" className="section-padding bg-gradient-to-b from-floral-cream to-floral-bg relative overflow-hidden">
      {/* Background watermark */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.025]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="events-bg" x="0" y="0" width="350" height="350" patternUnits="userSpaceOnUse">
              <circle cx="100" cy="100" r="40" fill="none" stroke="#5a4a3a" strokeWidth="0.6" />
              <circle cx="280" cy="250" r="55" fill="none" stroke="#5a4a3a" strokeWidth="0.5" />
              <circle cx="180" cy="320" r="30" fill="none" stroke="#5a4a3a" strokeWidth="0.4" />
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
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{ y: -3 }}
              className="card-elegant group"
            >
              {/* Header with icon */}
              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-floral-gold/10 to-floral-blush/20 flex items-center justify-center flex-shrink-0 group-hover:from-floral-gold/15 group-hover:to-floral-blush/30 transition-all duration-300">
                  <span className="text-xl">{index === 0 ? '⛪' : '🍽️'}</span>
                </div>
                <div>
                  <h3 className="font-serif text-xl md:text-2xl text-floral-deep leading-tight">
                    {event.title}
                  </h3>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="block h-px w-6 bg-floral-gold/30" />
                    <span className="text-floral-gold/50 text-[10px]">✦</span>
                    <span className="block h-px w-6 bg-floral-gold/30" />
                  </div>
                </div>
              </div>

              {/* Details */}
              <div className="space-y-2.5">
                <DetailRow label="Date" value={event.date} />
                <DetailRow label="Time" value={event.time} />
                <DetailRow label="Venue" value={event.venue} />
                <DetailRow label="Address" value={event.address} />
                <DetailRow label="Dress Code" value={event.dress} />
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

        {/* Embedded map */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 card-elegant p-5 md:p-6"
        >
          <h3 className="font-serif text-lg text-floral-deep mb-3 text-center">
            Venue Location
          </h3>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-floral-cream/60 shadow-inner">
            <iframe
              title="Venue Maps"
              src={
                process.env.NEXT_PUBLIC_MAPS_URL ||
                'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3861.7!2d121.0!3d14.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTTCsDMwJzAwLjAiTiAxMjHCsDAwJzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1'
              }
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>

        {/* RSVP CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-script text-xl text-floral-gold mb-3">
            Will you be joining us?
          </p>
          <motion.button
            onClick={onRSVPClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-primary"
          >
            RSVP Now
          </motion.button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="divider-floral mt-16 relative z-10">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-floral-gold min-w-[72px] pt-0.5 flex-shrink-0">
        {label}
      </span>
      <span className="font-serif text-floral-deep text-sm md:text-base leading-snug">{value}</span>
    </div>
  );
}
