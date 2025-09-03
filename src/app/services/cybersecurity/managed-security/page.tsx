import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import ManagedSecurityBenefits from '@/components/services/cybersecurity/managed_security/benifits';
import { ManagedSecurityCTA } from '@/components/services/cybersecurity/managed_security/cta';
import { Managed_Security_Services } from '@/components/services/cybersecurity/managed_security/hero';
import MSSPCapabilities from '@/components/services/cybersecurity/managed_security/services';
import ManagedSecurityServices from '@/components/services/cybersecurity/managed_security/what';
import MSSPWhyAtq from '@/components/services/cybersecurity/managed_security/whyatq';
export default function Endpoint_Security() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Managed_Security_Services />
        <ManagedSecurityServices />
        <MSSPCapabilities />
        <ManagedSecurityBenefits />
        <MSSPWhyAtq />
        <ManagedSecurityCTA />
        <FooterSection />
     </main>
      </div>
  )}