import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import AIBenefitsSection from '@/components/services/benifits';
import AICTASection from '@/components/services/cta';
import { AIMLHeroSection } from '@/components/services/ai_ml/hero_ai';
import AITechStackSection from '@/components/services/technology';
import { TrustedAISection } from '@/components/services/ai_ml/trusted_ai';
import WhyAISection from '@/components/services/why_ai';
import { AIServicesSection } from '@/components/services/ai_ml/services_ai';
import { AIIndustriesSection } from '@/components/services/ai_ml/industries_ai';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <AIMLHeroSection/>
        <TrustedAISection/>
        <AIServicesSection/>
        <AIIndustriesSection/>
        <AIBenefitsSection />
        <AITechStackSection />
        <WhyAISection />
        <AICTASection />
        <FooterSection />
     </main>
      </div>
  )}