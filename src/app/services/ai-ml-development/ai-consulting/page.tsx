import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import AIConsultingApproach from '@/components/services/ai_ml/ai_consulting/approach';
import { AIConsultingCTASection } from '@/components/services/ai_ml/ai_consulting/cta';
import { AIConsulting } from '@/components/services/ai_ml/ai_consulting/hero';
import AIConsultingIndustries from '@/components/services/ai_ml/ai_consulting/industries';
import AIConsultingWhy from '@/components/services/ai_ml/ai_consulting/why';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <AIConsulting />
        <AIConsultingWhy />
        <AIConsultingApproach />
        <AIConsultingIndustries />
        <AIConsultingCTASection />
        <FooterSection />
     </main>
      </div>
  )}