import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import SolutionsSection from '@/components/SolutionsSection';
import ImpactSection from '@/components/ImpactSection';
import PartnershipSection from '@/components/PartnershipSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <SolutionsSection />
        <ImpactSection />
        <PartnershipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;