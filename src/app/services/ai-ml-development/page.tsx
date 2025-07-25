import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { AIMLHeroSection } from '@/components/services/ai_ml/hero_ai';
import { TrustedAISection } from '@/components/services/ai_ml/trusted_ai';
import { AIServicesSection } from '@/components/services/ai_ml/services_ai';
import { AIIndustriesSection } from '@/components/services/ai_ml/industries_ai';
import { WhyAISection } from '@/components/services/ai_ml/why_ai';
import { AITechStackSection } from '@/components/services/ai_ml/technology_ai';
import { AICTASection } from '@/components/services/ai_ml/cta_ai';
import { AIBenefitsSection } from '@/components/services/ai_ml/benifits_ai';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <AIMLHeroSection/>
        <TrustedAISection/>
        <AIServicesSection/>
        <AIBenefitsSection/>
        <AITechStackSection />
        <AIIndustriesSection/>
        <WhyAISection />
        <AICTASection />
        <FooterSection />
     </main>
      </div>
  )}