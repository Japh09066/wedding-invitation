'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface GalleryImage {
  id: number;
  alt: string;
  color1: string;
  color2: string;
  pattern: 'circle' | 'rings' | 'wave' | 'diamond' | 'petal' | 'cross';
  aspectRatio: string;
}

const galleryImages: GalleryImage[] = [
  { id: 1, alt: 'Bride & Groom', color1: '#f2d5d5', color2: '#d4a373', pattern: 'circle', aspectRatio: '16/9' },
  { id: 2, alt: 'The Bridal Bouquet', color1: '#a3c4b5', color2: '#c9a88e', pattern: 'petal', aspectRatio: '3/4' },
  { id: 3, alt: 'Ceremony Setup', color1: '#f5efe6', color2: '#d4a373', pattern: 'cross', aspectRatio: '4/3' },
  { id: 4, alt: 'Wedding Rings', color1: '#e8d5c4', color2: '#a3c4b5', pattern: 'rings', aspectRatio: '1/1' },
  { id: 5, alt: 'Reception Décor', color1: '#f2d5d5', color2: '#e8d5c4', pattern: 'wave', aspectRatio: '4/3' },
  { id: 6, alt: 'First Dance', color1: '#c9a88e', color2: '#f5efe6', pattern: 'diamond', aspectRatio: '3/4' },
  { id: 7, alt: 'Wedding Cake', color1: '#d4a373', color2: '#f2d5d5', pattern: 'rings', aspectRatio: '4/3' },
  { id: 8, alt: 'Venue Details', color1: '#a3c4b5', color2: '#f5efe6', pattern: 'circle', aspectRatio: '4/3' },
];

function PatternSVG({ pattern, color1, color2 }: { pattern: string; color1: string; color2: string }) {
  switch (pattern) {
    case 'circle':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-30">
          <circle cx="50" cy="50" r="40" fill="none" stroke={color2} strokeWidth="0.5" />
          <circle cx="50" cy="50" r="28" fill="none" stroke={color2} strokeWidth="0.4" />
          <circle cx="50" cy="50" r="16" fill="none" stroke={color2} strokeWidth="0.3" />
          <circle cx="50" cy="50" r="6" fill={color2} opacity="0.3" />
        </svg>
      );
    case 'rings':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-25">
          <ellipse cx="50" cy="50" rx="35" ry="15" fill="none" stroke={color2} strokeWidth="0.6" />
          <ellipse cx="50" cy="50" rx="20" ry="8" fill="none" stroke={color2} strokeWidth="0.4" />
          <circle cx="50" cy="50" r="4" fill={color2} opacity="0.4" />
        </svg>
      );
    case 'wave':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-25">
          <path d="M10 60 Q30 40 50 60 T90 60" fill="none" stroke={color2} strokeWidth="0.5" />
          <path d="M10 70 Q30 50 50 70 T90 70" fill="none" stroke={color2} strokeWidth="0.4" opacity="0.7" />
          <path d="M10 80 Q30 60 50 80 T90 80" fill="none" stroke={color2} strokeWidth="0.3" opacity="0.5" />
        </svg>
      );
    case 'diamond':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-25">
          <polygon points="50,15 80,50 50,85 20,50" fill="none" stroke={color2} strokeWidth="0.5" />
          <polygon points="50,25 68,50 50,75 32,50" fill="none" stroke={color2} strokeWidth="0.3" opacity="0.7" />
          <polygon points="50,38 58,50 50,62 42,50" fill="none" stroke={color2} strokeWidth="0.2" />
        </svg>
      );
    case 'petal':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-25">
          <ellipse cx="50" cy="30" rx="12" ry="20" fill="none" stroke={color2} strokeWidth="0.5" transform="rotate(0 50 50)" />
          <ellipse cx="50" cy="30" rx="12" ry="20" fill="none" stroke={color2} strokeWidth="0.4" transform="rotate(72 50 50)" />
          <ellipse cx="50" cy="30" rx="12" ry="20" fill="none" stroke={color2} strokeWidth="0.4" transform="rotate(144 50 50)" />
          <ellipse cx="50" cy="30" rx="12" ry="20" fill="none" stroke={color2} strokeWidth="0.4" transform="rotate(216 50 50)" />
          <ellipse cx="50" cy="30" rx="12" ry="20" fill="none" stroke={color2} strokeWidth="0.4" transform="rotate(288 50 50)" />
          <circle cx="50" cy="50" r="4" fill={color2} opacity="0.4" />
        </svg>
      );
    case 'cross':
      return (
        <svg viewBox="0 0 100 100" className="w-full h-full opacity-25">
          <line x1="50" y1="20" x2="50" y2="80" stroke={color2} strokeWidth="0.5" />
          <line x1="30" y1="50" x2="70" y2="50" stroke={color2} strokeWidth="0.5" />
          <circle cx="50" cy="50" r="15" fill="none" stroke={color2} strokeWidth="0.3" />
        </svg>
      );
  }
}

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const heroImage = galleryImages[0];
  const gridImages = galleryImages.slice(1);

  const pairedGrid: GalleryImage[][] = [];
  for (let i = 0; i < gridImages.length; i += 2) {
    pairedGrid.push(gridImages.slice(i, i + 2));
  }

  return (
    <section id="gallery" className="section-padding bg-floral-bg relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <pattern id="gallery-bg" x="0" y="0" width="400" height="400" patternUnits="userSpaceOnUse">
              <circle cx="80" cy="80" r="40" fill="none" stroke="#5a4a3a" strokeWidth="1" />
              <circle cx="320" cy="200" r="55" fill="none" stroke="#5a4a3a" strokeWidth="0.8" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#gallery-bg)" />
        </svg>
      </div>

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
              style={{ aspectRatio: '16/9' }}
            >
              <div
                className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]"
                style={{ background: `linear-gradient(135deg, ${heroImage.color1} 0%, ${heroImage.color2} 100%)` }}
              >
                <div className="w-full h-full relative flex items-center justify-center">
                  <PatternSVG pattern={heroImage.pattern} color1={heroImage.color1} color2={heroImage.color2} />
                </div>
              </div>
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
                    <div
                      className="w-full h-full flex items-center justify-center transition-transform duration-700 group-hover:scale-[1.02]"
                      style={{ background: `linear-gradient(135deg, ${img.color1} 0%, ${img.color2} 100%)` }}
                    >
                      <div className="w-full h-full relative flex items-center justify-center">
                        <PatternSVG pattern={img.pattern} color1={img.color1} color2={img.color2} />
                      </div>
                    </div>
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
              className="relative w-full max-w-3xl"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const img = galleryImages.find((i) => i.id === selectedImage);
                if (!img) return null;
                return (
                  <div className="relative rounded-xl overflow-hidden shadow-2xl">
                    <div
                      className="w-full flex items-center justify-center p-12"
                      style={{ background: `linear-gradient(135deg, ${img.color1} 0%, ${img.color2} 100%)`, minHeight: '300px' }}
                    >
                      <svg viewBox="0 0 200 200" className="w-48 h-48 opacity-40">
                        <circle cx="100" cy="100" r="80" fill="none" stroke={img.color2} strokeWidth="0.8" />
                        <circle cx="100" cy="100" r="55" fill="none" stroke={img.color2} strokeWidth="0.6" />
                        <circle cx="100" cy="100" r="30" fill={img.color2} opacity="0.2" />
                      </svg>
                    </div>
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
