'use client'

import { useState } from 'react'

interface FaqItem {
    question: string
    answer: string
}

interface FaqAccordionProps {
    title: string
    faqs: FaqItem[]
    description?: string
}

export default function FaqAccordion({
    title,
    faqs,
    description,
}: FaqAccordionProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0)

    return (
        <div className="py-10">
            <div className="max-w-4xl mx-auto text-center px-4">
                {/* Section Title */}
                <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                    {title}
                </h1>

                {/* Accordion */}
                <div className="text-left space-y-3">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="border rounded-md shadow-sm overflow-hidden"
                        >
                            <button
                                className={`w-full text-left px-4 py-3 font-medium transition-colors bg-[#E6EFFA] ${openIndex === index ? 'text-[#3099D5]' : 'text-[#787878]'} hover:text-[#3099D5]`}
                                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            >
                                {faq.question}
                            </button>

                            {openIndex === index && (
                                <div className="px-4 py-3 text-gray-700 text-base bg-white">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Optional Bottom Description */}
                {description && (
                    <p className="text-gray-700 mt-4 text-base">{description}</p>
                )}
            </div>
        </div>
    )
}
