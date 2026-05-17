'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';

const HERO_IMAGE = 'https://images.unsplash.com/photo-1618677366787-9727aacca7ea?crop=entropy&cs=srgb&fm=jpg&w=2000&q=85';
const SIDE_IMAGE = 'https://images.unsplash.com/photo-1530432999454-016a47c78af3?crop=entropy&cs=srgb&fm=jpg&w=1200&q=85';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-[100svh] overflow-hidden flex items-center" data-testid="home-hero">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <Image
          src={HERO_IMAGE}
          alt="Luxury eyewear"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/55 via-bg-primary/82 to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/70 via-bg-primary/30 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_75%_25%,rgba(168,132,42,0.18),transparent_55%)] mix-blend-multiply" />
      </motion.div>

      {/* subtle decorative orbits */}
      <div className="pointer-events-none absolute -right-40 top-1/3 h-[500px] w-[500px] rounded-full border border-ink/10 animate-spin-slow" />
      <div className="pointer-events-none absolute -right-60 top-1/4 h-[700px] w-[700px] rounded-full border border-ink/[0.06] animate-spin-slow" style={{ animationDirection: 'reverse' }} />

      <div className="relative mx-auto max-w-7xl px-6 w-full pt-32 pb-20">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass text-xs uppercase tracking-[0.25em] text-ink/75"
            >
              <Sparkles className="h-3.5 w-3.5 text-gold" />
              Premium Optical Boutique · Hadapsar, Pune
            </motion.div>

            <h1 className="mt-8 font-display tracking-tight leading-[0.92] text-5xl sm:text-6xl md:text-7xl lg:text-[6.5rem]">
              {['Luxury', 'Eyewear.', 'Precision', 'Vision.', 'Trusted', 'Eye', 'Care.'].map((word, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="inline-block mr-3"
                >
                  {i === 1 || i === 6 ? <span className="gold-text">{word}</span> : word}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.95 }}
              className="mt-8 max-w-xl text-ink/75 text-base md:text-lg leading-relaxed"
            >
              A boutique optical experience in Hadapsar — advanced digital eye testing, branded designer frames, progressive lenses, kids vision care, and the new generation of Meta AI smart glasses.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.1 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link href="/contact" className="btn-gold" data-testid="hero-book-test-btn">
                Book Eye Test <ArrowUpRight className="h-4 w-4" />
              </Link>
              <a
                href={`https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919999999999'}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
                data-testid="hero-whatsapp-btn"
              >
                Chat on WhatsApp
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.4 }}
              className="mt-16 flex items-center gap-6 text-xs uppercase tracking-[0.25em] text-ink/55"
            >
              <span>Essilor</span><span className="text-ink/25">·</span>
              <span>Zeiss</span><span className="text-ink/25">·</span>
              <span>Ray-Ban</span><span className="text-ink/25">·</span>
              <span>Oakley</span><span className="text-ink/25">·</span>
              <span className="hidden md:inline">Meta AI</span>
            </motion.div>
          </div>

          <div className="lg:col-span-5 hidden lg:block">
            <motion.div
              initial={{ opacity: 0, scale: 0.92, rotate: -3 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 1.2, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              <div className="relative aspect-[3/4] rounded-[2rem] overflow-hidden glass-strong">
                <Image src={SIDE_IMAGE} alt="Luxury frames detail" fill sizes="500px" className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold-light">Curated Collection</p>
                  <p className="mt-2 font-display text-2xl text-white">12+ Luxury Houses</p>
                </div>
              </div>

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -left-10 -bottom-6 rounded-2xl glass-strong p-4 w-56"
              >
                <p className="text-[10px] uppercase tracking-[0.3em] text-gold">Now Available</p>
                <p className="font-display text-lg leading-tight mt-1 text-ink">Ray-Ban Meta AI Glasses</p>
                <p className="text-xs text-ink/70 mt-1">Built-in camera · Voice · Music</p>
              </motion.div>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 1 }}
          className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.4em] text-ink/45"
        >
          <span>Scroll</span>
          <span className="h-10 w-px bg-gradient-to-b from-ink/40 to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
