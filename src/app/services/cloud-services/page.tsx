import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { CloudComputingHeroSection } from '@/components/services/cloud/hero_cloud';
import { TrustedCloudSection } from '@/components/services/cloud/trusted_cloud';
import { CloudServicesSection } from '@/components/services/cloud/services_cloud';
import { CloudTechStackSection } from '@/components/services/cloud/technology_cloud';
import { CloudIndustriesSection } from '@/components/services/cloud/industries_cloud';
import { WhyCloudSection } from '@/components/services/cloud/why_cloud';
import { CloudCTASection } from '@/components/services/cloud/cta_cloud';

export default function cloud() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <CloudComputingHeroSection />
        <TrustedCloudSection />
        <CloudServicesSection />
        <CloudTechStackSection />
        <CloudIndustriesSection />
        <WhyCloudSection />
        <CloudCTASection />
        <FooterSection />
     </main>
      </div>
  )}