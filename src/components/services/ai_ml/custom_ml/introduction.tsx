"use client";

import { motion } from 'framer-motion';
import Link from 'next/link';

const CustomMLSection = () => {
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section className="relative bg-gradient-to-br from-[#252525f0] to-[#2861B3]/20 text-white py-20 px-4 sm:px-8 lg:px-10 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-0 left-0 w-64 h-64 bg-[#2674D3]/40 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#2861B3]/40 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
          >
            Custom Machine Learning Model Development
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-3xl mx-auto"
          >
            At Atvantiq, we specialize in developing custom machine learning models that solve complex business challenges and unlock valuable insights from your data.
          </motion.p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid md:grid-cols-2 gap-8 mt-12"
        >
          {/* Left Column: Main Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              As a trusted <span className="text-[#2674D3] font-medium">AI & ML development company</span> serving clients in <span className="font-medium">India, the USA, Canada, Australia, the UAE, and Europe</span>, we focus on creating tailored, scalable, and high-performance ML solutions designed specifically for your unique needs.
            </p>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Our team of <span className="text-[#2674D3] font-medium">machine learning engineers, data scientists, and domain experts</span> bring years of experience in building intelligent systems across industries such as <span className="font-medium">healthcare, finance, retail, manufacturing, telecom, and energy</span>.
            </p>
            <p className="text-base md:text-lg text-gray-200 leading-relaxed">
              Whether you&apos;re looking to <span className="font-medium">automate tasks, forecast demand, personalize customer experiences, or detect anomalies</span>, Atvantiq delivers precision-crafted models that drive measurable outcomes.
            </p>
            <motion.div variants={itemVariants}>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 text-sm font-medium text-white bg-gradient-to-r from-[#2674D3] to-[#2861B3] rounded-xl hover:from-[#2861B3] hover:to-[#2674D3] transition-all duration-300 group"
              >
                Get Started
                <svg
                  className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Feature Highlights */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="bg-gradient-to-l from-[#1a1a1a9e] to-[#1a1a1a] rounded-2xl p-6 shadow-2xl hover:shadow-[#2674D3]/50 transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
              <p className="text-sm text-gray-300">
                Custom-built ML models designed to address your specific business challenges and goals.
              </p>
            </div>
            <div className="bg-gradient-to-l from-[#1a1a1a9e] to-[#1a1a1a] rounded-2xl p-6 shadow-2xl hover:shadow-[#2674D3]/50 transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Scalable & High-Performance</h3>
              <p className="text-sm text-gray-300">
                Robust models engineered for scalability and performance to handle large datasets and real-time demands.
              </p>
            </div>
            <div className="bg-gradient-to-l from-[#1a1a1a9e] to-[#1a1a1a] rounded-2xl p-6 shadow-2xl hover:shadow-[#2674D3]/50 transition-shadow duration-300">
              <h3 className="text-xl font-semibold mb-3">Cross-Industry Expertise</h3>
              <p className="text-sm text-gray-300">
                Proven experience delivering intelligent systems for healthcare, finance, retail, and more.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomMLSection;