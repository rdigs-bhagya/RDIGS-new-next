"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type ManagedCaseStudy = {
    id: string;
    title: string;
    imageUrl?: string;
    hasPdf: boolean;
};

const apiBaseUrl = (
    process.env.NEXT_PUBLIC_API_URL ||
    "https://0cecifp2q1.execute-api.us-east-1.amazonaws.com"
).replace(/\/$/, "");

export default function CaseStudies() {
    const [managedCaseStudies, setManagedCaseStudies] = useState<ManagedCaseStudy[]>([]);
    const [caseStudyError, setCaseStudyError] = useState("");

    useEffect(() => {
        const controller = new AbortController();

        async function loadCaseStudies() {
            try {
                const response = await fetch(`${apiBaseUrl}/casestudies`, {
                    signal: controller.signal,
                    cache: "no-store",
                });
                if (!response.ok) {
                    throw new Error(`Unable to load published case studies (${response.status}).`);
                }

                const result = await response.json() as { items?: ManagedCaseStudy[] };
                if (!Array.isArray(result.items)) {
                    throw new Error("The case-study response was invalid.");
                }
                setManagedCaseStudies(result.items);
                setCaseStudyError("");
            } catch (error) {
                if (controller.signal.aborted) return;
                setCaseStudyError(error instanceof Error ? error.message : "Unable to load published case studies.");
            }
        }

        void loadCaseStudies();
        return () => controller.abort();
    }, []);

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
                {caseStudyError && (
                    <p role="alert" className="mx-6 mb-6 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-700">
                        {caseStudyError}
                    </p>
                )}
                {managedCaseStudies.length > 0 && (
                    <section aria-labelledby="published-case-studies-title" className="mb-12">
                        <div className="text-center mx-auto pb-8 max-w-3xl">
                            <h2 id="published-case-studies-title" className="text-3xl font-bold text-[#212529]">
                                Latest Case Studies
                            </h2>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6">
                            {managedCaseStudies.map((caseStudy) => (
                                <article
                                    key={caseStudy.id}
                                    className="flex min-h-52 items-center overflow-hidden rounded-xl border border-gray-100 bg-white shadow-md"
                                >
                                    {caseStudy.imageUrl ? (
                                        <div className="flex w-1/3 shrink-0 justify-center p-3">
                                            <Image
                                                src={caseStudy.imageUrl}
                                                alt={caseStudy.title}
                                                width={400}
                                                height={240}
                                                unoptimized
                                                className="max-h-48 w-full rounded-lg object-cover"
                                            />
                                        </div>
                                    ) : (
                                        <div aria-hidden="true" className="h-40 w-1/3 shrink-0 bg-sky-50" />
                                    )}
                                    <div className="flex-1 p-4">
                                        <h3 className="mb-3 text-xl font-semibold text-[#212529]">
                                            {caseStudy.title}
                                        </h3>
                                        {caseStudy.hasPdf && (
                                            <span className="inline-flex rounded-full bg-sky-50 px-3 py-1 text-sm font-medium text-[#3099D5]">
                                                PDF available
                                            </span>
                                        )}
                                    </div>
                                </article>
                            ))}
                        </div>
                    </section>
                )}

                {/* Heading */}
                <div className="text-center mx-auto pb-12 max-w-3xl">
                    <h4 className="text-[#3099D5] text-[24px] font-semibold">Explore Services</h4>
                    <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#212529] mt-2">
                        We Assist Partners To Win New Businesses & Fuel Revenue
                    </h1>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-6 p-4">
                    {cards.map((card, i) => (
                        <div
                            key={i}
                            className="group bg-white border border-gray-100 shadow-md rounded-xl overflow-hidden transition-all duration-300 transform hover:-translate-y-2.5 hover:shadow-2xl cursor-pointer"
                        >
                            <div className="flex items-center">
                                {/* Left Image with Grayscale to Color on Card Hover */}
                                <div className="w-1/3 flex justify-center items-center overflow-hidden p-3">
                                    <Image
                                        src={card.img}
                                        alt={card.title}
                                        width={300}
                                        height={300}
                                        className="rounded-lg w-[90%] h-full object-cover filter grayscale transition-all duration-500 ease-out group-hover:grayscale-0"
                                    />
                                </div>

                                {/* Right Content */}
                                <div className="w-2/3 p-4">
                                    <h4 className="text-[500] text-[24px] text-leading-[29px] font-semibold mb-3 text-[#212529] group-hover:text-[#3099D5] transition-colors duration-300">
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
