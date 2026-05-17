import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import Image from 'next/image';
import { Baby, Smile, ShieldCheck, Sparkles } from 'lucide-react';

export const metadata = {
  title: 'Kids Eye Test & Children\'s Eyewear in Hadapsar',
  description: 'Gentle paediatric eye testing and stylish, durable kids frames in Hadapsar, Pune. Trusted by parents in Keshav Nagar and Magarpatta.',
};

const features = [
  { icon: Smile, title: 'Play-friendly testing', desc: 'Picture-based optotypes and gamified vision checks keep little ones engaged.' },
  { icon: ShieldCheck, title: 'Unbreakable frames', desc: 'Flexible TR-90 and silicone frames that survive school, sport and tumbles.' },
  { icon: Baby, title: 'From age 3+', desc: 'Comprehensive paediatric care from pre-school through teenage years.' },
  { icon: Sparkles, title: 'Style they\'ll love', desc: 'Disney, Tommy Hilfiger Kids, IDEE and more — colours and silhouettes children pick themselves.' },
];

export default function KidsVisionPage() {
  return (
    <>
      <PageHero
        eyebrow="Kids Vision Care"
        title={<>Big eye care, for <span className="gold-text">tiny faces.</span></>}
        subtitle="Children deserve the same precision and patience we offer adults — delivered with a softer voice, a friendlier chair and frames they'll actually want to wear."
        image="https://images.unsplash.com/photo-1742321694002-77d33db25f68?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85"
        ctaPrimary={{ label: "Book child's eye test", href: '/contact' }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative aspect-[4/5] rounded-3xl overflow-hidden glass">
            <Image src="https://images.unsplash.com/photo-1742321694002-77d33db25f68?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85" alt="Kids in glasses" fill className="object-cover" sizes="(min-width:1024px) 50vw, 100vw" />
          </div>
          <div className="lg:col-span-6">
            <SectionHeading eyebrow="The Eylux kids experience" title={<>Where eye tests <span className="gold-text">become fun.</span></>} subtitle="Many children spend more time on screens than ever before, and undetected vision problems can affect their reading, learning and confidence. We catch it early — gently." />
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {features.map((f) => {
                const Icon = f.icon;
                return (
                  <div key={f.title} className="rounded-2xl glass p-5">
                    <Icon className="h-5 w-5 text-gold" strokeWidth={1.5} />
                    <h3 className="mt-4 font-display text-base">{f.title}</h3>
                    <p className="mt-2 text-xs text-white/55 leading-relaxed">{f.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
