"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#DCF6FF] text-[#16243D] pt-12 pb-0 relative">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 text-[14px]">
          {/* Column 1: Brand Info (wider) */}
          <div className="lg:col-span-3 pr-0 lg:pr-6">
            <Link href="/" className="inline-block mb-4">
              <Image
                src="/images/Home-Main-logo.png"
                alt="RD Info Global Solutions"
                width={200}
                height={70}
                className="h-[70px] w-auto object-contain"
              />
            </Link>
            <h4 className="font-semibold text-[24px] text-[#16243D] mb-3">
              RD Info Global Solutions
            </h4>
            <p className="text-[#16243D] leading-relaxed text-[16px] mb-6">
              To achieve our client’s marketing and ROI goals, our team of industry
              veterans is committed to exceeding their expectations at every turn.
            </p>
            <div className="flex items-center gap-2 font-medium text-[20px] text-[#16243D]">
              <span>Follow us on</span>
              <Link
                href="https://www.linkedin.com/company/rd-info-global-solutions/posts/?feedView=all"
                target="_blank"
                className="hover:opacity-80 transition-opacity"
              >
                <Image
                  src="/email-signature/Linkdin (2).png"
                  alt="LinkedIn"
                  width={24}
                  height={24}
                  className="w-[24px] h-[24px]"
                />
              </Link>
            </div>
          </div>

          {/* Right Section: Organized into Rows */}
          <div className="lg:col-span-9 flex flex-col justify-between pl-0 lg:pl-8">
            {/* Top Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 lg:mb-12">
              {/* Company */}
              <div>
                <h5 className="font-semibold text-[20px] text-[#16243D] mb-4">Company</h5>
                <ul className="space-y-2.5 text-[#16243D] text-[16px]">
                  <li>
                    <Link href="/about1" className="hover:text-[#3099D5] transition-colors">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link href="/career" className="hover:text-[#3099D5] transition-colors">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="/ourdifferentiation" className="hover:text-[#3099D5] transition-colors">
                      Our Differentiation
                    </Link>
                  </li>
                  <li>
                    <Link href="/life" className="hover:text-[#3099D5] transition-colors">
                      Life At RDIGS
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div>
                <h5 className="font-semibold text-[20px] text-[#16243D] mb-4">Resources</h5>
                <ul className="space-y-2.5 text-[#16243D] text-[16px]">
                  <li>
                    <Link href="/casestudies" className="hover:text-[#3099D5] transition-colors">
                      Case Studies
                    </Link>
                  </li>
                  <li>
                    <Link href="/corporatedesk" className="hover:text-[#3099D5] transition-colors">
                      Corporate Deck
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="hover:text-[#3099D5] transition-colors">
                      Events
                    </Link>
                  </li>
                  <li>
                    <Link href="/blog" className="hover:text-[#3099D5] transition-colors">
                      Blogs
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Address */}
              <div>
                <h5 className="font-semibold text-[20px] text-[#16243D] mb-4">Address</h5>
                <ul className="space-y-4 text-[#16243D] text-[16px] leading-snug">
                  <li className="flex items-start gap-2">
                    <Image
                      src="/email-signature/V1.png"
                      alt="US Flag"
                      width={18}
                      height={13}
                      className="h-[13px] w-auto mt-1 flex-shrink-0"
                    />
                    <span>919, North Market Street, Suite 950, Wilmington, Delaware 19801</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image
                      src="/email-signature/V2.png"
                      alt="UK Flag"
                      width={18}
                      height={13}
                      className="h-[13px] w-auto mt-1 flex-shrink-0"
                    />
                    <span>71-75 Shelton Street, Covent Garden, London WC2H 9JQ UNITED KINGDOM</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Image
                      src="/email-signature/V3.png"
                      alt="India Flag"
                      width={18}
                      height={13}
                      className="h-[13px] w-auto mt-1 flex-shrink-0"
                    />
                    <span>012A, Downtown City Vista, Fountain Road, Kharadi, Pune 411014</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Row */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Services */}
              <div>
                <h5 className="font-semibold text-[20px] text-[#16243D] mb-4">Services</h5>
                <ul className="space-y-2.5 text-[#16243D] text-[16px]">
                  <li>
                    <Link href="/b2bservice" className="hover:text-[#3099D5] transition-colors">
                      Demand Amplifier
                    </Link>
                  </li>
                  <li>
                    <Link href="/b2badevertising" className="hover:text-[#3099D5] transition-colors">
                      Account-Based Marketing
                    </Link>
                  </li>
                  <li>
                    <Link href="/b2bsdrasaservice" className="hover:text-[#3099D5] transition-colors">
                      Problem-Aware Lead Generation
                    </Link>
                  </li>
                  <li>
                    <Link href="/contentsyndication" className="hover:text-[#3099D5] transition-colors">
                      Data Verification
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Mail Us */}
              <div>
                <h5 className="font-semibold text-[20px] text-[#16243D] mb-4">Mail Us</h5>
                <div className="flex items-center gap-2 text-[#16243D] text-[16px] mb-4">
                  <Image
                    src="/email-signature/Mail (1).png"
                    alt="Mail"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px]"
                  />
                  <a href="mailto:contact@rdigs.com" className="hover:text-[#3099D5] transition-colors">
                    contact@rdigs.com
                  </a>
                </div>

                <h5 className="font-semibold text-[20px] text-[#16243D] mb-3">Contact No.</h5>
                <ul className="space-y-2 text-[#16243D] text-[16px]">
                  <li className="flex items-center gap-2">
                    <Image
                      src="/email-signature/V1.png"
                      alt="US Flag"
                      width={18}
                      height={13}
                      className="h-[13px] w-auto inline"
                    />
                    <a href="tel:+13023085310" className="hover:text-[#3099D5] transition-colors">
                      US: +1 302-308-5310
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image
                      src="/email-signature/V2.png"
                      alt="UK Flag"
                      width={18}
                      height={13}
                      className="h-[13px] w-auto inline"
                    />
                    <a href="tel:+442075517242" className="hover:text-[#3099D5] transition-colors">
                      UK: +44 20 7551 7242
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <Image
                      src="/email-signature/V3.png"
                      alt="IND Flag"
                      width={18}
                      height={13}
                      className="h-[13px] w-auto inline"
                    />
                    <a href="tel:02046358200" className="hover:text-[#3099D5] transition-colors">
                      IND: 020-46358200
                    </a>
                  </li>
                </ul>
              </div>

              {/* ISO Certified */}
              <div>
                <h5 className="font-semibold text-[20px] text-[#16243D] mb-4">ISO Certified</h5>
                <div className="flex gap-4">
                  <Image
                    src="/images/ISO-LOGO.png"
                    alt="ISO Certified"
                    width={130}
                    height={65}
                    className="h-[65px] w-auto object-contain"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar Container */}
      <div className="bg-white mt-12 py-5 relative">
        {/* Scroll to Top button matching the image design */}
        <div className="absolute right-6 lg:right-10 -top-6">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-[#3099D5] hover:bg-[#207bb3] text-white w-12 h-12 rounded-full flex items-center justify-center transition-colors shadow-lg"
            aria-label="Scroll to top"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 10l7-7m0 0l7 7m-7-7v18" />
            </svg>
          </button>
        </div>

        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[14px] text-[#425466]">
          <div>
            <span>©2025 </span>
            <Link href="https://rdigs.com/" className="text-[#3099D5] hover:underline" target="_blank" rel="noopener noreferrer">
              RD Info Global Solutions
            </Link>
            <span> , All rights reserved.</span>
          </div>
          <div className="flex flex-wrap items-center gap-6 pr-12 lg:pr-16">
            <Link href="/privacypolicy" className="text-[#3099D5] hover:underline">
              Privacy Policy
            </Link>
            <Link href="/ccpa" className="text-[#3099D5] hover:underline">
              CCPA
            </Link>
            <Link href="/terms" className="text-[#3099D5] hover:underline">
              Terms &amp; Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
