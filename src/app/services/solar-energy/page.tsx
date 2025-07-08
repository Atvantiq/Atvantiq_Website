import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { SolarServiceHeroSection } from '@/components/services/solar/hero_solar';
import { TrustedSolarSection } from '@/components/services/solar/trusted_solar';
import { SolarServicesSection } from '@/components/services/solar/services_solar';
import { SolarBenefitsSection } from '@/components/services/solar/benifits_solar';
import { SolarIndustriesSection } from '@/components/services/solar/industries_solar';
import { WhySolarSection } from '@/components/services/solar/why_solar';
import { SolarCTASection } from '@/components/services/solar/cta_solar';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <SolarServiceHeroSection />
        <TrustedSolarSection />
        <SolarServicesSection />
        <SolarBenefitsSection />
        <SolarIndustriesSection />
        <WhySolarSection />
        <SolarCTASection />
        <FooterSection />
     </main>
      </div>
  )}