import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { EndpointSecurityCTASection } from '@/components/services/cybersecurity/endpoint_solution/cta_endpoint';
import { Endpoint_Security_Solutions } from '@/components/services/cybersecurity/endpoint_solution/hero';
import EndpointSecurityServices from '@/components/services/cybersecurity/endpoint_solution/services';
import EndpointSecurityWhat from '@/components/services/cybersecurity/endpoint_solution/whatwhy';
import EndpointSecurityWhy from '@/components/services/cybersecurity/endpoint_solution/why';

export default function Endpoint_Security() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Endpoint_Security_Solutions />
         <EndpointSecurityWhat />
        <EndpointSecurityServices />
        <EndpointSecurityWhy />
        <EndpointSecurityCTASection />
        <FooterSection />
     </main>
      </div>
  )}