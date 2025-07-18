"use client";

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

interface MenuItem {
  title: string;
  path: string;
  hasDropdown?: boolean;
  dropdownItems?: Array<{
    title: string;
    path: string;
  }>;
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [hoveredLink, setHoveredLink] = useState<number | null>(null);
  const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
  const navRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const pathname = usePathname();

  const menuItems: MenuItem[] = [
    { title: "About", path: "/about" },
    { 
      title: "Services", 
      path: "/services",
      hasDropdown: true,
      dropdownItems: [
        {
          title: "AI & ML Development",
          path: "/services/ai-ml-development",
        },
        {
          title: "Cybersecurity Solutions",
          path: "/services/cybersecurity",
        },
        {
          title: "Web & Mobile App Development",
          path: "/services/web-mobile-development",
        },
        {
          title: "Digital Marketing Services",
          path: "/services/digital-marketing",
        },
        {
          title: "Telecom Services",
          path: "/services/telecom",
        },
        {
          title: "Cloud Services",
          path: "/services/cloud-services",
        },
        {
          title: "Solar Energy Solutions",
          path: "/services/solar-energy",
        },
        {
          title: "Talent Outsourcing Services",
          path: "/services/talent-outsourcing",
        }
      ]
    },
    { title: "People", 
      path: "/people", 
      hasDropdown: true,
      dropdownItems: [
        {
          title: "Life @ Atvantiq",
          path: "/people/life-atvantiq",
        },
        {
          title: "Careers",
          path: "/people/careers",
        },]
    },
    { title: "Case Study", path: "/casestudy" },
    { title: "Blog", path: "/blog" }
  ];

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const handleDropdownEnter = (title: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setActiveDropdown(title);
  };

  const handleDropdownLeave = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null);
    }, 200);
  };

  const toggleMobileDropdown = (title: string) => {
    console.log('Toggling mobile dropdown for:', title);
    console.log('Current activeMobileDropdown:', activeMobileDropdown);
    const newValue = activeMobileDropdown === title ? null : title;
    console.log('Setting activeMobileDropdown to:', newValue);
    setActiveMobileDropdown(newValue);
  };

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setActiveMobileDropdown(null);
    setHoveredLink(null);
    
    // Clear timeouts on route change
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }, [pathname]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const dropdowns = document.querySelectorAll('.relative');
      let clickedOutside = true;
      dropdowns.forEach(dropdown => {
        if (dropdown.contains(event.target as Node)) {
          clickedOutside = false;
        }
      });
      if (clickedOutside) {
        setActiveDropdown(null);
        setActiveMobileDropdown(null);
        
        // Clear dropdown timeout
        if (dropdownTimeoutRef.current) {
          clearTimeout(dropdownTimeoutRef.current);
        }
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      // You can add scroll-related logic here if needed in the future
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current);
      }
    };
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const navElement = navRef.current;
    if (!navElement) return;

    const mouseX = e.clientX;
    let newHoveredLink: number | null = null;

    for (let i = 0; i < linkRefs.current.length; i++) {
      const link = linkRefs.current[i];
      if (link) {
        const rect = link.getBoundingClientRect();
        const buffer = 4;
        if (mouseX >= rect.left - buffer && mouseX <= rect.right + buffer) {
          newHoveredLink = i;
          break;
        }
      }
    }

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setHoveredLink(newHoveredLink);
    }, 30);
  };

  const handleMouseLeave = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    timeoutRef.current = setTimeout(() => {
      setHoveredLink(null);
    }, 50);
  };

  return (
    <header className="absolute top-0 w-full z-50 bg-transparent">
      <div className="mx-auto px-4 sm:px-8 lg:px-10">
        <div className="flex justify-start h-20">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center justify-start">
              <Link href="/">
                <Image src="/logo.png" alt="Logo" width={210} height={45} />
              </Link>
            </div>
          </div>
          <div className="flex items-center pl-12">
            <div
              className="hidden md:flex md:space-x-8 relative"
              ref={navRef}
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
            >
              {menuItems.map((item, index) =>
                !item.hasDropdown ? (
                  <div
                    key={item.title}
                    ref={(el) => {
                      linkRefs.current[index] = el;
                    }}
                    className="relative flex items-center"
                  >
                    <Link
                      href={item.path}
                      className="inline-flex items-center px-1 pt-1 text-md font-normal text-white"
                    >
                      {item.title}
                    </Link>
                  </div>
                ) : (
                  <div
                    key={item.title}
                    ref={(el) => {
                      linkRefs.current[index] = el;
                    }}
                    className="relative"
                    onMouseEnter={() => handleDropdownEnter(item.title)}
                    onMouseLeave={handleDropdownLeave}
                  >
                    <button className="inline-flex items-center px-1 pt-1 text-md font-normal text-white">
                      {item.title}
                      <svg
                        className="ml-2 h-4 w-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {activeDropdown === item.title && (
                      <div 
                        className="absolute left-0 z-10 mt-1 w-52 rounded-2xl shadow-2xl bg-gradient-to-l from-[#1a1a1a9e] to-[#1a1a1a]"
                        onMouseEnter={() => handleDropdownEnter(item.title)}
                        onMouseLeave={handleDropdownLeave}
                      >
                        <div className="py-3">
                          <div className="grid gap-1 p-2">
                            {item.dropdownItems?.map((dropdownItem) => (
                              <Link
                                key={dropdownItem.title}
                                href={dropdownItem.path}
                                className="flex items-center px-3 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-[#2674D3]/10 hover:to-[#2861B3]/10 hover:text-[#2674D3] transition-all duration-200 group rounded-xl"
                              >
                                <div className="flex-1">
                                  <div className="font-medium text-xs leading-tight">{dropdownItem.title}</div>
                                </div>
                                <svg
                                  className="ml-1 h-3 w-3 text-white group-hover:text-[#2674D3] group-hover:translate-x-1 transition-all duration-200"
                                  fill="none"
                                  stroke="currentColor"
                                  viewBox="0 0 24 24"
                                >
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              )}
              {hoveredLink !== null && linkRefs.current[hoveredLink] && (
                <motion.div
                  className="absolute -bottom-2 w-2 h-2 bg-[#2861B3] rounded-full pointer-events-none"
                  initial={false}
                  animate={{
                    x:
                      linkRefs.current[hoveredLink]!.offsetLeft +
                      linkRefs.current[hoveredLink]!.offsetWidth / 2 -
                      6,
                    opacity: 1,
                  }}
                  transition={{ type: "spring", stiffness: 500, damping: 30 }}
                />
              )}
            </div>

            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-end p-2 rounded-md text-white hover:text-gray-300 hover:bg-white/10"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="pt-2 pb-3 space-y-1">
            {menuItems.map((item) =>
              !item.hasDropdown ? (
                <Link
                  key={item.title}
                  href={item.path}
                  className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-[#2674D3] hover:text-[#2674D3]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.title}
                </Link>
              ) : (
                <div key={item.title} className="space-y-1">
                  <button
                    onClick={() => toggleMobileDropdown(item.title)}
                    className="w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-700 hover:bg-gray-50 hover:border-[#2674D3] hover:text-[#2674D3]"
                  >
                    {item.title}
                    <svg
                      className={`ml-2 h-5 w-5 transform transition-transform duration-200 text-gray-700 ${
                        activeMobileDropdown === item.title ? 'rotate-180' : ''
                      }`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {/* Simplified conditional rendering */}
                  {activeMobileDropdown === item.title ? (
                    <div className="space-y-1 bg-gray-50 border-l-2 border-blue-300">
                      {item.dropdownItems?.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.title}
                          href={dropdownItem.path}
                          className="block pl-8 pr-4 py-3 text-sm font-medium text-gray-600 hover:bg-gray-100 hover:text-[#2674D3] transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.title}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              )
            )}
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;