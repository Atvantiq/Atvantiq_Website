import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { NLPServices } from '@/components/services/ai_ml/nlp/hero';
import NLPServicesSection from '@/components/services/ai_ml/nlp/nlp_services';
import { NLPCTASection } from '@/components/services/ai_ml/nlp/npl_cta';
import WhyChooseNLP from '@/components/services/ai_ml/nlp/why';
export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <NLPServices />
        <NLPServicesSection />
        <WhyChooseNLP />
        <NLPCTASection />
        <FooterSection />
     </main>
      </div>
  )}