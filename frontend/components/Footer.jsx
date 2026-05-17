'use client';
import Link from 'next/link';
import { Eye, Instagram, Facebook, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-[#030305] pt-32 pb-12 overflow-hidden" data-testid="site-footer">
      <div className="absolute inset-x-0 top-0 hairline" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-5">
            <Link href="/" className="flex items-center gap-3">
              <span className="h-10 w-10 rounded-full bg-gradient-to-br from-gold-light via-gold to-gold-dark grid place-items-center">
                <Eye className="h-5 w-5 text-black" strokeWidth={2.5} />
              </span>
              <span className="font-display text-2xl">Eylux <span className="gold-text">Eye Care</span></span>
            </Link>
            <p className="mt-6 max-w-md text-white/55 text-sm leading-relaxed">
              A boutique optical experience in Hadapsar, Pune — pairing meticulous eye care with the world&apos;s finest eyewear houses.
            </p>
            <div className="mt-8">
              <p className="uppercase tracking-[0.3em] text-xs text-white/40">Newsletter</p>
              <form className="mt-3 flex items-center gap-3 border-b border-white/15 py-2" onSubmit={(e) => e.preventDefault()}>
                <input
                  type="email"
                  placeholder="you@example.com"
                  className="flex-1 bg-transparent outline-none text-white placeholder:text-white/30 py-2"
                  data-testid="newsletter-email"
                />
                <button className="text-xs uppercase tracking-widest gold-text" data-testid="newsletter-submit">Subscribe →</button>
              </form>
            </div>
          </div>

          <div className="md:col-span-3">
            <p className="uppercase tracking-[0.3em] text-xs text-white/40 mb-6">Explore</p>
            <ul className="space-y-3 text-sm">
              {[
                ['About', '/about'],
                ['Eye Testing', '/eye-testing'],
                ['Lenses', '/lenses'],
                ['Frames & Sunglasses', '/frames'],
                ['Meta AI Glasses', '/meta-ai-glasses'],
                ['Contact Lenses', '/contact-lenses'],
                ['Kids Vision Care', '/kids-vision'],
                ['Brands', '/brands'],
                ['Blog', '/blog'],
                ['Contact', '/contact'],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link href={href} className="text-white/65 hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4 space-y-5">
            <p className="uppercase tracking-[0.3em] text-xs text-white/40">Visit the boutique</p>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <MapPin className="h-4 w-4 mt-0.5 text-gold" />
              <p>Keshav Nagar, Hadapsar<br/>Pune, Maharashtra 411028</p>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <Phone className="h-4 w-4 mt-0.5 text-gold" />
              <a href="tel:+919999999999" className="hover:text-white">+91 99999 99999</a>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <Mail className="h-4 w-4 mt-0.5 text-gold" />
              <a href="mailto:hello@eyluxeyecare.com" className="hover:text-white">hello@eyluxeyecare.com</a>
            </div>
            <div className="flex items-start gap-3 text-sm text-white/70">
              <Clock className="h-4 w-4 mt-0.5 text-gold" />
              <p>Mon–Sun · 10:00 AM – 9:30 PM</p>
            </div>
            <div className="flex items-center gap-3 pt-4">
              <a href="#" aria-label="Instagram" className="p-2.5 rounded-full glass hover:border-gold/40 transition">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" aria-label="Facebook" className="p-2.5 rounded-full glass hover:border-gold/40 transition">
                <Facebook className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 hairline" />
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40">
          <p>© {new Date().getFullYear()} Eylux Eye Care. Crafted in Hadapsar, Pune.</p>
          <p className="tracking-widest uppercase">Luxury Eyewear · Precision Vision · Trusted Care</p>
        </div>
      </div>
    </footer>
  );
}
