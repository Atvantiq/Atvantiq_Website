import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import CybersecurityTrainingBenefits from '@/components/services/cybersecurity/awareness_training/benifits';
import { CyberSecurityTrainingCTA } from '@/components/services/cybersecurity/awareness_training/cta';
import { Cybersecurity_Awareness_Training } from '@/components/services/cybersecurity/awareness_training/hero';
import CybersecurityTrainingServices from '@/components/services/cybersecurity/awareness_training/services';
import CybersecurityTraining from '@/components/services/cybersecurity/awareness_training/why';
import CybersecurityTrainingWhyAtq from '@/components/services/cybersecurity/awareness_training/whyatq';
export default function Endpoint_Security() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Cybersecurity_Awareness_Training />
        <CybersecurityTraining />
        <CybersecurityTrainingServices />
        <CybersecurityTrainingBenefits />
        <CybersecurityTrainingWhyAtq />
        <CyberSecurityTrainingCTA />
        <FooterSection />
     </main>
      </div>
  )}