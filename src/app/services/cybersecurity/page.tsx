import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import AICTASection from '@/components/services/cta';
import { CybersecurityHeroSection } from '@/components/services/cybersecurity/hero_cyber';
import { TrustedCybersecuritySection } from '@/components/services/cybersecurity/trusted_cyber';
import { CybersecurityServicesSection } from '@/components/services/cybersecurity/services_cyber';
import { CybersecurityIndustriesSection } from '@/components/services/cybersecurity/industries_cyber';
import { WhyCybersecuritySection } from '@/components/services/cybersecurity/why_cyber';

export default function cybersecuity() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <CybersecurityHeroSection/>
        <TrustedCybersecuritySection/>
        <CybersecurityServicesSection/>
        <CybersecurityIndustriesSection/>
        <WhyCybersecuritySection />
        <AICTASection />
        <FooterSection />
     </main>
      </div>
  )}