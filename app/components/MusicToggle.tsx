'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // Hide tooltip after a few seconds
    if (showTooltip) {
      const timer = setTimeout(() => setShowTooltip(false), 4000);
      return () => clearTimeout(timer);
    }
  }, [showTooltip]);

  const toggleMusic = () => {
    if (!audioRef.current) {
      // Create audio element
      const musicUrl = process.env.NEXT_PUBLIC_MUSIC_URL || '/music/wedding-song.mp3';
      audioRef.current = new Audio(musicUrl);
      audioRef.current.loop = true;
      audioRef.current.volume = 0.3;
    }

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay blocked — user needs to interact
        console.log('Autoplay blocked. User must interact first.');
      });
    }

    setIsPlaying(!isPlaying);
    setShowTooltip(false);
  };

  return (
    <>
      {/* Tooltip hint */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-24 right-6 z-40 px-4 py-2 bg-floral-deep text-white text-xs rounded-xl shadow-lg font-sans"
          >
            Tap for music 🎵
            <div className="absolute -bottom-1 right-6 w-2 h-2 bg-floral-deep rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle button */}
      <motion.button
        onClick={toggleMusic}
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-white/80 backdrop-blur-md rounded-full shadow-lg flex items-center justify-center border border-floral-cream hover:shadow-xl transition-shadow duration-300"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a4a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="6" y="4" width="4" height="16" />
            <rect x="14" y="4" width="4" height="16" />
          </svg>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a4a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
