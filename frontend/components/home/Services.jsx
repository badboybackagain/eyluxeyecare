'use client';
import { motion } from 'framer-motion';
import { Eye, Glasses, Sparkles, Baby, Monitor, Sun, ScanEye, Heart, ArrowUpRight } from 'lucide-react';
import SectionHeading from '../SectionHeading';
import Link from 'next/link';

const services = [
  { icon: ScanEye, title: 'Digital Eye Testing', desc: 'State-of-the-art computerized refraction and comprehensive vision diagnostics for accuracy you can trust.', href: '/eye-testing' },
  { icon: Eye, title: 'Progressive Lenses', desc: 'Seamless near, intermediate and far vision in a single lens - by EssilorLuxottica, Hoya & Zeiss.', href: '/lenses' },
  { icon: Sparkles, title: 'Contact Lenses', desc: 'Premium daily, monthly and toric lenses fitted by certified optical specialists.', href: '/contact-lenses' },
  { icon: Baby, title: 'Children\'s Vision Solutions', desc: 'Specialized pediatric vision care and Myopia management to protect your child\'s long-term eye health.', href: '/kids-vision' },
  { icon: Monitor, title: 'Advance Single Vision Lenses', desc: 'Lenses tailored for digitally connected lifestyles, providing blue-light filtration and fatigue relief.', href: '/lenses' },
  { icon: Glasses, title: 'Luxury Eyewear Collection', desc: 'Curated frames and sunglasses from Ray-Ban, Oakley, Vogue, Coach, Tommy Hilfiger, Ralph Lauren, and more.', href: '/frames' },
  { icon: Heart, title: 'Advance Optical Solutions', desc: 'From personalized single vision to progressive lenses, combining advanced technology with expert dispensing.', href: '/lenses' },
];

export default function Services() {
  return (
    <section className="relative py-28 md:py-40" data-testid="home-services">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="What we offer"
          title={<>A complete <span className="gold-text">vision atelier</span>, under one roof.</>}
          subtitle="From your first comprehensive eye exam to the moment you walk out wearing your new lenses, every detail is engineered for clarity, comfort and quiet elegance."
        />

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 4) * 0.06 }}
              >
                <Link
                  href={s.href}
                  className="group relative block rounded-3xl p-6 glass h-full overflow-hidden hover:border-gold/30 transition-all duration-500"
                  data-testid={`service-card-${s.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-gold/0 to-gold/0 group-hover:from-gold/10 group-hover:to-gold/0 transition-all duration-700" />
                  <div className="relative">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-ink/[0.04] border border-ink/12 group-hover:border-gold/40 transition">
                      <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    </span>
                    <h3 className="mt-6 font-display text-xl tracking-tight">{s.title}</h3>
                    <p className="mt-3 text-sm text-ink/70 leading-relaxed">{s.desc}</p>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-[0.25em] text-ink/55 group-hover:text-gold transition">
                      Explore <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
