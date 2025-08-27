import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { AIAutomationCTASection } from '@/components/services/ai_ml/ai_automation/cta';
import { AIAutomation } from '@/components/services/ai_ml/ai_automation/hero';
import AIAutomationIndustries from '@/components/services/ai_ml/ai_automation/industries';
import AIAutomationServices from '@/components/services/ai_ml/ai_automation/services';
import AIAutomationWhat from '@/components/services/ai_ml/ai_automation/what';
import WhyAIAutomation from '@/components/services/ai_ml/ai_automation/why';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <AIAutomation/>
        <AIAutomationWhat />
        <AIAutomationServices />
        <WhyAIAutomation />
        <AIAutomationIndustries />
        <AIAutomationCTASection />
        <FooterSection />
     </main>
      </div>
  )}