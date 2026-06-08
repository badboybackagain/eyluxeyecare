'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Eye } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/eye-testing', label: 'Eye Testing' },
  { href: '/lenses', label: 'Lenses' },
  { href: '/frames', label: 'Frames' },
  { href: '/meta-ai-glasses', label: 'Meta AI' },
  { href: '/contact-lenses', label: 'Contact Lenses' },
  { href: '/kids-vision', label: "Children's Vision" },
  { href: '/brands', label: 'Brands' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    handler();
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
        data-testid="site-header"
      >
        <div className="mx-auto max-w-7xl px-5">
          <div className={`flex items-center justify-between rounded-full px-5 py-2.5 transition-all duration-500 ${
            scrolled ? 'glass-strong' : 'glass'
          }`}>
            <Link href="/" className="flex items-center group" data-testid="logo-link">
              <Image
                src="/logo.png"
                alt="Eylux Eye Care"
                width={84}
                height={36}
                priority
                className="object-contain filter brightness-0"
              />
            </Link>

            <nav className="hidden lg:flex items-center gap-1" aria-label="Primary">
              {links.slice(0, 7).map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-3 py-1.5 text-xs tracking-wider uppercase transition-colors rounded-full ${
                    pathname === l.href ? 'text-ink bg-ink/[0.04]' : 'text-ink/70 hover:text-ink'
                  }`}
                  data-testid={`nav-${l.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {l.label}
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link href="/contact" className="hidden md:inline-flex btn-gold !py-2.5 !px-5 !text-xs" data-testid="book-test-nav-btn">
                Book Eye Test
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="lg:hidden p-2.5 rounded-full glass"
                aria-label="Open menu"
                data-testid="open-menu-btn"
              >
                <Menu className="h-5 w-5" />
              </button>
              <button
                onClick={() => setOpen(true)}
                className="hidden lg:inline-flex p-2.5 rounded-full glass"
                aria-label="Open full menu"
                data-testid="open-fullmenu-btn"
              >
                <Menu className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-[60] bg-bg-primary/95 backdrop-blur-2xl"
            data-testid="mobile-menu"
          >
            <div className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
              <span className="font-display text-lg">Menu</span>
              <button onClick={() => setOpen(false)} className="p-2.5 rounded-full glass" aria-label="Close" data-testid="close-menu-btn">
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="mx-auto max-w-7xl px-6 mt-12 grid md:grid-cols-2 gap-12">
              <div className="space-y-4">
                {links.map((l, i) => (
                  <motion.div
                    key={l.href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i, duration: 0.5 }}
                  >
                    <Link
                      href={l.href}
                      className="block font-display text-4xl md:text-5xl tracking-tight text-ink/90 hover:gold-text transition"
                      data-testid={`menu-link-${l.label.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {l.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="space-y-6 text-ink/70 text-sm"
              >
                <div>
                  <p className="uppercase tracking-widest text-xs text-ink/55">Visit</p>
                  <p className="mt-2 text-ink/90">Shop No-24, Rohan Plaza, DP Rd,<br/>Keshav Nagar, Hadapsar,<br/>Pune, Maharashtra 411028</p>
                </div>
                <div>
                  <p className="uppercase tracking-widest text-xs text-ink/55">Hours</p>
                  <p className="mt-2 text-ink/90">11:00 AM - 9:00 PM (Every day)</p>
                </div>
                <div>
                  <p className="uppercase tracking-widest text-xs text-ink/55">Contact</p>
                  <p className="mt-2 text-ink/90">+91 99607 50915<br/>eyluxeyecare@gmail.com</p>
                </div>
                <Link href="/contact" className="btn-gold inline-flex mt-4" data-testid="menu-book-btn">Book Eye Test</Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
