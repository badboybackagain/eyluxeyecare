import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import { Droplets, Sun, Heart, Shield } from 'lucide-react';

export const metadata = {
  title: 'Contact Lenses in Hadapsar — Daily, Monthly & Toric Fitting',
  description: 'Premium contact lenses by Acuvue, Bausch+Lomb and CooperVision. Daily disposables, monthly, toric and coloured lenses fitted by specialists in Hadapsar, Pune.',
};

const types = [
  { icon: Droplets, title: 'Daily disposables', desc: 'Fresh pair every day. Hygienic, low-maintenance and perfect for occasional wearers.' },
  { icon: Heart, title: 'Monthly lenses', desc: 'Premium silicone-hydrogel monthlies for everyday comfort. Most economical for regular wearers.' },
  { icon: Shield, title: 'Toric (for astigmatism)', desc: 'Specially designed lenses that correct astigmatism. Custom-fitted for stable, sharp vision.' },
  { icon: Sun, title: 'Coloured & cosmetic', desc: 'FDA-approved coloured lenses from premium brands. Subtle to bold, with prescription or plano.' },
];

export default function ContactLensesPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Lenses"
        title={<>Effortless vision, <span className="gold-text">expertly fitted.</span></>}
        subtitle="From daily disposables to specialised toric lenses, our certified contact lens specialists ensure a comfortable, hygienic and crystal-clear fit."
        image="https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85"
        ctaPrimary={{ label: 'Book a fitting', href: '/contact' }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Lens types" title={<>The right lens, <span className="gold-text">for the right life.</span></>} />
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {types.map((t) => {
              const Icon = t.icon;
              return (
                <div key={t.title} className="rounded-3xl glass p-7 hover:border-gold/30 transition">
                  <Icon className="h-6 w-6 text-gold" strokeWidth={1.5} />
                  <h3 className="mt-5 font-display text-xl">{t.title}</h3>
                  <p className="mt-3 text-sm text-white/55 leading-relaxed">{t.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-2 gap-12">
          <SectionHeading eyebrow="The fitting process" title={<>A <span className="gold-text">90-minute</span> consultation.</>} subtitle="A proper contact lens fitting is more than a prescription. We measure corneal curvature, evaluate tear film, trial a lens, and only finalise once you feel completely comfortable." />
          <ol className="space-y-5">
            {[
              ['Corneal measurement', 'Topography mapping for the perfect base curve.'],
              ['Tear film evaluation', 'Ensuring your eyes stay hydrated through long wear.'],
              ['Trial fitting', 'Wear a trial pair to test comfort and movement.'],
              ['Vision check & adjustment', 'Fine-tune power and design until vision is perfect.'],
              ['Care & hygiene training', 'Step-by-step training on insertion, removal and storage.'],
            ].map(([t, d], i) => (
              <li key={t} className="flex gap-5 rounded-2xl glass p-5">
                <span className="font-display text-3xl gold-text w-12">{(i + 1).toString().padStart(2, '0')}</span>
                <div>
                  <p className="font-display text-lg">{t}</p>
                  <p className="text-sm text-white/55 mt-1">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
