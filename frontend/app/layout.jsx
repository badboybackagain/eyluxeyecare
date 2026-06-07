import { Inter, Fraunces } from 'next/font/google';
import './globals.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import LenisProvider from '../components/LenisProvider';
import WhatsAppFloat from '../components/WhatsAppFloat';
import StickyCTA from '../components/StickyCTA';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  variable: '--font-inter',
  display: 'swap',
});

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://eyluxeyecare.com'),
  title: {
    default: 'Eylux Eye Care — Luxury Eyewear & Precision Vision in Hadapsar, Pune',
    template: '%s | Eylux Eye Care',
  },
  description:
    'Premium optical boutique in Hadapsar offering advanced digital eye testing, branded eyewear, progressive lenses, computer glasses, kids vision care and Meta AI smart glasses. Trusted opticians in Keshav Nagar, Pune.',
  keywords: [
    'optical shop in Hadapsar', 'eye test near Hadapsar Pune', 'best optician Hadapsar',
    'eye doctor Keshav Nagar Hadapsar', 'sunglasses shop Hadapsar', 'contact lens Hadapsar Pune',
    'progressive lenses Hadapsar', 'kids eye test Hadapsar', 'computer glasses Hadapsar Pune',
    'women optician Pune', 'boutique eyewear Pune', 'Ray-Ban Meta AI Glasses Pune',
  ],
  openGraph: {
    type: 'website',
    siteName: 'Eylux Eye Care',
    title: 'Eylux Eye Care — Luxury Eyewear & Precision Vision',
    description:
      'Premium optical boutique in Hadapsar. Digital eye tests, branded frames, progressive lenses, Meta AI smart glasses.',
    images: ['https://images.unsplash.com/photo-1618677366787-9727aacca7ea?w=1200'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Eylux Eye Care — Luxury Eyewear & Precision Vision',
    description: 'Premium optical boutique in Hadapsar, Pune.',
  },
  robots: { index: true, follow: true },
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'Optician',
  name: 'Eylux Eye Care',
  image: 'https://images.unsplash.com/photo-1764778055595-b641b067ab40?w=1200',
  '@id': 'https://eyluxeyecare.com',
  url: 'https://eyluxeyecare.com',
  telephone: '+91-99607-50915',
  priceRange: '₹₹₹',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Shop No-24, Rohan Plaza, DP Rd, near Sidheshwar Foods, opp. Holystico Astrana, Keshav Nagar',
    addressLocality: 'Hadapsar, Pune',
    addressRegion: 'Maharashtra',
    postalCode: '411028',
    addressCountry: 'IN',
  },
  geo: { '@type': 'GeoCoordinates', latitude: 18.5103929, longitude: 73.940276 },
  openingHoursSpecification: [{
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: ['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'],
    opens: '11:00', closes: '21:00',
  }],
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${fraunces.variable}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="bg-bg-primary text-ink">
        <LenisProvider>
          <Nav />
          <main>{children}</main>
          <Footer />
        </LenisProvider>
        <WhatsAppFloat />
        <StickyCTA />
      </body>
    </html>
  );
}
