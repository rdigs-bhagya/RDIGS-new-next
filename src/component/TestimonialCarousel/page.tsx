'use client';

import Image from 'next/image';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function TestimonialCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides = [
    [
      {
        text: `We have worked with RDIGS as our delivery partner for over five years. Throughout the period, they have provided amazing, high-quality leads and been responsive to both planned and unplanned needs. They have developed a good set of capabilities in their team and processes to ensure that their delivery is timely and comes with uncompromised quality. All in all, they are a good team and willing to go the extra mile when needed to partner in the client's success.`,
        role: 'Founder & CEO',
        logo: '/client-feedback/Taas.png',
        alt: 'TaaS Logo',
      },
      {
        text: `Thanks to RDIGS' incredible work, timely leads, and flexibility, especially since you guys help us achieve our demand gen goals each quarter. Our executive team can now see an exemplary Opportunity to Close/Win rate along with solid ROI. We are hoping to grow this partnership with RDIGS throughout!`,
        role: 'Senior Marketing Programs Manager',
        logo: '/client-feedback/Goto (1).png',
        alt: 'GoTo Logo',
      },
    ],
    [
      {
        text: `Our partnership with RDIGS has been outstanding, and they have now become our top partner in terms of both volume and quality. Thanks to their efforts, we have seen a 5% increase in conversion rates from partner media in our Sales-Ready Leads offering. RDIGS has played a pivotal role in this success.`,
        role: 'Director - Inventory & Analytics',
        logo: '/client-feedback/Wheelhouse (3).png',
        alt: 'Salesforce Logo',
      },
      {
        text: `We have developed a great partnership with RDIGS. Their dedication to making our partnership fruitful has been evident since its inception. They have helped us fulfill client demands across different verticals while keeping quantity and quality at a high level. We appreciate their efforts and commitment to getting demands done and done on time. You guys rock. Thank you so much for doing a great job and keeping our partnership successful!`,
        role: 'Strategic Customer Success Manager',
        logo: '/client-feedback/Inside-2 (1).png',
        alt: 'Zoom Logo',
      },
    ],
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="container mx-auto my-12 px-6">
      {/* Heading */}
      <div className="text-center mb-6">
        <h1 className="text-[#3099D5] text-[2.5rem] font-bold mb-2">
          Their Experience, Our Pride!!
        </h1>
        <h4 className="text-[#606060] font-medium text-[24px] leading-[29px]">
          See What Our Clients Are Saying About Their Growth Journey
        </h4>
      </div>

      {/* Carousel */}
      <div className="relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="flex flex-wrap justify-center gap-6"
          >
            {slides[activeIndex].map((slide, idx) => (
              <div
                key={idx}
                className="w-full md:w-[45%] bg-white rounded-lg p-6 shadow-md flex flex-col justify-between"
                style={{ height: '400px' }} // Fixed height
              >
                {/* Text Section */}
                <div>
                  <p className="text-[#212529] mb-4">{slide.text}</p>
                  <p className="text-[#3099D5] font-semibold">{slide.role}</p>
                </div>

                {/* Logo at bottom-right */}
                <div className="mt-4 flex justify-end">
                  <Image
                    src={slide.logo}
                    alt={slide.alt}
                    width={120}
                    height={60}
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-[#3099D5] text-white p-2 rounded-full hover:bg-[#258AC5] hidden lg:flex"
          onClick={handlePrev}
        >
          &#10094;
        </button>
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-[#3099D5] text-white p-2 rounded-full hover:bg-[#258AC5] hidden lg:flex"
          onClick={handleNext}
        >
          &#10095;
        </button>
      </div>
    </div>
  );
}
