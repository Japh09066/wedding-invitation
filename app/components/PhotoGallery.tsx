'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: number;
  src: string;
  alt: string;
  aspectRatio: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: '/images/gallery-01.jpg', alt: 'Bride & Groom', aspectRatio: '16/9' },
  { id: 2, src: '/images/gallery-02.jpg', alt: 'The Bridal Bouquet', aspectRatio: '3/4' },
  { id: 3, src: '/images/gallery-03.jpg', alt: 'Ceremony Setup', aspectRatio: '4/3' },
  { id: 4, src: '/images/gallery-04.jpg', alt: 'Wedding Rings', aspectRatio: '1/1' },
  { id: 5, src: '/images/gallery-05.jpg', alt: 'Reception Décor', aspectRatio: '4/3' },
  { id: 6, src: '/images/gallery-06.jpg', alt: 'First Dance', aspectRatio: '3/4' },
  { id: 7, src: '/images/gallery-07.jpg', alt: 'Wedding Cake', aspectRatio: '4/3' },
  { id: 8, src: '/images/gallery-08.jpg', alt: 'Venue Details', aspectRatio: '4/3' },
  { id: 9, src: '/images/gallery-09.jpg', alt: 'Family Portrait', aspectRatio: '4/3' },
  { id: 10, src: '/images/gallery-10.jpg', alt: 'Best Moments', aspectRatio: '4/3' },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  const heroImage = galleryImages[0];
  const gridImages = galleryImages.slice(1);

  const pairedGrid: GalleryImage[][] = [];
  for (let i = 0; i < gridImages.length; i += 2) {
    pairedGrid.push(gridImages.slice(i, i + 2));
  }

  const handleImageLoad = (id: number) => {
    setLoadedImages((prev) => new Set(prev).add(id));
  };

  return (
    <section id="gallery" className="section-padding bg-floral-bg relative overflow-hidden">
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
        {/* Hero image */}
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
              style={{ aspectRatio: heroImage.aspectRatio }}
            >
              {!loadedImages.has(heroImage.id) && (
                <div className="absolute inset-0 bg-floral-cream animate-pulse" />
              )}
              <img
                src={heroImage.src}
                alt={heroImage.alt}
                onLoad={() => handleImageLoad(heroImage.id)}
                className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
                  loadedImages.has(heroImage.id) ? 'opacity-100' : 'opacity-0'
                }`}
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                <span className="text-white font-sans text-sm tracking-wider">{heroImage.alt}</span>
              </div>
            </button>
          </motion.div>
        )}

        {/* Grid */}
        <div className="space-y-4 md:space-y-6">
          {pairedGrid.map((pair, rowIndex) => (
            <div key={rowIndex} className="grid grid-cols-2 gap-4 md:gap-6">
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
                    {!loadedImages.has(img.id) && (
                      <div className="absolute inset-0 bg-floral-cream animate-pulse" />
                    )}
                    <img
                      src={img.src}
                      alt={img.alt}
                      onLoad={() => handleImageLoad(img.id)}
                      className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.02] ${
                        loadedImages.has(img.id) ? 'opacity-100' : 'opacity-0'
                      }`}
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                      <span className="text-white font-sans text-xs tracking-wider">{img.alt}</span>
                    </div>
                  </button>
                </motion.div>
              ))}
            </div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-8 font-sans text-xs tracking-widest text-floral-taupe/50 uppercase"
        >
          {galleryImages.length} Photos
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
              className="relative w-full max-w-4xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const img = galleryImages.find((i) => i.id === selectedImage);
                if (!img) return null;
                return (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl bg-black/40">
                    <img
                      src={img.src}
                      alt={img.alt}
                      className="w-full max-h-[80vh] object-contain"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-6">
                      <p className="text-white font-serif text-xl">{img.alt}</p>
                      <p className="text-white/60 font-sans text-xs tracking-wider mt-1">Jay Sam &amp; Laarnie</p>
                    </div>
                  </div>
                );
              })()}

              {/* Navigation */}
              <button
                onClick={() => {
                  const ids = galleryImages.map((i) => i.id);
                  const current = ids.indexOf(selectedImage);
                  setSelectedImage(ids[(current - 1 + ids.length) % ids.length]);
                }}
                className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M15 18l-6-6 6-6" /></svg>
              </button>
              <button
                onClick={() => {
                  const ids = galleryImages.map((i) => i.id);
                  const current = ids.indexOf(selectedImage);
                  setSelectedImage(ids[(current + 1) % ids.length]);
                }}
                className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M9 18l6-6-6-6" /></svg>
              </button>

              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 w-9 h-9 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center hover:bg-white transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a4a3a" strokeWidth="2"><path d="M18 6L6 18M6 6l12 12" /></svg>
              </button>

              <div className="absolute top-4 left-4 px-3 py-1.5 bg-black/40 backdrop-blur-md rounded-full text-white/80 text-xs font-sans">
                {galleryImages.findIndex((i) => i.id === selectedImage) + 1} / {galleryImages.length}
              </div>

              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((img) => (
                  <button
                    key={img.id}
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(img.id); }}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      img.id === selectedImage ? 'bg-floral-gold w-6' : 'bg-white/40 hover:bg-white/60'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
