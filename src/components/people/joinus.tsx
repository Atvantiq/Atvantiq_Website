"use client";
import React, { useState } from "react";

interface Job {
  type: string;
  title: string;
  description: string;
  category: string;
}

const jobs: Job[] = [
  {
    type: "Full Time / Part Time",
    title: "DEVOPS and Kubernetes Engineer",
    description:
      "Work with cutting-edge cloud infrastructure and Kubernetes-based deployments.",
    category: "DevOps",
  },
  {
    type: "Full Time",
    title: "Security Infra NCE",
    description:
      "Ensure robust security infrastructure and monitor threats proactively.",
    category: "Security",
  },
  {
    type: "Full Time",
    title: "CISCO",
    description:
      "Design and maintain enterprise-level network infrastructure using CISCO systems.",
    category: "Networking",
  },
  {
    type: "Full Time",
    title: "Quality Engineer",
    description:
      "Implement and maintain high-quality software testing procedures.",
    category: "Quality",
  },
];

interface FormData {
  name: string;
  email: string;
  position: string;
  resume: File | null;
}

const CareersPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    position: "",
    resume: null,
  });

  const categories = [
    "All",
    ...Array.from(new Set(jobs.map((job) => job.category))),
  ];

  const filteredJobs =
    selectedCategory === "All"
      ? jobs
      : jobs.filter((job) => job.category === selectedCategory);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("Application Submitted!");
    // Here you'd send it to backend via fetch or Axios
  };

  return (
    <div className="bg-white  py-16 px-4">
      <div className="md:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-6 text-gray-800">
          Explore Open Roles
        </h2>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-10">
          We’re always looking for passionate, driven individuals to join our
          growing team.
        </p>

        <div className="grid grid-cols-3 gap-8 mb-8">
          {/* Filter Buttons */}
          <div className="col-span-2">
            <div className="flex flex-wrap gap-3 justify-center mb-10">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium border transition-all duration-200 ${
                    selectedCategory === cat
                      ? "bg-[#2674D3] text-white border-[#2674D3]"
                      : "bg-white text-gray-600 border-gray-300 hover:border-[#2674D3]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Job Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {filteredJobs.map((job, index) => (
                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
                >
                  <p className="text-sm text-blue-600 font-semibold mb-2">
                    {job.type}
                  </p>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {job.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{job.description}</p>
                  <span className="inline-block bg-blue-100 text-blue-700 text-xs px-3 py-1 rounded-full font-medium">
                    {job.category}
                  </span>
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
                      <select
                        required
                        name="position"
                        id="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        className="w-full border border-gray-300 rounded-md px-4 py-2 bg-white focus:outline-none focus:ring focus:border-blue-400"
                      >
                        <option value="">Select position</option>
                        {jobs.map((job, idx) => (
                          <option key={idx} value={job.title}>
                            {job.title}
                          </option>
                        ))}
                      </select>
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
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersPage;
