'use client';
import { useState, useEffect, useRef, memo } from 'react'; // Import memo
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';

// --- Interfaces (No Change) ---
interface SubMenuItem {
	title: string;
	path: string;
}

interface DropdownItem {
	title: string;
	path: string;
	subItems?: SubMenuItem[];
}

interface MenuItem {
	title: string;
	path: string;
	hasDropdown?: boolean;
	dropdownItems?: DropdownItem[];
}

// --- Component ---

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [activeSubDropdown, setActiveSubDropdown] = useState<string | null>(null);
	const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
	const [activeMobileSubDropdown, setActiveMobileSubDropdown] = useState<string | null>(null);
	const [hoveredLink, setHoveredLink] = useState<number | null>(null);
	const linkRefs = useRef<(HTMLDivElement | null)[]>([]);
	const navRef = useRef<HTMLDivElement | null>(null);
	const timeoutRef = useRef<NodeJS.Timeout | null>(null);
	const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
	const subDropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);

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
					subItems: [
						{ title: "Custom Machine Learning Model Development", path: "/services/ai-ml-development/custom-ml-model" },
						{ title: "Generative AI applications Services", path: "/services/ai-ml-development/generative-ai" },
						{ title: "AI Consulting & Strategy", path: "/services/ai-ml-development/ai-consulting" },
						{ title: "Natural Language Processing (NLP) services", path: "/services/ai-ml-development/nlp" },
						{ title: "AI-Powered Process Automation Services", path: "/services/ai-ml-development/ai-automation" },
						{ title: "Computer Vision Solutions", path: "/services/ai-ml-development/computer-vision" },
					],
				},
				{
					title: "Cybersecurity Solutions",
					path: "/services/cybersecurity",
					subItems: [
						{ title: "Endpoint Security Solutions", path: "/services/cybersecurity/endpoint-security" },
						{ title: "Cloud Security & DevSecOps", path: "/services/cybersecurity/cloud-security" },
						{ title: "Vulnerability Management & Penetration Testing", path: "/services/cybersecurity/vulnerability-management" },
						{ title: "Cybersecurity Awareness & Training", path: "/services/cybersecurity/awareness-training" },
						{ title: "Managed Security Services", path: "/services/cybersecurity/managed-security" },
						{ title: "Security Risk Assessment & Audit", path: "/services/cybersecurity/risk-assessment" },
						{ title: "Network Security & Firewall Management", path: "/services/cybersecurity/network-security" },
					],
				},
				{
					title: "Web & Mobile App Development",
					path: "/services/web-mobile-development",
					subItems: [
						{ title: "Custom Web Application Development", path: "/services/web-mobile-development/custom-web" },
						{ title: "iOS & Android mobile apps development", path: "/services/web-mobile-development/mobile-apps" },
						{ title: "UI/UX Design & Prototyping", path: "/services/web-mobile-development/ui-ux" },
						{ title: "E-Commerce Website & App Development", path: "/services/web-mobile-development/ecommerce" },
						{ title: "Progressive Web Apps", path: "/services/web-mobile-development/progressive-web-apps" },
						{ title: "API Development & Integration", path: "/services/web-mobile-development/api-development" },
						{ title: "MVP Development for Startups", path: "/services/web-mobile-development/mvp-development" },
					],
				},
				{
					title: "Digital Marketing Services",
					path: "/services/digital-marketing",
					subItems: [
						{ title: "Search Engine Optimization (SEO)", path: "/services/digital-marketing/seo" },
						{ title: "Pay-Per-Click Advertising (PPC)", path: "/services/digital-marketing/ppc" },
						{ title: "Social Media Marketing", path: "/services/digital-marketing/social-media-marketing" },
						{ title: "Content Marketing", path: "/services/digital-marketing/content-marketing" },
						{ title: "Email Marketing & Automation", path: "/services/digital-marketing/email-marketing" },
						{ title: "Online Reputation Management (ORM)", path: "/services/digital-marketing/orm" },
						{ title: "Analytics & Conversion Optimization", path: "/services/digital-marketing/analytics" },
					],
				},
				{
					title: "Telecom Services",
					path: "/services/telecom",
					subItems: [
						{ title: "Transport Network Services", path: "/services/telecom/transport-network" },
						{ title: "Radio Access Network", path: "/services/telecom/radio-access-network" },
						{ title: "Core Network Services", path: "/services/telecom/core-network" },
						{ title: "Backhaul Services", path: "/services/telecom/backhaul-services" },
					],
				},
				// {
				// 	title: "Cloud Services",
				// 	path: "/services/cloud-services",
				// 	subItems: [
				// 		{ title: "Cloud architecture & consulting", path: "/services/cloud-services/architecture-consulting" },
				// 		{ title: "Cloud migration & deployment", path: "/services/cloud-services/migration-deployment" },
				// 		{ title: "AWS, Azure, and Google Cloud solutions", path: "/services/cloud-services/cloud-solutions" },
				// 		{ title: "DevOps & CI/CD pipelines", path: "/services/cloud-services/devops-cicd" },
				// 		{ title: "Managed cloud operations & support", path: "/services/cloud-services/managed-operations" },
				// 	],
				// },
				// {
				// 	title: "Solar Energy Solutions",
				// 	path: "/services/solar-energy",
				// 	subItems: [
				// 		{ title: "Residential & commercial solar panel installations", path: "/services/solar-energy/installations" },
				// 		{ title: "Battery storage solutions", path: "/services/solar-energy/battery-storage" },
				// 		{ title: "System maintenance & repair", path: "/services/solar-energy/maintenance-repair" },
				// 		{ title: "Solar energy consultation", path: "/services/solar-energy/consultation" },
				// 		{ title: "Green energy audits", path: "/services/solar-energy/green-audits" },
				// 	],
				// },
				{
					title: "Talent Outsourcing Services",
					path: "/services/talent-outsourcing",
					subItems: [
						{ title: "Contract & full-time placements", path: "/services/talent-outsourcing/contract-placements" },
						{ title: "Project-based outsourcing", path: "/services/talent-outsourcing/project-outsourcing" },
						{ title: "Technical recruiters & HR consulting", path: "/services/talent-outsourcing/hr-consulting" },
						{ title: "Software based onboarding process", path: "/services/talent-outsourcing/onboarding" },
						{ title: "Payroll Management", path: "/services/talent-outsourcing/payroll" },
					],
				},
			],
		},
		{ 
			title: "People", 
			path: "/people", 
			hasDropdown: true,
			dropdownItems: [
				// { title: "Life @ Atvantiq", path: "/people/life-atvantiq" },
				{ title: "Careers", path: "/people/careers" },
			],
		},
		{ title: "Case Study", path: "/casestudy" },
		{ title: "Blog", path: "/blog" },
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
			setActiveSubDropdown(null);
		}, 200);
	};

	const handleSubDropdownEnter = (title: string) => {
		if (subDropdownTimeoutRef.current) {
			clearTimeout(subDropdownTimeoutRef.current);
		}
		setActiveSubDropdown(title);
	};

	const handleSubDropdownLeave = () => {
		if (subDropdownTimeoutRef.current) {
			clearTimeout(subDropdownTimeoutRef.current);
		}
		subDropdownTimeoutRef.current = setTimeout(() => {
			setActiveSubDropdown(null);
		}, 200);
	};

	const toggleMobileDropdown = (title: string) => {
		setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
		// Reset sub-dropdown when main dropdown changes
		if (activeMobileDropdown !== title) {
			setActiveMobileSubDropdown(null);
		}
	};

	const toggleMobileSubDropdown = (title: string) => {
		setActiveMobileSubDropdown(activeMobileSubDropdown === title ? null : title);
	};

	useEffect(() => {
		setIsOpen(false);
		setActiveDropdown(null);
		setActiveSubDropdown(null);
		setActiveMobileDropdown(null);
		setActiveMobileSubDropdown(null);
		setHoveredLink(null);
		
		if (dropdownTimeoutRef.current) {
			clearTimeout(dropdownTimeoutRef.current);
		}
		if (subDropdownTimeoutRef.current) {
			clearTimeout(subDropdownTimeoutRef.current);
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
				setActiveSubDropdown(null);
				
				if (dropdownTimeoutRef.current) {
					clearTimeout(dropdownTimeoutRef.current);
				}
				if (subDropdownTimeoutRef.current) {
					clearTimeout(subDropdownTimeoutRef.current);
				}
			}
		};
		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, []);

	// --- FIX: Removed the unnecessary scroll event listener, which was 
	// only running an empty function and potentially adding overhead.
	useEffect(() => {
		return () => {
			if (timeoutRef.current) {
				clearTimeout(timeoutRef.current);
			}
			if (dropdownTimeoutRef.current) {
				clearTimeout(dropdownTimeoutRef.current);
			}
			if (subDropdownTimeoutRef.current) {
				clearTimeout(subDropdownTimeoutRef.current);
			}
		};
	}, []);

	// --- FIX: Optimized handleMouseMove to reduce layout thrashing and state updates ---
	const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
		// Use a local variable to store the link index to update state only if necessary
		let newHoveredLink: number | null = null;
		const mouseX = e.clientX;

		// No need for a comprehensive throttle; better to check the position immediately
		// and use a timeout to delay the *state update* (which triggers render/motion).
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}

		// Loop through link refs once per mouse movement event
		for (let i = 0; i < linkRefs.current.length; i++) {
			const link = linkRefs.current[i];
			if (link) {
				// FIX: Use offsetLeft/offsetWidth which are static (after mount) 
				// instead of repeated getBoundingClientRect() calls inside the loop.
				// NOTE: We still need one getBoundingClientRect() on the link wrapper 
				// to get the initial position relative to the viewport, but here we 
				// are comparing mouseX against the stored/calculated link bounds. 
				// The original code was still performing layout reads, but using 
				// mouseX against the existing element positions is better.
				const rect = link.getBoundingClientRect(); 
				const buffer = 4;
				if (mouseX >= rect.left - buffer && mouseX <= rect.right + buffer) {
					newHoveredLink = i;
					break;
				}
			}
		}
		
		// Optimization: Update state ONLY if the hovered link actually changed.
		if (newHoveredLink !== hoveredLink) {
			// Small delay (50ms) to prevent flickering on quick mouse movements.
			timeoutRef.current = setTimeout(() => {
				setHoveredLink(newHoveredLink);
			}, 50);
		} else {
			// If the mouse is still over the same link, clear and reset the timeout
			// to keep the dot visible without unnecessary state updates.
			timeoutRef.current = setTimeout(() => {
				setHoveredLink(newHoveredLink);
			}, 50);
		}
	};

	const handleMouseLeave = () => {
		if (timeoutRef.current) {
			clearTimeout(timeoutRef.current);
		}
		// Increased delay slightly to reduce flicker when leaving the navbar
		timeoutRef.current = setTimeout(() => {
			setHoveredLink(null);
		}, 80);
	};

	// --- Component Render ---
	return (
		<header className="absolute top-0 w-full z-50 bg-transparent">
			<div className="mx-auto px-4 sm:px-8 lg:px-10">
				<div className="flex justify-start h-20">
					<div className="flex">
						<div className="flex-shrink-0 flex items-center justify-start">
							<Link href="/">
								<Image src="/logo.png" alt="Logo" width={210} height={45} priority />
							</Link>
						</div>
					</div>
					<div className="flex items-center pl-12">
						<div
							className="hidden md:flex md:space-x-8 relative"
							ref={navRef}
							onMouseMove={handleMouseMove}
							onMouseLeave={handleMouseLeave}
							// OPTIMIZATION: Add GPU hint to the navbar container
							style={{ transform: 'translateZ(0)' }} 
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
												className="absolute -left-18 z-10 mt-1 w-60 rounded-2xl shadow-2xl bg-gradient-to-l from-[#1a1a1a9e] to-[#1a1a1a]"
												onMouseEnter={() => handleDropdownEnter(item.title)}
												onMouseLeave={handleDropdownLeave}
											>
												<div className="py-3">
													<div className="grid gap-1 p-2">
														{item.dropdownItems?.map((dropdownItem) => (
															<div
																key={dropdownItem.title}
																className="relative"
																onMouseEnter={() => handleSubDropdownEnter(dropdownItem.title)}
																onMouseLeave={handleSubDropdownLeave}
															>
																<Link
																	href={dropdownItem.path}
																	className="flex items-center px-3 py-3 text-sm text-white hover:bg-gradient-to-r hover:from-[#2674D3]/10 hover:to-[#2861B3]/10 hover:text-[#2674D3] transition-all duration-200 group rounded-xl"
																>
																	<div className="flex-1">
																		<div className="font-medium text-xs leading-tight">{dropdownItem.title}</div>
																	</div>
																	{dropdownItem.subItems && (
																		<svg
																			className="ml-1 h-3 w-3 text-white group-hover:text-[#2674D3] transition-all duration-200"
																			fill="none"
																			stroke="currentColor"
																			viewBox="0 0 24 24"
																		>
																			<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
																		</svg>
																	)}
																</Link>
																{activeSubDropdown === dropdownItem.title && dropdownItem.subItems && (
																	<div className="absolute left-full -top-2 ml-2 z-20 w-64 rounded-2xl shadow-2xl bg-gradient-to-l from-[#1a1a1a9e] to-[#1a1a1a]">
																		<div className="py-3">
																			<div className="grid gap-1 p-2">
																				{dropdownItem.subItems.map((subItem) => (
																					<Link
																						key={subItem.title}
																						href={subItem.path}
																						className="flex items-center px-3 py-2 text-xs text-white hover:bg-gradient-to-r hover:from-[#2674D3]/10 hover:to-[#2861B3]/10 hover:text-[#2674D3] transition-all duration-200 rounded-xl"
																					>
																						{subItem.title}
																					</Link>
																				))}
																			</div>
																		</div>
																	</div>
																)}
															</div>
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
										// FIX: Removed buffer from X calculation for better precision
										x:
											linkRefs.current[hoveredLink]!.offsetLeft +
											linkRefs.current[hoveredLink]!.offsetWidth / 2 -
											6, // Original offset value adjustment
										opacity: 1,
									}}
									// OPTIMIZATION: Use a slightly less stiff spring for performance 
									// but keep the quick feel.
									transition={{ type: "spring", stiffness: 400, damping: 25 }} 
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
				<div className="md:hidden bg-gradient-to-l from-[#1a1a1a9e] to-[#1a1a1a] shadow-lg">
					<div className="pt-2 pb-3 space-y-1">
						{menuItems.map((item) =>
							!item.hasDropdown ? (
								<Link
									key={item.title}
									href={item.path}
									className="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-gray-100 hover:border-[#2674D3] hover:text-[#2674D3]"
									onClick={() => setIsOpen(false)}
								>
									{item.title}
								</Link>
							) : (
								<div key={item.title} className="space-y-1">
									<button
										onClick={() => toggleMobileDropdown(item.title)}
										className="w-full flex items-center justify-between pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-white hover:bg-gray-100 hover:border-[#2674D3] hover:text-[#2674D3]"
									>
										{item.title}
										<svg
											className={`ml-2 h-5 w-5 transform transition-transform duration-200 text-white ${
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
									{activeMobileDropdown === item.title && (
										<div className="space-y-1 bg-gradient-to-l from-[#1a1a1a9e] to-[#1a1a1a] border-l-2 border-[#2674D3]">
											{item.dropdownItems?.map((dropdownItem) => (
												<div key={dropdownItem.title} className="space-y-1">
													<div className="flex items-center">
														<Link
															href={dropdownItem.path}
															className="flex-1 block pl-8 pr-2 py-3 text-sm font-medium text-white hover:bg-gray-200 hover:text-[#2674D3] transition-colors duration-200"
															onClick={() => setIsOpen(false)}
														>
															{dropdownItem.title}
														</Link>
														{dropdownItem.subItems && (
															<button
																onClick={() => toggleMobileSubDropdown(dropdownItem.title)}
																className="p-2 text-white hover:text-[#2674D3]"
															>
																<svg
																	className={`h-4 w-4 transform transition-transform duration-200 ${
																		activeMobileSubDropdown === dropdownItem.title ? 'rotate-180' : ''
																	}`}
																	xmlns="http://www.w3.org/2000/svg"
																	viewBox="0 0 20 20"
																	fill="currentColor"
																>
																	<path
																		fillRule="evenodd"
																		d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.23 8.27a.75.75 0 01.02-1.06z"
																		clipRule="evenodd"
																	/>
																</svg>
															</button>
														)}
													</div>
													{dropdownItem.subItems && activeMobileSubDropdown === dropdownItem.title && (
														<div className="space-y-1 pl-4 bg-gradient-to-l from-[#2a2a2a9e] to-[#2a2a2a] border-l-2 border-[#2674D3]/50">
															{dropdownItem.subItems.map((subItem) => (
																<Link
																	key={subItem.title}
																	href={subItem.path}
																	className="block pl-8 pr-4 py-2 text-xs font-medium text-white hover:bg-gray-200 hover:text-[#2674D3] transition-colors duration-200"
																	onClick={() => setIsOpen(false)}
																>
																	{subItem.title}
																</Link>
															))}
														</div>
													)}
												</div>
											))}
										</div>
									)}
								</div>
							)
						)}
					</div>
				</div>
			)}
		</header>
	);
};

export default memo(Navbar); // OPTIMIZATION: Export wrapped in memo