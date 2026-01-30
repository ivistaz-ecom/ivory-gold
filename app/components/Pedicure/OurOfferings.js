import React from "react";
import Image from "next/image";
import Link from "next/link";
const OurOfferings = () => {
  const offerings = [
    {
      id: 1,
      title: <h3>Mini Pedicure</h3>,
      description:
        "Quick care that delivers maximum freshness. Shape, buff, and polish for feet that look instantly refined and feel renewed.",
      image: "/pedicure/pedicure-1.png",
      imageAlt: "Gel Extensions & Sculpted Nails",
      imageFirst: true,
    },
    {
      id: 2,
      title: <h3>Bespoke Pedicure</h3>,
      description:
        "Personalised from start to finish, every detail, from cuticle care to polish, is tailored to your needs. A treatment that feels considered, never routine.",
      image: "/pedicure/pedicure-2.png",
      imageAlt: "Soft Gel & Builder Gel",
      imageFirst: false,
    },
    {
      id: 3,
      title: <h3>Spa Pedicure</h3>,
      description:
        "An extended moment of calm. Featuring exfoliation, hydration, massage, and a flawless finish, this indulgence restores softness and balance with lasting effect.",
      image: "/pedicure/pedicure-3.png",
      imageAlt: "Classic French & Chrome Finishes",
      imageFirst: true,
    },
  ];

  return (
    <>
      <div className="container mx-auto lg:px-0 px-4">
        <h2>Our Offerings Include</h2>
      </div>
      {offerings.map((offering) => (
        <div
          key={offering.id}
          className={`container mx-auto flex justify-center items-center gap-10 lg:py-10 py-5 ${
            offering.imageFirst
              ? "flex-col lg:flex-row"
              : "flex-col-reverse lg:flex-row"
          }`}
        >
          {offering.imageFirst ? (
            <>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <Image
                  src={offering.image}
                  alt={offering.imageAlt}
                  width={1000}
                  height={1000}
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <h3>{offering.title}</h3>
                <p className="py-5">{offering.description}</p>
                <Link href="/booking">
                  <button className="text-black bg-[#D4AF37] px-4 py-2 rounded-2xl hover:bg-[#fff] hover:border-[#D4AF37] border transition-all duration-300 text-xl">Book Appointment</button>
                </Link>
              </div>
            </>
          ) : (
            <>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <h3>{offering.title}</h3>
                  <p className="py-5">{offering.description}</p>
                <Link href="/booking">
                  <button className="text-black bg-[#D4AF37] px-4 py-2 rounded-2xl hover:bg-[#fff] hover:border-[#D4AF37] border transition-all duration-300 text-xl">Book Appointment</button>
                </Link>
              </div>
              <div className="lg:w-1/2 w-full lg:px-0 px-4">
                <Image
                  src={offering.image}
                  alt={offering.imageAlt}
                  width={1000}
                  height={1000}
                  className="object-cover rounded-lg"
                />
              </div>
            </>
          )}
        </div>
      ))}
    </>
  );
};

export default OurOfferings;
