import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { TransportNetwork } from '@/components/services/telecom/transport_network/hero';
import TransportNetworkWhat from '@/components/services/telecom/transport_network/what';
import TransportNetworkServices from '@/components/services/telecom/transport_network/services';
import TransportBenefits from '@/components/services/telecom/transport_network/benifit';
import { TransportNetworkCTA } from '@/components/services/telecom/transport_network/cta';
import TransportNetworkIndustries from '@/components/services/telecom/transport_network/industry';
import TransportWhyAtq from '@/components/services/telecom/transport_network/whyatq';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <TransportNetwork />
        <TransportNetworkWhat />
        <TransportNetworkServices />
        <TransportBenefits />
        <TransportNetworkIndustries />
        <TransportWhyAtq />
        <TransportNetworkCTA />
        <FooterSection />
     </main>
      </div>
  )}