'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServicesPage() {
    const service = [
        {
            id: 'demand-amplifier',
            title: 'Demand Amplifier',
            image: '/services/abm.jpg',
            description: "Demand Generation That Actually Converts—Not Just Fills Your CRM"
        },
        {
            id: 'account-based-marketing',
            title: 'ABM Services',
            image: '/services/dmeand.jpg',
            description: "Focus on the Whole Buying Committee"
        },
        {
            id: 'problem-aware-lead-generation',
            title: 'Problem Aware Lead Generation',
            image: '/services/problem-aware-lead-gen.jpg',
            description: "Get Into Deals Before Your Competitors Show Up"
        },
        {
            id: 'data-verification',
            title: 'Data Verification',
            image: '/services/data-varification.jpg',
            description: "Is Your Data Helping You Sell or Holding You Back?"
        }
    ]

    const blogs = [
        {
            id: 1,
            title: "A Guide to B2B Lead Qualification",
            image: "/blog/Blog 11.webp",
        },
        {
            id: 2,
            title: "Data silos block B2B decisions",
            image: "/blog/Blog 12.webp",
        },
        {
            id: 3,
            title: "B2B Journey & Touchpoints",
            image: "/blog/Blog 13.webp",
        },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}   // start from below
            animate={{ opacity: 1, y: 0 }}     // move to normal position
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-white px-4 pb-10"
        >
            <div className="max-w-4xl mx-auto text-center pt-16 pb-12">
                <h4
                    className="font-medium mb-2"
                    style={{ color: "#3099D5", fontSize: "18px" }}
                >
                    Our Services
                </h4>
                <h1 className="text-[40px] md:text-[48px] font-bold text-[#16243D] mb-4">We Provide Best Services</h1>
                <p className="text-gray-600 text-[15px] leading-relaxed">
                    RDIGS is your strategic partner in driving unstoppable B2B growth with data-powered marketing and sales solutions. Our expertise in account-based marketing, intent-driven strategies, and precision sales development fuels high-quality lead generation and revenue acceleration. We craft intelligent, results-driven campaigns that amplify engagement, maximize conversions, and position your brand ahead of the competition. From content syndication to cutting-edge digital marketing, our unrivaled approach ensures sustainable success. Unlock new business opportunities and supercharge your sales with RDIGS—where innovation meets impact.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
                {service.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="bg-[#F4F4F4] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col border border-gray-100"
                    >
                        <div className="w-full overflow-hidden rounded-t-2xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                width={500}
                                height={300}
                                className="w-full h-auto object-contain"
                            />
                        </div>

                        <div className="p-8 flex flex-col flex-1">
                            <h3 className="text-[22px] font-semibold mb-3 text-[#3099D5]">
                                {item.title}
                            </h3>
                            <p className="text-[15px] text-gray-600 mb-8 flex-1">
                                {item.description}
                            </p>

                            <Link href={`/Services/${item.id}`} className="mt-auto">
                                <span className="inline-flex items-center justify-between gap-3 bg-[#3099D5] text-white font-medium text-sm pl-5 pr-1 py-1 rounded-full hover:bg-[#2582B7] transition-colors duration-200 w-36">
                                    Read More
                                    <span className="bg-white rounded-full w-8 h-8 flex items-center justify-center shadow-sm">
                                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#3099D5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="7" y1="17" x2="17" y2="7"></line>
                                            <polyline points="7 7 17 7 17 17"></polyline>
                                        </svg>
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* news and updates  */}
            <div className="container-fluid py-16 px-6 md:px-10">
                {/* Title Section */}
                <div className="text-center mx-auto max-w-4xl mb-12">
                    <h4 className="text-[#3099D5] text-lg font-medium mb-2">
                        From Blog
                    </h4>
                    <h1 className="text-[40px] font-bold text-[#16243D] leading-tight mb-4">
                        News And Updates
                    </h1>
                    <p className="text-[15px] text-gray-600 leading-relaxed">
                        Explore how B2B brands qualify the right leads, break down data silos, and create seamless customer journeys. From lead generation to conversion, get insights that drive smarter decisions. Learn how touchpoints and personalization impact engagement. Fuel growth with content syndication, advertising, and data-driven strategies.
                    </p>
                </div>

                {/* Blog Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="group bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl"
                        >
                            <div className="relative w-full h-[230px] overflow-hidden">

                                {/* Image zoom on hover */}
                                <Image
                                    src={blog.image}
                                    alt={blog.title}
                                    fill
                                    className="object-cover transition duration-500 ease-in-out"
                                />

                                {/* Category badge */}
                                <span className="absolute bottom-3 right-3 bg-[#3099D5] text-white text-sm px-3 py-1 rounded-full font-medium shadow">
                                    Business
                                </span>
                            </div>

                            <div className="p-5">
                                {/* Title slide up + fade effect on hover */}
                                <h3 className="text-xl font-semibold text-[#16243D] mb-2 transition-all duration-300 transform group-hover:-translate-y-1 opacity-100 group-hover:opacity-90">
                                    {blog.title}
                                </h3>
                                <Link
                                    href="#"
                                    className="text-[#16243D] text-base font-semibold hover:text-[#3099D5] inline-flex items-center gap-1 transition-colors duration-300"
                                >
                                    Read More →
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View All Button */}
                <div className="text-center mt-10">
                    <Link
                        href="/blog"
                        className="inline-block bg-[#3099D5] text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-[#267CB0] transition-colors duration-300"
                    >
                        View All Blogs
                    </Link>
                </div>
            </div>
        </motion.div>
    )
}
