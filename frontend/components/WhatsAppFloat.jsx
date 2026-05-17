'use client';
import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

export default function WhatsAppFloat() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999';
  const message = encodeURIComponent("Hi Eylux, I'd like to book an eye test.");
  return (
    <motion.a
      href={`https://wa.me/${number}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-40 group"
      data-testid="whatsapp-float"
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 18 }}
    >
      <span className="absolute inset-0 rounded-full bg-emerald-500/40 blur-xl animate-pulse-soft" />
      <span className="relative grid place-items-center h-14 w-14 rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 shadow-lg shadow-emerald-500/30 group-hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6 text-white" strokeWidth={2.2} fill="white" />
      </span>
    </motion.a>
  );
}
