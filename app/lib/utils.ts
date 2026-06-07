/**
 * Merge class names with Tailwind support.
 * Simple utility to avoid the clsx dependency.
 */
export function cn(...inputs: (string | undefined | null | false)[]): string {
  return inputs.filter(Boolean).join(' ');
}

/**
 * Format date to a human-readable string.
 */
export function formatDate(date: Date | string): string {
  const d = new Date(date);
  return d.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

/**
 * Calculate time remaining until target date.
 */
export function getTimeRemaining(target: Date): {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
} {
  const total = target.getTime() - Date.now();
  if (total <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, total: 0 };
  }

  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return { days, hours, minutes, seconds, total };
}

/**
 * Validate email format.
 */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/**
 * Validate a name (non-empty, reasonable length).
 */
export function isValidName(name: string): boolean {
  return name.trim().length >= 2 && name.trim().length <= 100;
}

/**
 * Scroll to element by ID with smooth behavior.
 */
export function scrollToSection(id: string): void {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

/**
 * Get the wedding date from env or fallback.
 */
export function getWeddingDate(): Date {
  const envDate = process.env.NEXT_PUBLIC_WEDDING_DATE;
  if (envDate) {
    const d = new Date(envDate);
    if (!isNaN(d.getTime())) return d;
  }
  // Fallback — March 31, 2026, 2:00 PM PHT
  return new Date('2026-03-31T14:00:00+08:00');
}

/**
 * Generate a unique submission ID.
 */
export function generateSubmissionId(): string {
  const timestamp = Date.now().toString(36);
  const random = Math.random().toString(36).substring(2, 8);
  return `RSVP-${timestamp}-${random}`.toUpperCase();
}
