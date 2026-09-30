'use client';

import Image from 'next/image';

export default function MediaDeckSection() {
  return (
    <section className="py-14 px-6 lg:px-14 bg-white border-t border-gray-50">
      <div className="max-w-[1240px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Left container */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <h2 className="text-[#3099D5] text-3xl sm:text-4xl md:text-[40px] font-bold mb-2 tracking-tight">
            Our Strategy, Your Spotlight!
          </h2>
          <p className="text-[#606060] font-medium text-[20px] sm:text-[22px] md:text-[24px] leading-snug mb-5">
            See How We Position B2B Brands for Maximum Reach and Revenue Impact.
          </p>

          <div>
            <a
              href="/media-deck"
              className="inline-block bg-[#3099D5] hover:bg-[#16243D] text-white font-medium text-[15px] sm:text-[16px] px-7 py-2.5 rounded-md shadow-sm transition-colors"
            >
              Download Now
            </a>
          </div>
        </div>

        {/* Right container (Image) */}
        <div className="md:w-1/2 flex justify-center items-center">
          <Image
            src="/home/corporatedeck.png"
            alt="RDIGS Media Deck 2026"
            width={450}
            height={320}
            className="w-full max-w-[420px] h-auto object-contain drop-shadow-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
