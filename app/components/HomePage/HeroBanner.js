import React from "react";

const HeroBanner = () => {
  return (
    <>
      {/* Desktop */}
      <div className="hidden lg:block lg:h-[85vh] w-full bg-black">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/ivory-gold/Jan-2026/home-banner/Ivory-gold-desk-banner.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Mobile */}
      <div className="block lg:hidden h-[80vh] w-full bg-black">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source
            src="https://ivista-digital-bucket.blr1.cdn.digitaloceanspaces.com/ivory-gold/Jan-2026/home-banner/Ivory-gold-mob-banner.mp4"
            type="video/mp4"
          />
        </video>
      </div>
    </>
  );
};

export default HeroBanner;
