'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder photos using gradient backgrounds
const galleryImages = [
  { id: 1, color: 'from-rose-200 to-rose-100', label: 'Engagement', icon: '💍' },
  { id: 2, color: 'from-sage-200 to-sage-100', label: 'Pre-wedding', icon: '📸' },
  { id: 3, color: 'from-amber-200 to-amber-100', label: 'Couple Shoot', icon: '💑' },
  { id: 4, color: 'from-rose-300 to-rose-200', label: 'Bridal Prep', icon: '👰' },
  { id: 5, color: 'from-sage-300 to-sage-200', label: 'Groom Prep', icon: '🤵' },
  { id: 6, color: 'from-rose-100 to-sage-100', label: 'Family Portrait', icon: '👨‍👩‍👧‍👦' },
  { id: 7, color: 'from-amber-300 to-amber-200', label: 'Ceremony', icon: '⛪' },
  { id: 8, color: 'from-rose-400 to-rose-300', label: 'Reception', icon: '🎉' },
];

export default function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="section-padding bg-floral-bg">
      {/* Decorative header */}
      <div className="section-container text-center mb-16">
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
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="font-sans text-floral-taupe text-sm mt-2"
        >
          Click photos to view
        </motion.p>
      </div>

      {/* Masonry-like grid */}
      <div className="section-container max-w-5xl">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {galleryImages.map((img, index) => (
            <motion.button
              key={img.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              onClick={() => setSelectedImage(img.id)}
              className={`relative group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 ${
                index === 0 ? 'col-span-2 row-span-2' :
                index === 7 ? 'col-span-2' :
                'col-span-1'
              }`}
              style={{ aspectRatio: index === 0 ? 'auto' : index === 7 ? '16/9' : '1' }}
            >
              {/* Placeholder gradient image */}
              <div
                className={`w-full h-full bg-gradient-to-br ${img.color} flex items-center justify-center transition-transform duration-500 group-hover:scale-105`}
              >
                <div className="text-center">
                  <span className="text-4xl md:text-5xl block mb-2">{img.icon}</span>
                  <span className="font-script text-floral-deep text-lg md:text-xl opacity-70">
                    {img.label}
                  </span>
                </div>
              </div>

              {/* Overlay on hover */}
              <div className="absolute inset-0 bg-floral-deep/0 group-hover:bg-floral-deep/20 transition-all duration-300 flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-sans text-sm tracking-wider uppercase">
                  View
                </span>
              </div>
            </motion.button>
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
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 25 }}
              className="relative max-w-2xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                {/* Display the selected image */}
                {(() => {
                  const img = galleryImages.find((i) => i.id === selectedImage);
                  if (!img) return null;
                  return (
                    <div className={`bg-gradient-to-br ${img.color} p-12 md:p-20 flex items-center justify-center min-h-[300px]`}>
                      <div className="text-center">
                        <span className="text-7xl block mb-4">{img.icon}</span>
                        <span className="font-script text-3xl text-floral-deep block">
                          {img.label}
                        </span>
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Close button */}
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-3 -right-3 w-10 h-10 bg-white rounded-full shadow-lg flex items-center justify-center hover:bg-gray-100 transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#5a4a3a" strokeWidth="2">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation dots */}
              <div className="flex justify-center gap-2 mt-4">
                {galleryImages.map((img) => (
                  <button
                    key={img.id}
                    onClick={() => setSelectedImage(img.id)}
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
      <div className="divider-floral mt-16">
        <span className="text-floral-gold text-lg">✦</span>
      </div>
    </section>
  );
}
