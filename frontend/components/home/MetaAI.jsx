'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Mic, Camera, Music, Phone, Sparkles } from 'lucide-react';

const SMART_GLASSES = '/rayban_meta_product.png';

const features = [
  { icon: Camera, label: 'Built-in 12MP Camera' },
  { icon: Mic, label: 'Hands-free Voice AI' },
  { icon: Music, label: 'Open-ear Audio' },
  { icon: Phone, label: 'Crystal-clear Calls' },
];

export default function MetaAI() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.9, 1.05, 0.95]);

  return (
    <section ref={ref} className="relative py-32 md:py-48 overflow-hidden" data-testid="home-meta-ai">
      {/* Background gradient field */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-secondary to-bg-primary" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(168,132,42,0.10),transparent_60%)]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] rounded-full border border-gold/15 animate-spin-slow" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[900px] w-[900px] rounded-full border border-gold/[0.1]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.3em] text-gold"
        >
          <Sparkles className="h-3.5 w-3.5" />
          Now at Eylux · The Future of Eyewear
        </motion.div>

        <div className="mt-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.9 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl tracking-tight leading-[0.95]"
            >
              Meet the <span className="gold-text">Meta AI</span><br/>smart glasses.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.15 }}
              className="mt-8 max-w-xl text-ink/70 text-base md:text-lg leading-relaxed"
            >
              Designed in collaboration with Ray-Ban and Oakley, the new generation of Meta AI eyewear lets you capture, listen, call and ask — without ever reaching for your phone. Try them on at our boutique.
            </motion.p>

            <div className="mt-10 grid grid-cols-2 gap-3">
              {features.map((f, i) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={f.label}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    className="glass rounded-2xl px-4 py-3.5 flex items-center gap-3"
                  >
                    <Icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    <span className="text-sm text-ink/85">{f.label}</span>
                  </motion.div>
                );
              })}
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/meta-ai-glasses" className="btn-gold" data-testid="meta-explore-btn">Explore Meta Glasses</Link>
              <Link href="/contact" className="btn-ghost" data-testid="meta-bookdemo-btn">Book a Demo</Link>
            </div>
          </div>

          <motion.div style={{ y, scale }} className="lg:col-span-6 relative">
            <div className="relative aspect-square rounded-[2.5rem] overflow-hidden glass-strong">
              <Image src={SMART_GLASSES} alt="Meta AI smart glasses" fill sizes="600px" className="object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <div className="absolute top-6 right-6 flex items-center gap-2 px-3 py-1.5 rounded-full glass-strong">
                <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
                <span className="text-[10px] uppercase tracking-[0.3em] text-gold">AI Powered</span>
              </div>
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-gold-light">Available</p>
                  <p className="font-display text-2xl mt-1 text-white">Ray-Ban & Oakley Meta</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
