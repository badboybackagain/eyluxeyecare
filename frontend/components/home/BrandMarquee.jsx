'use client';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import SectionHeading from '../SectionHeading';

const Marquee = dynamic(() => import('react-fast-marquee'), { ssr: false });

const brandLogos = [
  { name: 'EssilorLuxottica', src: '/logos/essilor.svg' },
  { name: 'Hoya', src: '/logos/hoya.svg' },
  { name: 'Zeiss', src: '/logos/zeiss.svg' },
  { name: 'Ray-Ban', src: '/logos/rayban.svg' },
  { name: 'Oakley', src: '/logos/oakley.svg' },
  { name: 'Vogue', src: '/logos/vogue.svg' },
  { name: 'IDEE', src: '/logos/idee.svg' },
  { name: 'Ralph Lauren', src: '/logos/ralph_lauren.svg' },
  { name: 'Polo Ralph Lauren', src: '/logos/polo_ralph_lauren.svg' },
  { name: 'Brooks Brothers', src: '/logos/brooks_brothers.svg' },
  { name: 'Coach', src: '/logos/coach.svg' },
  { name: 'Tommy Hilfiger', src: '/logos/tommy_hilfiger.svg' },
  { name: 'Emporio Armani', src: '/logos/armani.svg' },
  { name: 'Fastrack', src: '/logos/fastrack.svg' },
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
          {brandLogos.map((logo) => (
            <div key={logo.name} className="mx-8 md:mx-14">
              <div className="relative h-10 md:h-12 w-32 md:w-40 flex items-center justify-center">
                <Image
                  src={logo.src}
                  alt={logo.name}
                  fill
                  sizes="(min-width: 768px) 160px, 128px"
                  className="object-contain filter grayscale contrast-[0.9] opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                />
              </div>
            </div>
          ))}
        </Marquee>

        <div className="mt-10">
          <Marquee speed={30} gradient={false} direction="right" pauseOnHover>
            {brandLogos.slice().reverse().map((logo) => (
              <div key={'r-' + logo.name} className="mx-8 md:mx-14">
                <div className="relative h-8 md:h-10 w-28 md:w-36 flex items-center justify-center">
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    fill
                    sizes="(min-width: 768px) 144px, 112px"
                    className="object-contain filter grayscale contrast-[0.8] opacity-35 hover:opacity-100 hover:grayscale-0 transition-all duration-500"
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}
