'use client';
import Marquee from 'react-fast-marquee';
import SectionHeading from '../SectionHeading';

const brands = [
  'Essilor', 'Hoya', 'Zeiss', 'Ray-Ban', 'Oakley', 'Vogue',
  'IDEE', 'Ralph Lauren', 'Brooks Brothers', 'Coach', 'Tommy Hilfiger', 'Emporio Armani',
];

export default function BrandMarquee() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden" data-testid="home-brands">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          align="center"
          eyebrow="Houses we represent"
          title={<>The <span className="gold-text">world&apos;s finest</span> eyewear, curated for Pune.</>}
        />
      </div>

      <div className="mt-16 relative">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-bg-primary to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-bg-primary to-transparent z-10" />

        <Marquee speed={40} gradient={false} pauseOnHover>
          {brands.map((b) => (
            <div key={b} className="mx-8 md:mx-14">
              <span className="font-display text-3xl md:text-5xl text-ink/55 hover:text-ink transition-colors duration-500 tracking-tight whitespace-nowrap">
                {b}
              </span>
            </div>
          ))}
        </Marquee>

        <div className="mt-10">
          <Marquee speed={30} gradient={false} direction="right">
            {brands.slice().reverse().map((b) => (
              <div key={'r-' + b} className="mx-8 md:mx-14">
                <span className="font-display text-2xl md:text-4xl text-white/25 hover:text-gold transition-colors duration-500 tracking-tight whitespace-nowrap italic">
                  {b}
                </span>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
