'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

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
        alt: 'Wheelhouse Logo',
      },
      {
        text: `We have developed a great partnership with RDIGS. Their dedication to making our partnership fruitful has been evident since its inception. They have helped us fulfill client demands across different verticals while keeping quantity and quality at a high level. We appreciate their efforts and commitment to getting demands done and done on time. You guys rock. Thank you so much for doing a great job and keeping our partnership successful!`,
        role: 'Strategic Customer Success Manager',
        logo: '/client-feedback/Inside-2 (1).png',
        alt: 'Inside Logo',
      },
    ],
  ];

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setActiveIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="bg-transparent w-full">
      <div className="max-w-[1240px] mx-auto">
        {/* Carousel Container */}
        <div className="relative px-2 md:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            >
              {slides[activeIndex].map((slide, idx) => (
                <div
                  key={idx}
                  className="bg-[#F8F9FA] rounded-2xl p-6 sm:p-7 flex flex-col justify-between border border-gray-100 shadow-sm min-h-[300px]"
                >
                  {/* Text Section */}
                  <div>
                    <p className="text-[#212529] text-[14px] sm:text-[15px] leading-relaxed mb-4">
                      {slide.text}
                    </p>
                    <p className="text-[#3099D5] font-semibold text-[15px] sm:text-[16px]">
                      {slide.role}
                    </p>
                  </div>

                  {/* Logo at bottom-right */}
                  <div className="mt-5 flex justify-end">
                    <Image
                      src={slide.logo}
                      alt={slide.alt}
                      width={160}
                      height={70}
                      priority={true}
                      className="h-12 sm:h-14 w-auto object-contain"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button
            aria-label="Previous Slide"
            className="absolute left-0 top-1/2 -translate-y-1/2 text-[#3099D5] hover:text-[#16243D] p-2 transition-colors hidden md:block"
            onClick={handlePrev}
          >
            <FaChevronLeft className="text-2xl" />
          </button>
          <button
            aria-label="Next Slide"
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[#3099D5] hover:text-[#16243D] p-2 transition-colors hidden md:block"
            onClick={handleNext}
          >
            <FaChevronRight className="text-2xl" />
          </button>
        </div>
      </div>
    </section>
  );
}
