"use client";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#DCF6FF] text-black pt-5 pb-0">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Section */}
          <div className="w-[50%]">
            <Link href="/" className="inline-block mb-3">
              <Image
                src="/img/Home-Main-logo.png"
                alt="Logo"
                width={200}
                height={70}
                className="h-[70px] w-auto"
              />
            </Link>
            <h4 className="font-bold text-lg">RD Info Global Solutions</h4>
            <p className="mt-2 w-[80%] text-sm">
              To achieve our client’s marketing and ROI goals, our team of
              industry veterans is committed to exceeding their expectations at
              every turn.
            </p>
            <h5 className="flex items-center gap-2 mt-4 font-medium">
              Follow us on
              <Link
                href="https://www.linkedin.com/company/rd-info-global-solutions/posts/?feedView=all"
                target="_blank"
              >
                <Image
                  src="/img/email-signature/Linkdin (2).png"
                  alt="LinkedIn"
                  width={30}
                  height={30}
                />
              </Link>
            </h5>
          </div>

          {/* Right Section */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            {/* Company */}
            <div>
              <h5 className="font-semibold mb-2">Company</h5>
              <ul className="space-y-1">
                <li>
                  <Link href="/about1" className="hover:text-[#3099D5]">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/career" className="hover:text-[#3099D5]">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/ourdifferentiation"
                    className="hover:text-[#3099D5]"
                  >
                    Our Differentiation
                  </Link>
                </li>
                <li>
                  <Link href="/life" className="hover:text-[#3099D5]">
                    Life At RDIGS
                  </Link>
                </li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h5 className="font-semibold mb-2">Resources</h5>
              <ul className="space-y-1">
                <li>
                  <Link href="/casestudies" className="hover:text-[#3099D5]">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link href="/corporatedesk" className="hover:text-[#3099D5]">
                    Corporate Deck
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-[#3099D5]">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="hover:text-[#3099D5]">
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            {/* Address */}
            <div>
              <h5 className="font-semibold mb-2">Address</h5>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <Image
                    src="/img/email-signature/V1.png"
                    alt="USA"
                    width={20}
                    height={20}
                  />
                  Delaware, USA
                </li>
                <li className="flex gap-2">
                  <Image
                    src="/img/email-signature/V2.png"
                    alt="UK"
                    width={20}
                    height={20}
                  />
                  71-75 Shelton Street, Covent Garden, London WC2H 9JQ, UK
                </li>
                <li className="flex gap-2">
                  <Image
                    src="/img/email-signature/V3.png"
                    alt="Pune"
                    width={20}
                    height={20}
                  />
                  523B, Downtown City Vista, Fountain Road, Kharadi, Pune 411014
                </li>
              </ul>
            </div>

            {/* Services */}
            <div>
              <h5 className="font-semibold mb-2">Services</h5>
              <ul className="space-y-1">
                <li>
                  <Link href="/b2bservice" className="hover:text-[#3099D5]">
                    B2B Lead Generation
                  </Link>
                </li>
                <li>
                  <Link href="/b2badevertising" className="hover:text-[#3099D5]">
                    B2B Advertising
                  </Link>
                </li>
                <li>
                  <Link href="/b2bsdrasaservice" className="hover:text-[#3099D5]">
                    B2B SDR as a Service
                  </Link>
                </li>
                <li>
                  <Link href="/contentsyndication" className="hover:text-[#3099D5]">
                    Content Syndication
                  </Link>
                </li>
              </ul>
            </div>

            {/* Mail Us */}
            <div>
              <h5 className="font-semibold mb-2">Mail Us</h5>
              <div className="flex gap-2 items-center mb-2">
                <Image
                  src="/img/email-signature/Mail (1).png"
                  alt="Mail"
                  width={25}
                  height={25}
                />
                contact@rdigs.com
              </div>
              <h5 className="font-semibold mt-3">Contact No.</h5>
              <ul className="space-y-1">
                <li className="flex gap-2 items-center">
                  <Image
                    src="/img/email-signature/V1.png"
                    alt="US"
                    width={23}
                    height={23}
                  />
                  US: +1 302 560 0010
                </li>
                <li className="flex gap-2 items-center">
                  <Image
                    src="/img/email-signature/V2.png"
                    alt="UK"
                    width={23}
                    height={23}
                  />
                  UK: +44 121 368 6536
                </li>
              </ul>
            </div>

            {/* ISO Certified */}
            <div>
              <h5 className="font-semibold mb-2">ISO Certified</h5>
              <Image
                src="/img/ISO-LOGO.png"
                alt="ISO"
                width={120}
                height={40}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="container mx-auto py-4 bg-white mt-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 text-sm">
          <div>
            <span>©2025 </span>
            <Link
              href="https://rdigs.com/"
              className="border-b border-[#3099D5] text-[#3099D5]"
              target="_blank"
              rel="noopener noreferrer"
            >
              RD Info Global Solutions
            </Link>
            , All rights reserved.
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/privacypolicy"
              className="text-black hover:text-[#3099D5]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Privacy Policy
            </Link>
            <Link
              href="/ccpa"
              className="text-black hover:text-[#3099D5]"
              target="_blank"
              rel="noopener noreferrer"
            >
              CCPA
            </Link>
            <Link
              href="/terms"
              className="text-black hover:text-[#3099D5]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Terms & Conditions
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
