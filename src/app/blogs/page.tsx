"use client";

import Image from "next/image";
import Link from "next/link";

const blogs = [
    {
        id: 1,
        title: "A Guide to B2B Lead Qualification",
        image: "/blog/Blog 11.webp",
        category: "Business",
        description: "B2B lead qualification is the process of evaluating and determining the quality and suitability of potential B2B leads.",
    },
    {
        id: 2,
        title: "Data silos block B2B decisions",
        image: "/blog/Blog 12.webp",
        category: "Business",
        description: "Data silos have a profound impact on decision-making processes in B2B organizations.",
    },
    {
        id: 3,
        title: "B2B Journey & Touchpoints",
        image: "/blog/Blog 13.webp",
        category: "Business",
        description: "Journey orchestration maps personalized campaigns by analyzing consumer behavior across all channels.",
    },
    {
        id: 4,
        title: "How Data Analytics Can Improve Your Business In 2023",
        image: "/blog/Blog 11.webp",
        category: "Business",
        description: "Data analytics is key to business growth and is becoming increasingly vital for decision-making.",
    },
    {
        id: 5,
        title: "B2B Content Marketing In 2023: Strategy & Examples",
        image: "/blog/Blog 12.webp",
        category: "Business",
        description: "Content marketing is a strategy of creating and sharing valuable, relevant content to attract, retain an audience, and drive action.",
    },
    {
        id: 6,
        title: "Account Based Marketing for B2B SaaS Lead Generation",
        image: "/blog/Blog 13.webp",
        category: "Business",
        description: "Account-based marketing targets key B2B accounts with personalized content and aligned sales efforts.",
    },
];

export default function BlogsPage() {
    return (
        <div className="container mx-auto py-16 px-6 max-w-7xl">
            {/* Header */}
            <div className="text-center mx-auto max-w-3xl mb-12">
                <p className="text-[#3099D5] text-[18px] md:text-[20px] font-semibold mb-2">
                    From Blog
                </p>
                <h1 className="text-[38px] md:text-[50px] font-bold text-[#16243D] leading-tight mb-4">
                    News And Updates
                </h1>
                <p className="text-[15px] md:text-[16px] leading-relaxed text-gray-500">
                    Explore how B2B brands qualify the right leads, break down data silos, and create seamless customer journeys.From lead generation to conversion, get insights that drive smarter decisions. Learn how touchpoints and personalization impact engagement. Fuel growth with content syndication, advertising, and data-driven strategies.
                </p>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {blogs.map((blog, index) => (
                    <div
                        key={blog.id}
                        className="group bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2.5 flex flex-col cursor-pointer wow fadeInUp"
                        data-wow-delay={`${(index % 3) * 0.2 + 0.1}s`}
                    >
                        {/* Image Container with Top-to-Bottom Color Slide Overlay */}
                        <div className="relative w-full h-[220px] md:h-[240px] overflow-hidden">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                fill
                                className="object-cover"
                            />
                            {/* Blue overlay sliding from top to bottom on hover */}
                            <div className="absolute top-0 left-0 w-full h-0 bg-[#3099D5]/35 group-hover:h-full transition-all duration-500 ease-in-out pointer-events-none z-10" />

                            <span className="absolute bottom-0 right-0 bg-[#3099D5] text-white text-[13px] font-semibold px-5 py-1.5 rounded-tl-lg shadow-sm z-20">
                                {blog.category}
                            </span>
                        </div>

                        {/* Content Container */}
                        <div className="p-6 md:p-7 flex flex-col flex-grow">
                            <h3 className="text-[#16243D] text-[20px] md:text-[22px] font-bold leading-snug mb-3 group-hover:text-[#3099D5] transition-colors duration-300">
                                {blog.title}
                            </h3>

                            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow">
                                {blog.description}
                            </p>

                            <div>
                                <Link
                                    href={`/blogs`}
                                    className="text-[#16243D] font-bold text-[15px] group-hover:text-[#3099D5] transition-colors duration-300 inline-flex items-center gap-1.5"
                                >
                                    Read More <span className="text-lg">➔</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
