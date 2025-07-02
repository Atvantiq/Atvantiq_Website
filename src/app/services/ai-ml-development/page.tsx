import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import AIServicesSection from '@/components/services/ai_services';
import AIMLHeroSection from '@/components/services/hero_ai';
import TrustedAISection from '@/components/services/trusted_ai';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <AIMLHeroSection />
        <TrustedAISection />
        <AIServicesSection />
        <FooterSection />
     </main>
      </div>
  )}