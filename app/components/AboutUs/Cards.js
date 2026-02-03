"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Cards = () => {
  const [index, setIndex] = useState(0);
  const intervalRef = useRef(null);

  const cardData = [
    {
      id: 1,
      image: "/about-us/icon-1.svg",
      alt: "crafted",
      title: "Crafted with intention",
      content: (
        <>
          Precision and care define
          <br />
          every detail.
        </>
      ),
    },
    {
      id: 2,
      image: "/about-us/icon-2.svg",
      alt: "luxury",
      title: "Luxury that whispers",
      content: (
        <>
          Plush interiors, premium
          <br />
          products, and a serene ambience.
        </>
      ),
    },
    {
      id: 3,
      image: "/about-us/icon-3.svg",
      alt: "trends",
      title: "Beyond trends",
      content: (
        <>
          A timeless approach that endures,
          <br />
          never fades.
        </>
      ),
    },
    {
      id: 4,
      image: "/about-us/icon-5.svg",
      alt: "design",
      title: "Personalised care",
      content: (
        <>
          From the first detail <br /> to the final polish, <br />{" "}
          everything is attuned to <br /> your comfort.
        </>
      ),
    },
    {
      id: 5,
      image: "/about-us/icon-4.svg",
      alt: "flower",
      title: "Curated for you",
      content: (
        <>
          Each service is bespoke, <br /> designed around you.
        </>
      ),
    },
  ];

  const visibleCount = 3;
  const widthPerCard = 320 + 20; // card width + gap
  const duplicatedData = [...cardData, ...cardData]; // clone for infinite loop

  const nextSlide = () => setIndex((prev) => (prev + 1) % cardData.length);
  const prevSlide = () =>
    setIndex((prev) => (prev - 1 + cardData.length) % cardData.length);

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, []);

  const startAutoPlay = () => {
    stopAutoPlay();
    intervalRef.current = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 4000);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  // Reset seamlessly when reaching end
  useEffect(() => {
    if (index >= cardData.length) {
      setTimeout(() => {
        setIndex(0);
      }, 500); // wait until animation finishes
    }
  }, [index]);

  return (
    <div
      className="container mx-auto lg:px-0 px-4"
      onMouseEnter={stopAutoPlay}
      onMouseLeave={startAutoPlay}
    >
      <div className="lg:py-10 relative">
        {/* Carousel Container - Show exactly 3 cards */}
        <div className="overflow-hidden w-full max-w-[1020px] mx-auto">
          <motion.div
            className="flex gap-5"
            animate={{ x: -index * widthPerCard }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            {duplicatedData.map((card, i) => (
              <div
                key={i} // use index since duplicated
                className="group flex-shrink-0 flex flex-col items-center justify-center gap-4 border border-gray-100 rounded-lg p-10 w-[320px] lg:w-[320px] lg:h-[400px] transition-colors duration-300 hover:bg-[#FBE5C8]"
              >
                <div className="flex flex-col items-center gap-3">
                  <Image
                    src={card.image}
                    alt={card.alt}
                    width={70}
                    height={70}
                    className="bg-[#FBE5C8] group-hover:bg-white rounded-full p-2.5 transition-colors duration-300"
                  />
                  <h5 className="text-3xl font-light wolmer-bold text-center">
                    {card.title}
                  </h5>
                </div>
                <div className="text-center lg:h-20 text-xl roboto-light">
                  {card.content}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Navigation Arrows */}
        <div className="flex gap-4 justify-center mt-8 items-center">
          <button
            onClick={prevSlide}
            className="p-2 lg:absolute w-14 left-0 top-1/2 flex items-center justify-center text-white -translate-y-1/2 rounded-xl border-black hover:bg-white border-2 hover:text-[#D4AF37] hover:border-[#D4AF37] bg-black transition"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 lg:absolute w-14 right-6 top-1/2 flex items-center justify-center text-white  -translate-y-1/2 rounded-xl border-black hover:bg-white border-2 hover:text-[#D4AF37] hover:border-[#D4AF37] bg-black transition"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
