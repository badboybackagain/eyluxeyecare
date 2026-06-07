'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const threshold = 600;
    const handler = () => {
      const scrolled = window.scrollY;
      setVisible((prev) => {
        if (scrolled > threshold + 20) return true;
        if (scrolled < threshold - 20) return false;
        return prev;
      });
    };
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 md:left-6 md:translate-x-0"
          data-testid="sticky-cta"
        >
          <Link
            href="/contact"
            className="rounded-full px-5 py-3 flex items-center gap-3 text-sm bg-ink text-cream hover:bg-gold transition shadow-[0_12px_32px_-12px_rgba(20,17,13,0.5)] border border-ink"
            data-testid="sticky-book-test-btn"
          >
            <span className="grid place-items-center h-7 w-7 rounded-full bg-gradient-to-br from-gold-light to-gold-dark">
              <CalendarCheck className="h-4 w-4 text-ink" strokeWidth={2.5} />
            </span>
            <span className="font-medium">Book Your Eye Test</span>
            <span className="text-cream/60">→</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
