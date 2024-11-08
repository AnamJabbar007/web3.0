import React from "react";
import picture from "../assets/help01.png";
import Shapes from "../component/Shapes";

const Career = () => {
  return (
    <section id="career" className="h-screen relative lg:mt-0 mt-60">
      {/* Shapes Positioned on the Left Side with specific top and left values */}
      <div className="-z-50 absolute top-[7%] left-[-120px] rotate-90">
        <Shapes />
      </div>

      <h2 className="text-white font-normal text-left text-4xl md:text-6xl lg:text-8xl mb-6 mx-14 lg:mb-20 relative z-10">
        How we can
        <br />
        help grow
      </h2>
      <div className="grid w-full mx-auto px-20 lg:grid-cols-3 grid-cols-1 gap-10 relative z-10">
        {/* Left Column */}
        <div className="flex flex-col justify-center">
          <h4 className="text-white font-light text-left text-3xl">
            Product clarity
          </h4>
          <div className="flex flex-col justify-center">
            <p className="text-white/60 pl-8 mt-14 font-light text-left text-3xl">
              UX/UI design
            </p>
            <p className="text-white/60 pl-8 mt-14 font-light text-left text-3xl">
              Maintain process
            </p>
          </div>
        </div>

        {/* Center Column with Image */}
        <div className="flex items-center">
          <img src={picture} alt="picture" />
        </div>

        {/* Right Column */}
        <div className="">
          <p className="lg:w-[400px] mx-4 text-white font-light text-left text-2xl">
            Are you at the idea stage? We will help you identify the critical
            MVP product scope.
          </p>
          <p className="text-white/60 pl-8 font-light text-left text-2xl mt-6">
            product goal & vision <br /> brand voice <br /> product positioning
          </p>
        </div>
      </div>
    </section>
  );
};

export default Career;
