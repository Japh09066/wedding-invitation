'use client';

import { useState, useEffect, useCallback } from 'react';
import { getTimeRemaining, getWeddingDate } from '@/app/lib/utils';

interface Countdown {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
  isComplete: boolean;
}

export function useCountdown(): Countdown {
  const [countdown, setCountdown] = useState<Countdown>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    total: 0,
    isComplete: false,
  });

  const tick = useCallback(() => {
    const target = getWeddingDate();
    const remaining = getTimeRemaining(target);
    setCountdown({
      ...remaining,
      isComplete: remaining.total <= 0,
    });
  }, []);

  useEffect(() => {
    // Initial calculation
    tick();

    // Update every second
    const interval = setInterval(tick, 1000);
    return () => clearInterval(interval);
  }, [tick]);

  return countdown;
}
