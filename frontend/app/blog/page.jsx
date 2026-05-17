import PageHero from '../../components/PageHero';
import SectionHeading from '../../components/SectionHeading';
import FinalCTA from '../../components/home/FinalCTA';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Eye Care Journal — Eylux Eye Care Blog',
  description: 'Insights on eye health, lens technology, eyewear fashion and the future of smart glasses. From the Eylux Eye Care boutique in Hadapsar, Pune.',
};

const posts = [
  {
    slug: 'choosing-progressive-lenses',
    title: 'How to choose the right progressive lens',
    excerpt: 'A practical guide to picking between standard, premium and personalised progressive designs from Essilor, Hoya and Zeiss.',
    image: 'https://images.unsplash.com/photo-1530432999454-016a47c78af3?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
    category: 'Lens Education',
    date: 'November 2025',
    read: '6 min',
  },
  {
    slug: 'meta-ai-glasses-first-look',
    title: 'Meta AI glasses: first look from the boutique',
    excerpt: 'We tested the Ray-Ban Meta and Oakley HSTN for a week. Here is what genuinely surprised us — and what to expect.',
    image: 'https://images.unsplash.com/photo-1562330744-0e81c1e9dd88?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
    category: 'Smart Eyewear',
    date: 'October 2025',
    read: '8 min',
  },
  {
    slug: 'blue-light-it-professionals',
    title: 'Blue light, IT professionals & the new evening hours',
    excerpt: 'Why people working 10+ hours on screens benefit from purpose-built blue-cut lenses — and what to look for.',
    image: 'https://images.unsplash.com/photo-1576210117723-cd06449a467d?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
    category: 'Vision Health',
    date: 'September 2025',
    read: '5 min',
  },
  {
    slug: 'kids-eye-exam-when',
    title: 'When should my child have their first eye exam?',
    excerpt: 'Paediatric vision milestones every parent in Pune should know, and how to spot early warning signs.',
    image: 'https://images.unsplash.com/photo-1742321694002-77d33db25f68?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
    category: 'Kids Vision',
    date: 'August 2025',
    read: '4 min',
  },
  {
    slug: 'frame-face-shape-guide',
    title: 'A boutique guide: matching frames to your face',
    excerpt: 'Round, square, oval or heart-shaped — our stylists share the rules they break (and the ones they swear by).',
    image: 'https://images.unsplash.com/photo-1525786210598-d527194d3e9a?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
    category: 'Style Notes',
    date: 'July 2025',
    read: '7 min',
  },
  {
    slug: 'sunglasses-uv-protection',
    title: 'The sunglasses lie: why darker isn\'t always better',
    excerpt: 'Sunglasses without UV protection can be worse than no sunglasses at all. Here is how to read the label.',
    image: 'https://images.unsplash.com/photo-1618677366787-9727aacca7ea?crop=entropy&cs=srgb&fm=jpg&w=1400&q=85',
    category: 'Vision Health',
    date: 'July 2025',
    read: '6 min',
  },
];

export default function BlogPage() {
  return (
    <>
      <PageHero
        eyebrow="The Journal"
        title={<>Notes on <span className="gold-text">eye care, eyewear</span> & the future of vision.</>}
        subtitle="Stories, guides and quiet insights from the Eylux boutique. Written for anyone who wears glasses, or wants to wear them better."
      />

      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {posts.map((p, i) => (
              <article key={p.slug} className={`group relative rounded-3xl glass overflow-hidden hover:border-gold/30 transition ${i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}`}>
                <Link href="#" data-testid={`blog-card-${p.slug}`}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-[1.2s]" sizes="(min-width:1024px) 33vw, 100vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <span className="absolute top-4 left-4 glass-strong rounded-full px-3 py-1.5 text-[10px] uppercase tracking-[0.25em] text-gold">{p.category}</span>
                  </div>
                  <div className="p-7">
                    <div className="flex items-center justify-between text-xs text-white/40">
                      <span>{p.date}</span><span>{p.read} read</span>
                    </div>
                    <h2 className="mt-4 font-display text-xl md:text-2xl tracking-tight leading-snug group-hover:gold-text transition">{p.title}</h2>
                    <p className="mt-3 text-sm text-white/55 leading-relaxed">{p.excerpt}</p>
                    <span className="mt-6 inline-flex items-center gap-1 text-xs uppercase tracking-[0.25em] text-gold">
                      Read article <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
