'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<null | 'company' | 'strategies' | 'resources'>(null);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScroll, setLastScroll] = useState(0);

  // Detect scroll direction
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll && currentScroll > 100) {
        // scrolling down
        setShowNavbar(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }
      setLastScroll(currentScroll);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScroll]);

  const toggleDropdown = (name: 'company' | 'strategies' | 'resources') => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };

  const closeAll = () => {
    setMenuOpen(false);
    setOpenDropdown(null);
  };

  const linkBase = 'block px-2 py-2 lg:py-0 hover:text-[#3099D5] text-[#606060] font-bold';
  const dropdownLinkBase = 'block px-4 py-2 hover:bg-gray-100 text-[#606060] font-bold';

  return (
    <header
      className={`sticky top-0 z-[999] bg-white shadow-sm transition-transform duration-500 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <nav className="max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-10 py-2 lg:py-3">
        
        {/* Logo - Left */}
        <Link href="/" onClick={closeAll} className="flex items-center">
          <Image
            src="/images/Home-Main-logo.png"
            alt="Logo"
            width={100}
            height={50}
            className="h-[70px] lg:h-[50px] w-auto"
          />
        </Link>

        {/* Middle Menu - Home to Contact */}
        <div className="lg:flex items-center justify-center bg-[#F2F5F9] rounded-md lg:mx-6 w-[700px]" style={{ marginLeft: '-38px' }}>
          <button
            className="lg:hidden text-2xl text-[#606060] p-2"
            onClick={() => {
              setMenuOpen((v) => !v);
              setOpenDropdown(null);
            }}
            aria-label="Toggle menu"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <div className={`${menuOpen ? 'block' : 'hidden'} lg:block w-full`} >
            <ul className="flex flex-col lg:flex-row gap-0 lg:gap-6 p-4">
              <li>
                <Link href="/" onClick={closeAll} className={`${linkBase} flex items-center`}>
                  <Image
                    src="/images/Home-Icon.png"
                    alt="Home"
                    width={23}
                    height={23}
                    className="w-[23px] h-[23px]"
                  />
                </Link>
              </li>

              {/* Company Dropdown */}
              <li className="relative"
                  onMouseEnter={() => !menuOpen && setOpenDropdown('company')}
                  onMouseLeave={() => !menuOpen && setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('company')}
                  aria-expanded={openDropdown === 'company'}
                  className={`${linkBase} flex items-center justify-between`}
                >
                  <span>Company ▾</span>
                </button>
                <div
                  className={`${openDropdown === 'company' ? 'block' : 'hidden'} bg-white lg:absolute lg:left-0 lg:top-full w-full lg:w-40 shadow-md rounded z-50`}
                >
                  <Link href="/About" onClick={closeAll} className={dropdownLinkBase}>About</Link>
                  <Link href="/our-differentiation" onClick={closeAll} className={dropdownLinkBase}>Our Differentiation</Link>
                  <Link href="/career.php" onClick={closeAll} className={dropdownLinkBase}>Career</Link>
                  <Link href="/life.php" onClick={closeAll} className={dropdownLinkBase}>Life At RDIGS</Link>
                </div>
              </li>

              <li>
                <Link href="/ServicePage" onClick={closeAll} className={linkBase}>Services
                </Link>
              </li>

              {/* Strategies Dropdown */}
              <li className="relative"
                  onMouseEnter={() => !menuOpen && setOpenDropdown('strategies')}
                  onMouseLeave={() => !menuOpen && setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('strategies')}
                  aria-expanded={openDropdown === 'strategies'}
                  className={`${linkBase} flex items-center justify-between`}
                >
                  <span>Strategies ▾</span>
                </button>
                <div
                  className={`${openDropdown === 'strategies' ? 'block' : 'hidden'} bg-white lg:absolute lg:left-0 lg:top-full w-full lg:w-52 shadow-md rounded z-50`}
                >
                  <Link href="/b2bdemandgeneration.php" onClick={closeAll} className={dropdownLinkBase}>Content Syndication</Link>
                  <Link href="/abm.php" onClick={closeAll} className={dropdownLinkBase}>Account-Based Marketing</Link>
                  <Link href="/intentbasedmarketing.php" onClick={closeAll} className={dropdownLinkBase}>Intent-Based Marketing</Link>
                  <Link href="/event-basedmarketing.php" onClick={closeAll} className={dropdownLinkBase}>Event-Based Marketing</Link>
                </div>
              </li>

              {/* Resources Dropdown */}
              <li className="relative"
                  onMouseEnter={() => !menuOpen && setOpenDropdown('resources')}
                  onMouseLeave={() => !menuOpen && setOpenDropdown(null)}
              >
                <button
                  onClick={() => toggleDropdown('resources')}
                  aria-expanded={openDropdown === 'resources'}
                  className={`${linkBase} flex items-center justify-between`}
                >
                  <span>Resources ▾</span>
                </button>
                <div
                  className={`${openDropdown === 'resources' ? 'block' : 'hidden'} bg-white lg:absolute lg:left-0 lg:top-full w-full lg:w-40 shadow-md rounded z-50`}
                >
                  <Link href="/casestudies.php" onClick={closeAll} className={dropdownLinkBase}>Case Studies</Link>
                  <Link href="/corporatedesk.php" onClick={closeAll} className={dropdownLinkBase}>Media Deck</Link>
                  <Link href="/blog.php" onClick={closeAll} className={dropdownLinkBase}>Blogs</Link>
                  <Link href="/events.php" onClick={closeAll} className={dropdownLinkBase}>Events</Link>
                </div>
              </li>

              <li><Link href="/contact.php" onClick={closeAll} className={linkBase}>Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Right Side */}
        <div className="hidden xl:flex items-center gap-3">
          <Image
            src="/images/lets-Cannect-2.png"
            alt="Call Button"
            width={100}
            height={60}
            className="h-[60px] w-auto"
          />
          <div className="flex flex-col text-sm text-[#606060] font-bold">
            <a href="tel:+13025600010" className="hover:text-[#3099D5]">
              US: +1 302 560 0010
            </a>
            <a href="tel:+441213686536" className="hover:text-[#3099D5]">
              UK: +44 121 368 6536
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
