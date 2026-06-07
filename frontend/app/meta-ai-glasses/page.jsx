'use client';
import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import Image from 'next/image';
import { Camera, Mic, Music, Phone, Sparkles, Zap, Battery, Cloud } from 'lucide-react';
import { motion } from 'framer-motion';

const SMART_HERO = '/rayban_meta_hero.png';
const SMART_PRODUCT = '/rayban_meta_product.png';

const features = [
  { icon: Camera, title: '12 MP Ultra-wide Camera', desc: 'Capture photos and 1080p video, completely hands-free.' },
  { icon: Mic, title: 'Meta AI Assistant', desc: 'Ask anything. Translate signs. Identify landmarks. All by voice.' },
  { icon: Music, title: 'Open-ear Spatial Audio', desc: 'Crystal-clear music without blocking out the world.' },
  { icon: Phone, title: 'Calls & Messages', desc: 'Take WhatsApp calls and messages without touching your phone.' },
  { icon: Battery, title: 'All-day Battery', desc: 'Up to 32 hours with the included charging case.' },
  { icon: Cloud, title: 'Live to Instagram & FB', desc: 'Go live from your eyes — point of view, in real time.' },
];

const variants = [
  {
    name: 'Ray-Ban | Meta',
    desc: 'The ultimate fusion of iconic style and smart technology. Choose from classic Wayfarer or retro-modern Headliner designs for seamless daily capture and hands-free AI help.',
    tag: 'Most Popular',
    image: '/rayban_meta_product.png',
    specs: {
      silhouettes: 'Wayfarer & Headliner',
      material: 'Glossy/Matte Acetate',
      camera: '12 MP Ultra-wide (1080p)',
      lenses: 'Transitions® Gen S, Polarized',
      audio: 'Open-ear Spatial Speakers',
      control: 'Touchpad & voice commands'
    }
  },
  {
    name: 'Oakley | Meta HSTN',
    desc: 'High-performance eyewear meets state-of-the-art AI. Featuring Oakley\'s signature active heritage, geometric keyhole bridge, and durable build designed for movement and outdoor sport.',
    tag: 'Active & Sport',
    image: '/oakley_meta_product.png',
    specs: {
      silhouettes: 'HSTN round profile',
      material: 'O-Matter™ (Ultra-light)',
      camera: '12 MP (Up to 3K POV Video)',
      lenses: 'Prizm™ contrast-optimizing',
      audio: 'Directional Speakers + 5 Mics',
      control: 'Intuitive touch & voice'
    }
  }
];

export default function MetaAIPage() {
  return (
    <>
      <section className="relative pt-40 pb-24 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <Image src={SMART_HERO} alt="" fill className="object-cover opacity-40" priority sizes="100vw" />
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
            <a href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919960750915'}`} className="btn-ghost" data-testid="meta-page-wa-btn">WhatsApp Inquiry</a>
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
          <div className="mt-14 grid md:grid-cols-2 gap-8">
            {variants.map((v) => (
              <div key={v.name} className="rounded-[2.5rem] overflow-hidden glass hover:border-gold/30 transition duration-500 flex flex-col">
                <div className="relative aspect-[4/3] w-full">
                  <Image src={v.image} alt={v.name} fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg-surface via-transparent to-transparent opacity-20" />
                  <div className="absolute top-5 right-5 glass-strong rounded-full px-4 py-1.5 text-[10px] uppercase tracking-[0.3em] text-gold">{v.tag}</div>
                </div>
                <div className="p-8 md:p-10 flex-1 flex flex-col">
                  <h3 className="font-display text-3xl md:text-4xl text-ink">{v.name}</h3>
                  <p className="mt-4 text-sm text-ink-soft leading-relaxed flex-1">{v.desc}</p>
                  
                  <div className="mt-8 pt-8 border-t border-ink/10 space-y-4">
                    <h4 className="text-[10px] uppercase tracking-[0.25em] text-gold font-semibold">Specifications</h4>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 text-xs">
                      {Object.entries(v.specs).map(([label, val]) => (
                        <div key={label} className="space-y-1">
                          <span className="text-ink-muted uppercase tracking-wider text-[9px] block">{label}</span>
                          <p className="text-ink font-medium">{val}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Section */}
      <section className="py-24 md:py-32 bg-bg-surface/30 border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            align="center"
            eyebrow="Head to Head"
            title={<>Compare <span className="gold-text">Ray-Ban Meta</span> vs <span className="gold-text">Oakley Meta</span></>}
          />
          
          <div className="mt-16 overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[600px] text-sm">
              <thead>
                <tr className="border-b border-ink/10">
                  <th className="py-4 font-display text-lg text-ink font-semibold w-1/3">Feature</th>
                  <th className="py-4 font-display text-lg text-ink font-semibold w-1/3">Ray-Ban | Meta</th>
                  <th className="py-4 font-display text-lg text-ink font-semibold w-1/3">Oakley | Meta HSTN</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'Best For', rayban: 'Everyday wear, lifestyle, classic style', oakley: 'Active sports, outdoor adventures, athletic fit' },
                  { feature: 'Frame Materials', rayban: 'Premium glossy/matte acetate frames', oakley: 'Proprietary O-Matter™ (high durability, low weight)' },
                  { feature: 'Silhouettes & Styles', rayban: 'Wayfarer (square) & Headliner (round-oval)', oakley: 'HSTN (classic round frame with geometric bridge)' },
                  { feature: 'Lens Specialization', rayban: 'Transitions® Gen S, Polarized, Blue-Light Filter', oakley: 'Oakley Prizm™ (color & contrast optimization)' },
                  { feature: 'Video Quality', rayban: '1080p hands-free video recording (clip limit 3 min)', oakley: 'Enhanced 3K resolution video recording at 30 fps' },
                  { feature: 'Water/Dust Resistance', rayban: 'IPX4 splash-resistant', oakley: 'IPX4 splash-resistant (sweatproof)' },
                  { feature: 'Storage Capacity', rayban: '32 GB internal (1000+ photos / 100+ videos)', oakley: '32 GB internal (1000+ photos / 100+ videos)' },
                  { feature: 'Charging Case', rayban: 'Up to 32 hours with compact charging case', oakley: 'Up to 32 hours with high-durability case' },
                ].map((row, idx) => (
                  <tr key={idx} className="border-b border-ink/5 hover:bg-ink/[0.02] transition-colors">
                    <td className="py-4 pr-4 font-medium text-ink">{row.feature}</td>
                    <td className="py-4 pr-4 text-ink-soft">{row.rayban}</td>
                    <td className="py-4 text-ink-soft">{row.oakley}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
