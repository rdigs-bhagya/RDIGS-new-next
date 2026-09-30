import Image from 'next/image'
import Link from 'next/link'

export default function DemandAmplifierPage() {
    return (
        <div className="w-full bg-white font-sans text-[#16243D]">
            {/* HERO SECTION */}
            <section
                className="relative w-full pt-10 overflow-hidden flex flex-col items-center text-center px-4 bg-[length:100%_auto] bg-top bg-no-repeat min-h-[720px]"
                style={{ backgroundImage: 'url("/dem-gen/BG.jpg")' }}
            >

                <div className="mb-3 mt-4">
                    <span className="inline-block bg-gradient-to-r from-[#8be0ef] via-[#53aae4] to-[#5975ff] text-white px-6 py-2 rounded-full font-bold text-[14px] shadow-sm">
                        Demand Amplifier
                    </span>
                </div>

                <h1 className="text-[36px] md:text-[40px] mb-3 font-[600] text-[#2486d3] leading-[43px] max-w-4xl mx-auto">
                    Demand Generation That Actually Converts
                    <br />
                    Not Just Fills Your CRM
                </h1>

                <p className="text-[#606060] text-[16px] text-[400] max-w-4xl mx-auto leading-[24px]">
                    Most demand generation today is built around one moment: the download. A prospect sees a piece of content, fills out a form, and becomes a &quot;lead.&quot; But here&apos;s the problem – that&apos;s where most providers stop.
                </p>

                {/* Inline Image */}
                <div className="relative w-full max-w-5xl mx-auto h-[400px] md:h-[500px]">
                    <Image
                        src="/dem-gen/lead_source.png"
                        alt="Demand Generation Funnel"
                        fill
                        className="object-contain"
                        priority
                    />
                </div>

                <p className="text-[#16243D] text-[18px] font-semibold max-w-4xl mx-auto mt-12 px-4 leading-relaxed mb-5">
                    <span className="font-bold">At RD Info Global Solutions (RDIGS)</span>, we&apos;ve spent years understanding why so many of these leads never turn into pipeline... and more importantly, <span className="text-[#2A95D6]">how to fix it.</span>
                </p>
            </section>

            {/* THE REAL PROBLEM SECTION */}
            <section className="py-5 px-4 bg-[#EEF8FF] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-[32px] md:text-[36px] font-bold text-[#2A95D6] mb-3">
                        The Real Problem With Traditional Demand Gen
                    </h2>
                    <p className="text-gray-600 text-[16px]">
                        If you&apos;ve run demand gen campaigns before, you&apos;ve probably seen this:
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-4">
                    {/* Card 1 */}
                    <div className="bg-[#DFF1FF] rounded-xl p-8 text-center border border-[#5fa4ca] shadow-sm flex flex-col items-center justify-center min-h-[140px]">
                        <div className="mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#68A5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                <polyline points="7 10 12 15 17 10"></polyline>
                                <line x1="12" y1="15" x2="12" y2="3"></line>
                            </svg>
                        </div>
                        <p className="text-[#16243D] text-[15px] font-medium leading-relaxed">
                            The lead downloads your content... then<br />forgets your brand within days
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="bg-[#DFF1FF] rounded-xl p-8 text-center border border-[#5fa4ca] shadow-sm flex flex-col items-center justify-center min-h-[140px]">
                        <div className="mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#68A5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                <polyline points="22,6 12,13 2,6"></polyline>
                            </svg>
                        </div>
                        <p className="text-[#16243D] text-[15px] font-medium leading-relaxed">
                            Your nurture emails go out... but<br />engagement drops quickly
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="bg-[#DFF1FF] rounded-xl p-8 text-center border border-[#5fa4ca] shadow-sm flex flex-col items-center justify-center min-h-[140px]">
                        <div className="mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#68A5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <p className="text-[#16243D] text-[15px] font-medium leading-relaxed">
                            Sales follows up... but there&apos;s no real buying<br />intent
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="bg-[#DFF1FF] rounded-xl p-8 text-center border border-[#5fa4ca] shadow-sm flex flex-col items-center justify-center min-h-[140px]">
                        <div className="mb-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#68A5F3" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg>
                        </div>
                        <p className="text-[#16243D] text-[15px] font-medium leading-relaxed">
                            The actual decision-makers were never<br />part of that first interaction
                        </p>
                    </div>
                </div>

                <div className="text-center">
                    <h3 className="text-[28px] font-bold text-[#2A95D6] mb-5">
                        Because in B2B, one lead ≠ one deal.
                    </h3>
                    <p className="text-gray-600 text-[15px]">
                        Buying decisions involve multiple stakeholders, extended timelines, and repeated brand exposure before conversion happens.
                    </p>
                </div>
            </section>

            {/* OUR APPROACH SECTION */}
            <section className="py-10 px-4 bg-[#F8F9FA] relative overflow-hidden">
                <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-16 relative z-10">
                    <div className="md:w-1/2">
                        <h4 className="text-[#2A95D6] text-[30px] font-[800] mb-4 text-leading-[45px]">Our Approach</h4>
                        <h2 className="text-[35px] font-[600] text-[#16243D] leading-[42px] mb-6">
                            Demand Generation<br />+ Built-In ABM<br />Reinforcement
                        </h2>
                        <p className="text-gray-400 text-[21px] leading-[32px] mb-6">
                            We don&apos;t just generate leads — we build demand around them. Every lead we deliver is supported with targeted ABM display activity, ensuring your brand stays visible long after the first interaction.
                        </p>
                        <p className="text-gray-400 text-[21px] leading-[32px]">
                            Your prospects don&apos;t just download your content — they keep seeing you, recognizing you, and remembering you.
                        </p>
                    </div>

                    <div className="md:w-1/2 relative h-[400px] w-full flex items-center justify-center">
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#EEF5FC] rounded-full -z-10"></div>

                        <div className="flex flex-col gap-6 w-full max-w-[400px]">
                            {/* Card 1 */}
                            <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-5 flex items-center justify-between w-[90%] transform -translate-x-4">
                                <span className="font-bold text-[#16243D] text-[16px]">Content Download</span>
                                <div className="bg-[#4F73FF] w-10 h-10 rounded-lg flex items-center justify-center text-white">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                                        <polyline points="7 10 12 15 17 10"></polyline>
                                        <line x1="12" y1="15" x2="12" y2="3"></line>
                                    </svg>
                                </div>
                            </div>

                            {/* Card 2 */}
                            <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-5 flex items-center justify-between w-full translate-x-4">
                                <span className="font-bold text-[#16243D] text-[16px]">ABM Visibility<br />Reinforcement</span>
                                <div className="bg-[#6B85FF] w-10 h-10 rounded-lg flex items-center justify-center text-white">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                        <circle cx="12" cy="12" r="3"></circle>
                                    </svg>
                                </div>
                            </div>

                            {/* Card 3 */}
                            <div className="bg-white rounded-xl shadow-[0_10px_30px_rgba(0,0,0,0.05)] p-5 flex items-center justify-between w-[90%] transform -translate-x-2">
                                <span className="font-bold text-[#16243D] text-[16px]">Brand Recall &<br />Recognition</span>
                                <div className="bg-[#4F73FF] w-10 h-10 rounded-lg flex items-center justify-center text-white">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                                        <line x1="8" y1="21" x2="16" y2="21"></line>
                                        <line x1="12" y1="17" x2="12" y2="21"></line>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* WHY RDIGS WORKS SECTION */}
            <section className="py-20 px-4 bg-[#F8F9FA]">
                <div className="max-w-6xl mx-auto bg-white rounded-3xl p-12 shadow-[0_5px_40px_rgba(0,0,0,0.03)] border border-gray-100">
                    <div className="flex flex-col md:flex-row gap-12 mb-12">
                        <div className="md:w-1/2">
                            <h2 className="text-[36px] font-bold text-[#2A95D6] leading-tight">
                                Why RDIGS<br />Demand Generation Works
                            </h2>
                        </div>
                        <div className="md:w-1/2 flex items-center">
                            <p className="text-gray-700 text-[16px] leading-relaxed">
                                At RDIGS, demand generation isn&apos;t treated as a top-of-funnel activity. It&apos;s a full-funnel growth strategy designed to:
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row gap-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 flex-1">
                            {/* Gen Interest */}
                            <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                                <div className="mb-4 flex justify-center text-[#2A95D6]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                        <circle cx="9" cy="7" r="4"></circle>
                                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                    </svg>
                                </div>
                                <h4 className="font-bold text-[#2A95D6] text-[16px] mb-2">Generate Interest</h4>
                                <p className="text-gray-500 text-[12px] leading-relaxed">Engage buyers early in their research journey.</p>
                            </div>

                            {/* Capture Intent */}
                            <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                                <div className="mb-4 flex justify-center text-[#2A95D6]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <circle cx="12" cy="12" r="6"></circle>
                                        <circle cx="12" cy="12" r="2"></circle>
                                    </svg>
                                </div>
                                <h4 className="font-bold text-[#2A95D6] text-[16px] mb-2">Capture Intent</h4>
                                <p className="text-gray-500 text-[12px] leading-relaxed">Focus on high-intent opportunities.</p>
                            </div>

                            {/* Convert Pipeline */}
                            <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                                <div className="mb-4 flex justify-center text-[#2A95D6]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                                    </svg>
                                </div>
                                <h4 className="font-bold text-[#2A95D6] text-[16px] mb-2">Convert Pipeline</h4>
                                <p className="text-gray-500 text-[12px] leading-relaxed">Turn attention into revenue.</p>
                            </div>

                            {/* Precision Targeting */}
                            <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                                <div className="mb-4 flex justify-center text-[#2A95D6]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line x1="22" y1="12" x2="18" y2="12"></line>
                                        <line x1="6" y1="12" x2="2" y2="12"></line>
                                        <line x1="12" y1="6" x2="12" y2="2"></line>
                                        <line x1="12" y1="22" x2="12" y2="18"></line>
                                    </svg>
                                </div>
                                <h4 className="font-bold text-[#2A95D6] text-[16px] mb-2">Precision Targeting</h4>
                            </div>

                            {/* Content Syndication */}
                            <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                                <div className="mb-4 flex justify-center text-[#2A95D6]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="16" y1="13" x2="8" y2="13"></line>
                                        <line x1="16" y1="17" x2="8" y2="17"></line>
                                        <polyline points="10 9 9 9 8 9"></polyline>
                                    </svg>
                                </div>
                                <h4 className="font-bold text-[#2A95D6] text-[16px] mb-2">Content Syndication</h4>
                            </div>

                            {/* Intent Outreach */}
                            <div className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
                                <div className="mb-4 flex justify-center text-[#2A95D6]">
                                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <h4 className="font-bold text-[#2A95D6] text-[16px] mb-2">Intent Outreach</h4>
                            </div>
                        </div>

                        {/* Large right card */}
                        <div className="md:w-1/4 border-2 border-[#2A95D6] rounded-xl p-8 text-center flex flex-col justify-center items-center shadow-[0_10px_20px_rgba(42,149,214,0.15)] bg-white min-h-[300px]">
                            <div className="mb-6 flex justify-center text-[#2A95D6]">
                                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M13.5 10H19V21H13.5z"></path>
                                    <path d="M5 21H10.5V6H5z"></path>
                                    <path d="M10.5 14H13.5V21H10.5z"></path>
                                    <circle cx="10" cy="3" r="1.5"></circle>
                                    <path d="M10 4.5l-3 4"></path>
                                </svg>
                            </div>
                            <h4 className="font-bold text-[#2A95D6] text-[20px] leading-tight">
                                ABM<br />Reinforcement
                            </h4>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-20 px-4 bg-white max-w-6xl mx-auto">
                <div className="bg-[#2A75D3] rounded-[32px] p-12 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden">
                    <div className="md:w-3/5 relative z-10">
                        <h2 className="text-white text-[40px] font-bold leading-tight mb-6">
                            Turn Your Leads Into Pipeline
                        </h2>
                        <p className="text-white/90 text-[16px] leading-relaxed mb-8 max-w-xl">
                            If your current demand generation campaigns are delivering volume but not conversions, it&apos;s time to rethink the approach. With RDIGS, you&apos;re not just generating leads. You&apos;re building demand that sticks, scales, and converts.
                        </p>
                        <Link href="/contact">
                            <span className="inline-flex items-center gap-3 bg-white text-[#2A75D3] font-bold text-[15px] px-8 py-3.5 rounded-full hover:bg-gray-50 transition-colors shadow-sm">
                                TALK TO US
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </span>
                        </Link>
                    </div>

                    <div className="md:w-2/5 relative h-[250px] w-full flex justify-end z-10">
                        <div className="relative w-full h-full">
                            <Image
                                src="/services/abm.jpg"
                                alt="Funnel Visualization"
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Background decorations for CTA */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#1E5BA8] rounded-full translate-x-1/3 -translate-y-1/3 blur-3xl opacity-50 z-0"></div>
                </div>
            </section>
        </div>
    )
}
