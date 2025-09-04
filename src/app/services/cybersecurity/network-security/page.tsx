import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import NetworkSecurityBenefits from '@/components/services/cybersecurity/network_security/benifits';
import { NetworkSecurityCTA } from '@/components/services/cybersecurity/network_security/cta';
import { Network_Security_Firewall_Management } from '@/components/services/cybersecurity/network_security/hero';
import NetworkSecurityServices from '@/components/services/cybersecurity/network_security/services';
import NetworkSecurityFirewall from '@/components/services/cybersecurity/network_security/what';
import NetworkSecurityWhyAtq from '@/components/services/cybersecurity/network_security/whyatq';

export default function Endpoint_Security() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Network_Security_Firewall_Management />
        <NetworkSecurityFirewall />
        <NetworkSecurityServices />
        <NetworkSecurityBenefits />
        <NetworkSecurityWhyAtq />
        <NetworkSecurityCTA />
        <FooterSection />
     </main>
      </div>
  )}