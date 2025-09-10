import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { SEOCTA } from '@/components/services/digital_marketing/seo/cta';
import { SEO } from '@/components/services/digital_marketing/seo/hero';
import SEOIndustries from '@/components/services/digital_marketing/seo/industries';
import SEOServices from '@/components/services/digital_marketing/seo/services';
import { SEOTechnology } from '@/components/services/digital_marketing/seo/technology';
import SEOWhy from '@/components/services/digital_marketing/seo/why';
import SEOWhyAtq from '@/components/services/digital_marketing/seo/whyatq';

export default function digital_maketing() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <SEO />
        <SEOWhy />
        <SEOServices />
        <SEOTechnology />
        <SEOIndustries />
        <SEOWhyAtq />
        <SEOCTA />
        <FooterSection />
     </main>
      </div>
  )}