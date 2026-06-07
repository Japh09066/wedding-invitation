'use client';

import { motion } from 'framer-motion';

interface EventDetailsProps {
  onRSVPClick?: () => void;
}

const events = [
  {
    id: 'ceremony',
    title: 'Wedding Ceremony',
    date: 'March 31, 2026',
    time: '2:00 PM',
    venue: 'Sanctuario de San Antonio',
    address: 'Forbes Park, Makati City, Philippines',
    dress: 'Cocktail Attire',
    icon: '⛪',
    color: 'from-rose-100 to-rose-50',
  },
  {
    id: 'reception',
    title: 'Reception Dinner',
    date: 'March 31, 2026',
    time: '5:00 PM',
    venue: 'The Peninsula Manila',
    address: 'Corner of Ayala and Makati Avenues, Makati City',
    dress: 'Cocktail Attire',
    icon: '🍽️',
    color: 'from-sage-100 to-sage-50',
  },
];

export default function EventDetails({ onRSVPClick }: EventDetailsProps) {
  return (
    <section id="events" className="section-padding bg-gradient-to-b from-floral-cream to-floral-bg">
      {/* Decorative header */}
      <div className="section-container text-center mb-16">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          Join Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Event Details
        </motion.h2>
      </div>

      <div className="section-container max-w-4xl">
        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -4 }}
              className="card group"
            >
              {/* Icon */}
              <div className="text-4xl mb-4">{event.icon}</div>

              {/* Title */}
              <h3 className="font-serif text-2xl text-floral-deep mb-4">
                {event.title}
              </h3>

              {/* Details */}
              <div className="space-y-3">
                <DetailRow label="Date" value={event.date} />
                <DetailRow label="Time" value={event.time} />
                <DetailRow label="Venue" value={event.venue} />
                <DetailRow label="Address" value={event.address} />
                <DetailRow label="Dress Code" value={event.dress} />
              </div>

              {/* Google Maps button */}
              <a
                href={`https://www.google.com/maps/search/${encodeURIComponent(event.venue + ', ' + event.address)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-5 py-2.5 bg-floral-deep hover:bg-floral-deep/90 text-white rounded-full text-sm font-sans tracking-wide transition-colors duration-300"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                View on Maps
              </a>
            </motion.div>
          ))}
        </div>

        {/* Embedded Google Maps section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 card"
        >
          <h3 className="font-serif text-xl text-floral-deep mb-4 text-center">
            Venue Location
          </h3>
          <div className="aspect-video w-full rounded-xl overflow-hidden border border-floral-cream">
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
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="font-script text-xl text-floral-gold mb-4">
            Will you be joining us?
          </p>
          <button
            onClick={onRSVPClick}
            className="px-10 py-3.5 bg-floral-gold hover:bg-floral-taupe text-white rounded-full font-serif text-lg tracking-wider shadow-lg hover:shadow-xl transition-all duration-300"
          >
            RSVP Now
          </button>
        </motion.div>
      </div>

      {/* Divider */}
      <div className="divider-floral mt-16">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start gap-3">
      <span className="font-sans text-xs uppercase tracking-widest text-floral-gold min-w-[80px] pt-0.5">
        {label}
      </span>
      <span className="font-serif text-floral-deep">{value}</span>
    </div>
  );
}
