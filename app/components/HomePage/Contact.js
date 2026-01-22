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
    
    // Business hours: 10 AM to 10 PM (22:00)
    const isOpen = currentHour >= 10 && currentHour < 22;
    
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
                Near Jain Hospital, Vasanth Nagar, Bengaluru, Karnataka 560025
              </span>
            </h6>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0">
              <CiClock2 className="bg-[#D9D9D9] p-2 rounded-md w-10 h-10 flex items-center justify-center" size={24} />
            </div>
            <h6 className="text-white">
              <span className="lg:text-xl roboto-light">Open until 10:00 PM</span>{" "}
              <span>
                <span className={`${businessStatus.statusColor} underline lg:px-4`}>
                  {businessStatus.status}
                </span>
              </span>
            </h6>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex-shrink-0">
              <CiPhone className="bg-[#D9D9D9] p-2 rounded-md w-10 h-10 flex items-center justify-center" size={24} />
            </div>
            <h6 className="text-white lg:text-xl roboto-light">
              <span >
              <a href="tel:+918041200116" className="hover:text-[#d4af37] transition-colors">+91 80 4120 0116</a> , <a href="tel:+918147401166" className="hover:text-[#d4af37] transition-colors">+91 81 4740 1166</a>
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
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.998156002647!2d77.60210301170989!3d12.971969487290625!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f7d8ccc4207%3A0xbd78d1bf607434a!2siVistaz%20Ecom%20Services%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1718256858925!5m2!1sen!2sin"
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
