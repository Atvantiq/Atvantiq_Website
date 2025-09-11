import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { SMMCTA } from '@/components/services/digital_marketing/social_media/cta';
import { SMM } from '@/components/services/digital_marketing/social_media/hero';
import SMMIndustries from '@/components/services/digital_marketing/social_media/industry';
import SMMPlatforms from '@/components/services/digital_marketing/social_media/platform';
import SMMServices from '@/components/services/digital_marketing/social_media/services';
import SMMWhy from '@/components/services/digital_marketing/social_media/why';
import SMMWhyAtq from '@/components/services/digital_marketing/social_media/whyatq';

export default function digital_maketing() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <SMM />
        <SMMWhy />
        <SMMServices />
        <SMMPlatforms />
        <SMMIndustries />
        <SMMWhyAtq />
        <SMMCTA />
        <FooterSection />
     </main>
      </div>
  )}