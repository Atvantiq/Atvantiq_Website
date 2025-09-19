import FooterSection from '@/components/landing/Footer';
import Navbar from '@/components/Navbar';
import ProjectOutsourcingBenefits from '@/components/services/talent/project_outsoursing/benifits';
import { ProjectOutsoursingCTA } from '@/components/services/talent/project_outsoursing/cta';
import { ProjectBasedOutsourcing } from '@/components/services/talent/project_outsoursing/hero';
import ProjectOutsourcingProcess from '@/components/services/talent/project_outsoursing/process';
import ProjectBasedOutsourcingServices from '@/components/services/talent/project_outsoursing/services';
import ProjectOutsourcing from '@/components/services/talent/project_outsoursing/what';
import ProjectOutsourcingWhy from '@/components/services/talent/project_outsoursing/why';

export default function ai_ml() {
  return (
    <div className="min-h-screen max-w-screen ">
      <main>
        <Navbar />
        <ProjectBasedOutsourcing />
        <ProjectOutsourcing />
        <ProjectBasedOutsourcingServices />
        <ProjectOutsourcingWhy />
        <ProjectOutsourcingBenefits />
        <ProjectOutsourcingProcess />
        <ProjectOutsoursingCTA />
        <FooterSection />
     </main>
      </div>
  )}