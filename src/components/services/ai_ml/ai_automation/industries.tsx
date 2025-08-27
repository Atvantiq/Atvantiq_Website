import IndustriesSection from "../subservices_industries";
import { Stethoscope, ShoppingBag, Banknote, Factory, Headphones } from "lucide-react";
const AIAutomationIndustries = () => {
  const industries = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Healthcare",
      desc: "Claims processing and medical record automation for improved efficiency."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Retail",
      desc: "Automated inventory updates and streamlined order fulfillment processes."
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Banking & Finance",
      desc: "Loan processing automation and KYC compliance workflows."
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Manufacturing",
      desc: "Supply chain optimization and procurement workflow automation."
    },
    {
      icon: <Headphones className="w-6 h-6" />,
      title: "IT Services",
      desc: "Automated ticketing systems, onboarding, and report generation."
    }
  ];

  return (
    <IndustriesSection 
      title="Industries We Automate"
      subtitle="Streamlining operations across diverse sectors with intelligent process automation."
      industries={industries}
      backgroundColor="bg-gradient-to-b from-slate-50 to-white"
      cardStyle="gradient"
    />
  );
};

export default AIAutomationIndustries;