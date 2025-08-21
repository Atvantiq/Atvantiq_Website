import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import CustomMLSection from '@/components/services/ai_ml/custom_ml/introduction';
import WhatweOffer from '@/components/services/ai_ml/custom_ml/offer';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <CustomMLSection/>  
        <WhatweOffer/>
        <FooterSection />
     </main>
      </div>
  )}