'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import SectionHeading from '../SectionHeading';

const gallery = [
  'https://images.unsplash.com/photo-1764778055595-b641b067ab40?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
  'https://images.unsplash.com/photo-1525786210598-d527194d3e9a?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
  'https://images.unsplash.com/photo-1778731525581-9cff0deca568?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
  'https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
];

export default function StoreExperience() {
  return (
    <section className="relative py-28 md:py-40" data-testid="home-store">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="The boutique"
          title={<>A space where <span className="gold-text">precision meets poise.</span></>}
          subtitle="Walk into a quietly luxurious studio in Keshav Nagar - warm lighting, velvet displays and unhurried consultations. The way eyewear shopping should always have felt."
        />

        <div className="mt-16 grid grid-cols-12 gap-4 md:gap-5">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="col-span-12 md:col-span-7 relative aspect-[4/3] rounded-3xl overflow-hidden glass"
          >
            <Image src={gallery[0]} alt="Eylux store interior" fill sizes="(min-width:768px) 60vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">The boutique</p>
              <p className="font-display text-3xl mt-1">Velvet, marble, gold.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="col-span-6 md:col-span-5 relative aspect-square rounded-3xl overflow-hidden glass"
          >
            <Image src={gallery[1]} alt="Frames showcase" fill sizes="(min-width:768px) 40vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="col-span-6 md:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden glass"
          >
            <Image src={gallery[2]} alt="Eyewear styling" fill sizes="(min-width:768px) 40vw, 50vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="col-span-12 md:col-span-7 relative aspect-[16/10] rounded-3xl overflow-hidden glass"
          >
            <Image src={gallery[3]} alt="Eye testing" fill sizes="(min-width:768px) 60vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">Eye testing suite</p>
              <p className="font-display text-2xl mt-1">Clinical-grade diagnostics.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
