import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { ComputerVisionCTASection } from '@/components/services/ai_ml/computer_vision/cta';
import { ComputerVision } from '@/components/services/ai_ml/computer_vision/hero';
import ComputerVisionIndustries from '@/components/services/ai_ml/computer_vision/industries';
import ComputerVisionServices from '@/components/services/ai_ml/computer_vision/services';
import ComputerVisionWhy from '@/components/services/ai_ml/computer_vision/why';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <ComputerVision />
        <ComputerVisionServices />
        <ComputerVisionWhy />
        <ComputerVisionIndustries/>
        <ComputerVisionCTASection />
        <FooterSection />
     </main>
      </div>
  )}