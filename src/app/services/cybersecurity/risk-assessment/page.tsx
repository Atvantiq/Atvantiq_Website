import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import SecurityRiskAssessmentBenefits from '@/components/services/cybersecurity/risk_assessment/benifits';
import { SecurityRiskAssessmentCTA } from '@/components/services/cybersecurity/risk_assessment/cta';
import { Security_Risk_Assessment_Audits } from '@/components/services/cybersecurity/risk_assessment/hero';
import RiskAssessmentServices from '@/components/services/cybersecurity/risk_assessment/services';
import SecurityRiskAssessment from '@/components/services/cybersecurity/risk_assessment/what';
import RiskAssessmentWhyAtq from '@/components/services/cybersecurity/risk_assessment/whyatq';
export default function Endpoint_Security() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <Security_Risk_Assessment_Audits />
        <SecurityRiskAssessment />
        <RiskAssessmentServices />
        <SecurityRiskAssessmentBenefits />
        <RiskAssessmentWhyAtq />
        <SecurityRiskAssessmentCTA />
        <FooterSection />
     </main>
      </div>
  )}