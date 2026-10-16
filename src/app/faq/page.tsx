"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
    {
        question: "What happens during Freshers' Week?",
        answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
        question: "What is the transfer application process?",
        answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
    {
        question: "Why should I attend community college?",
        answer: "Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to corporate strategy foster collaborative thinking to further the overall value proposition. Organically grow the holistic world view of disruptive innovation via workplace diversity and empowerment.",
    },
];

export default function FaqPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <main className="bg-[#f8f9fa] py-12 md:py-16">
            <div className="mx-auto max-w-[1200px] px-6">
                <div className="grid items-center gap-10 xl:grid-cols-2 xl:gap-14">
                    <section aria-labelledby="faq-title">
                        <div className="mb-7">
                            <p className="mb-2 text-[18px] font-semibold text-[#3099D5]">Some Important FAQ&apos;s</p>
                            <h1 id="faq-title" className="text-[34px] font-bold leading-tight text-[#16243D] md:text-[44px]">
                                Common Frequently Asked Questions
                            </h1>
                        </div>
                        <div className="space-y-3">
                            {faqs.map((faq, index) => {
                                const isOpen = openIndex === index;
                                const answerId = `faq-answer-${index}`;

                                return (
                                    <article key={faq.question} className="overflow-hidden rounded-md border border-gray-200 bg-white shadow-sm">
                                        <h2>
                                            <button
                                                type="button"
                                                aria-expanded={isOpen}
                                                aria-controls={answerId}
                                                onClick={() => setOpenIndex(isOpen ? null : index)}
                                                className={`flex w-full items-center justify-between gap-4 px-5 py-4 text-left text-[16px] font-semibold transition-colors md:text-[17px] ${isOpen ? "bg-[#e6effa] text-[#3099D5]" : "bg-white text-[#16243D] hover:bg-[#e6effa] hover:text-[#3099D5]"}`}
                                            >
                                                <span>Q: {faq.question}</span>
                                                <span aria-hidden="true" className="text-[22px] leading-none">{isOpen ? "−" : "+"}</span>
                                            </button>
                                        </h2>
                                        {isOpen && (
                                            <div id={answerId} className="px-5 py-4 text-[15px] leading-relaxed text-[#425466]">
                                                <strong className="text-[#16243D]">A: </strong>{faq.answer}
                                            </div>
                                        )}
                                    </article>
                                );
                            })}
                        </div>
                    </section>
                    <div className="flex justify-center xl:justify-end">
                        <Image
                            src="/images/carousel-2.png"
                            alt="Demand generation journey from awareness to action"
                            width={700}
                            height={520}
                            className="h-auto w-full max-w-[560px] rounded-xl object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </main>
    );
}
