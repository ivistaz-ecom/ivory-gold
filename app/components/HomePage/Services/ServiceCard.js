"use client";
import React from "react";

const ServiceCard = ({ image, title, description, bgColor, cardHeight }) => {
  return (
    <div
      className={`relative w-full ${cardHeight} overflow-hidden group`}
      style={{
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div
        className="absolute inset-0 transition-all duration-500 bg-[rgba(246,232,177,0.9)] 
        group-hover:bg-[rgba(246,232,177,0.3)]"
      ></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-black transition-all duration-500 ease-in-out group-hover:text-white group-hover:translate-y-24 group-hover:bg-gradient-to-b group-hover:from-/10 group-hover:via-/50 group-hover:to-[#7E4D37]/90">
        <h3 className="text-3xl font-light mb-2">{title}</h3>
        <h6 className="text-xl roboto-light p-2">{description}</h6>
      </div>
    </div>
  );
};

export default function Services() {
  return (
    <>
      <div>
        <div className="grid grid-cols-1 md:grid-cols-1 gap-2 p-0">
          <ServiceCard
            image="/home/services/nail.png"
            title="Nail"
            description="From soft accents to statement sets. Always tailored, always you."
            bgColor="rgba(246, 232, 177)"
            cardHeight="h-[500px]"
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2 p-2">
          <ServiceCard
            image="/home/services/manicure.png"
            title="Manicure"
            description="Every detail, shaped with intention, one fingertip at a time."
            bgColor="rgba(246, 232, 177)"
            cardHeight="h-[400px]"
          />
          <ServiceCard
            image="/home/services/pedicure.jpg"
            title="Pedicure"
            description="A quiet reset for tired feet. Ritual, relief, and polish that lasts."
            bgColor="rgba(255, 253, 209)"
            cardHeight="h-[400px]"
          />
          <ServiceCard
            image="/home/services/hair.png"
            title="Hair"
            description="Cut, colour, or transformation. Your hair, styled to refined perfection."
            bgColor="rgba(246, 232, 177)"
            cardHeight="h-[400px]"
          />
          <ServiceCard
            image="/home/services/beauty.png"
            title="Beauty"
            description="Subtle corrections, soft finishes. Always artful, never overdone."
            bgColor="rgba(255, 253, 209)"
            cardHeight="h-[400px]"
          />
          <ServiceCard
            image="/home/services/make-up.png"
            title="Make-up"
            description="Soft glam or spotlight bold, looks that hold their own."
            bgColor="rgba(246, 232, 177)"
            cardHeight="h-[400px]"
          />
        </div>
      </div>
    </>
  );
}
