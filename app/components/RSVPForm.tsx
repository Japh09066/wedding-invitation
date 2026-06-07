'use client';

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Confetti from './Confetti';
import { generateSubmissionId } from '@/app/lib/utils';

interface RSVPFormProps {
  onSuccess?: () => void;
  onClose?: () => void;
  isModal?: boolean;
}

type AttendanceOption = 'yes' | 'no' | null;

interface FormData {
  name: string;
  attendance: AttendanceOption;
  guests: number;
  message: string;
}

interface FormErrors {
  name?: string;
  attendance?: string;
  guests?: string;
}

export default function RSVPForm({ onSuccess, onClose, isModal = false }: RSVPFormProps) {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    attendance: null,
    guests: 1,
    message: '',
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [showConfetti, setShowConfetti] = useState(false);

  const validate = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Please enter your full name';
    }

    if (!formData.attendance) {
      newErrors.attendance = 'Please confirm your attendance';
    }

    if (formData.attendance === 'yes' && (formData.guests < 1 || formData.guests > 10)) {
      newErrors.guests = 'Number of guests must be between 1 and 10';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setSubmitStatus('idle');

    const payload = {
      id: generateSubmissionId(),
      name: formData.name.trim(),
      attendance: formData.attendance === 'yes' ? 'Yes' : 'No',
      guests: formData.attendance === 'yes' ? formData.guests : 0,
      message: formData.message.trim(),
      submittedAt: new Date().toISOString(),
    };

    // Get Apps Script URL from environment variable
    const appsScriptUrl = process.env.NEXT_PUBLIC_APPS_SCRIPT_URL;

    try {
      if (appsScriptUrl && appsScriptUrl !== 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec') {
        const response = await fetch(appsScriptUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });

        // no-cors mode returns opaque — we trust it worked
        console.log('RSVP submitted via Apps Script:', payload);
      } else {
        // Fallback: log to console in dev
        console.log('RSVP submission (Apps Script URL not configured):', payload);
      }

      setSubmitStatus('success');
      setShowConfetti(true);
      onSuccess?.();

      // Auto-close confetti
      setTimeout(() => setShowConfetti(false), 5000);

      // Reset form after success
      setFormData({
        name: '',
        attendance: null,
        guests: 1,
        message: '',
      });
    } catch (error) {
      console.error('RSVP submission failed:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleAttendanceSelect = (value: AttendanceOption) => {
    setFormData((prev) => ({ ...prev, attendance: value }));
    if (errors.attendance) {
      setErrors((prev) => ({ ...prev, attendance: undefined }));
    }
  };

  const formContent = (
    <>
      {/* Confetti overlay */}
      <Confetti active={showConfetti} />

      <AnimatePresence mode="wait">
        {submitStatus === 'success' ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', damping: 10, stiffness: 200 }}
              className="text-6xl mb-4"
            >
              🎉
            </motion.div>
            <h3 className="font-serif text-3xl text-floral-deep mb-3">
              Thank You!
            </h3>
            <p className="font-script text-xl text-floral-gold mb-2">
              Your RSVP has been received
            </p>
            <p className="font-sans text-floral-taupe text-sm">
              We can&apos;t wait to celebrate with you!
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            {/* Full Name */}
            <div>
              <label className="block font-serif text-floral-deep text-lg mb-2">
                Full Name <span className="text-rose-400">*</span>
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => {
                  setFormData((prev) => ({ ...prev, name: e.target.value }));
                  if (errors.name) setErrors((prev) => ({ ...prev, name: undefined }));
                }}
                placeholder="Your full name"
                className={`rsvp-input ${errors.name ? 'rsvp-input-error' : ''}`}
                disabled={isSubmitting}
              />
              {errors.name && (
                <p className="text-rose-400 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* Attendance */}
            <div>
              <label className="block font-serif text-floral-deep text-lg mb-3">
                Will you attend? <span className="text-rose-400">*</span>
              </label>
              <div className="flex gap-3">
                {[
                  { value: 'yes' as AttendanceOption, label: 'Joyfully Accept', emoji: '🎊' },
                  { value: 'no' as AttendanceOption, label: 'Regretfully Decline', emoji: '💔' },
                ].map((option) => (
                  <button
                    key={option.value}
                    type="button"
                    onClick={() => handleAttendanceSelect(option.value)}
                    disabled={isSubmitting}
                    className={`flex-1 p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                      formData.attendance === option.value
                        ? 'border-floral-gold bg-floral-gold/5 shadow-md'
                        : 'border-floral-taupe/20 hover:border-floral-taupe/40 bg-white'
                    }`}
                  >
                    <span className="text-2xl block mb-1">{option.emoji}</span>
                    <span className={`font-serif text-sm ${
                      formData.attendance === option.value ? 'text-floral-gold' : 'text-floral-taupe'
                    }`}>
                      {option.label}
                    </span>
                  </button>
                ))}
              </div>
              {errors.attendance && (
                <p className="text-rose-400 text-sm mt-1">{errors.attendance}</p>
              )}
            </div>

            {/* Number of Guests */}
            {formData.attendance === 'yes' && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
              >
                <label className="block font-serif text-floral-deep text-lg mb-2">
                  Number of Guests
                </label>
                <div className="flex items-center gap-4">
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        guests: Math.max(1, prev.guests - 1),
                      }))
                    }
                    className="w-10 h-10 bg-floral-cream hover:bg-floral-taupe/20 rounded-full flex items-center justify-center transition-colors"
                    disabled={isSubmitting || formData.guests <= 1}
                  >
                    <svg width="16" height="2" viewBox="0 0 16 2" fill="#5a4a3a"><rect width="16" height="2" rx="1" /></svg>
                  </button>
                  <span className="font-serif text-2xl text-floral-deep min-w-[40px] text-center">
                    {formData.guests}
                  </span>
                  <button
                    type="button"
                    onClick={() =>
                      setFormData((prev) => ({
                        ...prev,
                        guests: Math.min(10, prev.guests + 1),
                      }))
                    }
                    className="w-10 h-10 bg-floral-cream hover:bg-floral-taupe/20 rounded-full flex items-center justify-center transition-colors"
                    disabled={isSubmitting || formData.guests >= 10}
                  >
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="#5a4a3a">
                      <rect x="7" width="2" height="16" rx="1" />
                      <rect y="7" width="16" height="2" rx="1" />
                    </svg>
                  </button>
                </div>
                {errors.guests && (
                  <p className="text-rose-400 text-sm mt-1">{errors.guests}</p>
                )}
              </motion.div>
            )}

            {/* Message */}
            <div>
              <label className="block font-serif text-floral-deep text-lg mb-2">
                Message for the Couple
              </label>
              <textarea
                value={formData.message}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, message: e.target.value }))
                }
                placeholder="Share your warm wishes..."
                rows={3}
                className="rsvp-input resize-none"
                disabled={isSubmitting}
              />
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 bg-floral-gold hover:bg-floral-taupe disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full font-serif text-lg tracking-wider shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                  </svg>
                  Sending...
                </>
              ) : (
                'Send RSVP'
              )}
            </button>

            {/* Error message */}
            {submitStatus === 'error' && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center text-rose-400 font-sans text-sm"
              >
                Something went wrong. Please try again or contact us directly.
              </motion.p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </>
  );

  // If modal mode, wrap in overlay
  if (isModal) {
    return (
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
          onClick={(e) => {
            if (e.target === e.currentTarget) onClose?.();
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 20 }}
            className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto"
          >
            <div className="card">
              {/* Close button */}
              {onClose && (
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 w-8 h-8 bg-floral-cream hover:bg-floral-taupe/20 rounded-full flex items-center justify-center transition-colors"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#5a4a3a" strokeWidth="2">
                    <path d="M18 6L6 18M6 6l12 12" />
                  </svg>
                </button>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <h3 className="font-serif text-3xl text-floral-deep mb-2">
                  RSVP
                </h3>
                <p className="font-script text-lg text-floral-gold">
                  Kindly respond by January 8, 2026
                </p>
                <div className="flex items-center justify-center gap-2 mt-4">
                  <span className="block h-px w-8 bg-floral-gold/40" />
                  <span className="text-floral-gold">✦</span>
                  <span className="block h-px w-8 bg-floral-gold/40" />
                </div>
              </div>

              {formContent}
            </div>
          </motion.div>
        </motion.div>
      </AnimatePresence>
    );
  }

  // Inline mode
  return (
    <div className="card max-w-lg mx-auto">
      {/* Header */}
      <div className="text-center mb-8">
        <h3 className="font-serif text-3xl text-floral-deep mb-2">
          RSVP
        </h3>
        <p className="font-script text-lg text-floral-gold">
          Kindly respond by January 8, 2026
        </p>
        <div className="flex items-center justify-center gap-2 mt-4">
          <span className="block h-px w-8 bg-floral-gold/40" />
          <span className="text-floral-gold">✦</span>
          <span className="block h-px w-8 bg-floral-gold/40" />
        </div>
      </div>

      {formContent}
    </div>
  );
}
