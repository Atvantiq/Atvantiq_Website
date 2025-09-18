import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import BackhaulBenefits from '@/components/services/telecom/backhaul_services/benifits';
import { BackhaulCTA } from '@/components/services/telecom/backhaul_services/cta';
import { BackhaulServicesHero } from '@/components/services/telecom/backhaul_services/hero';
import BackhaulIndustries from '@/components/services/telecom/backhaul_services/industry';
import BackhaulServices from '@/components/services/telecom/backhaul_services/services';
import BackhaulServicesWhat from '@/components/services/telecom/backhaul_services/what';
import BackhaulWhyAtq from '@/components/services/telecom/backhaul_services/whyatq';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <BackhaulServicesHero />
        <BackhaulServicesWhat />
        <BackhaulServices />
        <BackhaulBenefits />
        <BackhaulIndustries />
        <BackhaulWhyAtq />
        <BackhaulCTA />
        <FooterSection />
     </main>
      </div>
  )}