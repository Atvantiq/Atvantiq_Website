import AboutUsHero from "@/components/about/hero";
import WhatWeDoBest from "@/components/about/whatwedo";
import AboutUs from "@/components/landing/About";
import FooterSection from "@/components/landing/Footer";
import WhyChooseUsSection from "@/components/landing/Why";
import Navbar from "@/components/Navbar";
export default function about() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar/>
        <AboutUsHero />
        <WhatWeDoBest />
        <AboutUs />
        <WhyChooseUsSection />
        <FooterSection />
        </main>
        </div>
    );
}