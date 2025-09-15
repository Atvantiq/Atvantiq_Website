import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { AnalyticsCTA } from '@/components/services/digital_marketing/analytical/cta';
import { AnalyticsOptimizationServices } from '@/components/services/digital_marketing/analytical/hero';
import AnalyticsIndustries from '@/components/services/digital_marketing/analytical/industry';
import AnalyticsServices from '@/components/services/digital_marketing/analytical/services';
import AnalyticsWhy from '@/components/services/digital_marketing/analytical/why';
import AnalyticsWhyAtq from '@/components/services/digital_marketing/analytical/whyatq';

export default function digital_maketing() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <AnalyticsOptimizationServices />
        <AnalyticsWhy />
        <AnalyticsServices />
        <AnalyticsIndustries />
        <AnalyticsWhyAtq />
        <AnalyticsCTA />
        <FooterSection />
     </main>
      </div>
  )}