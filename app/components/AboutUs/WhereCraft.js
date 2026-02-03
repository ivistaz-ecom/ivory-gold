"use client";
import Image from "next/image";

export default function CraftCalmSection() {
  return (
    <section className="relative bg-[#E0C389] px-6 md:px-16 lg:px-24 lg:py-16">
      <div className="py-10 flex justify-center">
        <h1 className="text-center font-serif text-xl md:text-2xl text-black leading-snug">
          Where Craft{" "}
          <span className="inline-block align-middle w-32 h-6 bg-black"></span>
          <br />
          Meets Calm
        </h1>
      </div>
      {/* Content Wrapper */}
      <div className="flex justify-center items-center">
        <div className="relative">
          <Image
            src="/about-us/mobile-model.png"
            alt="Luxury Craft"
            width={400}
            height={420}
            className="rounded-lg lg:hidden object-cover"
          />
        </div>
      </div>
      <div className="grid md:grid-cols-2 items-center relative z-10 container mx-auto">
        {/* Left side - Image */}
        <div className="flex justify-center items-center">
          <div className="relative">
            <Image
              src="/about-us/model.png"
              alt="Luxury Craft"
              width={500}
              height={420}
              className="rounded-lg hidden md:block"
            />
          </div>
        </div>

        {/* Right side - Text */}
        <div className="text-left space-y-6 pb-10">
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            In a culture of excess, Ivory & Gold offers a counterpoint: elegance
            in its most composed form.
          </p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          <b>A unisex luxury atelier</b>, we are built on the belief that true beauty isn’t declared, it’s felt. Rooted in the quiet power of refinement, we serve those who seek more than aesthetics: an experience that lingers, subtle yet unforgettable.
          </p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
          Here, luxury is whispers, not shouts. A gleam of polish. A glint of gold. A silence that soothes. Every service is elevated, every gesture refined with craft. We embrace calm over urgency, intention over imitation, because beauty is not about following trends, but about creating standards.
          </p>
          <p className="text-sm md:text-base text-gray-800 leading-relaxed">
            At Ivory & Gold, we curate gracefulness. Each visit is a retreat
            into poise and precision, where artistry meets serenity, and where
            the loudest statement is the one never spoken.
          </p>
        </div>
      </div>

      {/* Decorative Flowers - Overlay */}
      <Image
        src="/about-us/flower.svg"
        alt="Flower Decoration"
        width={120}
        height={120}
        className="absolute left-0 md:-left-7 w-[80px] md:w-[200px] z-20 hidden md:block"
      />
      <Image
        src="/about-us/flower.svg"
        alt="Flower Decoration"
        width={120}
        height={120}
        className="absolute  right-0 md:right-5 w-[80px] md:w-[150px] z-20 hidden md:block"
      />
    </section>
  );
}
