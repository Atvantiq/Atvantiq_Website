"use client";

import { motion } from 'framer-motion';
import CTASection from "../../cta";

const AICTASection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, when: "beforeChildren", staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative"
    >
      <CTASection
        title="Accelerate Innovation with Custom Machine Learning Models"
        description={
          <motion.div variants={itemVariants} className="space-y-4">
            <p className="text-lg text-gray-200 leading-relaxed">
              At <span className="text-[#2674D3] font-medium">Atvantiq</span>, we are your partner in innovation. With our{' '}
              <span className="text-[#2674D3] font-medium">custom ML development services</span>, you get intelligent systems that continuously learn, adapt, and improve—giving you a{' '}
              <span className="text-[#2674D3] font-medium">competitive edge</span> in your industry.
            </p>
            <p className="text-lg text-gray-200 leading-relaxed">
              Let’s work together to build machine learning solutions that power{' '}
              <span className="text-[#2674D3] font-medium">growth and innovation</span>.
            </p>
          </motion.div>
        }
        ctaText="Contact us today to discuss your custom ML project!"
        imagePath="/services/ai/callaction.jpg"
        imageAlt="Machine Learning Development Workspace"
      />
      {/* Particle Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-10 left-10 w-32 h-32 bg-[#2674D3]/20 rounded-full blur-2xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-[#2861B3]/20 rounded-full blur-2xl animate-pulse delay-1000" />
      </div>
    </motion.div>
  );
};

export default AICTASection;