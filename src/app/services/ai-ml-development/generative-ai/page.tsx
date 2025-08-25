import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import { GenAICTASection } from '@/components/services/ai_ml/gen_ai/genai_cta';
import { GenerativeAIServicesSection } from '@/components/services/ai_ml/gen_ai/genai_services';
import { GenAIServices } from '@/components/services/ai_ml/gen_ai/hero';
import IndustriesSection from '@/components/services/ai_ml/gen_ai/industries';
import WhatisGenAI from '@/components/services/ai_ml/gen_ai/whatisgen';
import WhyChooseSection from '@/components/services/ai_ml/gen_ai/why_genai';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <GenAIServices />
        <WhatisGenAI />
        <GenerativeAIServicesSection />
        <WhyChooseSection/>
        <IndustriesSection/>
        <GenAICTASection/>
        <FooterSection />
     </main>
      </div>
  )}