import React from "react";
import ElevatedBeauty from "./ElevatedBeauty";
import Services from "./Services/Services";
import AboutIvory from "./AboutIvory";
import Testimonials from "./Testimonials";
import Elegance from "./Elegance";
import InfluencerSpotlight from "./InfluencerSpotlight/InfluencerSpotlight";
import Contact from "./Contact";
import GentleWelcome from "../Shared/GentleWelcome";
import HeroBanner from "./HeroBanner";
// import Swiper from "./InfluencerSpotlight/Swiper";

const index = () => {
  return (
    <>
      <HeroBanner />
      <ElevatedBeauty />
      <Services />
      <AboutIvory />
      {/* <Testimonials /> */}
      <Elegance />
      {/* <InfluencerSpotlight /> */}
      {/* <Swiper /> */}  
      <Contact />
      <GentleWelcome />
    </>
  )
}

export default index
