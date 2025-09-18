import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import PlacementBenefits from '@/components/services/talent/contract_placement/benifit';
import { PlacementCTA } from '@/components/services/talent/contract_placement/cta';
import { ContractPlacements } from '@/components/services/talent/contract_placement/hero';
import PlacementProcess from '@/components/services/talent/contract_placement/process';
import PlacementServices from '@/components/services/talent/contract_placement/services';
import PlacementsWhyAtq from '@/components/services/talent/contract_placement/whyatq';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <ContractPlacements />
        <PlacementServices />
        <PlacementsWhyAtq />
        <PlacementProcess />
        <PlacementBenefits />
        <PlacementCTA />
        <FooterSection />
     </main>
      </div>
  )}