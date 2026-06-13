'use client';

import { useEffect, useState } from 'react';

interface Petal {
  id: number;
  left: string;
  size: number;
  opacity: number;
  color: string;
  shape: 'circle' | 'teardrop' | 'petal';
  delay: number;
  duration: number;
  drift: number;
}

const COLORS = [
  'rgba(242, 213, 213, 0.5)',   // floral-blush
  'rgba(212, 163, 115, 0.3)',   // floral-gold
  'rgba(201, 168, 142, 0.25)',  // floral-taupe
  'rgba(242, 213, 213, 0.35)',  // floral-blush lighter
  'rgba(245, 239, 230, 0.4)',   // floral-cream
];

const SHAPES: Petal['shape'][] = ['circle', 'teardrop', 'petal'];

function randomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

function makePetal(id: number): Petal {
  const size = randomBetween(6, 18);
  return {
    id,
    left: `${randomBetween(0, 100)}%`,
    size,
    opacity: randomBetween(0.15, 0.35),
    color: COLORS[Math.floor(Math.random() * COLORS.length)],
    shape: SHAPES[Math.floor(Math.random() * SHAPES.length)],
    delay: randomBetween(0, 15),
    duration: randomBetween(18, 30),
    drift: randomBetween(-80, 80),
  };
}

export default function FloatingPetals() {
  const [petals, setPetals] = useState<Petal[]>([]);

  useEffect(() => {
    const count = 14;
    const generated: Petal[] = [];
    for (let i = 0; i < count; i++) {
      generated.push(makePetal(i));
    }
    setPetals(generated);
  }, []);

  if (petals.length === 0) return null;

  return (
    <div className="petals-container" aria-hidden="true">
      {petals.map((petal) => {
        return (
          <div
            key={petal.id}
            className="petal-particle"
            style={
              {
                position: 'absolute',
                left: petal.left,
                top: '-5%',
                width: petal.size,
                height: petal.size * randomBetween(0.7, 1.3),
                opacity: petal.opacity,
                backgroundColor: petal.color,
                animationDelay: `${petal.delay}s`,
                animationDuration: `${petal.duration}s`,
                '--drift': `${petal.drift}px`,
                borderRadius:
                  petal.shape === 'circle'
                    ? '50%'
                    : petal.shape === 'teardrop'
                    ? '50% 50% 50% 0'
                    : '50% 0 50% 0',
                transform:
                  petal.shape === 'circle'
                    ? 'none'
                    : petal.shape === 'teardrop'
                    ? `rotate(${45 + Math.random() * 90}deg)`
                    : `rotate(${Math.random() * 360}deg)`,
              } as React.CSSProperties
            }
          />
        );
      })}
    </div>
  );
}
