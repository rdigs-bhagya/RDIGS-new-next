"use client";

import Image from "next/image";

export default function B2BLeadGeneration() {
  const steps = [
    {
      id: 1,
      title: "Capture Leads the App Store",
      img: "/detail-service/bsb-sdr-as-a-service/steps/Leads-the-App-Store.png",
    },
    {
      id: 2,
      title: "Distribute Leads",
      img: "/detail-service/bsb-sdr-as-a-service/steps/Distribute-Leads.png",
    },
    {
      id: 3,
      title: "Qualify Leads",
      img: "/detail-service/bsb-sdr-as-a-service/steps/Qualify-Leads.png",
    },
    {
      id: 4,
      title: "Deal Closure",
      img: "/detail-service/bsb-sdr-as-a-service/steps/Deal-Closure.png",
    },
    {
      id: 5,
      title: "Sales Leads Follow-Ups",
      img: "/detail-service/bsb-sdr-as-a-service/steps/Sales-Leads-Follow-Ups.png",
    },
    {
      id: 6,
      title: "Sales Calls",
      img: "/detail-service/bsb-sdr-as-a-service/steps/Sales-call.png",
    },
  ]
  return (
    <>
      <div className="container mx-auto px-5 md:px-10 py-5">

        {/* ================= ROW 1 ================= */}
        <div className="flex flex-col md:flex-row items-center mb-2">

          {/* LEFT CONTENT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-[24px] text-[#3099D5] font-semibold">
              B2B SDR as a Service
            </h4>

            <h1 className="mt-2 text-[40px] text-black font-bold leading-tight">
              B2B SDR as a Service
            </h1>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Create predictable sales pipelines and establish market share in new verticals with RDIGS’s SDR as a Service. Reach more prospects quickly and efficiently. Turn marketing-qualified leads into sales-qualified leads. Set appointments with high-quality leads, close more deals and grow your sales revenue.
            </p>

            <a
              href="#"
              className="inline-block mt-5 bg-primary text-white rounded-full py-2 px-6"
            >
              Read More
            </a>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
              <Image
                src="/detail-service/bsb-sdr-as-a-service/b2bsdr1.png"
                alt="B2B Lead Generation"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* ================= ROW 2 ================= */}
        <div className="flex flex-col md:flex-row items-center mb-2">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none mt-10 md:mt-0">
            <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
              <Image
                src="/detail-service/bsb-sdr-as-a-service/b2bsdr2.png"
                alt="MQL Generation"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-[24px] text-[#3099D5] font-semibold mb-1">
              RESOURCE EFFICIENCY
            </h4>

            <h1 className="text-[40px] text-black font-bold leading-tight">
              Do More with Your Marketing Budget
            </h1>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Maximize your marketing spend. Eliminate costs like travel, accommodation, and in-person meetings with potential leads. Save time and scale marketing processes by selling from the convenience of your office.
            </p>

            <a
              href="#"
              className="inline-block mt-5 bg-primary text-white rounded-full py-2 px-6"
            >
              Read More
            </a>
          </div>
        </div>

        {/* ================= ROW 3 ================= */}
        <div className="flex flex-col md:flex-row items-center mb-2">

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-[24px] text-[#3099D5] font-semibold">
              DATA-DRIVEN PREDICTION
            </h4>

            <h1 className="mt-2 text-[40px] text-black font-bold leading-tight">
              Predict Revenue Based on Performance
            </h1>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Predict revenue flow based on inside sales reps performance. Keep tabs on day-to-day data like the number of calls made, demos booked, price quotes sent, and contracts signed among others. Adjust and improve your sales process accordingly to boost revenue.
            </p>

            <a
              href="#"
              className="inline-block mt-5 bg-primary text-white rounded-full py-2 px-6"
            >
              Read More
            </a>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center 
           mt-10 md:mt-0">
            <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
              <Image
                src="/detail-service/bsb-sdr-as-a-service/b2bsdr3.png"
                alt="MQL Qualification"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>

        {/* ================= ROW 4 ================= */}
        <div className="flex flex-col md:flex-row items-center">

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center order-1 md:order-none mt-10 md:mt-0">
            <div className="relative w-[320px] h-[280px] md:w-[420px] md:h-[340px]">
              <Image
                src="/detail-service/bsb-sdr-as-a-service/b2bsdr4.png"
                alt="BANT Qualification"
                fill
                className="object-contain"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-[24px] text-[#3099D5] font-semibold">
              BETTER EXPERIENCE
            </h4>

            <h1 className="mt-2 text-[40px] text-black font-bold leading-tight">
              Target Leads with Custom Sales Pitches
            </h1>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Adapt your sales pitch to individual prospect’s needs and preferences. Give leads prompt responses to their concerns and queries. Close more deals and grow sales revenue with positive lead experiences.
            </p>

            <a
              href="#"
              className="inline-block mt-5 bg-primary text-white rounded-full py-2 px-6"
            >
              Read More
            </a>
          </div>
        </div>

        {/* ================= ROW 5 ================= */}
        <div className="flex flex-col md:flex-row items-center mb-2">

          {/* TEXT */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h4 className="text-[24px] text-[#3099D5] font-semibold">
              WIDER REACH
            </h4>

            <h1 className="mt-2 text-[40px] text-black font-bold leading-tight">
              Access Cross-Border Markets
            </h1>

            <p className="mt-4 text-gray-600 text-base leading-relaxed">
              Eliminate distance barriers. Expand your geographic reach and grow your customer base. Reach potential buyers across regional and country borders at affordable costs.
            </p>

            <a
              href="#"
              className="inline-block mt-5 bg-primary text-white rounded-full py-2 px-6"
            >
              Read More
            </a>
          </div>

          {/* IMAGE */}
          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
            <div className="relative w-[320px] h-[260px] md:w-[420px] md:h-[320px]">
              <Image
                src="/detail-service/bsb-sdr-as-a-service/b2bsdr5.png"
                alt="MQL Qualification"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto py-5 px-4 text-center">
        {/* Heading */}
        <div className="mx-auto mb-10" style={{ maxWidth: "700px" }}>
          <h4 className="text-[#3099D5] text-[24px] font-semibold mb-2">
            INSIDE SALES MARKETING APPROACH 
          </h4>
          <h1 className="text-3xl md:text-4xl  font-semibold">
            Grow Your Sales with RDIGS’s 6-Step Inside Sales Process
          </h1>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
          {steps.map((step) => (
            <div key={step.id} className="flex justify-center">
              <div 
                className="relative bg-white shadow border border-gray-300 text-center flex flex-col items-center justify-center
                   transition-transform duration-300 ease-in-out
                   hover:scale-105 hover:shadow-lg"
                style={{ width: "150px", height: "180px" }}
              >
                {/* Step Number Badge */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#3099D5] text-white text-sm flex items-center justify-center font-semibold">
                  {step.id}
                </div>

                {/* Icon */}
                <Image
                  src={step.img}
                  alt={step.title}
                  width={60}
                  height={60}
                  className="mb-3"
                />

                {/* Title */}
                <h6 className="text-sm font-medium px-2">{step.title}</h6>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  );
}
