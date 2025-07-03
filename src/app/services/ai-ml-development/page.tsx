import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import AIServicesSection from '@/components/services/ai_services';
import AIBenefitsSection from '@/components/services/benifits';
import AICTASection from '@/components/services/cta';
import AIMLHeroSection from '@/components/services/hero_ai';
import AIIndustriesSection from '@/components/services/industries';
import AITechStackSection from '@/components/services/technology';
import TrustedAISection from '@/components/services/trusted_ai';
import WhyAISection from '@/components/services/why_ai';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <AIMLHeroSection />
        <TrustedAISection />
        <AIServicesSection />
        <AIBenefitsSection />
        <AITechStackSection />
        <AIIndustriesSection />
        <WhyAISection />
        <AICTASection />
        <FooterSection />
     </main>
      </div>
  )}