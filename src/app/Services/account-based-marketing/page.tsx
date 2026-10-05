import Image from 'next/image'
import Link from 'next/link'

export default function AccountBasedMarketingPage() {
    return (
        <div className="w-full bg-white text-[#16243D]" style={{ fontFamily: "'DM Sans', sans-serif" }}>
            {/* HERO SECTION */}
            <section
                className="relative w-full pt-5 pb-10 overflow-hidden px-4 md:px-10 flex items-center bg-[length:100%_auto] md:bg-cover bg-center bg-no-repeat min-h-[600px] md:min-h-[556px]"
                style={{ backgroundImage: 'url("/acc-base-marketting/BG ABM.jpg")' }}
            >
                <div className="max-w-[1320px] mx-auto w-full flex flex-col md:flex-row items-center justify-between gap-10">
                    <div className="md:w-[57%] text-center md:text-left">
                        <div className="mb-4">
                            <span className="inline-flex items-center justify-center h-[52px] px-8 rounded-full text-white font-bold text-[16px] overflow-hidden border-none shadow-md bg-gradient-to-r from-[#1CB7E9] via-[#2A95D3] to-[#AFC5F3] relative z-10">
                                ABM Services
                            </span>
                        </div>

                        <h1 className="text-[34px] md:text-[45px] font-semibold text-[#3099D5] mb-4">
                            Account Based Marketing
                        </h1>

                        <h2 className="text-[21px] md:text-[24px] font-semibold text-black mb-5">
                            Focus on the Whole Buying Committee
                        </h2>

                        <p className="text-[17px] leading-[1.8] text-[#5F6B7A] max-w-[730px] mx-auto md:mx-0 mb-8">
                            A strategic, research-driven approach to engage your ideal accounts,
                            influence the entire buying committee, and drive real pipeline growth
                            through personalized outreach and targeted engagement.
                        </p>

                        <div className="flex items-center justify-center md:justify-start gap-4 flex-wrap">
                            <Link href="#services">
                                <span className="inline-flex items-center justify-center h-[48px] px-5 rounded-full text-white font-semibold text-[14px] bg-gradient-to-r from-[#2D99CD] via-[#4C9FBE] to-[#9CA2A5] shadow-md hover:opacity-90 transition-opacity cursor-pointer">
                                    Explore ABM Services
                                    <span className="w-7 h-7 rounded-full bg-white text-[#2D99CD] flex items-center justify-center ml-3 font-bold text-[13px]">
                                        ↗
                                    </span>
                                </span>
                            </Link>
                            <Link href="/contact">
                                <span className="inline-flex items-center justify-center h-[48px] px-5 rounded-full text-white font-semibold text-[14px] bg-gradient-to-r from-[#2D99CD] via-[#4C9FBE] to-[#9CA2A5] shadow-md hover:opacity-90 transition-opacity cursor-pointer">
                                    Talk to expert
                                    <span className="w-7 h-7 rounded-full bg-white text-[#2D99CD] flex items-center justify-center ml-3 font-bold text-[13px]">
                                        ☎
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-[38%] text-center">
                        <div className="w-full max-w-[437px] mx-auto">
                            <Image
                                src="/acc-base-marketting/bg-abm-main-img.png"
                                alt="ABM Main"
                                width={437}
                                height={437}
                                className="w-full h-auto object-contain"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* WHAT WE DO SECTION */}
            <section className="py-12 bg-[#EEF6FF] px-4">
                <div className="max-w-[1320px] mx-auto">
                    <div className="text-center mb-10">
                        <div className="mb-4">
                            <span className="inline-flex items-center justify-center h-[52px] px-8 rounded-full text-white font-bold text-[16px] overflow-hidden border-none shadow-md bg-gradient-to-r from-[#1CB7E9] via-[#2A95D3] to-[#AFC5F3] relative z-10">
                                WHAT WE DO
                            </span>
                        </div>
                        <h2 className="text-[30px] md:text-[42px] font-semibold text-[#3099D5] mb-2">
                            Our ABM Approach That Delivers Pipeline
                        </h2>
                        <p className="text-[#5F6B7A] text-[18px] leading-[1.8] max-w-[980px] mx-auto">
                            We combine data, demand generation, and research to help you engage the right accounts,
                            influence the right people, and win more deals.
                        </p>
                    </div>

                    {/* CARD 1: TAL */}
                    <div className="bg-white rounded-[30px] p-6 md:p-8 shadow-sm border border-[#E4EDF5] mb-8">
                        <h2 className="text-[24px] md:text-[30px] font-bold text-[#3099D5] mb-1">
                            Targeted Account List (TAL) Development
                        </h2>
                        <p className="text-[#7B8794] text-[18px] md:text-[20px] font-medium leading-[1.7] mb-8">
                            We identify and build a high-quality Targeted Accounts List (TAL) tailored to your Ideal Customer Profile (ICP).
                        </p>

                        <div className="flex flex-col lg:flex-row items-start gap-8">
                            <div className="lg:w-7/12">
                                <div className="flex gap-4 mb-5">
                                    <div className="min-w-[34px] w-[34px] h-[34px] rounded-md bg-[#D9ECFF] border border-[#99C8FF] flex items-center justify-center text-[#4B8CE2] font-bold text-[20px]">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#111] mb-1">Already have a list?</h4>
                                        <p className="text-[#5F6B7A] text-[15px] leading-[1.7]">
                                            We enrich, validate and segment your existing accounts to maximize results.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-6">
                                    <div className="min-w-[34px] w-[34px] h-[34px] rounded-md bg-[#D9ECFF] border border-[#99C8FF] flex items-center justify-center text-[#4B8CE2] font-bold text-[20px] font-serif italic">
                                        i
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#111] mb-1">Need help building one?</h4>
                                        <p className="text-[#5F6B7A] text-[15px] leading-[1.7]">
                                            We find and build your ideal account list using ICP and lookalike research.
                                        </p>
                                    </div>
                                </div>

                                <h5 className="text-[18px] font-bold text-[#3099D5] mt-6 mb-4">
                                    What We Offer:
                                </h5>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="bg-[#DFF1FF] border border-[#89C5EF] rounded-lg h-[56px] flex items-center justify-center text-center text-[15px] font-medium text-[#4F5D6B]">
                                        Account list enrichment
                                    </div>
                                    <div className="bg-[#DFF1FF] border border-[#89C5EF] rounded-lg h-[56px] flex items-center justify-center text-center text-[15px] font-medium text-[#4F5D6B]">
                                        ICP-based account discovery
                                    </div>
                                    <div className="bg-[#DFF1FF] border border-[#89C5EF] rounded-lg h-[56px] flex items-center justify-center text-center text-[15px] font-medium text-[#4F5D6B]">
                                        Lookalike audience targeting
                                    </div>
                                    <div className="bg-[#DFF1FF] border border-[#89C5EF] rounded-lg h-[56px] flex items-center justify-center text-center text-[15px] font-medium text-[#4F5D6B]">
                                        Data validation & segmentation
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-5/12 text-center mt-6 lg:mt-[-37px]">
                                <Image
                                    src="/acc-base-marketting/tal.png"
                                    alt="TAL"
                                    width={420}
                                    height={350}
                                    className="w-full max-w-[420px] mx-auto object-contain"
                                />
                            </div>
                        </div>
                    </div>

                    {/* CARD 2: Lead Gen */}
                    <div className="bg-white rounded-[30px] p-6 md:p-8 shadow-sm border border-[#E4EDF5]">
                        <h2 className="text-[24px] md:text-[30px] font-bold text-[#3099D5] mb-1">
                            Lead Generation & Demand Creation
                        </h2>
                        <p className="text-[#7B8794] text-[18px] md:text-[20px] font-medium leading-[1.7] mb-8">
                            We generate qualified leads from your targeted accounts through strategic multi-channel engagement campaigns.
                        </p>

                        <div className="flex flex-col lg:flex-row items-start gap-8">
                            <div className="lg:w-7/12">
                                <div className="flex gap-4 mb-4">
                                    <div className="min-w-[34px] w-[34px] h-[34px] rounded-md bg-[#D9ECFF] border border-[#99C8FF] flex items-center justify-center text-[#4B8CE2] font-bold text-[20px]">
                                        ✓
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#111] mb-1">Top-of-Funnel Demand Generation</h4>
                                        <p className="text-[#5F6B7A] text-[15px] leading-[1.7]">
                                            We create awareness and engagement among your target accounts by promoting valuable content and offers.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-3 mt-4 mb-6">
                                    <div className="flex-1 w-full bg-[#DFF1FF] border border-[#89C5EF] rounded-lg p-3 text-center text-[12px] leading-[1.5] text-[#4F5D6B] min-h-[72px] flex items-center justify-center">
                                        Promote content and offers to your Targeted Accounts
                                    </div>
                                    <div className="text-[24px] text-[#6FA8E9] font-bold rotate-90 md:rotate-0">→</div>
                                    <div className="flex-1 w-full bg-[#DFF1FF] border border-[#89C5EF] rounded-lg p-3 text-center text-[12px] leading-[1.5] text-[#4F5D6B] min-h-[72px] flex items-center justify-center">
                                        Drive awareness and engagement across your TAL
                                    </div>
                                    <div className="text-[24px] text-[#6FA8E9] font-bold rotate-90 md:rotate-0">→</div>
                                    <div className="flex-1 w-full bg-[#DFF1FF] border border-[#89C5EF] rounded-lg p-3 text-center text-[12px] leading-[1.5] text-[#4F5D6B] min-h-[72px] flex items-center justify-center">
                                        Gain permission for a follow up call with your team
                                    </div>
                                </div>

                                <div className="flex gap-4 mb-4 mt-8">
                                    <div className="min-w-[34px] w-[34px] h-[34px] rounded-md bg-[#D9ECFF] border border-[#99C8FF] flex items-center justify-center text-[#4B8CE2] font-bold text-[20px] font-serif italic">
                                        i
                                    </div>
                                    <div>
                                        <h4 className="text-[18px] font-bold text-[#111] mb-1">Problem-Aware Lead Engagement</h4>
                                        <p className="text-[#5F6B7A] text-[15px] leading-[1.7]">
                                            We connect with decision-makers who are actively facing market challenges and qualify them for your sales team.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex flex-col md:flex-row items-center gap-3 mt-4">
                                    <div className="flex-1 w-full bg-[#DFF1FF] border border-[#89C5EF] rounded-lg p-3 text-center text-[12px] leading-[1.5] text-[#4F5D6B] min-h-[72px] flex items-center justify-center">
                                        Conversations about market symptoms and challenges
                                    </div>
                                    <div className="text-[24px] text-[#6FA8E9] font-bold rotate-90 md:rotate-0">→</div>
                                    <div className="flex-1 w-full bg-[#DFF1FF] border border-[#89C5EF] rounded-lg p-3 text-center text-[12px] leading-[1.5] text-[#4F5D6B] min-h-[72px] flex items-center justify-center">
                                        Gather context and qualify interest
                                    </div>
                                    <div className="text-[24px] text-[#6FA8E9] font-bold rotate-90 md:rotate-0">→</div>
                                    <div className="flex-1 w-full bg-[#DFF1FF] border border-[#89C5EF] rounded-lg p-3 text-center text-[12px] leading-[1.5] text-[#4F5D6B] min-h-[72px] flex items-center justify-center">
                                        Gain permission for a follow up call with your team
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-5/12 text-center mt-6 lg:mt-0 flex justify-center">
                                <Image
                                    src="/acc-base-marketting/lead.png"
                                    alt="Lead Generation"
                                    width={380}
                                    height={350}
                                    className="w-full max-w-[380px] mx-auto object-contain mt-6"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* BUYING COMMITTEE MAPPING SECTION */}
            <section className="bg-[#eaf4fb] pb-10 px-4">
                <div className="max-w-[1320px] mx-auto text-center pt-8">
                    <h2 className="text-[#3099D5] text-[28px] md:text-[34px] font-bold mb-3">
                        Buying Committee Mapping
                    </h2>
                    <p className="max-w-[760px] mx-auto text-[#1f1f1f] text-[17px] leading-[1.5] mb-0">
                        ABM success depends on influencing the entire buying committee, not just one contact.<br />
                        We identify and map key stakeholders within each account, including:
                    </p>

                    <div className="flex justify-center -mt-10 md:-mt-14">
                        <Image
                            src="/acc-base-marketting/steps.png"
                            alt="Buying Committee Mapping"
                            width={903}
                            height={300}
                            className="w-full max-w-[903px] h-auto object-contain"
                        />
                    </div>

                    <h3 className="text-[24px] md:text-[30px] font-bold text-[#111] mb-1 -mt-6">
                        Our Goal
                    </h3>
                    <p className="text-[17px] leading-[1.5] text-[#1f1f1f]">
                        Build familiarity, trust, and brand influence across the complete buying journey.
                    </p>
                </div>
            </section>

            {/* RESEARCH & INSIGHTS SECTION */}
            <section className="py-12 bg-[#eef2f6] overflow-hidden px-4">
                <div className="max-w-[1320px] mx-auto">
                    {/* Top Section */}
                    <div className="flex flex-col lg:flex-row items-center justify-center gap-10 max-w-[1050px] mx-auto">
                        <div className="lg:w-1/2">
                            <h2 className="font-bold text-[30px] md:text-[37px] text-[#3099D5] leading-[1.2] mb-4">
                                Research & Market Intelligence
                            </h2>
                            <p className="text-[18px] md:text-[19px] text-[#5e6573] leading-[1.7] mb-0">
                                We conduct in-depth account research to gather valuable intelligence
                                that helps your team personalize outreach and improve engagement.
                            </p>
                        </div>

                        <div className="lg:w-1/2">
                            <div className="grid grid-cols-2 gap-4 md:gap-5 mx-auto max-w-[400px]">
                                {/* Card 1 */}
                                <div className="bg-white rounded-[14px] p-4 flex flex-col items-center justify-center text-center min-h-[170px] shadow-sm">
                                    <Image src="/acc-base-marketting/real.png" alt="Real" width={50} height={50} className="mb-3" />
                                    <h6 className="font-bold text-[15px] text-[#3099D5] mb-2">Real Insights</h6>
                                    <p className="text-[13px] text-[#7a8291] leading-[1.6] mb-0">Get real insights into target accounts</p>
                                </div>
                                {/* Card 2 */}
                                <div className="bg-white rounded-[14px] p-4 flex flex-col items-center justify-center text-center min-h-[170px] shadow-sm mt-0 md:mt-4">
                                    <Image src="/acc-base-marketting/understand.png" alt="Understand" width={50} height={50} className="mb-3" />
                                    <h6 className="font-bold text-[15px] text-[#3099D5] mb-2">Understand</h6>
                                    <p className="text-[13px] text-[#7a8291] leading-[1.6] mb-0">Understand buyer challenges, priorities and goals</p>
                                </div>
                                {/* Card 3 */}
                                <div className="bg-white rounded-[14px] p-4 flex flex-col items-center justify-center text-center min-h-[170px] shadow-sm">
                                    <Image src="/acc-base-marketting/better1.png" alt="Better" width={50} height={50} className="mb-3" />
                                    <h6 className="font-bold text-[15px] text-[#3099D5] mb-2">Better</h6>
                                    <p className="text-[13px] text-[#7a8291] leading-[1.6] mb-0">Equip your team with intelligence to create personalized outreach</p>
                                </div>
                                {/* Card 4 */}
                                <div className="bg-white rounded-[14px] p-4 flex flex-col items-center justify-center text-center min-h-[170px] shadow-sm mt-0 md:mt-4">
                                    <Image src="/acc-base-marketting/stronger.png" alt="Stronger" width={50} height={50} className="mb-3" />
                                    <h6 className="font-bold text-[15px] text-[#3099D5] mb-2">Stronger Pipeline</h6>
                                    <p className="text-[13px] text-[#7a8291] leading-[1.6] mb-0">Drive stronger conversations and increase opportunities</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Second Section: Survey */}
                    <div className="bg-white mt-12 rounded-[22px] p-8 md:p-12 shadow-md relative max-w-[1050px] mx-auto">
                        <div className="flex flex-col lg:flex-row items-center gap-2">
                            <div className="lg:w-7/12">
                                <h3 className="font-bold text-[24px] md:text-[28px] text-[#3099D5] leading-[1.2] mb-4">
                                    Survey & Insight Programs
                                </h3>
                                <p className="text-[15px] leading-[1.8] text-[#5e6573] max-w-[520px] mb-6">
                                    We design and execute research surveys to collect first-hand
                                    information from your target accounts.
                                </p>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="bg-[#f3f6fb] rounded-[10px] p-4 text-center text-[13px] font-medium text-[#5d6470]">
                                        Design & Launch Targeted Surveys
                                    </div>
                                    <div className="bg-[#f3f6fb] rounded-[10px] p-4 text-center text-[13px] font-medium text-[#5d6470]">
                                        Reach Your Target Accounts
                                    </div>
                                    <div className="bg-[#f3f6fb] rounded-[10px] p-4 text-center text-[13px] font-medium text-[#5d6470]">
                                        Collect & Analyze Responses
                                    </div>
                                    <div className="bg-[#f3f6fb] rounded-[10px] p-4 text-center text-[13px] font-medium text-[#5d6470]">
                                        Deliver Actionable Insights to You
                                    </div>
                                </div>
                            </div>

                            <div className="lg:w-5/12 text-center mt-6 lg:mt-0 flex justify-center">
                                <Image
                                    src="/acc-base-marketting/survey.png"
                                    alt="Survey"
                                    width={360}
                                    height={300}
                                    className="w-full max-w-[360px] rounded-[18px] object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="pb-10 pt-10 px-4 bg-[#eef2f6]">
                <div className="max-w-[1100px] mx-auto">
                    <div className="bg-[#1f79c7] rounded-[32px] px-8 md:px-12 py-10 relative mt-16 overflow-visible">
                        <div className="flex flex-col lg:flex-row items-center gap-10">
                            <div className="lg:w-1/2">
                                <h2 className="text-[32px] md:text-[40px] font-semibold text-white mb-5 leading-[1.2]">
                                    <span className="block whitespace-nowrap">Engage The Right Accounts.</span>
                                    <span className="block whitespace-nowrap">Influence The Right People.</span>
                                    <span className="block whitespace-nowrap">Win More Deals.</span>
                                </h2>
                                <p className="text-[19px] text-white/90 mb-0">
                                    Data, Demand & Research. All working together for ABM success
                                </p>
                            </div>
                            <div className="lg:w-1/2 text-center flex justify-center lg:justify-end lg:-mt-32 relative z-10">
                                <div className="max-w-[400px] w-full">
                                    <Image
                                        src="/dem-gen/CTA Image.png"
                                        alt="CTA"
                                        width={400}
                                        height={400}
                                        className="w-full h-auto object-contain"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
