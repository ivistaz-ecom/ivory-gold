"use client";
import React from "react";
import Image from "next/image";
import { CiLocationOn } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiMail } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";

const Contact = () => {
  // Get current time and check if business is open
  const getBusinessStatus = () => {
    const now = new Date();
    const currentHour = now.getHours();

    // Business hours: 10 AM to 9 PM (21:00)
    const isOpen = currentHour >= 10 && currentHour < 21;

    return {
      isOpen,
      status: isOpen ? "Open Now" : "Closed",
      statusColor: isOpen ? "text-[#D4AF37]" : "text-red-500"
    };
  };

  const businessStatus = getBusinessStatus();

  return (
    <>
      <div className="flex lg:flex-row flex-col justify-center items-center gap-0">
        <div className="lg:w-1/2 w-full">
          <Image
            src="/home/contact/contact.png"
            alt="contact"
            width={1000}
            height={1000}
            className="lg:h-[550px]"
          />
        </div>
        <div className="bg-black  p-10 flex flex-col gap-10 lg:w-1/2 w-full lg:h-[550px]">
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0">
              <CiLocationOn className="bg-[#D9D9D9] p-2 rounded-md w-10 h-10 flex items-center justify-center" size={24} />
            </div>
            <h6 className="text-white lg:text-xl roboto-light">
              <span>
                No.32 Millers Road, Kaverappa Layout, Vasant Nagar Bengaluru, Karnataka 560025
              </span>
            </h6>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0">
              <CiClock2 className="bg-[#D9D9D9] p-2 rounded-md w-10 h-10 flex items-center justify-center" size={24} />
            </div>
            <h6 className="text-white lg:text-xl roboto-light flex items-center gap-3 flex-wrap">
              <span>Open until 9:00 PM </span>
              <span
                className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${businessStatus.isOpen ? "bg-[#D4AF37]/20 text-[#D4AF37]" : "bg-red-500/20 text-red-500"}`}
              >
                {businessStatus.status}
              </span>
            </h6>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0">
              <CiPhone className="bg-[#D9D9D9] p-2 rounded-md w-10 h-10 flex items-center justify-center" size={24} />
            </div>
            <h6 className="text-white lg:text-xl roboto-light">
              <span >
                <a href="tel:+918041200116" className="hover:text-[#d4af37] transition-colors">080 4120 0116</a> , <a href="tel:+918147401166" className="hover:text-[#d4af37] transition-colors">+91 81 4740 1166</a>
              </span>
            </h6>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0">
              <CiMail className="bg-[#D9D9D9] p-2 rounded-md w-10 h-10 flex items-center justify-center" size={24} />
            </div>
            <h6 className="text-white lg:text-xl roboto-light">
              <span>
                <a
                  className=""
                  href="mailto:info@ivoryandgold.com"
                >
                  info@ivoryandgold.com
                </a>
              </span>
            </h6>
          </div>
          <iframe
            className="w-full h-full rounded-md"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.6981876688646!2d77.5948034!3d12.991145699999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae17006f01d7f9%3A0xec5737f2844ac2b9!2sIvory%20%26%20Gold%20-%20Luxury%20Unisex%20Salon!5e0!3m2!1sen!2sin!4v1770272647004!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Contact;
