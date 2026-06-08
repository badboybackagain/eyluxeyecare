import PageHero from '../../components/PageHero';
import ContactForm from '../../components/ContactForm';
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react';

export const metadata = {
  title: 'Contact Eylux Eye Care - Book Your Eye Test in Hadapsar',
  description: 'Book an eye test, request a frame consultation or a Meta AI glasses demo. Visit Eylux Eye Care in Keshav Nagar, Hadapsar, Pune. WhatsApp & call available.',
};

export default function ContactPage() {
  const phone = process.env.NEXT_PUBLIC_PHONE_NUMBER || '+91 99607 50915';
  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919960750915';

  return (
    <>
      <PageHero
        eyebrow="Visit · Call · WhatsApp"
        title={<>Let&apos;s plan your <span className="gold-text">perfect pair.</span></>}
        subtitle="Book a consultation, request a Meta AI demo, or simply walk in. Our team typically replies on WhatsApp within minutes during business hours."
      />

      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-7xl px-6 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="rounded-3xl glass-strong p-7 md:p-10">
              <h2 className="font-display text-3xl md:text-4xl tracking-tight">Book an appointment</h2>
              <p className="mt-3 text-ink/70 text-sm">Fill in the form and we&apos;ll reach out to confirm your slot.</p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 space-y-4">
            <div className="rounded-3xl glass p-7">
              <p className="uppercase tracking-[0.3em] text-[11px] text-gold">The boutique</p>
              <h3 className="mt-3 font-display text-2xl">Eylux Eye Care</h3>
              <ul className="mt-6 space-y-4 text-sm text-ink/75">
                <li className="flex items-start gap-3"><MapPin className="h-4 w-4 mt-0.5 text-gold" />Shop No-24, Rohan Plaza, DP Rd, near Sidheshwar Foods, opp. Holystico Astrana, Keshav Nagar, Hadapsar, Pune, Maharashtra 411028</li>
                <li className="flex items-start gap-3"><Clock className="h-4 w-4 mt-0.5 text-gold" />11:00 AM - 9:00 PM (Every day)</li>
                <li className="flex items-start gap-3"><Phone className="h-4 w-4 mt-0.5 text-gold" /><a href={`tel:${phone}`} className="hover:text-ink" data-testid="contact-call-link">{phone}</a></li>
                <li className="flex items-start gap-3"><Mail className="h-4 w-4 mt-0.5 text-gold" /><a href="mailto:eyluxeyecare@gmail.com" className="hover:text-ink">eyluxeyecare@gmail.com</a></li>
              </ul>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <a href={`https://wa.me/${whatsapp}`} target="_blank" rel="noopener noreferrer" className="rounded-3xl glass p-6 hover:border-gold/40 transition group" data-testid="contact-wa-card">
                <MessageCircle className="h-5 w-5 text-emerald-400" />
                <p className="mt-4 font-display text-lg">WhatsApp</p>
                <p className="text-xs text-ink/60 mt-1">Replies in minutes</p>
                <ArrowUpRight className="h-4 w-4 text-ink/55 mt-3 group-hover:text-gold transition" />
              </a>
              <a href={`tel:${phone}`} className="rounded-3xl glass p-6 hover:border-gold/40 transition group" data-testid="contact-call-card">
                <Phone className="h-5 w-5 text-gold" />
                <p className="mt-4 font-display text-lg">Call us</p>
                <p className="text-xs text-ink/60 mt-1">Tap to dial</p>
                <ArrowUpRight className="h-4 w-4 text-ink/55 mt-3 group-hover:text-gold transition" />
              </a>
            </div>

            <a href="https://www.google.com/maps/search/?api=1&query=Eylux+Eyecare+Hadapsar+Pune" target="_blank" rel="noopener noreferrer" className="block rounded-3xl glass overflow-hidden hover:border-gold/30 transition" data-testid="contact-directions">
              <div className="relative h-56">
                <iframe
                  title="Eylux Eye Care location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3783.564861366747!2d73.940276!3d18.5103929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c326e8b3ec6b%3A0x2ae01fc291961b04!2sEylux%20Eyecare!5e0!3m2!1sen!2sin!4v1716282000000!5m2!1sen!2sin"
                  className="absolute inset-0 w-full h-full grayscale contrast-125"
                  loading="lazy"
                />
              </div>
              <div className="p-5 flex items-center justify-between">
                <span className="text-sm text-ink/85">Get directions</span>
                <ArrowUpRight className="h-4 w-4 text-gold" />
              </div>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
