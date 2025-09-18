import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import CoreBenefits from '@/components/services/telecom/core_network/benifits';
import { CoreNetworkCTA } from '@/components/services/telecom/core_network/cta';
import { CoreNetwork } from '@/components/services/telecom/core_network/hero';
import CoreNetworkIndustries from '@/components/services/telecom/core_network/industry';
import CoreNetworkServices from '@/components/services/telecom/core_network/services';
import CoreNetworkWhat from '@/components/services/telecom/core_network/what';
import CoreNetworkWhyAtq from '@/components/services/telecom/core_network/whyatq';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <CoreNetwork />
        <CoreNetworkWhat />
        <CoreNetworkServices />
        <CoreBenefits />
        <CoreNetworkIndustries />
        <CoreNetworkWhyAtq />
        <CoreNetworkCTA />
        <FooterSection />
     </main>
      </div>
  )}