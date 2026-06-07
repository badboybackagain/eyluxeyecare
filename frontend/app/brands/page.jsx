import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';

export const metadata = {
  title: 'Premium Eyewear Brands at Eylux - Hadapsar, Pune',
  description: 'Authorized stockist of Ray-Ban, Oakley, Vogue, Coach, Tommy Hilfiger, Emporio Armani, Ralph Lauren, IDEE, Essilor, Hoya and Zeiss in Hadapsar, Pune.',
};

const lenses = ['Essilor', 'Hoya', 'Zeiss'];
const frames = ['Ray-Ban', 'Oakley', 'Vogue', 'Coach', 'Emporio Armani', 'Ralph Lauren', 'Brooks Brothers', 'Tommy Hilfiger', 'IDEE'];
const smart = ['Ray-Ban Meta', 'Oakley Meta HSTN'];

function BrandCard({ name, group }) {
  return (
    <div className="group relative rounded-3xl glass aspect-[5/3] flex items-center justify-center overflow-hidden hover:border-gold/40 transition-all duration-500" data-testid={`brand-card-${name.toLowerCase().replace(/[^a-z0-9]+/g,'-')}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-gold/0 via-transparent to-gold/0 group-hover:from-gold/10 group-hover:to-transparent transition-all duration-700" />
      <div className="relative text-center px-4">
        <p className="font-display text-3xl md:text-4xl tracking-tight text-ink/85 group-hover:gold-text transition">{name}</p>
        <p className="mt-2 text-[10px] uppercase tracking-[0.35em] text-ink/45">{group}</p>
      </div>
    </div>
  );
}

export default function BrandsPage() {
  return (
    <>
      <PageHero
        eyebrow="Brands"
        title={<>The houses we proudly <span className="gold-text">represent.</span></>}
        subtitle="Every brand on our wall is hand-picked, authorized and authenticated. Forty+ luxury and contemporary names - under one boutique roof."
        image="https://images.unsplash.com/photo-1525786210598-d527194d3e9a?crop=entropy&cs=srgb&fm=jpg&w=1800&q=85"
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6 space-y-20">
          <div>
            <SectionHeading eyebrow="Lens technology" title={<>Optics by the <span className="gold-text">world&apos;s best.</span></>} />
            <div className="mt-10 grid md:grid-cols-3 gap-4">
              {lenses.map((b) => <BrandCard key={b} name={b} group="Lens House" />)}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Frames & sunglasses" title={<>Designer <span className="gold-text">eyewear houses.</span></>} />
            <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {frames.map((b) => <BrandCard key={b} name={b} group="Frames & Sun" />)}
            </div>
          </div>

          <div>
            <SectionHeading eyebrow="Smart eyewear" title={<>Meta AI <span className="gold-text">collection.</span></>} />
            <div className="mt-10 grid md:grid-cols-2 gap-4">
              {smart.map((b) => <BrandCard key={b} name={b} group="AI Smart Glasses" />)}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
