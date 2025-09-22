import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import SoftwareOnboardingBenefits from '@/components/services/talent/onboarding/benifits';
import { OnboardinCTA } from '@/components/services/talent/onboarding/cta';
import { SoftwareBasedOnboarding } from '@/components/services/talent/onboarding/hero';
import SoftwareOnboardingIndustries from '@/components/services/talent/onboarding/industry';
import OnboardingProcess from '@/components/services/talent/onboarding/process';
import SoftwareBasedOnboardingServices from '@/components/services/talent/onboarding/services';
import OnboardingComplianceWhy from '@/components/services/talent/onboarding/why';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <SoftwareBasedOnboarding />
        <SoftwareBasedOnboardingServices />
        <OnboardingComplianceWhy />
        <SoftwareOnboardingBenefits />
        <SoftwareOnboardingIndustries />
        <OnboardingProcess />
        <OnboardinCTA />
        <FooterSection />
     </main>
      </div>
  )}