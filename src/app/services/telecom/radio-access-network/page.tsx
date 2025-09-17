import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import RANBenefits from '@/components/services/telecom/radio_access_network/benifits';
import { RANCTA } from '@/components/services/telecom/radio_access_network/cta';
import { RadioAccessNetwork } from '@/components/services/telecom/radio_access_network/hero';
import RANIndustries from '@/components/services/telecom/radio_access_network/industry';
import RANServices from '@/components/services/telecom/radio_access_network/services';
import RANSection from '@/components/services/telecom/radio_access_network/what';
import RANWhyAtq from '@/components/services/telecom/radio_access_network/whyatq';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <RadioAccessNetwork />
        <RANSection />
        <RANServices />
        <RANBenefits />
        <RANIndustries />
        <RANWhyAtq />
        <RANCTA />
        <FooterSection />
     </main>
      </div>
  )}