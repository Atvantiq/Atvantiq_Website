import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { EmailMarketingCTA } from '@/components/services/digital_marketing/email-marketing/cta';
import { EmailMarketing } from '@/components/services/digital_marketing/email-marketing/hero';
import EmailMarketingIndustries from '@/components/services/digital_marketing/email-marketing/industry';
import EmailMarketingPlatforms from '@/components/services/digital_marketing/email-marketing/platform';
import EmailMarketingServices from '@/components/services/digital_marketing/email-marketing/services';
import EmailMarketingWhy from '@/components/services/digital_marketing/email-marketing/why';
import EmailMarketingWhyAtq from '@/components/services/digital_marketing/email-marketing/whyatq';

export default function digital_maketing() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <EmailMarketing />
        <EmailMarketingWhy />
        <EmailMarketingServices />
        <EmailMarketingPlatforms />
        <EmailMarketingIndustries />
        <EmailMarketingWhyAtq />
        <EmailMarketingCTA />
        <FooterSection />
     </main>
      </div>
  )}