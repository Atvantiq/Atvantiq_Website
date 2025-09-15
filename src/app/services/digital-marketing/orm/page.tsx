import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { ORMCTA } from '@/components/services/digital_marketing/orm/cta';
import { OnlineReputationManagement } from '@/components/services/digital_marketing/orm/hero';
import ORMIndustries from '@/components/services/digital_marketing/orm/industry';
import ORMServices from '@/components/services/digital_marketing/orm/services';
import ORM from '@/components/services/digital_marketing/orm/why';
import ORMWhyAtq from '@/components/services/digital_marketing/orm/whyatq';

export default function digital_maketing() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <OnlineReputationManagement />
        <ORM />
        <ORMServices />
        <ORMIndustries />
        <ORMWhyAtq />
        <ORMCTA />
        <FooterSection />
     </main>
      </div>
  )}