import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import PayrollBenefits from '@/components/services/talent/payroll/benifits';
import { PayrollCTA } from '@/components/services/talent/payroll/cta';
import { PayrollManagement } from '@/components/services/talent/payroll/hero';
import PayrollManagementIndustries from '@/components/services/talent/payroll/industry';
import PayrollProcess from '@/components/services/talent/payroll/process';
import PayrollServices from '@/components/services/talent/payroll/services';
import PayrollWhy from '@/components/services/talent/payroll/why';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <PayrollManagement />
        <PayrollServices />
        <PayrollWhy />
        <PayrollBenefits />
        <PayrollManagementIndustries />
        <PayrollProcess />
        <PayrollCTA />
        <FooterSection />
     </main>
      </div>
  )}