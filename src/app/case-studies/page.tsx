"use client";

import Image from "next/image";

export default function CaseStudies() {

    const cards = [
        {
            img: "/case-studies/Case-Study-1 (1).png",
            title:
                "How RDIGS helped a unified communication platform provider Drive Growth with Multi-channel Marketing",
            pdf: "/pdfs/How RDIGS Communication Platform.pdf",
        },
        {
            img: "/case-studies/Case-Study-2.png",
            title: "UCASS Provider",
            pdf: "/pdfs/UCAAS Case Study V1_compressed.pdf",
        },
        {
            img: "/case-studies/Case-Study-3.png",
            title: "IT Cyber Security Client",
            pdf: "/pdfs/IT Cyber Security Client.pdf",
        },
        {
            img: "/case-studies/Case-Study-4.png",
            title: "Marketing Automation Client",
            pdf: "/pdfs/Marketing Automation Client.pdf",
        },
    ];

    return (
        <div className="container mx-auto py-3 relative px-12">
            <div className="flex flex-col md:flex-row items-center mb-5 px-10">
                {/* Left Side */}
                <div className="w-full md:w-1/2 text-center md:text-left mb-4 md:mb-0">
                    <h4 className="text-[#3099D5] text-[24px] font-semibold">Case Studies</h4>
                    <h1 className="mt-1 text-[40px] leading-[48px] font-bold text-[#212529]">
                        Read about how we helped other clients
                    </h1>
                    <div className="mt-3">
                        <p className="text-[#6c757d] text-[16px] leading-[24px]">
                            Tool and strategies modern teams need to help their companies grow.
                        </p>
                        <a
                            href="#"
                            className="inline-block mt-4 bg-[#3099D5] text-white rounded-full py-2 px-4 text-[16px] font-medium hover:bg-[#267bb0] transition-colors"
                        >
                            Read More
                        </a>
                    </div>
                </div>

                {/* Right Side Image */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <Image
                        src="/case-studies/Case-Study-image.png"
                        alt="Expertise Image"
                        width={500}
                        height={300}
                        className=" md:mx-0"
                    />
                </div>
            </div>

            {/* case studies */}

            <div className="container mx-auto my-8 px-4">
                {/* Heading */}
                <div className="text-center mx-auto pb-12 max-w-3xl">
                    <h4 className="text-[#3099D5] text-[24px] font-semibold">Explore Services</h4>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#212529] mt-2">
                        We Assist Partners To Win New Businesses & Fuel Revenue
                    </h1>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-6">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="bg-white border-0 shadow-md rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
                        >
                            <div className="flex items-center">
                                {/* Left Image with Zoom + Grayscale Hover */}
                                <div className="w-1/3 flex justify-center items-center overflow-hidden">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        width={300}
                                        height={300}
                                        className="rounded-l-lg w-[90%] h-full object-cover filter grayscale transition-all duration-500 hover:grayscale-0 hover:scale-105"
                                    />
                                </div>

                                {/* Right Content */}
                                <div className="w-2/3 p-4">
                                    <h4 className="text-lg font-semibold mb-3 text-[#212529]">
                                        {card.title}
                                    </h4>
                                    <a
                                        href={card.pdf}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-block border border-[#3099D5] text-[#3099D5] rounded-full px-4 py-2 text-sm font-medium hover:bg-[#3099D5] hover:text-white transition-colors duration-300"
                                    >
                                        Read More
                                    </a>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </div>

        // case studies

    );
}
