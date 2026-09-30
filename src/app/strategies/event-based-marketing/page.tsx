"use client";

import Image from "next/image";

export default function EventtBasedMarketingPage() {
    return (
        <div className="container mx-auto px-5 md:px-10 py-10">

            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{ minWidth: "1064px" }}
            >
                <h1 className="text-[56px] font-bold leading-[67px] text-[#16243d] mb-2 p-4">
                    Turn Every Event into a Revenue-Generating Opportunity
                </h1>

                <p
                    className="mt-2 text-gray-600 text-base leading-relaxed"
                    style={{ marginRight: "57px", marginLeft: "57px" }}
                >
                    At RDIGS, we help B2B brands turn high-value events—virtual, hybrid, or in-person—into powerful demand generation engines. From industry conferences to private roundtables, our Event-Based Marketing Strategy is built to connect your brand with the right decision-makers at the right time.
                </p>
            </div>

            <div
                className="text-center mx-auto pb-5 wow fadeInUp"
                data-wow-delay="0.2s"
                style={{ minWidth: "1064px" }}
            >
                <h1 className="text-[56px] font-bold leading-[67px] text-[#16243d] mb-2 p-4">
                    Make Your Presence Count
                </h1>

                <p
                    className="mt-2 text-gray-600 text-base leading-relaxed"
                    style={{ marginRight: "57px", marginLeft: "57px" }}
                >
                    Whether you’re hosting, sponsoring, or attending an event, visibility isn’t enough—you need engagement that drives results. Our team supports you across the full event lifecycle: pre-event targeting, in-event amplification, and post-event nurturing.
                </p>
            </div>

            {/* ================= ROW 1 ================= */}
            <div className="flex flex-col md:flex-row items-center mb-2 p-3">

                {/* LEFT CONTENT */}
                <div className="w-full md:w-1/2 text-center md:text-left">

                    <h4 className="text-[24px] text-[#3099D5] font-semibold">
                        Pre-Event Activation
                    </h4>

                    <h1 className="mt-2 text-[40px] text-[#16243d] font-[500] leading-[48px]">
                        Create Buzz Before the Booth
                    </h1>

                    <p className="mt-4 text-gray-600 text-base leading-relaxed">
                        We don’t wait for foot traffic—we drive it. Using intent data, firmographics, and audience behavior, we help you identify key accounts attending the event and create multi-touch campaigns that generate awareness and interest before the doors even open.
                    </p>

                    <a
                        href="#"
                        className="inline-block mt-5 bg-[#3099D5] text-white rounded-full py-2 px-6"
                    >
                        Read More
                    </a>
                </div>

                {/* RIGHT IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
                        <Image
                            src="/services/event-based-marketing/Banner-1.png"
                            alt="content-syndycation"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* ================= ROW 2 ================= */}
            <div className="flex flex-col md:flex-row items-center mb-2 p-3">

                {/* IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none mt-10 md:mt-0">
                    <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
                        <Image
                            src="/services/event-based-marketing/Banner-2.png"
                            alt="content-syndycation"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* TEXT */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h4 className="text-[24px] text-[#3099D5] font-semibold">
                        In-Event Engagement
                    </h4>

                    <h1 className="mt-2 text-[40px] text-[#16243d] font-[500] leading-[48px]">
                        Stand Out, Spark Conversations, Book Meetings
                    </h1>

                    <p className="mt-4 text-gray-600 text-base leading-relaxed">
                        From messaging strategy to interactive content, we optimize your presence to spark meaningful conversations. We help schedule meetings with high-value prospects and equip your teams with data-backed insights to connect with confidence.
                    </p>

                    <a
                        href="#"
                        className="inline-block mt-5 bg-[#3099D5] text-white rounded-full py-2 px-6"
                    >
                        Read More
                    </a>
                </div>
            </div>

            {/* ================= ROW 3 ================= */}
            <div className="flex flex-col md:flex-row items-center mb-2 p-3">

                {/* TEXT */}
                <div className="w-full md:w-1/2 text-center md:text-left">
                    <h4 className="text-[24px] text-[#3099D5] font-semibold">
                        Post-Event Conversion
                    </h4>
                    <h1 className="mt-2 text-[40px] text-[#16243d] font-[500] leading-[48px]">
                        Keep the Momentum Going
                    </h1>

                    <p className="mt-4 text-gray-600 text-base leading-relaxed">The event may end, but your pipeline doesn’t. We develop nurturing flows and follow-up campaigns that convert event leads into real opportunities. We track engagement, score intent, and keep your brand top-of-mind long after the badges are packed away.
                    </p>

                    <a
                        href="#"
                        className="inline-block mt-5 bg-[#3099D5] text-white rounded-full py-2 px-6"
                    >
                        Read More
                    </a>
                </div>

                {/* IMAGE */}
                <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
                    <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
                        <Image
                            src="/services/event-based-marketing/Banner-3.png"
                            alt="content-syndycation"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>

            {/* ================= WHY RDIGS SECTION ================= */}
            <div className="mt-12 pt-8">
                <hr className="border-t border-[#D6ECF9] mb-12" />

                <div className="text-center max-w-4xl mx-auto px-4 pb-12">
                    <h2 className="text-[32px] md:text-[42px] font-bold text-[#16243d] mb-8">
                        Why RDIGS?
                    </h2>

                    <div className="flex flex-col items-center gap-3 text-[#5F6B7A] text-[16px] md:text-[18px]">
                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                            <span className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#3099D5]"></span>
                                Data–Driven Targeting
                            </span>
                            <span className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#3099D5]"></span>
                                Full–Funnel Campaign Execution
                            </span>
                        </div>

                        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
                            <span className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#3099D5]"></span>
                                Onsite &amp; Virtual Event Amplification
                            </span>
                            <span className="flex items-center gap-2.5">
                                <span className="w-2 h-2 rounded-full bg-[#3099D5]"></span>
                                Measurable ROI with Attribution
                            </span>
                        </div>
                    </div>

                    <p className="mt-8 text-gray-500 text-[16px] md:text-[17px]">
                        Turn event buzz into business outcomes.
                    </p>

                    <p className="mt-4 text-[#16243d] text-[18px] md:text-[20px] font-semibold">
                        Let’s make your next event your biggest revenue moment yet.
                    </p>
                </div>
            </div>

        </div>
    );
}
