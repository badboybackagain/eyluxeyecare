'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const faqs = [
  { q: 'How long does a comprehensive eye test take at Eylux?', a: 'A typical Eylux consultation lasts 30–45 minutes. We include computerized refraction, retinal screening, ocular health checks and a styling consultation if you are also choosing frames.' },
  { q: 'Do you carry the new Ray-Ban Meta AI glasses?', a: 'Yes, the boutique stocks the latest Ray-Ban Meta and Oakley Meta AI smart glasses. Walk in for a personal demonstration of the camera, voice assistant and audio features.' },
  { q: 'Which premium lens brands do you offer?', a: 'We are authorized partners of Essilor, Hoya and Zeiss — covering progressive, blue-cut, photochromic, anti-glare and high-index lenses for every prescription.' },
  { q: 'Do you specialise in eye tests for children?', a: 'Absolutely. We offer paediatric eye assessments with kid-friendly equipment and a curated catalog of durable, fashion-forward children\'s frames.' },
  { q: 'Where are you located and what are your hours?', a: 'Eylux Eye Care is located at Rohan Plaza, DP Road in Keshav Nagar, Hadapsar, Pune. We are open every day from 11:00 AM to 9:00 PM, including weekends.' },
  { q: 'Can I book an appointment over WhatsApp?', a: 'Yes — tap the WhatsApp button anywhere on this site and our team will confirm your slot within minutes during business hours.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
};

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section className="relative py-28 md:py-40 border-t border-ink/10" data-testid="home-faq">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <div className="mx-auto max-w-5xl px-6">
        <SectionHeading
          eyebrow="Common questions"
          title={<>Everything you might <span className="gold-text">like to know.</span></>}
        />

        <div className="mt-14 space-y-3">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div
                key={f.q}
                className={`rounded-2xl glass overflow-hidden transition-all duration-500 ${isOpen ? 'border-gold/30' : ''}`}
                data-testid={`faq-item-${i}`}
              >
                <button
                  onClick={() => setOpen(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between gap-6 px-6 py-5 text-left"
                  aria-expanded={isOpen}
                  data-testid={`faq-toggle-${i}`}
                >
                  <span className="font-display text-base md:text-lg text-ink">{f.q}</span>
                  <span className={`shrink-0 grid place-items-center h-9 w-9 rounded-full border border-ink/15 transition-transform duration-500 ${isOpen ? 'rotate-45 bg-gold/15 border-gold/40' : ''}`}>
                    <Plus className="h-4 w-4 text-gold" />
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="px-6 pb-6 text-sm text-ink/70 leading-relaxed max-w-3xl">{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
