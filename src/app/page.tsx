'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowUp } from 'react-icons/fa';
import TestimonialCarousel from '@/component/TestimonialCarousel/page';
import MediaDeckSection from '@/component/MediaDeckSection/page';
import BlogCard from '@/component/BlogSection/page';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';

type Slide = {
  title1: string;
  title2: string;
  text: string;
  img: string;
};

export default function Homepage() {
  const slides: Slide[] = [
    {
      title1: 'OWN THE',
      title2: 'BUYER JOURNEY',
      text: 'Leverage advanced insights, personalised ABM, and precision targeting to engage real decision-makers.',
      img: '/home/own.png',
    },
    {
      title1: 'IGNITE DEMAND.',
      title2: 'DRIVE GROWTH.',
      text: 'Fuel your B2B marketing with data-driven strategies that capture attention and convert intent into revenue.',
      img: '/home/ROI.png',
    },
    {
      title1: 'FOR MOST DEMAND GEN',
      title2: 'AGENCIES, DEMAND GENERATION STOPS AT THE DOWNLOAD',
      text: 'We build strategies that make buyers remember your brand — and come back when they’re ready to buy.',
      img: '/home/ingnite.png',
    },
  ];

  const logos = [
    '/client-logo/Ring Central.png',
    '/client-logo/Spectrum VoIP.png',
    '/client-logo/Wheelhouse.png',
    '/client-logo/X-Taas.png',
    '/client-logo/Panterra.png',
    '/client-logo/Inside.png',
    '/client-logo/Goto.png',
    '/client-logo/KnowBe4.png',
    '/client-logo/NETSUITE.png',
    '/client-logo/OZONETEL.png',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      4000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  useEffect(() => {
    const checkScroll = () => {
      if (window.scrollY > 200) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {/* Floating Scroll-to-Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed right-6 bottom-8 z-50 bg-[#3099D5] hover:bg-[#258AC5] text-white p-3 rounded-full shadow-lg transition-all transform hover:scale-110 flex items-center justify-center"
        >
          <FaArrowUp className="text-base" />
        </button>
      )}

      {/* Hero Carousel Section */}
      <section className="relative bg-[#F0F9FD] py-14 px-6 lg:px-14">
        <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left Section */}
          <div className="flex-1 max-w-xl">
            {currentIndex === 2 ? (
              <>
                <h1 className="text-3xl sm:text-4xl md:text-[36px] font-extrabold tracking-tight leading-[1.15] uppercase mb-2">
                  <span className="text-[#3099D5]">FOR MOST DEMAND GEN</span><br />
                  <span className="text-[#3099D5]">AGENCIES, </span>
                  <span className="text-[#16243D]">DEMAND GENERATION</span><br />
                  <span className="text-[#16243D]">STOPS AT THE DOWNLOAD.</span>
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#3099D5] tracking-tight leading-tight uppercase">
                  {slides[currentIndex].title1}
                </h1>
                <h2 className="text-3xl sm:text-4xl md:text-[44px] font-bold text-[#16243D] tracking-tight leading-[1.1] mt-1 uppercase">
                  {slides[currentIndex].title2}
                </h2>
              </>
            )}
            <p className="mt-3 text-base sm:text-[17px] text-[#16243D] leading-relaxed font-medium">
              {slides[currentIndex].text}
            </p>

            {/* Email Subscription Form */}
            <form
              className="mt-4 flex flex-col sm:flex-row gap-3 w-full max-w-2xl"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="bg-white border border-gray-300 rounded-sm px-6 py-3 flex-[1.5] text-[15px] text-[#333333] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3099D5] shadow-sm"
              />

              <button
                type="submit"
                className="bg-[#3099D5] hover:bg-[#16243D] text-white font-semibold text-[15px] px-8 py-3 rounded-sm shadow transition-colors duration-300 whitespace-nowrap"
              >
                Get Growth Insights
              </button>
            </form>

            <p className="mt-4 text-[17px] sm:text-[17px] text-[#16243D] font-medium">
              Stay ahead with insights that help you drive measurable growth.
            </p>
          </div>

          {/* Right Section (Hero Illustration) */}
          <div className="flex-1 flex justify-center items-center">
            <div className="relative w-full max-w-[420px] h-[280px] sm:h-[320px]">
              <Image
                src={slides[currentIndex].img}
                alt={slides[currentIndex].title2}
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>

        {/* Carousel Dots */}
        <div className="flex justify-center mt-6 space-x-1.5">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Slide ${index + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${index === currentIndex ? 'bg-[#3099D5] w-6' : 'bg-gray-300 w-2.5'
                }`}
            />
          ))}
        </div>
      </section>

      {/* Trusted By Leading Global Brands Section */}
      <section className="py-10 px-6 bg-white border-b border-gray-100">
        <div className="max-w-[1240px] mx-auto text-center">
          <h3 className="text-[18px] sm:text-[20px] md:text-[22px] font-semibold text-[#787878] mb-6 tracking-wide">
            Trusted By Leading Global Brands &amp; Consistently Exceeding Expectations
          </h3>

          {/* Scrolling Logos */}
          <div className="overflow-hidden relative">
            <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10" />

            <motion.div
              className="flex whitespace-nowrap items-center py-1 w-max"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                repeat: Infinity,
                ease: "linear",
                duration: 30,
              }}
            >
              {logos.concat(logos).map((src, i) => (
                <div key={i} className="mx-7 flex-shrink-0 flex items-center justify-center">
                  <Image
                    src={src}
                    alt={`Client Logo ${i + 1}`}
                    width={130}
                    height={50}
                    className="h-9 sm:h-11 w-auto object-contain opacity-85 hover:opacity-100 transition-opacity"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-14 px-6 lg:px-14 bg-[#F8F9FA]">
        <div className="max-w-[1240px] mx-auto">
          {/* Section Heading */}
          <div className="text-center mb-10">
            <h2 className="text-[36px] sm:text-[40px] md:text-[40px] font-bold text-[#3099D5] mb-3">
              Your Growth, Our Mission!
            </h2>
            <p className="text-[18px] sm:text-[22px] text-[#555555] font-medium mx-auto whitespace-nowrap overflow-x-auto">
              Empowering B2B Brands To Create Demand, Capture Opportunities, And Convert Pipeline into Revenue
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {/* Service 1 */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[300px]">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/homepage-service-images/B2B-Lead-Generation.png"
                  alt="B2B Lead Generation"
                  width={64}
                  height={64}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-[#606060] mb-2">
                B2B Lead Generation
              </h4>
              <p className="text-[#787878] text-[15px] sm:text-[16px] font-normal leading-relaxed mb-5 flex-grow">
                Empower your sales team and drive growth with our Account-Based Marketing strategies.
              </p>
              <Link
                href="/Services"
                className="bg-[#3099D5] hover:bg-[#16243D] text-white font-medium text-[15px] sm:text-[16px] rounded-full py-2 px-6 transition-colors shadow-sm"
              >
                Learn More
              </Link>
            </div>

            {/* Service 2 */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[300px]">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/homepage-service-images/B2B-Advertising (2).png"
                  alt="RDIGS Engagement Engine"
                  width={64}
                  height={64}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-[#606060] mb-2">
                RDIGS Engagement Engine
              </h4>
              <p className="text-[#787878] text-[15px] sm:text-[16px] font-normal leading-relaxed mb-5 flex-grow">
                Turn passive leads into active conversations — and get your brand on more buying shortlists.
              </p>
              <Link
                href="/Services"
                className="bg-[#3099D5] hover:bg-[#16243D] text-white font-medium text-[15px] sm:text-[16px] rounded-full py-2 px-6 transition-colors shadow-sm"
              >
                Learn More
              </Link>
            </div>

            {/* Service 3 */}
            <div className="group bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col items-center text-center justify-between min-h-[300px]">
              <div className="w-16 h-16 mb-3 flex items-center justify-center">
                <Image
                  src="/homepage-service-images/B2B-SDR-as-a-Service (1).png"
                  alt="RDIGS Outbound Engine"
                  width={64}
                  height={64}
                  className="object-contain transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              <h4 className="text-[20px] sm:text-[22px] md:text-[24px] font-medium text-[#606060] mb-2">
                RDIGS Outbound Engine
              </h4>
              <p className="text-[#787878] text-[15px] sm:text-[16px] font-normal leading-relaxed mb-5 flex-grow">
                Human-led outreach that drives webinar registrations, qualifies data, and creates more opportunities.
              </p>
              <Link
                href="/Services"
                className="bg-[#3099D5] hover:bg-[#16243D] text-white font-medium text-[15px] sm:text-[16px] rounded-full py-2 px-6 transition-colors shadow-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* View All Services Button */}
          <div className="text-center mt-12">
            <Link
              href="/Services"
              className="inline-block bg-[#3099D5] hover:bg-[#16243D] text-white font-semibold text-[15px] sm:text-[16px] rounded-full py-2.5 px-8 transition-colors shadow-sm"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Our Purpose, Your Progress! Section */}
      <section className="py-16 px-6 lg:px-14 bg-[#F2F7FB]">
        <div className="max-w-[1240px] mx-auto flex flex-col lg:flex-row items-stretch gap-8">
          {/* Left Content Card */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col justify-center"
          >
            <h2 className="text-[28px] sm:text-[32px] md:text-[36px] font-bold text-[#3099D5] leading-tight mb-4">
              Our Purpose, Your Progress!
            </h2>
            <h3 className="text-[18px] sm:text-[20px] font-normal text-[#444444] mb-5">
              Learn what fuels our passion for B2B marketing.
            </h3>
            <div className="text-[#555555] text-[14px] sm:text-[15px] leading-relaxed space-y-4 mb-8">
              <p>
                We recognise a growing challenge in the demand generation industry: buyers often remember the content they downloaded but forget the brand behind it. Too many vendors also rely on intent signals that are unreliable or misinterpreted as guaranteed buying intent. The result is wasted spend and poor-quality demand.
              </p>
              <p>
                Our mission is to help marketers change that. We build campaigns that drive awareness as well as leads, ensuring your brand is remembered when buyers are ready to act and your business is more likely to make the shortlist.
              </p>
            </div>
            <div>
              <Link
                href="/About"
                className="inline-block bg-[#3099D5] hover:bg-[#16243D] text-white font-semibold text-[14px] px-6 py-2.5 rounded-full shadow transition-colors duration-300"
              >
                Know More...
              </Link>
            </div>
          </motion.div>

          {/* Right Content Card (Image + Stats) */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 bg-white rounded-2xl p-8 sm:p-10 shadow-sm flex flex-col items-center justify-between"
          >
            <div className="w-full max-w-[450px] mb-8 flex justify-center">
              <Image
                src="/home/About-US.png"
                alt="Our Purpose"
                width={500}
                height={300}
                className="w-full h-auto object-contain rounded-lg"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 w-full">
              <div className="bg-[#F6F9FC] rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-[28px] sm:text-[32px] font-bold text-[#3099D5]">
                  <CountUp end={7093} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} /> k+
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-[#16243D] mt-1">Campaigns Executed</span>
              </div>
              <div className="bg-[#F6F9FC] rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-[28px] sm:text-[32px] font-bold text-[#3099D5]">
                  <CountUp end={10} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} /> +
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-[#16243D] mt-1">Years Of Experience</span>
              </div>
              <div className="bg-[#F6F9FC] rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-[28px] sm:text-[32px] font-bold text-[#3099D5]">
                  <CountUp end={60} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} /> +
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-[#16243D] mt-1">Demand Gen Professionals</span>
              </div>
              <div className="bg-[#F6F9FC] rounded-xl p-5 flex flex-col items-center justify-center text-center shadow-sm">
                <span className="text-[28px] sm:text-[32px] font-bold text-[#3099D5]">
                  <CountUp end={4.7} decimals={1} duration={2.5} enableScrollSpy={true} scrollSpyOnce={true} /> m+
                </span>
                <span className="text-[14px] sm:text-[15px] font-medium text-[#16243D] mt-1">Leads Delivered</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-[#F8F9FA] py-14">
        <div className="max-w-[1240px] mx-auto text-center px-6 lg:px-14 mb-8">
          <h2 className="text-[32px] sm:text-[36px] md:text-[40px] font-bold text-[#3099D5] mb-2">
            Their Experience, Our Pride!!
          </h2>
          <p className="text-[18px] sm:text-[24px] text-[#555555] font-medium">
            See What Our Clients Are Saying About Their Growth Journey
          </p>
        </div>
        <TestimonialCarousel />
      </section>

      {/* Blogs & Articles Section */}
      <section className="py-16 bg-white">
        <div className="max-w-[1240px] mx-auto px-6 lg:px-14 text-center mb-10">
          <h4 className="text-[18px] sm:text-[24px] font-bold text-[#16243D] mb-1">Blogs & Articles</h4>
          <h2 className="text-[28px] sm:text-[40px] md:text-[36px] font-bold text-[#3099D5] mb-3">
            Our Market Insights, Your Competitive Edge!
          </h2>
          <p className="text-[20px] sm:text-[24px] text-[#555555] font-medium max-w-3xl mx-auto">
            Explore Expert Perspectives and Insights That Fuel B2B Demand Generation and Marketing Growth.
          </p>
        </div>

        <div className="max-w-[1240px] mx-auto px-6 lg:px-14 grid grid-cols-1 md:grid-cols-3 gap-8">
          <BlogCard blog={{ id: 1, title: 'A Guide to B2B Lead Qualification', image: '/blog/Blog 11.webp' }} />
          <BlogCard blog={{ id: 2, title: 'Data silos block B2B decisions', image: '/blog/Blog 12.webp' }} />
          <BlogCard blog={{ id: 3, title: 'B2B Journey & Touchpoints', image: '/blog/Blog 13.webp' }} />
        </div>

        <div className="text-center mt-12">
          <Link
            href="/blogs"
            className="inline-block bg-[#3099D5] hover:bg-[#16243D] text-white font-semibold text-[14px] px-8 py-2.5 rounded-full transition-colors shadow-sm"
          >
            View All Blogs
          </Link>
        </div>
      </section>

      {/* Media Deck Section */}
      <MediaDeckSection />
    </div>
  );
}
