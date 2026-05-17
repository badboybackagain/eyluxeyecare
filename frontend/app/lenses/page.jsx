import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import { Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Premium Lenses — Essilor, Hoya & Zeiss in Hadapsar',
  description: 'Progressive, blue-cut, anti-glare, photochromic and high-index lenses by Essilor, Hoya and Zeiss. Authorized partner in Hadapsar, Pune.',
};

const categories = [
  { title: 'Progressive lenses', desc: 'Seamless near, intermediate and far vision in one lens. Premium designs by Varilux, Hoyalux & Zeiss Precision.', tag: 'Essilor · Hoya · Zeiss' },
  { title: 'Blue-cut lenses', desc: 'Cut harmful blue light from screens, reduce digital eye strain and sleep better. Essential for IT professionals.', tag: 'For screens 8+ hrs/day' },
  { title: 'Computer glasses', desc: 'Specially calibrated for arm-length distances. Blue-cut + anti-fatigue + anti-glare in one.', tag: 'Anti-fatigue' },
  { title: 'Anti-glare coating', desc: 'Eliminates reflections from oncoming headlights and screens. Essential for night driving and presentations.', tag: 'Crizal · Hoya Hi-Vision' },
  { title: 'UV protection', desc: 'Full 400nm UV-A/UV-B protection — built into the lens, not just the tint. Protects retinal health long-term.', tag: 'UV400 certified' },
  { title: 'High-index lenses', desc: 'Thinner, lighter lenses for stronger prescriptions. 1.67 and 1.74 index for the most discerning eyes.', tag: 'Ultra-thin' },
  { title: 'Photochromic lenses', desc: 'Lenses that darken automatically in sunlight and clear up indoors. Transitions® and Sensity® available.', tag: 'Light-adaptive' },
  { title: 'Polarized lenses', desc: 'Eliminate glare from water, snow and roads. The gold standard for driving and outdoor sport.', tag: 'For sunlight' },
];

const brands = [
  { name: 'Essilor', tagline: 'Inventors of the progressive lens. Varilux®, Crizal® and Eyezen® for every prescription.' },
  { name: 'Hoya', tagline: 'Japanese precision optics with Hoyalux® progressives and Hi-Vision® coatings.' },
  { name: 'Zeiss', tagline: 'German engineering, century-old optical heritage. Precision® and DriveSafe® lenses.' },
];

export default function LensesPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Lenses"
        title={<>The world&apos;s finest <span className="gold-text">lens technology,</span> crafted to your eyes.</>}
        subtitle="Authorized partners of Essilor, Hoya and Zeiss — we stock the lens designs that the world's most demanding wearers rely on, and we know how to fit them."
        image="https://images.unsplash.com/photo-1530432999454-016a47c78af3?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85"
        ctaPrimary={{ label: 'Book consultation', href: '/contact' }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Lens categories" title={<>A lens for <span className="gold-text">every life</span> you lead.</>} />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((c) => (
              <div key={c.title} className="rounded-3xl glass p-6 hover:border-gold/30 transition group">
                <div className="flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-gold" />
                  <span className="text-[10px] uppercase tracking-[0.25em] text-gold/80">{c.tag}</span>
                </div>
                <h3 className="mt-5 font-display text-xl tracking-tight">{c.title}</h3>
                <p className="mt-3 text-sm text-ink/70 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading align="center" eyebrow="Partner brands" title={<>Three legendary houses, <span className="gold-text">one boutique.</span></>} />

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {brands.map((b) => (
              <div key={b.name} className="rounded-3xl glass-strong p-10 text-center hover:border-gold/40 transition">
                <p className="font-display text-5xl gold-text">{b.name}</p>
                <p className="mt-6 text-sm text-ink/70 leading-relaxed">{b.tagline}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
