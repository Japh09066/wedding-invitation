'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder photos — using picsum.photos for beautiful random images
// Replace these with your actual wedding photos!
const galleryImages = [
  {
    id: 1,
    src: 'https://picsum.photos/seed/wedding-couple/1200/800',
    thumb: 'https://picsum.photos/seed/wedding-couple/600/400',
    alt: 'Bride and Groom Portrait',
    width: 1200,
    height: 800,
    featured: true, // This one is the hero image
  },
  {
    id: 2,
    src: 'https://picsum.photos/seed/wedding-bouquet/800/1000',
    thumb: 'https://picsum.photos/seed/wedding-bouquet/400/500',
    alt: 'Bridal Bouquet Details',
    width: 800,
    height: 1000,
  },
  {
    id: 3,
    src: 'https://picsum.photos/seed/wedding-arch/800/600',
    thumb: 'https://picsum.photos/seed/wedding-arch/400/300',
    alt: 'Ceremony Arch',
    width: 800,
    height: 600,
  },
  {
    id: 4,
    src: 'https://picsum.photos/seed/wedding-rings/800/800',
    thumb: 'https://picsum.photos/seed/wedding-rings/400/400',
    alt: 'Wedding Rings',
    width: 800,
    height: 800,
  },
  {
    id: 5,
    src: 'https://picsum.photos/seed/wedding-reception/800/600',
    thumb: 'https://picsum.photos/seed/wedding-reception/400/300',
    alt: 'Reception Setup',
    width: 800,
    height: 600,
  },
  {
    id: 6,
    src: 'https://picsum.photos/seed/wedding-dance/800/1000',
    thumb: 'https://picsum.photos/seed/wedding-dance/400/500',
    alt: 'First Dance',
    width: 800,
    height: 1000,
  },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const heroImage = galleryImages.find((img) => img.featured);
  const gridImages = galleryImages.filter((img) => !img.featured);

  return (
    <section id="gallery" className="section-padding bg-floral-bg relative overflow-hidden">
      {/* Background floral outlines (subtle) */}
      <div className="absolute inset-0 pointer-events-none">
        <svg className="w-full h-full opacity-5" preserveAspectRatio="none">
          <defs>
            <pattern id="gallery-floral-bg" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <circle cx="80" cy="80" r="40" fill="none" stroke="#5a4a3a" strokeWidth="0.5" />
              <circle cx="320" cy="200" r="55" fill="none" stroke="#5a4a3a" strokeWidth="0.5" />
              <circle cx="150" cy="320" r="30" fill="none" stroke="#5a4a3a" strokeWidth="0.5" />
              <circle cx="280" cy="60" r="25" fill="none" stroke="#5a4a3a" strokeWidth="0.3" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-floral-bg)" />
        </svg>
      </div>

      {/* Decorative header */}
      <div className="section-container text-center mb-12 relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-script text-xl md:text-2xl text-floral-gold mb-3"
        >
          Our Moments
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-title"
        >
          Photo Gallery
        </motion.h2>
      </div>

      <div className="section-container max-w-5xl relative z-10">
        {/* Hero Image */}
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6"
          >
            <button
              onClick={() => setSelectedImage(heroImage.id)}
              className="group relative w-full block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
            >
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                loading="eager"
                style={{ maxHeight: '65vh' }}
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              {/* View label */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="text-white text-sm tracking-widest uppercase bg-black/30 px-6 py-2 rounded-full backdrop-blur-sm">
                  Click to View
                </span>
              </div>
            </button>
          </motion.div>
        )}

        {/* Grid Images */}
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {gridImages.map((img, index) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className={index % 3 === 0 ? 'col-span-2' : 'col-span-1'}
            >
              <button
                onClick={() => setSelectedImage(img.id)}
                className="group relative w-full block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
              >
                <img
                  src={img.thumb}
                  alt={img.alt}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                  style={{
                    aspectRatio: img.width / img.height,
                  }}
                />
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                {/* View label */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white text-xs tracking-widest uppercase bg-black/30 px-4 py-1.5 rounded-full backdrop-blur-sm">
                    View
                  </span>
                </div>
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="relative max-w-4xl w-full max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const img = galleryImages.find((i) => i.id === selectedImage);
                if (!img) return null;
                return (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full h-auto max-h-[85vh] object-contain"
                    />
                    <p className="absolute bottom-0 left-0 right-0 text-center text-white/80 text-sm py-3 bg-gradient-to-t from-black/50 to-transparent font-serif">
                      {img.alt}
                    </p>
                  </div>
                );
              })()}

              {/* Navigation arrows */}
              <button
                onClick={() => {
                  const current = galleryImages.findIndex((i) => i.id === selectedImage);
                  const prev = (current - 1 + galleryImages.length) % galleryImages.length;
                  setSelectedImage(galleryImages[prev].id);
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const current = galleryImages.findIndex((i) => i.id === selectedImage);
                  const next = (current + 1) % galleryImages.length;
                  setSelectedImage(galleryImages[next].id);
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a4a3a" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Image counter */}
              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white/80 text-xs font-sans">
                {galleryImages.findIndex((i) => i.id === selectedImage) + 1} / {galleryImages.length}
              </div>

              {/* Dot navigation */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((img) => (
                  <button
                    key={img.id}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedImage(img.id);
                    }}
                    className={'w-2 h-2 rounded-full transition-all duration-300 ' +
                      (img.id === selectedImage
                        ? 'bg-floral-gold w-6'
                        : 'bg-white/40 hover:bg-white/60')
                    }
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Divider */}
      <div className="divider-floral mt-16 relative z-10">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}
