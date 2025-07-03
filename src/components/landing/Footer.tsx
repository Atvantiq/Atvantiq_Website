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
    <div className="flex items-center mb-4">
      {/* India Flag SVG */}
      <svg 
        width="32" 
        height="24" 
        viewBox="0 0 54 36" 
        className="mr-3"
      >
        <g>
          {/* Background */}
          <rect width="54" height="36" fill="#FFFFFF"/>
          
          {/* Saffron Band */}
          <rect width="54" height="12" fill="#FF9933"/>
          
          {/* White Band */}
          <rect y="12" width="54" height="12" fill="#FFFFFF"/>
          
          {/* Green Band */}
          <rect y="24" width="54" height="12" fill="#138808"/>
          
          {/* Ashoka Chakra */}
          <g transform="translate(27,18)">
            {/* Outer circle */}
            <circle r="5.5" fill="none" stroke="#000080" strokeWidth="0.5"/>
            
            {/* 24 Spokes */}
            <g stroke="#000080" strokeWidth="0.3" fill="none">
              <line x1="0" y1="-5.5" x2="0" y2="5.5"/>
              <line x1="1.44" y1="-5.31" x2="-1.44" y2="5.31" transform="rotate(15)"/>
              <line x1="2.75" y1="-4.76" x2="-2.75" y2="4.76" transform="rotate(30)"/>
              <line x1="3.89" y1="-3.89" x2="-3.89" y2="3.89" transform="rotate(45)"/>
              <line x1="4.76" y1="-2.75" x2="-4.76" y2="2.75" transform="rotate(60)"/>
              <line x1="5.31" y1="-1.44" x2="-5.31" y2="1.44" transform="rotate(75)"/>
              <line x1="5.5" y1="0" x2="-5.5" y2="0"/>
              <line x1="5.31" y1="1.44" x2="-5.31" y2="-1.44" transform="rotate(105)"/>
              <line x1="4.76" y1="2.75" x2="-4.76" y2="-2.75" transform="rotate(120)"/>
              <line x1="3.89" y1="3.89" x2="-3.89" y2="-3.89" transform="rotate(135)"/>
              <line x1="2.75" y1="4.76" x2="-2.75" y2="-4.76" transform="rotate(150)"/>
              <line x1="1.44" y1="5.31" x2="-1.44" y2="-5.31" transform="rotate(165)"/>
            </g>
            
            {/* Inner hub */}
            <circle r="1" fill="none" stroke="#000080" strokeWidth="0.4"/>
            
            {/* Center dot */}
            <circle r="0.3" fill="#000080"/>
          </g>
        </g>
      </svg>
      <h4 className="text-[#2674D3] text-lg font-bold">India</h4>
    </div>
    <p className="text-gray-300">
      F-126, 2nd Floor, Balaji Tower, Phase 7, Industrial Area, Sector 73, Sahibzada Ajit Singh Nagar, Punjab 160055, India
    </p>
  </div>
  <div>
    <div className="flex items-center mb-4">
      {/* USA Flag SVG */}
      <svg 
        width="32" 
        height="24" 
        viewBox="0 0 55.2 38.4" 
        className="mr-3"
      >
        <g>
          <path fill="#B22234" d="M3.03,0h49.13c1.67,0,3.03,1.36,3.03,3.03v32.33c0,1.67-1.36,3.03-3.03,3.03H3.03C1.36,38.4,0,37.04,0,35.37 V3.03C0,1.36,1.36,0,3.03,0L3.03,0z"/>
          <path fill="#FFFFFF" d="M0.02,2.73h55.17c0.01,0.1,0.02,0.2,0.02,0.31v2.94H0V3.03C0,2.93,0.01,2.83,0.02,2.73L0.02,2.73z M55.2,8.67 v3.24H0V8.67H55.2L55.2,8.67z M55.2,14.61v3.24H0v-3.24H55.2L55.2,14.61z M55.2,20.55v3.24H0v-3.24H55.2L55.2,20.55z M55.2,26.49 v3.24H0v-3.24H55.2L55.2,26.49z M55.2,32.43v2.93c0,0.1-0.01,0.21-0.02,0.31H0.02C0.01,35.58,0,35.47,0,35.37v-2.93H55.2 L55.2,32.43z"/>
          <path fill="#3C3B6E" d="M20.8,0v20.68H0V3.03C0,1.36,1.36,0,3.03,0H20.8L20.8,0L20.8,0z"/>
          <g fill="#FFFFFF">
            <polygon points="1.23,2.86 1.92,5.01 0.1,3.68 2.36,3.68 0.53,5.01 1.23,2.86"/>
            <polygon points="1.23,7.02 1.92,9.17 0.1,7.84 2.36,7.84 0.53,9.17 1.23,7.02"/>
            <polygon points="1.23,11.18 1.92,13.33 0.1,12 2.36,12 0.53,13.33 1.23,11.18"/>
            <polygon points="1.23,15.34 1.92,17.49 0.1,16.16 2.36,16.16 0.53,17.49 1.23,15.34"/>
            <polygon points="3.67,0.78 4.37,2.93 2.54,1.6 4.81,1.6 2.97,2.93 3.67,0.78"/>
            <polygon points="3.67,4.94 4.37,7.09 2.54,5.76 4.81,5.76 2.97,7.09 3.67,4.94"/>
            <polygon points="3.67,9.1 4.37,11.25 2.54,9.92 4.81,9.92 2.97,11.25 3.67,9.1"/>
            <polygon points="3.67,13.26 4.37,15.41 2.54,14.08 4.81,14.08 2.97,15.41 3.67,13.26"/>
            <polygon points="3.67,17.42 4.37,19.57 2.54,18.24 4.81,18.24 2.97,19.57 3.67,17.42"/>
            <polygon points="6.12,2.86 6.82,5.01 4.99,3.68 7.25,3.68 5.42,5.01 6.12,2.86"/>
            <polygon points="6.12,7.02 6.82,9.17 4.99,7.84 7.25,7.84 5.42,9.17 6.12,7.02"/>
            <polygon points="6.12,11.18 6.82,13.33 4.99,12 7.25,12 5.42,13.33 6.12,11.18"/>
            <polygon points="6.12,15.34 6.82,17.49 4.99,16.16 7.25,16.16 5.42,17.49 6.12,15.34"/>
            <polygon points="8.57,0.78 9.26,2.93 7.44,1.6 9.7,1.6 7.87,2.93 8.57,0.78"/>
            <polygon points="8.57,4.94 9.26,7.09 7.44,5.76 9.7,5.76 7.87,7.09 8.57,4.94"/>
            <polygon points="8.57,9.1 9.26,11.25 7.44,9.92 9.7,9.92 7.87,11.25 8.57,9.1"/>
            <polygon points="8.57,13.26 9.26,15.41 7.44,14.08 9.7,14.08 7.87,15.41 8.57,13.26"/>
            <polygon points="8.57,17.42 9.26,19.57 7.44,18.24 9.7,18.24 7.87,19.57 8.57,17.42"/>
            <polygon points="11.01,2.86 11.71,5.01 9.88,3.68 12.14,3.68 10.31,5.01 11.01,2.86"/>
            <polygon points="11.01,7.02 11.71,9.17 9.88,7.84 12.14,7.84 10.31,9.17 11.01,7.02"/>
            <polygon points="11.01,11.18 11.71,13.33 9.88,12 12.14,12 10.31,13.33 11.01,11.18"/>
            <polygon points="11.01,15.34 11.71,17.49 9.88,16.16 12.14,16.16 10.31,17.49 11.01,15.34"/>
            <polygon points="13.46,0.78 14.16,2.93 12.33,1.6 14.59,1.6 12.76,2.93 13.46,0.78"/>
            <polygon points="13.46,4.94 14.16,7.09 12.33,5.76 14.59,5.76 12.76,7.09 13.46,4.94"/>
            <polygon points="13.46,9.1 14.16,11.25 12.33,9.92 14.59,9.92 12.76,11.25 13.46,9.1"/>
            <polygon points="13.46,13.26 14.16,15.41 12.33,14.08 14.59,14.08 12.76,15.41 13.46,13.26"/>
            <polygon points="13.46,17.42 14.16,19.57 12.33,18.24 14.59,18.24 12.76,19.57 13.46,17.42"/>
            <polygon points="15.9,2.86 16.6,5.01 14.77,3.68 17.03,3.68 15.21,5.01 15.9,2.86"/>
            <polygon points="15.9,7.02 16.6,9.17 14.77,7.84 17.03,7.84 15.21,9.17 15.9,7.02"/>
            <polygon points="15.9,11.18 16.6,13.33 14.77,12 17.03,12 15.21,13.33 15.9,11.18"/>
            <polygon points="15.9,15.34 16.6,17.49 14.77,16.16 17.03,16.16 15.21,17.49 15.9,15.34"/>
            <polygon points="18.35,0.78 19.05,2.93 17.22,1.6 19.48,1.6 17.65,2.93 18.35,0.78"/>
            <polygon points="18.35,4.94 19.05,7.09 17.22,5.76 19.48,5.76 17.65,7.09 18.35,4.94"/>
            <polygon points="18.35,9.1 19.05,11.25 17.22,9.92 19.48,9.92 17.65,11.25 18.35,9.1"/>
            <polygon points="18.35,13.26 19.05,15.41 17.22,14.08 19.48,14.08 17.65,15.41 18.35,13.26"/>
            <polygon points="18.35,17.42 19.05,19.57 17.22,18.24 19.48,18.24 17.65,19.57 18.35,17.42"/>
          </g>
        </g>
      </svg>
      <h4 className="text-[#2674D3] text-lg font-bold">USA</h4>
    </div>
    <p className="text-gray-300">
      110 North Wacker Drive, Chicago, IL 60606
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
                  <option value="digital-marketing" className="bg-gray-900">Digital Marketing</option>
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
              <p>&copy; 2025 Atvantiq. All rights reserved.</p>
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
