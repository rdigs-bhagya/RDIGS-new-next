'use client'

import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function ServicesPage() {
    const service = [
        {
            id: 'b2b-lead-generation',
            title: 'B2B Lead Generation',
            image: '/services/b2bleadgeneration.png',
            description: "Empower Your Sales Team and Drive Results with RDIGS’ Account-Based Marketing Services"
        },
        {
            id: 'b2b-advertising',
            title: 'B2B Advertising',
            image: '/services/B2B-Advertising (1).png',
            description: "Drive Sustainable Growth for Your Sales and Marketing Efforts with Data-Driven Strategies"
        },
        {
            id: 'b2b-sdr-as-a-service',
            title: 'B2B SDR as a Service',
            image: '/services/B2B-SDR-as-a-Service.png',
            description: "Unlock the Power of Precision Marketing with RDIGS’ Intent-Based Marketing Services"
        },
        {
            id: 'content-syndication',
            title: 'Content Syndication',
            image: '/services/Content-Syandication.png',
            description: "Now is the time to Propel Your B2B Growth & Boost Your Sales Performance with RDIGS Sales"
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
            className="bg-gray-50 py-8 px-4 mb-5"
        >
            <div className="max-w-3xl mx-auto text-center pb-8">
                <h4
                    className=" font-bold"
                    style={{ color: "#3099D5", fontSize: "24px" }}
                >
                    Our Services
                </h4>
                <h1 className="text-[56px] font-bold mb-2">We Provide Best Services</h1>
                <p className="text-gray-700  text-[16px]">
                    RDIGS is your strategic partner in driving unstoppable B2B growth with data-powered marketing and sales solutions. Our expertise in account-based marketing, intent-driven strategies, and precision sales development fuels high-quality lead generation and revenue acceleration. We craft intelligent, results-driven campaigns that amplify engagement, maximize conversions, and position your brand ahead of the competition. From content syndication to cutting-edge digital marketing, our unrivaled approach ensures sustainable success. Unlock new business opportunities and supercharge your sales with RDIGS—where innovation meets impact.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto mb-10">
                {service.map((item, index) => (
                    <motion.div
                        key={item.id}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2, duration: 0.6 }}
                        className="group bg-gray-100 rounded-xl overflow-hidden shadow-md transition-all duration-300 hover:bg-[#3099D5] hover:text-white flex flex-col"
                    >
                        <div className="relative w-full h-52 overflow-hidden rounded-t-xl">
                            <Image
                                src={item.image}
                                alt={item.title}
                                fill
                                className="object-contain bg-white transition-all duration-300"
                            />
                            <div className="absolute inset-0 bg-[#C9DEF4]/30 translate-y-[-100%] group-hover:translate-y-0 transition-transform duration-500 ease-in-out pointer-events-none" />
                        </div>

                        <div className="p-6 flex flex-1 flex-col justify-between">
                            <div>
                                <h3 className="text-[24px] font-semibold mb-3 group-hover:text-white transition-colors duration-200">
                                    {item.title}
                                </h3>
                                <p className="text-[16px] text-[#606060] group-hover:text-white text-sm mb-4 transition-colors duration-200">
                                    {item.description}
                                </p>
                            </div>
                            <Link href={`/services/${item.id}`}>
                                <span className="inline-block bg-[#3099D5] text-white group-hover:bg-white group-hover:text-[#3099D5] hover:bg-[#16243D] hover:text-white font-semibold text-sm px-5 py-2 rounded-full transition-all duration-200">
                                    Read More
                                </span>
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* news and updates  */}
            <div className="container-fluid py-3 px-6 md:px-10 bg-white mt-5">
                {/* Title Section */}
                <div className="text-center mx-auto max-w-4xl mb-8">
                    <h4 className="text-[#16243D] text-xl font-bold mb-2">
                        From Blog
                    </h4>
                    <h1 className="text-[40px] font-bold text-[#3099D5] leading-tight mb-2">
                        News And Updates
                    </h1>
                    <p className="text-[16px] text-gray-700 text-[#606060] ">
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
