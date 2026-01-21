"use client";
import Image from "next/image";
import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black border-t border-gray-200">
      <div className=" py-12 grid grid-cols-1 md:grid-cols-4 gap-10 container mx-auto">
        {/* Logo + Address */}
        <div>
          <div className="flex items-center space-x-2 mx-auto justify-center lg:justify-start">
           <a href="/"> <Image src="/logo-black.svg" alt="logo" width={150} height={150} /> </a>
          </div>
          <h6 className="mt-4 text-lg leading-6 font-light text-center lg:text-left">
            4th Floor, 16 & 16/1,
            Vasanth Nagar,<br />
            Bengaluru, Karnataka 560025
          </h6>
        </div>

        {/* Quick Links */}
        <div className="lg:text-left text-center">
          <h3 className="text-lg font-light mb-4 border-b border-gray-200">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/about-us" className="hover:text-gray-600 text-lg font-light">About Us</a></li>
            <li><a href="/membership" className="hover:text-gray-600 text-lg font-light">Membership</a></li>
            <li><a href="/blogs" className="hover:text-gray-600 text-lg font-light">Blogs</a></li>
            <li><a href="/gallery" className="hover:text-gray-600 text-lg font-light">Gallery</a></li>
            <li><a href="/media" className="hover:text-gray-600 text-lg font-light">Media</a></li>
            <li><a href="/influencer-spotlight" className="hover:text-gray-600 text-lg font-light">Influencer Spotlight</a></li>
            {/* <li><a href="/news" className="hover:text-gray-600 text-lg font-light">News</a></li> */}
            <li><a href="/contact-us" className="hover:text-gray-600 text-lg font-light">Contact</a></li>
          </ul>
        </div>

        {/* Services */}
        <div className="lg:text-left text-center">
          <h3 className="text-lg font-light mb-4 border-b border-gray-200">Services</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/nails" className="hover:text-gray-600 text-lg font-light">Nails</a></li>
            <li><a href="/manicure" className="hover:text-gray-600 text-lg font-light">Manicure</a></li>
            <li><a href="/pedicure" className="hover:text-gray-600 text-lg font-light">Pedicure</a></li>
            <li><a href="/hair" className="hover:text-gray-600 text-lg font-light">Hair</a></li>
            <li><a href="/beauty" className="hover:text-gray-600 text-lg font-light">Beauty</a></li>
            <li><a href="/make-up" className="hover:text-gray-600 text-lg font-light">Makeup</a></li>
          </ul>
        </div>

        {/* CTA + Social */}
        <div className="flex flex-col items-center lg:items-start space-y-6 lg:pt-14">
          <a
            href="/booking"
            className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-900 transition"
          >
            Book Appointment
          </a>
          <div className="flex flex-col items-center space-y-6 lg:items-start">
            <h3 className="text-lg font-light mb-3 wolmer-light">Social Media</h3>
            <div className="flex space-x-4 text-2xl">
              <a href="#"><FaInstagram className="hover:text-gray-600" /></a>
              <a href="#"><FaFacebook className="hover:text-gray-600" /></a>
              <a href="#"><FaLinkedin className="hover:text-gray-600" /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-black text-white text-center text-sm py-4 px-4">
        <span className="mr-2">Terms & Conditions</span>{" "}  <span className="mx-2 text-[#D4AF37]">|</span>{" "}
        <span className="">Privacy Policy</span>  <span className="mx-2 text-[#D4AF37]">|</span>
        <span className="ml-2">© {new Date().getFullYear()} Ivory & Gold</span>
      </div>
    </footer>
  );
}
