'use client';

import { useEffect, useState, useMemo } from 'react';

interface Petal {
  id: number;
  left: number;
  top: number;
  size: number;
  duration: number;
  delay: number;
  rotation: number;
  opacity: number;
  color: string;
}

const COLORS = [
  '#f2d5d5', // blush
  '#ecc8c8', // darker blush
  '#a3c4b5', // sage
  '#d4a373', // gold
  '#c9a88e', // taupe
  '#f5efe6', // cream
];

export default function FloatingPetals() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const petals = useMemo<Petal[]>(() => {
    if (typeof window === 'undefined') return [];
    const items: Petal[] = [];
    const count = window.innerWidth < 768 ? 8 : 15;
    for (let i = 0; i < count; i++) {
      items.push({
        id: i,
        left: Math.random() * 100,
        top: Math.random() * 100,
        size: 8 + Math.random() * 14,
        duration: 12 + Math.random() * 18,
        delay: Math.random() * 15,
        rotation: Math.random() * 360,
        opacity: 0.15 + Math.random() * 0.25,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
      });
    }
    return items;
  }, []);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0" aria-hidden="true">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.left}%`,
            top: `${petal.top}%`,
            width: `${petal.size}px`,
            height: `${petal.size * 1.2}px`,
            opacity: petal.opacity,
            borderRadius: '50% 0 50% 0',
            background: petal.color,
            animation: `petal-float-${petal.id % 5} ${petal.duration}s ease-in-out ${petal.delay}s infinite`,
            transform: `rotate(${petal.rotation}deg)`,
          }}
        />
      ))}
      <style jsx>{`
        ${[0, 1, 2, 3, 4].map(
          (i) => `
          @keyframes petal-float-${i} {
            0%, 100% {
              transform: translateY(0) translateX(0) rotate(0deg);
              opacity: ${0.15 + i * 0.04};
            }
            25% {
              transform: translateY(${-8 - i * 3}px) translateX(${4 + i * 2}px) rotate(${5 + i * 10}deg);
            }
            50% {
              transform: translateY(${-3 - i * 2}px) translateX(${-3 - i * 1}px) rotate(${-3 - i * 5}deg);
              opacity: ${0.25 + i * 0.03};
            }
            75% {
              transform: translateY(${-10 - i * 2}px) translateX(${2 + i * 3}px) rotate(${8 + i * 8}deg);
            }
          }
        `
        ).join('\n')}
      `}</style>
    </div>
  );
}
