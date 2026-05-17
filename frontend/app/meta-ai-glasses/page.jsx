'use client';
import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import Image from 'next/image';
import { Camera, Mic, Music, Phone, Sparkles, Zap, Battery, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const SMART = 'https://images.unsplash.com/photo-1562330744-0e81c1e9dd88?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85';

const features = [
  { icon: Camera, title: '12 MP Ultra-wide Camera', desc: 'Capture photos and 1080p video, completely hands-free.' },
  { icon: Mic, title: 'Meta AI Assistant', desc: 'Ask anything. Translate signs. Identify landmarks. All by voice.' },
  { icon: Music, title: 'Open-ear Spatial Audio', desc: 'Crystal-clear music without blocking out the world.' },
  { icon: Phone, title: 'Calls & Messages', desc: 'Take WhatsApp calls and messages without touching your phone.' },
  { icon: Battery, title: 'All-day Battery', desc: 'Up to 32 hours with the included charging case.' },
  { icon: Cloud, title: 'Live to Instagram & FB', desc: 'Go live from your eyes — point of view, in real time.' },
];

const variants = [
  { name: 'Ray-Ban | Meta', desc: 'Iconic Wayfarer and Headliner silhouettes. Classic, timeless, AI-enabled.', tag: 'Most popular' },
  { name: 'Oakley | Meta HSTN', desc: 'Performance heritage meets Meta AI. Built for athletes, made for legends.', tag: 'New 2025' },
];

export default function MetaAIPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={SMART} alt="" fill className="object-cover opacity-40" priority sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/20 via-bg-primary/70 to-bg-primary" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.18),transparent_55%)]" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 2 }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full border border-gold/15 animate-spin-slow"
          />
        </div>

        <div className="mx-auto max-w-7xl px-6">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3.5 w-3.5" /> The Future of Eyewear
          </motion.div>

          <h1 className="mt-8 font-display text-6xl md:text-8xl lg:text-9xl tracking-tight leading-[0.9]">
            <span className="block">Meta AI</span>
            <span className="block gold-text">Smart Glasses.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-ink/75 text-lg leading-relaxed">
            Capture, listen, call and converse — without ever reaching for your phone. Now stocked at Eylux Eye Care, Hadapsar. Walk in for a private demonstration.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href="/contact" className="btn-gold" data-testid="meta-page-book-btn">Book Private Demo</a>
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'}`} className="btn-ghost" data-testid="meta-page-wa-btn">WhatsApp Inquiry</a>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Capabilities" title={<>Tomorrow&apos;s eyewear, <span className="gold-text">today.</span></>} />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {features.map((f, i) => {
              const Icon = f.icon;
              return (
                <motion.div
                  key={f.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="rounded-3xl glass p-7 hover:border-gold/40 transition group"
                >
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                  <p className="mt-3 text-sm text-ink/70 leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading align="center" eyebrow="The collection" title={<>Two icons. <span className="gold-text">One intelligence.</span></>} />
          <div className="mt-14 grid md:grid-cols-2 gap-5">
            {variants.map((v) => (
              <div key={v.name} className="relative rounded-[2rem] overflow-hidden glass-strong aspect-[5/4]">
                <Image src={SMART} alt={v.name} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                <div className="absolute top-5 right-5 glass-strong rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">{v.tag}</div>
                <div className="absolute bottom-7 left-7 right-7">
                  <p className="font-display text-3xl md:text-4xl">{v.name}</p>
                  <p className="mt-3 text-sm text-ink/75 max-w-sm">{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
