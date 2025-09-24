"use client";

import BlogCard from "@/component/BlogSection/page";

const blogs = [
    {
        id: 1,
        title: "A Guide to B2B Lead Qualification",
        image: "/blog/Blog 11.webp",
        description: "B2B lead qualification is the process of evaluating and determining the quality and suitability of potential B2B leads.",
    },
    {
        id: 2,
        title: "Data silos block B2B decisions",
        image: "/blog/Blog 12.webp",
        description: "Data silos have a profound impact on decision-making processes in B2B organizations.",
    },
    {
        id: 3,
        title: "B2B Journey & Touchpoints",
        image: "/blog/Blog 13.webp",
        description: "Journey orchestration maps personalized campaigns by analyzing consumer behavior across all channels.",
    },
    {
        id: 4,
        title: "How Data Analytics Can Improve Your Business In 2023",
        image: "/blog/Blog 11.webp",
        description: "Data analytics is key to business growth and is becoming increasingly vital for decision-making.",
    },
    {
        id: 5,
        title: "B2B Content Marketing In 2023: Strategy & Examples",
        image: "/blog/Blog 12.webp",
        description: "Content marketing is a strategy of creating and sharing valuable, relevant content to attract, retain an audience, and drive action.",
    },
    {
        id: 6,
        title: "Account Based Marketing for B2B SaaS Lead Generation",
        image: "/blog/Blog 13.webp",
        description: "Account-based marketing targets key B2B accounts with personalized content and aligned sales efforts.",
    },
];

export default function BlogsPage() {
    return (
        <div className="container mx-auto py-10 px-6">
            <div className="text-center mx-auto max-w-4xl mb-4">
                <h4 className="text-[#16243D] text-xl font-bold mb-2">Blogs</h4>
                <h1 className="text-[40px] font-bold text-[#3099D5] leading-tight mb-2">
                    Our Market Insights, Your Competitive Edge!
                </h1>
                <p className="text-[16px] leading-[29px] text-[#606060] mb-1">
                    Explore how B2B brands qualify the right leads, break down data silos, and create seamless customer journeys.From lead generation to conversion, get insights that drive smarter decisions. Learn how touchpoints and personalization impact engagement. Fuel growth with content syndication, advertising, and data-driven strategies..
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {blogs.map((blog) => (
                    <BlogCard key={blog.id} blog={blog} showDescription />
                ))}
            </div>
        </div>
    );
}
