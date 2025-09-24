"use client";

import Image from "next/image";
import Link from "next/link";

export default function BlogCard({ blog, showDescription = false }: { 
  blog: { id: number; title: string; image: string; description?: string }; 
  showDescription?: boolean 
}) {
  return (
    <div className="group bg-white shadow-md rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl">
      <div className="relative w-full h-[230px] overflow-hidden">
        <Image
          src={blog.image}
          alt={blog.title}
          fill
          className="object-cover transition duration-500 ease-in-out"
        />
        <span className="absolute bottom-3 right-3 bg-[#3099D5] text-white text-sm px-3 py-1 rounded-full font-medium shadow">
          Business
        </span>
      </div>

      <div className="p-5">
        <h3 className="text-xl font-semibold text-[#16243D] mb-2 transition-all duration-300 transform group-hover:-translate-y-1 opacity-100 group-hover:opacity-90">
          {blog.title}
        </h3>

        {/* Show description only if passed */}
        {showDescription && blog.description && (
          <p className="text-[#606060] mb-3">{blog.description}</p>
        )}

        <Link
          href={`/blog/${blog.id}`} // dynamic blog page
          className="text-[#16243D] text-base font-semibold hover:text-[#3099D5] inline-flex items-center gap-1 transition-colors duration-300"
        >
          Read More →
        </Link>
      </div>
    </div>
  );
}
