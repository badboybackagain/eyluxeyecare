'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Phone, MessageCircle } from 'lucide-react';

export default function FinalCTA() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden" data-testid="home-final-cta">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_30%,rgba(168,132,42,0.16),transparent_60%)]" />
      </div>

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="uppercase tracking-[0.4em] text-[11px] text-gold"
        >
          Begin the journey
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
          className="mt-6 font-display text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.92]"
        >
          Book your <span className="gold-text">eye test</span><br/>today.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-8 max-w-2xl mx-auto text-ink/70 text-base md:text-lg"
        >
          Walk into our Hadapsar boutique for a complimentary consultation. We&apos;ll measure, advise and craft the perfect pair — together.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link href="/contact" className="btn-gold" data-testid="final-cta-book-btn">
            Book Eye Test <ArrowUpRight className="h-4 w-4" />
          </Link>
          <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919960750915'}`} target="_blank" rel="noopener noreferrer" className="btn-ghost" data-testid="final-cta-whatsapp-btn">
            <MessageCircle className="h-4 w-4" /> WhatsApp
          </a>
          <a href={`tel:${process.env.NEXT_PUBLIC_PHONE_NUMBER || '+919960750915'}`} className="btn-ghost" data-testid="final-cta-call-btn">
            <Phone className="h-4 w-4" /> Call
          </a>
        </motion.div>
      </div>
    </section>
  );
}
