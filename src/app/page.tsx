//import Image from "next/image";
import AboutUs from "@/components/landing/About";
import HeroSection from "@/components/landing/Hero";
import Navbar from "@/components/Navbar";
export default function Home() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar/>
        <HeroSection />
        <AboutUs />
      </main>
    </div>
  );
}
