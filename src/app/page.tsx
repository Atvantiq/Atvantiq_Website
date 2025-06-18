//import Image from "next/image";
import AboutUs from "@/components/landing/About";
import HeroSection from "@/components/landing/Hero";
import IndustriesSection from "@/components/landing/Industries";
import ServicesSection from "@/components/landing/Services";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar/>
        <HeroSection />
        <AboutUs />
        <ServicesSection />
        <IndustriesSection/>
      </main>
    </div>
  );
}
