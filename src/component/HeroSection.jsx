import React from "react";
import heroImg from "../assets/HeroImg.png";
import { PiArrowDownThin } from "react-icons/pi";
import { HERO_LOGOS } from "../constants/index";

const HeroSection = () => {
  return (
    <section id="home" className="bg-black">
      {/* Image and H1 section */}
      <div className="flex lg:justify-normal lg:items-start md:justify-normal md:items-start justify-center items-center flex-col lg:pl-20 md:pl-8 pl-0 relative h-screen">
        {/* Image container */}
        <div className="absolute top-60 right-8 lg:top-0 lg:right-0 md:top-0 md:right-0 w-full md:w-[70%] flex-1">
          <img
            width={1008}
            height={801}
            src={heroImg}
            alt="HeroImage"
            className="-z-50 object-cover w-full h-full md:w-auto md:h-auto"
          />
        </div>
        {/* Text container */}
        <div className="text-white top-8 lg:mt-20 absolute z-20 text-end md:text-end text-5xl sm:text-5xl lg:text-8xl md:text-7xl">
          <h1>
            Design studio <br />
            for the <br />
            web3 world
          </h1>
        </div>
      </div>
      {/* Arrow and Peraghraph section */}
      <div className="flex -mt-32 mx-8 gap-4 z-20">
        <PiArrowDownThin className="w-10 h-10" />
        <p className="lg:w-[300px] lg:text-base md:text-base text-sm text-white/60">
          We help companies design their products to be ready for web3 world
        </p>
      </div>
      {/* Companies logos and peraghraph */}
      <div className="mt-44  z-20">
        <p className=" my-4 lg:mt-4 lg:mx-20 md:mx-16 mx-9 lg:text-base md:text-base text-sm text-white/60">
          Our clients are backed by:
        </p>
        {/* Hero logos */}
        <div className="flex justify-center lg:mx-6 items-center my-8 lg:gap-10 gap-10 flex-wrap">
          {HERO_LOGOS.map((logo, index) => (
            <img
              key={index}
              src={logo.img}
              alt={logo.alt}
              className="z-50" // Responsive sizes
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
