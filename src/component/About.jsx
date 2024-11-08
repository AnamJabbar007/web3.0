import React from "react";
import { PiArrowRightThin } from "react-icons/pi";
import AboutPic1 from "../assets/about01.png";
import AboutPic2 from "../assets/about02.png";
import AboutPic3 from "../assets/about03.png";
import Shape3 from "../assets/about-shape03.svg";
import Shape2 from "../assets/about-shape02.svg";
import Shape1 from "../assets/about-shape01.svg";

const About = () => {
  return (
    <section id="about" className="px-4 py-10 lg:py-20">
      <div className="relative flex flex-col lg:flex-row xl:gap-32 gap-8 justify-center items-center">
        {/* Shape3 positioned behind AboutPic3 */}
        <div className="absolute left-[-10rem] top-[5rem] lg:left-[-18rem] lg:top-[17rem] z-[-1]">
          <img
            src={Shape3}
            alt="shape3"
            className="w-[150px] sm:w-[200px] lg:w-[300px]"
          />
        </div>

        {/* AboutPic1 */}
        <div className="hidden lg:block relative z-10">
          <img
            src={AboutPic1}
            alt="AboutPic1"
            className="w-[80%] sm:w-[300px] lg:w-auto"
          />
        </div>

        {/* About Text Section */}
        <div className="pl-0 lg:pl-12 text-center lg:text-left z-10">
          <h2 className="text-white font-normal text-4xl md:text-6xl lg:text-8xl">
            About
          </h2>
          <p className="text-white/60 font-light text-xl sm:text-2xl w-full lg:w-[530px] mt-4 lg:mt-6">
            Team of product and brand designers that are really passionate about
            blockchain technology and good design. We are not just UI freaks! We
            advocate users for better product experience and common sense.
          </p>
          <div className="flex justify-center lg:justify-start items-center mt-4 lg:mt-6">
            <span className="text-white font-light text-xl sm:text-2xl">
              More about us
            </span>
            <PiArrowRightThin className="w-8 h-6 sm:w-10 sm:h-8 ml-2" />
          </div>
          <div className="lg:hidden flex justify-center items-center mt-10  relative z-10">
            <img
              src={AboutPic1}
              alt="AboutPic1"
              className="w-auto  sm:w-[300px]"
            />
          </div>
          <div className="flex lg:justify-start justify-center items-center mt-10 lg:mt-28 z-10 relative">
            <img
              className="w-[80%] sm:w-[300px] lg:w-auto"
              src={AboutPic2}
              alt="AboutPic2"
            />
          </div>
        </div>

        {/* Shape2 for decoration */}
        <img
          src={Shape1}
          alt="Shape1"
          className="hidden lg:block absolute -top-32 xl:-top-52 xl:right-40 xl:h-auto xl:w-auto  right-14 z-[-1] md:w-[200px] md:h-[200px] w-[250px] h-[250px]"
        />
        <img
          src={Shape2}
          alt="Shape2"
          className="hidden lg:block absolute top-[5rem]  lg:top-[22rem] xl:h-auto xl:w-auto xl:right-12 right-0 z-[-1] w-[250px] h-[250px]"
        />

        {/* AboutPic3 */}
        <div className="flex justify-center items-center mt-10 lg:mt-28 z-10 relative">
          <img
            src={AboutPic3}
            alt="AboutPic3"
            className="w-[80%] sm:w-[300px] lg:w-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
