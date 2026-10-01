'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhoneAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | 'company' | 'products' | 'strategies' | 'resources'>(null);
  const [mobileDropdown, setMobileDropdown] = useState<null | 'company' | 'products' | 'strategies' | 'resources'>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 80) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [menuOpen]);

  const toggleDropdown = (name: 'company' | 'products' | 'strategies' | 'resources') => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const toggleMobileDropdown = (name: 'company' | 'products' | 'strategies' | 'resources') => {
    setMobileDropdown((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
    setMobileDropdown(null);
  };

  const linkBase =
    'px-3 py-1.5 hover:text-[#3099D5] text-[#606060] font-bold text-[15px] transition-colors whitespace-nowrap flex items-center gap-1';
  const dropdownLinkBase =
    'block px-4 py-2 hover:bg-[#F0F9FD] hover:text-[#3099D5] text-[#606060] font-medium text-[14px] transition-colors';

  return (
    <header
      className={`sticky top-0 z-[999] bg-white shadow-sm transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 py-2.5">
        {/* Left: Logo + Desktop Navigation together */}
        <div className="flex items-center gap-4 lg:gap-6 xl:gap-8">
          {/* Logo */}
          <Link href="/" onClick={closeAll} className="flex items-center flex-shrink-0">
            <Image
              src="/images/Home-Main-logo.png"
              alt="RD Info Global Solutions"
              width={75}
              height={75}
              className="h-[50px] w-auto object-contain"
              priority
            />
          </Link>

          {/* Middle Navigation Pill Container - Desktop (lg+) */}
          <div className="hidden lg:flex items-center bg-[#F2F5F9] rounded-lg px-4 xl:px-6 py-2 shadow-sm">
            <ul className="flex items-center gap-2 xl:gap-4">
              {/* Home Icon */}
              <li>
                <Link
                  href="/"
                  onClick={closeAll}
                  className="flex items-center p-1.5 hover:opacity-80 transition-opacity"
                  title="Home"
                >
                  <Image
                    src="/images/Home-Icon.png"
                    alt="Home"
                    width={20}
                    height={20}
                    className="w-[20px] h-[20px] object-contain opacity-75 hover:opacity-100"
                  />
                </Link>
              </li>

              {/* Company Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpenDropdown('company')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('company')}
                  aria-expanded={openDropdown === 'company'}
                  className={linkBase}
                >
                  <span>Company</span>
                  <FaChevronDown
                    className={`text-[10px] text-[#777777] transition-transform duration-200 ${openDropdown === 'company' ? 'rotate-180 text-[#3099D5]' : ''
                      }`}
                  />
                </button>
                <div
                  className={`${openDropdown === 'company' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    } absolute left-0 top-full pt-1.5 w-48 transition-all duration-200 z-50`}
                >
                  <div className="bg-white shadow-lg rounded-md border border-gray-100 py-1.5">
                    <Link href="/About" onClick={closeAll} className={dropdownLinkBase}>
                      About Us
                    </Link>
                    <Link href="/our-differentiation" onClick={closeAll} className={dropdownLinkBase}>
                      Our Differentiation
                    </Link>
                    <Link href="/career" onClick={closeAll} className={dropdownLinkBase}>
                      Career
                    </Link>
                    <Link href="/life-at-rdigs" onClick={closeAll} className={dropdownLinkBase}>
                      Life At RDIGS
                    </Link>
                  </div>
                </div>
              </li>

              {/* Products Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpenDropdown('products')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('products')}
                  aria-expanded={openDropdown === 'products'}
                  className={linkBase}
                >
                  <span>Products</span>
                  <FaChevronDown
                    className={`text-[10px] text-[#777777] transition-transform duration-200 ${openDropdown === 'products' ? 'rotate-180 text-[#3099D5]' : ''
                      }`}
                  />
                </button>
                <div
                  className={`${openDropdown === 'products' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    } absolute left-0 top-full pt-1.5 w-52 transition-all duration-200 z-50`}
                >
                  <div className="bg-white shadow-lg rounded-md border border-gray-100 py-1.5">
                    <Link href="/engagement-engine" onClick={closeAll} className={dropdownLinkBase}>
                      Engagement Engine
                    </Link>
                    {/* <Link href="/Services" onClick={closeAll} className={dropdownLinkBase}>
                      Problem-Aware Lead Gen
                    </Link>
                    <Link href="/Services" onClick={closeAll} className={dropdownLinkBase}>
                      Data Verification
                    </Link> */}
                  </div>
                </div>
              </li>

              {/* Services Link */}
              <li>
                <Link href="/Services" onClick={closeAll} className={linkBase}>
                  Services
                </Link>
              </li>

              {/* Strategies Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpenDropdown('strategies')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('strategies')}
                  aria-expanded={openDropdown === 'strategies'}
                  className={linkBase}
                >
                  <span>Strategies</span>
                  <FaChevronDown
                    className={`text-[10px] text-[#777777] transition-transform duration-200 ${openDropdown === 'strategies' ? 'rotate-180 text-[#3099D5]' : ''
                      }`}
                  />
                </button>
                <div
                  className={`${openDropdown === 'strategies' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    } absolute left-0 top-full pt-1.5 w-52 transition-all duration-200 z-50`}
                >
                  <div className="bg-white shadow-lg rounded-md border border-gray-100 py-1.5">
                    <Link href="/strategies/content-syndication" onClick={closeAll} className={dropdownLinkBase}>
                      Content Syndication
                    </Link>
                    <Link href="/strategies/account-based-marketing" onClick={closeAll} className={dropdownLinkBase}>
                      Account-Based Marketing
                    </Link>
                    <Link href="/strategies/intent-based-marketing" onClick={closeAll} className={dropdownLinkBase}>
                      Intent-Based Marketing
                    </Link>
                    <Link href="/strategies/event-based-marketing" onClick={closeAll} className={dropdownLinkBase}>
                      Event-Based Marketing
                    </Link>
                  </div>
                </div>
              </li>

              {/* Resources Dropdown */}
              <li
                className="relative"
                onMouseEnter={() => setOpenDropdown('resources')}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('resources')}
                  aria-expanded={openDropdown === 'resources'}
                  className={linkBase}
                >
                  <span>Resources</span>
                  <FaChevronDown
                    className={`text-[10px] text-[#777777] transition-transform duration-200 ${openDropdown === 'resources' ? 'rotate-180 text-[#3099D5]' : ''
                      }`}
                  />
                </button>
                <div
                  className={`${openDropdown === 'resources' ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
                    } absolute left-0 top-full pt-1.5 w-44 transition-all duration-200 z-50`}
                >
                  <div className="bg-white shadow-lg rounded-md border border-gray-100 py-1.5">
                    <Link href="/case-studies" onClick={closeAll} className={dropdownLinkBase}>
                      Case Studies
                    </Link>
                    <Link href="/media-deck" onClick={closeAll} className={dropdownLinkBase}>
                      Media Deck
                    </Link>
                    <Link href="/blogs" onClick={closeAll} className={dropdownLinkBase}>
                      Blogs
                    </Link>
                    <Link href="/events" onClick={closeAll} className={dropdownLinkBase}>
                      Events
                    </Link>
                  </div>
                </div>
              </li>

              {/* Contact Link */}
              <li>
                <Link href="/contact" onClick={closeAll} className={linkBase}>
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Desktop (lg+) Contact CTA + Numbers */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-4 flex-shrink-0">
          <Link
            href="/About"
            className="flex items-center gap-2 bg-[#3099D5] text-white hover:bg-[#16243D] px-4 py-2 rounded-full transition duration-300 font-bold text-[13px] shadow-sm group"
          >
            <FaPhoneAlt className="text-[11px] text-white transition-colors" />
            <span className="uppercase tracking-wide">Let&apos;s Connect</span>
          </Link>
          <div className="flex flex-col text-[12px] xl:text-[13px] text-[#444444] font-semibold leading-tight space-y-1">
            <div className="flex items-center gap-1.5">
              <Image src="/email-signature/V1.png" alt="US" width={18} height={13} className="h-[12px] w-auto inline" />
              <a href="tel:+13022089310" className="hover:text-[#3099D5] transition-colors">
                US: +1 (302)-208-9310
              </a>
            </div>
            <div className="flex items-center gap-1.5">
              <Image src="/email-signature/V2.png" alt="UK" width={18} height={13} className="h-[12px] w-auto inline" />
              <a href="tel:+442071931043" className="hover:text-[#3099D5] transition-colors">
                UK: +44 20 7193 1043
              </a>
            </div>
          </div>
        </div>

        {/* Mobile / Tablet Header Controls (< lg) */}
        <div className="flex lg:hidden items-center gap-3">
          <Link
            href="/About"
            className="flex items-center gap-1.5 border border-[#3099D5] text-[#3099D5] hover:bg-[#3099D5] hover:text-white px-3 py-1 rounded-full text-[12px] font-semibold"
          >
            <FaPhoneAlt className="text-[10px]" />
            <span>Connect</span>
          </Link>
          <button
            className="text-2xl text-[#555555] p-1.5 focus:outline-none"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Navigation (< lg) */}
      <div
        className={`lg:hidden fixed inset-0 top-[60px] bg-black/40 backdrop-blur-sm z-[998] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
          }`}
        onClick={closeAll}
      >
        <div
          className={`bg-white w-full max-h-[calc(100vh-60px)] overflow-y-auto shadow-2xl p-6 transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-4'
            }`}
          onClick={(e) => e.stopPropagation()}
        >
          <ul className="flex flex-col space-y-3 divide-y divide-gray-100">
            <li className="pt-2">
              <Link
                href="/"
                onClick={closeAll}
                className="flex items-center gap-2 text-[#444444] font-semibold text-base py-1"
              >
                <Image src="/images/Home-Icon.png" alt="Home" width={18} height={18} className="w-[18px] h-[18px]" />
                <span>Home</span>
              </Link>
            </li>

            {/* Mobile Company Accordion */}
            <li className="pt-2">
              <button
                onClick={() => toggleMobileDropdown('company')}
                className="flex items-center justify-between w-full text-[#444444] font-semibold text-base py-1"
              >
                <span>Company</span>
                {mobileDropdown === 'company' ? (
                  <FaChevronUp className="text-xs text-[#3099D5]" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-400" />
                )}
              </button>
              {mobileDropdown === 'company' && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#3099D5] py-1 bg-gray-50/50 rounded-r-md">
                  <Link href="/About" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    About Us
                  </Link>
                  <Link href="/our-differentiation" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Our Differentiation
                  </Link>
                  <Link href="/career" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Career
                  </Link>
                  <Link href="/life-at-rdigs" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Life At RDIGS
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Products Accordion */}
            <li className="pt-2">
              <button
                onClick={() => toggleMobileDropdown('products')}
                className="flex items-center justify-between w-full text-[#444444] font-semibold text-base py-1"
              >
                <span>Products</span>
                {mobileDropdown === 'products' ? (
                  <FaChevronUp className="text-xs text-[#3099D5]" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-400" />
                )}
              </button>
              {mobileDropdown === 'products' && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#3099D5] py-1 bg-gray-50/50 rounded-r-md">
                  <Link href="/engagement-engine" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Engagement Engine
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Services */}
            <li className="pt-2">
              <Link
                href="/Services"
                onClick={closeAll}
                className="block text-[#444444] font-semibold text-base py-1"
              >
                Services
              </Link>
            </li>

            {/* Mobile Strategies Accordion */}
            <li className="pt-2">
              <button
                onClick={() => toggleMobileDropdown('strategies')}
                className="flex items-center justify-between w-full text-[#444444] font-semibold text-base py-1"
              >
                <span>Strategies</span>
                {mobileDropdown === 'strategies' ? (
                  <FaChevronUp className="text-xs text-[#3099D5]" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-400" />
                )}
              </button>
              {mobileDropdown === 'strategies' && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#3099D5] py-1 bg-gray-50/50 rounded-r-md">
                  <Link href="/strategies/content-syndication" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Content Syndication
                  </Link>
                  <Link href="/strategies/account-based-marketing" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Account-Based Marketing
                  </Link>
                  <Link href="/strategies/intent-based-marketing" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Intent-Based Marketing
                  </Link>
                  <Link href="/strategies/event-based-marketing" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Event-Based Marketing
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Resources Accordion */}
            <li className="pt-2">
              <button
                onClick={() => toggleMobileDropdown('resources')}
                className="flex items-center justify-between w-full text-[#444444] font-semibold text-base py-1"
              >
                <span>Resources</span>
                {mobileDropdown === 'resources' ? (
                  <FaChevronUp className="text-xs text-[#3099D5]" />
                ) : (
                  <FaChevronDown className="text-xs text-gray-400" />
                )}
              </button>
              {mobileDropdown === 'resources' && (
                <div className="pl-4 mt-2 space-y-2 border-l-2 border-[#3099D5] py-1 bg-gray-50/50 rounded-r-md">
                  <Link href="/case-studies" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Case Studies
                  </Link>
                  <Link href="/media-deck" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Media Deck
                  </Link>
                  <Link href="/blogs" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Blogs
                  </Link>
                  <Link href="/events" onClick={closeAll} className="block text-sm text-[#666666] hover:text-[#3099D5] py-1">
                    Events
                  </Link>
                </div>
              )}
            </li>

            {/* Mobile Contact */}

            <li className="pt-2">
              <Link
                href="/contact"
                onClick={closeAll}
                className="block text-[#444444] font-semibold text-base py-1"
              >
                Contact
              </Link>
            </li>
          </ul>

          {/* Contact Details in Mobile Menu */}
          <div className="mt-6 pt-4 border-t border-gray-200 space-y-2">
            <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Get in touch</p>
            <div className="flex items-center gap-2 text-sm text-[#555555]">
              <Image src="/email-signature/V1.png" alt="US" width={16} height={12} className="h-[11px] w-auto inline" />
              <a href="tel:+13023295310" className="hover:text-[#3099D5]">US: +1 302-329-5310</a>
            </div>
            <div className="flex items-center gap-2 text-sm text-[#555555]">
              <Image src="/email-signature/V2.png" alt="UK" width={16} height={12} className="h-[11px] w-auto inline" />
              <a href="tel:+442075617242" className="hover:text-[#3099D5]">UK: +44 20 75617242</a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
