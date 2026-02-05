"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const pathName = usePathname();

  // Navigation data
  const navigationItems = [
    { name: "About Us", href: "/about-us" },
    {
      name: "Services",
      href: null,
      isDropdown: true,
      items: [
        { name: "Nails", href: "/nails" },
        { name: "Manicure", href: "/manicure" },
        { name: "Pedicure", href: "/pedicure" },
        { name: "Hair", href: "/hair" },
        { name: "Beauty", href: "/beauty" },
        { name: "Make-up", href: "/make-up" },
      ],
    },
    // { name: "Membership", href: "/membership" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact-us" },
  ];

  // Utility: active + hover underline effect
  const navLinkClass = (href) =>
    `relative block px-1 py-2 text-lg ${
      pathName === href ? "text-white font-bold" : "text-gray-300"
    }`;

  return (
    <header className="bg-black text-white">
      {/* <header className="sticky top-0 z-[100] bg-black text-white"> */}
      {/* Top Bar */}
      <div className="hidden md:flex justify-end text-lg pr-6 py-4">
        <span className="mr-4">Working Hours: 10:00 AM to 9:00 PM</span>
        <span className="mr-4">Call: <a href="tel:+918041200116" className="hover:text-[#d4af37] transition-colors">080 4120 0116</a> , <a href="tel:+918147401166" className="hover:text-[#d4af37] transition-colors">+91 81 4740 1166</a></span>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center justify-center gap-2">
          <Link href="/">
            <Image
              width={150}
              height={150}
              src="/logo.svg"
              alt="Ivory & Gold"
              className="lg:-mt-16 lg:h-auto lg:w-auto h-32 w-32"
            />
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center gap-6">
          {/* Navigation Items */}
          {navigationItems.map((item) => (
            <li
              key={item.href || item.name}
              className="relative group list-none"
            >
              {item.isDropdown ? (
                <>
                  <button className="hover:text-[#d4af37] flex items-center gap-1 text-lg">
                    {item.name} ▾
                  </button>
                  <ul className="absolute z-60 hidden group-hover:block bg-black text-white mt-0 rounded-lg shadow-lg p-2 min-w-[150px]">
                    {item.items.map((service) => (
                      <li
                        key={service.href}
                        className="relative group list-none"
                      >
                        <Link
                          href={service.href}
                          className={navLinkClass(service.href)}
                        >
                          {service.name}
                          <span
                            className={`absolute z-0 left-0 bottom-0 h-[2px] bg-[#d4af37] transform transition-transform duration-200 ease-out ${
                              pathName === service.href
                                ? "scale-x-100"
                                : "scale-x-0 group-hover:scale-x-100"
                            }`}
                            style={{ width: "100%" }}
                          />
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <Link href={item.href} className={navLinkClass(item.href)}>
                  {item.name}
                  <span
                    className={`absolute left-0 bottom-0 h-[2px] bg-[#d4af37] transform transition-transform duration-200 ease-out ${
                      pathName === item.href
                        ? "scale-x-100"
                        : "scale-x-0 group-hover:scale-x-100"
                    }`}
                    style={{ width: "100%" }}
                  />
                </Link>
              )}
            </li>
          ))}

          {/* Button */}
          <Link href="/booking">
            <button className="bg-[#d4af37] hover:bg-white hover:text-black hover:border-[#d4af37] transition-all duration-300 text-black font-medium px-4 py-2 rounded-xl">
              Book Appointment
            </button>
          </Link>
        </nav>

        {/* Mobile Hamburger */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-black text-white px-6 py-4 space-y-4 border-t border-gray-800">
          {/* Working Hours and Call Info */}
          <div className="space-y-2 pb-4 border-b border-gray-800">
            <div className="text-sm">
              <span>Working Hours: 10:00 AM to 8:00 PM</span>
            </div>
            <div className="text-sm">
              <span>Call: </span>
              <a href="tel:+918041200116" className="hover:text-[#d4af37] transition-colors">080 4120 0116</a>
              <span> , </span>
              <a href="tel:+918147401166" className="hover:text-[#d4af37] transition-colors">+91 81 4740 1166</a>
            </div>
          </div>

          {/* Mobile Navigation Items */}
          {navigationItems.map((item) => (
            <div key={item.href || item.name}>
              {item.isDropdown ? (
                <div className="space-y-2">
                  <button
                    className="text-gray-300 font-semibold flex items-center gap-2 w-full text-left"
                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                  >
                    {item.name}
                    <span
                      className={`transform transition-transform duration-200 ${
                        isServicesOpen ? "rotate-180" : ""
                      }`}
                    >
                      ▾
                    </span>
                  </button>
                  {isServicesOpen && (
                    <div className="space-y-2">
                      {item.items.map((service) => (
                        <li
                          key={service.href}
                          className="relative group list-none ml-4"
                        >
                          <Link
                            href={service.href}
                            className="block px-1 py-2 text-gray-300"
                            onClick={() => {
                              setIsOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {service.name}
                          </Link>
                        </li>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <li className="relative group list-none">
                  <Link
                    href={item.href}
                    className="block px-1 py-2 text-gray-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )}
            </div>
          ))}
        </div>
      )}

      {/* Floating Book Appointment Button - Mobile Only */}
      <Link href="/booking" className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 ">
        <button className="bg-[#d4af37] hover:bg-white hover:text-black transition-all duration-300 text-black font-medium px-6 py-3 rounded-full shadow-lg">
          Book Appointment
        </button>
      </Link>
    </header>
  );
};

export default Header;
