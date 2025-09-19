'use client'

import FaqAccordion from '@/component/FaqAccordian/page'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { FaLinkedinIn } from 'react-icons/fa'

const timeline = [
    { year: '2016–2018', text: 'Our journey started in 2016 and since then we have been one of the' },
    { year: '2019–2021', text: 'Our journey started in 2016 and since then we have been one of the' },
    { year: '2022–2024', text: 'Our journey started in 2016 and since then we have been one of the' },
    { year: '2025', text: 'Our journey started in 2016 and since then we have been one of the' },
]

const cards = [
    {
        id: 1,
        title: 'Our Mission',
        image: '/about/Mission.png',
        text: 'Our goal is to help businesses grow by generating new B2B leads, nurturing existing ones, and driving ROI.',
    },
    {
        id: 2,
        title: 'Our Vision',
        image: '/about/Vision.png',
        text: 'Our goal is to help businesses grow by generating new B2B leads, nurturing existing ones, and driving ROI.',
    },
    {
        id: 3,
        title: 'Our Value',
        image: '/about/Value.png',
        text: 'Our goal is to help businesses grow by generating new B2B leads, nurturing existing ones, and driving ROI.',
    },
]

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
        name: "Sharad Salve",
        role: "Chief Service Delivery Office",
        img: "/team/sharad-salve.png",
        linkedin: "https://www.linkedin.com/in/sharad-salve-0058617b/",
        delay: 0.6,
    },
    {
        name: "William Mathurai",
        role: "Chief Revenue Officer",
        img: "/team/Will-1.png",
        linkedin: "https://www.linkedin.com/in/william-k-m-12189737/",
        delay: 0.10,
    },
    {
        name: "Neal Brooker",
        role: "Fractional Sales Director, EMEA",
        img: "/team/Nial-7.png",
        linkedin: "https://www.linkedin.com/in/brookerneal/",
        delay: 0.12,
    },
    {
        name: "Rachel Mendis",
        role: "HR Manager",
        img: "/team/team6.jpeg",
        linkedin: "https://www.linkedin.com/in/rachel-mendis-b846b5179/",
        delay: 0.14,
    },
    {
        name: "Sunil Markam",
        role: "Manager, Information Technology",
        img: "/team/Sunil (1).png",
        linkedin: "https://www.linkedin.com/in/rachel-mendis-b846b5179/",
        delay: 0.16,
    },
    {
        name: "Ajaykumar Agarwal",
        role: "Administrative Assistant",
        img: "/team/Ajay-w.png",
        linkedin: "https://www.linkedin.com/in/rachel-mendis-b846b5179/",
        delay: 0.18,
    },
];

const aboutFaqs = [
    {
      question: '1. High-Quality Leads',
      answer:
        'We supply our prospects with high-quality leads adapted to their unique requirements...',
    },
    {
      question: '2. Innovative Strategies',
      answer:
        'We employ cutting-edge techniques and technologies to ensure our clients stay ahead...',
    },
    {
      question: '3. Customized Solutions',
      answer:
        'We ensure that our prospects get the most bang for their buck by providing individualized services...',
    },
    {
      question: '4. Data-Driven Approach',
      answer:
        'We use a data-driven strategy to ensure that our methods are based on the most recent market trends...',
    },
  ]

export default function AboutUs() {
    return (
        <>
            <div className="container mx-auto py-5 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                    {/* Left container (About Us content) */}
                    <div className="flex flex-col justify-center px-6">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">About Us</h1>
                        <p className="text-gray-600 text-lg leading-relaxed">
                            RDIGS was founded by a group of individuals who all came from sales
                            and B2B lead generation backgrounds and brought 15+ years of
                            experience to the table. They noticed a significant gap in the
                            market and were determined to eliminate it. Despite being
                            technology-driven, the company values the importance of human
                            connection and ensures every client receives a personalized
                            experience. At RDIGS, we pride ourselves on our ability to bridge
                            the gap between technology and human interaction to provide
                            exceptional lead generation services.
                        </p>
                    </div>

                    {/* Right container (Image) */}
                    <div className="flex flex-col justify-center items-center">
                        <Image
                            src="/about/aboutus.png"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="w-full h-auto object-contain"
                        />
                    </div>

                </div>
            </div>

            {/* Beginning section */}
            <div className="container mx-auto py-2 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-0">

                    {/* Left container (Content) */}
                    <div className="flex flex-col justify-center">
                        <div className="px-6">
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Beginning</h1>
                            <p className="text-gray-600 text-lg leading-relaxed">
                                Our journey started in 2016 and since then we have been one of the
                                fastest-growing global providers of B2B lead and demand generation
                                company. Over the years, we have become pioneers in our industry.
                                We work closely with our clients to understand their unique needs
                                and deliver customized solutions that meet and exceed expectations.
                                We believe in adapting to new technologies and utilizing
                                data-driven insights to serve our clients better. Our team is backed
                                by technology that enables us to deliver results consistently. Our
                                services are supplied with a human touch to ensure our clients
                                receive individualized services tailored to their needs.
                            </p>
                        </div>
                    </div>

                    {/* Right container (Timeline) */}
                    <div className="flex flex-col justify-start ps-3 md:ps-8 mt-8 md:mt-0">
                        <div className="mt-8 px-6 space-y-4">
                            {timeline.map((item, index) => (
                                <div
                                    key={index}
                                    className="timeline-entry w-full"
                                >
                                    <span className="year-pill w-[120px] text-center inline-block bg-[#3099D5] text-white text-[14px] font-semibold px-5 py-2 rounded-sm text-sm">
                                        {item.year}
                                    </span>
                                    <p className="text-gray-600 text-lg leading-relaxed">
                                        {item.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </div>

            {/* Our mission, vision  */}
            <div className="container mx-auto py-4 px-4 mt-8">
                <div className="flex flex-wrap justify-center gap-6">
                    {cards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-lg p-6 text-center w-full sm:w-[300px] md:w-[350px] hover:shadow-lg transition-shadow duration-300"
                        >
                            <div className="flex justify-center mb-2">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    width={130}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <h5 className="text-[29px] text-700 text-black font-bold mb-2">{card.title}</h5>
                            <p className="text-gray-600 text-base leading-relaxed">{card.text}</p>
                        </div>
                    ))}
                </div>
            </div>

            {/* team section */}
            <div className="w-full mt-5 pb-5 mb-5 px-11">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center mx-auto pb-2 max-w-[897px]"
                >
                    <h1 className="mb-2 text-[#3099D5] text-[2.5rem] font-bold">
                        Our Team
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
                                    className="rounded-t-lg w-full h-auto object-cover transition-all duration-500 group-hover:scale-95 group-hover:blur-[1px]"
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
                                <h4 className="font-medium text-[24px] leading-[29px] text-white">
                                    {member.name}
                                </h4>
                                <p className="font-normal text-[16px] leading-[24px] text-white">
                                    {member.role}
                                </p>
                            </div>

                        </motion.div>
                    ))}
                </div>
            </div>

            <FaqAccordion
      title="Streamlined Leads and Magnifying Growth"
      faqs={aboutFaqs}
      description="We use a data-driven strategy to ensure that our methods are based on
          the most recent market trends and insights, giving our customers an
          advantage over their competitors."
    />
            
        </>
    )
}
