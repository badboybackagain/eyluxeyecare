'use client';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const testimonials = [
  { name: 'Aarti Deshmukh', role: 'Working Professional, Hadapsar', text: 'I have visited many opticians in Pune but the precision and care at Eylux is unmatched. My progressive lenses feel like a natural extension of my eyes.' },
  { name: 'Rohit Sharma', role: 'IT Engineer, Magarpatta', text: 'I spend 10+ hours on a screen daily. Eylux\'s blue-cut computer glasses changed my evenings — no more eye strain. The fitting consultation was world-class.' },
  { name: 'Priya & Aanya', role: 'Mother & Daughter, Keshav Nagar', text: 'My 6-year-old usually fears clinics, but the team made her feel at ease. We left with the cutest frames and a smile.' },
  { name: 'Vikram Patil', role: 'Entrepreneur, Pune', text: 'I picked up the Ray-Ban Meta AI glasses from Eylux. Personal demo, honest advice, premium boutique experience. Worth every rupee.' },
  { name: 'Sneha Iyer', role: 'Fashion Designer', text: 'Eylux understands fashion as deeply as it understands vision. They paired me with a vintage acetate frame I would never have picked myself.' },
  { name: 'Anil Joshi', role: 'Senior Citizen, Pune', text: 'Patient, attentive and never pushy. They explained progressive lenses in a way I understood. Highly recommended for families.' },
];

export default function Testimonials() {
  return (
    <section className="relative py-28 md:py-40 overflow-hidden" data-testid="home-testimonials">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Trusted by Pune"
          title={<>Stories from people who <span className="gold-text">see better</span> with us.</>}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className="glass rounded-3xl p-7 relative overflow-hidden hover:border-gold/30 transition"
              data-testid={`testimonial-${i}`}
            >
              <Quote className="absolute -top-2 -right-2 h-20 w-20 text-gold/5" />
              <blockquote className="text-[15px] leading-relaxed text-white/75 relative">
                &ldquo;{t.text}&rdquo;
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="h-10 w-10 rounded-full bg-gradient-to-br from-gold/20 to-transparent border border-gold/20 grid place-items-center font-display text-gold">
                  {t.name.charAt(0)}
                </span>
                <div>
                  <p className="text-sm text-white">{t.name}</p>
                  <p className="text-xs text-white/45">{t.role}</p>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
