import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import Image from 'next/image';

export const metadata = {
  title: 'About — A Boutique Optical Story in Hadapsar, Pune',
  description: 'Eylux Eye Care is a premium optical boutique in Hadapsar, Pune. Discover our story, our values and the people behind the precision.',
};

const milestones = [
  { year: '2010', title: 'A boutique begins', text: 'A small family-run optical opens its doors in Hadapsar, with a single chair and an obsession for accuracy.' },
  { year: '2014', title: 'Premium partnerships', text: 'Authorized partnerships with Essilor, Hoya and Zeiss establish Eylux as the city\'s reference for progressive lenses.' },
  { year: '2018', title: 'Designer wall', text: 'A curated luxury collection arrives — Ray-Ban, Oakley, Ralph Lauren, Coach, Tommy Hilfiger and Emporio Armani.' },
  { year: '2022', title: 'Paediatric care', text: 'A dedicated kids vision suite opens, gentle and play-friendly.' },
  { year: '2024', title: 'Smart eyewear era', text: 'Eylux becomes one of Pune\'s earliest stockists of Ray-Ban and Oakley Meta AI smart glasses.' },
  { year: '2025', title: 'The new boutique', text: 'A redesigned flagship — marble, velvet and warm gold — opens in Keshav Nagar.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About Eylux"
        title={<>An obsession with <span className="gold-text">clarity</span>, since 2010.</>}
        subtitle="What started as a neighbourhood optical has grown into Hadapsar's most trusted vision boutique — where world-class eyewear meets unhurried, personal care."
        image="https://images.unsplash.com/photo-1778731525581-9cff0deca568?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <SectionHeading eyebrow="Our philosophy" title={<>Eyewear is <span className="gold-text">personal</span>, never transactional.</>} />
          </div>
          <div className="lg:col-span-7 space-y-6 text-white/65 text-base md:text-lg leading-relaxed">
            <p>We believe a pair of glasses is the most intimate accessory you wear — closer to you than any other object, all day, every day. So we treat them with the seriousness they deserve.</p>
            <p>Every Eylux consultation begins with a conversation. About your work, your screens, your hobbies, the way light falls on your face. Only then do we measure, advise and craft.</p>
            <p>The result is eyewear that feels like it belongs to you — clinically precise, fashion-forward and quietly luxurious.</p>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-y border-white/5">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Our journey" title={<>Fifteen years of <span className="gold-text">measured progress.</span></>} />
          <div className="mt-16 relative">
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent" />
            <div className="space-y-12">
              {milestones.map((m, i) => (
                <div key={m.year} className={`relative grid md:grid-cols-2 gap-6 md:gap-12 ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}>
                  <div className="md:text-right pl-12 md:pl-0 md:[direction:ltr]">
                    <p className="font-display text-5xl md:text-6xl gold-text">{m.year}</p>
                  </div>
                  <div className="pl-12 md:pl-0 md:[direction:ltr]">
                    <h3 className="font-display text-2xl">{m.title}</h3>
                    <p className="mt-3 text-white/60 leading-relaxed">{m.text}</p>
                  </div>
                  <span className="absolute left-4 md:left-1/2 top-3 -translate-x-1/2 h-3 w-3 rounded-full bg-gold ring-4 ring-bg-primary" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10">
          <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass">
            <Image src="https://images.unsplash.com/photo-1764778055595-b641b067ab40?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85" alt="The Eylux boutique" fill className="object-cover" sizes="(min-width:768px) 50vw, 100vw" />
          </div>
          <div className="self-center">
            <SectionHeading eyebrow="Visit us" title={<>The Hadapsar <span className="gold-text">boutique.</span></>} subtitle="Step into a quietly luxurious studio in Keshav Nagar. We offer walk-ins, but reserved appointments mean less wait and more time for your vision." />
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
