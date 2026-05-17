import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import Services from '../components/home/Services';
import BrandMarquee from '../components/home/BrandMarquee';
import MetaAI from '../components/home/MetaAI';
import WhyChoose from '../components/home/WhyChoose';
import StoreExperience from '../components/home/StoreExperience';
import Testimonials from '../components/home/Testimonials';
import FAQ from '../components/home/FAQ';
import FinalCTA from '../components/home/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Services />
      <BrandMarquee />
      <MetaAI />
      <WhyChoose />
      <StoreExperience />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </>
  );
}
