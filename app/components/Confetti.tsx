'use client';

import { useEffect, useRef } from 'react';

let confettiLoaded = false;

interface ConfettiProps {
  active: boolean;
}

export default function Confetti({ active }: ConfettiProps) {
  const initialized = useRef(false);

  useEffect(() => {
    if (active && !initialized.current) {
      initialized.current = true;

      // Dynamic import to avoid SSR issues
      import('canvas-confetti').then((confettiModule) => {
        const confetti = confettiModule.default;

        const duration = 3000;
        const end = Date.now() + duration;
        const colors = ['#d4a373', '#f2d5d5', '#a3c4b5', '#f5efe6', '#c9a88e'];

        (function frame() {
          confetti({
            particleCount: 4,
            angle: 60,
            spread: 55,
            origin: { x: 0, y: 0.6 },
            colors,
          });
          confetti({
            particleCount: 4,
            angle: 120,
            spread: 55,
            origin: { x: 1, y: 0.6 },
            colors,
          });

          if (Date.now() < end) {
            requestAnimationFrame(frame);
          }
        })();

        // Fade out
        setTimeout(() => {
          initialized.current = false;
        }, duration + 1000);
      });
    }
  }, [active]);

  return null;
}
