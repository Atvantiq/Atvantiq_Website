
import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import CareersHeroSection from "@/components/people/careerhero";
import CareersJobsSection from "@/components/people/joinus";
import PerksSection from "@/components/people/perks";
export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <CareersHeroSection />
        <PerksSection />
        <CareersJobsSection />
        <FooterSection />
      </main>
      </div>
  );
}