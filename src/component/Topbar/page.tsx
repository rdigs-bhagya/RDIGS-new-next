'use client';

import Link from 'next/link';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaMapMarkerAlt,
  FaEnvelope,
} from 'react-icons/fa';

const Topbar = () => {
  return (
    <div className="hidden lg:block bg-white border-b border-gray-100 py-2">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Left Section */}
          <div className="flex items-center text-xs">
            <div className="flex items-center border-r border-gray-300 pr-3.5">
              <Link href="#" className="flex items-center text-[#555555] hover:text-[#3099D5] transition-colors">
                <FaMapMarkerAlt className="text-[#3099D5] mr-1.5 text-[11.5px]" />
                <span className="text-[12px] font-medium">Find A Location</span>
              </Link>
            </div>
            <div className="pl-3.5">
              <Link href="mailto:contact@rdigs.com" className="flex items-center text-[#555555] hover:text-[#3099D5] transition-colors">
                <FaEnvelope className="text-[#3099D5] mr-1.5 text-[11.5px]" />
                <span className="text-[12px] font-medium">contact@rdigs.com</span>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3.5 text-xs">
            <Link href="https://www.facebook.com/RDInfoGlobalSolutions" target="_blank" className="text-[#3099D5] hover:text-[#16243D] transition-colors">
              <FaFacebookF className="text-[11.5px]" />
            </Link>
            <Link href="https://twitter.com/rdigsb2b" target="_blank" className="text-[#3099D5] hover:text-[#16243D] transition-colors">
              <FaTwitter className="text-[11.5px]" />
            </Link>
            <Link href="https://www.instagram.com/rdinfoglobalsolutions/" target="_blank" className="text-[#3099D5] hover:text-[#16243D] transition-colors">
              <FaInstagram className="text-[11.5px]" />
            </Link>
            <Link href="https://www.linkedin.com/company/rd-info-global-solutions/" target="_blank" className="text-[#3099D5] hover:text-[#16243D] transition-colors">
              <FaLinkedinIn className="text-[11.5px]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
