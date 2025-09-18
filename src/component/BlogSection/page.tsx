"use client";

import Image from "next/image";
import Link from "next/link";

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

export default function BlogSection() {
  return (
    <div className="container-fluid py-3 px-6 md:px-10 bg-white">
      {/* Title Section */}
      <div className="text-center mx-auto max-w-4xl mb-4">
        <h4 className="text-[#16243D] text-xl font-bold mb-2">
          Blogs & Articles
        </h4>
        <h1 className="text-[40px] font-bold text-[#3099D5] leading-tight mb-2">
          Our Market Insights, Your Competitive Edge!
        </h1>
        <p className="font-medium text-[24px] leading-[29px] text-[#606060] mb-1">
          Explore Expert Perspectives and Insights That Fuel B2B Demand
          Generation and Marketing Growth.
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
  );
}
