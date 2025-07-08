import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { TalentOutsourcingHeroSection } from '@/components/services/talent/hero_talent';
import { TrustedTalentSection } from '@/components/services/talent/trusted_talent';
import { TalentServicesSection } from '@/components/services/talent/services_talent';
import { TalentIndustriesSection } from '@/components/services/talent/industries_talent';
import { WhyTalentSection } from '@/components/services/talent/why_talent';
import { TalentCTASection } from '@/components/services/talent/cta_talent';
import RolesSupportedSection from '@/components/services/talent/roles_talent';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <TalentOutsourcingHeroSection />
        <TrustedTalentSection />
        <TalentServicesSection />
        <TalentIndustriesSection  />
        <RolesSupportedSection />
        <WhyTalentSection />
        <TalentCTASection />
        <FooterSection />
     </main>
      </div>
  )}