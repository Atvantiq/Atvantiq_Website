'use client';
import { useEffect, useState } from "react";
import Image from "next/image";

export default function TestimonialsSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [visibleCards, setVisibleCards] = useState(3);

  const testimonials = [
    {
      id: 1,
      text: "Our experience with Atvantiq, India has been excellent. The delivery has been prompt and the entire team right from the CEO to senior management team members have listened to the voice of the customer.",
      author: "Gurpreet Singh",
      avatar: "/profile/profile3.png",
      rating: 5,
    },
    {
      id: 2, 
      text: "Atvantiq Solutions' timely advice and support to smoothly manage our entire telecom installations and get optimum performance was commendable. Atvantiq exceeded our expectations.",
      author: "Vishal Verma",
      avatar: "/profile/profile.png",
      rating: 5,
    },
    {
      id: 3,
      text: "I was looking for an IT development partner that has sound knowledge and experience with developing applications. Atvantiq Solutions delivered the project on-time and with almost zero bugs.",
      author: "Manjeet Singh",
      avatar: "/profile/profile2.png", 
      rating: 5,
    },
    {
      id: 4,
      text: "Atvantiq Solutions' timely advice and support to smoothly manage our entire telecom installations and get optimum performance was commendable. Atvantiq exceeded our expectations.",
      author: "Sarah Chen",
      avatar: "/profile/profile1.png",
      rating: 5, 
    },
  ];

  // Determine visible cards based on screen width
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) setVisibleCards(1);
      else if (window.innerWidth < 1024) setVisibleCards(3);
      else setVisibleCards(4);
    };
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const totalSlides = Math.max(1, Math.ceil(testimonials.length / visibleCards));
  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, totalSlides - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));
  const goToSlide = (index: number) => setCurrentSlide(index);

  return (
    <section className="bg-[#fff9f0] py-16 px-4 sm:px-8 md:px-16 overflow-hidden">
      <div className="mx-auto">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-start gap-4 pt-2 pb-8">
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
            <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
              What Our Clients Say
            </h3>
          </div>
          <p className="text-black text-xl md:text-2xl font-medium">
            Discover how Atvantiq has transformed businesses <br />across industries with our innovative solutions
          </p>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{
              width: `${(testimonials.length / visibleCards) * 100}%`,
              transform: `translateX(-${currentSlide * (100 / 5)}%)`,
            }}
          >
            {testimonials.map((testimonial) => {
              const isHovered = hoveredCard === testimonial.id;
              const shouldShowDark = isHovered;

              return (
                <div
                  key={testimonial.id}
                  className="flex-shrink-0 w-1/4 sm:w-1/2 lg:w-1/3 px-3"
                  style={{ flex: `0 0 ${100 / testimonials.length}%` }}
                  onMouseEnter={() => setHoveredCard(testimonial.id)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="relative min-h-[520px]">
                    {/* Background */}
                    <div className="absolute inset-0">
                      <div className={`w-full h-full ${shouldShowDark ? 'clip-corner-hover bg-gradient-to-br from-[#2674D3] to-[#2861B3]' : 'bg-white rounded-[40px]'}`} />
                    </div>

                    {/* Content */}
                    <div className={`relative z-10 p-8 pt-9 pr-[72px] pb-0 pl-9 h-full ${shouldShowDark ? 'text-white' : 'text-gray-800'}`}>
                      <div className="mb-6">
                        <span className={`text-xs font-semibold tracking-wider uppercase ${shouldShowDark ? 'text-white/80' : 'text-gray-500'}`}>
                          ATVANTIQ CLIENT
                        </span>
                      </div>
                      <div className="mb-8">
                        <p className={`text-lg leading-relaxed ${shouldShowDark ? 'text-white' : 'text-gray-700'}`}>
                          &quot;{testimonial.text}&quot;
                        </p>
                      </div>
                      {/* Stars */}
                      <div className={`flex gap-1 mb-6 ${shouldShowDark ? 'opacity-100' : 'opacity-0'} transition-all duration-500`}>
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg
                            key={i}
                            className="w-5 h-5 text-yellow-400 fill-current"
                            viewBox="0 0 20 20"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                          </svg>
                        ))}
                      </div>

                      {/* Author */}
                      <div className="flex items-center gap-4 mt-auto">
                        <Image
                          src={testimonial.avatar}
                          alt={testimonial.author}
                          width={60}
                          height={60}
                          className="rounded-full border-4 border-white/20"
                        />
                        <h4 className={`font-bold text-lg ${shouldShowDark ? 'text-white' : 'text-gray-900'}`}>
                          {testimonial.author}
                        </h4>
                      </div>

                      {/* Quote Icon */}
                      <div className={`absolute right-8 text-6xl font-serif ${shouldShowDark ? 'text-white/20 bottom-6' : 'text-gray-200 top-6'}`}>
                        &quot;
                      </div>

                      {/* Arrow Icon */}
                      <div className={`absolute top-[22px] right-[24px] w-[63px] h-[63px] rounded-full flex items-center justify-center ${shouldShowDark ? 'opacity-100' : 'opacity-0'} transition-all duration-300`}>
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#e500ff] to-[#2674D3]"></div>
                        <div className="relative z-10">
                          <svg className="w-6 h-6 text-white rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 17L17 7M17 7H7M17 7V17" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Pagination */}
        <span className="text-gray-400 text-sm flex justify-center mt-10">
          {currentSlide + 1} / {totalSlides}
        </span>
        <div className="flex justify-center items-center gap-4 mt-4">
          <button onClick={prevSlide} className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2674D3] hover:bg-[#2674D3] hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex gap-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide
                    ? 'bg-gradient-to-r from-[#2674D3] to-[#2861B3] w-8'
                    : 'bg-gray-300 hover:bg-gray-400 w-3'
                }`}
              />
            ))}
          </div>
          <button onClick={nextSlide} className="w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center text-[#2674D3] hover:bg-[#2674D3] hover:text-white transition-all">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
