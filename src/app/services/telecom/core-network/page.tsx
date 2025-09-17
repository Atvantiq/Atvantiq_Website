import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import CoreBenefits from '@/components/services/telecom/core_network/benifits';
import { CoreNetwork } from '@/components/services/telecom/core_network/hero';
import CoreNetworkServices from '@/components/services/telecom/core_network/services';
import CoreNetworkWhat from '@/components/services/telecom/core_network/what';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <CoreNetwork />
        <CoreNetworkWhat />
        <CoreNetworkServices />
        <CoreBenefits />
        <FooterSection />
     </main>
      </div>
  )}