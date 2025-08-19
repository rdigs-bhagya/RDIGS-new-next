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
    <div className="hidden lg:block bg-gray-100 py-4">
      {/* ↑ py-4 instead of py-2 for more vertical padding */}
      <div className="container mx-auto px-6">
        {/* ↑ px-6 instead of px-4 for more horizontal padding */}
       <div className="flex flex-col lg:flex-row items-center justify-between gap-2 p-1">

          {/* Left Section */}
          <div className="flex flex-wrap justify-center lg:justify-start items-center text-sm text-gray-600">
            <div className="flex items-center border-r border-blue-500 pr-4">
              <Link href="#">
                <span className="flex items-center hover:text-blue-600">
                  <FaMapMarkerAlt className="text-[#3099D5] mr-2" />
                  Find A Location
                </span>
              </Link>
            </div>
            <div className="pl-4">
              <Link href="mailto:contact@rdigs.com">
                <span className="flex items-center hover:text-blue-600">
                  <FaEnvelope className="text-[#3099D5]  mr-2" />
                  contact@rdigs.com
                </span>
              </Link>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex justify-center lg:justify-end items-center gap-4 text-[#3099D5]-600 text-sm">
            <Link href="https://www.facebook.com/RDInfoGlobalSolutions" target="_blank">
              <FaFacebookF className="text-[#3099D5] hover:text-[#3099D5]" />
            </Link>
            <Link href="https://twitter.com/rdigsb2b" target="_blank">
              <FaTwitter className="text-[#3099D5] hover:text-[#3099D5]" />
            </Link>
            <Link href="https://www.instagram.com/rdinfoglobalsolutions/" target="_blank">
              <FaInstagram className="text-[#3099D5] hover:text-[#3099D5]" />
            </Link>
            <Link href="https://www.linkedin.com/company/rd-info-global-solutions/" target="_blank">
              <FaLinkedinIn className="text-[#3099D5] hover:text-[#3099D5]" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
