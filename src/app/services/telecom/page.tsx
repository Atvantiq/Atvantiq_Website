import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { AIIndustriesSection } from '@/components/services/ai_ml/industries_ai';
import { WhyAISection } from '@/components/services/ai_ml/why_ai';
import { AITechStackSection } from '@/components/services/ai_ml/technology_ai';
import { AICTASection } from '@/components/services/ai_ml/cta_ai';
import { AIBenefitsSection } from '@/components/services/ai_ml/benifits_ai';
import { TelecomHeroSection } from '@/components/services/telecom/hero_telecom';
import { TrustedTelecomSection } from '@/components/services/telecom/trusted_telecom';
import { TelecomServicesSection } from '@/components/services/telecom/services_telecom';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <TelecomHeroSection />
        <TrustedTelecomSection />
        <TelecomServicesSection />
        <AIBenefitsSection/>
        <AITechStackSection />
        <AIIndustriesSection/>
        <WhyAISection />
        <AICTASection />
        <FooterSection />
     </main>
      </div>
  )}