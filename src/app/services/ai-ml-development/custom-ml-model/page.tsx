import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import AICTASection from '@/components/services/ai_ml/custom_ml/cta_custom_ml';
import CustomMLSection from '@/components/services/ai_ml/custom_ml/introduction';
import WhatweOffer from '@/components/services/ai_ml/custom_ml/offer';
import UseCasesSection from '@/components/services/ai_ml/custom_ml/usecase';
import WhyChooseAtvantiq from '@/components/services/ai_ml/custom_ml/why';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <CustomMLSection/>  
        <WhatweOffer/>
        <UseCasesSection/>
        <WhyChooseAtvantiq/>
        <AICTASection/>
        <FooterSection />
     </main>
      </div>
  )}