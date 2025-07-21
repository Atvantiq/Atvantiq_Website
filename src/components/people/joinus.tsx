"use client";
import React, { useState } from 'react';

interface FormData {
  name: string;
  email: string;
  position: string;
  resume: File | null;
}

interface Job {
  type: string;
  title: string;
  description: string;
}

const CareersJobsSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    position: '',
    resume: null
  });

  const jobs: Job[] = [
    {
      type: "Full Time / Part Time",
      title: "DEVOPS and Kubernetes Engineer",
      description: "As a Cloud Application and DevOps Engineer, you will play a critical role in the creation of large-scale, distributed applications that have strong federation, dynamic scaling and configuration"
    },
    {
      type: "Full Time",
      title: "Security Infra NCE",
      description: "Should have 2+ years of experience in Security devices and technologies. Should have good written and verbal communications skill. This is Operations requirement, should be able to work in different shifts as per roaster."
    },
    {
      type: "Full Time",
      title: "CISCO",
      description: "Knowledge & experience on routing protocols like BGP, OSPF, Static Routing, BFD etc. Knowledge of ACI & should know terminology like Vxlan, Tenant, BD creation, EPG, Subnet, Contract, L3 out, L2 out."
    },
    {
      type: "Full Time",
      title: "Quality Engineer",
      description: "Field quality controller who ensures that multiple clients, especially Ciena, adhere to industry standards. Responsible for field issues during I&C, AT. Responsible for conducting customer Quality."
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0] || null;
    setFormData(prev => ({
      ...prev,
      resume: file
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  return (
    <section className="bg-[#f1f5f9] py-16 md:py-24 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-start justify-center gap-4 pt-2 mb-6">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h2 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
              Open Positions
            </h2>
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          </div>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Join our team of innovative professionals and help us build the future of technology. 
            Explore our current openings and find your next career opportunity.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Job Listings - Left Side */}
          <div className="lg:col-span-2">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {jobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  {/* Job Type Badge */}
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-600 text-xs font-medium px-3 py-1 rounded-full">
                      {job.type}
                    </span>
                  </div>

                  {/* Job Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
                    {job.title}
                  </h3>

                  {/* Job Description */}
                  <p className="text-gray-600 text-sm leading-relaxed mb-6">
                    {job.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form - Right Side */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
                
                {/* Form Header */}
                <div className="bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white text-center py-6">
                  <h3 className="text-xl font-bold">Join Our Team</h3>
                </div>

                {/* Form Content */}
                <div className="p-6">
                  <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Name Field */}
                    <div>
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name*"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2674D3] focus:border-transparent placeholder-gray-400"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email*"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2674D3] focus:border-transparent placeholder-gray-400"
                      />
                    </div>

                    {/* Position Field */}
                    <div>
                      <input
                        type="text"
                        name="position"
                        placeholder="Your Position*"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2674D3] focus:border-transparent placeholder-gray-400"
                      />
                    </div>

                    {/* File Upload */}
                    <div>
                      <label className="block text-gray-700 text-sm font-medium mb-2">
                        Upload Resume*
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          name="resume"
                          onChange={handleFileChange}
                          accept=".pdf,.doc,.docx"
                          required
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2674D3] focus:border-transparent file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-gray-100 file:text-gray-700 hover:file:bg-gray-200"
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-[#2674D3] to-[#1A82E8] text-white font-bold py-4 px-6 rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 mt-6"
                    >
                      SEND APPLICATION
                    </button>
                  </form>

                  {/* Additional Info */}
                  <div className="mt-6 text-center">
                    <p className="text-gray-500 text-xs">
                      We&apos;ll get back to you within 24 hours
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersJobsSection;