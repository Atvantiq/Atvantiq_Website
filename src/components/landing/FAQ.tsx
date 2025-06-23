'use client';
import { useState } from "react";

export default function FAQSection() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(1); // Start with second FAQ open

  const faqs = [
    {
      id: 1,
      question: "What services does Atvantiq offer?",
      answer: "We provide telecom, IT infrastructure, cloud services, AI solutions, ERP systems, and solar energy solutions. Our comprehensive suite of services is designed to help businesses digitally transform and optimize their operations across multiple technology domains."
    },
    {
      id: 2,
      question: "Which industries do you serve? ",
      answer: "Our services cater to healthcare, finance, retail, logistics, and education sectors."
    },
      
    {
      id: 3,
      question: "How can I get a consultation?",
      answer: "You can contact us or call us at +91 987-222-8953 for a free consultation"
    }
  ];

  const toggleFAQ = (faqId: number) => {
    setOpenFAQ(openFAQ === faqId ? null : faqId);
  };

  return (
    <section className="bg-[#3b4246] py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className=" mb-12">
          <div className="flex items-start gap-4 pt-2 pb-8">
          <div className="w-16 h-[2px] bg-gradient-to-r from-[#2674D3] to-[#2861B3] mt-4"></div>
          <h3 className="uppercase tracking-wider text-[#2674D3] font-bold text-[25px]">
            Frequently Asked Questions
          </h3>
        </div>
          <p className="text-gray-200 text-lg ">
            Here&#39;s a list of FAQs that will help you to know more about Atvantiq.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md"
            >
              {/* Question */}
              <button
                onClick={() => toggleFAQ(faq.id)}
                className={`w-full px-6 py-5 text-left transition-all duration-300 flex items-center justify-between ${
                  openFAQ === faq.id 
                    ? 'bg-gray-800 text-gray-200' 
                    : 'bg-gray-800 hover:bg-gray-800 text-gray-200'
                }`}
              >
                <span className="text-lg font-medium pr-4">
                  {faq.question}
                </span>
                <div className={`flex-shrink-0 transition-transform duration-300 ${
                  openFAQ === faq.id ? 'rotate-180' : 'rotate-0'
                }`}>
                  <svg 
                    className={`w-5 h-5 ${
                      openFAQ === faq.id ? 'text-[#2674D3]' : 'text-gray-500'
                    }`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M19 9l-7 7-7-7" 
                    />
                  </svg>
                </div>
              </button>

              {/* Answer */}
              <div className={`transition-all duration-300 ease-in-out ${
                openFAQ === faq.id 
                  ? 'max-h-[800px] opacity-100' 
                  : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="px-6 pb-6 pt-2">
                  <div className="text-gray-400 leading-relaxed whitespace-pre-line">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}