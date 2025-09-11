import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { PPCCTA } from '@/components/services/digital_marketing/ppc/cta';
import { PPC } from '@/components/services/digital_marketing/ppc/hero';
import PPCIndustries from '@/components/services/digital_marketing/ppc/industry';
import PPCPlatforms from '@/components/services/digital_marketing/ppc/platforms';
import PPCServices from '@/components/services/digital_marketing/ppc/service';
import PPCWhy from '@/components/services/digital_marketing/ppc/why';
import PPCWhyAtq from '@/components/services/digital_marketing/ppc/whyatq';

export default function digital_maketing() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <PPC />
        <PPCWhy />
        <PPCServices />
        <PPCPlatforms />
        <PPCIndustries />
        <PPCWhyAtq />
        <PPCCTA />
        <FooterSection />
     </main>
      </div>
  )}