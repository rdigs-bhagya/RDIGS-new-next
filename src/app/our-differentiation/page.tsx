// components/HomeSection.tsx
'use client';

import Image from 'next/image';
import 'animate.css';
import FaqAccordion from '@/component/FaqAccordian/page';

const aboutFaqs = [
    {
        question: "What makes RDIGS different from other lead generation providers?",
        answer: "We go beyond capturing intent signals. Our approach ensures your brand is remembered throughout the buying journey, not just at the first click. By combining verified data, intent insights, and consistent display visibility, we help you stay top of mind until your buyers are ready to act."
    },
    {
        question: "Do you only work on top-of-funnel campaigns?",
        answer: "No. We support clients across the full funnel, from awareness to mid- and lower-funnel activation. Our focus is always on helping your brand stay visible and recognised at every stage, so when prospects are ready, they already know who you are."
    },
    {
        question: "How do you ensure lead quality?",
        answer: "Every lead we deliver is verified and enriched with firmographic and intent data. This means your sales team spends more time with high-fit accounts that already know your brand, not cold, unqualified names."
    },
    {
        question: "Do you use intent signals?",
        answer: "Yes, we do. We have access to leading intent tools, but we are careful about how we use them because not all intent signals are equal. What matters most is understanding the context behind those signals. We analyse the types of actions that generated the intent and study how different audiences have historically responded. We also run regular surveys to understand what our audiences are genuinely interested in, helping us separate real buying intent from surface-level engagement."
    },
    {
        question: "What kind of clients or industries do you work with?",
        answer: "We partner with B2B organisations where brand visibility and lead quality matter, including technology, SaaS, professional services, and manufacturing. Our model adapts to your buying cycle, no matter how complex."
    },
    {
        question: "How do you generate your leads?",
        answer: "It depends on the type of lead and where it sits in the funnel. For top-of-funnel campaigns, we use a combination of email and display advertising to drive awareness and engagement. For mid- and lower-funnel activity, our experienced telemarketing team helps deliver qualified leads ready for deeper conversations. We are always transparent about how each campaign is run, and for programmes involving telemarketing, we provide full call recordings so you can review quality and compliance with confidence."
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

            <section className="bg-white py-4">
                <div className="max-w-7xl mx-auto px-4 py-4">
                    {/* Heading Section */}
                    <div
                        className="text-center mx-auto mb-12 animate__animated animate__fadeInUp"
                        style={{ maxWidth: "800px" }}
                    >
                        <h1
                            className="font-bold mb-3"
                            style={{ color: "#3099D5", fontSize: "2.5rem" }}
                        >
                            Why Clients Choose RDIGS
                        </h1>

                        <p className="text-gray-500 mb-4 text-[1.1rem] leading-relaxed">
                            Most demand generation stops at the download. At RD Info Global
                            Solutions, we go further. We help ensure the leads you generate—
                            whether at the top, middle, or bottom of the funnel—remember your
                            brand, understand the outcomes you deliver, and are more likely to
                            come back when they’re ready to buy.
                        </p>

                        <p className="text-gray-500 text-[1.1rem] leading-relaxed">
                            Our difference lies in how we connect visibility, timing, and value
                            across the entire buying journey.
                        </p>
                    </div>

                    {/* Points Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Point 1 */}
                        <div className="animate__animated animate__fadeInLeft">
                            <div className="p-6 h-full bg-gray-100 rounded shadow-sm">
                                <h4 className="text-2xl text-[#3099D5] font-semibold mb-3">
                                    1. Beyond the Lead
                                </h4>
                                <p className="text-base text-gray-800 leading-relaxed">
                                    We don’t see a form fill or a download as the finish line. Our
                                    approach builds ongoing visibility so your brand becomes
                                    familiar, trusted, and front of mind when the buyer is ready to
                                    take the next step.
                                </p>
                            </div>
                        </div>

                        {/* Point 2 */}
                        <div className="animate__animated animate__fadeInRight">
                            <div className="p-6 h-full bg-gray-100 rounded shadow-sm">
                                <h4 className="text-2xl text-[#3099D5] font-semibold mb-3">
                                    2. Verified and Insight-Rich
                                </h4>
                                <p className="text-base text-gray-800 leading-relaxed">
                                    Every lead we deliver is verified and enriched with deeper
                                    insight. This helps your marketing and sales teams focus on the
                                    right accounts, improving engagement quality and conversion
                                    potential.
                                </p>
                            </div>
                        </div>

                        {/* Point 3 */}
                        <div className="animate__animated animate__fadeInLeft">
                            <div className="p-6 h-full bg-gray-100 rounded shadow-sm">
                                <h4 className="text-2xl text-[#3099D5] font-semibold mb-3">
                                    3. Consistent, Intent-Driven Visibility
                                </h4>
                                <p className="text-base text-gray-800 leading-relaxed">
                                    We blend intent data with display campaigns to make sure your
                                    message lands repeatedly and memorably. This consistent exposure
                                    reinforces your value proposition and strengthens brand recall
                                    across every stage of the funnel.
                                </p>
                            </div>
                        </div>

                        {/* Point 4 */}
                        <div className="animate__animated animate__fadeInRight">
                            <div className="p-6 h-full bg-gray-100 rounded shadow-sm">
                                <h4 className="text-2xl text-[#3099D5] font-semibold mb-3">
                                    4. Outcome-Focused Growth
                                </h4>
                                <p className="text-base text-gray-800 mb-3 leading-relaxed">
                                    Our programmes are designed to create commercial impact —
                                    helping your brand achieve stronger awareness, deeper
                                    engagement, and higher-quality pipeline.
                                </p>
                                <p className="text-base font-semibold italic text-gray-800">
                                    Because demand generation isn’t about who clicks first, it’s
                                    about who buyers remember when it counts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Categories */}
            {/* <div className="text-center py-3 mb-6">
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
            </div> */}
            {/* Image + About Sections */}
            {/* <div className="flex flex-col xl:flex-row gap-8 mt-10 mb-10">
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
            </div> */}

            {/* <div className="flex flex-col xl:flex-row gap-8 mb-12">
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
            </div> */}

            {/* Core Features */}
            {/* <div className="text-center mx-auto pb-4 animate__animated animate__fadeInUp animate__delay-200ms" style={{ maxWidth: '921px' }}>
                <h1 className="text-[#3099D5] text-4xl md:text-5xl font-bold mb-2">Core Features</h1>
                <h4 className="text-[#606060] text-[24px] mb-2">
                    We stand out by generating HQLs and MQLs within hours of launching a campaign
                </h4>
            </div> */}

            {/* <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
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
            </div> */}

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
