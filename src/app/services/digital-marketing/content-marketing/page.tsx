import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { ContentCTA } from '@/components/services/digital_marketing/content_marketing/cta';
import { ContentMarketing } from '@/components/services/digital_marketing/content_marketing/hero';
import ContentIndustries from '@/components/services/digital_marketing/content_marketing/industry';
import ContentServices from '@/components/services/digital_marketing/content_marketing/services';
import ContentWhy from '@/components/services/digital_marketing/content_marketing/why';
import ContentWhyAtq from '@/components/services/digital_marketing/content_marketing/whyatq';

export default function digital_maketing() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <ContentMarketing />
        <ContentWhy />
        <ContentServices />
        <ContentIndustries />
        <ContentWhyAtq />
        <ContentCTA />
        <FooterSection />
     </main>
      </div>
  )}