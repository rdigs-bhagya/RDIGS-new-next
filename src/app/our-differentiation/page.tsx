// components/HomeSection.tsx
'use client';

import Image from 'next/image';
import 'animate.css';
import FaqAccordion from '@/component/FaqAccordian/page';

const aboutFaqs = [
    {
        question: "What sets RDIGS apart from other B2B marketing and advertising agencies?",
        answer: "RDIGS stands out through our deep focus on lead and demand generation, combining tailored strategies with advanced data analytics to deliver measurable results. We ensure each campaign aligns with our client’s specific business goals, fostering long-term relationships and consistently high-quality outcomes."
    },
    {
        question: "How does RDIGS approach client relationships?",
        answer: "At RDIGS, we prioritize transparent communication, collaboration, and a partnership approach. We take the time to truly understand our clients’ needs, offering personalized services and continuous feedback loops, ensuring their expectations are met at every stage of the campaign."
    },
    {
        question: "How do you ensure the effectiveness of your lead generation campaigns?",
        answer: "We leverage cutting-edge tools and data-driven insights to create highly-targeted campaigns. Our team monitors performance closely, making real-time adjustments to optimize results and ensure we are capturing high-quality leads that convert to sales-ready opportunities."
    },
    {
        question: "What kind of industries does RDIGS specialize in?",
        answer: "RDIGS specializes in lead and demand generation services, providing tailored strategies that drive high-quality leads and business growth. Our expertise spans a range of industries, including technology, finance, healthcare, and e-commerce."
    },
    {
        question: "How does RDIGS stay ahead of trends in digital marketing?",
        answer: "We are committed to continuous innovation and staying at the forefront of digital marketing. Our team regularly participates in industry events, conducts research, and experiments with emerging technologies to ensure we are using the latest trends and tools to maximize client success."
    },
    {
        question: "What is your approach to social media marketing, and how do you tailor it for B2B clients?",
        answer: "RDIGS adopts a strategic, content-driven approach to social media marketing, focusing on building brand authority and generating high-quality engagement. We develop customized content plans based on each client's objectives, ensuring their messaging resonates with their target B2B audience and drives tangible results."
    },
]

const cards = [
    { img: "Content-Marketing.png", title: "Content Marketing" },
    { img: "Account-Based-Marketing.png", title: "Account Based Marketing" },
    { img: "Intent-Fused-Marketing.png", title: "Intent Fused Marketing" },
    { img: "Install-Base-Marketing.png", title: "Install Base Marketing" },
    { img: "WebinarEvent-Marketing.png", title: "Webinar/Event Marketing" },
];

export default function HomeSection() {
    return (
        <div className="container mx-auto py-8 px-10">

            {/* Heading */}
            <div className="text-center mx-auto pb-8 max-w-4xl animate__animated animate__fadeInUp animate__delay-200ms">
                <h1 className="text-[#3099D5] text-4xl md:text-[40px] font-bold mb-2ntext-center">
                    We Assist Partners To Win New Businesses & Fuel Revenue
                </h1>
            </div>

            {/* First Row */}
            <div className="flex flex-col md:flex-row gap-8 mb-4 items-center">
                {/* Left Paragraph */}
                <div className="md:w-1/2 animate__animated animate__fadeInLeft">
                    <h5 className="font-bold mb-2 text-center text-[#16243D] text-[20px]">Experienced Demand Generation Team</h5>
                    <p className="bg-gray-100 p-4 rounded text-[#606060]">
                        We are an Omnichannel Marketing Agency with over 10 years of Demand Generation experience, a team of 100+ highly trained marketing professionals, and a Global Reach of 52.6 million business professionals and leaders.
                    </p>
                </div>

                {/* Right Paragraph */}
                <div className="md:w-1/2 animate__animated animate__fadeInRight">
                    <h5 className="font-bold mb-2 text-center text-[#16243D] text-[20px]">Tech-Focused B2B Growth</h5>
                    <p className="bg-gray-100 p-4 rounded text-[#606060]">
                        RDIGS enables B2B technology companies to increase global reach and engagement. We do the heavy lifting to realize your deeply specific marketing needs, with a professional mix of tactics, technologies, and a personal touch.
                    </p>
                </div>
            </div>

            {/* Second Row */}
            <div className="flex justify-center mt-7 mb-12 animate__animated animate__fadeInUp">
                <div className="md:w-2/3 text-center">
                    <h5 className="font-bold mb-2 text-[#16243D] text-[20px]">Efficient, Scalable B2B Solutions</h5>
                    <p className="bg-gray-100 p-4 rounded text-[#606060]">
                        Since 2016, we have served to lead B2B technology companies, media agencies, and publishers globally. We offer a deeper level of relationship and operational efficiency in order to realize your customer acquisition requirements.
                    </p>
                </div>
            </div>

            {/* Top Categories */}
            <div className="text-center py-3 mb-6">
                <div className="mx-auto max-w-3xl mb-8">
                    <h1 className="text-[#3099D5] text-[2.5rem] font-bold mb-2">
                        Top Categories
                    </h1>
                    <h4 className="text-[#606060] mb-4">
                        What will you get by working with us?
                    </h4>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                    {cards.map((card, idx) => (
                        <div
                            key={idx}
                            className="bg-white shadow border border-gray-300 w-[170px] h-[200px] p-6 flex flex-col items-center justify-center rounded"
                        >
                            <div className="flex flex-col items-center">
                                <Image
                                    src={`/our-differentiation/${card.img}`}
                                    alt={card.title}
                                    width={60}
                                    height={60}
                                />
                                <h6 className="mt-3 text-[14px] text-center">{card.title}</h6>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            {/* Image + About Sections */}
            <div className="flex flex-col xl:flex-row gap-8 mt-10 mb-10">
                <div className="xl:w-1/2 flex justify-center animate__animated animate__fadeInLeft">
                    <div className="w-4/5 h-[350px] relative">
                        <Image
                            src="/our-differentiation/whyuseus2.webp"
                            alt="Life at RDIGS"
                            fill
                            style={{ objectFit: 'fill' }}
                        />
                    </div>
                </div>
                <div className="xl:w-1/2 flex animate__animated animate__fadeInRight">
                    <div className="bg-white p-4 w-full flex flex-col justify-center">
                        <h4 className="text-[#3099D5] text-[24px] mb-2">Other&apos;s</h4>
                        <h1 className="text-5xl font-bold mb-4">Is This How Your Leads Look Like?</h1>
                        <p>
                            Insufficient data leaves sales teams stumbling in the dark, challenging
                            their ability to understand customer needs and make well-informed decisions.
                            It&apos;s a big challenge that makes success harder.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-8 mb-12">
                <div className="xl:w-1/2 flex animate__animated animate__fadeInLeft">
                    <div className="bg-white p-8 w-full flex flex-col justify-center">
                        <h4 className="text-[#3099D5] text-[24px] mb-2">Why Use Us</h4>
                        <h1 className="text-5xl font-bold mb-4">
                            Get Better Data & Deeper Insights with RDIGS
                        </h1>
                        <p>
                            Improve your sales outreach by using intent data and intelligent insights.
                            Marketing empowers the sales team by creating brand awareness and engaging
                            prospects&apos; interest to nurture them further. Adopt a data-driven approach
                            to convert leads into potential opportunities.
                        </p>
                    </div>
                </div>
                <div className="xl:w-1/2 flex justify-center animate__animated animate__fadeInRight">
                    <div className="w-3/5 h-[350px] relative">
                        <Image
                            src="/our-differentiation/whyuseus.webp"
                            alt="Life at RDIGS"
                            fill
                            style={{ objectFit: 'cover' }}
                        />
                    </div>
                </div>
            </div>

            {/* Core Features */}
            <div className="text-center mx-auto pb-4 animate__animated animate__fadeInUp animate__delay-200ms" style={{ maxWidth: '921px' }}>
                <h1 className="text-[#3099D5] text-4xl md:text-5xl font-bold mb-2">Core Features</h1>
                <h4 className="text-[#606060] text-[24px] mb-2">
                    We stand out by generating HQLs and MQLs within hours of launching a campaign
                </h4>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                    { img: 'Goal-oriented-B2B-technology-marketing-solutions.png', title: 'Goal-oriented B2B technology marketing solutions' },
                    { img: 'Customised,-Flexible-and-risk-free-engagement.png', title: 'Customised, Flexible and risk-free engagement' },
                    { img: 'Services-focused-on-conversions-and-achieving-your-goals.png', title: 'Services focused on conversions and achieving your goals' },
                    { img: 'A-trained-team-of-professional-to-support-targeted-marketing.png', title: 'A trained team of professional to support targeted marketing.' },
                    { img: 'Higher-marketing-impact-with-a-lower-budget.png', title: 'Higher marketing impact with a lower budget.' },
                    { img: 'Multi-Channel-Outreach.png', title: 'Multi-Channel Outreach' },
                    { img: 'Dynamic-Campaign-Monitoring-and-Optimization.png', title: 'Dynamic Campaign Monitoring and Optimization' },
                    { img: 'Scalable-Database-Enrichment.png', title: 'Scalable Database Enrichment' },
                ].map((card, idx) => (
                    <div
                        key={idx}
                        className="bg-white p-8 text-center font-bold text-[#16243D] flex flex-col items-center rounded border border-gray-300 border-t-4 border-t-[#3099D5] transition-transform duration-300 animate__animated animate__fadeInUp hover:scale-105"
                        style={{ animationDelay: `${idx * 0.1}s` }}
                    >
                        <Image
                            src={`/our-differentiation/${card.img}`}
                            alt={card.title}
                            width={50}
                            height={50}
                        />
                        <h5 className="mt-5">{card.title}</h5>
                    </div>
                ))}
            </div>

            {/* FAQs */}
            <FaqAccordion
                title="Streamlined Leads and Magnifying Growth"
                faqs={aboutFaqs}
                description="We use a data-driven strategy to ensure that our methods are based on
                the most recent market trends and insights, giving our customers an
                advantage over their competitors."
            />

        </div>
    );
}
