import Image from 'next/image';
import { FaBullseye, FaVolumeMute, FaUsers, FaCheckSquare } from 'react-icons/fa';

export default function EngagementEnginePage() {
  return (
    <div className="min-h-screen bg-white text-[#16243D]">
      {/* 1. Hero Section */}
      <section className="bg-[#0b79d0] text-white py-20 px-6 text-center relative">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">The RDIGS Engagement Engine</h1>
          <p className="text-lg md:text-xl font-medium">
            Demand Generation That Doesn&apos;t Just Capture Leads, It Builds Memory and Momentum
          </p>
        </div>
      </section>

      {/* 2. Introduction */}
      <section className="py-12 px-6 max-w-5xl mx-auto text-center">
        <p className="text-gray-700 text-[16px] md:text-[18px] leading-relaxed">
          The RDIGS Engagement Engine is our proprietary approach to demand generation. It is built on one simple idea: <strong>engagement matters more than exposure.</strong> We combine verified data, intent insights, and consistent visibility to make sure your brand stays front of mind, so when buyers are ready to act, they remember you.
        </p>
      </section>

      {/* 3. Why Campaigns Fail to Engage */}
      <section className="py-12 px-6 max-w-[1240px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-4">Why Campaigns Fail to Engage</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-10 text-[16px]">
          A lot of campaigns deliver reach, but not recognition. When every brand sounds the same, it is hard for buyers to remember who you are when it counts.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-[#F8F9FA] p-8 rounded-xl flex flex-col items-center">
            <div className="w-14 h-14 bg-[#0b79d0] rounded-full flex items-center justify-center text-white text-2xl mb-5">
              <FaBullseye />
            </div>
            <h3 className="font-bold text-[18px] mb-2">Market Saturation</h3>
            <p className="text-gray-600 text-[15px]">Buyers are seeing too many of the same messages and tune out.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-[#F8F9FA] p-8 rounded-xl flex flex-col items-center">
            <div className="w-14 h-14 bg-[#0b79d0] rounded-full flex items-center justify-center text-white text-2xl mb-5">
              <FaVolumeMute />
            </div>
            <h3 className="font-bold text-[18px] mb-2">Low Brand Recall</h3>
            <p className="text-gray-600 text-[15px]">Awareness fades before prospects are ready to engage.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-[#F8F9FA] p-8 rounded-xl flex flex-col items-center">
            <div className="w-14 h-14 bg-[#0b79d0] rounded-full flex items-center justify-center text-white text-2xl mb-5">
              <FaUsers />
            </div>
            <h3 className="font-bold text-[18px] mb-2">No Personalisation at Scale</h3>
            <p className="text-gray-600 text-[15px]">Generic content struggles to connect meaningfully.</p>
          </div>
        </div>
      </section>

      {/* 4. The Rule of 7 */}
      <section className="bg-[#F2F7FB] py-16 px-6 text-center">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-3xl font-bold text-[#3099D5] mb-4">The Rule of 7: Why Repetition Wins</h2>
          <p className="text-gray-600 max-w-4xl mx-auto mb-4 text-[16px] leading-relaxed">
            It takes around seven touchpoints before a buyer begins to recognise and trust a brand. That is why repetition matters. We design campaigns that build familiarity and reinforce relevance, ensuring your brand is recognised and remembered before a sales conversation ever begins.
          </p>
          <p className="text-[#16243D] font-bold text-[16px]">
            Repetition builds familiarity. Familiarity builds trust. Trust drives decisions.
          </p>
        </div>
      </section>

      {/* 5. How the RDIGS Engagement Engine Works */}
      <section className="py-16 px-6 max-w-[1240px] mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-4">How the RDIGS Engagement Engine Works</h2>
        <p className="text-gray-600 max-w-4xl mx-auto mb-10 text-[16px] leading-relaxed">
          We have re-engineered demand generation around one principle: visibility plus relevance equals recall. Our Engagement Engine does not just generate leads; it builds brand recognition that drives conversion when timing aligns.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Step 1 */}
          <div className="border-2 border-[#3099D5] rounded-xl p-8 flex flex-col items-center">
            <div className="text-[#3099D5] text-2xl mb-4">
              <FaCheckSquare />
            </div>
            <h3 className="font-bold text-[18px] mb-3">1. Relevance Within a Saturated Market</h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              We align every campaign to your Ideal Customer Profile (ICP) and tailor your message to the challenges that matter most to your audience.
            </p>
          </div>
          {/* Step 2 */}
          <div className="border-2 border-[#3099D5] rounded-xl p-8 flex flex-col items-center">
            <div className="text-[#3099D5] text-2xl mb-4">
              <FaCheckSquare />
            </div>
            <h3 className="font-bold text-[18px] mb-3">2. Improved Brand Recall</h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              We combine intent data with display campaigns that keep your brand visible across the channels your audience actually uses.
            </p>
          </div>
          {/* Step 3 */}
          <div className="border-2 border-[#3099D5] rounded-xl p-8 flex flex-col items-center">
            <div className="text-[#3099D5] text-2xl mb-4">
              <FaCheckSquare />
            </div>
            <h3 className="font-bold text-[18px] mb-3">3. Personalisation at Scale</h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              Our data-driven approach delivers consistent, relevant messages that feel personal, not programmatic.
            </p>
          </div>
          {/* Step 4 */}
          <div className="border-2 border-[#3099D5] rounded-xl p-8 flex flex-col items-center">
            <div className="text-[#3099D5] text-2xl mb-4">
              <FaCheckSquare />
            </div>
            <h3 className="font-bold text-[18px] mb-3">4. Sustained Engagement Post-Capture</h3>
            <p className="text-gray-600 text-[14px] leading-relaxed">
              We nurture leads with intelligent sequencing, retargeting, and reinforcement, keeping your brand remembered long after the first interaction.
            </p>
          </div>
        </div>
      </section>

      {/* 6. How the Engagement Engine Reinforces the Buying Journey */}
      <section className="py-16 px-6">
        <div className="max-w-[1240px] mx-auto bg-[#F5F7FA] rounded-3xl p-8 md:p-12 lg:p-16 flex flex-col items-center">
          <div className="flex flex-col lg:flex-row items-center gap-10 w-full mb-8">
            <div className="flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#3099D5] mb-6 leading-tight">
                How the Engagement Engine Reinforces the Buying Journey
              </h2>
              <p className="text-gray-600 text-[16px] leading-relaxed mb-4">
                Not every buyer is ready to act the moment a lead is generated. Many are still learning, comparing, or building internal consensus. That is where consistent visibility becomes critical. The RDIGS Engagement Engine uses ABM display to keep your brand remembered at every stage of the buyer journey, from first contact to final decision.
              </p>
              <p className="text-[#16243D] font-bold text-[16px] leading-relaxed">
                Through repeated, relevant impressions, we help build familiarity, trust, and ultimately drive shortlist placement when it matters most.
              </p>
            </div>
            <div className="flex-1 w-full bg-white rounded-xl shadow-lg p-6 flex justify-center items-center min-h-[300px]">
              {/* Placeholder for the diagram/image shown in the screenshot */}
              <Image
                src="/rdigs-engagement-engine.png"
                alt="RDIGS Engagement Engine Diagram"
                width={500}
                height={300}
                className="object-contain w-full h-full"
              />
            </div>
          </div>
          <p className="text-gray-500 italic text-[14px] text-center w-full mt-2">
            Caption: ABM display keeps your brand top of mind, from first touch to final decision.
          </p>
        </div>
      </section>

      {/* 7. What a Typical Campaign Looks Like */}
      <section className="py-16 px-6 max-w-[1000px] mx-auto">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-6 text-center">What a Typical Campaign Looks Like</h2>
        <p className="text-gray-700 text-center mb-8">
          Every RDIGS campaign is designed to deliver both engagement and qualified conversations:
        </p>
        <ul className="list-disc list-outside pl-5 md:pl-10 space-y-3 text-gray-700 text-[16px]">
          <li><strong>Audience Profiling:</strong> Deep analysis of your ICP and message alignment.</li>
          <li><strong>Pre-Lead Engagement:</strong> Display and email visibility to build recognition before lead capture.</li>
          <li><strong>Lead Capture:</strong> Verified, compliant, and insight-enriched data delivery.</li>
          <li><strong>Post-Lead Engagement:</strong> Retargeting and nurture to maintain awareness.</li>
          <li><strong>Multi-Channel Approach:</strong> Email, display, and voice, integrated for maximum recall.</li>
          <li><strong>Typical Duration:</strong> 8–12 weeks.</li>
          <li><strong>Typical Investment:</strong> From $10,000 depending on audience and scope.</li>
        </ul>
        <p className="text-center font-bold text-[#16243D] mt-8 text-[16px]">
          This is not just lead generation. It is demand generation engineered for visibility, trust, and conversion.
        </p>
      </section>

      {/* 8. Why RDIGS? */}
      <section className="bg-[#0b79d0] text-white py-12 px-6 text-center">
        <div className="max-w-[1240px] mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why RDIGS?</h2>
          <p className="text-[16px] md:text-[18px] font-medium leading-relaxed max-w-5xl mx-auto">
            Drawing on years of experience in lead generation and demand marketing, RDIGS helps B2B brands connect visibility with measurable engagement. The RDIGS Engagement Engine brings together verified data, intent insights, and consistent visibility to make sure your brand is not just seen, it is remembered.
          </p>
        </div>
      </section>
    </div>
  );
}
