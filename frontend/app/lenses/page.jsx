import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import { Sparkles } from 'lucide-react';
import Image from 'next/image';

export const metadata = {
  title: 'Premium Lenses - EssilorLuxottica, Hoya & Zeiss in Hadapsar',
  description: 'Progressive, blue-cut, anti-reflection, photochromic and high-index lenses by EssilorLuxottica, Hoya and Zeiss. Authorized partner in Hadapsar, Pune.',
};

const categories = [
  { title: 'Progressive lenses', desc: 'Seamless near, intermediate and far vision in one lens. Premium designs by Varilux, Hoyalux & Zeiss Precision.', tag: 'EssilorLuxottica · Hoya · Zeiss' },
  { title: 'Blue-cut Lenses', desc: 'Protects from harmful blue light emitted by digital screens, reducing eye strain and improving sleep quality. Ideal for long screen hours.', tag: 'Blue-cut & Computer' },
  { title: 'Advance single vision glasses', desc: 'Tailored for a digitally connected lifestyle. Optimized for near-to-intermediate viewing, reducing eye fatigue during prolonged screen use.', tag: 'Digital Lifestyle' },
  { title: 'Anti-reflection coating', desc: 'Eliminates reflections from oncoming headlights and digital screens. Essential for night driving and visual clarity.', tag: 'Hi-Vision · Crizal' },
  { title: 'UV protection', desc: 'Full 400nm UV-A/UV-B protection - built into the lens, not just the tint. Protects retinal health long-term.', tag: 'UV400 certified' },
  { title: 'High-index lenses', desc: 'Thinner, lighter lenses for stronger prescriptions. 1.67 and 1.74 index for the most discerning eyes.', tag: 'Ultra-thin' },
  { title: 'Photochromic lenses', desc: 'Lenses that darken automatically in sunlight and clear up indoors. Transitions® and Sensity® available.', tag: 'Light-adaptive' },
  { title: 'Polarized lenses', desc: 'Eliminate glare from water, snow and roads. The gold standard for driving and outdoor sport.', tag: 'For sunlight' },
];

const brands = [
  { name: 'EssilorLuxottica', tagline: 'Inventors of the progressive lens. Varilux®, Crizal® and Eyezen® for every prescription.' },
  { name: 'Hoya', tagline: 'Japanese precision optics with Hoyalux® progressives and Hi-Vision® coatings.' },
  { name: 'Zeiss', tagline: 'German engineering, century-old optical heritage. Precision® and DriveSafe® lenses.' },
];

export default function LensesPage() {
  return (
    <>
      <PageHero
        eyebrow="Premium Lenses"
        title={<>The world&apos;s finest <span className="gold-text">lens technology,</span> crafted to your eyes.</>}
        subtitle="Authorized partners of EssilorLuxottica, Hoya and Zeiss - we stock the lens designs that the world's most demanding wearers rely on, and we know how to fit them."
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

      <section className="py-24 md:py-32 border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden glass">
            <Image src="/images/optical_solutions.jpeg" alt="Personalised Optical Solutions" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading 
              eyebrow="Advance Optical Solutions" 
              title={<>Experience vision <span className="gold-text">tailored to you.</span></>} 
              subtitle="At Eylux Eyecare, we provide personalized optical solutions designed around your prescription, lifestyle, work environment, and daily visual needs." 
            />
            <div className="mt-6 space-y-4 text-sm text-ink/75 leading-relaxed">
              <p>
                Whether you work on digital screens, drive frequently, or need clear vision at multiple distances, our customized progressive lenses are carefully selected and precision-fitted for seamless, comfortable vision throughout the day.
              </p>
              <p>
                Using advanced measurements and premium lens technologies, we deliver wider viewing zones, reduced distortion, and enhanced visual comfort. Every frame and lens combination is thoughtfully matched to your unique features and visual habits.
              </p>
              <p>
                From first-time progressive wearers to experienced users, we create bespoke vision solutions that combine clarity, comfort, and style.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-ink/10">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 lg:order-last relative aspect-[4/5] rounded-3xl overflow-hidden glass">
            <Image src="/images/single_vision_lenses.jpeg" alt="Advance Single Vision Lenses" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading 
              eyebrow="Digitally Connected" 
              title={<>Advance single vision lenses <span className="gold-text">for screen life.</span></>} 
              subtitle="Tailored for a modern, digitally connected lifestyle - reducing eye fatigue and protecting visual health." 
            />
            <p className="mt-6 text-sm text-ink/75 leading-relaxed">
              If you spend long hours looking at monitors, smartphones, or tablets, your eyes are constantly straining to adjust. Our advanced single vision lenses are optimized specifically for modern digital lifestyles. They feature built-in blue-light filtration and custom near-to-intermediate viewing zones, reducing fatigue, dryness, and digital strain for comfortable vision all day.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading align="center" eyebrow="Partner brands" title={<>Three legendary houses, <span className="gold-text">one boutique.</span></>} />

          <div className="mt-14 grid md:grid-cols-3 gap-5">
            {brands.map((b) => (
              <div key={b.name} className="rounded-3xl glass-strong p-10 text-center hover:border-gold/40 transition">
                <p className="font-display text-3xl lg:text-5xl gold-text">{b.name}</p>
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
