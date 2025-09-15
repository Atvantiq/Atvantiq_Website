"use client";
import React, { useState } from 'react';
import Image from 'next/image';

const EmailMarketingPlatforms = () => {
  const [hoveredPlatform, setHoveredPlatform] = useState<number | null>(null);

  const platforms = [
    {
      imagePath: "/services/digital-marketing/technology/google-ads.png", 
      name: "Mailchimp"
    },
    {
      imagePath: "/services/digital-marketing/technology/bing-ads.png", 
      name: "HubSpot"
    },
    {
      imagePath: "/services/digital-marketing/technology/meta-ads.png", 
      name: "ActiveCampaign"
    },
    {
      imagePath: "/services/digital-marketing/technology/linkedin-ads.png", 
      name: "Klaviyo"
    },
    {
      imagePath: "/services/digital-marketing/technology/twitter-ads.png", 
      name: "Constant Contact"
    },
    {
      imagePath: "/services/digital-marketing/technology/amazon-ads.png", 
      name: "Zoho Campaigns"
    },
    {
      imagePath: "/services/digital-marketing/technology/amazon-ads.png", 
      name: "Salesforce Marketing Cloud"
    }
  ];

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 py-20 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">
          Platforms We Work With
        </h2>
        <div className="relative flex flex-wrap justify-center gap-8">
          {platforms.map((platform, index) => (
            <div
              key={index}
              className="group flex flex-col w-[250px] items-center transition-all duration-300"
              onMouseEnter={() => setHoveredPlatform(index)}
              onMouseLeave={() => setHoveredPlatform(null)}
            >
              <div className="relative w-12 h-12 mb-2">
                <div
                  className={`absolute inset-0 rounded-full bg-[#2674D3]/20 transition-all duration-300 ${
                    hoveredPlatform === index ? 'scale-110 opacity-80 animate-pulse' : 'opacity-50'
                  }`}
                ></div>
                
                  <Image
                    src={platform.imagePath}
                    alt={`${platform.name} logo`}
                    width={50}
                    height={50}
                    className={`transition-opacity duration-300 ${
                      hoveredPlatform === index ? 'opacity-100' : 'opacity-90'
                    }`}
                  />
              </div>
              <p
                className={`text-sm font-medium mt-4 text-center transition-colors duration-300 ${
                  hoveredPlatform === index ? 'text-[#2674D3]' : 'text-slate-800'
                }`}
              >
                {platform.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EmailMarketingPlatforms;