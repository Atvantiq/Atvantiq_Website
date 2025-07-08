import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { CybersecurityHeroSection } from '@/components/services/cybersecurity/hero_cyber';
import { TrustedCybersecuritySection } from '@/components/services/cybersecurity/trusted_cyber';
import { CybersecurityServicesSection } from '@/components/services/cybersecurity/services_cyber';
import { CybersecurityIndustriesSection } from '@/components/services/cybersecurity/industries_cyber';
import { WhyCybersecuritySection } from '@/components/services/cybersecurity/why_cyber';
import { CybersecurityCTASection } from '@/components/services/cybersecurity/cta_cyber';
import CyberThreatsSection from '@/components/services/cybersecurity/threats_cyber';
import ComplianceStandardsSection from '@/components/services/cybersecurity/compliances_cyber';

export default function cybersecuity() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <CybersecurityHeroSection/>
        <TrustedCybersecuritySection/>
        <CybersecurityServicesSection/>
        <CyberThreatsSection />
        <CybersecurityIndustriesSection/>
        <WhyCybersecuritySection />
        <ComplianceStandardsSection />
        <CybersecurityCTASection />
        <FooterSection />
     </main>
      </div>
  )}