"use client";

import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa";
import { motion } from "framer-motion";

const teamMembers = [
  {
    name: "Roland D'Costa",
    role: "Chief Executive Officer",
    img: "/team/team1..jpeg",
    linkedin: "https://www.linkedin.com/in/rolanddcosta0734/",
    delay: 0.2,
  },
  {
    name: "Ajay Rawat",
    role: "Chief Operating Officer",
    img: "/team/team2.jpeg",
    linkedin: "https://www.linkedin.com/in/ajay-rawat-16896b206/",
    delay: 0.4,
  },
  {
    name: "William Mathurai",
    role: "Chief Revenue Officer",
    img: "/team/Will-1.png",
    linkedin: "https://www.linkedin.com/in/william-k-m-12189737/",
    delay: 0.6,
  },
  {
    name: "Neal Brooker",
    role: "Fractional Sales Director, EMEA",
    img: "/team/Nial-7.png",
    linkedin: "https://www.linkedin.com/in/brookerneal/",
    delay: 0.8,
  },
];

export default function TeamSection() {
  return (
    <div className="w-full pb-2 px-11">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mx-auto pb-2 max-w-[897px]"
      >
        <h1 className="mb-2 text-[#3099D5] text-[2.5rem] font-bold">
          Our Expertise, Your Advantage!
        </h1>
        <h4 className="font-dm font-medium text-[24px] leading-[29px] text-[#606060] mb-2">
          The Minds Behind The Momentum
        </h4>

      </motion.div>

      {/* Team Members */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: member.delay }}
            viewport={{ once: true }}
            className="shadow-lg rounded-lg overflow-hidden group"
          >
            {/* Image with subtle blur + scale on hover */}
            <div className="relative overflow-hidden">
              <Image
                src={member.img}
                alt={member.name}
                width={400}
                height={400}
                className="rounded-t-lg w-full h-auto object-cover transition-all duration-500 group-hover:scale-95 group-hover:blur-[2px]"
              />

              {/* Blur overlay coming from top */}
              <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"></div>

              {/* LinkedIn Icon (slides from below into bottom-right) */}
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-[-50px] right-3 opacity-0 group-hover:bottom-3 group-hover:opacity-100 transition-all duration-500 ease-out"
              >
                <div className="bg-[#3099D5] p-2 rounded-full text-white shadow-lg">
                  <FaLinkedinIn />
                </div>
              </a>
            </div>

            {/* Title Section */}
            <div className="p-3 text-white h-[90px] bg-[#3099D5] hover:bg-[#16243D] transition-colors duration-300">
              <h4 className="font-dm font-medium text-[24px] leading-[29px] text-white">
                {member.name}
              </h4>
              <p className="font-dm font-normal text-[16px] leading-[24px] text-white">
                {member.role}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  );
}
