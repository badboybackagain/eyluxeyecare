import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import { ScanEye, Brain, Activity, Baby, Layers, Eye } from 'lucide-react';

export const metadata = {
  title: 'Digital Eye Testing in Hadapsar — Precision Vision Diagnostics',
  description: 'Comprehensive computerized eye testing in Hadapsar, Pune. Refraction, retinal screening, kids eye tests and progressive lens consultations at Eylux Eye Care.',
};

const tests = [
  { icon: ScanEye, title: 'Computerized refraction', desc: 'Auto-refractometer readings accurate to 0.25 dioptre, refined by manual phoropter verification.' },
  { icon: Layers, title: 'Retinal screening', desc: 'Fundus imaging to detect early signs of diabetic retinopathy, hypertensive changes and macular health.' },
  { icon: Activity, title: 'Slit-lamp examination', desc: 'High-magnification assessment of cornea, conjunctiva, iris and lens for clinical-grade ocular health.' },
  { icon: Brain, title: 'Binocular vision check', desc: 'Coordination, focusing and eye-muscle balance — essential for IT professionals and avid readers.' },
  { icon: Baby, title: 'Paediatric assessment', desc: 'Child-friendly testing using picture optotypes, retinoscopy and cycloplegic refraction when needed.' },
  { icon: Eye, title: 'Progressive lens consultation', desc: 'Detailed lifestyle questionnaire and frame measurements to recommend the right corridor and design.' },
];

const flow = [
  { step: '01', title: 'Welcome & lifestyle conversation' },
  { step: '02', title: 'Auto-refraction & visual acuity' },
  { step: '03', title: 'Manual refinement with phoropter' },
  { step: '04', title: 'Binocular balance & near vision' },
  { step: '05', title: 'Ocular health screening' },
  { step: '06', title: 'Lens & frame recommendation' },
  { step: '07', title: 'Try-on, fitting & order' },
];

export default function EyeTestingPage() {
  return (
    <>
      <PageHero
        eyebrow="Digital Eye Testing"
        title={<>Vision diagnostics, <span className="gold-text">measured to perfection.</span></>}
        subtitle="A 30-45 minute comprehensive eye exam combining the latest clinical-grade equipment with the kind of unhurried attention that boutique optical deserves."
        image="https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85"
        ctaPrimary={{ label: 'Book your test', href: '/contact' }}
        ctaSecondary={{ label: 'WhatsApp us', href: '/contact' }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="What's included" title={<>A complete <span className="gold-text">visual workup.</span></>} subtitle="Every test goes well beyond a prescription — we screen for conditions you may not even know to ask about." />

          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {tests.map((t) => {
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
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="The Eylux 7-step exam" title={<>How your <span className="gold-text">appointment</span> unfolds.</>} />
          <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {flow.map((f, i) => (
              <div key={f.step} className={`rounded-3xl p-6 ${i === flow.length - 1 ? 'glass-strong border-gold/30' : 'glass'}`}>
                <span className="font-display text-4xl gold-text">{f.step}</span>
                <h3 className="mt-4 text-base text-white">{f.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
