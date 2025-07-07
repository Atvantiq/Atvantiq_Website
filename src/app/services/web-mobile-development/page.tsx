import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { WebAppHeroSection } from '@/components/services/web_app/hero_webapp';
import { TrustedWebAppSection } from '@/components/services/web_app/trusted_webapp';
import { WebMobileIndustriesSection } from '@/components/services/web_app/industries_webapp';
import { WhyWebMobileSection } from '@/components/services/web_app/why_webapp';
import { WebMobileServicesSection } from '@/components/services/web_app/service_webapp';
import { WebMobileCTASection } from '@/components/services/web_app/cta_webapp';
import { WebMobileTechStackSection } from '@/components/services/web_app/technology_webapp';

export default function web_app() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <WebAppHeroSection />
        <TrustedWebAppSection />
        <WebMobileServicesSection />
        <WebMobileTechStackSection />
        <WebMobileIndustriesSection />
        <WhyWebMobileSection/>
        <WebMobileCTASection />
        <FooterSection />
     </main>
      </div>
  )}