'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CalendarCheck } from 'lucide-react';

export default function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 600);
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
            className="glass-strong rounded-full px-5 py-3 flex items-center gap-3 text-sm hover:border-gold/40 transition"
            data-testid="sticky-book-test-btn"
          >
            <span className="grid place-items-center h-7 w-7 rounded-full bg-gradient-to-br from-gold-light to-gold-dark">
              <CalendarCheck className="h-4 w-4 text-black" strokeWidth={2.5} />
            </span>
            <span className="gold-text font-medium">Book Your Eye Test</span>
            <span className="text-white/40">→</span>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
