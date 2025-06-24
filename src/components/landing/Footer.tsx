'use client';
import { useState } from "react";

export default function FooterSection() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    countryCode: '+91',
    contactNumber: '',
    lookingFor: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = () => {
    console.log('Form submitted:', formData);
    // Handle form submission logic here
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">

        {/* Main Grid Layout with 2:1 ratio */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">

          {/* Left Content (2/3 width) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Our Company */}
            <div>
              <h3 className="text-[#2674D3] text-xl font-bold mb-6">Our Company</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white">Why us?</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Who are we?</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">How we work?</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Where we work?</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Client Speaks</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Join us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Our Partners</a></li>
              </ul>
            </div>

            {/* Hire Developers */}
            <div>
              <h3 className="text-[#2674D3] text-xl font-bold mb-6">Technologies</h3>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-300 hover:text-white">Python</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Node.js</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">ReactJS</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Angular</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Flutter</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">React Native</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white">Docker</a></li>
              </ul>
            </div>

            {/* Let's Get In Touch */}
            <div>
              <h3 className="text-[#2674D3] text-xl font-bold mb-6">Let&#39;s Get In Touch</h3>
              <p className="text-white text-lg font-semibold mb-8 leading-relaxed">
                Say Hi! And we won&#39;t disappoint you.... Promise!
              </p>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-[#2674D3] rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg">Contact</h4>
                  <p className="text-gray-300">+91 70964 99910</p>
                </div>
              </div>
            </div>

            {/* Address Section */}
            <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-[#2674D3] text-lg font-bold mb-4">India</h4>
                <p className="text-gray-300">
                  F-126, 2nd Floor, Balaji Tower, Phase 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160055, India
                </p>
              </div>
              <div>
                <h4 className="text-[#2674D3] text-lg font-bold mb-4">USA</h4>
                <p className="text-gray-300">
                  5 Penn Plaza, Suite# 1918, New York, NY 10001
                </p>
              </div>
            </div>

            {/* Social Media */}
            <div className="mb-12">
          <h4 className="text-[#2674D3] text-lg font-bold mb-6">Social Media</h4>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[#2674D3] hover:bg-[#2674D3] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[#2674D3] hover:bg-[#2674D3] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[#2674D3] hover:bg-[#2674D3] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[#2674D3] hover:bg-[#2674D3] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a href="#" className="w-10 h-10 border-2 border-gray-600 rounded-lg flex items-center justify-center hover:border-[#2674D3] hover:bg-[#2674D3] transition-all duration-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>
        </div>

          </div>

          {/* Right Contact Form (1/3 width) */}
          <div className="lg:col-span-1">
            <div className="bg-gray-900 rounded-2xl p-6">
            <div className="space-y-4">
              {/* Full Name */}
              <div>
                <input
                  type="text"
                  name="fullName"
                  placeholder="Full Name*"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#2674D3] text-white placeholder-gray-400 py-3 px-0 outline-none transition-colors duration-300"
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#2674D3] text-white placeholder-gray-400 py-3 px-0 outline-none transition-colors duration-300"
                />
              </div>

              {/* Phone Number */}
              <div className="flex gap-4">
                <select
                  name="countryCode"
                  value={formData.countryCode}
                  onChange={handleInputChange}
                  className="bg-transparent border-b border-gray-600 focus:border-[#2674D3] text-white py-3 px-0 outline-none transition-colors duration-300 w-24"
                >
                  <option value="+91" className="bg-gray-900">+91</option>
                  <option value="+1" className="bg-gray-900">+1</option>
                  <option value="+44" className="bg-gray-900">+44</option>
                  <option value="+61" className="bg-gray-900">+61</option>
                </select>
                <input
                  type="tel"
                  name="contactNumber"
                  placeholder="Contact Number*"
                  value={formData.contactNumber}
                  onChange={handleInputChange}
                  className="flex-1 bg-transparent border-b border-gray-600 focus:border-[#2674D3] text-white placeholder-gray-400 py-3 px-0 outline-none transition-colors duration-300"
                />
              </div>

              {/* Looking For */}
              <div>
                <select
                  name="lookingFor"
                  value={formData.lookingFor}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#2674D3] text-gray-400 py-3 px-0 outline-none transition-colors duration-300"
                >
                  <option value="" className="bg-gray-900">Looking For</option>
                  <option value="web-development" className="bg-gray-900">Web Development</option>
                  <option value="mobile-development" className="bg-gray-900">Mobile Development</option>
                  <option value="ai-solutions" className="bg-gray-900">AI Solutions</option>
                  <option value="cloud-services" className="bg-gray-900">Cloud Services</option>
                  <option value="cybersecurity" className="bg-gray-900">Cybersecurity</option>
                  <option value="telecom-services" className="bg-gray-900">Telecom Services</option>
                  <option value="solar-energy" className="bg-gray-900">Solar Energy</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  placeholder="Message*"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full bg-transparent border-b border-gray-600 focus:border-[#2674D3] text-white placeholder-gray-400 py-3 px-0 outline-none resize-none transition-colors duration-300"
                />
              </div>

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                className="w-full bg-gradient-to-r from-[#2674D3] to-[#2861B3] hover:from-[#1e5aa8] hover:to-[#1f4d8c] text-white font-bold py-4 px-6 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg uppercase tracking-wider"
              >
                Send Inquiry
              </button>
            </div>
          </div>
        </div>

        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-6">
            <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
              <p>&copy; 2024 Atvantiq. All rights reserved.</p>
              <div className="flex gap-6 mt-4 md:mt-0">
                <a href="#" className="hover:text-white">Privacy Policy</a>
                <a href="#" className="hover:text-white">Terms of Service</a>
                <a href="#" className="hover:text-white">Cookie Policy</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
}
