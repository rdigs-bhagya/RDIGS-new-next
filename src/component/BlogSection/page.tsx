"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog, showDescription = false, delay = "0.1s" }: { 
  blog: { id: number; title: string; image: string; description?: string; category?: string }; 
  showDescription?: boolean;
  delay?: string;
}) {
  return (
    <div
      className="group bg-white rounded-[20px] overflow-hidden border border-gray-100 shadow-[0_4px_25px_rgba(0,0,0,0.04)] hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2.5 flex flex-col cursor-pointer wow fadeInUp"
      data-wow-delay={delay}
    >
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
          {blog.category || "Business"}
        </span>
      </div>

      <div className="p-6 md:p-7 flex flex-col flex-grow">
        <h3 className="text-[#16243D] text-[20px] md:text-[22px] font-bold leading-snug mb-3 group-hover:text-[#3099D5] transition-colors duration-300">
          {blog.title}
        </h3>

        {/* Show description only if passed */}
        {showDescription && blog.description && (
          <p className="text-gray-500 text-[15px] leading-relaxed mb-6 flex-grow">{blog.description}</p>
        )}

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
  );
}
