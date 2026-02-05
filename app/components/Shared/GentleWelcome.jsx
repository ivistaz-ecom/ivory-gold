import { BluetoothConnected } from "lucide-react";
import Link from "next/link";
import React from "react";

const GentleWelcome = () => {
  return (
    <>
      <div className="bg-[#73402C] py-10 flex flex-col justify-center items-center text-white">
        <h2>A Gentle Welcome</h2>
        <h4 className="lg:text-6xl text-3xl roboto-light">
          Enjoy <span className="text-[#FBBC05] font-bold">10%</span> off your
          first visit
        </h4>
        <div className="lg:pt-10 pt-5">
          <Link href="/booking">
            <button className="bg-[#FFFFFF] hover:bg-[#D4AF37] hover:text-white transition-all duration-300 text-black px-4 py-1 rounded-md">
              <p>Book Appointment</p>
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default GentleWelcome;
