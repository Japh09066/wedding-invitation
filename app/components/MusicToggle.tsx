'use client';

import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function MusicToggle() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const startedRef = useRef(false);

  useEffect(() => {
    const musicUrl = process.env.NEXT_PUBLIC_MUSIC_URL || '/music/wedding-song.mp3';
    const audio = new Audio(musicUrl);
    audio.loop = true;
    audio.volume = 0.3;
    audioRef.current = audio;

    // Attempt autoplay — may be blocked by browser
    audio.play().then(() => {
      setIsPlaying(true);
      startedRef.current = true;
      setShowTooltip(false);
    }).catch(() => {
      // Autoplay blocked — show tooltip
      const timer = setTimeout(() => setShowTooltip(false), 4000);
      return () => clearTimeout(timer);
    });

    return () => {
      audio.pause();
      audio.src = '';
    };
  }, []);

  // ─── Force-start on first user interaction anywhere on page ───
  useEffect(() => {
    const handleFirstInteraction = () => {
      if (startedRef.current || !audioRef.current) return;
      startedRef.current = true;

      audioRef.current.play().then(() => {
        setIsPlaying(true);
        setShowTooltip(false);
      }).catch(() => {});
    };

    document.addEventListener('click', handleFirstInteraction, { once: true });
    document.addEventListener('touchstart', handleFirstInteraction, { once: true });

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, []);

  const toggleMusic = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {});
    }

    setIsPlaying(!isPlaying);
    setShowTooltip(false);
  };

  return (
    <>
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed bottom-24 right-6 z-40 px-4 py-2 bg-floral-deep text-white text-xs rounded-xl shadow-lg font-sans"
          >
            Tap anywhere for music 🎵
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
          <div className="flex items-center gap-[2.5px] h-5">
            {[3, 5, 4, 6, 3].map((h, i) => (
              <motion.span
                key={i}
                className="w-[3px] rounded-full bg-floral-gold"
                animate={{ height: [h, h * 2.5, h, h * 1.5, h] }}
                transition={{
                  duration: 0.6 + i * 0.1,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.08,
                }}
                style={{ height: h }}
              />
            ))}
          </div>
        ) : (
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#5a4a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polygon points="5 3 19 12 5 21 5 3" />
          </svg>
        )}
      </motion.button>
    </>
  );
}
