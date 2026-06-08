'use client';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ to, suffix = '', duration = 2 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (v) => Math.floor(v).toLocaleString());

  useEffect(() => {
    if (inView) {
      const controls = animate(count, to, { duration, ease: [0.16, 1, 0.3, 1] });
      return controls.stop;
    }
  }, [inView, to, count, duration]);

  return (
    <span ref={ref} className="inline-flex items-baseline">
      <motion.span>{rounded}</motion.span>
      <span className="gold-text">{suffix}</span>
    </span>
  );
}

const stats = [
  { value: 15, suffix: '+', label: 'Years of Optical Expertise' },
  { value: 2500, suffix: '+', label: 'Happy Customers' },
  { value: 40, suffix: '+', label: 'Premium Brands Curated' },
  { value: 5000, suffix: '+', label: 'Eye Testing' },
];

export default function Stats() {
  return (
    <section className="relative py-24 md:py-32 border-y border-ink/10" data-testid="home-stats">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-12 gap-x-6">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="text-center md:text-left"
            >
              <p className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight tabular-nums">
                <Counter to={s.value} suffix={s.suffix} />
              </p>
              <p className="mt-3 text-[10px] sm:text-xs md:text-sm uppercase tracking-[0.15em] sm:tracking-[0.25em] text-ink/60">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
