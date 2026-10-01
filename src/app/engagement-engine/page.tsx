import Link from 'next/link';

export default function EngagementEnginePage() {
  return (
    <div className="bg-white font-sans text-gray-800">
      {/* Hero Section */}
      <section className="bg-[#eff6fb] py-20 text-center px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-[#3099D5] mb-4">
          RDIGS&apos; Engagement Engine
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Demand Generation That Doesn&apos;t Just Capture Leads. It Creates Engagement.
        </p>
      </section>

      {/* Why Most Campaigns Fail */}
      <section className="py-20 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-4">Why Most Campaigns Fail To Engage</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          In today&apos;s noisy digital world, your prospects are bombarded with the same messages from dozens of vendors. That&apos;s why engagement often slips off — even when your campaigns look great on paper.
        </p>
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {/* Card 1 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <h3 className="text-[#3099D5] font-semibold mb-3">Market Saturation</h3>
            <p className="text-sm text-gray-600">Your buyers are seeing too many of the same pitches, making it nearly impossible to stand out.</p>
          </div>
          {/* Card 2 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <h3 className="text-[#3099D5] font-semibold mb-3">Low Brand Recall</h3>
            <p className="text-sm text-gray-600">Even if they read your content, most won&apos;t remember your brand a few weeks later.</p>
          </div>
          {/* Card 3 */}
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-[0_4px_25px_rgba(0,0,0,0.05)]">
            <h3 className="text-[#3099D5] font-semibold mb-3">No Personalization at Scale</h3>
            <p className="text-sm text-gray-600">Content often speaks to a general problem, not the specific need of your prospect.</p>
          </div>
        </div>
      </section>

      {/* The Rule of 7 */}
      <section className="py-16 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-8">The Rule of 7: Why Repetition Wins</h2>
        <div className="max-w-4xl mx-auto border border-gray-200 rounded-2xl p-10 bg-white shadow-sm">
          <p className="text-gray-700 font-medium mb-6">It takes <span className="font-bold">seven touches</span> before a prospect even remembers you.</p>
          <p className="text-[#3099D5] font-semibold mb-6 flex flex-wrap justify-center items-center gap-2">
            <span>Repetition builds familiarity</span>
            <span className="text-gray-400">→</span>
            <span>Familiarity builds trust</span>
            <span className="text-gray-400">→</span>
            <span>Trust drives decisions</span>
          </p>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">
            At RDIGS, we&apos;ve built our engagement engine around this proven principle — ensuring your brand stays top of mind long before a buying decision is made.
          </p>
        </div>
      </section>

      {/* How RDIGS Fixes Low Engagement */}
      <section className="py-20 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-4">How RDIGS Fixes Low Engagement</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          We&apos;ve re-engineered demand generation so your campaigns don&apos;t just collect leads — they build meaningful, memorable engagement.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-[#3099D5] font-semibold mb-3">Relevance Within a Saturated Market</h3>
            <p className="text-sm text-gray-600">We run regular surveys across our subscriber base to understand intent and identify who is most likely to respond.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-[#3099D5] font-semibold mb-3">Improved Brand Recall</h3>
            <p className="text-sm text-gray-600">Before we even generate leads, we ensure your ICP sees your branding at least 12 times. After lead generation, we retarget based on intent with tailored display banners that strengthen awareness and recall.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-[#3099D5] font-semibold mb-3">Personalization at Scale</h3>
            <p className="text-sm text-gray-600">Every lead is asked 4 qualifying questions to uncover their specific need. Our follow-up display natively retargets that exact need — creating relevance that actually drives conversion.</p>
          </div>
          <div className="bg-white border border-gray-100 rounded-xl p-8 shadow-sm">
            <h3 className="text-[#3099D5] font-semibold mb-3">Fixing Low Intent Post-Capture</h3>
            <p className="text-sm text-gray-600">We don&apos;t stop once the lead is captured. With 200,000+ targeted impressions, we reinforce your message and nurture intent until prospects are sales-ready.</p>
          </div>
        </div>
      </section>

      {/* What a Typical Campaign Looks Like */}
      <section className="py-20 px-6 container mx-auto text-center bg-gray-50/50">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-4">What a Typical Campaign Looks Like</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-12">
          Every campaign is built around your ICP and designed to deliver both engagement and conversions.
        </p>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-left mb-12">
          {/* Box 1 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-blue-500">
            <h3 className="text-[#3099D5] font-semibold mb-2">Audience Profiling</h3>
            <p className="text-sm text-gray-600">We ask your ICP qualifying questions like: "What best describes your current position regarding X?"</p>
          </div>
          {/* Box 2 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-red-400">
            <h3 className="text-[#3099D5] font-semibold mb-2">Pre-Lead Engagement</h3>
            <p className="text-sm text-gray-600">250,000 Impressions delivered to your ICP before lead generation.</p>
          </div>
          {/* Box 3 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-green-500">
            <h3 className="text-[#3099D5] font-semibold mb-2">Lead Volume</h3>
            <p className="text-sm text-gray-600">400 qualified leads delivered.</p>
          </div>
          {/* Box 4 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-cyan-400">
            <h3 className="text-[#3099D5] font-semibold mb-2">Post-Lead Engagement</h3>
            <p className="text-sm text-gray-600">An additional 200,000 Impressions aimed directly at your leads after capture.</p>
          </div>
          {/* Box 5 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-orange-400">
            <h3 className="text-[#3099D5] font-semibold mb-2">Multi-Channel Approach</h3>
            <p className="text-sm text-gray-600">Email + Telemarketing for maximum reach and conversion.</p>
          </div>
          {/* Box 6 */}
          <div className="bg-white rounded-xl p-6 shadow-sm border-l-4 border-purple-500">
            <h3 className="text-[#3099D5] font-semibold mb-2">Duration</h3>
            <p className="text-sm text-gray-600">6 months.</p>
          </div>
        </div>

        <div className="max-w-md mx-auto border-2 border-dashed border-[#3099D5] bg-[#f0f8ff] rounded-xl p-6 mb-8">
          <p className="text-[#3099D5] font-semibold">Investment</p>
          <p className="text-2xl font-bold text-[#16243D]">$20,000</p>
        </div>

        <p className="text-sm text-gray-600 max-w-xl mx-auto">
          This isn&apos;t just lead gen. It&apos;s <span className="font-bold">demand generation engineered for brand visibility, trust, and conversion.</span>
        </p>
      </section>

      {/* Why RDIGS? */}
      <section className="py-20 px-6 container mx-auto text-center">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-4">Why RDIGS?</h2>
        <p className="text-gray-600 max-w-3xl mx-auto mb-12">
          For nearly a decade, RDIGS has been helping B2B marketers and sales leaders bridge the gap between brand exposure and sales-ready pipeline.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-5xl mx-auto mb-12">
          <div className="bg-white border border-gray-200 rounded-full py-3 px-6 shadow-sm flex items-center gap-2">
            <span className="text-green-500 font-bold">✔</span>
            <span className="text-sm font-medium text-gray-700">Proven multi-channel campaigns</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-full py-3 px-6 shadow-sm flex items-center gap-2">
            <span className="text-blue-500 font-bold">◆</span>
            <span className="text-sm font-medium text-gray-700">Proprietary content syndication network</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-full py-3 px-6 shadow-sm flex items-center gap-2">
            <span className="text-purple-500 font-bold">✉</span>
            <span className="text-sm font-medium text-gray-700">Experienced email & telemarketing specialists</span>
          </div>
          <div className="bg-white border border-gray-200 rounded-full py-3 px-6 shadow-sm flex items-center gap-2">
            <span className="text-pink-500 font-bold">★</span>
            <span className="text-sm font-medium text-gray-700">Engagement-first methodology rooted in buyer psychology</span>
          </div>
        </div>

        <p className="font-bold text-gray-800">
          With RDIGS, your demand generation doesn&apos;t just fill a database — it fuels measurable growth.
        </p>
      </section>

      {/* CTA Section */}
      <section className="bg-[#eff6fb] py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-[#3099D5] mb-4">Let&apos;s Build Engagement That Converts</h2>
        <p className="text-gray-600 max-w-2xl mx-auto mb-8">
          Your buyers won&apos;t remember a one-time campaign, but they will remember the brand that keeps showing up with relevance, value, and consistency.
        </p>
        <Link 
          href="/contact" 
          className="inline-block bg-[#3099D5] text-white font-semibold py-3 px-8 rounded-md hover:bg-blue-600 transition-colors shadow-md"
        >
          Get Started
        </Link>
      </section>
    </div>
  );
}
