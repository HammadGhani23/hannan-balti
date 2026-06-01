import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import SocialProofSection from '@/components/SocialProofSection';
import IncludedSection from '@/components/IncludedSection';
import DestinationsSection from '@/components/DestinationsSection';
import ReviewsSection from '@/components/ReviewsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import Navigation from '@/components/Navigation';

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <AboutSection />
      <SocialProofSection />
      <IncludedSection />
      <DestinationsSection />
      <ReviewsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
