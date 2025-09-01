import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { CloudSecurityCTASection } from '@/components/services/cybersecurity/cloud_security/cta';
import { Cloud_Security_DevSecOps } from '@/components/services/cybersecurity/cloud_security/hero';
import CloudSecurityDevSecOpsServices from '@/components/services/cybersecurity/cloud_security/services';
import CloudSecurityWhat from '@/components/services/cybersecurity/cloud_security/what';
import WhyCloudSecurityDevSecOps from '@/components/services/cybersecurity/cloud_security/why';
import CloudSecurityWhyAtq from '@/components/services/cybersecurity/cloud_security/whyatq';
export default function Endpoint_Security() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Cloud_Security_DevSecOps />
        <CloudSecurityWhat />
        <CloudSecurityDevSecOpsServices />
        <CloudSecurityWhyAtq />
        <WhyCloudSecurityDevSecOps />
        <CloudSecurityCTASection />
        <FooterSection />
     </main>
      </div>
  )}