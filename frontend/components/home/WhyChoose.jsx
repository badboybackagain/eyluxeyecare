'use client';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Users, GraduationCap, HeartHandshake, Sparkles } from 'lucide-react';
import SectionHeading from '../SectionHeading';

const items = [
  { icon: ShieldCheck, title: 'Advanced diagnostic equipment', desc: 'Computerized refraction and slit-lamp examination - accurate to a fraction of a dioptre.' },
  { icon: GraduationCap, title: 'Certified opticians', desc: 'Our optometrists are trained by Essilor, Zeiss and Hoya for the most demanding prescriptions.' },
  { icon: Award, title: 'Authentic premium brands', desc: 'Every frame and lens is sourced from authorized distributors - never counterfeits, never compromises.' },
  { icon: HeartHandshake, title: 'Personalised consultation', desc: 'Unhurried 45-minute appointments. We listen to your lifestyle before we ever measure your eyes.' },
  { icon: Sparkles, title: 'Fashion + vision expertise', desc: 'Style-led frame selection that balances facial geometry, complexion and personal aesthetic.' },
  { icon: Users, title: 'Family-friendly boutique', desc: 'A space where children, parents and seniors all feel cared for - three generations of trust.' },
];

export default function WhyChoose() {
  return (
    <section className="relative py-28 md:py-40 border-y border-ink/10" data-testid="home-why-choose">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Why Eylux"
          title={<>Six reasons families across Pune <span className="gold-text">trust their vision</span> to us.</>}
        />

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-ink/[0.04] rounded-3xl overflow-hidden">
          {items.map((it, i) => {
            const Icon = it.icon;
            return (
              <motion.div
                key={it.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
                className="bg-bg-primary p-8 md:p-10 hover:bg-ink/[0.03] transition-colors duration-500 group"
              >
                <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                <h3 className="mt-6 font-display text-xl md:text-2xl tracking-tight">{it.title}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{it.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
