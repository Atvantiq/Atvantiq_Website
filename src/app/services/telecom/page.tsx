import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { TelecomHeroSection } from '@/components/services/telecom/hero_telecom';
import { TrustedTelecomSection } from '@/components/services/telecom/trusted_telecom';
import { TelecomServicesSection } from '@/components/services/telecom/services_telecom';
import { WhyTelecomSection } from '@/components/services/telecom/why_telecom';
import { TelecomIndustriesSection } from '@/components/services/telecom/industries_telecom';
import { TelecomCTASection } from '@/components/services/telecom/cta_telecom';
import ClientsSection from '@/components/services/telecom/clients_telecom';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <TelecomHeroSection />
        <TrustedTelecomSection />
        <TelecomServicesSection />
        <TelecomIndustriesSection />
        <ClientsSection />
        <WhyTelecomSection  />
        <TelecomCTASection />
        <FooterSection />
     </main>
      </div>
  )}