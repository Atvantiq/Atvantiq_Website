import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import AICTASection from '@/components/services/cta';
import { DigitalMarketingHeroSection } from '@/components/services/digital_marketing/hero_digital';
import { TrustedDigitalMarketingSection } from '@/components/services/digital_marketing/trusted_digital';
import WhyAISection from '@/components/services/why_ai';
import { DigitalMarketingServicesSection } from '@/components/services/digital_marketing/services_digital';
import { DigitalMarketingIndustriesSection } from '@/components/services/digital_marketing/industies_ai';

export default function digital_maketing() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <DigitalMarketingHeroSection/>
        <TrustedDigitalMarketingSection/>
        <DigitalMarketingServicesSection/>
        <DigitalMarketingIndustriesSection/>
        <WhyAISection />
        <AICTASection />
        <FooterSection />
     </main>
      </div>
  )}