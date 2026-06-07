import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import Image from 'next/image';

export const metadata = {
  title: 'Designer Frames & Sunglasses in Hadapsar, Pune',
  description: 'Luxury optical frames and designer sunglasses for men, women and kids in Hadapsar. Ray-Ban, Oakley, Coach, Vogue, Emporio Armani and more.',
};

const collections = [
  { title: 'Optical Frames', subtitle: 'For everyday elegance', image: 'https://source.unsplash.com/900x900/?glasses,frames', size: 'tall' },
  { title: 'Designer Sunglasses', subtitle: 'Make a statement', image: 'https://source.unsplash.com/900x900/?sunglasses', size: 'wide' },
  { title: 'Premium Acetate', subtitle: 'Handcrafted detail', image: 'https://source.unsplash.com/900x900/?eyewear', size: 'square' },
  { title: 'Titanium & Rimless', subtitle: 'Featherweight precision', image: 'https://source.unsplash.com/900x900/?rimless,glasses', size: 'square' },
];

const houses = ['Ray-Ban', 'Oakley', 'Vogue', 'Coach', 'Emporio Armani', 'Ralph Lauren', 'Brooks Brothers', 'Tommy Hilfiger', 'IDEE'];

export default function FramesPage() {
  return (
    <>
      <PageHero
        eyebrow="Frames & Sunglasses"
        title={<>A curated <span className="gold-text">wall of style.</span></>}
        subtitle="From understated titanium to bold luxury acetate, our boutique stocks silhouettes for every face, mood and occasion."
        image="https://images.unsplash.com/photo-1525786210598-d527194d3e9a?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85"
        ctaPrimary={{ label: 'Visit the boutique', href: '/contact' }}
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Editorial collections" title={<>Curated for the <span className="gold-text">discerning eye.</span></>} />

          <div className="mt-16 grid grid-cols-12 gap-4 md:gap-5">
            {collections.map((c, i) => {
              const span =
                c.size === 'tall' ? 'col-span-12 md:col-span-5 md:row-span-2 aspect-[3/4] md:aspect-auto' :
                c.size === 'wide' ? 'col-span-12 md:col-span-7 aspect-[16/10]' :
                'col-span-6 md:col-span-3 lg:col-span-3 md:col-start-auto aspect-square';
              const shift = c.size === 'square' && i === 3 ? 'md:col-start-9' : '';
              return (
                <div key={c.title} className={`relative overflow-hidden rounded-3xl glass group ${span} ${shift}`}>
                  <Image src={c.image} alt={c.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.2s]" sizes="(min-width:768px) 50vw, 100vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <p className="text-[10px] uppercase tracking-[0.3em] text-gold/80">{c.subtitle}</p>
                    <p className="mt-1 font-display text-2xl md:text-3xl">{c.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 border-y border-ink/10">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <SectionHeading align="center" eyebrow="The brand wall" title={<>Houses we <span className="gold-text">proudly carry.</span></>} />
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {houses.map((h) => (
              <span key={h} className="glass rounded-full px-5 py-2.5 text-sm tracking-wider text-ink/85 hover:border-gold/40 transition">{h}</span>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
