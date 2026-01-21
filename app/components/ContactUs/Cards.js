import Image from "next/image";
import React from "react";
import { IoLogoInstagram } from "react-icons/io5";
import { RiFacebookCircleLine } from "react-icons/ri";
import { PiLinkedinLogo } from "react-icons/pi";
import Link from "next/link";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: "/contact-us/map.svg",
      alt: "map",
      title: "Visit Us",
      content: (
        <>
          Ivory & Gold Luxury Salon <br />
          4th Floor, 16 & 16/1, Vasanth Nagar, <br />
          Bengaluru, Karnataka 560025
        </>

      ),
    },
    {
      id: 2,
      image: "/contact-us/phone.svg",
      alt: "phone",
      title: "Call Us",
      content: (
        <div className="flex flex-col">
          <a href="tel:+918041200116" className="hover:text-[#d4af37] transition-colors">+91 80 4120 0116</a>
          <a href="tel:+918147401166" className="hover:text-[#d4af37] transition-colors">+91 81 4740 1166</a>
        </div>
      ),
    },
    {
      id: 3,
      image: "/contact-us/mail.svg",
      alt: "mail",
      title: "Write to Us",
      content: (
        <>
          <a href="mailto:contact@ivoryandgold.com">contact@ivoryandgold.com</a>
        </>
      ),
    },
    {
      id: 4,
      image: "/contact-us/clock.svg",
      alt: "clock",
      title: "Hours",
      content: (
        <>
          Monday – Sunday: 10 AM – 8 PM
        </>
      ),
    },
    {
      id: 5,
      image: "/contact-us/follow.svg",
      alt: "follow",
      title: "Follow Us",
      content: (
        <div className="flex items-center justify-center gap-4">
          <Link target="_blank" href="https://www.instagram.com/"><IoLogoInstagram className="text-3xl hover:text-[#D4AF37] duration-300 transition-all" /></Link>
          <Link target="_blank" href="https://www.facebook.com/"><RiFacebookCircleLine className="text-3xl hover:text-[#D4AF37] duration-300 transition-all" /></Link>
          <Link target="_blank" href="https://www.linkedin.com/company/"><PiLinkedinLogo className="text-3xl hover:text-[#D4AF37] duration-300 transition-all" /></Link>

        </div>
      ),
    },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-0 px-4">
        <div className="lg:py-10 grid lg:grid-cols-3 grid-cols-1 items-center justify-center gap-5">
          {cardData.map((card) => (
            <div
              key={card.id}
              className="flex flex-col items-center justify-center gap-4 shadow-lg rounded-lg p-10 lg:h-[400px]"
            >
              <div className="flex flex-col items-center gap-3">
                <Image
                  src={card.image}
                  alt={card.alt}
                  width={70}
                  height={70}
                  className="lg:h-28"
                />
                <h3 className="lg:h-14 text-center">{card.title}</h3>
              </div>
              <div className="text-center lg:h-20 text-xl roboto-light">
                {card.content}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Cards;
