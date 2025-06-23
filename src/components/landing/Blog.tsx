"use client";
import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';

const BlogSection = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [isAtBottom, setIsAtBottom] = useState(false);

  const blogPosts = [
    {
      id: 1,
      title: "How AI is enhancing customer experience in retail",
      description: "AI is enhancing retail customer experience by leveraging data analytics and machine learning to offer personalized recommendations and seamless shopping journeys.",
      image: "/blog/retail.png",
      author: {
        name: "Smith",
        avatar: "/avatars/smith.jpg"
      },
      date: "16th Apr '25",
      category: "AI AGENCY",
      categoryColor: "bg-[#2674D3]"
    },
    {
      id: 2,
      title: "How our AI services can transform your business",
      description: "Paraphrasing features are prevalent in AI tools, allowing users to alter text effectively. Merlin and Quillbot are key platforms offering advanced paraphrasing options.",
      image: "/blog/business.jpg",
      author: {
        name: "Smith",
        avatar: "/avatars/smith.jpg"
      },
      date: "29th Aug '24",
      category: "AI AGENCY",
      categoryColor: "bg-[#2674D3]"
    },
    {
      id: 3,
      title: "The Future of Machine Learning in Healthcare",
      description: "Exploring how machine learning algorithms are revolutionizing medical diagnosis, treatment planning, and patient care in modern healthcare systems.",
      image: "/blog/healthcare.jpg",
      author: {
        name: "Williams",
        avatar: "/avatars/williams.jpg"
      },
      date: "3rd Jun '24",
      category: "HEALTHCARE",
      categoryColor: "bg-[#2861B3]"
    },
    {
      id: 4,
      title: "Cybersecurity in the Age of AI",
      description: "Understanding the dual role of AI in cybersecurity - both as a powerful defense mechanism and a potential vector for sophisticated cyber attacks.",
      image: "/blog/cyber.jpg",
      author: {
        name: "Davis",
        avatar: "/avatars/davis.jpg"
      },
      date: "22nd May '24",
      category: "SECURITY",
      categoryColor: "bg-[#2674D3]"
    },
    {
      id: 5,
      title: "Cloud Computing Trends for 2025",
      description: "Analyzing the latest trends in cloud computing, including serverless architecture, edge computing, and multi-cloud strategies for modern enterprises.",
      image: "/blog/cloud.jpg",
      author: {
        name: "Brown",
        avatar: "/avatars/brown.jpg"
      },
      date: "10th Apr '24",
      category: "CLOUD",
      categoryColor: "bg-[#1A82E8]"
    }
  ];

  

  // Handle scroll behavior
  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = scrollContainer;
      const isTop = scrollTop <= 10;
      const isBottom = scrollTop >= scrollHeight - clientHeight - 10;
      
      setIsAtTop(isTop);
      setIsAtBottom(isBottom);
    };

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent page scroll when not at boundaries
  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      const scrollContainer = scrollContainerRef.current;
      if (!scrollContainer) return;

      const deltaY = e.deltaY;
      
      // Prevent page scroll if we're not at boundaries
      if ((deltaY < 0 && !isAtTop) || (deltaY > 0 && !isAtBottom)) {
        e.preventDefault();
        scrollContainer.scrollTop += deltaY;
      }
    };

    document.addEventListener('wheel', handleWheel, { passive: false });
    return () => document.removeEventListener('wheel', handleWheel);
  }, [isAtTop, isAtBottom]);

  return (
    <>
      <style>{`
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
      
      <section ref={sectionRef} className="bg-white min-h-screen">
        <div 
          ref={scrollContainerRef}
          className="h-screen overflow-y-auto no-scrollbar"
        >
          <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 min-h-screen">
              
              {/* Fixed Left Sidebar - No Box */}
              <div className="lg:col-span-2 lg:sticky lg:top-16 lg:h-fit">
                <div className="py-8">
                  
                  {/* Latest Blog Header */}
                  <div className="mb-8">
                    <div className="flex items-start gap-4 pt-2 pb-8">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            Latest Blogs
          </h3>
        </div>
                    
                    <p className="text-gray-600 text-lg leading-relaxed">
                      In the tapestry of Atvantiq, our core values are the threads weaving excellence. Integrity is the backbone, 
                      anchoring our commitment to transparency, honesty, and ethical practices.
                    </p>
                  </div>

                  {/* More Blogs Button */}
                  <div className="mb-12">
                    <button className="bg-gradient-to-r from-[#2674D3] to-[#2861B3] hover:from-[#1e5aa8] hover:to-[#1f4d8c] text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 transition-all duration-300 hover:scale-105 shadow-lg">
                      <span>→</span>
                      More Blogs
                    </button>
                  </div>
                 
                </div>
              </div>

              {/* Blog Posts Content */}
              <div className="lg:col-span-3">
                <div className="space-y-6 py-8">
                  {blogPosts.map((post) => (
                    <article key={post.id}>
                      <div className="relative flex flex-col md:flex-row bg-white rounded-2xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-gray-100">
                        
                        {/* Blog Image and Category Badge */}
                        <div className="relative w-full md:w-64 h-48 md:h-auto flex-shrink-0">
                          <Image
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                            width={256}
                            height={192}
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src = `data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 200"><rect width="300" height="200" fill='%23e5e7eb'/><text x='150' y='100' text-anchor='middle' fill='%236b7280' font-size='14' font-family='Arial'>Blog Image</text></svg>`;
                            }}
                          />
                          
                          {/* Category Badge */}
                          <div className="absolute top-4 left-4">
                            <span className={`${post.categoryColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
                              {post.category}
                            </span>
                          </div>
                        </div>

                        {/* Blog Content */}
                        <div className="flex-1 p-6 flex flex-col justify-between">
                          <div>
                            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-[#2674D3] transition-colors duration-300">
                              {post.title}
                            </h3>
                            <p className="text-gray-700 mb-4 leading-relaxed">{post.description}</p>
                          </div>
                          
                          <div className="flex items-center gap-3 mt-4">
                            <div className="relative w-8 h-8">
                              <Image
                                src={post.author.avatar}
                                alt={post.author.name}
                                className="w-full h-full object-cover rounded-full"
                                width={32}
                                height={32}
                                onError={(e) => {
                                  const target = e.target as HTMLImageElement;
                                  target.style.display = 'none';
                                  if (target.nextSibling && target.nextSibling instanceof HTMLElement) {
                                    (target.nextSibling as HTMLElement).style.display = 'flex';
                                  }
                                }}
                              />
                              <div className="hidden absolute inset-0 w-full h-full bg-gradient-to-br from-[#2674D3] to-[#2861B3] items-center justify-center text-white text-xs font-semibold rounded-full">
                                {post.author.name.charAt(0)}
                              </div>
                            </div>
                            <span className="text-sm text-gray-700 font-medium">
                              by {post.author.name}
                            </span>
                            <span className="text-sm text-gray-500 ml-2">
                              {post.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogSection;