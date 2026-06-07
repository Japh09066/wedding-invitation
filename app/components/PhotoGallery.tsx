'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: number;
  gradient: string;
  alt: string;
  icon: string;
  featured?: boolean;
  aspectRatio: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: 1,
    gradient: 'from-rose-200/60 via-floral-blush to-sage-200/40',
    alt: 'Bride & Groom Portrait',
    icon: '💑',
    featured: true,
    aspectRatio: '3/2',
  },
  {
    id: 2,
    gradient: 'from-floral-blush/80 via-rose-100/50 to-amber-100/40',
    alt: 'Bridal Bouquet',
    icon: '💐',
    aspectRatio: '2/3',
  },
  {
    id: 3,
    gradient: 'from-sage-200/60 via-floral-cream to-floral-gold/30',
    alt: 'Ceremony Setup',
    icon: '⛪',
    aspectRatio: '4/3',
  },
  {
    id: 4,
    gradient: 'from-amber-200/50 via-floral-blush/60 to-rose-200/40',
    alt: 'Wedding Rings',
    icon: '💍',
    aspectRatio: '1/1',
  },
  {
    id: 5,
    gradient: 'from-floral-gold/30 via-amber-100/40 to-floral-cream',
    alt: 'Reception Décor',
    icon: '🎊',
    aspectRatio: '4/3',
  },
  {
    id: 6,
    gradient: 'from-sage-200/50 via-floral-cream to-rose-200/50',
    alt: 'First Dance',
    icon: '💃',
    aspectRatio: '2/3',
  },
  {
    id: 7,
    gradient: 'from-rose-300/40 via-floral-blush/60 to-amber-100/30',
    alt: 'Wedding Cake',
    icon: '🎂',
    aspectRatio: '4/3',
  },
  {
    id: 8,
    gradient: 'from-amber-200/40 via-sage-200/30 to-floral-cream',
    alt: 'Venue Details',
    icon: '🏛️',
    aspectRatio: '4/3',
  },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const heroImage = galleryImages.find((img) => img.featured);
  const gridImages = galleryImages.filter((img) => !img.featured);

  // Show 2-column grid: first grid item spans full width, then pairs
  const pairedGrid: GalleryImage[][] = [];
  for (let i = 0; i < gridImages.length; i += 2) {
    pairedGrid.push(gridImages.slice(i, i + 2));
  }

  return (
    <section id="gallery" className="section-padding bg-floral-bg relative overflow-hidden">
      {/* Background floral outlines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="gallery-floral-bg" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <circle cx="80" cy="80" r="40" fill="none" stroke="#5a4a3a" strokeWidth="1" />
              <circle cx="320" cy="200" r="55" fill="none" stroke="#5a4a3a" strokeWidth="0.8" />
              <circle cx="150" cy="320" r="30" fill="none" stroke="#5a4a3a" strokeWidth="0.6" />
              <circle cx="280" cy="60" r="35" fill="none" stroke="#5a4a3a" strokeWidth="0.4" />
              <circle cx="50" cy="200" r="20" fill="none" stroke="#5a4a3a" strokeWidth="0.5" />
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
        {/* Hero Featured Image */}
        {heroImage && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-6 md:mb-8"
          >
            <button
              onClick={() => setSelectedImage(heroImage.id)}
              className="group relative w-full block overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500"
              style={{ aspectRatio: heroImage.featured ? '16/9' : heroImage.aspectRatio }}
            >
              <div
                className={`w-full h-full bg-gradient-to-br ${heroImage.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}
              >
                <div className="text-center p-8">
                  <span className="text-6xl md:text-7xl block mb-4">{heroImage.icon}</span>
                  <span className="font-serif text-2xl md:text-3xl text-floral-deep/70">
                    {heroImage.alt}
                  </span>
                </div>
              </div>
              {/* Overlay */}
              <div className="absolute inset-0 bg-floral-deep/0 group-hover:bg-floral-deep/15 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-sm tracking-widest uppercase bg-black/20 px-5 py-2 rounded-full backdrop-blur-sm">
                  Click to Enlarge
                </span>
              </div>
            </button>
          </motion.div>
        )}

        {/* Gallery Grid — 2 columns */}
        <div className="space-y-4 md:space-y-6">
          {pairedGrid.map((pair, rowIndex) => (
            <div
              key={rowIndex}
              className="grid grid-cols-2 gap-4 md:gap-6"
            >
              {pair.map((img, colIndex) => (
                <motion.div
                  key={img.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (rowIndex * 2 + colIndex) * 0.07 }}
                >
                  <button
                    onClick={() => setSelectedImage(img.id)}
                    className="group relative w-full block overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500"
                    style={{ aspectRatio: img.aspectRatio }}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${img.gradient} flex items-center justify-center transition-transform duration-700 group-hover:scale-105`}
                    >
                      <div className="text-center p-4">
                        <span className="text-4xl md:text-5xl block mb-2">{img.icon}</span>
                        <span className="font-script text-lg md:text-xl text-floral-deep/60">
                          {img.alt}
                        </span>
                      </div>
                    </div>
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-floral-deep/0 group-hover:bg-floral-deep/10 transition-all duration-300 flex items-center justify-center">
                      <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-xs tracking-widest uppercase bg-black/20 px-4 py-1.5 rounded-full backdrop-blur-sm">
                        View
                      </span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        {/* Image count */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 font-sans text-xs tracking-widest text-floral-taupe/50 uppercase"
        >
          {galleryImages.length} Photos &middot; Click to Explore
        </motion.p>
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
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const img = galleryImages.find((i) => i.id === selectedImage);
                if (!img) return null;
                return (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <div
                      className={`w-full bg-gradient-to-br ${img.gradient} flex items-center justify-center`}
                      style={{ aspectRatio: img.featured ? '16/10' : img.aspectRatio, minHeight: '300px' }}
                    >
                      <div className="text-center p-12">
                        <motion.span
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{ type: 'spring', damping: 10, stiffness: 200 }}
                          className="text-8xl block mb-6"
                        >
                          {img.icon}
                        </motion.span>
                        <span className="font-serif text-3xl text-floral-deep/70 block mb-2">
                          {img.alt}
                        </span>
                        <span className="font-sans text-xs tracking-widest text-floral-deep/40 uppercase">
                          Jay Sam &amp; Laarnie
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })()}

              {/* Navigation arrows */}
              <button
                onClick={() => {
                  const ids = galleryImages.map((i) => i.id);
                  const current = ids.indexOf(selectedImage);
                  const prev = (current - 1 + ids.length) % ids.length;
                  setSelectedImage(ids[prev]);
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all duration-300"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={() => {
                  const ids = galleryImages.map((i) => i.id);
                  const current = ids.indexOf(selectedImage);
                  const next = (current + 1) % ids.length;
                  setSelectedImage(ids[next]);
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
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      img.id === selectedImage
                        ? 'bg-floral-gold w-6'
                        : 'bg-white/40 hover:bg-white/60'
                    }`}
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
