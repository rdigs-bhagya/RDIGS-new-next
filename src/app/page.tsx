'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import TestimonialCarousel from '@/component/TestimonialCarousel/page';
import TeamSection from '@/component/Teamsection/page';
import MediaDeckSection from '@/component/MediaDeckSection/page';
import BlogCard from '@/component/BlogSection/page';

type Slide = {
  title1: string;
  title2: string;
  text: string;
  img: string;
};

export default function HomepageCarousel() {
  const slides: Slide[] = [
    {
      title1: 'OWN THE',
      title2: 'BUYER JOURNEY.',
      text: 'Leverage Advanced Insights, Personalized ABM, And Precision Targeting To Reach Decision-Makers.',
      img: '/home/own.png',
    },
    {
      title1: 'DRIVE MORE',
      title2: 'SALES FASTER.',
      text: 'Fuel your B2B marketing engine with data-driven strategies that  capture attention, spark conversations, and convert intent into revenue.',
      img: '/home/ingnite.png',
    },
    {
      title1: 'POWER YOUR',
      title2: 'GROWTH STRATEGY.',
      text: 'Turn insights into impactful actions.',
      img: '/home/ROI.png',
    },
  ];

  const logos = [
    '/client-logo/Goto.png',
    '/client-logo/KnowBe4.png',
    '/client-logo/NETSUITE.png',
    '/client-logo/OZONETEL.png',
    '/client-logo/Ring Central.png',
    '/client-logo/Spectrum VoIP.png',
    '/client-logo/Wheelhouse.png',
    '/client-logo/X-Taas.png',
    '/client-logo/Panterra.png',
    '/client-logo/Inside.png',
  ];

  const blogs = [
    { id: 1, title: "A Guide to B2B Lead Qualification", image: "/blog/Blog 11.webp" },
    { id: 2, title: "Data silos block B2B decisions", image: "/blog/Blog 12.webp" },
    { id: 3, title: "B2B Journey & Touchpoints", image: "/blog/Blog 13.webp" },
    { id: 4, title: "Extra Blog Example", image: "/blog/Blog 14.webp" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentIndex((prev) => (prev + 1) % slides.length),
      3000
    );
    return () => clearInterval(interval);
  }, [slides.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // handle form logic here
  };

  return (
    <>
      <section className="relative bg-[#F0F9FD] py-11 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center ml-5 mr-1">

          {/* Left Section */}
          <div className="flex-1">
            <h1 className="text-4xl font-bold text-sky-600">{slides[currentIndex].title1}</h1>
            <h2 className="text-4xl font-extrabold text-gray-900">{slides[currentIndex].title2}</h2>
            <p className="mt-4 text-lg text-black-400 max-w-[450px]">{slides[currentIndex].text}</p>

            {/* Static Form */}
            <form className="mt-5 flex gap-2" onSubmit={handleSubmit}>
              <input
                type="email"
                placeholder="Enter Your Email"
                required
                className="border-gray-300 rounded-[6px] px-3 py-2 flex-1  bg-[#FFFFFF] focus:outline-none focus:ring-2 focus:ring-sky-500"
                style={{ boxShadow: '0 4px 8px rgba(128, 128, 128, 0.4)' }}
              />
              <button
                type="submit"
                className="bg-sky-500 hover:bg-sky-600 shadow-md text-white px-4 py-2 rounded transition-colors"
              >
                Email Now
              </button>
            </form>

            <p className="mt-3 text-lg text-black-400">
              Let&apos;s redefine your growth journey.
            </p>
          </div>

          {/* Right Section (Image) */}
          <div className="flex-1 flex justify-center">
            <Image
              src={slides[currentIndex].img}
              alt={slides[currentIndex].title2}
              width={400}
              height={300}
              className="rounded-lg object-cover"
              priority
            />
          </div>
        </div>

        {/* Carousel Dots centered below */}
        <div className="flex justify-center mt-6 space-x-2">
          {slides.map((_, index) => (
            <span
              key={index}
              className={`h-3 w-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-sky-500' : 'bg-gray-300'
                }`}
            ></span>
          ))}
        </div>
      </section>
      <div className="container mx-auto pt-3">
        {/* Heading */}
        <div className="text-center mx-auto max-w-[900px] mb-2">
          <h4 className="text-[24px] text-[#5F5F5F] font-bold mt-4">
            Trusted By Leading Global Brands & Consistently Exceeding Expectations
          </h4>
        </div>

        {/* Scrolling Logos */}
        <div className="overflow-hidden relative my-4">
          {/* Fade overlays */}
          <div className="pointer-events-none absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>

          <div
            className="flex whitespace-nowrap px-8" // added px for space inside
            style={{ animation: 'scroll 25s linear infinite', marginBottom: '20px' }}
          >
            {logos.concat(logos).map((src, i) => (
              <div key={i} className="mx-6 flex-shrink-0">
                <Image
                  src={src}
                  alt={`Client Logo ${i + 1}`}
                  width={150}
                  height={80}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Inline Keyframes */}
        <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
      </div>

      {/* service card started */}
      <div
        className="w-full py-12 px-11"
        style={{ backgroundColor: "#F2F5F9" }}
      >
        {/* Heading */}
        <div className="text-center mx-auto pb-2" style={{ maxWidth: "1125px" }}>
          <h1
            className="mb-2 font-bold"
            style={{ color: "#3099D5", fontSize: "2.5rem" }}
          >
            Your Growth, Our Mission!
          </h1>
          <h4 className="text-[24px] text-[#606060] font-medium">
            Empowering B2B Brands To Create Demand, Capture Opportunities, And
            Convert Pipeline
          </h4>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
          {/* Service 1 */}
          <div className="group cursor-pointer p-3 pt-0 bg-white rounded-lg shadow-sm text-center transition hover:shadow-lg active:scale-[0.98]">
            <div className="p-4 mb-2 flex justify-center overflow-hidden">
              <Image
                src="/homepage-service-images/B2B-Lead-Generation.png"
                alt="B2B Lead Generation"
                width={75}
                height={75}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="mb-2 font-medium text-[24px] text-[#606060]">
              B2B Lead Generation
            </h4>
            <p className="mb-2 text-gray-400 text-base font-normal transition-colors group-hover:text-black group-active:text-black">
              Empower Your Sales Team and Drive Results with Us Account-Based
              marketing services
            </p>
            <Link
              href="/b2bservice"
              className="inline-block bg-[#3099D5] text-white font-medium rounded-full py-2 px-6 hover:bg-[#16243D] transition"
            >
              Learn More
            </Link>
          </div>

          {/* Service 2 */}
          <div className="group cursor-pointer p-3 pt-0 bg-white rounded-lg shadow-sm text-center transition hover:shadow-lg active:scale-[0.98]">
            <div className="p-4 mb-2 flex justify-center overflow-hidden">
              <Image
                src="/homepage-service-images/B2B-Advertising (2).png"
                alt="B2B Advertising"
                width={75}
                height={75}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="mb-2 font-medium text-[24px] text-[#606060]">
              B2B Advertising
            </h4>
            <p className="mb-2 text-gray-400 text-base font-normal transition-colors group-hover:text-black group-active:text-black">
              Drive Sustainable Growth for Your Sales and Marketing Efforts with
              Data-Driven Strategies
            </p>
            <Link
              href="/b2badvertising"
              className="inline-block bg-[#3099D5] text-white font-medium rounded-full py-2 px-6 hover:bg-[#16243D] transition"
            >
              Learn More
            </Link>
          </div>

          {/* Service 3 */}
          <div className="group cursor-pointer p-3 pt-0 bg-white rounded-lg shadow-sm text-center transition hover:shadow-lg active:scale-[0.98]">
            <div className="p-4 mb-2 flex justify-center overflow-hidden">
              <Image
                src="/homepage-service-images/B2B-SDR-as-a-Service (1).png"
                alt="B2B SDR as a Service"
                width={75}
                height={75}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="mb-2 font-medium text-[24px] text-[#606060]">
              B2B SDR as a Service
            </h4>
            <p className="mb-2 text-gray-400 text-base font-normal transition-colors group-hover:text-black group-active:text-black">
              Unlock the Power of Precision Marketing with RDIGS’ Intent-Based
              Marketing Services
            </p>
            <Link
              href="/b2bsdrasaservice"
              className="inline-block bg-[#3099D5] text-white font-medium rounded-full py-2 px-6 hover:bg-[#16243D] transition"
            >
              Learn More
            </Link>
          </div>

          {/* Service 4 */}
          <div className="group cursor-pointer p-3 pt-0 bg-white rounded-lg shadow-sm text-center transition hover:shadow-lg active:scale-[0.98]">
            <div className="p-4 mb-2 flex justify-center overflow-hidden">
              <Image
                src="/homepage-service-images/Content-Syndication.png"
                alt="Content Syndication"
                width={75}
                height={75}
                className="object-contain transition-transform duration-500 group-hover:scale-110"
              />
            </div>
            <h4 className="mb-2 font-medium text-[24px] text-[#606060]">
              Content Syndication
            </h4>
            <p className="mb-2 text-gray-400 text-base font-normal transition-colors group-hover:text-black group-active:text-black">
              Now is the time to Propel Your B2B Growth & Boost Your Sales
              Performance with RDIGS Sales
            </p>
            <Link
              href="/contentsyndication"
              className="inline-block bg-[#3099D5] text-white font-medium rounded-full py-2 px-6 hover:bg-[#16243D] transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        {/* Button Below the Services */}
        <div className="text-center mt-6">
          <Link
            href="/service"
            className="inline-block bg-[#3099D5] text-white font-medium rounded-full py-2 px-6 hover:bg-[#16243D] transition"
          >
            View All Services
          </Link>
        </div>
      </div>

      {/* about page */}
      <div
        className="w-full pb-12"
        style={{ paddingLeft: "2.75rem", paddingRight: "2.75rem", backgroundColor: "#F2F5F9" }}
      >
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Left Content */}
          <div className="bg-white rounded p-4  h-[488px]">
            <h1
              className="mb-2 font-bold"
              style={{ color: "#3099D5", fontSize: "2.5rem" }}
            >
              Our Purpose, Your Progress!
            </h1>
            <h4
              className="mb-3"
              style={{ color: "#606060", fontWeight: 500, fontSize: "24px", lineHeight: "29px" }}
            >
              Learn What Fuels Our Passion for B2B Marketing
            </h4>
            <p className="mb-2 text-[#16243D]">
              RDIGS was founded by a team of experienced professionals, each with over 15 years in sales
              and B2B lead generation. Recognizing a key gap in the market, they set out with a mission to
              address it head-on. While driven by technology, RDIGS values the human touch, ensuring each
              client benefits from a personalized experience.
            </p>
            <p className="mb-1 text-[#212529] flex items-center">
              <FontAwesomeIcon icon={faCheck} className="text-[#3099D5] mr-2" />
              Technological Innovation
            </p>
            <p className="mb-1 text-[#212529] flex items-center">
              <FontAwesomeIcon icon={faCheck} className="text-[#3099D5] mr-2" />
              Human Connection
            </p>
            <p className="mb-1 text-[#212529] flex items-center">
              <FontAwesomeIcon icon={faCheck} className="text-[#3099D5] mr-2" />
              Personalized Experience
            </p>
            <p className="mb-3 text-[#212529] flex items-center">
              <FontAwesomeIcon icon={faCheck} className="text-[#3099D5] mr-2" />
              Exceptional Service
            </p>
            <a
              href="about1.php"
              className="inline-block bg-[#3099D5] text-white rounded-full py-2 px-4 hover:bg-[#16243D] transition"
            >
              Know More…
            </a>
          </div>

          {/* Right Counters */}
          <div className="bg-white rounded p-4 h-[488px]">
            <div className="grid grid-cols-2 gap-3 justify-items-center">
              {/* About Image */}
              <div className="col-span-2 mb-3 text-center">
                <Image
                  src="/home/About-US.png"
                  alt="About RDIGS"
                  width={400}
                  height={400}
                  className="object-contain"
                />
              </div>

              {/* Counter 1 */}
              <div className="bg-[#f8f9fa] rounded p-2 h-full text-center">
                <div className="flex justify-center items-baseline space-x-1">
                  <span className="text-[#3099D5] text-2xl font-bold">
                    <CountUp start={0} end={31} duration={2.5} />
                  </span>
                  <span className="font-bold text-[#3099D5]" style={{ fontSize: "31px" }}>k+</span>
                </div>
                <h4 className="mb-0 text-[#212529]">Campaigns Executed</h4>
              </div>

              {/* Counter 2 */}
              <div className="bg-[#f8f9fa] rounded p-2 h-full text-center">
                <div className="flex justify-center items-baseline space-x-1">
                  <span className="text-[#3099D5] text-2xl font-bold">
                    <CountUp start={0} end={50} duration={2.5} />
                  </span>
                  <span className="font-bold text-[#3099D5]" style={{ fontSize: "31px" }}>+</span>
                </div>
                <h4 className="mb-0 text-[#212529]">Years Combined Experience</h4>
              </div>

              {/* Counter 3 */}
              <div className="bg-[#f8f9fa] rounded p-2 h-full text-center">
                <div className="flex justify-center items-baseline space-x-1">
                  <span className="text-[#3099D5] text-2xl font-bold">
                    <CountUp start={0} end={100} duration={2.5} />
                  </span>
                  <span className="font-bold text-[#3099D5]" style={{ fontSize: "31px" }}>+</span>
                </div>
                <h4 className="mb-0 text-[#212529]">Demand Gen Professionals</h4>
              </div>

              {/* Counter 4 */}
              <div className="bg-[#f8f9fa] rounded p-2 h-full text-center">
                <div className="flex justify-center items-baseline space-x-1">
                  <span className="text-[#3099D5] text-2xl font-bold">
                    <CountUp start={0} end={4.7} decimals={1} duration={2.5} />
                  </span>
                  <span className="font-bold text-[#3099D5]" style={{ fontSize: "31px" }}>m+</span>
                </div>
                <h4 className="mb-0 text-[#212529]">Leads Delivered</h4>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TestimonialCarousel />
      <TeamSection />
      <div className="container-fluid py-3 px-6 md:px-10 bg-white">
        <div className="text-center mx-auto max-w-4xl mb-4">
          <h4 className="text-[#16243D] text-xl font-bold mb-2">Blogs & Articles</h4>
          <h1 className="text-[40px] font-bold text-[#3099D5] leading-tight mb-2">
            Our Market Insights, Your Competitive Edge!
          </h1>
          <p className="font-medium text-[24px] leading-[29px] text-[#606060] mb-1">
            Explore Expert Perspectives and Insights That Fuel B2B Demand Generation and Marketing Growth.
          </p>
        </div>

        {/* Show only 3 blogs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {blogs.slice(0, 3).map((blog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>

        <div className="text-center mt-10">
          <a
            href="/blog"
            className="inline-block bg-[#3099D5] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#267CB0] transition-colors duration-300"
          >
            View All Blogs
          </a>
        </div>
      </div>
      <MediaDeckSection />



    </>

  );
}
