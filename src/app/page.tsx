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
      title1: 'FOR MOST DEMAND GEN',
      title2: 'AGENCIES, DEMAND GENERATION STOPS AT THE DOWNLOAD.',
      text: 'We build strategies that make buyers remember your brand \u2014 and come back when they\u2019re ready to buy.',
      img: '/home/own.png',
    },
    {
      title1: 'OWN THE',
      title2: 'BUYER JOURNEY',
      text: 'Leverage advanced insights, personalised ABM, and precision targeting to engage real decision-makers.',
      img: '/home/ingnite.png',
    },
    {
      title1: 'IGNITE DEMAND.',
      title2: 'DRIVE GROWTH.',
      text: 'Fuel your B2B marketing with data-driven strategies that capture attention and convert intent into revenue.',
      img: '/home/ROI.png',
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
  const [isSubscribeModalOpen, setIsSubscribeModalOpen] = useState(false);
  const [isThankYouOpen, setIsThankYouOpen] = useState(false);

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

  useEffect(() => {
    const timer = window.setTimeout(() => setIsSubscribeModalOpen(true), 75_000);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!isSubscribeModalOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsSubscribeModalOpen(false);
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [isSubscribeModalOpen]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setIsThankYouOpen(true);
  };

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    e.currentTarget.reset();
    setIsSubscribeModalOpen(false);
  };

  return (
    <div className="relative overflow-hidden bg-white">
      {isSubscribeModalOpen && (
        <div
          className="fixed inset-0 z-[10000] grid place-items-center overflow-y-auto bg-black/50 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsSubscribeModalOpen(false);
          }}
        >
          <section
            role="dialog"
            aria-modal="true"
            aria-labelledby="newsletter-title"
            className="w-full max-w-[464px] rounded-[20px] bg-[#f6fbfe] p-3 shadow-2xl"
          >
            <form onSubmit={handleSubscribe} className="relative rounded-[20px] bg-white p-3 shadow-sm">
              <button
                type="button"
                aria-label="Close newsletter subscription"
                onClick={() => setIsSubscribeModalOpen(false)}
                className="absolute right-3 top-2 text-[24px] leading-none text-[#3099D5] hover:text-[#16243D]"
              >
                ×
              </button>
              <h2 id="newsletter-title" className="mb-2 pr-6 text-center text-[21px] font-bold text-[#3099D5]">
                Stay Updated With Our Newsletter!
              </h2>
              <p className="mb-3 text-center text-[11px] leading-[1.5] text-[#212529]">
                Be the first to hear about the latest B2B marketing news,<br className="hidden sm:block" />
                insights, &amp; exclusive offers from RDIGS.
              </p>
              <label className="relative mb-3 block">
                <span className="sr-only">Email address</span>
                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter Your Email"
                  required
                  className="w-full rounded-full bg-[#f1f4f8] px-4 py-2.5 pr-12 text-sm text-[#31415a] shadow-sm outline-none placeholder:text-[#65748b] focus:ring-2 focus:ring-[#acd3f5]"
                />
                <svg aria-hidden="true" viewBox="0 0 24 24" className="absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 fill-[#3099D5]">
                  <path d="M20 4H4a2 2 0 0 0-2 2v.4l10 6.25L22 6.4V6a2 2 0 0 0-2-2Zm2 4.75-9.47 5.92a1 1 0 0 1-1.06 0L2 8.75V18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8.75Z" />
                </svg>
              </label>
              <label className="mb-3 flex items-start gap-2 text-[9px] leading-[1.4] text-[#212529]">
                <input type="checkbox" name="consentCheck" required className="mt-0.5 shrink-0 accent-[#3099D5]" />
                <span>
                  By subscribing, you agree to receive valuable content, industry trends, &amp; marketing insights from RDIGS, its subsidiaries, &amp; affiliates (collectively, “RDIGS”) via email &amp; phone. You can opt out anytime as detailed in our Privacy Policy.
                </span>
              </label>
              <button type="submit" className="mx-auto block w-1/2 rounded-full bg-[#3099D5] py-1 text-[18px] font-bold text-white transition-colors hover:bg-[#16243D]">
                Subscribe Now
              </button>
            </form>
          </section>
        </div>
      )}

      {isThankYouOpen && (
        <div
          className="fixed inset-0 z-[10001] grid place-items-center bg-black/40 p-4"
          onMouseDown={(event) => {
            if (event.target === event.currentTarget) setIsThankYouOpen(false);
          }}
        >
          <section role="dialog" aria-modal="true" aria-labelledby="subscribe-thanks-title" className="rounded-[10px] bg-white px-10 py-6 text-center shadow-2xl">
            <h2 id="subscribe-thanks-title" className="text-xl font-semibold text-[#16243D]">Thank you for subscribing!</h2>
            <button type="button" onClick={() => setIsThankYouOpen(false)} className="mt-4 rounded-md bg-[#3099D5] px-4 py-2 text-white hover:bg-[#16243D]">
              Close
            </button>
          </section>
        </div>
      )}

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
      <section className="relative bg-[#F0F9FD] px-0 py-5">
        <div className="flex min-h-[400px] w-full flex-col items-center justify-between gap-5 px-5 md:flex-row md:px-[66px]">
          {/* Left Section */}
          <div className="w-full flex-1 md:w-[45%] md:max-w-none">
            {currentIndex === 0 ? (
              <>
                <h1 className="mb-0 text-[30px] font-bold uppercase leading-[1.15] tracking-tight sm:text-[34px] md:text-[36px]">
                  <span className="text-[#3099D5]">FOR MOST DEMAND GEN</span><br />
                  <span className="text-[#3099D5]">AGENCIES, </span>
                  <span className="text-[#16243D]">DEMAND GENERATION</span><br />
                  <span className="text-[#16243D]">STOPS AT THE DOWNLOAD.</span>
                </h1>
              </>
            ) : (
              <>
                <h1 className="text-[30px] font-bold uppercase leading-[1.15] tracking-tight text-[#3099D5] sm:text-[34px] md:text-[36px]">
                  {slides[currentIndex].title1}
                </h1>
                <h2 className="mt-0 text-[30px] font-bold uppercase leading-[1.15] tracking-tight text-[#16243D] sm:text-[34px] md:text-[36px]">
                  {slides[currentIndex].title2}
                </h2>
              </>
            )}
            <p className="mt-2 text-[16px] font-normal leading-[1.6] text-black sm:text-[17px] md:text-[18px]">
              {slides[currentIndex].text}
            </p>

            {/* Email Subscription Form */}
            <form
              className="mt-4 flex w-full max-w-2xl flex-col gap-[10px] sm:flex-row"
              onSubmit={handleSubmit}
            >
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="min-w-0 flex-[1.5] rounded-[10px] border-0 bg-white px-[10px] py-[10px] text-[16px] text-[#333333] shadow-[0_4px_8px_rgba(128,128,128,0.4)] placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#3099D5] sm:min-w-[250px] md:w-[450px] md:flex-none"
              />

              <button
                type="submit"
                className="whitespace-nowrap rounded-[10px] bg-[#3099D5] px-5 py-[10px] text-[16px] font-medium text-white shadow-[0_4px_8px_rgba(128,128,128,0.4)] transition-colors hover:bg-[#16243D]"
              >
                Get Growth Insights
              </button>
            </form>

            <p className="mt-2 text-[16px] font-normal leading-[1.6] text-black sm:text-[17px] md:text-[18px]">
              Stay ahead with insights that help you drive measurable growth.
            </p>
          </div>

          {/* Right Section (Hero Illustration) */}
          <div className="flex w-full flex-1 items-center justify-center md:w-[45%] md:justify-end">
            <div className="relative h-[240px] w-full max-w-[420px] sm:h-[280px] md:h-[300px]">
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
        <div className="mt-2 flex justify-center space-x-1.5">
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
                href="/Services/b2b-lead-generation"
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
                href="/rdigs-enmagement-engine"
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
