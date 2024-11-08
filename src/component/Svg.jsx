import React from "react";
import cover from "../assets/Group01.svg";
import cover2 from "../assets/Group02.svg";

const Svg = () => {
  return (
    <div className="relative w-screen h-auto lg:h-screen">
      <img
        src={cover}
        className="absolute xl:w-full h-auto w-auto object-cover top-0"
        alt="cover"
      />
      <img
        src={cover2}
        className="absolute xl:w-full h-auto w-auto object-cover top-0"
        alt="cover"
      />
    </div>
  );
};

export default Svg;
