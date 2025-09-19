import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import RecruitingAndHRBenefits from '@/components/services/talent/hr_consulting/benifits';
import { RecruitingCTA } from '@/components/services/talent/hr_consulting/cta';
import { TechnicalRecruitersHRConsulting } from '@/components/services/talent/hr_consulting/hero';
import RecruitingAndHRIndustries from '@/components/services/talent/hr_consulting/industry';
import RecruitmentProcess from '@/components/services/talent/hr_consulting/process';
import RecruitmentAndHR from '@/components/services/talent/hr_consulting/what';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <TechnicalRecruitersHRConsulting />
        <RecruitmentAndHR />
        <RecruitingAndHRBenefits />
        <RecruitingAndHRIndustries />
        <RecruitmentProcess />
        <RecruitingCTA />
        <FooterSection />
     </main>
      </div>
  )}