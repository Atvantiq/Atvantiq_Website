import IndustriesSection from "../subservices_industries";
import { 
  Stethoscope, 
  ShoppingBag, 
  Banknote, 
  BookOpen, 
  Megaphone
} from 'lucide-react';
export const GenAIIndustries = () => {
  const industries = [
    {
      icon: <Stethoscope className="w-6 h-6" />,
      title: "Healthcare",
      desc: "Automate medical documentation and patient interactions."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "E-commerce",
      desc: "Create dynamic product descriptions and personalized recommendations."
    },
    {
      icon: <Banknote className="w-6 h-6" />,
      title: "Finance",
      desc: "Analyze statements, generate reports, and assist in compliance."
    },
    {
      icon: <BookOpen className="w-6 h-6" />,
      title: "Education",
      desc: "Generate quizzes, course content, and grading assistance."
    },
    {
      icon: <Megaphone className="w-6 h-6" />,
      title: "Marketing",
      desc: "Run AI-powered campaign planning and ad copy creation."
    }
  ];

  return (
    <IndustriesSection 
      industries={industries}
      cardStyle="modern"
    />
  );
};
