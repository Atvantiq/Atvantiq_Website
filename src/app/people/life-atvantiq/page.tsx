import LifeAtAtvantiq from "@/components/about/lifeatatq";
import FooterSection from "@/components/landing/Footer";
import Navbar from "@/components/Navbar";
import { LifeAtAtvantiqLeadersSection } from "@/components/people/leaders";
import LifeAtAtvantiqHero from "@/components/people/life-atvantiq";

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <LifeAtAtvantiqHero />
        <LifeAtAtvantiqLeadersSection />
        <LifeAtAtvantiq />
        <FooterSection />
      </main>
      </div>
  );
}